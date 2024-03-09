import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'

function LoggedInPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    if (!isLoggedIn) return <Navigate to="/error" />;


    return <div>
        User Logged In Page
    </div>


 
}

export default LoggedInPage