import { useState } from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import HabitTable from "./components/HabitTable";
import MoodChart from "./components/MoodChart";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [registerPage, setRegisterPage] = useState(false);

    if (!loggedIn) {
        return (
            <>
                <Navbar />

                {
                    registerPage
                        ? <Register setRegisterPage={setRegisterPage} />
                        : <Login
                            setLoggedIn={setLoggedIn}
                            setRegisterPage={setRegisterPage}
                        />
                }
            </>
        );
    }

    return (
        <>

            <Navbar />

            <div className="container mt-4">

                <HabitTable />

                <br />

                <MoodChart />

            </div>

        </>
    );
}

export default App;