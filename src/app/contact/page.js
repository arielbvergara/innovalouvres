'use client'

import { useContext, useEffect, useState } from "react";
import { AlertSuccess, AlertWarning } from "../../components/alert";
import Loading from "@/components/loading";
import { ContentContext } from "@/components/app";

const formatEmail = (name, email, phone, messageAfter, messageSize) => {
    return `
        <div>
            <h3>New contact request!</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message after: ${messageAfter}</p>
            <p>Message size: ${messageSize}</p>
        </div>
    `
}

export default function Contact() {

    console.log(process.env.NEXT_PUBLIC_EMAIL_TITLE)
    console.log(process.env.NEXT_PUBLIC_EMAIL_TO)
    console.log(process.env.NEXT_PUBLIC_SMTP_GMAIL_USER)
    console.log(process.env.NEXT_PUBLIC_SMTP_GMAIL_PASSWORD)

    const subject = process.env.NEXT_PUBLIC_EMAIL_TITLE ?? "New contact request!";
    const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO ?? "arielvergara95@gmail.com";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [messageAfter, setMessageAfter] = useState('');
    const [messageSize, setMessageSize] = useState('');
    const [emailSuccess, setEmailSuccess] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const otpText = formatEmail(name, email, phone, messageAfter, messageSize);

        const response = await fetch("/api/sendEmail", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                emailTo,
                otpText
            })
        });

        const success = await response.json();
        setEmailSuccess(success)
    }


    const contentContext = useContext(ContentContext)
    
    const [contactContent, setContactContent] = useState(null);

    useEffect(() => {

        if (contentContext && contentContext.data?.pages?.contact){
            setContactContent(contentContext.data.pages.contact)
            console.log("SET CONTACT")
        }
        console.log("CONTACT")
    }, [contentContext]);
    

    return (
        contactContent ? 
            (<div className="container mx-auto min-h-[--body-min-height]">
                <header className="py-8 text-center">
                    <h1 className="text-4xl">{contactContent.title}</h1>
                </header>
                <section className="mx-4 mb-8">
                    <p className="text-lg">
                        {contactContent.subTitle}
                    </p>
                </section>
                <section className="mx-4 mb-8">
                    <form method="post" className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                        <div className="col-span-3 mb-4 sm:col-span-1">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{contactContent.form.name}</label>
                            <input type="text" id="name" name="name" required value={name} onChange={(e) => {setName(e.target.value)}}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                        </div>
                        <div className="col-span-3 mb-4 sm:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{contactContent.form.email}</label>
                            <input type="email" id="email" name="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                        </div>
                        <div className="col-span-3 mb-4 sm:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{contactContent.form.phone}</label>
                            <input type="phone" id="phone" name="phone" required value={phone} onChange={(e) => {setPhone(e.target.value)}}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none" />
                        </div>
                        <div className="col-span-3 mb-4">
                            <label htmlFor="message-after" className="block text-sm font-medium text-gray-700">{contactContent.form.messageOne}</label>
                            <textarea id="message-after" name="message-after" rows="4" required value={messageAfter} onChange={(e) => {setMessageAfter(e.target.value)}}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none"></textarea>
                        </div>
                        <div className="col-span-3 mb-4">
                            <label htmlFor="message-size" className="block text-sm font-medium text-gray-700">{contactContent.form.messageTwo}</label>
                            <textarea id="message-size" name="message-size" rows="4" required value={messageSize} onChange={(e) => {setMessageSize(e.target.value)}}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange focus:outline-none"></textarea>
                        </div>
                        <div className="col-span-3">
                            <button type="submit"
                                className="send-message w-full rounded-md p-2 text-white hover:bg-orange focus:bg-orange focus:outline-none">
                                {contactContent.form.send}
                            </button>
                        </div>
                    </form>
                </section>

                {emailSuccess && (
                    emailSuccess.message === "EMAIL_SENT_FAILED" ? 
                        (<AlertWarning setEmailSuccess={setEmailSuccess}>Something went wrong, please try again later</AlertWarning>) : 
                        (<AlertSuccess setEmailSuccess={setEmailSuccess}>Email sent successfully</AlertSuccess>)
                    )
                }
            </div>)
            :
            (<Loading />)
    )
}