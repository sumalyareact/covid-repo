import React, { useEffect, useState } from 'react';
import './App.css';
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone';
import { green } from '@material-ui/core/colors';

function App() {

const[data, setData] = useState([]);

  const resf =[];
const getCovidData = async () => {
  const res =await fetch('https://api.covid19india.org/data.json');
  const resf = await res.json();
  console.log(resf.statewise);
  setData(resf.statewise);

}

useEffect(()=>{
  getCovidData();

}, []);


  return (
    <>
    <div className='container-fluid border border-dark bg-info'>
    <div className='jumbotron jumbotron-fluid text-center bg-dark text-light'>
   <AssessmentTwoToneIcon fontSize="large" style={{ color: green[500] }} className='effect_icon'> </AssessmentTwoToneIcon> 
   <h1>Live Covid Tracker | INDIA</h1>

   
    
    </div>
    <div className="table-responsive">
    <table className="table table-hover table-primary text-center">
  <thead>
    <tr>
      <th>#</th>
      <th>State</th>
      <th>Confirmed</th>
      <th>Active</th>
      <th>Recovered</th>
      <th>Deaths</th>
    </tr>
  </thead>
  <tbody>
  {
    data.slice(1).map( (curElem, inde) => {
return (
  <>
  <tr >
      <td>{inde}</td>
      <td>{curElem.state}</td>
      <td>{curElem.confirmed}</td>
      <td>{curElem.active}</td>
      <td>{curElem.recovered}</td>
      <td>{curElem.deaths}</td>
    </tr>
  </>
);
    })
  
  }
 
   
  </tbody>
</table>
</div>

    </div>
  {/*  {data.map((curElem, inde)=>{
     return (
<h4> {curElem.state}</h4>
     );
   })} */}
 
</>
);
}

export default App;
