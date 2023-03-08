import React from 'react'
import "./search.scss"

const Search: React.FC = () => {
    return (
        <section id="search">
            <strong>
                Explore Your Dream Place
            </strong>
            <h2 className='text-[2.4rem]'>
                Find Your Dream Destination
            </h2>
            <p>
                Find Your Destination - The Ultimate Guide to Your Dream Destination
            </p>
            <form>
                <div className="box">
                    <div className="icon">
                        <i className="fa-solid fa-location-arrow"></i>
                    </div>

                    <div className="input">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" placeholder='Where are you going?' required />
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <i className="fas fa-calendar-alt"></i>
                    </div>

                    <div className="input">
                        <label htmlFor="checkin">Checkin</label>
                        <input type="date" id="checkin" required />
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <i className="fas fa-calendar-alt"></i>
                    </div>

                    <div className="input">
                        <label htmlFor="checkout">Checkout</label>
                        <input type="date" id="checkout" required />
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <i className="fas fa-users"></i>
                    </div>

                    <div className="input">
                        <label htmlFor="travelers">Travelers</label>
                        <input type="text" id="travelers" placeholder='8 tourists' required />
                    </div>
                </div>

                <button aria-label='search' title="search">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </section>
    )
}

export default Search