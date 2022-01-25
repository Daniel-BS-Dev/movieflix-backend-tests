import "./styles.css";

const CardMovie = () => {
    const movie =  {
        title: "24 HORAS PARA VIVER",
        subTitle: "Contratado para matar. Lutando para sobreviver.",
        year: 2017,
        imgUri: "https://www.themoviedb.org/t/p/original/7rbXlxr2JF09TilQagT4CikS8gF.jpg",
        synopsis: "Um assassino (Ethan Hawke) ganha uma segunda chance quando seu empregador o traz de volta à vida temporariamente, logo após ter sido morto no trabalho. Ele ganha então 24 horas para realizar sua missão e se redimir.",
    
    }
  return (
    <section className="container-card-movie">
      <img src={movie?.imgUri} />
      <div className="container-card-movie-info">
        <h2>{movie?.title}</h2>
        <h4>{movie?.year}</h4>
        <p>{movie?.subTitle}</p>
      </div>
    </section>
  );
};

export default CardMovie;
