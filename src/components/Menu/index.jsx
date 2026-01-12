import Wrapper from './style'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaUsers, FaFileContract, FaQuestionCircle } from 'react-icons/fa'
import { MdEvent } from 'react-icons/md'
import { IoLogOut } from 'react-icons/io5'
import { FaCreditCard } from 'react-icons/fa'
import { PiUsersThree } from "react-icons/pi";
import { FiBarChart2, FiSettings,FiLink } from "react-icons/fi";


const Menu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleChange = (path) => navigate(path)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("auth")
    navigate("/login")
  }

  return (
    <Wrapper>
      <div className="menu-bar">
        <div className="heading">
          <h1>Menu</h1>
        </div>
        <div className="content">

          <p className="section-title">Management</p>
           <div className={`menu-item ${pathname === '/revenue-dashboard' ? 'active' : ''}`}
            onClick={() => handleChange('/revenue-dashboard')}>
            <FiBarChart2 />
            <span>Revenue Dashboard</span>
          </div>

          <div className={`menu-item ${pathname === '/user' ? 'active' : ''}`}
            onClick={() => handleChange('/user')}>
            <FaUsers />
            <span>Users</span>
          </div>
         
          <div className={`menu-item ${pathname === '/plan-management' ? 'active' : ''}`}
            onClick={() => handleChange('/plan-management')}>
            <MdEvent />
            <span>Plan Management</span>
          </div>

          <div className={`menu-item ${pathname === '/User-Payments' ? 'active' : ''}`}
            onClick={() => handleChange('/User-Payments')}>
            <FaCreditCard />
            <span>User Payments</span>
          </div>
           <div className={`menu-item ${pathname === '/userNetwork' ? 'active' : ''}`}
            onClick={() => handleChange('/userNetwork')}>
            <PiUsersThree />
            <span>User Network</span>
          </div>
           <div className={`menu-item ${pathname === '/integration-list' ? 'active' : ''}`}
            onClick={() => handleChange('/integration-list')}>
            <FiLink />
            <span>Integrations</span>
          </div>

          <p className="section-title">Settings</p>

          <div className={`menu-item ${pathname === '/Terms_condition' ? 'active' : ''}`}
            onClick={() => handleChange('/Terms_condition')}>
            <FaFileContract />
            <span>Terms & Conditions</span>
          </div>

          <div className={`menu-item ${pathname === '/Help_support' ? 'active' : ''}`}
            onClick={() => handleChange('/Help_support')}>
            <FaQuestionCircle />
            <span>Help & Support</span>
          </div>
          
           <div className={`menu-item ${pathname === '/setting' ? 'active' : ''}`}
            onClick={() => handleChange('/setting')}>
            <FiSettings />
            <span>Settings</span>
          </div>

          <div className="divider" />

          <div className="menu-item logout" onClick={handleLogout}>
            <IoLogOut />
            <span>Logout</span>
          </div>

        </div>
      </div>
    </Wrapper>
  )
}

export default Menu
