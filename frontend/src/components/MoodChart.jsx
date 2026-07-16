import React from "react";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement
} from "chart.js";

import {Line} from "react-chartjs-2";

ChartJS.register(

CategoryScale,
LinearScale,
PointElement,
LineElement

);

function MoodChart(){

const data={

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[

{

label:"Mood",

data:[4,3,5,4,5,2,4],

borderColor:"#0d6efd",

backgroundColor:"#0d6efd",

tension:.4

}

]

};

return(

<div className="card shadow">

<div className="card-body">

<h4>

Weekly Mood

</h4>

<Line data={data}/>

</div>

</div>

);

}

export default MoodChart;