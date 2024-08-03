import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav'>
    <div className="nav_logo" >F1 Velocity</div>
    <ul className="nav-menu">
        <li className='nav-home'>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li >Contact</li>
    </ul>
    </div>
  )
}
export default Navbar