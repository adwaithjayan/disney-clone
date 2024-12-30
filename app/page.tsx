import CarouselBanner from "@/components/carouselBanner";
import MoviesCarsoule from "@/components/moviesCarsoule";
import { getPopular, getTopRated, getUpcoming } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMoives =await getUpcoming();
  const topRated =await getTopRated();
  const popular =await getPopular();
  return (
    <main>
      {/* caraselbanner wrapper */}
      <CarouselBanner/>
    <div className="flex flex-col space-y-2 xl:-mt-48">
      <MoviesCarsoule moives={upcomingMoives} title="Upcoming"/>
      <MoviesCarsoule moives={topRated} title="Top Rated"/>
      <MoviesCarsoule moives={popular} title="Popular"/>
    </div>

    </main>
  );
}
