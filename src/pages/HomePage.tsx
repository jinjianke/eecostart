import { useEffect, useState } from 'react'
import { CategorySection } from '../components/CategorySection'
import { ClassicNavigation } from '../components/ClassicNavigation'
import { Hero } from '../components/Hero'
import { QuickPortal } from '../components/QuickPortal'
import { aiTools } from '../data/aiTools'
import { sections } from '../data/categories'
import { aiDevelopment, developerTools, learningResources } from '../data/websites'
import type { SearchHistoryItem, Website } from '../types'

interface HomePageProps {
  websites: Website[]
  onAddLink: () => void
  onDeleteCustom: (category: string, name: string) => void
}

const sectionData: Record<string, Website[]> = {
  'ai-tools': aiTools,
  'ai-dev': aiDevelopment,
  'dev-tools': developerTools,
  learning: learningResources,
}

function normalizeHistory(): SearchHistoryItem[] {
  try {
    const raw = JSON.parse(localStorage.getItem('searchHistory') || '[]') as (SearchHistoryItem | string)[]
    return raw.map((item, index) => typeof item === 'string' ? { keyword: item, timestamp: Date.now() - index * 1000 } : item).reverse()
  } catch { return [] }
}

export function HomePage({ websites, onAddLink, onDeleteCustom }: HomePageProps) {
  const [history, setHistory] = useState<SearchHistoryItem[]>(normalizeHistory)

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify([...history].reverse()))
  }, [history])

  return (
    <main>
      <Hero history={history} onHistoryChange={setHistory} />
      <ClassicNavigation websites={websites} onAddLink={onAddLink} onDeleteCustom={onDeleteCustom} />
      <QuickPortal />
      {sections.map((section, index) => (
        <CategorySection key={section.id} section={section} websites={sectionData[section.id]} tone={index % 2 === 0 ? 'white' : 'lavender'} />
      ))}
    </main>
  )
}
