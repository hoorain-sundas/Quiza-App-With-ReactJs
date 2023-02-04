import React, { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Grid, Box, Typography, Button } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';


function Form(){
  const [userinp, setUserInp] = useState("");
  const [optionArr, setOptionArr] = useState([]);

  let userInputFun = (e) => {
    console.log(e.target.value)
       setUserInp(e.target.value);

  }
  let btnClick = () => {
     setOptionArr([...optionArr, userinp]);
     console.log(optionArr)
  }

    return(

        

        <Box className="main m-5 " sx={{border:'2px solid', padding :'50px'}}>
            <Typography className="text-dark" variant="h4">Quiz Form</Typography>
            <Box sx={{ p: 2 }}>
           <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Write question ..." style={{ width: '100%' }} />
            </Box>
            <input className='p-2 m-3' placeholder='Enter options' onChange={userInputFun}  /> <Button sx={{border:'2px solid'}} onClick={btnClick} >add</Button>
       <Grid container>
        {optionArr.map((x,i)=>{ 
           return <Grid item xs={6} md={6}> 
           <Button className='p-2 m-3 bg-success text-center ' variant='contained' fullWidth key={i} >{x}</Button>
           </Grid>
        })}
        </Grid>
        <Button sx={{border:'2px solid',marginLeft:'15px'}}>Submit</Button>
        </Box>
    )
}

export default Form;