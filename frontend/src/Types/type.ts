export type Role = {
    id: number;
    authority: string;

}

export type User = {
   email: string;
   name: string;
   password: string;
   roles: Role;
}