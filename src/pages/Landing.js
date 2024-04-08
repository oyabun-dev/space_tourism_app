import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <main id='landingPage'>
            <Navbar />
            <div className='main-content'>
                <aside className='headline'>
                    <h5 className='h5'>So, you want to travel to</h5>
                    <h1 className='h1'>Space</h1>
                    <p className='body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </aside>
                <aside className='button-side'>
                    <Link to="/destination" className='rounded-btn'>Explore</Link>
                </aside>
            </div>
        </main>
    );
}