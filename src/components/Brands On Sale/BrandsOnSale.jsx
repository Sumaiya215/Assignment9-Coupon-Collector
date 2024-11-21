import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";


const BrandsOnSale = () => {
    const brands = useLoaderData();
    console.log(brands);
    const {isSaleOn} =brands;
    return (
        <div>
            <h2 className="text-3xl font-bold mt-12 mb-6 text-center
            lg:max-w-6xl mx-auto lg:text-left">Brands on Sale</h2>
            <div className="grid grid-cols-2 w-[90%] mx-auto gap-3 md:max-w-6xl 
            lg:grid-cols-5 lg:gap-12">
                {
                   brands.map(brand => brand.isSaleOn?<Brand brand={brand}></Brand>:'')
                }
            </div>
            
        </div>
    );
};

export default BrandsOnSale;