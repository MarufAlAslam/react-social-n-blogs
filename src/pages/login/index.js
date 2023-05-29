import React from 'react'
import LoginSidebar from '../../components/login-sidebar'

const Login = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-start'>
                <div className='md:w-9/12'></div>
                <div className='md:w-3/12 bg-gray-700 min-h-screen'>
                    <LoginSidebar/>
                </div>
            </div>
        </div>
    )
}

export default Login