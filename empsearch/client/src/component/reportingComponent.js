import React, { useState } from "react";
import employee from "../data/employee";
import '../card.css';
 function ReportingComponent(props){
    const [isHovering, setIsHovering] = useState(false);
    const[ecno,setEcno]=useState();
    const handleMouseOver = (e) => {
        setIsHovering(true);
      };
    const handleMouseOut = () => {
        setIsHovering(false);
      };
    return(<div className="emp-card" id="card_plant">
        {
        employee.filter((emp)=>emp.ecno===props.ecno).map((emp,key) => {
          return (<div key={key} className='emp-card-div'>
            <div className="title" style={{backgroundColor: emp.pay_category==='1'?'#FFCCCC':(emp.pay_category==='2'?'#CCFFCC':'#CCCCFF')}}>{emp.username},{emp.ecno}</div>
           <div style={{textAlign:'left',fontSize:'12px'}}>
            <div className="div-table">
    <div className="table-row">
        <div className="table-cell-left">  
        <img className="card-img" id="img"
           src={'/empphoto/'.concat(emp.ecno).concat('.jpg')}
           onError={(e) =>(e.target.onError= null)(
            (e.target.src =(require('../assets/default.jpg')))
             )}alt={emp.ecno}
           /> 


         </div>
        <div className="table-cell-right"> 
            {emp.designation}<br/>
            Phone:{emp.epabx_pnum}<br/>
            eMail:{emp.official_mail}<br/>
            {emp.plant_desc}({emp.plant_code})<br/>
            <div className="plant-popup" onMouseOver={function(){setEcno(emp.ecno); handleMouseOver();}} onMouseOut={handleMouseOut}>
            {emp.reporting_ecno}
            {isHovering && (emp.ecno===ecno) &&  <ReportingComponent ecno={emp.reporting_ecno} />}
            </div>
            </div>
         </div>
    </div>
</div>
</div>)


        })}

    </div>);

}

export default ReportingComponent;