import { useEffect, useMemo, useState } from 'react'
import { AddLinkModal } from './components/AddLinkModal'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { UtilityDock } from './components/UtilityDock'
import { classicWebsites } from './data/websites'
import { useLocalStorage } from './hooks/useLocalStorage'
import { AboutPage } from './pages/AboutPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { HomePage } from './pages/HomePage'
import type { TodoItem, Website } from './types'

interface LegacyLink { name: string; url: string; custom?: boolean }
type CustomLinks = Record<string, LegacyLink[]>

type PageName = 'home' | 'about' | 'changelog'

function pageFromPath(pathname: string): PageName {
  const normalized = pathname.toLowerCase().replace(/\/$/, '')
  if (normalized.endsWith('/about') || normalized.endsWith('/about.html')) return 'about'
  if (normalized.endsWith('/changelog') || normalized.endsWith('/changelog.html')) return 'changelog'
  return 'home'
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'enabled' || window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [modalOpen, setModalOpen] = useState(false)
  const [customLinks, setCustomLinks] = useLocalStorage<CustomLinks>('customLinks', {})
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', [])
  const [customBg, setCustomBg] = useState(() => localStorage.getItem('customBg'))
  const page = pageFromPath(window.location.pathname)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('darkMode', dark ? 'enabled' : 'disabled')
  }, [dark])

  useEffect(() => {
    const titles: Record<PageName, string> = {
      home: 'EECO导航｜探索 AI 时代的无限可能',
      about: '关于 EECO导航｜AI 时代综合资源入口',
      changelog: '更新日志｜EECO导航',
    }
    document.title = titles[page]
  }, [page])

  const classicWithCustom = useMemo(() => {
    const custom: Website[] = Object.entries(customLinks).flatMap(([category, links]) => links.map((link, index) => ({
      id: `custom-${category}-${link.name}-${index}`,
      name: link.name,
      url: link.url,
      description: '我的自定义网址',
      tags: ['自定义'],
      category,
      group: '经典导航' as const,
      icon: link.name.slice(0, 2),
      accent: '#7668f7',
      custom: true,
    })))
    return [...classicWebsites, ...custom]
  }, [customLinks])

  const categories = useMemo(() => Array.from(new Set(classicWithCustom.map((site) => site.category))), [classicWithCustom])

  const saveCustom = (name: string, url: string, category: string) => {
    setCustomLinks({ ...customLinks, [category]: [...(customLinks[category] ?? []), { name, url, custom: true }] })
  }

  const deleteCustom = (category: string, name: string) => {
    const next = { ...customLinks }
    next[category] = (next[category] ?? []).filter((link) => link.name !== name)
    if (!next[category].length) delete next[category]
    setCustomLinks(next)
  }

  const updateBackground = (dataUrl: string) => {
    setCustomBg(dataUrl)
    localStorage.setItem('customBg', dataUrl)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f9ff] text-slate-900 transition-colors dark:bg-[#071129] dark:text-white" style={customBg ? { '--custom-background': `url(${customBg})` } as React.CSSProperties : undefined}>
      {customBg && <div className="pointer-events-none fixed inset-0 z-0 bg-[image:var(--custom-background)] bg-cover bg-center opacity-[.035] dark:opacity-[.055]" />}
      <div className="relative z-10">
        <Navbar dark={dark} onToggleTheme={() => setDark((value) => !value)} onAddLink={() => setModalOpen(true)} />
        {page === 'home' && <HomePage websites={classicWithCustom} onAddLink={() => setModalOpen(true)} onDeleteCustom={deleteCustom} />}
        {page === 'about' && <AboutPage />}
        {page === 'changelog' && <ChangelogPage />}
        <Footer />
        {page === 'home' && <UtilityDock todos={todos} setTodos={setTodos} onBackground={updateBackground} />}
        <AddLinkModal open={modalOpen} categories={categories} onClose={() => setModalOpen(false)} onSave={saveCustom} />
      </div>
    </div>
  )
}

export default App
