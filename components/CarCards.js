import Image from "next/image"
import Details from './Details'

//Don't put the onClick function here, because it loops for each car via the index file.
function CarCards({name, imgURL, price}) {
    return (
        <div className="pb-2 transition duration-150 ease-in-out active:scale-95">
            <button>
                <div className="cursor-pointer max-w-[321px] min-w-[320px] relative">
                    <div className="relative h-80 w-80 bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out">
                        <Image src={imgURL} layout="fill" className="rounded-md"/>
                    </div>
                    <div className="text-white bg-blue-700 absolute right-0 bottom-0 px-4 py-1 rounded-md flex">
                        <p className="text-xl font-semibold text-left">{name}</p>
                        <p className="text-sm pt-1 pl-3">${price}/day</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default CarCards;