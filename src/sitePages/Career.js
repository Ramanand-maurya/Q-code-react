import React, {useState} from "react";
import { Link,useParams } from "react-router-dom";
import Banner from "../components/Banner";
import AboutPage from "../components/AboutSec";
import CareerData from "../components/CareerData";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_91oqefe";
const TEMPLATE_ID = "template_lgwu4sg";
const USER_ID = "5ERRn5zHR7R-Gdh09";
function Career(){
    
    const [isOpen, setIsopen] = useState(false);
    const ModalOpen = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    const [isFormOpen, setIsformopen] = useState(false);
    const formModalOpen = () => {
        isFormOpen === true ? setIsformopen(false) : setIsformopen(true);
        if(isFormOpen === false){
            setIsopen(false);
        }
    };

    const ballStyle = {
        display:'none'
      };

      const { jobId } = useParams();

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
        const [file, setFile] = useState(false)
        const handleFileUpload = event => {
            setFile(event.target.files[0].name);
        };

    return(
        <>
        <Banner heading={<>We are <span>Hiring!</span></>} title="WORK WITH US" bannerImg="/images/careerBanner.png" />
        <AboutPage style1={ballStyle} linkArrow="images/icon/Arrow back.svg" linkName="Discover Now" heading={<>Why work with <span className="qty">Qwerty <span>Code?</span></span></>} title="OPPORTUNITIES" para="Qwerty Code Pvt. Ltd. is an IT & software services provider company located at Gurugram, Haryana (India). We believe in delivering unparalleled services to the business around the globe. Qwerty Code has initiated to assist business enterprises to achieve efficiency and effectiveness by taking them into the e-world, being partners in e-revolution." linkBtn="" />
        <section className="opportunitiesSection">
            <span className="tri-1"></span>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="careerHeading">
                            <p>Trending opportunities</p>
                        </div>

                    </div>
                </div>
                <div className="row">
                    {CareerData.map((val) =>{
                        return(
                            <div className="col-lg-12 linerCard" key={val.id}>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-3">
                                        <div className="applyImg">
                                            <img src={val.careerImg} alt="applyImg" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9">
                                        <div className="careerHead">
                                            <h6 dangerouslySetInnerHTML={{__html: val.jobTitle}}></h6>
                                            <div>
                                                {val.datial.map((details,index) =>{
                                                    return(
                                                    <ul key={index}>
                                                        <li>{details.experience}</li>
                                                        <li>{details.add}</li>
                                                        <li>{details.postDate}</li>
                                                    </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <div className="applyBtn">
                                            <Link onClick={ModalOpen} to={`/career/${val.id}`} className="applyTrigger">{val.linkName}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
       {/* -----Modal section--1---------- */}
        <section className={`cm-section-modal first-modal ${isOpen == true ? 'active' : ''}`}>
        {
        CareerData.filter(val => val.id == jobId).map((val) => {
            return(
            <div className="cm-model-box" key={val.id}>
                <div className="cm-modal-content">
                    <div className="cm-model-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 linerCard">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-3">
                                            <div className="applyImg">
                                                <img src={val.careerImg} alt="applyImg" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-9">
                                            <div className="careerHead">
                                            <h6 dangerouslySetInnerHTML={{__html: val.jobTitle}}></h6>
                                                <div>
                                                {val.datial.map((details,index) =>{
                                                    return(
                                                    <ul key={index}>
                                                        <li>{details.experience}</li>
                                                        <li>{details.add}</li>
                                                        <li>{details.postDate}</li>
                                                    </ul>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                            <div className="applyBtn">
                                            <Link onClick={formModalOpen} to='' className="applyBtn-dsc">{val.linkName}</Link>
                                               </div>
                                        </div>
                                    </div>
                                    <Link to='/career'><div className="closBtn" onClick={ModalOpen}>
                                        <span></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="cm-modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div dangerouslySetInnerHTML={{__html: val.description}}></div>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )})}
        </section>
        {/* ----Second modal section---------- */}
        <section className={`cm-section-modal second-Modal ${isFormOpen == true ? 'active' : ''}`}>
        {
        CareerData.filter(val => val.id == jobId).map((val,i) => {
            return(
            <div className="cm-model-box" key={i}>
                <div className="cm-modal-content">
                    <div className="cm-model-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-Heading-con">
                                        <h6>Applying for</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 linerCard">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-3">
                                            <div className="applyImg">
                                                <img src={val.careerImg} alt="applyImg" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-9">
                                            <div className="careerHead">
                                            <h6 dangerouslySetInnerHTML={{__html: val.jobTitle}}></h6>
                                                <div>
                                                {val.datial.map((details,index) =>{
                                                    return(
                                                    <ul key={index}>
                                                        <li>{details.experience}</li>
                                                        <li>{details.add}</li>
                                                        <li>{details.postDate}</li>
                                                    </ul>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to='/career'><div className="closBtn" onClick={formModalOpen}>
                                        <span></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cm-modal-body">
                        <form onSubmit={handleOnSubmit}>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="inputField">
                                                    <div>
                                                        <input type="text" required placeholder="Full Name" name='user_name' className="form-control" />
                                                        <span><img src="/images/icon/User.svg" alt="user" /></span>
                                                    </div>
                                                    <div>
                                                        <input type="text" required placeholder="Mobile no." name='mobile_number' className="form-control" />
                                                        <span className="rotate1"><img src="/images/icon/cil_phone.svg"
                                                                alt="user" /></span>
                                                    </div>
                                                    <div>
                                                        <input type="email" required placeholder="Email" name='user_email' className="form-control" />
                                                        <span><img src="/images/icon/email.svg"
                                                                alt="user" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pl-1 col-md-6">
                                                <div className="textareaBox">
                                                    <textarea name="user_message" required className="form-control"
                                                        placeholder="Message"></textarea>
                                                    <span><img src="/images/icon/email-box.svg"
                                                            alt="user" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                    <div className="uploadCv">
                                                        <h6>upload CV<span>*</span></h6>
                                                        <div className="uploadCvFiles">
                                                                <input id="file-sr" type="file" name="file_upload" onChange={handleFileUpload} accept=".doc,exe, .docx,.ppt, .pptx,.txt,.pdf" />
                                                            <a className="upImg">
                                                                <img src="/images/icon/carbon_upload.svg" alt="upload CV" />
                                                            </a>
                                                            <label className="fileNamec" htmlFor="file-sr">
                                                                <a>Choose File</a>
                                                            </label>
                                                            <div>
                                                                <a className={`cvfile ${file == false ? "" : "active"}`}><span>{file}</span>
                                                                    <small><img src="/images/icon/closeBtn.svg"
                                                                            alt="close-button" /></small></a>
                                                            </div>
                                                        </div>
                                                        <div className="submitBtn">
                                                            <button type="submit" name="button">Submit</button>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )})}
        </section>
        <div className={`modal-overlay ${isOpen == true || isFormOpen == true ? 'active' : ''}`}></div>
        </>
    )
}
export default Career;