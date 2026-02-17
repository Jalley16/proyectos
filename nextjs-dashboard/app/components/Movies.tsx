import Image from "next/image";
import { Card } from "../ui/dashboard/cards";

type MoviesProps={
    portada: string;
    nombre: string;
    anio: string;
    gender: string;
}

export default function Movies({portada,nombre,anio,gender}:MoviesProps){
    return (
        <main>      
            <div className="portada">
                <Image src ={portada}
                alt ="primer pelicula"
                width={150}
                height={200}>
                </Image>
                <h5>{nombre}</h5>
                <h6>{anio}</h6>
                <h6>{gender}</h6>
            </div>
        
        </main>
    ) 
}
