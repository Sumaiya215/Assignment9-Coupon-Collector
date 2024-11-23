import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const {updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name,photo);

        updateUser(name,photo)
        .then(()=>{
            console.log('User Profile updated');
            navigate('/myProfile')
        })
        .catch(error => console.log('User profile update error',error))
    }
    return (
       
            <div className="card bg-base-100 w-full max-w-sm mx-auto mt-12 mb-8 shrink-0 shadow-2xl">
                <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                   
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-700 text-lg h-[60px] font-semibold text-white">Update</button>
                    </div>
                </form>
            </div>
        
    );
};

export default UpdateProfile;