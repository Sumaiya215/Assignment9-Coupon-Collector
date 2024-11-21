
import { Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const {createUser ,signInWithGoogle} = useContext(AuthContext);
    const[success,setSuccess] = useState(false);
    const[errorMessage, setErrorMessage] = useState('');
   

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password);

        setErrorMessage('');
        setSuccess(false);
       

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!regex.test(password)){
            setErrorMessage('At least one uppercase, one lowercase and must be 6 characters or longer');
            return;
        }

        //create user
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            setSuccess(true);
            e.target.reset();
            navigate('/');
        })
        .catch(error => console.log('ERROR', error.message));
        toast.error('User registration unsuccessful');
           
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.log('ERROR',error.message));
    }


    return (
        <div className="hero bg-base-100 min-h-screen mb-12">
        <div className="hero-content w-[760px] mx-auto flex-col px-6">
            <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold">Register now!</h3>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-700 text-lg h-[60px] font-semibold text-white">Register</button>
                    </div>
                </form>
{/* 
                {
                    registerError && <p className="ml-8 mb-4 text-red-600">{registerError}</p>
                } */}
                {
                    errorMessage && <p className="text-red-600 ml-4 mb-4">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 ml-8 mb-8">Sign up is Successful</p>
                }
               
                <p className="ml-8 mb-8 font-semibold">
                    Already have an account? please <Link className="text-blue-500" to="/login">Login</Link>
                </p>

                <p className="text-center mb-6">
                  <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                </p>
            </div>
        </div>
    </div>
    );
};

export default Register;