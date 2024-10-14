import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Filters/Sidebar'
import SortBy from '../Components/Filters/SortBy'
import Footer from '../Components/Browse/Footer'

const NewDrop = () => {
  return (
    <div>
        <NavBar />
        <div className='p-4 mx-16 my-5'>
        <Link to="/browse" className='text-neutral-400'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold'>New Drops</span>
      </div>
        <div className='flex justify-between mx-20'>
          <Sidebar />
          <SortBy />
        </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default NewDrop
