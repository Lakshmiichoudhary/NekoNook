import { useState } from 'react';
import { Link } from "react-router-dom";
import { FAQs, sideBar } from '../utils/constants';
import arrow from "../assets/downArrow.png"; 
import orangeArrow from "../assets/orangeArrow.png"; 
import { useDispatch, useSelector } from 'react-redux';
import { toggleArrow } from '../Store/Toggle';

const Questions = () => {
  const [hovered, setHovered] = useState(null);
  const dispatch = useDispatch();
  const openQuestion = useSelector((state) => state.arrow.openArrow);
 
  const handleQuestion = (index) => {
    dispatch(toggleArrow(index));
  };

  return (
    <div className='pt-24 md:pt-28 font-rubik overflow-x-hidden'>
      {/* Breadcrumb Links */}
      <div className='p-4 mx-4 md:mx-16 my-2 md:my-5'>
        <Link to="/browse" className='text-neutral-400 text-sm md:text-base'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold text-sm md:text-base'>FAQ&apos;s</span>
      </div>

      {/* Main Layout Container - Columns on mobile, Row on Desktop */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
        
        {/* Sidebar Categories - Horizontal scroll on mobile, vertical list on desktop */}
        <div className='px-4 md:px-16 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none whitespace-nowrap lg:whitespace-normal'>
          {sideBar.map((category, id) => (
            <div
              key={id}
              className='flex p-2 px-4 lg:px-2 items-center justify-between hover:bg-red-200 rounded-lg hover:text-orange-400 group cursor-pointer border border-neutral-100 lg:border-none shrink-0'
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className='p-1 lg:p-2 font-semibold text-sm md:text-base'>{category}</span>
              {/* Hide arrows on mobile carousel to keep it clean */}
              <img
                className={`hidden lg:block p-2 ${hovered === id ? " " : "transform -rotate-90"}`}
                src={hovered === id ? orangeArrow : arrow} 
                alt='arrow'
              />
            </div>
          ))}
        </div>

        {/* Accordion Questions Area */}
        <div className='p-4 md:p-2 w-full lg:w-2/3 px-4 md:px-16 lg:px-2'>
          {FAQs.map((faq, index) => (
            <div key={index} className='mb-6 md:mb-10 border-b border-neutral-100 pb-4 lg:border-none lg:pb-0'>
              <div 
                className='flex items-center justify-between gap-4 cursor-pointer select-none' 
                onClick={() => handleQuestion(index)}
              >
                <h3 className='p-2 font-bold text-sm md:text-lg text-[#1C1C1C] transition-colors hover:text-orange-400'>
                  {faq.question}
                </h3>
                <img 
                  className={`px-2 md:px-4 mx-2 md:mx-5 w-8 md:w-auto h-auto object-contain transition-transform duration-200 ${
                    openQuestion.includes(index) ? "transform rotate-180" : ""
                  }`} 
                  src={arrow} 
                  alt='arrow' 
                />
              </div>
              {openQuestion.includes(index) && (
                <p className='p-2 px-4 mt-2 mb-2 text-neutral-600 text-xs md:text-base leading-relaxed bg-neutral-50 rounded-sm lg:bg-transparent'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Questions;