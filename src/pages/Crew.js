import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { crewMembers } from '../data/crew';

const pageTitle = {
    id: '02',
    title: 'Meet your Crew'
};

export default function Crew() {
    const [crew, setCrew] = useState(crewMembers[0]);
    const updateCrew = (e) => {
        const id = parseInt(e.target.dataset.id);
        setCrew(crewMembers[id]);
        const linksNode = document.querySelectorAll('.crew-link');
        linksNode.forEach(link => {
            linksNode.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        });
    }
    return (
        <div id='crew'>
            <Navbar />
            <div className='crew'>
                <PageTitle id={pageTitle.id} title={pageTitle.title} />
                <div className='crew-content'>
                    <div className='crew-member'>
                        <div className='crew-member-detail'>
                            <h4 className='h4'>{crew.role}</h4>
                            <h3 className='h3'>{crew.name}</h3>
                            <p className='body-text'>{crew.description}</p>
                        </div>
                        <nav className='crew-nav'>
                            <li className='crew-link active' data-id='0' onClick={updateCrew}></li>
                            <li className='crew-link' data-id='1' onClick={updateCrew}></li>
                            <li className='crew-link' data-id='2' onClick={updateCrew}></li>
                            <li className='crew-link' data-id='3' onClick={updateCrew}></li>
                        </nav>
                    </div>
                    <hr />
                    <img src={crew.image} alt={crew.name} />
                </div>
            </div>
        </div>
    )
}
