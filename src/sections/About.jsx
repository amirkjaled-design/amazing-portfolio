import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
]

export const About = () => {
    return <section id="about" className="relative py-32 overflow-hidden">
        <div className="container px-6 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-sm uppercase tracking-wider font-medium text-secondary-foreground">About me</span>
                    </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future,
                    <span className="text-white font-serif italic font-normal"> One component at a time</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                 <p>
                I'm a passionate full-stack developer with over 6 months of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend and backend
                technologies.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
                </div>
                <div className="p-6 glass animate-fade-in animation-delay-300 glow-border rounded-2xl">
                    <p className="text-lg font-medium text-foreground italic">  "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
}