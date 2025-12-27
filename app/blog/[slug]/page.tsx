import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Blog posts content - you can move this to a CMS or markdown files later
const blogPosts: Record<string, {
  title: string
  date: string
  readTime: string
  tags: string[]
  content: React.ReactNode
}> = {
  "fastapi-cicd-pipeline": {
    title: "Building a Complete CI/CD Pipeline for FastAPI on AWS",
    date: "2024-12-20",
    readTime: "15 min read",
    tags: ["FastAPI", "Jenkins", "Docker", "AWS", "DevOps"],
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-serif font-medium mb-6">Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This project was built as a hands-on learning experience to understand modern DevOps practices.
          It showcases automated building, testing, and deployment of a simple FastAPI application using
          Jenkins, Docker, and AWS EC2.
        </p>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What I Built</h2>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">Application Layer</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>A simple FastAPI REST API with two endpoints</li>
          <li>Dockerized application using Python 3.11 and UV package manager</li>
          <li>Automated unit tests using pytest</li>
        </ul>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">CI/CD Pipeline</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>Jenkins server running on AWS EC2</li>
          <li>Automated builds triggered by Git pushes</li>
          <li>Automated testing before deployment</li>
          <li>Docker-based deployment</li>
          <li>Health check verification</li>
          <li>Automatic cleanup of old Docker images</li>
        </ul>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Architecture</h2>
        <div className="bg-muted/30 border border-border p-6 rounded font-mono text-xs overflow-x-auto mb-8">
          <pre>{`┌─────────────┐       push      ┌──────────────────────────────────────────────┐      ┌─────────────────────┐
│             │ ────────────────>│                                              │      │                     │
│    Code     │                  │              GitHub                          │      │  Available to User  │
│             │                  │                                              │      │                     │
└─────────────┘                  └──────────┬───────────────────────────────────┘      └─────────────────────┘
                                            │                                                      ▲
                                            │ build, test, deploy                                 │
                                            │                                                      │
                                            ▼                                                      │
                                 ┌──────────────────────────────────────────────┐                │
                                 │        AWS EC2 (Deployed)                    │ ───────────────┘
                                 │                                              │
                                 │  ┌─────────────────────────────────────┐    │
                                 │  │ Jenkins CI/CD Pipeline              │    │
                                 │  │  - Build Docker Image               │    │
                                 │  │  - Run Tests                        │    │
                                 │  │  - Deploy Container                 │    │
                                 │  │  - Health Check                     │    │
                                 │  └─────────────────────────────────────┘    │
                                 │                                              │
                                 │  ┌─────────────────────────────────────┐    │
                                 │  │ FastAPI Application (Port 8000)     │    │
                                 │  └─────────────────────────────────────┘    │
                                 │                                              │
                                 └──────────────────────────────────────────────┘`}</pre>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Technology Stack</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "Application", value: "FastAPI, Python 3.11" },
            { label: "Package Manager", value: "UV" },
            { label: "Containerization", value: "Docker" },
            { label: "CI/CD", value: "Jenkins" },
            { label: "Testing", value: "Pytest" },
            { label: "Cloud", value: "AWS EC2" },
            { label: "Version Control", value: "Git, GitHub" }
          ].map((item, i) => (
            <div key={i} className="border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Pipeline Stages</h2>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
          <li><strong className="text-foreground">Checkout:</strong> Pull latest code from GitHub</li>
          <li><strong className="text-foreground">Build:</strong> Create Docker image with application code</li>
          <li><strong className="text-foreground">Test:</strong> Run automated unit tests inside container</li>
          <li><strong className="text-foreground">Deploy:</strong> Stop old container and start new one</li>
          <li><strong className="text-foreground">Health Check:</strong> Verify application is running correctly</li>
          <li><strong className="text-foreground">Cleanup:</strong> Remove old Docker images to save space</li>
        </ol>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Learning Journey</h2>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 1: Basic Setup</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Created simple FastAPI application</li>
              <li>Set up AWS EC2 instance</li>
              <li>Installed Docker on EC2</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 2: Jenkins Configuration</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Installed Jenkins in Docker container</li>
              <li>Configured Docker-in-Docker access</li>
              <li>Created first Jenkins pipeline job</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 3: Pipeline Development</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Wrote Jenkinsfile for automated builds</li>
              <li>Configured GitHub integration</li>
              <li>Set up automated triggers</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 4: Testing & Deployment</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Added pytest for automated testing</li>
              <li>Implemented health checks</li>
              <li>Configured proper deployment process</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Challenges Faced</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2"> Docker Permissions</h4>
            <p className="text-sm text-muted-foreground">Jenkins container needed special permissions to access Docker socket</p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2"> Network Isolation</h4>
            <p className="text-sm text-muted-foreground">Health checks couldn't reach containers via localhost</p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2"> Security Groups</h4>
            <p className="text-sm text-muted-foreground">Had to configure AWS firewall rules for ports 8080 and 8000</p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2"> Shell Syntax</h4>
            <p className="text-sm text-muted-foreground">Different shell syntax requirements in Jenkins pipeline</p>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">API Endpoints</h2>
        <div className="space-y-3 mb-8">
          <div className="border border-border p-4 font-mono">
            <p className="text-sm text-muted-foreground mb-1">GET /</p>
            <p className="text-sm">Returns welcome message</p>
          </div>
          <div className="border border-border p-4 font-mono">
            <p className="text-sm text-muted-foreground mb-1">GET /shahryar</p>
            <p className="text-sm">Returns custom endpoint response</p>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Deployment Process</h2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
          <li>Make changes to code</li>
          <li>Commit and push to GitHub</li>
          <li>Jenkins automatically detects changes</li>
          <li>Pipeline builds Docker image</li>
          <li>Tests run automatically</li>
          <li>If tests pass, application deploys</li>
          <li>Health check verifies deployment</li>
          <li>Application is live</li>
        </ol>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Future Improvements</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            "Add staging environment",
            "Implement blue-green deployment",
            "Add monitoring and alerting",
            "Set up HTTPS with SSL certificate",
            "Add database integration",
            "Implement proper logging",
            "Add security scanning",
            "Create infrastructure as code with Terraform"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-foreground">→</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What I Learned</h2>
        <div className="bg-muted/30 border border-border p-6 space-y-3 mb-8">
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">How to containerize applications with Docker</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Setting up and configuring Jenkins</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Writing declarative Jenkins pipelines</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Docker-in-Docker concepts</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">AWS EC2 and security group management</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Automated testing in CI/CD</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Git workflow for continuous deployment</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Troubleshooting deployment issues</span>
          </p>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Project Structure</h2>
        <div className="bg-muted/30 border border-border p-6 rounded font-mono text-xs mb-8">
          <pre>{`cicd/
├── main.py                 # FastAPI application
├── test_main.py           # Unit tests
├── Dockerfile             # Docker configuration
├── Jenkinsfile            # Jenkins pipeline definition
├── pyproject.toml         # Python dependencies
├── uv.lock               # Locked dependencies
├── docker-compose.yml    # Docker Compose config
├── ec2-setup.sh          # EC2 setup script
└── README.md             # Documentation`}</pre>
        </div>

        <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mt-12">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> This is a learning project and should not be used in production
            without additional security hardening, proper secret management, and infrastructure improvements.
          </p>
        </div>
      </div>
    )
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Shahryar's Blog`,
    description: `${post.title} - ${post.readTime}. ${post.tags.join(", ")}`,
    keywords: post.tags.join(", "),
    authors: [{ name: "Shahryar" }],
    openGraph: {
      title: post.title,
      description: `${post.readTime} | ${post.tags.join(", ")}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Shahryar"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.readTime} | ${post.tags.join(", ")}`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-20 selection:bg-white selection:text-black antialiased">
      {/* Navigation */}
      <header className="flex items-center justify-between mb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Blog
        </Link>
        <Link
          href="/"
          className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
      </header>

      {/* Article Header */}
      <article>
        <header className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1.5 bg-muted/30 text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="mb-16">
          {post.content}
        </div>

        {/* Article Footer */}
        <footer className="pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Written by</p>
              <p className="text-xl font-serif font-medium">Shahryar</p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm uppercase tracking-wider hover:border-foreground transition-colors"
              >
                More articles
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}