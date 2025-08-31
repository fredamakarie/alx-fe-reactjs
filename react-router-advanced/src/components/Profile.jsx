import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <nav>
            <NavLink to="/profile/profiledetails">Profile Details</NavLink>
            <NavLink to="/profile/profilesettings">Profile Settings</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Profile