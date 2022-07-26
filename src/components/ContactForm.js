import React, { useState } from "react";
import {Link} from "react-router-dom";
function ContactForm(){
    const [isOpen, setIsopen] = useState(false);
  const activeBtn = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  };
    return(
        <>
        <form>
            <div className="contactF">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="inputField">
                            <div>
                                <input type="text" placeholder="Full Name" className="form-control" />
                                <span><img src="images/icon/User.svg" alt="user" /></span>
                            </div>
                            <div>
                                <input type="text" placeholder="Mobile no." className="form-control" />
                                <span className="rotate1"><img src="images/icon/cil_phone.svg"
                                        alt="user" /></span>
                            </div>
                            <div>
                                <input type="email" placeholder="Email" className="form-control" />
                                <span><img src="images/icon/email.svg"
                                        alt="user" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-1 col-md-6 marginLeft">
                        <div className="textareaBox">
                            <textarea name="textBox" className="form-control"
                                placeholder="Message"></textarea>
                            <span><img src="images/icon/email-box.svg"
                                    alt="user" /></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h5 className="servicesHeading">services</h5>
                        <div className="servicesBtn">
                            <div>
                                <Link onClick={activeBtn} to="" className={`${isOpen == true ? 'active' : ''}`}>Web Design</Link>
                            </div>
                            <div>
                                <Link onClick={activeBtn} className={`${isOpen == true ? 'active' : ''}`} to="">Web Development</Link>
                            </div>
                            <div>
                                <Link onClick={activeBtn} className={`${isOpen == true ? 'active' : ''}`} to="">Mobile App Development</Link>
                            </div>
                            <div>
                                <Link onClick={activeBtn} className={`${isOpen == true ? 'active' : ''}`} to="">Other</Link>
                            </div>
                        </div>
                        <div className="sendMessageBtn">
                            <Link to="">send message</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
export default ContactForm;