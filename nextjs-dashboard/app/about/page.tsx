import Movies from "../components/Movies"

export default function Page(){
    return(
        <main>
            <main className="container">
                <Movies portada="/caratulas/intensamente2.jpeg" nombre="Pelicula 1" anio="Año: 2023" gender="Genero: Accion"/>
                <Movies portada="/caratulas/f1.jpg" nombre="Pelicula 2" anio="Año: 2022" gender="Genero: Comedia"/>
                <Movies portada="/caratulas/soul.jpeg" nombre="Pelicula 3" anio="Año: 2024" gender="Genero: Animacion"/>
                <Movies portada="/caratulas/numero9.jpg" nombre="Pelicula 4" anio="Año: 2009" gender="Genero: Sci-Fic"/>
                <Movies portada="/caratulas/hotTrans.png" nombre="Pelicula 5" anio="Año: 2012" gender="Genero: Infantil"/>
                <Movies portada="/caratulas/x-men.jpeg" nombre="Pelicula 6" anio="Año: 2009" gender="Genero: Sci-Fic"/>
                

            </main>
        </main>
    )
}