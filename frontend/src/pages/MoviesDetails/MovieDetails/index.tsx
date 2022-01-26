import "./styles.css";

const MovieDetails = () => {
  const movie = {
    title: "Invocação do Mal 3: A Ordem do Demônio",
    subTitle: "O caso demoníaco que chocou a América",
    year: 2013,
    imgUri:
      "https://www.themoviedb.org/t/p/original/nUMtHNnM4EWQ3Md4NfjJQBCvHos.jpg",
    synopsis:
      "Revela uma história arrepiante de terror, assassinato e um mal desconhecido que chocou até os investigadores paranormais da vida real, Ed e Lorraine Warren. Um dos casos mais intrigantes de seus arquivos, começa com uma luta pela alma de um garoto, depois os leva além de tudo o que já haviam visto antes, para marcar a primeira vez na história dos EUA um suspeito de assassinato alega possessão demoníaca como defesa.",
  };
  
  return (
    <section className="container-movie-details">
      <div className="content-movie-details">
        <img src={movie?.imgUri} />
        <div className="container-movie-details-info">
          <h2>{movie?.title}</h2>
          <h6>{movie?.year}</h6>
          <p>{movie?.subTitle}</p>
          <div className="container-movie-details-info-synopsis">
            <p>{movie?.synopsis}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
