import Image from "next/image";
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon } from '@heroicons/react/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"

function Header() {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        })
    }
    const [menuItem, setMenuItem] = useState('')
    const handleChange = (e) => {
        setMenuItem(e.target.value)
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-secondary shadow-md p-5 md:px-10 ">
            {/* Left */}
            <div 
                
                className='relative flex justify-start h-10 
                cursor-pointer my-auto'>
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"
                    onClick={() => router.push("/")}
                />
            </div>

            {/* Middle */}
            <div className='flex items-center
            md:border-2 rounded-full py-2
            md:shadow-sm'>
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-5
                    bg-transparent outline-none text-sm
                    text-white placeholder-gray-200"
                    type="text"
                    placeholder={"Start your search"} 
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-primary
                 text-white rounded-full p-2 cursor-pointer md:mx-2"
                 />
            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-white'>
                {/* Header tabs */}
                <p className='hidden md:inline cursor-pointer'>Cars</p>
                <p className='hidden md:inline cursor-pointer'>My Trips</p>

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    


                    {/*  */}
                    {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="https://1p4xnw9vz583g92k7249hwjj-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/pawhold.jpg" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">dog</a>
                        </li>
                        <li>
                            <a href="https://memesboy.com/wp-content/uploads/2018/04/You-Cant-See-Me-Dogs-Meme.jpg" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">doggo</a>
                        </li>
                        <li>
                            <a href="http://fallinpets.com/wp-content/uploads/2019/08/Hilarious-and-Funniest-Dog-Memes-Of-The-Day-50-pics-6.jpg" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">do</a>
                        </li>
                        </ul>
                    </div> */}
                    
                </div>
            </div>
            {/* Calendar operation */}
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-5'>
                    <DateRangePicker ranges={[selectionRange]} 
                    minDate={new Date()}
                    rangeColors={['#FBD262']}
                    onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                    
                        <UsersIcon className="h-5" />
                        <input 
                        value={noOfGuests}
                        onChange={e => setNoOfGuests(e.target.value)}
                        type="number" 
                        min={1}
                        className="w-12 pl-2 text-lg outline-none text-primary"/>
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-primary">Search</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;