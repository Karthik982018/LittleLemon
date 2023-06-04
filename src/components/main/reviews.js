

const  Reviews=(props)=>{

    let rated=[]

    for(var i=0;i<props.rating;i++){
        rated.push(<span key={i+"checked"}className="fa fa-star checked"></span>)
    }
    for(var j=0;j<5-props.rating;j++){
        rated.push(<span key={j+"unchecked"} className="fa fa-star"></span>)
    }
    return(
        <section className="reviewsCard">
            <div>
            {rated}
            </div>
            <img src={props.url} alt="cust"></img>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </section>
    );
}

export default Reviews;