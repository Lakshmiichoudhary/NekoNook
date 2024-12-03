import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'
import AddBestSeller from './AddBestSeller'

const AdminDashboard = () => {
 
  return (
    <div>
      <AdminNav />  
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
