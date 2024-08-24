import './gallery.css';
import img from './img.avif';
import ScrambleText from '../../components/Scramble';
import Navbar from '../../components/Navbar/Navbar';

const CarouselItem = ({ index, imageUrl, description }) => {
    return (
        <li
            className="gli-carousel-item"
            style={{
                '--_index': index,
                '--_image-url': `url('${imageUrl}')`,
            }}
        >
            <a target="_blank" rel="noopener noreferrer">
                {description}
            </a>
        </li>
    );
};

const Carousel = ({ items }) => {
    return (
        <div className="gli-carousel">
            <div className="gli-carousel-control-button gli-left">
                <input type="radio" name="carousel-control-input" />
            </div>
            <div className="gli-carousel-control-button gli-right">
                <input type="radio" name="carousel-control-input" checked />
            </div>
            <div className="gli-carousel-rotation-direction">
                <ul className="gli-carousel-item-wrapper" style={{ '--_num-elements': items.length }}>
                    {items.map(item => (
                        <CarouselItem
                            key={item.index}
                            index={item.index}
                            imageUrl={item.imageUrl}
                            linkUrl={item.linkUrl}
                            description={item.description}
                        />
                    ))}
                    <li className="gli-carousel-ground"></li>
                </ul>
            </div>
        </div>
    );
};

const Gallery = () => {

    const carouselItems = [
        {
            index: 1,
            imageUrl: img,
            description: 'Architecture Example 1',
        },
        {
            index: 2,
            imageUrl: img,
            description: 'Architecture Example 2',
        },
        {
            index: 3,
            imageUrl: img,
            description: 'Architecture Example 3',
        },
        {
            index: 4,
            imageUrl: img,
            description: 'Architecture Example 4',
        },
        {
            index: 5,
            imageUrl: img,
            description: 'Architecture Example 5',
        },
        {
            index: 6,
            imageUrl: img,
            description: 'Architecture Example 6',
        },
        {
            index: 7,
            imageUrl: img,
            description: 'Architecture Example 7',
        },
        {
            index: 8,
            imageUrl: img,
            description: 'Architecture Example 8',
        },
        {
            index: 9,
            imageUrl: img,
            description: 'Architecture Example 9',
        },
        {
            index: 10,
            imageUrl: img,
            description: 'Architecture Example 10',
        },
        {
            index: 11,
            imageUrl: img,
            description: 'Architecture Example 11',
        },
    ];

    return (
        <div className="gli-wrapper">
            <Navbar></Navbar>
            <div className="gli-main-heading">
                <div className="gli-content">
                    <div className="gli-h1"><ScrambleText>PastEvents</ScrambleText></div>
                    <div className="gli-h1"><ScrambleText>PastEvents</ScrambleText></div>
                </div>
            </div>
            <div className="gli-container">
                <section className="gli-slide">
                    <div className="gli-heading">Event1</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="gli-slide">
                    <div className="gli-heading">Event2</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="gli-slide">
                    <div className="gli-heading">Event3</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="gli-slide">
                    <div className="gli-heading">Event4</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="gli-slide">
                    <div className="gli-heading">Event5</div>
                    <Carousel items={carouselItems} />
                </section>
            </div>
        </div>
    );
};

export default Gallery;
