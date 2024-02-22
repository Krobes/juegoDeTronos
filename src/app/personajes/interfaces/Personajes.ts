export interface Personajes{
    total_count:number;
    info:string;
    data:Personaje[];
}

export interface Personaje{
    id:number,
    firstName:string;
    lastName:string;
    fullName:string;
    title:string;
    family:string;
    image:string;
    imageUrl:string;
}