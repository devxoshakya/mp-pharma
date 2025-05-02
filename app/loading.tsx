"use client";
import { Spinner } from "@/components/ui/spinner"

const Loading = ({className}:any) => {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <Spinner
      size={100}
      />
    </div>
  )
}

export default Loading
