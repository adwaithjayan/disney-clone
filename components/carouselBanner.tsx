import { getDiscover } from "@/lib/getMovies";
import Banner from "./Banner";

type Props={
    id?: string;
    keyboards?: string;
}
async function CarouselBanner({id,keyboards}:Props) {
    const movies =await getDiscover(id,keyboards);
  return (
    <Banner movies={movies}/>
  )
}

export default CarouselBanner