import './styles.css';

const Movie = () => {
    const movie =    {
        title: "BUFFALO BOYS",
        subTitle: " ",
        year: 2018,
        imgUri: "https://www.themoviedb.org/t/p/original/tLKashUlRCN8zzYBXiago4eJPho.jpg",
        synopsis: "Traído pelas forças coloniais holandesas, Arana consegue escapar junto com seus sobrinhos Jamar e Suwo, os filhos recém-nascidos de Hamza, um dos últimos sultões indonésios lutando contra a tirania estrangeira. Em 1860, depois de vagar por anos nas planícies do Velho Oeste americano, Arana e os dois irmãos retornam à Indonésia para vingar seus entes queridos mortos e punir o homem mau que causou sua desgraça.",
        genreId: 1,
    
    }

    return(
       <section className='container-movie'>
           <div className='content-movie'>
               <img src={movie?.imgUri}/>
           </div>
           <div className='container-name-movie'>
               <h3>{movie?.title}</h3>
           </div>
       </section>
    )

}

export default Movie;