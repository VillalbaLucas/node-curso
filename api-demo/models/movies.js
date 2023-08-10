export class MovieModel {
    //este metodo es syncrono
    static getAll({genre}){
        if(genre){
            return movies.filter(
                movie => movie.genre.some(g=>g.toLowerCase() == genre.toLowerCase())
                )
        }
        return movies;
    }
}