import { useEffect, useMemo, useState } from 'react'
import type { Website } from '../types'

interface WebsiteLogoProps {
  website: Pick<Website, 'id' | 'name' | 'url' | 'icon' | 'accent' | 'logoUrl'>
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  xs: 'h-5 w-5 rounded-md p-[3px]',
  sm: 'h-9 w-9 rounded-xl p-1.5',
  md: 'h-11 w-11 rounded-2xl p-2',
  lg: 'h-14 w-14 rounded-[18px] p-2.5',
}

const fallbackTextSizes = {
  xs: 'text-[7px]',
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-sm',
}

function getLogoSources(website: WebsiteLogoProps['website']) {
  try {
    const url = new URL(website.url)
    const hostname = url.hostname.replace(/^www\./, '').toLowerCase()
    return [
      website.logoUrl,
      `/site-logos/${hostname}.webp`,
      `https://favicon.im/${hostname}?larger=true`,
      `${url.origin}/favicon.ico`,
    ].filter((source): source is string => Boolean(source))
  } catch {
    return website.logoUrl ? [website.logoUrl] : []
  }
}

export function WebsiteLogo({ website, size = 'md', className = '' }: WebsiteLogoProps) {
  const sources = useMemo(() => getLogoSources(website), [website.logoUrl, website.url]) // eslint-disable-line react-hooks/exhaustive-deps
  const [sourceIndex, setSourceIndex] = useState(0)

  useEffect(() => setSourceIndex(0), [website.id, sources])

  const baseClass = `relative grid shrink-0 place-items-center overflow-hidden border border-slate-200/70 bg-white shadow-[0_8px_22px_rgba(30,40,85,.12)] dark:border-white/10 dark:bg-white/95 ${sizeClasses[size]} ${className}`

  if (sourceIndex >= sources.length) {
    return (
      <span className={`${baseClass} border-transparent !p-0 font-black text-white ${fallbackTextSizes[size]}`} style={{ background: `linear-gradient(145deg, ${website.accent ?? '#6d63f6'}, ${website.accent ?? '#6d63f6'}bb)` }} aria-hidden="true">
        {website.icon ?? website.name.slice(0, 2)}
        <span className="absolute inset-x-1 top-1 h-px bg-white/45" />
      </span>
    )
  }

  return (
    <span className={baseClass} aria-hidden="true">
      <img
        key={sources[sourceIndex]}
        src={sources[sourceIndex]}
        alt=""
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-full w-full object-contain"
        onError={() => setSourceIndex((index) => index + 1)}
      />
      <span className="pointer-events-none absolute inset-x-1 top-0 h-px bg-white/80" />
    </span>
  )
}

