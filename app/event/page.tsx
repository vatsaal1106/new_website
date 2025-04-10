import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, FileText, BarChart3, Briefcase } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { Metadata } from "next"
import { MysteriousTechAnimation } from "@/components/mysterious-tech-animation"

export const metadata: Metadata = {
  title: "iLab Accelerator Pitch Night | Nova",
  description: "Join us for the iLab accelerator pitch night and discover investment opportunities in frontier AI technology.",
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Hero section with mysterious animation */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Mysterious animated entrance */}
        <div className="absolute inset-0 z-0">
          <MysteriousTechAnimation />
        </div>
        
        <div className="container relative z-10 space-y-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-primary">EXCLUSIVE EVENT</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              <AnimatedText text="iLab Accelerator" />
            </span>
            <span className="block mt-2 text-white">
              <AnimatedText text="Pitch Night" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto font-light">
            <AnimatedText text="Exclusive investor access to frontier AI technology" />
          </p>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto my-8 text-sm">
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="h-6 w-6 text-white" />
              <span className="text-white">April 10, 2025</span>
              <span className="text-white">6:15 PM onwards</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-6 w-6 text-white" />
              <span className="text-white">Princess Theatre</span>
              <span className="text-white">Brisbane</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-6 w-6 text-white" />
              <span className="text-white">Invitation Only</span>
              <span className="text-white">Accredited Investors</span>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="glow" 
              className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary-rgb),0.7)]"
              asChild
            >
              <Link href="#investor-info">
                Investor Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:contact@novaintelligence.tech">
                Request Invitation
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>

      {/* Investor Information Section */}
      <section id="investor-info" className="py-24 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/70 px-4 py-1.5 text-sm">
              <span className="text-xs font-medium text-primary">INVESTMENT OPPORTUNITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Nova AI Investment Metrics
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-[85%] leading-relaxed font-light">
              Exclusive data and insights for our seed funding round
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Financial Card */}
            <div className="bg-gray-900/50 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Financial Opportunity</h3>
                <p className="text-gray-300 mb-6 font-light flex-grow">
                  Strategic seed investment opportunity in Nova's AI-powered Ops Intelligence platform with strong growth trajectory.
                </p>
                <ul className="space-y-3 text-gray-400 border-t border-gray-800 pt-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Positive unit economics by month 18
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    24-month Series A timeline
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Capital-efficient growth model
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Market Card */}
            <div className="bg-gray-900/50 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Market Position</h3>
                <p className="text-gray-300 mb-6 font-light flex-grow">
                  Targeting the $25B Ops Intelligence market with focus on underserved mid-market segment in APAC region.
                </p>
                <ul className="space-y-3 text-gray-400 border-t border-gray-800 pt-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    22% CAGR market growth through 2030
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Initial focus on ANZ market ($180M)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Proprietary AI technology stack
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Team Card */}
            <div className="bg-gray-900/50 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Executive Team</h3>
                <p className="text-gray-300 mb-6 font-light flex-grow">
                  Industry leaders from OpenAI and Google DeepMind with multiple successful exits in deep tech.
                </p>
                <ul className="space-y-3 text-gray-400 border-t border-gray-800 pt-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Vatsal Jayesh Deliwala, CEO
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Pranav Krishna, COO
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)]"
              asChild
            >
              <a href="mailto:contact@novaintelligence.tech">
                Request Investor Deck
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Investment Prospectus Section */}
      <section id="investment-prospectus" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/70 px-4 py-1.5 text-sm">
              <span className="text-xs font-medium text-primary">COMPREHENSIVE ANALYSIS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Investment Prospectus
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-[85%] leading-relaxed font-light">
              Nova AI Sentinel: AI-powered Ops Intelligence Platform
            </p>
          </div>

          {/* Prospectus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Technology Overview */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Proprietary Technology
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Sentinel integrates cutting-edge technologies to deliver unparalleled operational intelligence.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>Autonomous AI Agents with advanced NLP capabilities for decision-making and task execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>Intelligent Workflow Automation using generative AI to optimize business processes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>Unified Data Platform with proprietary AI models designed for operations management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>1 pending patent on our novel AI architecture for operational intelligence</span>
                </li>
              </ul>
            </div>

            {/* Financial Projections */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Financial Projections (USD)
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Conservative 5-year financial model showing sustainable growth potential.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="overflow-hidden rounded-md border border-gray-800">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Year</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Revenue</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">EBITDA</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Y1</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">$1.2M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">-$1.1M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">-92%</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Y3</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">$6.5M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">$0.9M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">14%</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">Y5</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">$18M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">$5.2M</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">29%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Market Potential
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Nova AI is positioned to capture a significant portion of the rapidly growing Ops Intelligence market.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>TAM: $25B global market for operational intelligence solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>SAM: $3.5B serviceable market in APAC region</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>SOM: $180M initial beachhead (ANZ market)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary mt-1">•</span>
                  <span>22% CAGR for Ops Intelligence market through 2030</span>
                </li>
              </ul>
            </div>

            {/* Competitive Landscape */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Competitive Landscape
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Nova differentiates itself through deep AI integration, mid-market specialization, and regional advantage.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="overflow-hidden rounded-md border border-gray-800">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Competitor</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Focus</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Strength</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Weakness</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">UiPath</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">RPA</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Automation</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Limited AI integration</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Microsoft</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Enterprise</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Scale</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Complex deployment</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">SAP</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">ERP</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">Integration</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm">High cost</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">Nova AI</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">Mid-market</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">AI Autonomy</td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-primary">Brand awareness</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Risk Assessment
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Transparent evaluation of key risk factors and mitigation strategies.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="overflow-hidden rounded-md border border-gray-800">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Risk Factor</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary">Level</th>
                        <th className="px-3 py-3 text-left text-sm font-semibold text-primary" colSpan={2}>Mitigation Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-3 py-3 text-sm">Market Competition</td>
                        <td className="px-3 py-3 text-sm text-yellow-500">Medium</td>
                        <td className="px-3 py-3 text-sm" colSpan={2}>Strategic partnerships, continuous product innovation</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-sm">Technology Adoption</td>
                        <td className="px-3 py-3 text-sm text-yellow-500">Medium</td>
                        <td className="px-3 py-3 text-sm" colSpan={2}>Targeted market education initiatives, phased implementation</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-sm">Regulatory Compliance</td>
                        <td className="px-3 py-3 text-sm text-red-500">High</td>
                        <td className="px-3 py-3 text-sm" colSpan={2}>Robust compliance frameworks, regional expertise</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Overview & Solution */}
            <div className="bg-gray-900/30 backdrop-blur border border-primary/20 rounded-xl p-8 transition-all hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)]">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Solution Overview
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                Nova AI is pioneering Sentinel, an AI-powered Ops Intelligence platform for mid-market companies globally.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="text-primary font-medium">Key Benefits</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Automates complex operational and administrative tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Reduces manual processes by up to 70%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Enhances operational efficiency and drives significant cost savings</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-primary font-medium">Target Customer</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Mid-market companies (100-150 employees)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Initial focus on ANZ market, expanding to APAC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span>Enterprises seeking operational transformation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Deal Terms Table */}
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur border border-primary/20 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Investment Deal Terms</h3>
            <div className="overflow-hidden">
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Round Size</td>
                    <td className="py-3 px-4 text-white">Seeking a sophisticated lead investor to help us price the round</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Instrument</td>
                    <td className="py-3 px-4 text-white">SAFE (Simple Agreement for Future Equity)</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Valuation Cap</td>
                    <td className="py-3 px-4 text-white">To be determined with lead investor</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Discount</td>
                    <td className="py-3 px-4 text-white">20% discount to next qualified financing</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Minimum Investment</td>
                    <td className="py-3 px-4 text-white">To be discussed with serious investors</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Use of Funds</td>
                    <td className="py-3 px-4 text-white">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Platform development (40%)</li>
                        <li>Expanding team and hiring domain experts in AI (25%)</li>
                        <li>Regional expansion in APAC (20%)</li>
                        <li>Go-to-market initiatives (15%)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300 font-medium">Investor Rights</td>
                    <td className="py-3 px-4 text-white">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Pro-rata rights</li>
                        <li>Information rights (quarterly updates)</li>
                        <li>Major investor board observer seat</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Join Our Journey?</h3>
            <p className="text-gray-300 mb-8">
              Accredited investors are invited to schedule a one-on-one session with our executive team to discuss investment opportunities and receive our full prospectus package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="glow" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary-rgb),0.7)]"
                asChild
              >
                <a href="mailto:contact@novaintelligence.tech?subject=Investment%20Inquiry%20-%20Private%20Prospectus%20Request">
                  Request Full Prospectus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://calendly.com/v-deliwal-novaintelligence" target="_blank" rel="noopener noreferrer">
                  Schedule Executive Meeting
                </a>
              </Button>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              All investment opportunities are limited to accredited investors only.
              Information provided is subject to our confidentiality agreement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
            Back to Nova Main Site
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            © 2024 Nova AI Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 