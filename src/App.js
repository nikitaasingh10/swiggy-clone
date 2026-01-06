const App = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-swiggy-orange">
                🍕 Swiggy Clone
            </h1>
            <p className="text-center text-lg mt-4">
                Welcome to our food delivery app!
            </p>
            <div className="mt-8 text-center">
                <button className="bg-swiggy-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default App;