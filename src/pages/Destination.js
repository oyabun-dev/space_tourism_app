import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { destinations } from '../data/destination';


const pageTitle = {
    id: '01',
    title: 'Pick your Destination'
};


export default function Destination() {
    const [destination, setDestination] = useState(destinations[0]);
    const updateDestination = (e) => {
        const id = parseInt(e.target.dataset.id);
        setDestination(destinations[id]);
        const linksNode = document.querySelectorAll('.destination-link');
        linksNode.forEach(link => {
            linksNode.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        });
    }


    return (<div id='destination'>
        <Navbar />
        <div className='destination'>
            <PageTitle id={pageTitle.id} title={pageTitle.title} />
            <div className='destination-content'>
                <img src={destination.image} alt={destination.alt} />

                <aside>
                    <ul className='destination-nav'>
                        <li className='destination-link active' data-id='0' onClick={updateDestination}>Moon</li>

                        <li className='destination-link' data-id='1' onClick={updateDestination}>Mars</li>

                        <li className='destination-link' data-id='2' onClick={updateDestination}>Europa</li>

                        <li className='destination-link' data-id='3' onClick={updateDestination}>Titan</li>
                    </ul>

                    <div className='destination-info'>
                        <h1 className='h1'>{destination.title}</h1>
                        <p className='body-text'>{destination.description}</p>
                        <hr />
                        <div className='destination-details'>
                            <div>
                                <h3 className='sh2'>Average Distance</h3>
                                <p className='sh1'>{destination.avgDistance}</p>
                            </div>
                            <div>
                                <h3 className='sh2'>Travel Time</h3>
                                <p className='sh1'>{destination.travelTime}</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>);
}

