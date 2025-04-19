import { FeatureSteps } from "@/components/blocks/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Choose Product',
    content: 'Select the right product for your needs and get started.', 
    image: '/steps/1.png' 
  },
  { 
    step: 'Step 2',
    title: 'Choose Packaging',
    content: 'Select the right packaging for your product',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Get Samples',
    content: 'Get samples of your product to test and review',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 4',
    title: 'Place Order',
    content: 'Place your order and get your product delivered to you',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  }
]

export function ProcessSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}