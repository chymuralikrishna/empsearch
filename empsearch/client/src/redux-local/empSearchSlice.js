import {createSlice} from '@reduxjs/toolkit'
import empList from '../data/employee';
export const empSearchSlice=createSlice({
name:'elist',
initialState:{value: [],},
reducers:{
     searchEmpByEcno:(state,action)=> {
          let emps=empList.filter((emp)=>{
            if(action.payload!== "" && emp.ecno==action.payload){
              return emp;
            }else if(action.payload!== "" &&emp.plant_code==action.payload){
              return emp;
            }else if(action.payload!== "" &&emp.username.toLowerCase().includes(action.payload)){
              return emp;
            }else if(action.payload!== "" &&emp.plant_desc.toLowerCase().includes(action.payload)){
              return emp;
            }
          });
          // emps.sort(function(a,b){return (a.pay_category < b.pay_category ? -1 : a.pay_category > b.pay_category ? 1 : 0)});
           emps.sort(function(a,b){return (a.level_id < b.level_id ? -1 : a.level_id > b.level_id ? 1 : 0)});
          
          state.value=emps;
    },
},
})
export const searchEmpByEcnoAsync = (searchterm) => (dispatch) => {
  setTimeout(() => {
    dispatch(searchEmpByEcno(searchterm))
  }, 1000)
}
export const {searchEmpByEcno}=empSearchSlice.actions
export default empSearchSlice.reducer