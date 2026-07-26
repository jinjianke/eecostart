# EECO 导航

> 面向中国用户的 AI 时代综合资源入口平台
>
> 精选 AI 工具、开发资源、编程工具、学习内容与优秀网站，让每一次搜索，都成为通往新世界的坐标。

[![在线访问](https://img.shields.io/badge/在线访问-start.eecojjk.cn-4f46e5?style=flat-square)](https://start.eecojjk.cn/)
[![GitHub Pages](https://img.shields.io/badge/部署-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite)](https://vite.dev/)

## 项目简介

EECO 导航是在原有网址导航站基础上的重构升级版本，不是从零创建的新站点。项目保留了原站的经典导航分类和访问习惯，同时增加了 AI 工具、AI 开发资源、开发工具和学习资源等内容。

项目采用纯前端静态架构，可直接部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 等静态托管平台。

## 在线地址

- 首页：[https://start.eecojjk.cn/](https://start.eecojjk.cn/)
- 关于本站：[https://start.eecojjk.cn/about.html](https://start.eecojjk.cn/about.html)
- 更新日志：[https://start.eecojjk.cn/changelog.html](https://start.eecojjk.cn/changelog.html)
- GitHub：[https://github.com/jinjianke/eecostart](https://github.com/jinjianke/eecostart)

## 主要功能

### 导航内容

- 原站经典导航
  - 常用网站
  - 搜索引擎
  - 社交网站
  - 视频网站
  - 工具网站
- AI 工具导航
  - AI 聊天
  - AI 写作
  - AI 编程
  - AI 设计
  - AI 绘画
  - AI 视频
  - AI 办公
  - AI 模型
  - AI 智能体
  - AI 3D
  - AI 提示词
  - AI 效率工具
- AI 开发资源
  - AI API
  - 开发平台
- 开发工具导航
  - 代码编辑
  - 代码管理
  - 开发工具
  - 云服务
- 学习资源
  - 编程学习
  - AI 学习
  - 开发社区

### 交互功能

- 支持百度、Bing、Google、DuckDuckGo、Yandex 等搜索引擎切换
- 支持搜索历史记录
- 支持热门关键词快捷搜索
- 支持网站 Logo 自动加载和本地缓存 Logo
- 支持网站提交，将自定义网站保存在浏览器本地
- 支持自定义背景
- 支持待办事项工具
- 支持浅色模式和深色模式
- 支持响应式布局，适配桌面端和移动端
- 支持关于页面和更新日志页面
- 外部天气和一言接口异常时自动降级，不影响页面正常使用

## 设计方向

- 简洁、明亮的科技感视觉
- 毛玻璃导航栏与层次化信息卡片
- 蓝色、紫色、青色为主的轻量渐变配色
- 保留导航站的高效访问体验，避免传统蓝白网址导航的陈旧感
- 默认浅色模式，深色模式下所有主要区域同步适配
- Logo 使用独立图形标识，不依赖文字字母展示

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint
- GitHub Actions
- GitHub Pages

## 项目结构

```text
.
├─ .github/
│  └─ workflows/
│     └─ deploy.yml          # GitHub Pages 自动部署流程
├─ public/
│  ├─ brand/
│  │  └─ eeco-mark.svg       # 网站 Logo
│  ├─ site-logos/            # 网站 Logo 静态缓存
│  └─ CNAME                  # 自定义域名配置
├─ src/
│  ├─ components/            # 可复用 UI 组件
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ SearchBox.tsx
│  │  ├─ WebsiteCard.tsx
│  │  ├─ WebsiteLogo.tsx
│  │  ├─ CategorySection.tsx
│  │  ├─ ClassicNavigation.tsx
│  │  ├─ Footer.tsx
│  │  └─ ...
│  ├─ data/                  # 导航数据与页面数据
│  │  ├─ aiTools.ts
│  │  ├─ aiCatalog.ts
│  │  ├─ websites.ts
│  │  ├─ categories.ts
│  │  ├─ searchEngines.ts
│  │  └─ changelog.ts
│  ├─ lib/
│  │  ├─ remote.ts           # 带超时和状态检查的远程请求工具
│  │  └─ weather.ts           # Open-Meteo 天气请求与天气代码转换
│  ├─ hooks/
│  │  └─ useLocalStorage.ts   # LocalStorage 状态封装
│  ├─ pages/
│  │  ├─ HomePage.tsx
│  │  ├─ AboutPage.tsx
│  │  └─ ChangelogPage.tsx
│  ├─ types/
│  │  └─ index.ts            # TypeScript 类型定义
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ about.html                 # 关于页面入口
├─ changelog.html             # 更新日志入口
├─ index.html                 # 首页入口
├─ vite.config.ts
├─ tailwind.config.js
├─ package.json
└─ README.md
```

## 本地运行

### 环境要求

建议使用：

- Node.js 20+
- npm 10+

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173/
```

如果需要使用固定端口：

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

### 代码检查

```bash
npm run lint
```

### 构建生产版本

```bash
npm run build
```

构建结果会输出到：

```text
dist/
```

### 本地预览生产版本

```bash
npm run preview
```

## 数据维护

导航数据集中放在 `src/data/` 目录，组件只负责展示和交互，不建议把网址直接写在组件中。

新增网站时，可以在 `src/data/websites.ts` 或对应的数据文件中添加：

```ts
{
  id: 'example-tool',
  name: '示例工具',
  url: 'https://example.com/',
  description: '示例网站简介。',
  tags: ['工具', '推荐'],
  category: '工具网站',
  group: '经典导航',
  region: '全球',
  accent: '#6366f1',
}
```

字段说明：

| 字段 | 说明 |
| --- | --- |
| `id` | 唯一标识，不能重复 |
| `name` | 网站名称 |
| `url` | 官网地址 |
| `description` | 网站简介 |
| `tags` | 展示标签 |
| `category` | 所属分类 |
| `group` | 所属资源大类 |
| `region` | 国内、国外或全球 |
| `logoUrl` | 可选，指定 Logo 地址 |
| `accent` | 卡片主题色 |
| `featured` | 是否作为精选内容 |
| `badge` | 可选，卡片角标 |

## Logo 加载机制

网站卡片会按照以下顺序尝试加载 Logo：

1. 数据中的 `logoUrl`
2. `public/site-logos/<域名>.webp`
3. `https://favicon.im/` 在线 Favicon 服务
4. 网站自身的 `/favicon.ico`
5. 文字缩写备用图标

批量缓存网站 Logo：

```bash
npm run logos
```

如果某个网站的 Logo 加载异常，可以手动将 Logo 放入 `public/site-logos/`，文件名使用去掉 `www.` 后的域名，例如：

```text
public/site-logos/example.com.webp
```

## 天气与一言

首页天气使用 Open-Meteo 接口，不需要 API Key：

- 城市查询：Open-Meteo Geocoding API
- 当前天气：Open-Meteo Forecast API
- 默认城市：北京
- 可通过浏览器控制台设置城市：

```js
localStorage.setItem('weatherCity', '上海')
location.reload()
```

一言使用 Hitokoto API。天气和一言请求都具备：

- 5 秒超时
- HTTP 状态检查
- 请求失败降级
- 外部接口异常不影响主页面渲染

## GitHub Pages 部署

项目已经配置 GitHub Actions 自动部署，工作流文件为：

```text
.github/workflows/deploy.yml
```

推送到 `main` 分支后会自动执行：

1. 安装依赖
2. 执行 `npm run build`
3. 上传 `dist/` 构建产物
4. 发布到 GitHub Pages

```bash
git add .
git commit -m "更新导航内容"
git push origin main
```

部署完成后可以在 GitHub 仓库的 **Actions** 页面查看状态。

自定义域名由以下文件控制：

```text
CNAME
public/CNAME
```

当前线上域名：

```text
https://start.eecojjk.cn/
```

## 浏览器本地数据

以下功能使用浏览器 `localStorage` 保存，不需要后端数据库：

| Key | 用途 |
| --- | --- |
| `darkMode` | 深色模式设置 |
| `searchHistory` | 搜索历史 |
| `customLinks` | 用户提交的自定义网址 |
| `customBg` | 用户自定义背景 |
| `todos` | 待办事项 |
| `weatherCity` | 天气城市 |

清理本地设置：

```js
localStorage.clear()
location.reload()
```

## 后续规划

- 网站提交审核流程
- 用户收藏与同步
- 热门排行和网站评分
- 站内搜索优化
- 后台管理界面
- FastAPI 数据接口
- 多用户数据同步
- 导航内容自动更新

## 贡献方式

欢迎提交新的工具、网站和改进建议。

建议流程：

1. Fork 本项目
2. 创建功能分支
3. 修改 `src/data/` 或对应组件
4. 执行 `npm run lint` 和 `npm run build`
5. 提交 Pull Request

提交导航资源时，请尽量提供：

- 官方网站地址
- 简短准确的中文简介
- 合适的分类和标签
- 官网 Logo 或可用 Favicon
- 国内/国外/全球属性

## 许可证

本项目目前主要用于个人学习、导航整理与开源实践。项目中收录的网站名称、Logo 和商标归其各自权利人所有，EECO 导航不代表这些网站或服务提供方。

如有内容或版权相关问题，请提交 Issue 或联系项目维护者。

---

由 [jinjianke](https://github.com/jinjianke) 维护。
