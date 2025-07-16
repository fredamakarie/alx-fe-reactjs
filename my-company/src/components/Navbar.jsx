import {Link} from 'react-router-dom'


function Navbar() {
   return ( 
   <nav>
    <ul style = {{color: "orange", backgroundColor: "black", padding: "2rem", border }}>
        <div >  
         <Link to = "/" style = {{color: "white"}}> Home </Link> | {''}
         <Link to = "/about" style = {{color: "white"}}> About </Link> | {''}
         <Link to = "/services" style = {{color: "white"}}> Services </Link> | {''}
         <Link to = "/contact" style = {{color: "white"}}> Contact </Link>
        </div> 
     </ul>
    </nav>
   )
}
export default Navbar;