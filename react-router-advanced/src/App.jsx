
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'

function App() {
  let { path, url } = useRouteMatch();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>}/>
          <Route path="/profile/profiledetails" element={<ProfileDetails/>}/>
          <Route path="/profile/profilesettings" element= {<ProfileDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
