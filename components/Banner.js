import Image from "next/image"
import Mazda from "../img/Mazda-6-2016.jpg"

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
            alt='my-image'
            src={Mazda}
            layout='fill'
            objectFit='cover'
            />
            <button className="text-white bg-blue-700 absolute top-1/3 left-12 px-4 py-1 rounded-md hover:scale-105 transition ease-in-out hover:shadow-xl">
                <div className="text-xl font-extrabold text-left">
                    <h1>&emsp;Date</h1>
                </div>
                <div>
                    <h2>When do you need a car?</h2>
                </div>
            </button>   
        </div>
    );
}

export default Banner