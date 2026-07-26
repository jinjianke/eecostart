export type ResourceGroup = 'AI工具' | 'AI开发' | '开发工具' | '学习资源' | '经典导航'

export interface Website {
  id: string
  name: string
  url: string
  description: string
  tags: string[]
  category: string
  group: ResourceGroup
  region?: '国内' | '国外' | '全球'
  featured?: boolean
  badge?: string
  icon?: string
  logoUrl?: string
  accent?: string
  custom?: boolean
}

export interface ResourceSection {
  id: string
  eyebrow: string
  title: string
  description: string
  groups: string[]
}

export interface SearchEngine {
  id: string
  name: string
  shortName: string
  region: '国内' | '国外'
  color: string
  buildUrl: (query: string) => string
}

export interface SearchHistoryItem {
  keyword: string
  timestamp: number
}

export interface TodoItem {
  text: string
  completed: boolean
}

