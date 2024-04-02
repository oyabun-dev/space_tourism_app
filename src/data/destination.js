import moonImg from '../assets/img/destination/image-moon.png';
import marsImg from '../assets/img/destination/image-mars.png';
import europaImg from '../assets/img/destination/image-europa.png';
import titanImg from '../assets/img/destination/image-titan.png';


const moon = {
    id: 1,
    title: 'Moon',
    image: moonImg,
    alt: 'Moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avgDistance: '384,400 km',
    travelTime: '3 days'
}

const mars = {
    id: 2,
    title: 'Mars',
    image: marsImg,
    alt: 'Mars',
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avgDistance: '225 mil. km',
    travelTime: '9 months'
}

const europa = {
    id: 3,
    title: 'Europa',
    image: europaImg,
    alt: 'Europa',
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 mil. km',
    travelTime: '3 years'
}

const titan = {
    id: 4,
    title: 'Titan',
    image: titanImg,
    alt: 'Titan',
    description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 bil. km',
    travelTime: '7 years'
}

export const destinations = [moon, mars, europa, titan];