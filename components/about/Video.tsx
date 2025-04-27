import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative max-w-4xl text-center mx-auto my-16">
      <h1 className="text-2xl md:text-7xl font-bold my-8 dark:text-white">
        Discover M.P Pharmaceuticals
      </h1>
     
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

export default HeroVideoDialogDemo;
