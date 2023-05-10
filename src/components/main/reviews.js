

const  Reviews=(props)=>{
    return(
        <section className="reviewsCard">
            <h3>{props.rating}</h3>
            <img src={props.url} alt="cust"></img>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </section>
    );
}

export default Reviews;