import Image from 'next/image'
import Road from '../img/road_icon.png'
import Cooler from '../img/cooler_icon.jpeg'
import Racetrack from '../img/racetrack_icon.jpeg'
import Ski from '../img/ski_icon.jpeg'
import Chair from '../img/chair_icon.jpg'
import Sun from '../img/sun_icon.jpg'
import Fuel from '../img/gas_icon.jpeg'
import Camp from '../img/tent_icon.jpeg'
import Roof from '../img/roof_icon.jpg'
import Carseat from '../img/carseat_icon.png'
import Parks from '../img/parks_icon.png'
import Radar from '../img/radar_icon.jpg'

function Insurance() {
    return(
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Road} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Unlimited miles</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Cooler} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Cooler</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Racetrack} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Racetrack package</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Ski} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Ski rack</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Chair} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Camp chairs</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Sun} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Sun shade</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Fuel} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Prepaid refuel</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Camp} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Camp text</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Roof} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Roof storage</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Carseat} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Child carseat</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Parks} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">National Parks pass</button>                
                </div>
                <div className='flex items-center ml-8'>
                    <div className='relative h-10 w-10 mx-2'>
                        <Image alt='my-image' src={Radar} layout='fill' className='rounded-lg'/>
                    </div>
                    <button className="mb-2 w-full inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-lg transition duration-150 ease-in-out hover:scale-105">Radar detector</button>                
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