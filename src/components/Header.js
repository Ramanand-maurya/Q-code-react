import React, { useState }  from 'react';
import { Link } from "react-router-dom";
import Cil_phone from '../images/icon/cil_phone.svg';
import Iconmessage from '../images/icon/iconoir_message-text.svg';
import Logo from '../images/logo.png';
import MenuItemData from './MenuItemData';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const [isActive, setisActive] = useState(false);
  const OpenMenuActive = (ind) => {
    if (isActive === ind) {
      return setisActive(null);
    }
    setisActive(ind);
  };

  return (
    <>
      <section className="topHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="left-section">
                <div><span>Covid-19 Update: </span> Our entire team is now working in-office. We expect no disruptions in our services.</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-section">
                <div className="Number1"><Link to="tel:+911204323577"><img src={Cil_phone} /> <span>+91 120 432 3577</span></Link></div>
                <div className="gmail1"><Link to="mailto:info@qwertycode.in"><img src={Iconmessage} /> <span>info@qwertycode.in</span></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="main-header">
        <div className="container">
          <nav className="nav-section">
            <div className="nav-content">
              <div className="logo-sec">
                <Link to="/" target="_self">
                  <img src={Logo} alt="logo" />
                  <div className="logoTitle">Qwerty <span> Code</span></div>
                </Link>
              </div>
              <div className="triggerBtn" onClick={ToggleSidebar}>
                <div className={`trigger1 ${isOpen == true ? 'active' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={`menu-list ${isOpen == true ? 'active' : ''}`}>
              <div className="logo-sec1">
                <Link to="/" target="_self">
                  <div className='images1'><img src={Logo} alt="logo" /></div>
                </Link>
                <span className='times1' onClick={ToggleSidebar}><i className='fa'></i></span>
              </div>
                <ul className="main-nav">
                  {
                    MenuItemData.map((menuVal, Ind) => {
                      return (
                        <li className={`top-level-link ${Ind == 0 ? "active" : ""} ${menuVal.SubMenu ? "position-relative" : ""}`} key={Ind}>
                          <Link to={menuVal.MenuItemLink} className={` ${menuVal.MegaMenu || menuVal.SubMenu ? "mega-menu" : ""} ${isActive ? "active" : ""}`} onClick={() => OpenMenuActive(Ind)}><span>{menuVal.MenuItemName}</span></Link>
                          {menuVal.SubMenu || menuVal.MegaMenu ?
                            <div className={`sub-menu-block ${menuVal.SubMenu ? "subMenuList" : ""} ${isActive ? "active" : ""}`}>
                            <div className="row">
                              {
                                menuVal.ChildMenu.map((childVal, childInd) => {
                                  return (
                                    <div className="col-md-12 col-lg-3 col-12" key={childInd}>
                                      <h2 className={`sub-menu-head ${menuVal.SubMenu ? "submenuHLink" : ""}`}>{menuVal.SubMenu ? <span><Link to={childVal.MenuItemLInk}>{childVal.MenuItemName}</Link></span> : <span>{childVal.MenuItemName}</span>}</h2>
                                      {childVal.SubMenu ?
                                        <ul className="sub-menu-lists">
                                        {
                                          childVal.ChildMenuInner.map((cInnerVal, cInnerInd)=>{
                                            return(
                                              <li key={cInnerInd}><Link to={cInnerVal.MenuItemLink}>{cInnerVal.MenuItemName}</Link></li>
                                            )
                                          })
                                        }
                                      </ul>
                                      : ""}
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                          : ""}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;