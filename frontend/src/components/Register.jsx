import React,{useState} from "react";

function Register({setShowRegister}){

    const [user,setUser]=useState({

        name:"",
        email:"",
        password:""

    });

    const submit=(e)=>{

        e.preventDefault();

        alert("Registration Success");

        setShowRegister(false);

    }

    return(

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="text-center">

                                Register

                            </h3>

                            <form onSubmit={submit}>

                                <input
                                className="form-control mb-3"
                                placeholder="Name"
                                onChange={(e)=>setUser({...user,name:e.target.value})}
                                />

                                <input
                                className="form-control mb-3"
                                placeholder="Email"
                                onChange={(e)=>setUser({...user,email:e.target.value})}
                                />

                                <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                onChange={(e)=>setUser({...user,password:e.target.value})}
                                />

                                <button className="btn btn-success w-100">

                                    Register

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;