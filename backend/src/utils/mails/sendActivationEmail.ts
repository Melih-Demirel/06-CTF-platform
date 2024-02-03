import nodemailer from 'nodemailer'
import { User } from '../../ORM/entities';
import { transportConfig } from "./nodemailerConfig";


export const sendActivationEmail = async (user : User) => {
    
    const transporter = nodemailer.createTransport(transportConfig);

    const activationLink = `http://localhost:3000/v1/auth/activate/${user.ActivationCode}`;

    const mailConfig = {
        from: 'psopvctf@gmail.com',
        to: user.Email,
        subject: 'Account Activation',
        html: `<p> Please <a href='${activationLink}'> confirm your account </a> so you can start competing.</p>`
    };

    try {
        const info = transporter.sendMail(mailConfig);
        return info;
    } catch (error) {
        throw error;
    }

}