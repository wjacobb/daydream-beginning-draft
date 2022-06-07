import Image from "next/image"

function CarCards({name, imgURL, price}) {

    return (
        <div className="pb-2">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div className="cursor-pointer max-w-[321px] min-w-[320px] relative">    
                    <div className="relative h-80 w-80 bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out">
                        <Image src={imgURL} layout="fill" className="rounded-md"/>    
                    </div>
                    <div className="text-white bg-blue-700 absolute right-0 bottom-0 px-4 py-1 rounded-md flex">
                        <p className="text-xl font-semibold text-left">{name}</p>
                        <p className="text-sm pt-1 pl-3">${price}/day</p>
                    </div>
                </div>
            </a>  
        </div>
              
    );
}

export default CarCards;