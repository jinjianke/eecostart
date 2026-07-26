import { ArrowUpRight, Globe2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Website } from '../types'
import { WebsiteLogo } from './WebsiteLogo'

interface WebsiteCardProps {
  website: Website
  compact?: boolean
}

export function WebsiteCard({ website, compact = false }: WebsiteCardProps) {
  const host = (() => { try { return new URL(website.url).hostname.replace('www.', '') } catch { return website.url } })()

  return (
    <motion.a href={website.url} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 320, damping: 24 }} className={`website-card group ${compact ? 'p-4' : 'p-5'}`}>
      <div className="flex items-start gap-4">
        <WebsiteLogo website={website} size={compact ? 'md' : 'lg'} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-[16px] font-extrabold tracking-tight text-slate-900 dark:text-white">{website.name}</h3>
            {website.badge && <span className="rounded-full bg-gradient-to-r from-sakura/15 to-violet/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-violet dark:text-[#c9c3ff]">{website.badge}</span>}
          </div>
          {!compact && <p className="mt-2 line-clamp-2 min-h-[44px] text-[12.5px] font-medium leading-[1.75] text-slate-500 dark:text-slate-400">{website.description}</p>}
        </div>
        <ArrowUpRight size={17} className="shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
      </div>
      <div className={`flex items-center justify-between ${compact ? 'mt-3' : 'mt-5'}`}>
        <div className="flex min-w-0 flex-wrap gap-1.5">
          {website.tags.slice(0, compact ? 1 : 2).map((tag) => <span key={tag} className="tag">{tag}</span>)}
          {website.region && !compact && <span className="tag flex items-center gap-1"><Globe2 size={10} />{website.region}</span>}
        </div>
        {website.featured && <Sparkles size={14} className="shrink-0 text-sakura" />}
      </div>
      {!compact && <div className="mt-4 truncate border-t border-slate-100 pt-3 text-[10px] font-semibold text-slate-350 dark:border-white/7 dark:text-slate-600">{host}</div>}
    </motion.a>
  )
}
