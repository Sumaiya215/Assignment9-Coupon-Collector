import { useLoaderData } from "react-router-dom";
import Brand2 from "../Brand2/Brand2";


const Brands = () => {
    const brands = useLoaderData();
    console.log(brands);
    
    return (
        <div>
            <h2 className=" text-3xl font-bold text-center my-6">Brands</h2>
            {
                brands.map(brand =><Brand2 key={brand._id} brand={brand}></Brand2>)
            }
        </div>
    );
};

export default Brands;