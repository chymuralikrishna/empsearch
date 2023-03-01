import '../card.css';
import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import ReportingComponent from "./reportingComponent";

 function ContentComponent(){
//    const count=useSelector((state)=>state.counter.value)
    const emps =useSelector((state) => state.elist.value);
    const [isHovering, setIsHovering] = useState(false);
    const[ecno,setEcno]=useState();
    const handleMouseOver = (e) => {
      // e.preventDefault();
      setIsHovering(true);
    };
      const handleMouseOut = () => {
      setIsHovering(false);
    };

    return(<div className="content">
      <div className="emp-card" id="card_main">
        {
        emps.slice(0, 500).map((emp,key) => {
          return (<div key={key} className='emp-card-div' >
            <div className="title" style={{backgroundColor: emp.pay_category==='1'?'#FF665A':(emp.pay_category==='2'?'#8BC34A':(emp.pay_category==='3' &&emp.grade_type==='ADMIN' ?'#FFFF33':'#05B9D0'))}}>{emp.username},{emp.ecno}</div>
           <div style={{textAlign:'left',fontSize:'12px'}}>
            <div className="div-table">
    <div className="table-row">
        <div className="table-cell-left">  
        <img className="card-img" id="img"
           src={'/empphoto/'.concat(emp.ecno).concat('.jpg')}
           onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=(require('../assets/default.jpg'));
          }}

           /> 
     </div>
        <div className="table-cell-right"> 
            {emp.designation}{emp.grade_level}<br/>
            Phone: {emp.epabx_pnum}<br/>
            eMail: {emp.official_mail}<br/>
            {emp.plant_desc}({emp.plant_code})<br/>
            <div className="plant-popup" onMouseOver={function(){setEcno(emp.ecno);handleMouseOver();}} onMouseOut={handleMouseOut}>
            Reporting To :{emp.reporting_ecno}
            {isHovering && (emp.ecno===ecno) &&  <ReportingComponent ecno={emp.reporting_ecno} />}
            </div>
            </div>
         </div>
    </div>
</div>
</div>)
        })}
</div>
    </div>);

}

export default ContentComponent;