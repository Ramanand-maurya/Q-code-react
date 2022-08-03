import React, { useState } from "react";
import {Link} from "react-router-dom";
function ContactForm(){
    const [active, setSelected] = useState(null);
    const activeBtn = (ind) => {
    if (active === ind) {
    return setSelected(null);
    }
    setSelected(ind);
    };
    const textData = [
        {
          id: 1,
          text: 'Web Design',
          linkbtn: '',
        },
        {
          id: 2,
          text: 'Web Development',
          linkbtn: '',
        },
        {
          id: 3,
          text: 'Mobile App Development',
          linkbtn: '',
        },
        {
          id: 4,
          text: 'Other',
          linkbtn: '',
        }
      ];
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
                            {textData.map((val,ind) =>{
                                return(
                                    <div>
                                        <Link key={val.id} className={`${active == ind ? 'active' : ''}`} onClick={() => activeBtn(ind)} to=''>{val.text}</Link>
                                    </div>
                                )
                            })}
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