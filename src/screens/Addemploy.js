import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import '../style/AddEmploy.css';

import axios from 'axios';

export const Addemploy = () => {
  const [employInfo,setEmployInfo]=React.useState({});
  function OnChange(e){
      setEmployInfo({...employInfo,[e.target.name]:e.target.value});
      console.log("-------",employInfo);
  }
  function saveButtonHandler(){
      axios.post("http://localhost:2000/addemploy",{employInfo})
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
  }
  function cancelButton(){
      setEmployInfo({});
  }
  return (
    <div className="employ-inputs-container">
          <div className="employ-top-conatiner">
            ADD EMPLOYEE
          </div>
                 <div className="file-upload">
                     drag and drop some files here
                  <input
                    type="file"
                  />
              </div>
          <div className='first-line-input'>
                <TextField
                  label="First name*"
                  name="firstname"
                  value={employInfo.firstname}
                  onChange={OnChange}
                />
                <TextField 
                    label="Middle Name" 
                    variant="outlined" 
                    name="middlename"
                    value={employInfo.middlename}
                    onChange={OnChange}
                  />
                  <TextField
                  label="Last name*"
                  name="lastname"
                  value={employInfo.lastname}
                  onChange={OnChange}
                />
           </div>
           <div className='second-line-input'>
                <TextField
                  id="inputs"
                  label="SSN*"
                  name="ssn"
                  value={employInfo.ssn}
                  onChange={OnChange}
                />
                <TextField
                  id="inputs"
                  label="Mobile No*"
                  name="mobileno"
                  value={employInfo.mobileno}
                  onChange={OnChange}
                />
                <TextField
                  id="inputs"
                  label="Email ID*"
                  name="email"
                  value={employInfo.email}
                  onChange={OnChange}
                />
           </div>
           <div className='third-line-input'>
                    <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Gender*</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                    >
                    <FormControlLabel  value="Female"
                          onChange={OnChange}control={<Radio />} label="Female" />
                    <FormControlLabel  value="Male"
                    onChange={OnChange} control={<Radio />} label="Male" />
              </RadioGroup>
                </FormControl>
                  <TextField
                      id="outlined-required"
                      label="Date of birth(MM/DD/YYYY)*"
                      value={employInfo.DOB}
                      name="DOB"
                      onChange={OnChange}
                    />
                    <TextField
                      id="inputs"
                      label="Designation"
                      name="designation"
                      value={employInfo.designation}
                      onChange={OnChange}
                    />
                    </div>
           <div className='fourth-line-input'>
                <Box
                sx={{
                  width: '100%',
                  maxWidth: '100%'
                }}
                >
                  <TextField 
                  label="Address" 
                  id="inputs" 
                  name="address"
                  value={employInfo.address}
                  onChange={OnChange}
                  />
              </Box>
              </div>
          <div className='fifth-line-input'>
                  <TextField 
                      id="inputs" 
                      label="Town/city" 
                      name="town"
                      value={employInfo.town}
                      onChange={OnChange}
                    />
                    <TextField 
                      id="inputs" 
                      label="Region/state" 
                      name="region"
                      value={employInfo.region}
                      onChange={OnChange}
                    />
                    <TextField 
                      id="inputs" 
                      label="Zip code" 
                      name="zipcode"
                      value={employInfo.zipcode}
                      onChange={OnChange}
                    />
                    </div>
        <div class="buttons">
              <Button className="save" variant="contained" endIcon={< SaveIcon/>} onClick={saveButtonHandler}>
                Save
              </Button>
              <Button className="cancel" variant="contained" endIcon={< CancelIcon/>} onClick={cancelButton}>
                Cancel
              </Button>
        </div>
    </div>
  )
}
