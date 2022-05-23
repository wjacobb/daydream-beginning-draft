import Image from "next/image"
import Mazda from "../img/Mazda-6-2016.jpg"

function CarCards() {

    return (
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <article className="cursor-pointer border max-w-[321px] min-w-[320px] relative">    
                <div className="relative h-80 w-80 bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out">
                    <Image src={Mazda} layout="fill"/>    
                </div>
                <div className="text-white bg-blue-700 absolute right-0 bottom-0 px-4 py-1 rounded-sm">
                    <p className="text-xl font-semibold text-left">Mazda</p>
                </div>
            </article>
        </a>        
    );
}

export default CarCards;