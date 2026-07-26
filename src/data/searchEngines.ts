import type { SearchEngine } from '../types'

export const searchEngines: SearchEngine[] = [
  { id: 'baidu', name: '百度', shortName: '百', region: '国内', color: '#3b82f6', buildUrl: (q) => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}` },
  { id: 'bing', name: 'Bing 中国', shortName: 'B', region: '国内', color: '#14b8a6', buildUrl: (q) => `https://cn.bing.com/search?q=${encodeURIComponent(q)}` },
  { id: '360', name: '360 搜索', shortName: '360', region: '国内', color: '#22c55e', buildUrl: (q) => `https://www.so.com/s?q=${encodeURIComponent(q)}` },
  { id: 'sogou', name: '搜狗', shortName: '搜', region: '国内', color: '#fb923c', buildUrl: (q) => `https://www.sogou.com/web?query=${encodeURIComponent(q)}` },
  { id: 'google', name: 'Google', shortName: 'G', region: '国外', color: '#8b5cf6', buildUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}` },
  { id: 'duckduckgo', name: 'DuckDuckGo', shortName: 'D', region: '国外', color: '#ef4444', buildUrl: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}` },
  { id: 'yandex', name: 'Yandex', shortName: 'Y', region: '国外', color: '#f43f5e', buildUrl: (q) => `https://yandex.com/search/?text=${encodeURIComponent(q)}` },
]
