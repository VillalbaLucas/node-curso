import { Router } from "express";
import { movies } from '../utils/utils.js';
// import { MovieModel } from "../models/movies.js";
export const movieRouter = Router();

movieRouter.get('/', (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.json(movies)
})

// movieRouter.get('/:genre', async (res, req)=>{
//     const {genre} = req.params
//     const moviesGenre = await MovieModel.getAll({genre})
// })
