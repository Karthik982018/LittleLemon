import SpecialItems from "./specialitems";
import SpecialsHeader from "./specialsHeader"




const specialDishes=[
    {url:require("../../Assets/bruchetta.jpg"),
    name:"Bruchetta",
    price:"$1.49",
    desc:"famous greek salad of crispy lettuce,peppers,olives and our chicago style feta cheese,garnished with crunchy garlic and rosemary croutons."
    },
    {url:require("../../Assets/greek salad.jpg"),
    name:"Greek salad",
    price:"$1.49",desc:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
    {url:require("../../Assets/lemon dessert.jpg"),
    name:"Lemon dessert",
    price:"$1.49",
    desc:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
];

const Specials=()=>{

    
    return (
        <article id="specials">
            <SpecialsHeader></SpecialsHeader>
            <section id="specialItems">

                {specialDishes.map(items=> <SpecialItems {...items} key={items.name}></SpecialItems>)}

            </section>
        </article>
    )
}

export default  Specials;