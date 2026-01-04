import { Button } from "@/components/Button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
    {href: "#about", label: "About"},
     {href: "#projects", label: "Projects"},
      {href: "#experience", label: "Experience"},
       {href: "#testimonials", label: "Testimonials"},
]

export const Navbar = () => {
    const [isopen, setisopen] = useState(false)
    const [scroll, setscroll] = useState(false)

    useEffect(() => {
        const handle = () => {
            setscroll(window.scrollY > 50)
        }
        window.addEventListener("scroll", handle)
        return () => window.removeEventListener("scroll", handle)
    },[])

    return <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${scroll ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">AK<span className="text-primary">.</span></a>
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">{links.map((link, index) => (
                    <a href={link.href} key={index} className="py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                ))}</div>
            </div>
            <div className="hidden md:block">
                <Button size="sm">Contact me</Button>
            </div>
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setisopen((prev) => !prev)}>{isopen ? <X size={24}/> : <Menu size={24}/>}</button>
         
        </nav>
           {isopen && <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
                    {links.map((link, index) => (
                    <a href={link.href} key={index} onClick={() => setisopen(false)} className="py-2 text-lg text-muted-foreground hover:text-foreground">{link.label}</a>
                ))}
                <Button size="sm" onClick={() => setisopen(false)} >Contact me</Button>
                </div>
            </div>}
    </header>
}