import BookingForm from "./bookingForm"
import BookingHeader from "./bookingHeader"

const BookingPage=(props)=>{
    return (
        <main   id="reservemain">
        
            <BookingHeader></BookingHeader>
            <BookingForm></BookingForm>
    

        </main>

    )
    
}

export default BookingPage