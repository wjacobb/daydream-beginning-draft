import Image from 'next/image'

function Insurance({ name, imgURL, price }) {
    return(
        <div>
            <section>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2 mb-2'>
                        <Image alt='my-image' src={imgURL} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg active:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out hover:scale-105 active:scale-100">{name} ${price}</button>                
                </div>
                
            </section>
            
            {/* <form>
                <input type="checkbox" id="Insurance" name="Insurance" value="Insurance"/>
                <label for="vehicle1" className="ml-2 font-semibold">Insurance Package</label><br/>
                <p className="pl-3">If you get in a little accident we'll cover the costs with a small deductible at your expense.</p>

                <input type="checkbox" id="GasRefill" name="GasRefill" value="GasRefill"/>
                <label for="vehicle2" className="ml-2 font-semibold">We refill post-return</label><br/>
                <p className="pl-3">Don't stress about returning the car with gas. We'll refill it for you!</p>
                
                <input type="checkbox" id="CarSeat" name="CarSeat" value="CarSeat"/>
                <label for="vehicle3" className="ml-2 font-semibold">Car Seat Package</label><br/>
                <p className="pl-3">Have a little one with you? We have car seats for 0-18 month olds and 18 month to 3 year olds.</p>
            </form> */}

        </div>
    )
}

export default Insurance;