function Price() {
    return (
        <div>
            <footer className="bg-blue-700 text-4xl text-white font-extrabold text-center fixed inset-x-0 bottom-0 p-4 grid sm:grid-cols-2">
                <p className="my-auto">Total: $197.97</p>
                <button className="text-black bg-primary active:bg-yellow-400 font-bold p-2 rounded-md my-auto hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl bg-fixed opacity-100 md:max-w-sm active:scale-100">Reserve now!</button>
            </footer>
        </div>
    );
}

export default Price;