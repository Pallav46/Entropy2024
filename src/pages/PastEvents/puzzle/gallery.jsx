import React, { useRef, useEffect } from 'react';
import './gallery.css';

let list = [['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'black']];

function getNeighbours(L) {
    let neighbours = [];
    let zeroIndex = L[0][0];
    let oneIndex = L[0][1];

    if (zeroIndex + 1 <= 2) {
        neighbours.push([zeroIndex + 1, oneIndex]);
    }
    if (zeroIndex - 1 >= 0) {
        neighbours.push([zeroIndex - 1, oneIndex]);
    }
    if (oneIndex + 1 <= 2) {
        neighbours.push([zeroIndex, oneIndex + 1]);
    }1
    if (oneIndex - 1 >= 0) {
        neighbours.push([zeroIndex, oneIndex - 1]);
    }

    let randomIndex = Math.floor(Math.random() * neighbours.length);
    return [neighbours[randomIndex]];
}

function findBlackIndex(L) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (L[i][j] === 'black') {
                return [i, j];
            }
        }
    }
    return [];
}

function Gallery() {
    const refs = useRef(list.map(() => list[0].map(() => React.createRef())));

    useEffect(() => {
        const interval = setInterval(() => {
            let blackIndex = findBlackIndex(list);
            if (blackIndex.length === 0) return;

            let neighbour = getNeighbours([blackIndex]);
            if (neighbour.length === 0) return;

            neighbour = neighbour[0];
            let temp = list[neighbour[0]][neighbour[1]];
            let k = blackIndex;

            // Swap elements
            list[neighbour[0]][neighbour[1]] = list[k[0]][k[1]];
            list[k[0]][k[1]] = temp;

            let blackRef = refs.current[k[0]][k[1]];
            let neighbourRef = refs.current[neighbour[0]][neighbour[1]];

            if (blackRef.current && neighbourRef.current) {
                // Swap classNames immediately
                let tempClassNames = blackRef.current.className;
                blackRef.current.className = neighbourRef.current.className;
                neighbourRef.current.className = tempClassNames;

                // Apply sliding effect with synchronized swap
                blackRef.current.style.transition = 'transform 0.5s ease-in-out';
                neighbourRef.current.style.transition = 'transform 0.5s ease-in-out';

                blackRef.current.style.transform = `translate(${(neighbour[1] - k[1]) * 180}px, ${(neighbour[0] - k[0]) * 200}px)`;
                neighbourRef.current.style.transform = `; translate(${(k[1] - neighbour[1]) * 180}px, ${(k[0] - neighbour[0]) * 200}px)`;
                // Reset transform after animation completes
                setTimeout(() => {
                    blackRef.current.style.transform = 'none';
                    neighbourRef.current.style.transform = 'none';
                }, 500); // Adjust timing to match your CSS transition duration
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='root'>
        <div className="bigbox">
            <div className="firstRow">
                <div ref={refs.current[0][0]} className="one insiderbox"><p>0,0</p></div>
                <div ref={refs.current[0][1]} className="two insiderbox"><p>0,1</p></div>
                <div ref={refs.current[0][2]} className="three insiderbox"><p>0,2</p></div>
            </div>
            <div className="secondRow">
                <div ref={refs.current[1][0]} className="four insiderbox"><p>1,0</p></div>
                <div ref={refs.current[1][1]} className="five insiderbox"><p>1,1</p></div>
                <div ref={refs.current[1][2]} className="six insiderbox"><p>1,2</p></div>
            </div>
            <div className="thirdRow">
                <div ref={refs.current[2][0]} className="seven insiderbox"><p>2,0</p></div>
                <div ref={refs.current[2][1]} className="eight insiderbox"><p>2,1</p></div>
                <div ref={refs.current[2][2]} className="insiderbox black"><p>2,2</p></div>
            </div>
        </div>
        </div>
    );
}

export default Gallery;
