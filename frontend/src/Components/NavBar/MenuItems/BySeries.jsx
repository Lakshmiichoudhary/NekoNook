import React from 'react'

const BySeries = () => {
  return (
    <div className='flex text-sm h-60'>
      <ul className='flex w-40 flex-col p-1 font-rubik'>
        <li className='p-2 mx-2 hover:text-orange-400'>Attack On Titan</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Berserk</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Black Clover</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Demon Slayer</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Dragon Ball</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Haikyu</li>
    </ul>
    <ul className='flex flex-col w-48 p-2 font-rubik'>
        <li className='p-2 mx-2 hover:text-orange-400'>Hunter X Hunter</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Jujutsu Kaisen</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Naruto</li>
        <li className='p-2 mx-2 hover:text-orange-400'>One Piece</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Spy X Family</li>
        <li className='p-2 mx-2 hover:text-orange-400'>Tokyo Revengers</li>
    </ul>
    </div>
  )
}

export default BySeries
