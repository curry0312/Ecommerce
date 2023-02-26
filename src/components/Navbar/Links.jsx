import { Badge } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Links({to,icon,badgeContent}) {
  return (
   <Link className='' to={to}>
    <Badge badgeContent={badgeContent} color="primary" showZero={true}>
        {icon}
    </Badge>
   </Link>
  )
}

export default Links
