import React from 'react'
import HomePage from '../Home/HomePage';
import { useState } from 'react';
import '../Login/LoginPage.css'


export default function LoginPage() {

    const [redirectToHomePage, setRedirectToHomePage] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        setRedirectToHomePage(true);
        e.target.reset()
    }
    if (redirectToHomePage) {
        return (
            <HomePage />
        )
    }

    return (
        <div>
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                    <div className='col-12' id='loginpage'>
                        <form onSubmit={submitHandler}>
                            <div className='my-2'>
                                <label className='my-1'>Email Id or Mobile</label><br />
                                <input type='email' name='Email' placeholder='Enter Email address or Mobile' required />
                            </div>
                            <div className='my-2'>
                                <label className='my-1'>Password</label><br />
                                <input type='password' name='password'  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" placeholder='Enter Password' required />
                            </div>
                            <div className='my-3 d-flex justify-content-end'>
                                <button className='px-4 btn btn-primary' type='submit'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
