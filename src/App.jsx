import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery/';

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=100')
            .then((res) => res.json())
            .then((data) => {
                const newArray = [];
                for (let i = 0; i < 40; i++) {
                    const index = Math.round(Math.random() * 99);
                    newArray.push(data[index]);
                }

                setPhotos(newArray);
            });
    }, []);

    return (
        <div className='App'>
            <Gallery photos={photos} />
        </div>
    );
}

export default App;
