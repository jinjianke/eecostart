import { ArrowRight, BookOpen, Bot, Compass, Menu, Moon, Plus, Sparkles, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface NavbarProps {
  dark: boolean
  onToggleTheme: () => void
  onAddLink: () => void
}

const navItems = [
  { label: '首页', href: '/', icon: Compass },
  { label: '原站导航', href: '/#classic', icon: ArrowRight },
  { label: 'AI工具', href: '/#ai-tools', icon: Sparkles },
  { label: '开发资源', href: '/#ai-dev', icon: Bot },
  { label: '学习资源', href: '/#learning', icon: BookOpen },
  { label: '关于本站', href: '/about.html', icon: Compass },
]

export function Navbar({ dark, onToggleTheme, onAddLink }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-[22px] border border-white/55 bg-white/75 px-4 shadow-[0_12px_50px_rgba(37,46,105,.09)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#081229]/75 sm:px-6">
        <a href="/" className="group flex items-center gap-3" aria-label="EECO导航首页">
          <span className="relative grid h-16 w-16 shrink-0 place-items-center">
            <img src="/brand/eeco-mark.svg" alt="" className="h-full w-full object-contain" />
          </span>
          <span>
            <strong className="block text-[17px] font-extrabold tracking-tight text-slate-950 dark:text-white">EECO导航</strong>
            <span className="block text-[9px] font-bold tracking-[.22em] text-slate-400">EXPLORE · EVOLVE</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map(({ label, href }) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <button className="icon-button" onClick={onToggleTheme} aria-label={dark ? '切换浅色模式' : '切换深色模式'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="hidden items-center gap-2 rounded-xl bg-[#171d36] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet/50 dark:bg-white dark:text-ink sm:flex" onClick={onAddLink}><Plus size={16} /> 网站提交</button>
          <button className="icon-button xl:hidden" onClick={() => setOpen((v) => !v)} aria-label="打开导航菜单">{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-[1440px] rounded-2xl border border-white/60 bg-white/90 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#081229]/95 xl:hidden">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-violet/10 hover:text-violet dark:text-slate-200"><Icon size={17} /> {label}</a>
            ))}
            <a href="/changelog.html" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-violet/10 hover:text-violet dark:text-slate-200"><Sparkles size={17} /> 更新日志</a>
            <button onClick={() => { setOpen(false); onAddLink() }} className="mt-1 flex w-full items-center gap-3 rounded-xl bg-violet px-4 py-3 text-sm font-semibold text-white sm:hidden"><Plus size={17} /> 网站提交</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

