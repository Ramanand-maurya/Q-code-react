import React, {useState} from "react";
import Banner from "../components/Banner";
import AboutPage from "../components/AboutSec";

function Career(){
    const [isOpen, setIsopen] = useState(false);
  const ModalOpen = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  };
    const ballStyle = {
        display:'none'
      };
      const CareerData= [
        {
            id: 1,
            careerImg: 'images/careerImg-1.png',
            jobTitle: `UI UX <span>Designer</span>`,
            linkName: 'Apply Now',
            datial: [
                {
                    experience: '1-3 Exp',
                    add: 'Noida',
                    postDate: 'Posted on Jun 29, 2022',
                }
            ]
        },
        {
            id: 2,
            careerImg: 'images/careerImg-2.png',
            jobTitle: `Graphic <span> Designer</span>`,
            linkName: 'Apply Now',
            link: '/',
            datial: [
                {
                    experience: '1-3 Exp',
                    add: 'Noida',
                    postDate: 'Posted on Jun 29, 2022',
                }
            ]
        },
      ];
    return(
        <>
        <Banner heading={<>We are <span style={{color : "#E72078",fontSize:"38px",fontWeight:700}}>Hiring!</span></>} title="WORK WITH US" bannerImg="/images/careerBanner.png" />
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
                    {CareerData.map((val,ind) =>{
                        return(
                            <div className="col-lg-12 linerCard" key={ind}>
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
                                            <a onClick={ModalOpen} className="applyTrigger">{val.linkName}</a>
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
            <div className="cm-model-box">
                <div className="cm-modal-content">
                    <div className="cm-model-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 linerCard">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-3">
                                            <div className="applyImg">
                                                <img src="images/careerImg-1.png" alt="applyImg" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-9">
                                            <div className="careerHead">
                                                <h6>UI UX <span> Designer</span></h6>
                                                <div>
                                                <ul>
                                                    <li>1-3 Exp</li>
                                                    <li>Noida</li>
                                                    <li>Posted on Jun 29, 2022</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                            <div className="applyBtn">
                                                <a href="" className="applyBtn-dsc">Apply now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="closBtn" onClick={ModalOpen}>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="cm-modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h6>Job Description</h6>
                                    <p>Qwerty Code Pvt. Ltd. is an IT & software services provider company located at
                                        Gurugram, Haryana (India). We believe in delivering unparalleled services to the
                                        business around the globe. Qwerty Code has initiated to assist business
                                        enterprises to achieve efficiency and effectiveness by taking them into the
                                        e-world, being partners in e-revolution.</p>
                                    <ul>
                                        <li>Qwerty Code Pvt. Ltd. is an IT & software services provider company located
                                            at</li>
                                        <li>Gurugram, Haryana (India). We believe in delivering unparalleled services to
                                        </li>
                                        <li>the business around the globe. Qwerty Code has initiated to assist</li>
                                        <li>business enterprises to achieve efficiency and effectiveness by taking them
                                            into the e-world, being partners in e-revolution.</li>
                                    </ul>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ----Second modal section---------- */}
        <section className="cm-section-modal second-Modal">
            <div className="cm-model-box">
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
                                                <img src="images/careerImg-1.png" alt="applyImg" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-9">
                                            <div className="careerHead">
                                                <h6>UI UX <span> Designer</span></h6>
                                                <div>
                                                <ul>
                                                    <li>1-3 Exp</li>
                                                    <li>Noida</li>
                                                    <li>Posted on Jun 29, 2022</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="closBtn">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cm-modal-body">
                        <form>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="container">
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
                                            <div className="col-lg-6 pl-1 col-md-6">
                                                <div className="textareaBox">
                                                    <textarea name="textBox" className="form-control"
                                                        placeholder="Message"></textarea>
                                                    <span><img src="images/icon/email-box.svg"
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
                                                                <input id="file-sr" type="file" accept=".doc, .docx,.ppt, .pptx,.txt,.pdf" />
                                                            <a className="upImg">
                                                                <img src="images/icon/carbon_upload.svg" alt="upload CV" />
                                                            </a>
                                                            <label className="fileNamec" htmlFor="file-sr">
                                                                <a>Choose File</a>
                                                            </label>
                                                            <div>
                                                                <a href="" className="cvfile"><span>Designer.pdf</span>
                                                                    <small><img src="images/icon/closeBtn.svg"
                                                                            alt="close-button" /></small></a>
                                                            </div>
                                                        </div>
                                                        <div className="submitBtn">
                                                            <a href="">Submit</a>
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
        </section>
        <div className={`modal-overlay ${isOpen == true ? 'active' : ''}`}></div>
        </>
    )
}
export default Career;