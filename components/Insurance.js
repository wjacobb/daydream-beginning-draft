import Image from 'next/image'

function Insurance({ name, imgURL, price }) {
    return(
        <div>
            <a href="https://www.youtube.com/watch?v=tAVnGvRwXew">
                <section>
                    <div className='flex items-center px-4'>
                        <div className='relative h-10 w-10 mx-2 mb-2'>
                            <Image alt='my-image' src={imgURL} layout='fill' className='rounded-lg'/>
                        </div>
                        <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg active:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out hover:scale-105 active:scale-100">{name} ${price}</button>                
                    </div>
                </section>    
            </a>
            
        </div>
    )
}

export default Insurance;