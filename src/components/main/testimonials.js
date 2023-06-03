import Reviews from "./reviews";

const reviews=[{id:1,url:require("../../Assets/cust1.jpg"),rating:5,name:"karthik",desc:"description"},{id:2,url:require("../../Assets/cust2.jpg"),rating:4,name:"karthik",desc:"description"},{id:3,url:require("../../Assets/cust3.jpg"),rating:4,name:"karthik",desc:"description"}]

const Tesimonials=()=>{
    return(
        <article id="testimonials">

            <section id="testimonialsHeader">
                <h1>Testimonials</h1>
            </section>

            <section id="reviews">
                {reviews.map(rev=><Reviews {...rev} key={rev.id}></Reviews>)}

            </section>

        </article>
    )
}
export default Tesimonials;