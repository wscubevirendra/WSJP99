function Card(props) {
   
    
    return (

        <div className="col-4">
            <div>
                <div className="card">
                    <img height={250} src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 style={{
                            background:"red",
                            color:"white",
                            fontSize:"24px"
                        }} className="card-title">{props.star >=4 ? 'Good' : ' Bad' }</h5>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card
Card.defaultProps = {
    title: "pista",
    star: 3,
    image: "https://via.placeholder.com/250" // optional default image
};