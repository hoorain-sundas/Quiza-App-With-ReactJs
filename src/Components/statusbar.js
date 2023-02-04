import React from 'react'
import { Box } from '@mui/material'

function StatusBar(props){
   const {statusData} = props;

   return(
    <Box>
       {statusData && Array.isArray(statusData) && statusData.length > 0
       ? statusData.map((x,i) => <paper sx={{backgroundColor: x.color}}>{x.label}</paper>)
       : null }
    </Box>
   )
}
export default StatusBar;