import Image from "next/image"

function LargeCard() {
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
                <p>Find us in Provo using the link below.</p>
                <a href="https://www.google.com/maps/place/175+W+2700+S,+South+Salt+Lake,+UT+84115/@40.7121939,-111.8986383,17z/data=!3m1!4b1!4m5!3m4!1s0x87528ae76d662779:0x744b47e707ced439!8m2!3d40.7121939!4d-111.8964496">
                    <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 hover:shadow-lg transition duration-150 cursor-pointer active:scale-100">Locate us!</button>
                </a>
            </div>
        </section>
    );
}

export default LargeCard;