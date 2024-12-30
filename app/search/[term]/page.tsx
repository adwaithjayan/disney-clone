import MoviesCarsoule from '@/components/moviesCarsoule';
import { getPopular, getSearchMovie } from '@/lib/getMovies';
import { notFound } from 'next/navigation'

type Props={
    params:{term:string}
}

async function Searchpage({params:{term}}:Props) {
    if(!term) notFound();

    const termToUSe = decodeURI(term);

    const movies = await getSearchMovie(termToUSe)
    const popular = await getPopular();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUSe}</h1>
        <MoviesCarsoule title='Movies' moives={movies} isVertical/>
        <MoviesCarsoule title='You may also like' moives={popular}/>
      </div>
    </div>
  )
}

export default Searchpage