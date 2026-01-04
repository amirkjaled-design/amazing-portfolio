import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Amir is one of the most talented developers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Amir was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Amir's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Amir technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
]

export const Testimonials = () => {
  const [active, setactive] = useState(0)

  const next = () => {
    setactive((prev) => (prev + 1) % testimonials.length)
  }
   const previous = () => {
    setactive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
    return <section id="testimonials" className="py-32 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
           <div className="container mx-auto px-6 relative z-10">
                  <div className="text-center max-w-3xl  mx-auto mb-16">
          <span className="text-secondary-foreground  text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
            <div className="relative">
                <div className="glass rounded-3xl p-8 md:p-12 glow-border animate-fade-in animation-delay-200">
                    <div className="absolute -top-4 left-8 rounded-full bg-primary w-12 h-12 flex items-center justify-center"><Quote className="w-5 h-5 text-primary-foreground"/></div>
                    <blockquote className="tex-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">{testimonials[active].quote}</blockquote>
                    <div className="flex items-center gap-4">
                        <img src={testimonials[active].avatar} alt={testimonials[active].author} className="w-14 h-14 ring-2 ring-primary/20 rounded-full object-conver"/>
                        <div>
                            <div className="font-semibold">{testimonials[active].author}</div>
                            <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8 gap-4">
                  <button onClick={previous} className="p-3 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                    <ChevronLeft/>
                  </button>
                  <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button key={idx} onClick={() => setactive(idx)} className={`w-2 h-2 transition-all rounded-full duration-300 ${idx === active ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/5"}`}/>
                  ))}
                  </div>
                    <button onClick={next} className="p-3 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                      <ChevronRight/>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </section>
}