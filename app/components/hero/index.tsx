import Image from "next/image"
import img from './hero.svg';

export const Index = () => {
  return (
    <div className="aspect-video relative bg-[#9B82F6] border rounded-lg overflow-hidden">
      <Image src={img} fill className="object-contain object-center" alt='' />
    </div>
  )
}