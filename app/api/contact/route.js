import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Atwima Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `📩 New Inquiry: ${subject} | Atwima Community Bank`,
            text: `
                NEW WEBSITE INQUIRY
                -------------------
                Topic: ${subject}
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                
                Message:
                ${message}
            `,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px;">
                    <div style="background-color: #003366; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Atwima Community Bank</h1>
                        <p style="color: #f59e0b; margin: 5px 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">Website Inquiry System</p>
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; border-top: none;">
                        <div style="margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px;">
                            <span style="background-color: #f59e0b; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase;">${subject}</span>
                            <p style="color: #6b7280; font-size: 14px; margin-top: 10px;">You have received a new message from the official website contact form.</p>
                        </div>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #374151; font-weight: bold; width: 100px;">Customer:</td>
                                <td style="padding: 8px 0; color: #111827;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #374151; font-weight: bold;">Email:</td>
                                <td style="padding: 8px 0; color: #003366;"><a href="mailto:${email}" style="color: #003366; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #374151; font-weight: bold;">Phone:</td>
                                <td style="padding: 8px 0; color: #111827;">${phone || 'Not provided'}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 30px; background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #003366;">
                            <p style="color: #374151; font-weight: bold; margin-top: 0;">Message Content:</p>
                            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                        
                        <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #9ca3af;">
                            <p>This is an automated notification from the Atwima Community Bank web server.<br>Please do not reply directly to this automated email.</p>
                        </div>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
