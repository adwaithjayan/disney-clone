import MoviesCarsoule from "@/components/moviesCarsoule";
import { getDiscover } from "@/lib/getMovies";


type Props={
    params:{id:string};
    searchParams:{genre:string};
}


async function GenrePage({params:{id},searchParams:{genre}}:Props) {
  const movies = await getDiscover(id);
  return (
    <div className="max-w-7xl mx-auto">
            <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className="text-6xl font-bold px-10">Result for {genre}</h1>
      <MoviesCarsoule title='Genre' moives={movies} isVertical/>
      </div>
    </div>
  )
}

export default GenrePage