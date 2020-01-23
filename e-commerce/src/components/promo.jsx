import React from 'react';
import background from '../images/background.jpg'
import background2 from '../images/background2.jpg'
import background3 from '../images/background3.jpg'
import backgroundrec2 from '../images/background-rec.jpg'
import backgroundrec from '../images/background-rec2.jpg'
import { Link, withRouter } from 'react-router-dom';

const Promo = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div id="carouselExampleIndicators" className="carousel slide home-info" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner text-center">
                                <div className="carousel-item active">
                                <img className="d-block w-100 image-promo" src={background} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 image-promo" src={background2} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 image-promo" src={background3} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <img src={backgroundrec2} alt="" width="95%"/>
                        <img src={backgroundrec} className="mt-3" alt="" width="95%"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default withRouter(Promo)
