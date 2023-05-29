import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';
import "../style/Pagination.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [TotalPages,setTotalPages]=useState(0);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);


  useEffect(() => { 
    axios.post("http://localhost:2000/employDetails",{currentPage})
    .then(res=>{
     console.log("-----------res.data.data",res.data.data);
     props.setData(res.data.data.items);
     setTotalPages(res.data.data.TotalPages);
    })      
    .catch(error=>{
     console.log("------------------------")
     console.log(error)
    })
    if (TotalPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage <=1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
    if(currentPage==TotalPages){
      setCanGoNext(false);
    }
  }, [ currentPage]);

  return (
    <>
        <div className="pagination-container">
          <div className="page-movement">
            <IconButton 
            aria-label="delete"
            onClick={onPrevPage}
            disabled={!canGoBack}
            >
                <ArrowLeftIcon
                />
            </IconButton>
                <TextField
                  label="Page No"
                  name="pageno"
                  value={currentPage}
                  onChange={(e)=>setCurrentPage(e.target.value)}
                />
            <IconButton 
            aria-label="delete"
            onClick={onNextPage}
            disabled={!canGoNext}
            >
                <ArrowRightIcon
                />
            </IconButton>
            </div>
          </div>
    </>
  );
};

export default Pagination;