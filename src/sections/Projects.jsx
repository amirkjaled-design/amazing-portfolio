import {  ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "@/components/Animatedbutton"

const projects = [
  {
    title: "Profesional portfoilio",
    description:
      "A comprehensive portfolio analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project2.png",
    tags: ["React", "PostgreSQL", "Tailwind"],
    link: "https://modern-web-app-eight.vercel.app/",
    github: "#",
  },
  {
    title: "AI Prediction",
    description:
      "An Ai Saas platform seamlessly integrates with your existing workflows",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "FastAPI"],
    link: "https://landing-page-one-lake-72.vercel.app/",
    github: "#",
  },
  {
    title: "Online shopping",
    description:
      "A collaborative way of expressing your needs for a product or service.",
    image: "/projects/project4.png",
    tags: ["Next.js", "stripe", "tailwind"],
    link: "https://shopify-sable-tau.vercel.app/",
    github: "#",
  },
]


export const Projects = () => {
    return <section id="projects" className="py-32 overflow-hidden relative">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10 px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in">featured work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Projects that
                    <span className="font-medium italic text-white font-serif"> Make an impact</span></h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                        <div className="overflow-hidden relative aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                             <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                             <div className="absolute inset-0 gap-4 items-center justify-center flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="rounded-full glass p-3 hover:text-primary-foreground hover:bg-primary transition-all"><ArrowUpRight className="h-5 w-5"/></a>
                                <a href={project.link} className="rounded-full glass p-3 hover:text-primary-foreground hover:bg-primary transition-all"><Github className="h-5 w-5"/></a>
                             </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, ind) => (
                                        <span key={ind} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duratio-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                    </div>
                ))}
               
            </div>
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
                View all projects
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton> 
            
            </div>
        </div>
    </section>
}