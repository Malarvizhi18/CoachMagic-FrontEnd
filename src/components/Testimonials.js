import React from 'react'

const Testimonials = () => {
    
    return(
        <div>
            <h1 className='text-3xl font-sans font-bold text-center'>Here are our users <br/> testimonials</h1>
            <div className='flex flex-wrap p-8'>
            
            {
                 Array(6).fill("").map((index)=>
                 {
                     return (
                         <div className='p-5'>
                             
                             <div className='w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg'>
                                 <div>
                                     <div className='flex'>
                                         <img className= 'h-14 rounded-full' src='https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png'/>
                                         <div className='pl-3'>
                                         <h1 className='font-sans font-semibold'>ChiChi</h1>
                                         <h1 className='font-sans font-light'>South Africa</h1>
                                         </div>
                                     </div>
                                 </div>
                                 <div className='pt-3'>
                                     <h1 className='font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</h1>
                                 </div>
                             </div>
                         </div>
                       )
                 })
                 
            }
        </div>
        </div>
    )
  
}

export default Testimonials