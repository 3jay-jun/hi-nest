import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
export declare class MoviesController {
    readonly movieService: MoviesService;
    constructor(movieService: MoviesService);
    getAll(): import("./entities/movie.entity").Movie[];
    search(map: any): string;
    getOne(id: number): import("./entities/movie.entity").Movie;
    create(movieData: CreateMovieDto): boolean;
    remove(id: number): boolean;
    patch(movieId: number, updateData: CreateMovieDto): void;
}
