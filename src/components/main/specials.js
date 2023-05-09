import SpecialItems from "./specialitems";
import SpecialsHeader from "./specialsHeader"




const specialDishes=[{url:require("../../Assets/bruchetta.jpg"),name:"Bruchetta",price:"$1.49"},{url:require("../../Assets/greek salad.jpg"),name:"Greek salad",price:"$1.49"},{url:require("../../Assets/lemon dessert.jpg"),name:"Lemon dessert",price:"$1.49"}];

const Specials=()=>{

    
    return (
        <article id="specials">
            <SpecialsHeader></SpecialsHeader>
            <section id="specialItems">

                {specialDishes.map(items=> <SpecialItems {...items}></SpecialItems>)}

            </section>
        </article>
    )
}

export default  Specials;