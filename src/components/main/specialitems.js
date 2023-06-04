const SpecialItems=(props)=>{

    return (
        <section className="specialscard">
            <img src={props.url} alt="dishes"></img>
            <div >
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            </div>

            <p>{props.desc}</p>
        </section>
    );

}


export default SpecialItems;