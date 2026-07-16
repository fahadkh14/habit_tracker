import React, { useState } from "react";

function Login({ setLoggedIn, setShowRegister }) {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login=(e)=>{
        e.preventDefault();

        if(email && password){
            setLoggedIn(true);
        }else{
            alert("Please enter Email & Password");
        }
    }

    return(

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="text-center mb-4">

                                Login

                            </h3>

                            <form onSubmit={login}>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Password</label>

                                    <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />

                                </div>

                                <button className="btn btn-primary w-100">

                                    Login

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                New User?

                                <button
                                className="btn btn-link"
                                onClick={()=>setShowRegister(true)}
                                >

                                    Register

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;