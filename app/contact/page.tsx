"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ContactForm from "@/components/shared/contact/ContactForm";
import { motion } from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function ThreeDMarqueeDemo() {
  const images = [
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/body%20muttar%20mp.webp",//start
  "https://cdn.mppharmaceuticals.com/webp2-output/botox%20cream%20psd%20file%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/box%20information%20post.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/chacoal%20kit%20for%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/chamomile%20body%20wash%20for%20mp.webp",//end
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/copper%20pepetide%20serum%20mp.webp",//start
  "https://cdn.mppharmaceuticals.com/webp2-output/cream%20mockup%20for%20mp%20(%20amber)-1@1x_1.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/curry%20leaf%20face%20serum%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/de%20tan%20face%20scrub%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/EYE%20BROW%20OIL%20mp.webp",//end
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/fig%20face%20gel%20%20mp.webp",//start
  "https://cdn.mppharmaceuticals.com/webp2-output/foaming%20face%20wash%20%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/glass%20skin%20sewrum%20mp-1@1x_1.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/glass%20skin%20sewrum%20mp-2.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/glass%20skin%20sewrum%20mp-3@1x_1.webp",//end
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/dummy.png",
  "https://cdn.mppharmaceuticals.com/webp2-output/hair%20serum%20%20complex%20mp.webp",
  "https://cdn.mppharmaceuticals.com/webp2-output/hair%20shampoo%20+%20serum%20combo%20pack%20%20for%20mp.webp",//start
  "https://cdn.mppharmaceuticals.com/webp2-output/HERBAL%20TOOTHPASTE%20mp.webp"//end
];

  return (
    <div className="relative w-full py-4 my-8 md:my-2 overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute inset-0 opacity-55">
        <div className="mx-auto m-2 my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
          <ThreeDMarquee images={images} />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 my-8 flex w-full max-sm:h-100 h-[600px] justify-center items-center">
        <motion.div
          className="text-center items-center flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 0.5 }}
        >
          <BlurFade key="demo-title" delay={0.25} inView>
            <p className="text-5xl md:text-7xl z-50 font-calendas italic">
              contact us.
            </p>
          </BlurFade>
          <BlurFade key="demo-contact" delay={0.45} inView>
            <ContactForm />
          </BlurFade>
        </motion.div>
      </div>
    </div>
  );
}
