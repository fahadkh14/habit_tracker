import React,{useState} from "react";

function HabitTable(){

    const days=Array.from({length:31},(_,i)=>i+1);

    const [habits,setHabits]=useState([
        "Wake Up Early",
        "Exercise",
        "Drink Water",
        "Read Book",
        "Meditation"
    ]);

    const [newHabit,setNewHabit]=useState("");

    const [logs,setLogs]=useState({});

    const toggle=(habit,day)=>{

        const key=`${habit}-${day}`;

        setLogs(prev=>({

            ...prev,

            [key]:!prev[key]

        }));

    }

    const addHabit=()=>{

        if(newHabit.trim()==="") return;

        setHabits([...habits,newHabit]);

        setNewHabit("");

    }

    return(

        <div className="card shadow">

            <div className="card-body">

                <h3 className="mb-3">

                    Monthly Habit Tracker

                </h3>

                <div className="input-group mb-3">

                    <input
                    className="form-control"
                    placeholder="New Habit"
                    value={newHabit}
                    onChange={(e)=>setNewHabit(e.target.value)}
                    />

                    <button
                    className="btn btn-success"
                    onClick={addHabit}
                    >

                        Add

                    </button>

                </div>

                <div className="table-responsive">

                <table className="table table-bordered text-center">

                    <thead>

                    <tr>

                        <th>Habit</th>

                        {

                            days.map(day=>

                                <th key={day}>{day}</th>

                            )

                        }

                    </tr>

                    </thead>

                    <tbody>

                    {

                        habits.map(habit=>(

                            <tr key={habit}>

                                <td>{habit}</td>

                                {

                                    days.map(day=>{

                                        const key=`${habit}-${day}`;

                                        return(

                                            <td
                                            key={day}
                                            style={{cursor:"pointer"}}
                                            onClick={()=>toggle(habit,day)}
                                            >

                                                {

                                                    logs[key]

                                                    ?

                                                    "✔"

                                                    :

                                                    ""

                                                }

                                            </td>

                                        )

                                    })

                                }

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

                </div>

            </div>

        </div>

    );

}

export default HabitTable;