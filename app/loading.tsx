"use client";
import { Spinner } from "@/components/ui/spinner"

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner
      size={100}
      />
    </div>
  )
}

export default loading
