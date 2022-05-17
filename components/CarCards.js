import Image from "next/image"
import Mazda from "../img/Mazda-6-2016.jpg"

function CarCards() {

    return (
        <article className="cursor-pointer hover:scale-105 duration-300 ease-out border rounded-xl max-w-[321px] min-w-[320px] mb-4 shadow-md">    

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div className="relative h-80 w-80">
                    <Image src={Mazda} layout="fill" className="rounded-xl"/>    
                </div>
                {/* Text portion */}
                <div className="mx-2">
                    <h3 className="text-2xl mt-3 font-bold">Hello there!</h3>
                    <p className="pt-2">This is a Mazda 6 from the year 2016. This<br/>This line break does not happen naturally.</p>
                    <hr/>
                    <div className="flex justify-end pr-3 text-xl my-2">
                        <p className="font-bold">$2.50</p>
                    </div>
                </div>  
            </a>
        </article>
        
    );
}

export default CarCards;