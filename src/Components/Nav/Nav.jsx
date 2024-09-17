import './Nav.css'
import brand_logo from '../../assets/brand_logo.png'
const Nav = () => {
  return (
    <>
     <nav>
        <div className="logo">
          <img src={brand_logo} alt="logo" />
        </div>
        <div className="ncenter">
            <a href="">MENU</a>
            <a href="">LOCATION</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
        <div className="nright">
            <button>Login</button>
        </div>
      </nav>
    </>
  )
}

export default Nav