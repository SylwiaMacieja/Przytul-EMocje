import {AboutEmotions} from "../../pages/AboutEmotions/AboutEmotions.jsx";
import {DrawEmotion} from "../../pages/DrawEmotion/DrawEmotion.jsx";
import {Form} from "../../pages/Form/Form.jsx";
import {Notes} from "../../pages/Notes/Notes.jsx";
import {HappinessDescription} from "../../pages/EmotionsPages/Happiness/Hapinnes.jsx"
import {Home} from "../../pages/Home/Home.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route, NavLink,

} from "react-router-dom";
import './App.scss'
import {Layout} from "../Layout/Layout";
import {CuriosityDescription} from "../../pages/EmotionsPages/Curiosity/Curiosity";




function App () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/happiness' element={<HappinessDescription />} />
                <Route path='/curiosity' element={<CuriosityDescription />} />
                <Route path='/oemocjach' element={<AboutEmotions />} />
                <Route path='/layout' element={<Layout/>} >
                    <Route path='/layout/form' element={<Form />} />
                    <Route path='/layout/notes' element={<Notes />} />
                    <Route path='/layout/losujemocje' element={<DrawEmotion />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
