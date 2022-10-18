import {AboutEmotions} from "../../pages/AboutEmotions/AboutEmotions.jsx";
import {DrawEmotion} from "../../pages/DrawEmotion/DrawEmotion.jsx";
import {Form} from "../../pages/Form/Form.jsx";
import {Notes} from "../../pages/Notes/Notes.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route, NavLink,
} from "react-router-dom";
import './App.scss'
import {Layout} from "../Layout/Layout";



function App () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>} >
                    <Route path='/form' element={<Form />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/oemocjach' element={<AboutEmotions />} />
                    <Route path='/losujemocje' element={<DrawEmotion />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
