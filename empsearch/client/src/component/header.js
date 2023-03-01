import React, { useEffect, useState } from "react";
import {searchEmpByEcno} from '../redux-local/empSearchSlice'
import {useDispatch} from 'react-redux'
import '../card.css';
function HeaderComponent(){
  const [searchterm,setSearchTerm]=useState('');
    const dispatch=useDispatch()
    useEffect(()=>{
console.log('searchTerm changes');
    });
    // const handleSearchInput = (e) => {
    //   e.preventDefault();
    //   // console.log(searchterm)
    //   setSearchTerm(e.target.value);
    //   setTimeout(() => {
    //     dispatch(searchEmpByEcno(e.target.value));  
    //   }, 1000);      
    //    }

       useEffect(()=>{
        setTimeout(() => {
        dispatch(searchEmpByEcno(searchterm));  
      }, 1000);
       },[searchterm,dispatch]);

       
    return(<div><header>
<div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)}
       placeholder="Search Employee?" />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
   </div>
   </div>
   </header></div>);
}


export default HeaderComponent;