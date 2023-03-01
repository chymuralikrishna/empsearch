import {createSlice} from '@reduxjs/toolkit'
import empList from '../data/employee';
export const empPlantSearchSlice=createSlice({
name:'ePlantList',
initialState:{value: [],},
reducers:{
  searchEmpByPlant:(state,action)=> {
          const emps=empList.filter((emp)=>{
            if(emp.plant_code===action.payload){return emp;}
          });
          emps.sort(function(a,b){return (a.pay_category < b.pay_category ? -1 : a.pay_category > b.pay_category ? 1 : 0)});
          state.value=emps;
    },
},
})
export const searchEmpByPlantAsync = (searchterm) => (dispatch) => {
  setTimeout(() => {
    dispatch(searchEmpByPlant(searchterm))
  }, 1000)
}
export const {searchEmpByPlant}=empPlantSearchSlice.actions
export default empPlantSearchSlice.reducer