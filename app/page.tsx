import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-32 selection:bg-white selection:text-black antialiased">
      <header className="space-y-16 mb-32">
        <div className="flex items-center justify-between">
          <h1 className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Volume No. 01</h1>
          <nav className="flex gap-8 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            <Link href="#work" className="hover:text-foreground transition-colors">
              Index
            </Link>
            <Link href="#info" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-pretty leading-tight tracking-tight font-medium">
            Backend engineer building <span className="italic font-normal">intelligent</span> systems at scale.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Specializing in FastAPI backend architecture, DevOps automation, and AI agent development.
            Crafting high-performance APIs and intelligent systems that solve real-world problems.
          </p>
        </div>
      </header>

      <section id="work" className="space-y-16 mb-40">
        <div className="flex items-center gap-4">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Selected Works</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12">
          {[
            {
              title: "Autonomous Agent Framework",
              desc: "Multi-agent orchestration system with LangChain & FastAPI",
              year: "2024",
              tech: "Python • FastAPI • LangChain • Redis"
            },
            {
              title: "Cloud Infrastructure Pipeline",
              desc: "Automated CI/CD with Kubernetes orchestration",
              year: "2024",
              tech: "Docker • K8s • GitHub Actions • Terraform"
            },
            {
              title: "High-Performance REST API",
              desc: "Scalable microservices architecture with async processing",
              year: "2024",
              tech: "FastAPI • PostgreSQL • Celery • RabbitMQ"
            },
          ].map((project, i) => (
            <Link key={i} href="#" className="group block">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-border pb-8 group-hover:border-foreground/70 transition-colors duration-300">
                <div className="space-y-3">
                  <h4 className="text-3xl sm:text-4xl font-serif tracking-tight group-hover:translate-x-1 transition-transform duration-500 font-medium">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                  <p className="text-xs font-mono text-muted-foreground/70">{project.tech}</p>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>{project.year}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="info" className="grid sm:grid-cols-2 gap-16 border-t border-border pt-16">
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Core Expertise</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">Backend Development</h4>
              <p className="text-sm text-muted-foreground">FastAPI • Python • PostgreSQL • MongoDB • Redis</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">DevOps & Infrastructure</h4>
              <p className="text-sm text-muted-foreground">Docker • Kubernetes • CI/CD • AWS • Terraform</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">AI Agent Development</h4>
              <p className="text-sm text-muted-foreground">LangChain • OpenAI • Autonomous Systems • RAG</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">Additional Skills</h4>
              <p className="text-sm text-muted-foreground">Microservices • WebSockets • GraphQL • Message Queues</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</h3>
          <div className="flex flex-col gap-3 text-sm text-foreground">
            <Link
              href="mailto:hello@example.com"
              className="hover:text-muted-foreground transition-colors underline-offset-4"
            >
              Email
            </Link>
            <Link href="#" className="hover:text-muted-foreground transition-colors underline-offset-4">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-muted-foreground transition-colors underline-offset-4">
              GitHub
            </Link>
            <Link href="#" className="hover:text-muted-foreground transition-colors underline-offset-4">
              X / Twitter
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-24 pt-8 border-t border-border text-[11px] font-mono uppercase text-muted-foreground">
        © 2025 • Built with precision
      </footer>
    </main>
  )
}
