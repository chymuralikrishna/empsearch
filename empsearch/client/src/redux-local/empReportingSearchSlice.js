import {createSlice} from '@reduxjs/toolkit'
import empList from '../data/employee';
export const empReportingSearchSlice=createSlice({
name:'empReportingEcno',
initialState:{value: [],},
reducers:{
  searchEmpByReportingEcno:(state,action)=> {
          const emps=empList.filter((emp)=>{
            if(emp.ecno===action.payload){return emp;}
          });
          state.value=emps;
    },
},
})
export const searchEmpByReportingEcnoAsync = (searchterm) => (dispatch) => {
  setTimeout(() => {
    dispatch(searchEmpByReportingEcno(searchterm))
  }, 1000)
}
export const {searchEmpByReportingEcno}=empReportingSearchSlice.actions
export default empReportingSearchSlice.reducer