import { useEffect, useRef, useState } from 'react'
import { terminalHelp } from '../data/content'

const WELCOME = [
  "junaid@portfolio:~$ Welcome. Type 'help' to see what this does.",
]

function helpText() {
  return terminalHelp.map((h) => `  ${h.cmd.padEnd(18, ' ')} ${h.desc}`).join('\n')
}

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState(WELCOME)
  const [value, setValue] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const run = (raw) => {
    const cmd = raw.trim()
    if (!cmd) return
    setLines((prev) => [...prev, { text: cmd, cmd: true }])

    const key = cmd.toLowerCase()
    if (key === 'help') {
      setLines((prev) => [...prev, helpText()])
    } else if (key === 'clear') {
      setLines([])
    } else if (['about', 'experience', 'projects', 'skills', 'contact'].includes(key)) {
      scrollTo(key)
      setLines((prev) => [...prev, `→ scrolling to #${key}`])
    } else if (key === 'resume' || key === 'cv') {
      window.open('/Junaid_Aslam_Resume.pdf', '_blank')
      setLines((prev) => [...prev, '→ opening résumé in a new tab'])
    } else if (key === 'upwork') {
      window.open('https://www.upwork.com/freelancers/~01e3372ae04f24797d', '_blank')
      setLines((prev) => [...prev, '→ opening Upwork profile in a new tab'])
    } else if (key === 'whoami') {
      setLines((prev) => [...prev, 'a recruiter with good taste, obviously'])
    } else if (key === 'sudo hire junaid') {
      setLines((prev) => [
        ...prev,
        { text: 'permission granted.', accent: true },
        "spinning up onboarding docs... just kidding, but here's my email:",
        { text: 'junaidaslam.muet@gmail.com', accent: true },
      ])
    } else {
      setLines((prev) => [...prev, `command not found: ${cmd}. try 'help'.`])
    }
  }

  return (
    <>
      {!open && (
        <button className="terminal-toggle mono" onClick={() => setOpen(true)}>
          <span className="blink">●</span> terminal
        </button>
      )}

      {open && (
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span>junaid@portfolio: zsh</span>
            <button className="terminal-close" onClick={() => setOpen(false)} aria-label="Close terminal">
              ×
            </button>
          </div>
          <div className="terminal-body" ref={bodyRef}>
            {lines.map((line, i) => {
              const obj = typeof line === 'string' ? { text: line } : line
              const cls = `terminal-line${obj.cmd ? ' cmd' : ''}${obj.accent ? ' accent' : ''}`
              return (
                <div className={cls} key={i}>
                  {obj.text}
                </div>
              )
            })}
          </div>
          <form
            className="terminal-input-row"
            onSubmit={(e) => {
              e.preventDefault()
              run(value)
              setValue('')
            }}
          >
            <span className="terminal-prompt">$</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  run(value)
                  setValue('')
                }
              }}
              autoComplete="off"
              spellCheck="false"
              placeholder="type 'help'"
            />
          </form>
        </div>
      )}
    </>
  )
}
