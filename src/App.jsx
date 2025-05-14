import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"

export default function App(){
    return (
        <div className="app">
            <Header/>
            <Hero/>
            <Features/>
            <Footer/>
        </div>

    )
}