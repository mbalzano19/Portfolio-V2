import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    // console.log('this is setUser in nav', setUser)
    // function handleLogOut() {
    //     // delete the token from storage
    //     userService.logOut()
    //     // set the user to null
    //     setUser(null)
    // }
    return(
        <nav className='nav'>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/bio'>Bio</Link>
            &nbsp; | &nbsp;
            <Link to='/projects'>Projects</Link>
            &nbsp; | &nbsp;
            <Link to='/contact'>Contact</Link>
            {/* &nbsp; | &nbsp; */}
            

        </nav>
    )
}