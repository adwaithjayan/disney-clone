"use client"
import { Movie } from "@/types"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import getImagePath from "@/lib/getImagePath"

Autoplay.globalOptions = {delay: 8000}
type Props={
    movies:Movie[]
}
function Banner({movies}:Props) {
    const [emblaRef] = useEmblaCarousel({loop: true,duration:100},[Autoplay()]);
  return (
    <div ref={emblaRef} className="lg:-mt-40 overflow-hidden relative cursor-pointer">
        <div className="flex">
            {movies.map(movie =><div key={movie.id} className="flex-full min-w-0 relative">
                <Image src={getImagePath(movie.backdrop_path,true)} key={movie.id} alt={movie.title} width={1920} height={1080} />
                <div className="hidden md:inline absolute mt-0 top-0 z-20 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white" >
                    <h2 className="text-5xl font-bold max-w-xl z-50 ">{movie.title}</h2>
                    <p className="max-w-4xl line-clamp-3">{movie.overview}</p>
                </div>
            </div>
        )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]"/>
    </div>
  )
}

export default Banner