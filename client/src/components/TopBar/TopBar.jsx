import { Link } from 'react-router-dom'
import "./topbar.css"

export default function TopBar() {
    const user = false
    return (
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
                    </li>
                    {/* Added at the end to see how the pages look  */}
            {/* <li className="topListItem">
               <Link className="link" to="/login">
                LOGIN
               </Link>
            </li>
             <li className="topListItem">
               <Link className="link" to="/register">
                REGISTER
                        </Link>
                    </li> */}
                    {/* This is where it ends */}
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem">LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://images.unsplash.com/photo-1536140012599-830a641c27e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
           )} 
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    )
  }