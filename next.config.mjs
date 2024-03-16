/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['upload.wikimedia.org',"platform-lookaside.fbsbx.com","lh3.googleusercontent.com","res.cloudinary.com"],
        remotePatterns:[{
            protocol:'https',
            hostname:"**"
        }]
    }
};

export default nextConfig;