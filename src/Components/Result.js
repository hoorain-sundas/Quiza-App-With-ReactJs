import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'

function Result(props){
  const {userScore, correctQ, attemptedQ, totalMarks, totalQ }= props;
  const percentage = ((userScore)/totalMarks)*100;
  
    return(
      <Grid container>
            
        <Grid item xs={12} md={12}>
         <Box className='mt-5 bg-success-subtle text-success text-center'>

                <Typography  variant='h2'>Result</Typography>
                <Typography variant='h6'>Total Questions: {totalQ}</Typography>
                <Typography variant='h6'>Attempted Questions: {attemptedQ}</Typography>
                <Typography variant='h6'>Correct Questions: {correctQ}</Typography>
                <Typography variant='h6'>Total Marks: {totalMarks}</Typography>
                <Typography variant='h6'>Obtained Marks: {userScore}</Typography>
                <Typography variant='h6'>Percentage: {percentage}%</Typography>

                {percentage > 50 ? 
                <Typography variant='h6'>Status: {"Pass"}</Typography>
                : 
                <Typography variant='h6'>Status: {"Fail"}</Typography>}
            </Box>
                </Grid>

      </Grid>
    )
}

export default Result;