import React,{useState} from 'react'
import { Visibility,Edit } from '@mui/icons-material'
import { useAsyncValue } from 'react-router-dom';
// import {SearchBar} from "../../components/SearchBar";
import axios, * as others from 'axios';
import { Fragment } from 'react';
import "../style/Table.css";
import Pagination from './Pagination';
// import {EditableRow} from '../../components/EditableRow'; 
// import {ReadOnlyRow} from '../../components/ReadOnlyRow';
// import "../../style/TableDetails.css";



 export const Table =() => {
  // const [input,setInput]=useState(null)
  // const [editId, setEditId] = useState(false);
  console.log("================================")
  const [data,setData]=useState([]);
  
  // React.useEffect(
  //   ()=>{
  //            axios.post("http://localhost:2000/employDetails")
  //            .then(res=>{
  //             console.log("-----------res.data.data",res.data.data);
  //             setData(res.data.data);
  //             console.log("----------data",data);
  //            })      
  //            .catch(error=>{
  //             console.log("------------------------")
  //             console.log(error)
  //            })        
  //   },[]
  // )
    return (
        <>
      <div className='work-table-container'>
        <Pagination
          setData={setData}
        />
        {/* <SearchBar
         input={input} 
         onChange={onChange}
         placeholder="search username"
        /> */}
        <table style={{position:"relative",marginTop:"0rem"}}>
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>last NAME</th>
              <th>Email</th>
              <th>MOBILE NO</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((val) => {
              return (
              <tr>
              <td>{val.firstname}</td>
              <td>{val.lastname}</td>
              <td>{val.email}</td>
              <td>{val.mobileno}</td>
             </tr>
                )
              }
                )
              }       
          </tbody>      
        </table>
        </div>
        </>
    );
 };
// export default TableDetails;