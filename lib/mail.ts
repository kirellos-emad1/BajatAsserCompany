import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: 'اعاده تعيين كلمة المرور',
        html: `
        <div>
            <p> اضغط هنا <a href="${resetLink}">here</a> لاعادة تعيين كلمة المرور.</p>
        </div>`
    })
}