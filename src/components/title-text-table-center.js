import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 text-violet text-shadow">
                                Services and pricing
                            </h2>
                            <p className="text-dark">
                                We are committed to the goals of our clients’ unique businesses. Our long-term 
                                clients appreciate that we listen, focus on the details, take ownership of 
                                projects, and deliver excellence. Take a look at some of our recent case 
                                studies and testimonials from our happy clients.
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-dark">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;