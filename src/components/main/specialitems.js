const SpecialItems=(props)=>{

    return (
        <section className="specialscard">
            <img src={props.url} alt="dishes"></img>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <p>{props.desc}</p>
        </section>
    );

}


export default SpecialItems;