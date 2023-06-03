import im from "../../Assets/restauranfood.jpg"
const About=()=>{

    return (
        <article id="about">

            <section id="about_section">

                <section id="about_desc">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p className="description-text">description</p>
                </section>

                <section id="about_image">
                    <img src={im} alt="about" width={250} height={275}></img>

                </section>

            </section>



        </article>
    )

}

export default About