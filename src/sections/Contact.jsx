import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"

const contact = [
  {
    icon: Mail,
    label: "Email",
    value: "amirkjaled@gmail.com.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251982250452",
    href: "tel:+251982250452",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
]

export const Contact = () => {
    const [form, setform] = useState({name:"", email:"", message:""})
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: ""})

    const handlesubmit = async (e) => {
        e.prventDefault()
        setIsLoading(true)
        setSubmitStatus({ type: null, message: "" })
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
             if (!serviceId || !templateId || !publicKey) {
             throw new Error("EmailJS configuration is missing. Please check your environment variables.")
      }
        await emailjs.send( serviceId, templateId, { name: form.name, email: form.email, message: form.message, }, publicKey )
        setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon."})
        setform({ name: "", email: "", message: "" })
        } catch (error) {
            console.error("EmailJS error:", error)
            setSubmitStatus({ type: "error", message: error.text || "Failed to send message. Please try again later."})
        }finally{
                setIsLoading(false)
        }
    }

    return <section id="contact" className="overflow-hidden relative py-32">
         <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
        <div className="container mx-auto px-6 relative z-10">
      
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 max-w-5xl mx-auto gap-12">
            <div className="glass p-8 border border-primary/30 rounded-3xl animate-fade-in animation-delay-300 ">
                <form className="space-y-6" onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium">Name</label>
                        <input value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} 
                        required placeholder="Your name..." id="name" type="text" className="w-full bg-surface rounded-xl px-4 py-3 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm mb-2 font-medium">Email</label>
                        <input value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} 
                        required placeholder="example@example.com" id="emai" type="email" className="w-full bg-surface rounded-xl px-4 py-3 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm mb-2 font-medium">Message</label>
                        <textarea value={form.message} onChange={(e) => setform({ ...form, message: e.target.value })} 
                        rows={5} required placeholder="Your message..." className="w-full bg-surface px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                    </div>
                    <Button className="w-full" type="submit" size="lg"  disabled={isLoading}>
                        {isLoading ? (<>Sending...</>) : (<>Send message  <Send className="w-5 h-5"/></>)}  
                    </Button>
                    {submitStatus.type && ( <div className={`flex items-center gap-3 p-4 rounded-xl ${ submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400" }`}>
                    {submitStatus.type === "success" ? ( <CheckCircle className="w-5 h-5 flex-shrink-0" /> ) : ( <AlertCircle className="w-5 h-5 flex-shrink-0" />)}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
                </form>
            </div>
            <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contact.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div> 

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
        </div>
    </section>
}