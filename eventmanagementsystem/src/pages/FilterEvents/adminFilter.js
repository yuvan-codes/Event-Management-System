import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import AdminNav from "../../components/Navigation/adminNav";
import './FilterEvents.css';
const AdminFilter = ()=>{
   const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
   })
   const getMonthYear = useCallback((selectedMonth,selectedYear)=>{
      setMonthYear({selectedYear,selectedMonth})
   },[])
   
    return(
      <div>
         <AdminNav/>
         <div className="find-events-wrapper">
          <FilterBox getMonthYear={getMonthYear}/>
          <SearchEventList monthYear={monthYear}/>
        </div>
      </div>
    )
  }
  export default AdminFilter;