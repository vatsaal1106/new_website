import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { AnimatedText } from "@/components/animated-text"
import { TechGrid } from "@/components/tech-grid"
import { FeatureCard } from "@/components/feature-card"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Cpu,
  Database,
  LineChart,
  Lock,
  Zap,
  Network,
  Layers,
  ChevronRight,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import { LLMDemo } from "@/components/llm-demo"
import { BusinessFlowVisualization } from "@/components/business-flow-visualization"
import { AiModelVisualization } from "@/components/ai-model-visualization"
import { TeamGrid } from "@/components/team-grid"
import { OfficeVisualization } from "@/components/office-visualization"
import { SecurityVisualization } from "@/components/security-visualization"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedGradientBackground />

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-black-transparent%20%281%29-Db3SdehP0JrcUcUHTF8q2djENu6ub0.png"
              alt="Nova"
              width={32}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-white-transparent%20%281%29-yFOLBYoxl6vM9zTl1C1LNZJ91eCzBs.png"
              alt="Nova"
              width={32}
              height={32}
              className="hidden dark:block"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-light hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-sm font-light hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="#security" className="text-sm font-light hover:text-primary transition-colors">
              Security
            </Link>
            <Link href="#demo" className="text-sm font-light hover:text-primary transition-colors">
              Demo
            </Link>
            <Link href="#about" className="text-sm font-light hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/events" className="text-sm font-light hover:text-primary transition-colors">
              Events
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="glow" className="rounded-full" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="container relative z-10">
            <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-8 text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">Introducing Nova AI</span>
                <div className="mx-1 h-1 w-1 rounded-full bg-primary"></div>
                <span className="text-xs">Frontier AI for Enterprise</span>
              </div>

              <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                <AnimatedText text="Custom AI Architecture" />
                <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  <AnimatedText text="For Enterprise Intelligence" />
                </span>
              </h1>

              <div className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-light">
                <AnimatedText text="Hyper-optimized AI models for Business Intelligence and ERP. Secure, reliable, and vertically integrated solutions that maintain complete chain of custody over your data." />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="glow" className="rounded-full" asChild>
                  <Link href="/contact">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>

              <div className="mt-8 w-full">
                <LLMDemo />
              </div>

              <div className="mt-8 p-4 border rounded-xl bg-background/50 backdrop-blur">
                <h3 className="text-sm font-medium mb-2">AI Processing Visualization</h3>
                <TechGrid />
                <p className="text-xs text-muted-foreground mt-2 font-light">
                  Real-time visualization of Nova's neural network data processing
                </p>
              </div>
            </div>
          </div>

          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-1/4 left-10 w-16 h-16 border-4 border-red-500 rounded-full opacity-20 dark:opacity-40"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-yellow-400 opacity-10 dark:opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 opacity-10 dark:opacity-30"></div>
        </section>

        <section id="features" className="container py-24 sm:py-32 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute -top-10 right-10 w-20 h-20 bg-red-500 opacity-10 dark:opacity-20 rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-32 h-8 bg-blue-500 opacity-10 dark:opacity-20"></div>

          <div className="grid gap-16">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">Features</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl tracking-tight">
                Enterprise-Grade AI Solutions
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-light">
                Leverage the power of custom AI models designed specifically for your business needs.
              </p>
            </div>

            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Cpu}
                title="Custom Architecture"
                description="Hyper-optimized AI models built specifically for your use case with proprietary architecture"
                className="border-l-4 border-l-blue-500"
              />
              <FeatureCard
                icon={Shield}
                title="Enterprise Security"
                description="Maintain complete chain of custody over your sensitive data with our secure infrastructure"
                className="border-l-4 border-l-red-500"
              />
              <FeatureCard
                icon={Database}
                title="Vertical Integration"
                description="End-to-end solutions from model training to deployment with seamless integration"
                className="border-l-4 border-l-yellow-400"
              />
              <FeatureCard
                icon={LineChart}
                title="BI & ERP Focus"
                description="Specialized in business intelligence and enterprise resource planning applications"
                className="border-l-4 border-l-yellow-400"
              />
              <FeatureCard
                icon={Network}
                title="Agentic AI"
                description="Reliable agentic AI systems that can autonomously solve complex business problems"
                className="border-l-4 border-l-blue-500"
              />
              <FeatureCard
                icon={Zap}
                title="Performance Optimized"
                description="Lightning-fast inference with optimized models that reduce computational overhead"
                className="border-l-4 border-l-red-500"
              />
            </div>
          </div>
        </section>

        <section id="technology" className="py-24 sm:py-32 bg-muted/30 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-20 left-1/4 w-16 h-16 border-4 border-yellow-400 opacity-20 dark:opacity-40" />
          <div className="absolute bottom-20 right-1/4 w-24 h-8 bg-red-500 opacity-10 dark:opacity-30" />

          <div className="container">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                    <span className="text-xs font-medium">Our Technology</span>
                  </div>
                  <h2 className="text-3xl font-semibold sm:text-4xl tracking-tight">
                    Frontier AI Models with Custom Architecture
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Nova builds proprietary AI models from the ground up, optimized specifically for enterprise use
                    cases. Our approach combines cutting-edge research with practical business applications.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                    <div className="rounded-full bg-blue-500/20 dark:bg-blue-500/40 p-2.5">
                      <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Proprietary Model Architecture</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Custom-built neural networks optimized for specific business domains
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                    <div className="rounded-full bg-red-500/20 dark:bg-red-500/40 p-2.5">
                      <ChevronRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Efficient Training Pipeline</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Accelerated model training with our efficient data pipeline
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                    <div className="rounded-full bg-yellow-400/20 dark:bg-yellow-400/40 p-2.5">
                      <ChevronRight className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Agentic Framework</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Deploy purpose-built agents to automate with safety and reliability
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Increased height for better visualization */}
              <div className="aspect-square md:aspect-auto md:h-[800px] overflow-hidden rounded-2xl border bg-muted">
                <AiModelVisualization />
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="container py-24 sm:py-32 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-1/3 right-10 w-12 h-12 bg-blue-500 rounded-full opacity-10 dark:opacity-30" />
          <div className="absolute bottom-1/4 left-20 w-16 h-16 bg-red-500 opacity-10 dark:opacity-20 rotate-45" />

          <div className="mx-auto grid gap-16 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                  <span className="text-xs font-medium">Security</span>
                </div>
                <h2 className="text-3xl font-semibold sm:text-4xl tracking-tight">Enterprise-Grade Security</h2>
                <p className="text-muted-foreground font-light">
                  Nova ensures complete data security and privacy through our vertically integrated approach. Your data
                  never leaves your control, maintaining the chain of custody at all times.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-blue-500/20 dark:bg-blue-500/40 p-2.5">
                    <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">End-to-end Encryption</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Military-grade encryption with attack-resistant algorithms
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-red-500/20 dark:bg-red-500/40 p-2.5">
                    <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">On-premises Deployment</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Secure deployment options for sensitive environments
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-yellow-400/20 dark:bg-yellow-400/40 p-2.5">
                    <Database className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Compliance & Certification</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      SOC 2 Type II and ISO27001 certified infrastructure
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border bg-background/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-blue-500/20 dark:bg-blue-500/40 p-2.5">
                    <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Multi-tenant Architecture</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Secure isolation with complete data separation
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/security-whitepaper">
                    Security Whitepaper
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/compliance">
                    Compliance Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Increased height for better visualization */}
            <div className="aspect-square md:aspect-auto md:h-[800px] overflow-hidden rounded-2xl border bg-muted">
              <SecurityVisualization />
            </div>
          </div>
        </section>

        <section id="demo" className="py-24 sm:py-32 bg-muted/30 relative">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">Interactive Demo</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl tracking-tight">
                Multi-Domain AI Processing
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-light">
                See how Nova processes and analyzes data across different business domains simultaneously.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <BusinessFlowVisualization />
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 opacity-10 dark:opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-red-500 opacity-20 dark:opacity-30"></div>

          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">About Nova</span>
              </div>
              <h2 className="text-3xl font-semibold sm:text-4xl tracking-tight">
                Pioneering the Future of Enterprise AI
              </h2>
              <p className="text-muted-foreground font-light">
                Nova was founded by a team of industry professionals spanning diverse industries and fields from
                Information Technology and Cybersecurity to Business Management and Process Engineering. We blend our
                shared experiences to engineer solutions that people can actually use. We are a lab with a business not
                the other way around. We don't build software. We engineer intelligence.
              </p>
              <p className="text-muted-foreground font-light">
                Our team combines expertise in machine learning, distributed systems, and enterprise software to create
                AI solutions that solve real business problems without compromising on data security.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/research">Research Papers</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <TeamGrid />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <AiModelVisualization />
              </div>
              <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-2xl bg-muted">
                <OfficeVisualization />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/50 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-red-500 opacity-10 dark:opacity-20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-4 border-blue-500 opacity-20 dark:opacity-30"></div>

          <div className="container py-24 sm:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">Get Started</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-light">
                Join leading enterprises in leveraging custom AI solutions for your business.
              </p>
              <Button size="lg" variant="glow" className="mt-4 rounded-full" asChild>
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-24 sm:py-32 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 opacity-10 dark:opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-red-500 opacity-20 dark:opacity-30"></div>

          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="text-xs font-medium">Backed By</span>
            </div>
            <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl tracking-tight">
              Trusted by Leading Investors
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-light">
              We're backed by the world's top venture capital firms and technology investors.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* UQ Ventures */}
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-background/50 p-8 backdrop-blur transition-colors hover:bg-muted/50">
              <div className="relative h-16 w-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/labs-partner-uq-ventures-tile-uQTC0D1JUZ4KHKbDXcczHytjcDjd1Z.png"
                  alt="UQ Ventures"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium">UQ Ventures</h3>
                <p className="mt-1 text-xs text-muted-foreground">Institutional Partner</p>
              </div>
            </div>

            {/* UniQuest */}
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-background/50 p-8 backdrop-blur transition-colors hover:bg-muted/50">
              <div className="relative h-16 w-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Uniquest-Logo-CMYK-T40qq3Z1aQgOM8utg4Hv5s8zj827hn.png"
                  alt="UniQuest"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium">UniQuest</h3>
                <p className="mt-1 text-xs text-muted-foreground">Research Commercialization Partner</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <p className="text-muted-foreground">Backed by leading Australian research institutions</p>
          </div>
        </section>

        <section className="border-t bg-muted/50 relative">
          {/* Bauhaus-inspired geometric elements */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-red-500 opacity-10 dark:opacity-20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-4 border-blue-500 opacity-20 dark:opacity-30"></div>

          <div className="container py-24 sm:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-xs font-medium">Get Started</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-light">
                Join leading enterprises in leveraging custom AI solutions for your business.
              </p>
              <Button size="lg" variant="glow" className="mt-4 rounded-full" asChild>
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/20">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-black-transparent%20(1)-RoJy5FTLaRx7EtAfIxSeOm6TH3AZ5A.png"
                  alt="Nova Logo"
                  width={24}
                  height={24}
                  className="dark:hidden"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-white-transparent%20(1)-eeYfJwA0IhgYF1Pwm7D26xk10AhqIe.png"
                  alt="Nova Logo"
                  width={24}
                  height={24}
                  className="hidden dark:block"
                />
                <span className="font-semibold tracking-tight">Nova</span>
              </div>
              <p className="text-sm text-muted-foreground font-light">
                Pioneering the future of enterprise AI with custom-architected models for business intelligence and ERP
                systems.
              </p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/nova" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://github.com/nova" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com/company/nova" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="text-muted-foreground hover:text-foreground">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-muted-foreground hover:text-foreground">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-muted-foreground hover:text-foreground">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/data-processing" className="text-muted-foreground hover:text-foreground">
                    Data Processing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground font-light">
              © {new Date().getFullYear()} Nova AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-light mt-4 sm:mt-0">
              Designed and built with cutting-edge technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

