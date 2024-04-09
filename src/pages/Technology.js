import React from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { technologies } from '../data/technology';
import { useState } from 'react';

const pageTitle = {
    id: '03',
    title: 'Space Launch 101'
};

export default function Technology() {
    const [technology, setTechnology] = useState(technologies[0]);
    const updateTechnology = (e) => {
        const id = parseInt(e.target.dataset.id);
        setTechnology(technologies[id]);
        const linksNode = document.querySelectorAll('.technology-link');
        linksNode.forEach(link => {
            linksNode.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        });
    }

    return (
        <div id='technology'>
            <Navbar />
            <div className='technology'>
                <PageTitle id={pageTitle.id} title={pageTitle.title} />
                <div className='technology-content'>
                    <div className='technology-info'>
                        <nav>
                            <ul className='technology-nav'>
                                <li className='technology-link active' data-id='0' onClick={updateTechnology}>1</li>
                                <li className='technology-link' data-id='1' onClick={updateTechnology}>2</li>
                                <li className='technology-link' data-id='2' onClick={updateTechnology}>3</li>
                            </ul>
                        </nav>
                        <div className='technology-detail'>
                            <h4 className='title-text'>The Terminology</h4>
                            <h3 className='h3'>{technology.title}</h3>
                            <p className='body-text'>{technology.description}</p>
                        </div>
                    </div>
                    <img className='portrait' src={technology.imagePortrait} alt={technology.title} />
                    <img className='landscape' src={technology.imageLandscape} alt={technology.title} />
                </div>
            </div>
        </div>
    )
}
