import './gallery.css';
import img from './img.avif';

const CarouselItem = ({ index, imageUrl, description }) => {
    return (
        <li
            className="carousel-item"
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
        <div className="carousel">
            <div className="carousel-control-button left">
                <input type="radio" name="carousel-control-input" />
            </div>
            <div className="carousel-control-button right">
                <input type="radio" name="carousel-control-input" checked />
            </div>
            <div className="carousel-rotation-direction">
                <ul className="carousel-item-wrapper" style={{ '--_num-elements': items.length }}>
                    {items.map(item => (
                        <CarouselItem
                            key={item.index}
                            index={item.index}
                            imageUrl={item.imageUrl}
                            linkUrl={item.linkUrl}
                            description={item.description}
                        />
                    ))}
                    <li className="carousel-ground"></li>
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
        <div className="wrapper">
            <div className="main-heading">
                <div class="content">
                    <div className="h1">PastEvents</div>
                    <div className="h1">PastEvents</div>
                </div>
            </div>
            <div className="container">
                <section className="slide">
                    <div className="heading">Event1</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="slide">
                    <div className="heading">Event2</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="slide">
                    <div className="heading">Event3</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="slide">
                    <div className="heading">Event4</div>
                    <Carousel items={carouselItems} />
                </section>
                <section className="slide">
                    <div className="heading">Event5</div>
                    <Carousel items={carouselItems} />
                </section>
            </div>
        </div>
    );
};

export default Gallery;
