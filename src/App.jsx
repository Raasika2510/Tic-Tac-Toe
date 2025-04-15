import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import SignupPage from './components/SignupPage';

function App() {

    return(
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/gameboard" element={<MainPage />} />
    </Routes>
    )

}

export default App
