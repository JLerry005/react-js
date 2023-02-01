
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'



function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    );
}

// const Header = () => {

//     return (
//         <header>
//             <nav className="nav">
//                 <img src={logo} className="nav-logo" alt='nav-logo' />
//                 <ul className="nav-item">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// const MainContent = () => {
//     return (
//         <main>
//             <section>
//                 <h1>Reason I'm learning React</h1>
//                 <ol>
//                     <li>I want to learn a framework of JavaScript</li>
//                     <li>React is fun to learn</li>
//                     <li>I love to learn a new things</li>
//                     <li>I want to build an interactive Website just like:
//                         <ul>
//                             <li>ChatApp</li>
//                             <li>Movies Website</li>
//                             <li>Forum Website</li>
//                         </ul>
//                     </li>
//                     <li>I love to learn a new things</li>aw
//                 </ol>
//             </section>
//         </main>
//     )
// }

// const Footer = () => {
//     return (
//         <footer>
//             <small>© 2023 Hapatinga development. All right reserved.</small>
//         </footer>
//     )
// }

// const LearnReact = () => {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }


export default App;
