import { useEffect, useState } from "react"

const BookingForm=()=>{





    const [date,setDate]=useState("")
    const [time,setTime]=useState("17:00")
    const [guests,setGuests]=useState(1)
    const [occasion,setOccasion]=useState("Birthday")
    const [submited,setSubmited]=useState(false)


    useEffect(
        ()=>{

            console.log(date)
            console.log(time)
            console.log(guests)
            console.log(occasion)

        },[date,time,occasion,guests,submited]
    )

    const submitHandler=(e)=>{
        e.preventDefault()
        setSubmited(true)
   }
    return(
        <article id="resvForm">
            <section id="resvFormSection">
                <form id="booking_form" onSubmit={submitHandler}>
                    <div className="form_feild">
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                    </div>
                    <div className="form_feild">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={time} onChange={(e)=>setTime(e.target.value)}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                    <div className="form_feild">
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)}/>

                    </div>
                    <div className="form_feild">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div className="form_feild">
                        <input id="submit_button"type="submit" value="Make Your reservation"/>
                    </div>
                </form>
            </section>
        </article>
    )
}

export default BookingForm