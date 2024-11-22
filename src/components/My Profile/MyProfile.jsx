import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyProfile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="max-w-5xl mx-auto my-10">
            <div className="h-24 bg-gradient-to-r from-cyan-500 to-violet-500
            flex justify-center items-center">
                <h1 className="text-3xl font-bold text-white">Welcome,{user?.displayName}</h1>
            </div>

            <div className="flex justify-center mt-10">
                <div className="card bg-base-200 shadow-lg p-6 w-96 text-center">
                    <img src={user?.photoURL} alt={user?.displayName} 
                    className="w-[200px] h-[200px] rounded-full mb-4 mx-auto px-4 pt-4"/>
                    <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                    <p className="mt-2 font-semibold">{user?.email}</p>
                
                <div className="text-center mt-6">
                    <button className="btn btn-primary font-bold ">Update</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;