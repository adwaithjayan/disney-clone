import { SearchResult } from "@/types";

async function fetchFromDatabase(url:URL,cacheTime?:number){
    url.searchParams.set('include_adult',"false");
    url.searchParams.set('include_video','false');
    url.searchParams.set('language','en-US');
    url.searchParams.set('page','1');
    url.searchParams.set('sort_by','popularity.desc');

    const options:RequestInit={
        method:'GET',
        headers:{
            accept: 'application/json',
            Authorization:`Bearer ${process.env.TMDB_API_KEY}`
        },
        next:{
            revalidate:cacheTime || 60*60*24, // 24 hours
        }
    }

    const res = await fetch(url,options);
    const data = (await res.json()) as SearchResult

    return data
}



export async function getUpcoming(){
    const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
    const data = await fetchFromDatabase(url);
    return data.results;
}

export async function getTopRated(){
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated');
    const data = await fetchFromDatabase(url);
    return data.results;
}

export async function getPopular(){
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    const data = await fetchFromDatabase(url);
    return data.results;
}

export async function getDiscover(id?:string,keyword?:string){
    const url = new URL('https://api.themoviedb.org/3/discover/movie');
    keyword  && url.searchParams.set('with_keywords',keyword);
    id && url.searchParams.set('with_genres',id);
    const data = await fetchFromDatabase(url);
    return data.results;
}

export async function getSearchMovie(term:string){
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    url.searchParams.set('query',term);
    
    const data = await fetchFromDatabase(url);
    return data.results;
}