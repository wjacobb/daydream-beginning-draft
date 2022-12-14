import React,{useState} from 'react';
import 'reactjs-popup/dist/index.css';

function Details ({name, imgURL, price, description, specs}) {
    // const [show, setShow]=useState(true);

    return(
        <section>
          <div className='flex justify-center'>
            {
              show?
              <div className='shadow-2xl rounded-lg border-2'>
                    <div>
                      <div className='grid grid-cols-2'>
                        <h3 className='flex justify-start text-4xl pl-3 py-3'><strong>{name}</strong></h3>
                        {/* <button className='flex justify-end my-auto mr-6' onClick={()=>setShow(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button> */}
                      </div>
                      <div className='flex justify-center mx-5'>
                        <img src={imgURL} layout='fill' className='rounded-md'/>
                      </div>
                      <div className='p-3 max-w-xl'>
                        <p>$<u>{price}/day</u></p>
                        <p>Description:</p>
                        <p>{description}</p>
                        <p className='mt-2'>Specifications:</p>
                        <p>{specs}</p>
                        <button className='bg-blue-700 px-4 py-2 font-bold rounded-md text-white mt-2 hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl bg-fixed opacity-100 md:max-w-sm active:scale-100'>Reserve</button>
                      </div>
                    </div>
              </div>:null
            }
          </div>
        </section>
    )
}

export default Details;