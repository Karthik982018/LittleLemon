import { useEffect, useState } from "react"

import {fetchAPI,submitAPI} from "../../utilities/fetchData"

const BookingForm=()=>{





    const [date,setDate]=useState("")
    const [time,setTime]=useState("17:00")
    const [guests,setGuests]=useState(1)
    const [occasion,setOccasion]=useState("Birthday")

    const [availableTimes,setAvailableTimes]=useState([])


    useEffect(
        ()=>{

            initializeTimes()

        },[]
    )

    useEffect(()=>{
        updateTimes(new Date(date))
    }

    ,[date])



     const initializeTimes=()=>{
        const t=fetchAPI(new Date())
        setAvailableTimes(t)

     }

     const updateTimes=(d)=>{
        const t=fetchAPI(d)
        setAvailableTimes(t)

     }

    const submitHandler=(e)=>{
        e.preventDefault()
        submitAPI(e.target.value) 
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
                            {availableTimes.map(times=><option key={times}>{times}</option>)}
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