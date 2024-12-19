function Movie_Card(props) {
    return (
        <div className="container">
            <div className="list_style">
                <p>{props.id}</p>
                <h3>{props.name}</h3>
                <h4>{props.genre}</h4>
                <img src={props.img} alt="poster" />
                <p>{props.about}</p>
            </div>
        </div>
    );
}


export default Movie_Card;