import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from "./dto/create-movie.dto";
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOen(id: number): Movie;
    deleteOne(id: number): boolean;
    create(movieData: CreateMovieDto): boolean;
    update(id: number, updateData: CreateMovieDto): void;
}
