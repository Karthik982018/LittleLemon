import { useEffect, useState } from "react"

import {fetchAPI} from "../../utilities/fetchData"

const BookingForm=(props)=>{

    const [availableTimes,setAvailableTimes]=useState([])








    useEffect(
        ()=>{

            initializeTimes()

        },[]
    )

    useEffect(()=>{
        updateTimes(new Date(props.date))
    }

    ,[props.date])



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
        props.submitForm(e.target.value)
   }
    return(
        <article id="resvForm">
            <section id="resvFormSection">
                <form id="booking_form" onSubmit={submitHandler}>
                    <div className="form_feild">
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={props.date} onChange={(e)=> props.setDate(e.target.value)}/>
                    </div>
                    <div className="form_feild">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={props.time} onChange={(e)=>props.setTime(e.target.value)}>
                            {availableTimes.map(times=><option key={times}>{times}</option>)}
                        </select>
                    </div>
                    <div className="form_feild">
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.guests} onChange={(e)=>props.setGuests(e.target.value)}/>

                    </div>
                    <div className="form_feild">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={props.occasion} onChange={(e)=>props.setOccasion(e.target.value)}>
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