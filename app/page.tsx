import { ArrowUpRight, Mail, Code2, Server, Cloud, Bot, Database, Terminal } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-20 selection:bg-white selection:text-black antialiased">

      {/* Navigation */}
      <header className="flex items-center justify-between mb-24 sm:mb-32">
        <h1 className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Portfolio </h1>
        <nav className="flex gap-6 sm:gap-8 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Intro / Hero Section */}
      <section id="intro" className="mb-32 sm:mb-48">
        <div className="space-y-12">
          {/* Name & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-border" />
              
            </div>

            <div className="space-y-3">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-tight font-medium">
                Shahryar<span className="text-muted-foreground"></span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-mono">
                Backend Engineer & AGENTIC AI
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-pretty leading-[1.2] tracking-tight font-medium">
              Building <span className="italic font-normal">intelligent</span> systems that scale.
              <br />
              Architecting APIs that perform.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I specialize in FastAPI backend architecture, DevOps automation, and AI agent development.
              From multi-agent orchestration systems to high-performance APIs, I craft production-ready solutions
              that solve real-world problems.
            </p>
          </div>

         

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm uppercase tracking-wider hover:border-foreground transition-colors"
            >
              View projects
            </Link>
            <Link
              href="https://github.com/shahryar908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm uppercase tracking-wider hover:border-foreground transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-32 sm:mb-48">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Core Expertise</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              icon: <Server className="w-6 h-6" />,
              title: "Backend Development",
              skills: ["FastAPI", "Python",  "REST APIs", "Microservices"]
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Databases & Storage",
              skills: ["PostgreSQL", "MongoDB", "Redis"]
            },
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "DevOps & Cloud",
              skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "JenKins"]
            },
            {
              icon: <Bot className="w-6 h-6" />,
              title: "AI & Agents",
              skills: ["LangChain", "Langgraph", "RAG Systems", "Vector DBs", "Autonomous Agents"]
            },
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Architecture",
              skills: ["System Design", "Event-Driven", "Message Queues", "WebSockets", "Async Processing"]
            },
            {
              icon: <Terminal className="w-6 h-6" />,
              title: "Tools & Practices",
              skills: ["Git", "Linux", "Testing", "Monitoring", "Documentation", "Agile"]
            }
          ].map((category, i) => (
            <div key={i} className="space-y-4 group">
              <div className="flex items-center gap-3">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.icon}
                </div>
                <h4 className="font-serif text-xl font-medium">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs font-mono px-3 py-1.5 bg-muted/30 text-muted-foreground border border-border hover:border-foreground/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-32 sm:mb-48">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Featured Projects</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-16">
          {[
            {
              title: "AI Software Agency",
              description: "Full-stack AI-powered agency with FastAPI backend that coordinates specialized AI agents (PM, Architect, Engineer, QA) to build complete software project specifications. RESTful API with async processing, deployed with Docker and production-ready infrastructure. Generates user stories, system architecture, implementation plans, and test strategies.",
              tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Docker", "Google Gemini"],
              year: "2024",
              highlights: ["Multi-agent orchestration", "REST API with async processing", "Containerized deployment"],
              link: "/blog/building-ai-software-agency"
            },
            {
              title: "FastAPI CI/CD Pipeline on AWS",
              description: "Production-grade automated deployment pipeline for FastAPI applications. Built complete DevOps workflow with Jenkins on AWS EC2, featuring automated testing, Docker containerization, health checks, and zero-downtime deployments. Showcases modern DevOps practices with infrastructure automation.",
              tech: ["FastAPI", "Jenkins", "Docker", "AWS EC2", "Python", "Pytest"],
              year: "2024",
              highlights: ["Automated CI/CD", "Docker-in-Docker", "Zero-downtime deployment"],
              link: "/blog/fastapi-cicd-pipeline"
            },
            {
              title: "Researchy - AI Research Assistant",
              description: "Full-stack AI-powered research assistant that helps users discover, analyze, and create academic research papers. Features ArXiv paper search, PDF analysis with insights extraction, automated LaTeX/PDF paper generation, and personal library management. Built with Next.js frontend, Express backend, and FastAPI AI agent service orchestrated with LangGraph.",
              tech: ["Next.js", "FastAPI", "LangGraph", "Express", "Prisma", "Google Gemini", "LaTeX"],
              year: "2024",
              highlights: ["ArXiv integration", "Auto LaTeX generation", "Multi-service architecture"],
              link: "/blog/researchy-ai-research-assistant"
            }
          ].map((project, i) => (
            <article key={i} className="group">
              <div className="border-b border-border pb-12 group-hover:border-foreground/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="text-3xl sm:text-4xl font-serif tracking-tight font-medium group-hover:translate-x-1 transition-transform duration-500">
                      {project.title}
                    </h4>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{project.year}</p>
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Read Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs font-mono px-3 py-1.5 bg-background border border-border text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, j) => (
                      <span key={j} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-32 sm:mb-48">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Experience</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {[
            {
              role: "Senior Backend Engineer",
              company: "Tech Company",
              period: "2023 - Present",
              description: "Leading backend architecture and AI integration initiatives. Built scalable microservices handling millions of requests daily. Mentored junior developers and established engineering best practices.",
              achievements: [
                "Reduced API latency by 60% through optimization",
                "Implemented AI agent system for automated workflows",
                "Led migration to Kubernetes infrastructure"
              ]
            }
            
          ].map((job, i) => (
            <article key={i} className="group">
              <div className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-12">
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{job.period}</p>
                  <h4 className="text-xl font-serif font-medium">{job.role}</h4>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span className="text-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-24">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Get in Touch</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-3xl sm:text-4xl font-serif font-medium">
                Let's work together
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 text-lg hover:text-muted-foreground transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">your.email@example.com</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Connect</h5>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "GitHub", href: "https://github.com/shahryar908" },
                { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
                { label: "Twitter / X", href: "https://twitter.com/yourusername" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-foreground transition-colors group"
                >
                  <span className="font-mono text-sm flex-1">{social.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] font-mono uppercase text-muted-foreground">
          <p>© 2025 • Built with precision</p>
          <div className="flex gap-6">
            <Link href="#intro" className="hover:text-foreground transition-colors">Back to top</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}