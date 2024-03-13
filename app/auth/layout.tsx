import Nav from "@/components/Nav"
const AuthLayout = ({
    children
}:{
    children: React.ReactNode
})=>{
    return(
        <main>
        <Nav/>
        <section className="h-screen  flex items-center justify-center bg-blue-500">
            {children}
        </section>
        </main>
    )
}

export default AuthLayout