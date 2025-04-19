import { useId } from "react";

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

export default function ContactForm() {
  const id = useId();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-xs z-50 hover:scale-110 transition-transform  bg-emerald-950 text-white font-calendas rounded-full py-2 w-20 cursor-pointer">
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

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-name`}>Full name</Label>
              <Input
                id={`${id}-name`}
                placeholder="John Doe"
                type="text"
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="your@email.com"
                type="email"
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-phone`}>Phone Number</Label>
              <Input
                id={`${id}-phone`}
                placeholder="(123) 456-7890"
                type="tel"
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-query`}>Your Query</Label>
              <Textarea
                id={`${id}-query`}
                placeholder="Please describe how we can help you..."
                rows={4}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        
      </DialogContent>
    </Dialog>
  );
}
