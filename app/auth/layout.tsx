const AuthLayout = ({
    children
}:{
    children: React.ReactNode
})=>{
    return(
        <div className="h-screen mt-24 flex items-center justify-center bg-blue-500">
            {children}
        </div>
    )
}

export default AuthLayout