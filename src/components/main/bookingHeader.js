
import restaturant from "../../Assets/restaurant.jpg"
const BookingHeader=()=>{
    return (
        <article id="resvhead">
            <section id="resvheader">

                <section>
                    <h1>Reserve a Table</h1>
                    <p className="description-text">
                        Reserve a table at our restaurant before you plan to visit us.
                        Tell us your occasion and strength and we gaurentee you our best 
                        service.. Eager to see you in person..
   
                    </p>
                </section>

                <img id="restPhoto"src={restaturant}  alt="restaurant food" height={"300px"} width={"250px"} style={{borderRadius:16,margin:"1rem"}}></img>
            </section>




        </article>
    )
}

export default BookingHeader