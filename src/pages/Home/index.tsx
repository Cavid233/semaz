import OtherProducts from "./OtherProducts/OtherProducts";
import HeroBanner from "./HeroBanner/HeroBanner";
import Navbar from "./Navbar/Navbar";
import Aboutus from "../AboutUs";

interface IHomePage { }


export default function HomePage(props: IHomePage) {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <OtherProducts />
        </div>
    );
}
