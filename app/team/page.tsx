import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const leadership: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former ML Research Lead at DeepMind. PhD in Computer Science from Stanford. Pioneer in neural architecture search and efficient ML systems.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "20+ years in enterprise software. Previously VP of Engineering at Palantir. Built scalable AI systems for Fortune 500 companies.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/mrodriguez",
      linkedin: "https://linkedin.com/in/mrodriguez",
    },
  },
  {
    name: "Dr. James Wilson",
    role: "Chief Research Officer",
    bio: "Published 50+ papers in top AI conferences. Led breakthrough research in transformer architectures and efficient training methods.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/jwilson",
      github: "https://github.com/jwilson",
    },
  },
]

const team: TeamMember[] = [
  {
    name: "Emily Chang",
    role: "Lead ML Engineer",
    bio: "Specializes in distributed training systems and model optimization.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      github: "https://github.com/echang",
    },
  },
  {
    name: "David Kumar",
    role: "Security Architect",
    bio: "Expert in cryptographic systems and secure ML deployment.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/dkumar",
    },
  },
  {
    name: "Lisa Park",
    role: "Research Scientist",
    bio: "Focus on reinforcement learning and multi-agent systems.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "https://twitter.com/lisapark",
    },
  },
  // Add more team members as needed
]

export default function TeamPage() {
  return (
    <main className="flex-1">
      <section className="container py-24 sm:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">Our Team</h1>
          <p className="mt-4 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Meet the minds behind Nova's revolutionary AI technology. Our diverse team combines expertise in machine
            learning, distributed systems, and enterprise software.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="mb-12 text-2xl font-semibold tracking-tight">Leadership</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      {member.social.twitter && (
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      )}
                      {member.social.github && (
                        <Link href={member.social.github} className="text-muted-foreground hover:text-foreground">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      )}
                      {member.social.linkedin && (
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="mb-12 text-2xl font-semibold tracking-tight">Team Members</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      {member.social.twitter && (
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      )}
                      {member.social.github && (
                        <Link href={member.social.github} className="text-muted-foreground hover:text-foreground">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      )}
                      {member.social.linkedin && (
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[58rem] text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Join Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            We're always looking for talented individuals to join our mission of revolutionizing enterprise AI.
          </p>
          <Button asChild className="mt-8" variant="glow">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

