import React from 'react'
import logo from "../assets/Logo.png"
import AddBestSeller from './AddBestSeller'

const AdminDashboard = () => {
  return (
    <div>
      <nav className='p-4 px-16 flex justify-between bg-white shadow-md items-center'>
        <div className='flex justify-between'>
          <img className='w-44 h-8 mt-1' src={logo} alt='logo'></img>
        </div>
      </nav>  
      <div>
        <AddBestSeller />
      </div>  
    </div>
  )
}

export default AdminDashboard
