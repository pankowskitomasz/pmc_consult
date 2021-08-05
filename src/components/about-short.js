import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-violet text-violet">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center p-0 d-flex minh-50vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 mt-5">
                    <Col xs={10} xl={6} className="mx-auto text-dark p-0 py-3 d-flex align-items-center">
                        <div className="w-100 text-uppercase text-center text-xl-end px-xl-5">
                            <h1 className="display-4 fw-bold text-violet">
                                Who we are? 
                            </h1>
                            <p className="initialism">
                                We are the global network of consultants, subject matter experts and 
                                service partners in the US, Europe, India and Africa. Sharing knowledge 
                                and expertise, accessing markets and building the right partnerships is 
                                essential for turning challenges into opportunities. We provide management 
                                consulting, business development, market research, and professional 
                                training. Our dedicated team helps you develop your business plan and 
                                strategy, understand your customers, define your brand, create powerful 
                                marketing solutions and improve your processes.
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={6} sm={7} xl={6} className="mx-auto text-dark p-0 d-flex align-items-center">
                        <img alt="home"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-data.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;