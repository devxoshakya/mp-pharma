"use client";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/ui/spinner";

// Loading components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Spinner />
  </div>
);

const LoadingCard = () => (
  <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
);

const LoadingSection = () => (
  <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
);

// Dynamic imports for heavy components
export const DynamicLogo3D = dynamic(
  () => import("@/components/about/Logo3D"),
  {
    loading: () => <LoadingCard />,
    ssr: false, // 3D models should only load client-side
  }
);

export const DynamicSparkles = dynamic(
  () => import("@/components/ui/sparkles").then(mod => ({ default: mod.Sparkles })),
  {
    loading: () => null,
    ssr: false, // Visual effects don't need SSR
  }
);

export const DynamicChatIcon = dynamic(
  () => import("@/components/shared/chat/ChatIcon").then(mod => ({ default: mod.AIBusinessChatbot })),
  {
    loading: () => null,
    ssr: false, // Chat doesn't need SSR
  }
);

export const DynamicAnimatedBeam = dynamic(
  () => import("@/components/magicui/animated-beam").then(mod => ({ default: (mod as any).AnimatedBeam || (mod as any).default })),
  {
    loading: () => <LoadingSection />,
    ssr: false,
  }
);

export const DynamicHeroVideoDialog = dynamic(
  () => import("@/components/magicui/hero-video-dialog").then(mod => ({ default: (mod as any).HeroVideoDialog || (mod as any).default || mod })),
  {
    loading: () => <LoadingCard />,
    ssr: true,
  }
);

export const DynamicAnimatedTestimonials = dynamic(
  () => import("@/components/blocks/animated-testimonials").then(mod => ({ default: (mod as any).AnimatedTestimonials || (mod as any).default || mod })),
  {
    loading: () => <LoadingSection />,
    ssr: true,
  }
);

export const DynamicWorldMap = dynamic(
  () => import("@/components/shared/home/WorldMap").then(mod => ({ default: (mod as any).WorldMap || (mod as any).default || mod })),
  {
    loading: () => <LoadingCard />,
    ssr: false, // Interactive maps don't need SSR
  }
);

export const DynamicVideo = dynamic(
  () => import("@/components/about/Video").then(mod => ({ default: (mod as any).Video || (mod as any).default || mod })),
  {
    loading: () => <LoadingCard />,
    ssr: false,
  }
);

export const DynamicParallax = dynamic(
  () => import("@/components/about/Parallax").then(mod => ({ default: (mod as any).Parallax || (mod as any).default || mod })),
  {
    loading: () => <LoadingSection />,
    ssr: false,
  }
);