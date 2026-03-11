import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrutalImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  containerClassName?: string
}

export function BrutalImage({ src, alt, className, priority = false, containerClassName }: BrutalImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden brutal-border brutal-shadow bg-[var(--color-brutal-gray-100)]", containerClassName)}>
      <div className="absolute inset-0 bg-[var(--color-brutal-yellow)]/10 z-10 pointer-events-none mix-blend-overlay"></div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        priority={priority}
        className={cn("object-cover hover:scale-[1.02] transition-transform duration-500 ease-in-out grayscale-[0.2] contrast-[1.2]", className)}
      />
    </div>
  )
}
