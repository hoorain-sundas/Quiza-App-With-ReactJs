import React from 'react'
import { Grid, Button, Box } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'

// props=array
function ShowOptions(props) {
   const {data, optionClick} = props
   return(
    <Grid container>
      
       {data && Array.isArray(data) && data.length > 0 ? 
        data.map((x,i) => (
         <Grid key={i} item xs={6} md={6}>
            <Button className="p-2 m-2 w-100 rounded-pill fs-5"
            fullWidth={true}
            onClick={() => optionClick(x)} variant="contained">{x}</Button>
         </Grid>
   
       ))
       : null
}
      
    </Grid>
   ) 
}
export default ShowOptions;