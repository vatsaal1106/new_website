import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"

interface Paper {
  title: string
  authors: string[]
  abstract: string
  conference: string
  year: number
  tags: string[]
  pdfUrl: string
  codeUrl?: string
}

const papers: Paper[] = [
  {
    title: "Efficient Training of Large Language Models for Enterprise Applications",
    authors: ["Sarah Chen", "James Wilson", "Michael Rodriguez"],
    abstract:
      "We present a novel approach to training large language models that reduces computational requirements by 60% while maintaining model performance. Our method is particularly suited for enterprise applications where data efficiency is crucial.",
    conference: "NeurIPS 2024",
    year: 2024,
    tags: ["Large Language Models", "Efficient Training", "Enterprise AI"],
    pdfUrl: "/papers/efficient-training-llm.pdf",
    codeUrl: "https://github.com/nova/efficient-llm",
  },
  {
    title: "Secure Multi-Party Computation for Distributed AI Systems",
    authors: ["David Kumar", "Lisa Park"],
    abstract:
      "A comprehensive framework for implementing secure multi-party computation in distributed AI systems, enabling multiple parties to jointly compute AI models while keeping their input data private.",
    conference: "ICML 2024",
    year: 2024,
    tags: ["Security", "Distributed Systems", "Privacy"],
    pdfUrl: "/papers/secure-mpc.pdf",
  },
  {
    title: "Neural Architecture Search for Resource-Constrained Environments",
    authors: ["Emily Chang", "Sarah Chen"],
    abstract:
      "An innovative approach to neural architecture search that specifically targets resource-constrained enterprise environments, achieving state-of-the-art performance with minimal computational overhead.",
    conference: "ICLR 2024",
    year: 2024,
    tags: ["Neural Architecture Search", "Efficiency", "Enterprise"],
    pdfUrl: "/papers/nas-resource-constrained.pdf",
    codeUrl: "https://github.com/nova/efficient-nas",
  },
]

const categories = ["All Papers", "Large Language Models", "Security", "Efficiency", "Enterprise AI", "Architecture"]

export default function ResearchPage() {
  return (
    <main className="flex-1">
      <section className="container py-24 sm:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">Research at Nova</h1>
          <p className="mt-4 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Advancing the field of AI through groundbreaking research and open collaboration. Our team regularly
            publishes in top conferences and journals.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[80rem]">
          <div className="mb-8 flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Papers" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-8">
            {papers.map((paper) => (
              <Card key={paper.title}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{paper.title}</CardTitle>
                      <p className="mt-2 text-muted-foreground">
                        {paper.authors.join(", ")} • {paper.conference} {paper.year}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href={paper.pdfUrl}>
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download PDF</span>
                        </Link>
                      </Button>
                      {paper.codeUrl && (
                        <Button variant="outline" size="icon" asChild>
                          <Link href={paper.codeUrl}>
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">View Code</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{paper.abstract}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[58rem] text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Collaborate with Us</h2>
          <p className="mt-4 text-muted-foreground">
            Interested in collaborating on research? We're always open to partnerships with academic institutions and
            industry researchers.
          </p>
          <Button asChild className="mt-8" variant="glow">
            <Link href="/contact">Contact Research Team</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

