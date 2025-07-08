function Card(props) {

    return (
        <div className="col-4">
            <div>
                <div style={{
                    background: props.bgcolor
                }} className="card  p-2">
                    <h3>Name:-{props.name}</h3>
                    <h3 className={`${props.age >= 18 ? 'text-primary' : 'text-danger'}`} >Age:-{props.age}</h3>
                    <h3>City:-{props.city}</h3>

                </div>
            </div>

        </div>

    )
}

export default Card