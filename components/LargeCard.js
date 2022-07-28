import Image from "next/image"
import { useRouter } from "next/dist/client/router"

function LargeCard() {
    const router = useRouter();
    const contact = () => {router.push('/contact')}
    return (
        <section className="relative py-8 pb-36 sm:pb-24">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src="https://images.turo.com/media/vehicle/images/ABo9f8s3QLuBwkjCwE4PfQ.720x350.jpg"
                    layout="fill"
                    objectFit='cover'
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12 text-white">
                <h3 className='text-4xl mb-3 w-64'>Locate us now!</h3>
                <p>Find us in Salt Lake City using the link below.</p>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 hover:shadow-lg transition duration-150 cursor-pointer active:scale-100" onClick={contact}>Locate us!</button>
            </div>
        </section>
    );
}

export default LargeCard;