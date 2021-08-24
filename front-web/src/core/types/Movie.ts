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
    synopsis : string;
    genreId: number;
    reviews : Review[];
}

export type Review = {
    text: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
    reviews: Review[];
}