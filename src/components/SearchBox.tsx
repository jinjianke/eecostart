import { Check, ChevronDown, Clock3, Search, Sparkles, Trash2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { searchEngines } from '../data/searchEngines'
import type { SearchHistoryItem } from '../types'

interface SearchBoxProps {
  history: SearchHistoryItem[]
  onHistoryChange: (history: SearchHistoryItem[]) => void
}

export function SearchBox({ history, onHistoryChange }: SearchBoxProps) {
  const [engineId, setEngineId] = useState(() => localStorage.getItem('searchEngine') || 'baidu')
  const [query, setQuery] = useState('')
  const [engineOpen, setEngineOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const engine = useMemo(() => searchEngines.find((item) => item.id === engineId) ?? searchEngines[0], [engineId])

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setEngineOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const runSearch = (rawQuery: string) => {
    const keyword = rawQuery.trim()
    if (!keyword) return
    const next = [{ keyword, timestamp: Date.now() }, ...history.filter((item) => item.keyword !== keyword)].slice(0, 10)
    onHistoryChange(next)
    window.location.href = engine.buildUrl(keyword)
  }

  const submit = (event?: React.FormEvent) => {
    event?.preventDefault()
    runSearch(query)
  }

  const pickEngine = (id: string) => {
    setEngineId(id)
    localStorage.setItem('searchEngine', id)
    setEngineOpen(false)
  }

  return (
    <div ref={boxRef} className="relative z-20 mx-auto w-full max-w-[820px]">
      <form onSubmit={submit} className="group relative flex min-h-[66px] items-center rounded-[22px] border border-white/55 bg-white/[.96] p-1.5 shadow-[0_22px_60px_rgba(5,10,35,.25),0_0_0_1px_rgba(135,120,255,.08)] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_26px_80px_rgba(5,10,35,.3),0_0_40px_rgba(121,107,255,.2)] dark:border-white/10 dark:bg-[#0b1530]/95">
        <button type="button" onClick={() => setEngineOpen((open) => !open)} className="flex h-[54px] shrink-0 items-center gap-2 rounded-[17px] px-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10 sm:min-w-[128px] sm:px-4" aria-expanded={engineOpen}>
          <span className="grid h-8 w-8 place-items-center rounded-xl text-xs font-black text-white shadow-sm" style={{ backgroundColor: engine.color }}>{engine.shortName}</span>
          <span className="hidden sm:inline">{engine.name}</span>
          <ChevronDown size={15} className={`hidden text-slate-400 transition sm:block ${engineOpen ? 'rotate-180' : ''}`} />
        </button>
        <span className="h-7 w-px bg-slate-200 dark:bg-white/10" />
        <Search size={21} className="ml-3 shrink-0 text-slate-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => window.setTimeout(() => setFocused(false), 160)} placeholder="搜索 AI 工具、开发资源或任何想知道的事..." className="min-w-0 flex-1 bg-transparent px-3 text-[15px] font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white sm:text-base" aria-label="搜索关键词" />
        <button type="submit" className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[17px] bg-gradient-to-br from-violet to-[#6554f5] text-white shadow-[0_12px_30px_rgba(111,92,246,.35)] transition hover:scale-[1.03] hover:shadow-[0_16px_38px_rgba(111,92,246,.45)] focus:outline-none focus:ring-2 focus:ring-violet/50 sm:w-auto sm:px-6">
          <Search size={20} /><span className="ml-2 hidden font-bold sm:inline">探索</span>
        </button>
      </form>

      <AnimatePresence>
        {engineOpen && (
          <motion.div initial={{ opacity: 0, y: 8, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: .98 }} className="absolute left-0 top-[76px] w-[min(360px,92vw)] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1530]/95">
            {(['国内', '国外'] as const).map((region) => (
              <div key={region} className="p-2">
                <div className="mb-2 px-2 text-[10px] font-extrabold tracking-[.2em] text-slate-400">{region}搜索</div>
                <div className="grid grid-cols-2 gap-1">
                  {searchEngines.filter((item) => item.region === region).map((item) => (
                    <button key={item.id} type="button" onClick={() => pickEngine(item.id)} className="flex items-center gap-2 rounded-xl px-2.5 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-violet/8 dark:text-slate-200 dark:hover:bg-white/8">
                      <span className="grid h-7 w-7 place-items-center rounded-lg text-[10px] font-black text-white" style={{ background: item.color }}>{item.shortName}</span>
                      <span className="flex-1 truncate">{item.name}</span>
                      {item.id === engine.id && <Check size={14} className="text-violet" />}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {focused && history.length > 0 && !engineOpen && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute inset-x-0 top-[76px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-2 text-left shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1530]/95">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="flex items-center gap-2 text-xs font-bold text-slate-500"><Clock3 size={14} /> 最近搜索</span>
              <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => onHistoryChange([])} className="text-xs font-semibold text-slate-400 hover:text-rose-500">清空</button>
            </div>
            {history.slice(0, 6).map((item) => (
              <div key={item.keyword} className="group/history flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/7">
                <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => { setQuery(item.keyword); runSearch(item.keyword) }} className="flex-1 truncate text-left text-sm font-medium text-slate-700 dark:text-slate-200">{item.keyword}</button>
                <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => onHistoryChange(history.filter((h) => h.keyword !== item.keyword))} className="text-slate-300 opacity-0 transition hover:text-rose-500 group-hover/history:opacity-100"><Trash2 size={14} /></button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const hotLinks = [
  { label: 'DeepSeek', sectionId: 'ai-tools', group: 'AI聊天' },
  { label: 'AI 编程', sectionId: 'ai-tools', group: 'AI编程' },
  { label: '图片生成', sectionId: 'ai-tools', group: 'AI绘画' },
  { label: '前端开发', sectionId: 'dev-tools', group: '代码编辑' },
]

export function SearchHint() {
  const navigateToCategory = (sectionId: string, group: string) => {
    window.dispatchEvent(new CustomEvent('eeco:navigate-category', { detail: { sectionId, group } }))
    window.requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[12px] font-medium text-slate-500 dark:text-white/65 sm:gap-3">
      <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-sakura" /> 热门：</span>
      {hotLinks.map((item) => (
        <button key={item.label} type="button" onClick={() => navigateToCategory(item.sectionId, item.group)} className="rounded-full border border-slate-200 bg-white/55 px-2.5 py-1 text-slate-600 transition hover:-translate-y-0.5 hover:border-violet/30 hover:bg-white hover:text-violet dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80">
          {item.label}
        </button>
      ))}
    </div>
  )
}
