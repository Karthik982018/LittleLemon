import About from "./about";
import Home from "./home";
import Specials from "./specials";
import Tesimonials from "./testimonials";

const Main=(props)=>{
    return (
        <main className="main">
            <Home></Home>
            <Specials></Specials>
            <Tesimonials></Tesimonials>
            <About></About>
        </main>
    );
}

export default Main;