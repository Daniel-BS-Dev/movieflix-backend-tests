export type Page = {
  content: Movie[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty: boolean;
};

export type Role = {
  id: number;
  authority: string;
};

export type User = {
  email: string;
  name: string;
  password: string;
  roles: Role;
  reviews: Reviews[];
};

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUri: string;
  synopsis: string;
};

export type Reviews = {
  id: number;
  text: string;
  movieId: number;
  user: User;
};
