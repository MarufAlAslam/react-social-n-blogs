import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [user, setUser] = useState(null);
    const navigator = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("isLoggedIn");
        if(user){
            setUser(user);
        }else{
            navigator("/");
        }
    }, [navigator, user])
    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute