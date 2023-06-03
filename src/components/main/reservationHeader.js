
import restaturantfood from "../../Assets/restauranfood.jpg"
const ResvHeader=()=>{
    return (
        <article id="resvhead">
            <section id="resvheader">

                <section>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p className="description-text">
                        We are a family owned<br/> mediterranean restaurant,<br/>
                        focused on traditional <br/>recipesserved with a modern <br/> twist.
                    </p>
                </section>

                <img id="restPhoto"src={restaturantfood}  alt="restaurant food" height={"300px"} width={"250px"} style={{borderRadius:16,margin:"1rem"}}></img>
            </section>




        </article>
    )
}

export default ResvHeader