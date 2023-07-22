import React from 'react'
import './footer.scss'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="my-footer">
        <p>© {year} Sean Venz Quijano</p>
    </div>
  )
}

export default Footer
