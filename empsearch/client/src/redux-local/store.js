import{configureStore} from '@reduxjs/toolkit'
import searchEcnoReducer from './empSearchSlice'
// import searchPlantReducer from './empPlantSearchSlice'
// import empReportingSearchSlice from './empReportingSearchSlice'

export default configureStore({
    reducer:{
                elist: searchEcnoReducer, 
                // ePlantList: searchPlantReducer,
                // empReportingEcno: empReportingSearchSlice
    },
})