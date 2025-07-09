import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
export const IsAuthenticated = ({children}) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        if (! isAuthenticated) {
            return navigate("/auth/signup");
        }
        setIsAuth(true);
    }, [isAuthenticated]);

    return isAuth ? children : null;
}


export const IsLogin = () => {
    const navigate = useNavigate();
    const [isLoged, setisLoged] = useState(false)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated)
    useEffect(() => {
        if (isAuthenticated) {
            return navigate("/class");
        }
        setisLoged(true);
    }, [isAuthenticated]);

    return isLoged ? children : null;
}
