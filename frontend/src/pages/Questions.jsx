import React, { useState } from 'react';
import Footer from '../Components/Browse/Footer';
import { Link } from "react-router-dom";
import { FAQs, sideBar } from '../utils/constants';
import arrow from "../assets/downArrow.png"; 
import orangeArrow from "../assets/orangeArrow.png"; 
import { useDispatch, useSelector } from 'react-redux';
import { toggleArrow } from '../Store/Toggle';
import NavBar from '../Components/NavBar/NavBar';

const Questions = () => {
  const [hovered, setHovered] = useState(null);
  const dispatch = useDispatch();
  const openQuestion = useSelector((state) => state.arrow.openArrow)
 
  const handleQuestion = (index) => {
    dispatch(toggleArrow(index))
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='p-4 mx-16 my-5'>
        <Link to="/browse" className='text-neutral-400'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold'>FAQ's</span>
      </div>
      <div className='flex'>
        <div className='px-16'>
          {sideBar.map((category, id) => (
            <div
              key={id}
              className='flex p-2 items-center justify-between hover:bg-red-200 rounded-lg hover:text-orange-400 group'
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className='p-2 font-semibold'>{category}</span>
              <img
                className={`p-2 ${hovered === id ? " " : "transform -rotate-90"}`}
                src={hovered === id ? orangeArrow : arrow} 
                alt='arrow'
              />
            </div>
          ))}
        </div>
        <div className='p-2 w-2/3'>
            {FAQs.map((faq,index)=>(
                <div key={index} className='mb-10'>
                    <div className='flex items-center justify-between' onClick={()=>handleQuestion(index)}>
                        <h3 className='p-2 font-bold cursor-pointer'>{faq.question}</h3>
                        <img className={`px-4 mx-5 ${openQuestion.includes(index) ? "transform rotate-180" : "null"}`} src={arrow} alt='arrow'></img>
                    </div>
                    {openQuestion.includes(index) && <p className='p-2 mb-6'>{faq.answer}</p>}
                </div>
            ))}
        </div>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Questions;
