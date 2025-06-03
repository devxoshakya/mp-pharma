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
    image: '/steps/2.png'
  },
  { 
    step: 'Step 3',
    title: 'Get Samples',
    content: 'Get samples of your product to test and review',
    image: '/steps/3.png'
  },
  {
    step: 'Step 4',
    title: 'Place Order',
    content: 'Place your order and get your product delivered to you',
    image: '/steps/4.png'
  }
]

export function ProcessSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Our Journey Starts Here"
        autoPlayInterval={2500}
        imageHeight="h-[500px]"
      />
  )
}