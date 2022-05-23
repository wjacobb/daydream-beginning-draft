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
        <nav className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div>
                <h1 className="font-bold text-xl">Daydream Car Company</h1>
                <h2>&emsp;&emsp;Car rental you'll dream about</h2>
            </div>

            {/* Middle */}
            <div className='hidden relative md:grid h-10 w-full my-auto cursor-pointer'>
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"
                    onClick={() => router.push("/")}
                />
            </div>
            {/* Right */}
            <div className='navbar-burger burger hidden lg:flex items-center lg:space-x-4 xl:space-x-6 justify-end text-black'>
                {/* Header tabs */} 
                <a href="https://www.youtube.com/watch?v=CeYuFSBkkVw">
                    <p className='hidden md:inline cursor-pointer'>Home</p>
                </a>
                <a href="https://www.youtube.com/watch?v=wDgQdr8ZkTw">
                    <p className='hidden md:inline cursor-pointer'>About Us</p>
                </a>
                <a href="https://www.youtube.com/watch?v=tAVnGvRwXew">
                    <p className='hidden md:inline cursor-pointer'>Features</p>
                    
                </a>
                <a href="https://www.youtube.com/watch?v=7lktMLiKaes">
                    <p className='hidden md:inline cursor-pointer'>Contact</p>
                </a>
            </div>            
        </nav>
        
    );
}

export default Header;