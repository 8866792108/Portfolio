'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react'

const PROMPT = 'sanjay@portfolio:~$'

const commands: Record<string, { text: string; color?: string }[][]> = {
  help: [
    [{ text: 'Available commands:', color: 'text-emerald-400' }],
    [],
    [{ text: '  whoami    ', color: 'text-yellow-400' }, { text: '— About Sanjay Madta' }],
    [{ text: '  skills    ', color: 'text-yellow-400' }, { text: '— Technical skills' }],
    [{ text: '  projects  ', color: 'text-yellow-400' }, { text: '— Featured projects' }],
    [{ text: '  experience', color: 'text-yellow-400' }, { text: '— Work experience' }],
    [{ text: '  contact   ', color: 'text-yellow-400' }, { text: '— Contact information' }],
    [{ text: '  clear     ', color: 'text-yellow-400' }, { text: '— Clear terminal' }],
    [],
  ],
  whoami: [
    [{ text: 'Sanjay Madta', color: 'text-white font-bold' }],
    [{ text: '─────────────────────────────────', color: 'text-zinc-600' }],
    [],
    [{ text: 'Role:     ', color: 'text-blue-400' }, { text: 'Full-Stack Developer & AI/ML Engineer' }],
    [{ text: 'Location: ', color: 'text-blue-400' }, { text: 'Surat, Gujarat, India' }],
    [{ text: 'Company:  ', color: 'text-blue-400' }, { text: 'Inaiverse Private Limited' }],
    [],
    [{ text: 'Building AI-powered educational platforms and' }],
    [{ text: 'scalable intelligent systems.' }],
    [],
  ],
  skills: [
    [{ text: 'Technical Skills', color: 'text-white font-bold' }],
    [{ text: '─────────────────────────────────', color: 'text-zinc-600' }],
    [],
    [{ text: 'Languages  ', color: 'text-blue-400' }, { text: 'Python  JavaScript  TypeScript' }],
    [{ text: 'Frontend   ', color: 'text-blue-400' }, { text: 'React.js  Next.js  Tailwind CSS' }],
    [{ text: 'Backend    ', color: 'text-blue-400' }, { text: 'FastAPI  Node.js  Express.js' }],
    [{ text: 'AI / ML    ', color: 'text-blue-400' }, { text: 'LangChain  LangGraph  HuggingFace' }],
    [{ text: 'Databases  ', color: 'text-blue-400' }, { text: 'MongoDB  PostgreSQL  MySQL' }],
    [],
  ],
  projects: [
    [{ text: 'Featured Projects', color: 'text-white font-bold' }],
    [{ text: '─────────────────────────────────', color: 'text-zinc-600' }],
    [],
    [{ text: '01  ', color: 'text-emerald-400' }, { text: 'EdinAI', color: 'text-white' }, { text: ' — AI-Powered Educational Platform' }],
    [{ text: '    React.js + FastAPI + LangChain', color: 'text-zinc-500' }],
    [],
    [{ text: '02  ', color: 'text-emerald-400' }, { text: 'EV Charging System', color: 'text-white' }, { text: ' — Real-time tracking' }],
    [{ text: '    Node.js + MongoDB + React', color: 'text-zinc-500' }],
    [],
    [{ text: '03  ', color: 'text-emerald-400' }, { text: 'MDL Coaching System', color: 'text-white' }, { text: ' — MERN Stack' }],
    [{ text: '    Student performance analytics', color: 'text-zinc-500' }],
    [],
  ],
  experience: [
    [{ text: 'Work Experience', color: 'text-white font-bold' }],
    [{ text: '─────────────────────────────────', color: 'text-zinc-600' }],
    [],
    [{ text: 'Full-Stack & AI/ML Engineer', color: 'text-yellow-400' }],
    [{ text: 'Inaiverse Private Limited  ', color: 'text-zinc-400' }, { text: '2025 – 2026', color: 'text-zinc-500' }],
    [],
    [{ text: '  • Developing AI-powered features for EdinAI' }],
    [{ text: '  • Implementing NLP pipelines and ML models' }],
    [{ text: '  • Building full-stack applications' }],
    [],
    [{ text: 'Full-Stack Developer', color: 'text-yellow-400' }],
    [{ text: 'Academic Projects           ', color: 'text-zinc-400' }, { text: '2023 – 2025', color: 'text-zinc-500' }],
    [],
    [{ text: '  • Designed responsive user interfaces' }],
    [{ text: '  • Built robust backend systems' }],
    [],
  ],
  contact: [
    [{ text: 'Contact Information', color: 'text-white font-bold' }],
    [{ text: '─────────────────────────────────', color: 'text-zinc-600' }],
    [],
    [{ text: 'Email       ', color: 'text-blue-400' }, { text: 'sanjaychilgani119@gmail.com' }],
    [{ text: 'GitHub      ', color: 'text-blue-400' }, { text: 'https://github.com/8866792108' }],
    [{ text: 'LinkedIn    ', color: 'text-blue-400' }, { text: 'https://www.linkedin.com/in/sanjay-madta-2187082b6/' }],
    [{ text: 'HuggingFace ', color: 'text-blue-400' }, { text: 'https://huggingface.co/sanjaykz' }],
    [],
    [{ text: 'Feel free to reach out!', color: 'text-emerald-400' }],
    [],
  ],
}

type HistoryEntry =
  | { type: 'welcome' }
  | { type: 'command'; cmd: string; output: { text: string; color?: string }[][] }

export function TerminalSection() {
  const ref = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [history, setHistory] = useState<HistoryEntry[]>([{ type: 'welcome' }])
  const [focused, setFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd) return

    const cmdLower = cmd.toLowerCase()
    setCmdHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)
    setInput('')

    if (cmdLower === 'clear') {
      setHistory([])
      return
    }

    const output = commands[cmdLower] ?? [
      [{ text: `bash: ${cmd}: command not found`, color: 'text-red-400' }],
      [{ text: 'Type ', color: 'text-zinc-500' }, { text: 'help', color: 'text-yellow-400' }, { text: ' to see available commands.', color: 'text-zinc-500' }],
      [],
    ]

    setHistory(prev => [...prev, { type: 'command', cmd, output }])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1)
      setHistoryIndex(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = historyIndex - 1
      if (next < 0) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(next)
        setInput(cmdHistory[next] ?? '')
      }
    }
  }

  useEffect(() => {
    if (bottomRef.current) {
      const container = bottomRef.current.parentElement
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }
  }, [history])

  const focusInput = () => inputRef.current?.focus()

  return (
    <section ref={ref} id="terminal" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <TerminalIcon className="inline-block w-4 h-4 mr-2" />
            Interactive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Try the </span>
            <span className="gradient-text">Terminal</span>
          </h2>
          <p className="text-zinc-400">Explore my portfolio through the command line</p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={focusInput}
          className="rounded-xl overflow-hidden cursor-text border border-zinc-700/50 shadow-2xl shadow-black/60"
          style={{ background: '#1a1a1a' }}
        >
          {/* Title bar — macOS style */}
          <div className="flex items-center gap-0 px-4 py-3 border-b border-zinc-800" style={{ background: '#2a2a2a' }}>
            <div className="flex items-center gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 cursor-pointer" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-zinc-400 font-mono select-none">sanjay@portfolio — bash — 80×24</span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            className="p-4 h-[420px] overflow-y-auto font-mono text-sm leading-relaxed select-text"
            style={{ background: '#1a1a1a', color: '#d4d4d4' }}
          >
            {history.map((entry, i) => (
              <div key={i}>
                {entry.type === 'welcome' && (
                  <div className="mb-3">
                    <div className="text-emerald-400">Welcome to Sanjay&apos;s Terminal!</div>
                    <div className="text-zinc-500">Type <span className="text-yellow-400">help</span> to see available commands.</div>
                    <div className="mt-1" />
                  </div>
                )}

                {entry.type === 'command' && (
                  <div className="mb-1">
                    {/* Prompt line with command */}
                    <div className="flex items-center flex-wrap gap-0">
                      <span className="text-emerald-400 mr-1">sanjay@portfolio</span>
                      <span className="text-zinc-500 mr-1">:</span>
                      <span className="text-blue-400 mr-1">~</span>
                      <span className="text-zinc-300 mr-2">$</span>
                      <span className="text-white">{entry.cmd}</span>
                    </div>
                    {/* Output */}
                    <div className="mt-1 mb-3">
                      {entry.output.map((line, j) => (
                        <div key={j} className="min-h-[1.25rem]">
                          {line.length === 0
                            ? <span>&nbsp;</span>
                            : line.map((seg, k) => (
                                <span key={k} className={seg.color ?? 'text-zinc-400'}>{seg.text}</span>
                              ))
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Active input line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-emerald-400 mr-1 shrink-0">sanjay@portfolio</span>
              <span className="text-zinc-500 mr-1 shrink-0">:</span>
              <span className="text-blue-400 mr-1 shrink-0">~</span>
              <span className="text-zinc-300 mr-2 shrink-0">$</span>

              {/* Fake visible input with block cursor */}
              <div className="relative flex items-center flex-1 min-w-0">
                {/* Hidden real input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="absolute inset-0 opacity-0 w-full outline-none bg-transparent"
                  autoComplete="off"
                  spellCheck={false}
                  autoCapitalize="off"
                />
                {/* Visible text + block cursor */}
                <span className="text-white whitespace-pre">{input}</span>
                <motion.span
                  animate={{ opacity: focused ? [1, 0, 1] : 1 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block w-[0.55em] h-[1.1em] bg-zinc-300 align-middle ml-px"
                  style={{ marginTop: '1px' }}
                />
                {/* Placeholder when empty */}
                {input === '' && (
                  <span className="absolute left-0 text-zinc-600 pointer-events-none select-none" style={{ marginLeft: '0.6em' }}>
                    type a command...
                  </span>
                )}
              </div>
            </form>

            <div ref={bottomRef} />
          </div>
        </motion.div>

        {/* Quick command chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {Object.keys(commands).map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd)
                inputRef.current?.focus()
              }}
              className="px-3 py-1.5 text-xs font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 rounded-md hover:bg-zinc-700/60 hover:text-white hover:border-zinc-600 transition-all"
            >
              {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
