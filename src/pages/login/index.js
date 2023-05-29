import React from 'react'
import LoginSidebar from '../../components/login-sidebar'

const Login = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-start'>
                <div className='md:w-10/12'></div>
                <div className='md:w-2/12 bg-gray-700 p-10 min-h-screen'>
                    <LoginSidebar/>
                </div>
            </div>
        </div>
    )
}

export default Login