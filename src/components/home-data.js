import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class HomeData extends Component{
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
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={6} sm={7} md={6} className="mx-auto text-dark p-0">
                        <img alt="home"
                            className="img-fluid w-75 mx-auto"
                            src="img/home/home-data.png"/>
                    </Col>
                    <Col xs={10} md={6} className="mx-auto text-dark p-0 py-3 d-flex align-items-center">
                        <div className="w-100 text-uppercase text-center text-md-end">
                            <h1 className="display-4 fw-bold text-violet">
                                PMC&nbsp;Consult 
                            </h1>
                            <h1 className="display-6 text-dark ">
                                Business&nbsp;consultants
                            </h1>
                            <p className="initialism">
                                We care about empowering business owners, sustainable development 
                                and making a difference. Sometimes we are a coach and trainer 
                                helping a business get better and sometimes we are a matchmaker 
                                finding the right partner, investor or distributor. We help companies 
                                grow, improve and master change.
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeData;