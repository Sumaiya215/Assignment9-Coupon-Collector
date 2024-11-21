import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState} from "react";
import { auth } from "../Firebase/Firebase.init";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password) =>{
            return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
    }


    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;