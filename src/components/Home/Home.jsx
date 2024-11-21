import Banner from "../Banner/Banner";
import BrandsOnSale from "../Brands On Sale/BrandsOnSale";
import HowItWorks from "../How It Works/HowItWorks";
import Newsletter from "../Newsletter/Newsletter";
import TopBrands from "../Top Brands/TopBrands";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopBrands></TopBrands>
            <BrandsOnSale></BrandsOnSale>
            <HowItWorks></HowItWorks>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;