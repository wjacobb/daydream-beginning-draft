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

function Calendar() {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetDate = () => {
        setEndDate(startDate)
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
    return (
        <div>
            <section>
                {/* <div className='flex items-center
                md:border-2 rounded-full py-2
                md:shadow-sm'>
                    <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-5
                    bg-transparent outline-none text-sm
                    text-black placeholder-gray-400"
                    type="text"
                    placeholder={"Start your search"} 
                    />
                </div> */}

                
                {(
                <div className='flex flex-col col-span-3 mx-auto mt-5'>
                    <DateRangePicker ranges={[selectionRange]} 
                    minDate={new Date()}
                    rangeColors={['#FBD262']}
                    onChange={handleSelect}
                    />
                    <hr/>
                    <div className="flex mt-2">
                        <button onClick={resetDate} className="flex-grow text-gray-500">Reset</button>
                        <button onClick={search} className="flex-grow text-primary">Search</button>
                    </div>
                </div>
                )}  
            </section>
            
        </div>
    );
    
}
export default Calendar;