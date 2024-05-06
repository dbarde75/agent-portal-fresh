import React from 'react'
import Button from '@mui/material/Button'

export default function index({ children, variant, color, onClick, type}) {
  return (
    <div>
      <Button variant={variant} color={color} onClick={onClick} type={type} >
        {children}
      </Button>
    </div>
  )
}