import { useEffect, useState } from "react"

import {fetchAPI} from "../../utilities/fetchData"
import FormError from "../../utilities/formError"

const BookingForm=(props)=>{

    const [availableTimes,setAvailableTimes]=useState([])

    const [DateIsTouched,setDateIsTouched]=useState(false)
    const [TimeIsTouched,setTimeIsTouched]=useState(false)


    

 








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



    const handleDateRequired=()=>{



        if(props.date.toString().length===0){
            props.setDateRequired(true)
        }else{
            props.setDateRequired(false)
        }
        console.log(props.date)

        setDateIsTouched(true)
    }

    const handleTimeRequired=()=>{

        if(props.time.toString().length===0){
            props.setTimeRequired(true)
        }else{
            props.setTimeRequired(false)
        }

        console.log(props.time)
        setTimeIsTouched(true)

    }



    const dateChangeHandler=(e)=>{

        props.setDate(e.target.value)


    }

    const timeChangeHandler=(e)=>{
        props.setTime(e.target.value)
    
    }

    const getIsFormValid=()=>{
        return !props.timeRequired && !props.dateRequired
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
                        <input type="date" id="res-date" value={props.date} onChange={dateChangeHandler} onBlur={handleDateRequired} />
                        {DateIsTouched&&props.dateRequired?<FormError message={"Date is required"}/>:""}
                    </div>
                    <div className="form_feild">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={props.time} onChange={timeChangeHandler} onBlur={handleTimeRequired}>
                            <option></option>
                        
                            {availableTimes.map(times=><option key={times}>{times}</option>)}
                        </select>
                        {TimeIsTouched&&props.timeRequired?<FormError message={"Time is required"}/>:""}
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
                        <input id="submit_button"type="submit" value="Make Your reservation"  disabled={!getIsFormValid()} />
                    </div>
                </form>
            </section>
        </article>
    )
}

export default BookingForm