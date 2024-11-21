import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const navigate  = useNavigate();

    const handleError = () => {
        navigate('/');
    }
    const error = useRouteError();
    return (
        <div className="text-center mt-32">
            <h1 className="text-3xl font-bold ">Oops!</h1>
            <p className="font-semibold my-2">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleError} className="btn btn-info mt-4">Back To Home</button>
        </div>

    );
};

export default ErrorPage;