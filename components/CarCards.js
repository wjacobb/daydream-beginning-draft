import Image from "next/image"
import { useRouter } from "next/dist/client/router"

function CarCards() {
    const router = useRouter();
    const car = () => {
        router.push({
            pathname: '/car',
        })         
    }
    return (
        
        
        <article className="grid mb-5 max-w-7xl mx-auto px-8 sm:px-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* Overall div of the card */}
            <button onClick={car}>
                <div className="cursor-pointer hover:scale-105 duration-300 ease-out border rounded-xl max-w-[321px] min-w-[320px] mb-4 shadow-md">
                    {/* Image portion */}
                    <div className="relative h-80 w-80">
                        <Image src="https://links.papareact.com/2io" layout="fill" className="rounded-xl"/>    
                    </div>
                    {/* Text portion */}
                    <div className="mx-2">
                        <h3 className="text-2xl mt-3 font-bold">Gang Gang</h3>
                        <p className="pt-2">This is a Mazda 6 from the year 2016. This<br/>This line break does not happen naturally.</p>
                        <hr/>
                        <div className="flex justify-end pr-3 text-xl my-2">
                            <p className="font-bold">$1.50</p>
                        </div>
                    </div>           
                </div>
            </button>
            
        </article>
        
    );
}

export default CarCards;