import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

// Blog posts data - you can move this to a separate file or CMS later
const blogPosts = [
  {
    id: "fastapi-cicd-pipeline",
    title: "Building a Complete CI/CD Pipeline for FastAPI on AWS",
    excerpt: "A hands-on learning journey building an automated deployment pipeline with Jenkins, Docker, and AWS EC2. Learn how I configured continuous integration, automated testing, and zero-downtime deployments for a FastAPI application.",
    date: "2024-12-20",
    readTime: "15 min read",
    tags: ["FastAPI", "Jenkins", "Docker", "AWS", "DevOps"],
    featured: true
  },
  {
    id: "building-ai-software-agency",
    title: "Building an AI Software Agency with Multi-Agent Orchestration",
    excerpt: "How I built a production-ready AI agency that coordinates PM, Architect, Engineer, and QA agents to generate complete software specifications in under 3 minutes.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["AI Agents", "FastAPI", "LangGraph", "Python"],
    featured: true
  },
  {
    id: "researchy-ai-research-assistant",
    title: "Researchy: Building an AI Research Assistant with LaTeX Generation",
    excerpt: "Deep dive into building a full-stack AI research assistant that integrates ArXiv search, PDF analysis, and automated LaTeX paper generation using Next.js, Express, and FastAPI.",
    date: "2024-12-10",
    readTime: "10 min read",
    tags: ["Next.js", "FastAPI", "LangGraph", "AI"],
    featured: false
  },
  {
    id: "langgraph-multi-agent",
    title: "Multi-Agent Orchestration with LangGraph",
    excerpt: "A comprehensive guide to building complex multi-agent systems using LangGraph. Learn how to coordinate multiple AI agents for complex workflows.",
    date: "2024-11-15",
    readTime: "12 min read",
    tags: ["LangChain", "LangGraph", "AI Agents"],
    featured: false
  }
]

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-20 selection:bg-white selection:text-black antialiased">
      {/* Navigation */}
      <header className="flex items-center justify-between mb-24 sm:mb-32">
        <Link href="/" className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Portfolio
        </Link>
        <nav className="flex gap-6 sm:gap-8 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <Link href="/#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="/#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mb-24 sm:mb-32">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-border" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Technical Blog
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight font-medium">
              Blog<span className="text-muted-foreground">.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Deep dives into AI agents, backend architecture, and building production systems.
              Learn how I build and deploy complex software projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Featured</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block"
              >
                <article className="space-y-4 p-6 border border-border hover:border-foreground transition-colors duration-300">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-medium group-hover:translate-x-1 transition-transform duration-500">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 bg-muted/30 text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                    Read article
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">All Articles</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-8">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block"
            >
              <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-8 border-b border-border group-hover:border-foreground/50 transition-colors duration-300">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-medium group-hover:translate-x-1 transition-transform duration-500">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 bg-muted/30 text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  Read more
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] font-mono uppercase text-muted-foreground">
          <p>© 2025 • Built with precision</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Back to top</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}