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
            {/* <div className="absolute top-1/2 w-full text-center text-white">
                <p className="text-sm sm:text-lg">Book a trip in just a few easy steps!</p>
            </div> */}
        </div>
    );
}

export default Banner