import { useEffect, useRef } from 'react';
import './Merch.css';

const Merch = () => {
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;
        const carousel = carouselRef.current;
        const list = listRef.current;
        const runningTime = runningTimeRef.current;

        const showSlider = (type) => {
            const sliderItemsDom = list.querySelectorAll('.mr-item');
            if (type === 'mr-next') {
                list.appendChild(sliderItemsDom[0]);
                carousel.classList.add('mr-next');
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carousel.classList.add('mr-prev');
            }

            clearTimeout(runTimeOut);

            runTimeOut = setTimeout(() => {
                carousel.classList.remove('mr-next');
                carousel.classList.remove('mr-prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);

            resetTimeAnimation();
        };

        const resetTimeAnimation = () => {
            runningTime.style.animation = 'none';
            runningTime.offsetHeight; /* trigger reflow */
            runningTime.style.animation = null;
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        };

        nextBtn.onclick = () => {
            showSlider('mr-next');
        };

        prevBtn.onclick = () => {
            showSlider('mr-prev');
        };

        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        // Start the initial animation
        resetTimeAnimation();

        // Clean up the timers when the component is unmounted
        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className='mr-container'>

            <div className="mr-carousel" ref={carouselRef}>
                <div className="mr-list" ref={listRef}>
                    <div className="mr-item" style={{ backgroundImage: "url(/image/eagel1.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">EAGLE</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/owl1.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">OWL</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/crow.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">CROW</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/butterfly1.jpeg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">BUTTERFLY</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/owl2.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">OWL</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/eagel3.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">EAGLE</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/kingfirser2.jpeg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">KINGFISHER</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/parrot2.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">PARROT</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/heron.jpeg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">HERON</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/butterfly2.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">BUTTERFLY</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="mr-item" style={{ backgroundImage: "url(/image/parrot2.jpg)" }}>
                        <div className="mr-content">
                            <div className="mr-title">SLIDER</div>
                            <div className="mr-name">PARROT</div>
                            <div className="mr-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="mr-btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* next prev button */}
                <div className="mr-arrows">
                    <button className="mr-prev" ref={prevBtnRef}>&lt;</button>
                    <button className="mr-next" ref={nextBtnRef}>&gt;</button>
                </div>

                {/* time running */}
                <div className="mr-timeRunning" ref={runningTimeRef}></div>
            </div>
        </div>
    );
};

export default Merch;
