
import React from 'react';

export const SearchBar = ({onChange,placeholder}) => {
   // const [keyword,setKeyword]=React.useState('')
//    console.log("------keyword----",keyword)
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={{color:"white",
      backgroundcolor:"skyblue",
      height:"50px",
      width:"500px",
    }}
     key="random1"
    //  value={input}
     placeholder={placeholder}
     onChange={onChange}
    />
  );
}

