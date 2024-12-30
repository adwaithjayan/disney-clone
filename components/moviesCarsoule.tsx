import { Movie } from "@/types"
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props ={
    title?:string,
    moives:Movie[];
    isVertical?:boolean,
}
function MoviesCarsoule({title,moives,isVertical}:Props) {
  return (
    <div className='z-40'>
        <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
        <div className={cn('flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5 ',isVertical && 'flex-col space-y-12 space-x-0')}>
          {isVertical ?  
              moives.map(movie=> <div  key={movie.id} className={cn(isVertical && 'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5' )}>
                <MovieCard movie={movie}/>
                <div className="max-w-2xl">
                    <p className="font-bold">{movie.title} ({movie.release_date?.split('-')[0]})</p>
                    <hr className="mb-3"/>
                    <p className="">{movie.overview}</p>
                  </div>
                </div>)
          :
            moives?.map(movie=> <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default MoviesCarsoule