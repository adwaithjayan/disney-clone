const getImagePath = (path?: string,fullsize?:boolean) =>{
    return path ? `http://image.tmdb.org/t/p/${fullsize ? "original":'w500'}/${path}` :"/Placeholder.png"
}

export default getImagePath