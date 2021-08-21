export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUri: string;
    genreId: number;
    reviews : Review[];
}

export type Review = {
    id: number;
    text: string;
    movieId: number;
    user: User[];
}

export type User = {
    id: number;
    name: string;
    email: string;
    reviews: Review[];
}