import { useId, useState } from "react";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// EmailJS configuration - you can also put these in environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function ContactForm() {
    const id = useId();
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        
        const formData = new FormData(e.currentTarget);
        
        const templateParams = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            
            if (result.status === 200) {
                setMessage('Message sent successfully!');
                setTimeout(() => {
                    setOpen(false);
                    setMessage('');
                    e.currentTarget.reset();
                }, 2000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <p className="text-xs z-50 hover:scale-110 transition-transform  bg-emerald-950 text-white font-calendas rounded-full py-1 w-20 cursor-pointer">
                    click here
                </p>
            </DialogTrigger>
            <DialogContent title="contact form" hideTitle={true}>
                <div className="flex flex-col items-center gap-2">
                    <div
                        className="flex size-20 shrink-0 items-center justify-center"
                        aria-hidden="true"
                    >
                        <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                    </div>
                    <DialogHeader>
                        <DialogTitle className="sm:text-center">Contact Us</DialogTitle>
                        <DialogDescription className="sm:text-center">
                            Let us know how we can help you.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-name`}>Full name</Label>
                            <Input
                                id={`${id}-name`}
                                name="name"
                                placeholder="John Doe"
                                type="text"
                                required
                            />
                        </div>
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-email`}>Email</Label>
                            <Input
                                id={`${id}-email`}
                                name="email"
                                placeholder="your@email.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-phone`}>Phone Number</Label>
                            <Input
                                id={`${id}-phone`}
                                name="phone"
                                placeholder="(123) 456-7890"
                                type="tel"
                                required
                            />
                        </div>
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-query`}>Your Query</Label>
                            <Textarea
                                id={`${id}-query`}
                                name="message"
                                placeholder="Please describe how we can help you..."
                                rows={4}
                                required
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    {message && (
                        <div className={`text-center text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {message}
                        </div>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    );
}
