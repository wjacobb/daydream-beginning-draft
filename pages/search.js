import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {format} from 'date-fns'
import Card from '../components/CarCards'

function Search({searchResults}) {
    const router = useRouter();
    //ES6 Destructuring
    const { location, startDate, endDate, noOfGuests} = router.query;
    const formatttedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatttedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatttedStartDate} - ${formatttedEndDate}`;
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold my-2 mb-6">Stays in {location}</h1>
                    
                    <div className="hidden lg:inline-flex mb-5 space-w-3
                    text-gray-800 whitespace-nowrap">
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Type of Place</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Price</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Rooms and Beds</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">More filters</p>
                    </div>
                </section>
            </main>
            {/* This is the CarCard.js file */}
            <Card />

            <Footer />
        </div>
    )
}

export default Search

// export async function getServerSideProps() {
//     const searchResults = await fetch("API HERE").then(res => res.json());

//     return {
//         props: {
//             searchResults,
//         }
//     }
// }