# 🚀 Astro Demo Application

A comprehensive demonstration of Astro's features including Static Site Generation (SSG), Server-Side Rendering (SSR), React/Svelte integration, content collections, image optimization, and more.

## 📋 Features Demonstrated

This application showcases all major Astro features through dedicated demo pages:

### 🏗️ Rendering Modes
- **Static Pre-rendered Pages** - Build-time generation with `export const prerender = true`
- **SSG (Static Site Generation)** - Default Astro behavior with build-time data fetching
- **SSR (Server-Side Rendering)** - Runtime generation with `export const prerender = false`
- **Hybrid Mode** - Mix of SSG and SSR in the same application

### ⚛️ Framework Integration
- **React Components** - Interactive components with client-side hydration
- **Svelte Components** - Compiled components with built-in reactivity
- **Client-side JavaScript** - Vanilla JavaScript for simple interactions

### 🔗 Dynamic Routing
- **SSG Dynamic Routes** - Pre-generated routes using `getStaticPaths()`
- **SSR Dynamic Routes** - Runtime route handling with server-side processing

### 🖼️ Image Optimization
- **Internal Images** - Astro's built-in Image component with automatic optimization
- **External Images** - Best practices for optimizing external images

### 📚 Content Management
- **Content Collections** - Type-safe content management with schema validation
- **Blog System** - Complete blog implementation with dynamic routes

### 🚨 Error Handling
- **404 Page** - Custom not found page
- **500 Page** - Custom server error page

## 🗂️ Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── sample-image.svg          # Sample image for demos
├── src/
│   ├── assets/
│   │   └── sample-image.svg      # Internal image for optimization
│   ├── components/
│   │   ├── ReactCounter.tsx      # Interactive React component
│   │   └── SvelteCounter.svelte  # Interactive Svelte component
│   ├── content/
│   │   ├── config.ts             # Content collections configuration
│   │   └── blog/
│   │       ├── first-post.md     # Sample blog post
│   │       └── second-post.md    # Sample blog post
│   ├── layouts/
│   │   └── Layout.astro          # Base layout component
│   └── pages/
│       ├── index.astro           # Homepage with navigation
│       ├── 404.astro             # Custom 404 error page
│       ├── 500.astro             # Custom 500 error page
│       ├── static-prerendered.astro
│       ├── react-component.astro
│       ├── svelte-component.astro
│       ├── client-side.astro
│       ├── ssg-page.astro
│       ├── ssr-page.astro
│       ├── image-optimization-internal.astro
│       ├── image-optimization-external.astro
│       ├── content-collection.astro
│       ├── blog/
│       │   └── [slug].astro      # Dynamic blog post pages
│       ├── ssg-dynamic/
│       │   └── [slug].astro      # SSG dynamic routes
│       └── ssr-dynamic/
│           └── [id].astro        # SSR dynamic routes
├── astro.config.mjs              # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Technology Stack

- **Astro** - Meta-framework for building fast websites
- **React** - UI library for interactive components
- **Svelte** - Compiled UI framework
- **TypeScript** - Type-safe JavaScript
- **Sharp** - Image optimization library

## 📄 Demo Pages

### 🏠 Homepage (`/`)
Navigation hub with links to all demo pages and feature explanations.

### 📄 Static Pre-rendered (`/static-prerendered`)
- Demonstrates `export const prerender = true`
- Shows build-time generation
- Explains SSG benefits and use cases

### ⚛️ React Component Demo (`/react-component`)
- Interactive React counter component
- Client-side hydration with `client:load`
- Comparison of hydration strategies

### 🔥 Svelte Component Demo (`/svelte-component`)
- Interactive Svelte counter component
- Scoped styles and reactivity
- Framework comparison with React

### 💻 Client-side Rendering (`/client-side`)
- Vanilla JavaScript interactions
- DOM manipulation examples
- Progressive enhancement techniques

### 🏗️ SSG Page (`/ssg-page`)
- Static site generation demonstration
- Build-time data fetching
- Performance characteristics

### 🔗 SSG Dynamic Routes (`/ssg-dynamic/[slug]`)
- Pre-generated dynamic routes
- `getStaticPaths()` implementation
- Available routes: `example-slug`, `another-post`, `third-post`

### 🖥️ SSR Page (`/ssr-page`)
- Server-side rendering with `export const prerender = false`
- Real-time data generation
- Request-specific information

### 🔗 SSR Dynamic Routes (`/ssr-dynamic/[id]`)
- Runtime dynamic route handling
- Server-side parameter processing
- Test routes: `example-id`, `product-123`, `user-456`, `order-789`

### 🖼️ Internal Image Optimization (`/image-optimization-internal`)
- Astro's Image component usage
- Automatic format conversion (WebP, AVIF)
- Responsive image generation

### 🌐 External Image Optimization (`/image-optimization-external`)
- External image optimization techniques
- CDN service examples (Cloudinary, ImageKit)
- Performance best practices

### 📚 Content Collection Demo (`/content-collection`)
- Type-safe content management
- Schema validation with Zod
- Blog post listing and metadata

### 📝 Blog Posts (`/blog/[slug]`)
- Individual blog post pages
- Content rendering with `<Content />`
- Dynamic routes from content collections

### 🚨 Error Pages
- **404 Page** (`/404`) - Custom not found page with helpful navigation
- **500 Page** (`/500`) - Server error page with troubleshooting info

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 18.20.8 or higher
- **npm** or **pnpm** package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /local/home/sohaibus/dev/astro/astro-basic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:4321](http://localhost:4321)

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🎯 Key Learning Points

### Rendering Strategies
- **SSG**: Best for content that doesn't change often (blogs, marketing pages)
- **SSR**: Best for dynamic, user-specific content (dashboards, e-commerce)
- **Hybrid**: Mix both strategies in the same application

### Component Integration
- **React**: Large ecosystem, virtual DOM, extensive tooling
- **Svelte**: Compile-time optimizations, smaller bundles, built-in reactivity
- **Astro**: Framework-agnostic, partial hydration, performance-focused

### Content Management
- **Content Collections**: Type-safe, schema validation, powerful querying
- **Markdown/MDX**: Rich content authoring with component embedding
- **Dynamic Routes**: Automatic page generation from content

### Image Optimization
- **Internal**: Automatic optimization, format conversion, responsive sizing
- **External**: Manual optimization, CDN services, performance techniques

### Error Handling
- **Custom Pages**: Better user experience, helpful navigation
- **Status Codes**: Proper HTTP responses for SEO and debugging

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)
```javascript
export default defineConfig({
    adapter: amplify(),           // AWS Amplify adapter
    integrations: [react(), svelte()], // Framework integrations
    output: 'hybrid'              // Enable both SSG and SSR
});
```

### Content Collections (`src/content/config.ts`)
```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});
```

## 🚀 Deployment

This application is configured for AWS Amplify deployment but can be adapted for other platforms:

- **Vercel**: Change adapter to `@astrojs/vercel`
- **Netlify**: Change adapter to `@astrojs/netlify`
- **Node.js**: Change adapter to `@astrojs/node`
- **Static**: Remove adapter for static deployment

## 📚 Learning Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [React Documentation](https://react.dev)
- [Svelte Documentation](https://svelte.dev)

## 🤝 Contributing

This is a demo application for learning purposes. Feel free to:
- Experiment with the code
- Add new demo pages
- Try different integrations
- Optimize performance

## 📝 License

This project is for educational purposes. Feel free to use it as a learning resource or starting point for your own Astro projects.

---

**Happy coding with Astro! 🚀**
