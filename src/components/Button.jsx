export const Button = ({clasName ="", size ="default", children, ...props}) => {
    const baseclass = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:primary/90 shadow-lg shadow-primary/25"
    
    const sizeclass = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseclass} ${sizeclass[size]} ${clasName}`
    return <button className={classes} {...props}><span className="relative flex items-center gap-2 justify-center">{children}</span></button>
}