import React from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';

const pageTitle = {
    id: '01',
    title: 'Pick your Destination'
};


export default function Destination() {
    return (<div id='destination'>
        <Navbar />
        <div className='destination'>
            <PageTitle id={pageTitle.id} title={pageTitle.title} />
        </div>
    </div>);
}

