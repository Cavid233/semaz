import OtherProducts from "./OtherProducts/OtherProducts";
import HeroBanner from "./HeroBanner/HeroBanner";
import Navbar from "./Navbar/Navbar";
import "./Home.sass";

interface IHomePage { }

// footer => 15vh
// otherproducts => 35vh
// herobanner => 40vh
// navbar => 10vh



export default function HomePage(props: IHomePage) {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <OtherProducts />
        </div>
    );
}
