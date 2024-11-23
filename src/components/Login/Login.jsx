import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";


const Login = () => {
    const navigate = useNavigate();
    const[loginError,setLoginError] = useState('');
    const {signInUser , signInWithGoogle} = useContext(AuthContext);
    const emailRef = useRef();
  

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        setLoginError('');

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log('ERROR', error.message);
            setLoginError(error.message);
        })
        
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.log('ERROR', error.message));
    }

    const handleForgetPassword = () => {
        console.log("Email address is:", emailRef.current.value);
        const email = emailRef.current.value;
        

        if(!email){
            console.log('Please provide a valid email address');
        }
        else {
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert('Password reset email sent,please check your email')
        })
       }
    }
    

    return (
        <div className="hero bg-base-100 min-h-screen mx">
            <div className="hero-content max-w-[350px]  lg:w-[760px] mx-auto flex-col ">
                <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold">Login now!</h3>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover text-base text-cyan-700">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-cyan-700 text-lg h-[60px] font-semibold text-white">Login</button>
                        </div>
                    </form>
                    <p className="ml-8 mb-4 font-semibold">
                        New to this website? please <Link className="text-blue-500" to="/register">Register</Link>
                    </p>
                   
                    {
                        loginError && <p className="ml-8 mb-4 text-red-600">{loginError}</p>
                    }
                    <p className="text-center mb-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;