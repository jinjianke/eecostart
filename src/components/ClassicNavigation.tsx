import { ChevronDown, ExternalLink, Plus, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Website } from '../types'
import { WebsiteLogo } from './WebsiteLogo'

interface ClassicNavigationProps {
  websites: Website[]
  onAddLink: () => void
  onDeleteCustom: (category: string, name: string) => void
}

export function ClassicNavigation({ websites, onAddLink, onDeleteCustom }: ClassicNavigationProps) {
  const groups = useMemo(() => Array.from(new Set(websites.map((site) => site.category))), [websites])
  const [active, setActive] = useState(groups[0] ?? '常用网站')
  const visible = websites.filter((site) => site.category === active)

  return (
    <section className="section-shell bg-[#f7f8fc] dark:bg-[#061027]" id="classic">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="section-eyebrow"><Sparkles size={13} /> EVERYDAY PORTALS</div>
            <h2 className="section-title">常用网站，一站直达</h2>
            <p className="section-description">聚合搜索、工具、开发、学习、社交与娱乐等常用入口，快速找到你每天需要的网站。</p>
          </div>
          <button onClick={onAddLink} className="secondary-button self-start"><Plus size={16} /> 添加我的网址</button>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-card dark:border-white/8 dark:bg-[#0b1730]">
          <div className="flex gap-1 overflow-x-auto border-b border-slate-100 p-3 dark:border-white/7">
            {groups.map((group) => <button key={group} onClick={() => setActive(group)} className={`category-tab whitespace-nowrap ${active === group ? 'category-tab-active' : ''}`}>{group}<span className="ml-1.5 text-[10px] opacity-45">{websites.filter((site) => site.category === group).length}</span></button>)}
          </div>
          <div className="grid gap-px bg-slate-100 p-px dark:bg-white/7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((website) => (
              <div key={website.id} className="group relative bg-white p-1 dark:bg-[#0b1730]">
                <a href={website.url} target="_blank" rel="noreferrer" className="flex min-h-[88px] items-center gap-3 rounded-[18px] p-4 transition hover:bg-violet/[.055] dark:hover:bg-white/[.045]">
                  <WebsiteLogo website={website} size="md" />
                  <span className="min-w-0 flex-1"><strong className="block truncate text-sm text-slate-800 dark:text-slate-100">{website.name}</strong><span className="mt-1 block text-[11px] font-medium text-slate-400">{website.custom ? '我的自定义网址' : website.tags[0]}</span></span>
                  <ExternalLink size={14} className="text-slate-300 transition group-hover:text-violet" />
                </a>
                {website.custom && <button onClick={() => onDeleteCustom(website.category, website.name)} className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white text-slate-300 opacity-0 shadow transition hover:text-rose-500 group-hover:opacity-100 dark:bg-[#111d38]" aria-label={`删除 ${website.name}`}><X size={12} /></button>}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-4 text-[11px] font-semibold text-slate-400"><ChevronDown size={13} /> 按使用场景分类，切换即可快速访问</div>
        </div>
      </div>
    </section>
  )
}


