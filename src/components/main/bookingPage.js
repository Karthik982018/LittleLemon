import { useState } from "react"
import { submitAPI } from "../../utilities/fetchData"
import BookingForm from "./bookingForm"
import BookingHeader from "./bookingHeader"
import { Route, Routes, useNavigate } from "react-router-dom"
import ConfirmedBooking from "./bookingConfirmation"

const BookingPage=(props)=>{
    const [date,setDate]=useState("")
    const [time,setTime]=useState("")
    const [guests,setGuests]=useState(1)
    const [occasion,setOccasion]=useState("Birthday")



    const [dateRequired,setDateRequired]=useState(true)

    const [timeRequired,setTimeRequired]=useState(true)

    
    


    
    const navigate=useNavigate()


    const submitForm=(data)=>{

        let sub=submitAPI(data)

        

        if(sub){
            navigate("reserve/bookingConfirmation")
        }



    }

    const resetForm=()=>{
        setDate("")
        setTime("")
        setGuests(1)
        setOccasion("Birthday")
        
        setDateRequired(true)
        setTimeRequired(true)
    }
    return (
        <main   id="reservemain">
        
            <BookingHeader></BookingHeader>

            

            <Routes>
                <Route path="/" element={<BookingForm date={date} 
                setDate={setDate} 
                setGuests={setGuests} 
                setOccasion={setOccasion} 
                setTime={setTime} time={time}
                guests={guests}
                occasion={occasion}
                submitForm={submitForm} 
               
                dateRequired={dateRequired}
                setDateRequired={setDateRequired}
                timeRequired={timeRequired}
                setTimeRequired={setTimeRequired}></BookingForm>}></Route>
                <Route path="reserve/bookingConfirmation" element={<ConfirmedBooking date={date} time={time} guests={guests} occasion={occasion} resetForm={resetForm} ></ConfirmedBooking>}></Route>
            </Routes>
            

    

        </main>

    )
    
}

export default BookingPage