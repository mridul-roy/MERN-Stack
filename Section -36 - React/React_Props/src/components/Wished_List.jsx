function Movie_Card(props) {
    return (
        <div className="container">
            <div className="list_style">
                <h3>{props.name}</h3>
                <h4>{props.genre}</h4>
                {/* <img src={props.img} alt="poster" /> */}
                <img src={props.img || 'https://via.placeholder.com/150'} alt="poster" />
                <p>{props.about}</p>
            </div>
        </div>
    );
}


export default Movie_Card;