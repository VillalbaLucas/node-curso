export class MovieController {
    static async get(res, req){
        const {id} = req.params
        if(tal){
            res.json(movie)
        }else{
            res.status(404)
        }
    }
}