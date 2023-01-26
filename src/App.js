import './App.css';
import logo from './img/logo192.png';

function App() {
    return (
        <div className="App">
            <LearnReact />
        </div>
    );
}

const Header = () => {

    return (
        <header>
            <nav>
                <img src={logo} className="" alt='' width="40px" />
            </nav>
        </header>
    )
}

const MainContent = () => {
    return (
        <main>
            <section>
                <h1>Reason I'm learning React</h1>
                <ol>
                    <li>I want to learn a framework of JavaScript</li>
                    <li>React is fun to learn</li>
                    <li>I love to learn a new things</li>
                    <li>I want to build an interactive Website just like:
                        <ul>
                            <li>ChatApp</li>
                            <li>Movies Website</li>
                            <li>Forum Website</li>
                        </ul>
                    </li>
                    <li>I love to learn a new things</li>
                </ol>
            </section>
        </main>
    )
}

const Footer = () => {
    return (
        <footer>
            <small>© 2023 Hapatinga development. All right reserved.</small>
        </footer>
    )
}

const LearnReact = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


export default App;
