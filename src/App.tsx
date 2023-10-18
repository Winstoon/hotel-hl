import { Routes, Route } from 'react-router-dom'
import { useCommonStore } from './store';
import { I18N } from './i18n';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Muan from './pages/Detail/Muan';
import Arcadia from './pages/Detail/Arcadia';
import Kanrinkyo from './pages/Detail/Kanrinkyo';
import Yukoro from './pages/Detail/Yukoro';
import NewLand from './pages/Detail/NewLand';
import WeChatDialog from './components/WeChatDialog/WeChatDialog';

import './App.css';

const FontFamilies = {
    [I18N.EN]: 'EBGaramond',
    [I18N.ZH]: 'NotoSerifSC',
    [I18N.JP]: 'ShipporiMinchoB1'
}

function App() {
    const lang = useCommonStore(state => state.lang)
    const fontFamily = FontFamilies[lang]

    return (
        <div style={{ fontFamily: `EBGaramond, ${fontFamily}` }}>
            <Routes>
                <Route path="/" element={<Home />} />
                
                {/* details */}
                <Route path="/muan" element={<Muan />} />
                <Route path="/arcadia" element={<Arcadia />} />
                <Route path="/kanrinkyo" element={<Kanrinkyo />} />
                <Route path="/yukoro" element={<Yukoro />} />
                <Route path="/newland" element={<NewLand />} />
                
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <WeChatDialog />
        </div>
    )
}

export default App;
