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
  },
  "attendance-management-system-aws-eks": {
    title: "Production-Ready Attendance System: FastAPI, WebSockets & AWS EKS",
    date: "2025-01-15",
    readTime: "18 min read",
    tags: ["FastAPI", "Kubernetes", "AWS EKS", "WebSockets", "MongoDB", "Docker"],
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-serif font-medium mb-6">Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This project represents a complete production-ready backend system built from scratch, demonstrating
          end-to-end software engineering capabilities. I designed and deployed a real-time attendance management
          system with JWT authentication, role-based access control, WebSocket communication, and full Kubernetes
          orchestration on AWS EKS. The system handles concurrent users, implements security best practices, and
          scales automatically based on demand.
        </p>

        <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">🔗 Live System:</strong>{" "}
            <a href="http://a6d4d72195a6a4ec3b59f17ba1fcdf43-1710295516.us-east-1.elb.amazonaws.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-foreground underline hover:text-muted-foreground">
              Production API
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">📚 API Documentation:</strong> Available at <code className="bg-muted px-1 rounded">/docs</code> (Swagger UI) and <code className="bg-muted px-1 rounded">/redoc</code> (ReDoc)
          </p>
        </div>

        {/* Live Deployment Screenshot */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-medium mb-4">Live Production Deployment</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            The system is live and accessible on AWS EKS. Here's a screenshot of the root endpoint confirming the backend is running:
          </p>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <img 
              src="/blog/attendance-live-deployment.png" 
              alt="Live production deployment showing root endpoint response from AWS EKS LoadBalancer"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            Browser screenshot showing the live API response from the AWS EKS LoadBalancer endpoint
          </p>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What I Built</h2>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">1. Authentication & Authorization System</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Implemented a secure authentication system from the ground up:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">JWT Token Authentication:</strong> Bearer token-based authentication with 24-hour expiration</li>
          <li><strong className="text-foreground">Password Security:</strong> bcrypt hashing with 10 rounds for secure password storage</li>
          <li><strong className="text-foreground">Role-Based Access Control (RBAC):</strong> Teacher and Student roles with protected endpoints</li>
          <li><strong className="text-foreground">Dependency Injection:</strong> FastAPI dependency system for route protection</li>
          <li><strong className="text-foreground">Token Verification:</strong> Middleware for validating JWT tokens on every request</li>
        </ul>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">2. RESTful API Architecture</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Built 9 production-ready REST endpoints with comprehensive error handling:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Authentication</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><code className="bg-muted px-1 rounded">POST /signup</code> - User registration</li>
              <li><code className="bg-muted px-1 rounded">POST /login</code> - JWT token generation</li>
              <li><code className="bg-muted px-1 rounded">GET /me</code> - Current user profile</li>
            </ul>
          </div>
          <div className="border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Class Management</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><code className="bg-muted px-1 rounded">POST /class</code> - Create class (Teacher)</li>
              <li><code className="bg-muted px-1 rounded">POST /class/{`{id}`}/add-student</code> - Enroll student</li>
              <li><code className="bg-muted px-1 rounded">GET /class/{`{id}`}</code> - Class details</li>
              <li><code className="bg-muted px-1 rounded">GET /students</code> - List all students</li>
            </ul>
          </div>
          <div className="border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Attendance</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><code className="bg-muted px-1 rounded">POST /attendance/start</code> - Start session (Teacher)</li>
              <li><code className="bg-muted px-1 rounded">GET /class/{`{id}`}/my-attendance</code> - View status (Student)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">3. Real-Time WebSocket Server</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Implemented a bidirectional WebSocket server for real-time attendance tracking:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">JWT Authentication:</strong> WebSocket connections authenticated with JWT tokens</li>
          <li><strong className="text-foreground">Event-Driven Architecture:</strong> 4 event types for different operations</li>
          <li><strong className="text-foreground">Broadcasting:</strong> Teacher events broadcast to all connected students</li>
          <li><strong className="text-foreground">Unicasting:</strong> Student-specific responses for individual queries</li>
          <li><strong className="text-foreground">Connection Management:</strong> Automatic cleanup of disconnected clients</li>
          <li><strong className="text-foreground">Session Management:</strong> In-memory tracking of active attendance sessions</li>
        </ul>

        <div className="bg-muted/30 border border-border p-6 rounded mb-6">
          <p className="text-sm font-mono text-muted-foreground mb-3">WebSocket Events:</p>
          <div className="space-y-2 text-sm">
            <div><code className="bg-background px-2 py-1 rounded">ATTENDANCE_MARKED</code> - Teacher marks student present/absent (broadcast)</div>
            <div><code className="bg-background px-2 py-1 rounded">TODAY_SUMMARY</code> - Get attendance statistics (broadcast)</div>
            <div><code className="bg-background px-2 py-1 rounded">DONE</code> - Finalize session & persist to database (broadcast)</div>
            <div><code className="bg-background px-2 py-1 rounded">MY_ATTENDANCE</code> - Student checks own status (unicast)</div>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">4. Database Architecture</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Designed and implemented a MongoDB schema with three collections:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">users:</strong> User accounts with hashed passwords, roles, and metadata</li>
          <li><strong className="text-foreground">classes:</strong> Class entities with teacher assignment and student enrollment arrays</li>
          <li><strong className="text-foreground">attendance_records:</strong> Historical attendance data with timestamps and status</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Used MongoDB Atlas for cloud-hosted database with async PyMongo operations, upsert patterns for
          idempotent writes, and efficient querying for real-time operations.
        </p>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">5. Containerization & Docker</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>Optimized multi-stage Dockerfile resulting in 253MB production image</li>
          <li>Environment-based configuration with .env support</li>
          <li>Published to Docker Hub for easy deployment</li>
          <li>Health check endpoints for container orchestration</li>
          <li>Production-ready container with minimal attack surface</li>
        </ul>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">6. Kubernetes Orchestration</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Created 7 production-ready Kubernetes manifests:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            "Namespace - Environment isolation",
            "Secret - Encrypted MongoDB credentials",
            "ConfigMap - Application configuration",
            "Deployment - Pod specification with health checks",
            "Service - LoadBalancer for public access",
            "HPA - Horizontal Pod Autoscaler (1-5 pods)",
            "Ingress - HTTPS-ready routing configuration"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground border border-border p-3">
              <span className="text-foreground">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">7. AWS EKS Production Deployment</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>Created and configured AWS EKS cluster from scratch</li>
          <li>Configured node groups with t3.small instances</li>
          <li>Deployed application with kubectl apply</li>
          <li>Obtained public LoadBalancer URL for external access</li>
          <li>Verified production deployment with live API testing</li>
          <li>Implemented auto-scaling based on CPU and memory metrics</li>
        </ul>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">System Architecture</h2>
        
        {/* Deployment Workflow Diagram */}
        <div className="mb-8">
          <h3 className="text-xl font-serif font-medium mb-4">Deployment Workflow</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            The complete deployment pipeline from development to production, showing the journey from containerization
            to public availability on AWS EKS:
          </p>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <img 
              src="/blog/attendance-deployment-workflow.png" 
              alt="Deployment workflow diagram showing Dockerization → Docker Hub → AWS EKS → LoadBalancer → Public Access"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            High-level deployment workflow: Application components (HTTP, WebSocket, MongoDB) are containerized,
            pushed to Docker Hub, deployed to AWS EKS cluster, and exposed via LoadBalancer for public internet access
          </p>
        </div>

        <div className="bg-muted/30 border border-border p-6 rounded font-mono text-xs overflow-x-auto mb-8">
          <pre>{`┌──────────────────────────────────────────────┐
│          Internet (Users)                     │
│      Teachers & Students                      │
└───────────────────┬──────────────────────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │  AWS Load Balancer   │
         │  (Public IP)         │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ Kubernetes Service   │
         │ (LoadBalancer)       │
         └──────────┬───────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│  Pod 1        │       │  Pods 2-5     │
│  FastAPI      │       │  (Auto-scale) │
│  + JWT        │       │               │
│  + WebSocket  │       │               │
└───────┬───────┘       └───────┬───────┘
        │                       │
        └───────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │   MongoDB Atlas      │
         │   - users            │
         │   - classes          │
         │   - attendance       │
         └──────────────────────┘`}</pre>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Technology Stack</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "Language", value: "Python 3.11" },
            { label: "Framework", value: "FastAPI 0.128.0" },
            { label: "Database", value: "MongoDB Atlas (Cloud)" },
            { label: "Authentication", value: "PyJWT + bcrypt" },
            { label: "Validation", value: "Pydantic 2.12.5" },
            { label: "Real-Time", value: "FastAPI WebSockets" },
            { label: "Containerization", value: "Docker" },
            { label: "Orchestration", value: "Kubernetes 1.32" },
            { label: "Cloud Platform", value: "AWS EKS" },
            { label: "Load Balancing", value: "AWS ELB (Managed)" },
            { label: "Registry", value: "Docker Hub" },
            { label: "API Docs", value: "Swagger UI + ReDoc" }
          ].map((item, i) => (
            <div key={i} className="border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Development Journey</h2>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 1: Authentication Foundation</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Implemented user signup with email validation and password requirements</li>
              <li>Integrated bcrypt for secure password hashing (10 rounds)</li>
              <li>Built JWT token generation with expiration handling</li>
              <li>Created login endpoint with credential verification</li>
              <li>Developed token verification middleware for protected routes</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 2: Role-Based Access Control</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Designed Teacher and Student role system</li>
              <li>Created <code className="bg-muted px-1 rounded">require_teacher()</code> dependency decorator</li>
              <li>Created <code className="bg-muted px-1 rounded">require_student()</code> dependency decorator</li>
              <li>Protected all sensitive endpoints with role checks</li>
              <li>Implemented authorization logic for data access</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 3: REST API Development</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Built 9 HTTP endpoints with proper HTTP methods</li>
              <li>Implemented class management CRUD operations</li>
              <li>Created student enrollment system</li>
              <li>Developed attendance tracking endpoints</li>
              <li>Added comprehensive error handling and validation</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 4: WebSocket Real-Time Communication</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Implemented bidirectional WebSocket server</li>
              <li>Added JWT authentication for WebSocket connections</li>
              <li>Created event-driven architecture with 4 event types</li>
              <li>Built broadcasting system for teacher-to-students communication</li>
              <li>Implemented unicasting for student-specific responses</li>
              <li>Added connection lifecycle management and cleanup</li>
              <li>Created in-memory session tracking for active attendance</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 5: Database Integration</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Set up MongoDB Atlas cloud database</li>
              <li>Designed schema for users, classes, and attendance collections</li>
              <li>Implemented async MongoDB operations with PyMongo</li>
              <li>Created upsert patterns for idempotent writes</li>
              <li>Optimized queries for real-time performance</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 6: Dockerization</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Created optimized Dockerfile with multi-stage build capability</li>
              <li>Reduced image size to 253MB through optimization</li>
              <li>Configured environment-based settings</li>
              <li>Built and tested container locally</li>
              <li>Published to Docker Hub for distribution</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 7: Kubernetes Orchestration</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Created 7 Kubernetes manifests for production deployment</li>
              <li>Configured health checks (liveness and readiness probes)</li>
              <li>Set up Horizontal Pod Autoscaler for 1-5 pods</li>
              <li>Implemented resource limits and requests</li>
              <li>Configured secret management for sensitive data</li>
              <li>Set up LoadBalancer service for public access</li>
            </ul>
          </div>

          <div className="border-l-2 border-border pl-6">
            <h3 className="text-xl font-serif font-medium mb-2">Phase 8: AWS EKS Production Deployment</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Created AWS EKS cluster using eksctl</li>
              <li>Configured node groups with appropriate instance types</li>
              <li>Deployed application using kubectl</li>
              <li>Obtained and verified public LoadBalancer URL</li>
              <li>Tested live API endpoints and WebSocket connections</li>
              <li>Verified auto-scaling functionality</li>
              <li>Documented deployment process and architecture</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Key Technical Achievements</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2">Security Best Practices</h4>
            <p className="text-sm text-muted-foreground">
              Implemented industry-standard security: bcrypt password hashing, JWT tokens with expiration,
              role-based authorization, Pydantic input validation, and Kubernetes secrets for credential management.
              No hardcoded credentials in the codebase.
            </p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2">Scalability & Performance</h4>
            <p className="text-sm text-muted-foreground">
              Designed for horizontal scaling with Kubernetes HPA. API response times under 100ms, WebSocket
              latency under 50ms. Auto-scaling from 1 to 5 pods based on CPU and memory metrics. Optimized
              database queries for real-time operations.
            </p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2">Production Readiness</h4>
            <p className="text-sm text-muted-foreground">
              Full production deployment with health checks, logging, error handling, API documentation (Swagger/ReDoc),
              resource limits, and monitoring capabilities. Containerized application ready for CI/CD integration.
            </p>
          </div>
          <div className="bg-muted/20 border border-border p-4">
            <h4 className="font-medium mb-2">Real-Time Architecture</h4>
            <p className="text-sm text-muted-foreground">
              Implemented event-driven WebSocket server with connection management, broadcasting, and unicasting.
              Handles concurrent connections, automatic cleanup, and session state management for real-time
              attendance tracking.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">API Usage Examples</h2>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">1. User Signup</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Register a new user with email, password, and role. The endpoint validates input, hashes the password
          with bcrypt, and returns the created user object with a unique ID.
        </p>
        <div className="bg-muted/30 border border-border p-4 rounded font-mono text-xs mb-4 overflow-x-auto">
          <pre>{`curl -X POST http://YOUR-URL/signup \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Alice Teacher",
    "email": "alice@example.com",
    "password": "secure123",
    "role": "teacher"
  }'`}</pre>
        </div>

        {/* API Client Screenshot */}
        <div className="mb-8">
          <p className="text-muted-foreground mb-4 text-sm">
            <strong className="text-foreground">Live API Example:</strong> Here's a real API request to the production
            endpoint showing successful user registration:
          </p>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <img 
              src="/blog/attendance-api-signup.png" 
              alt="API client screenshot showing successful POST /signup request with 200 OK response, demonstrating user registration endpoint"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            Postman/API client screenshot showing a successful signup request. The request body contains user credentials
            (name, email, password, role), and the response confirms successful creation with a 200 OK status and
            returns the user object with a unique MongoDB _id.
          </p>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">2. Login & Get JWT Token</h3>
        <div className="bg-muted/30 border border-border p-4 rounded font-mono text-xs mb-4 overflow-x-auto">
          <pre>{`curl -X POST http://YOUR-URL/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "alice@example.com",
    "password": "secure123"
  }'

# Response: { "token": "eyJhbGci...", "type": "bearer" }`}</pre>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">3. Create Class (Teacher Only)</h3>
        <div className="bg-muted/30 border border-border p-4 rounded font-mono text-xs mb-4 overflow-x-auto">
          <pre>{`curl -X POST http://YOUR-URL/class \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"className": "Math 101"}'`}</pre>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-4 mt-8">4. WebSocket Connection</h3>
        <div className="bg-muted/30 border border-border p-4 rounded font-mono text-xs mb-6 overflow-x-auto">
          <pre>{`// Connect with JWT token
const ws = new WebSocket(
  'ws://YOUR-URL/ws?token=YOUR_JWT_TOKEN'
);

// Teacher: Mark attendance (broadcast to all)
ws.send(JSON.stringify({
  event: "ATTENDANCE_MARKED",
  data: {
    studentId: "6956d29bec1c68d87f5916e7",
    status: "present"
  }
}));

// Student: Check own status (unicast)
ws.send(JSON.stringify({
  event: "MY_ATTENDANCE",
  data: {}
}));

// Receive real-time updates
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log(msg.event, msg.data);
};`}</pre>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Performance Metrics</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "API Response Time", value: "< 100ms" },
            { label: "WebSocket Latency", value: "< 50ms" },
            { label: "Docker Build Time", value: "47 seconds" },
            { label: "Image Size", value: "253MB" },
            { label: "Pod Startup Time", value: "< 30 seconds" },
            { label: "Auto-scaling Range", value: "1-5 pods" },
            { label: "Database", value: "MongoDB Atlas (Cloud)" },
            { label: "Concurrent Connections", value: "Tested with multiple users" }
          ].map((item, i) => (
            <div key={i} className="border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What I Learned</h2>
        <div className="bg-muted/30 border border-border p-6 space-y-3 mb-8">
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Building production-ready FastAPI applications with authentication and authorization</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Implementing real-time bidirectional communication with WebSockets</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Designing and deploying applications on Kubernetes (K8s)</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Working with AWS EKS for managed Kubernetes clusters</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Containerization best practices and Docker optimization</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">MongoDB Atlas integration with async operations</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Horizontal Pod Autoscaling (HPA) configuration</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Kubernetes secrets and ConfigMaps for configuration management</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Event-driven architecture for real-time systems</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-foreground font-medium">✓</span>
            <span className="text-muted-foreground">Production deployment practices and troubleshooting</span>
          </p>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Project Structure</h2>
        <div className="bg-muted/30 border border-border p-6 rounded font-mono text-xs mb-8">
          <pre>{`attendencebackend/
├── main.py                 # Complete FastAPI app (600+ lines)
├── model.py                # Pydantic models
├── app.py                  # Test API
├── requirements.txt        # Dependencies
├── Dockerfile             # Container definition
├── .dockerignore          # Build exclusions
├── .env                   # Environment variables
│
├── k8s/                   # Kubernetes manifests
│   ├── namespace.yml      # Environment isolation
│   ├── secret.yml         # Encrypted credentials
│   ├── configmap.yml      # Configuration data
│   ├── deployment.yml     # Pod specification
│   ├── service.yml        # LoadBalancer service
│   ├── hpa.yml            # Auto-scaling config
│   └── ingress.yml        # Routing configuration
│
└── docs/                  # Documentation
    ├── README.md
    ├── PORTFOLIO-README.md
    ├── PROJECT-SUMMARY.md
    └── AWS-EKS-DEPLOYMENT-GUIDE.md`}</pre>
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Future Enhancements</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            "CI/CD pipeline with GitHub Actions",
            "Monitoring with Prometheus & Grafana",
            "SSL/TLS certificates for HTTPS",
            "API rate limiting and throttling",
            "Redis caching for performance",
            "Email notifications for attendance",
            "Advanced analytics and reporting",
            "Mobile app integration",
            "Multi-tenant support",
            "Audit logging system"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-foreground">→</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mt-12">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Production Status:</strong> This system is deployed and running on AWS EKS.
            The API is publicly accessible and demonstrates production-ready backend engineering with real-time capabilities,
            security best practices, and scalable architecture. All code was written from scratch, showcasing full-stack
            backend development skills from authentication to cloud deployment.
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