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
            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                 src={brand_logo}
                 alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Brands;