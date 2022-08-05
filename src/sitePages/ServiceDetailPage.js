import React from "react";
import { Link,useParams } from "react-router-dom";
import ServiceSliderData from "../components/ServiceSliderData";

function ServiceDetailPage(){
    const { serDetPageId } = useParams();
    const { serviceId } = useParams();
    return(
        <>
        {/* --------Services Detail Page---------- */}
        
        {
            ServiceSliderData.filter(val => val.id == serviceId).map((val) =>{
                return(
                    <section className="Service-detail-page" key={val.id}>
                        {val.AllServices.filter(serValue => serValue.id == serDetPageId).map((serValue,Index) =>{
                        return(
                            <div className="container" key={Index}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="serDetailtitle">
                                            <p>{val.SortDsc}</p>
                                        </div>
                                        <div className="serHeading">
                                            <h6 dangerouslySetInnerHTML={{__html: serValue.Title}}></h6>
                                        </div>
                                        <div className="serDpara">
                                           <div dangerouslySetInnerHTML={{__html: serValue.content1}}></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="serDetailImg">
                                            <img src={serValue.ImgsrcDetail} alt="serDetailImg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="fullPara">
                                            <div dangerouslySetInnerHTML={{__html: serValue.content2}}></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="tri-1"></span>
                                <span className="tri-2"></span>
                                <span className="tri-3"></span>
                                <span className="tri-4"></span>
                                <span className="tri-5"></span>
                            </div>
                        )
                    })} </section>
                )
            })
        }
       
        </>
    )
}
export default ServiceDetailPage;