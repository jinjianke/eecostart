import { ArrowDown, CalendarDays, CloudSun, Compass, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { SearchHistoryItem } from '../types'
import { SearchBox, SearchHint } from './SearchBox'

interface HeroProps {
  history: SearchHistoryItem[]
  onHistoryChange: (history: SearchHistoryItem[]) => void
}

export function Hero({ history, onHistoryChange }: HeroProps) {
  const [now, setNow] = useState(new Date())
  const [quote, setQuote] = useState('去发现，去创造，去抵达尚未命名的明天。')
  const [weather, setWeather] = useState('探索模式已就绪')

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    fetch('https://v1.hitokoto.cn/?c=a&c=d&c=i&c=k')
      .then((res) => res.json())
      .then((data: { hitokoto?: string }) => data.hitokoto && setQuote(data.hitokoto))
      .catch(() => undefined)
    const city = localStorage.getItem('weatherCity')
    if (city) {
      fetch(`https://wttr.in/${encodeURIComponent(city)}?format=%t+%c&lang=zh`)
        .then((res) => res.text())
        .then((text) => setWeather(`${city} ${text.trim()}`))
        .catch(() => undefined)
    }
    return () => window.clearInterval(timer)
  }, [])

  const dateLabel = now.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' })
  const timeLabel = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })

  return (
    <section id="home" className="relative flex min-h-[820px] items-center overflow-hidden bg-[#f7f8ff] pt-24 text-slate-950 dark:bg-[#071129] dark:text-white sm:min-h-[860px]">
      <div className="hero-ambient absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.12)_0%,rgba(255,255,255,.08)_42%,rgba(238,241,255,.68)_100%)] dark:bg-[linear-gradient(180deg,rgba(4,11,30,.18)_0%,rgba(4,11,30,.05)_42%,rgba(4,11,30,.72)_100%)]" aria-hidden="true" />
      <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-violet/20 blur-[120px] dark:bg-violet/15" aria-hidden="true" />
      <div className="absolute right-[12%] top-[18%] h-80 w-80 rounded-full bg-cyan/15 blur-[110px] dark:bg-cyan/10" aria-hidden="true" />
      <div className="absolute bottom-[-8rem] left-[38%] h-96 w-96 rounded-full bg-blue-600/15 blur-[130px] dark:bg-blue-600/10" aria-hidden="true" />
      <div className="particle-field absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="max-w-[880px] text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet/15 bg-white/65 px-4 py-2 text-[11px] font-bold tracking-[.18em] text-violet shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-white/[.08] dark:text-white/80">
            <Sparkles size={14} className="text-sakura" /> AI ERA NAVIGATION · 2.0
          </div>
          <h1 className="text-balance text-[42px] font-black leading-[1.1] tracking-[-.045em] sm:text-6xl lg:text-[76px]">
            探索 AI 时代的<br /><span className="bg-gradient-to-r from-[#111936] via-[#4f46b8] to-[#0891b2] dark:from-white dark:via-[#dfe4ff] dark:to-[#9feaff] bg-clip-text text-transparent">无限可能</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] font-medium leading-8 text-slate-600 dark:text-blue-100/90 sm:text-lg lg:mx-0">精选全球 AI 工具、开发资源与互联网服务。<br className="hidden sm:block" />让每一次搜索，都成为通往新世界的坐标。</p>

          <div className="mt-10 lg:pr-12">
            <SearchBox history={history} onHistoryChange={onHistoryChange} />
            <SearchHint />
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-xs lg:justify-start">
            <span className="info-chip"><CalendarDays size={14} /> {dateLabel} · {timeLabel}</span>
            <span className="info-chip"><CloudSun size={14} /> {weather}</span>
            <span className="info-chip max-w-[360px] truncate"><Compass size={14} /> 「{quote}」</span>
          </div>
        </motion.div>
      </div>

      <a href="#ai-tools" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-bold tracking-[.2em] text-slate-400 transition hover:text-violet dark:text-white/45 dark:hover:text-white">
        SCROLL <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  )
}

