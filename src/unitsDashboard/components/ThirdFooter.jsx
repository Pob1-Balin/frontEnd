import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../AdminDashboard/components/styey.css'
function ThirdFooter(props){
  return (
    <div className='header-link' style={{background:"transparent"}}>
      <p style={{paddingTop:"1.2rem"}}><b>{props.destination}</b></p>
      <KeyboardArrowDownIcon style={{marginTop: '-2.5rem'}} />
    </div>
  )
}

export default ThirdFooter
