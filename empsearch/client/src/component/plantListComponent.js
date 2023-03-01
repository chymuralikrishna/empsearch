import React from "react";
import {useSelector} from 'react-redux'
import '../card.css';
 function PlantListComponent(){
    const emps =useSelector((state) => state.ePlantList.value);
    return(<div className="emp-card" id="card_plant">
        {
        emps.slice(0, 500).map((emp,key) => {
          return (<div key={key} className='emp-card-div'>
            <div className="title" style={{backgroundColor: emp.pay_category==='1'?'#FFCCCC':(emp.pay_category==='2'?'#CCFFCC':'#CCCCFF')}}>{emp.username},{emp.ecno}</div>
           <div style={{textAlign:'left',fontSize:'12px'}}>
            <div className="div-table">
    <div className="table-row">
        <div className="table-cell-left">  
        <img className="card-img" src={'http://localhost:8081/images-from-fusion/'.concat(emp.ecno).concat('.jpg')} alt={emp.ecno}  /> 
         </div>
        <div className="table-cell-right"> 
            {emp.designation}<br/>
            Phone:{emp.epabx_pnum}<br/>
            eMail:{emp.official_mail}<br/>
            <div className="plant-popup" >
            {emp.plant_desc}({emp.plant_code})
            </div>
            </div>
         </div>
    </div>
</div>
</div>)


        })}

    </div>);

}

export default PlantListComponent;