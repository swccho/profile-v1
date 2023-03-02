import Header from "./shared/header";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";

function App() {
    return (
        <>
            <div className={'layout v-1'}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/portfolio" element={<Portfolio/>}></Route>
                    <Route path="/contacts" element={<Contacts/>}></Route>
                </Routes>
            </div>
        </>
    )

}

export default App;
