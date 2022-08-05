import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_91oqefe";
const TEMPLATE_ID = "template_lgwu4sg";
const USER_ID = "5ERRn5zHR7R-Gdh09";
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
        },
        {
          id: 2,
          text: 'Web Development',
        },
        {
          id: 3,
          text: 'Mobile App Development',
        },
        {
          id: 4,
          text: 'Other',
        },
      ];

      const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return(
        <>
        <form onSubmit={handleOnSubmit}>
            <div className="contactF">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="inputField">
                            <div>
                                <input type="text" required placeholder="Full Name" className="form-control" name='user_name' />
                                <span><img src="images/icon/User.svg" alt="user" /></span>
                            </div>
                            <div>
                                <input type="text" required placeholder="Mobile no." className="form-control" name='mobile_number' />
                                <span className="rotate1"><img src="images/icon/cil_phone.svg"
                                        alt="user" /></span>
                            </div>
                            <div>
                                <input type="email" required placeholder="Email" className="form-control" name='user_email' />
                                <span><img src="images/icon/email.svg"
                                        alt="user" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-1 col-md-6 marginLeft">
                        <div className="textareaBox">
                            <textarea name='user_message' required className="form-control"
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
                                <div className='selecotr-item' key={ind}>
                                    <input type="radio" id={`radio${val.id}`} value={val.text} name="service_info" className="selector-item_radio" defaultChecked />
                                    <label htmlFor={`radio${val.id}`} className="selector-item_label">{val.text}</label>
                                </div>
                                )
                            })}
                        </div>
                        <div className="sendMessageBtn">
                            <button type='submit' color='green'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
export default ContactForm;