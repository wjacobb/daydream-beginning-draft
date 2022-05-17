function Insurance() {
    return(
        <div>
            <form>
                <input type="checkbox" id="Insurance" name="Insurance" value="Insurance"/>
                <label for="vehicle1" className="ml-2 font-semibold">Insurance Package</label><br/>
                <p className="pl-3">If you get in a little accident we'll cover the costs with a small deductible at your expense.</p>

                <input type="checkbox" id="GasRefill" name="GasRefill" value="GasRefill"/>
                <label for="vehicle2" className="ml-2 font-semibold">We refill post-return</label><br/>
                <p className="pl-3">Don't stress about returning the car with gas. We'll refill it for you!</p>
                
                <input type="checkbox" id="CarSeat" name="CarSeat" value="CarSeat"/>
                <label for="vehicle3" className="ml-2 font-semibold">Car Seat Package</label><br/>
                <p className="pl-3">Have a little one with you? We have car seats for 0-18 month olds and 18 month to 3 year olds.</p>

            </form>
        </div>
    )
}

export default Insurance;