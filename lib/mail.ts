import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/new-password?token=${token}`;
    await resend.emails.send({
        from: "mail@bahjat-asser.com",
        to: email,
        subject: 'اعاده تعيين كلمة المرور',
        html: `
        <div>
            <p> اضغط هنا <a href="${resetLink}"><strong>هنا</strong></a> لاعادة تعيين كلمة المرور.</p>
        </div>`
    })
}