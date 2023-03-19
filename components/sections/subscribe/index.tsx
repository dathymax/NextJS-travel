import React from 'react'
import "./subscribe.scss"
import Image from 'next/image'

const Subscribe: React.FC = () => {
    return (
        <section id='subscribe'>
            <div className="text">
                <h2>Subscribe Our Newletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, cumque.</p>

                <form>
                    <input type="email" required placeholder='Enter your email' />
                    <button aria-label='send' title="send">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>

            <div className="img-container">
                <Image
                    src={"https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/sub.png?raw=true"}
                    alt="https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/sub.png?raw=true"
                    width={488}
                    height={482}
                />
            </div>
        </section>
    )
}

export default Subscribe