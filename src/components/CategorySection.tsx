import { ArrowRight, Grid3X3, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import type { ResourceSection, Website } from '../types'
import { WebsiteCard } from './WebsiteCard'

interface CategorySectionProps {
  section: ResourceSection
  websites: Website[]
  tone?: 'lavender' | 'white'
}

function resolveGroup(websites: Website[], group: string) {
  return group === '热门AI应用'
    ? websites.filter((site) => site.featured)
    : websites.filter((site) => site.category === group)
}

export function CategorySection({ section, websites, tone = 'white' }: CategorySectionProps) {
  const [active, setActive] = useState(section.groups[0])
  const visible = useMemo(() => resolveGroup(websites, active), [active, websites])

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const detail = (event as CustomEvent<{ sectionId: string; group: string }>).detail
      if (detail?.sectionId === section.id && section.groups.includes(detail.group)) setActive(detail.group)
    }
    window.addEventListener('eeco:navigate-category', handleNavigate)
    return () => window.removeEventListener('eeco:navigate-category', handleNavigate)
  }, [section.groups, section.id])

  return (
    <section id={section.id} className={`section-shell scroll-mt-24 ${tone === 'lavender' ? 'bg-[#f5f5ff] dark:bg-[#08142b]' : 'bg-white dark:bg-[#071129]'}`}>
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="section-eyebrow"><Sparkles size={13} />{section.eyebrow}</div>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 scrollbar-none lg:max-w-[680px] lg:flex-wrap lg:justify-end lg:overflow-visible">
            {section.groups.map((group) => {
              const count = resolveGroup(websites, group).length
              return (
                <button key={group} onClick={() => setActive(group)} className={`category-tab shrink-0 ${active === group ? 'category-tab-active' : ''}`}>
                  {group}<span className="ml-1.5 text-[10px] opacity-50">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .28 }} className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((website) => <WebsiteCard key={website.id} website={website} />)}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Grid3X3 size={14} /> 当前展示 {active} · {visible.length} 个精选入口 <ArrowRight size={13} />
        </div>
      </div>
    </section>
  )
}
