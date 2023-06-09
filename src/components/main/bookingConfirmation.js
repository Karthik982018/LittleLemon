import { Link, useNavigate } from "react-router-dom"
import Button from "../../utilities/button"


const ConfirmedBooking=(props)=>{
    const navigate=useNavigate()

    const makeAnotherBooking=()=>{
        navigate(-1)
        props.resetForm()
    }
    return(
    <article id="bookingconfirm">
        <section id="bookingconfirmsection">
            <h1> Your Booking has been confirmed</h1>

            <p  className="description-text" style={{textAlign:"center"}}> Your booking for {props.guests} guests has been confirmed for {props.time} on {props.date}</p>
            <p className="description-text" style={{textAlign:"center"}}>Thank you so much for choosing us to celebrate the {props.occasion}</p>

            <Button title={"Make another Booking"} onClick={makeAnotherBooking}></Button>

        </section>


    </article>
    )

}

export default ConfirmedBooking