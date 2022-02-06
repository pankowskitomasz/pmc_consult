import React, { Component } from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Card from "../../node_modules/react-bootstrap/Card";

class LoginError extends Component {
    hndBack(){
        this.props.backNav("form");
    }
    render() {
        return (
            <Container fluid className={"login-form align-items-center p-0 py-5 bg-white d-flex minh-footer-adj " + this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={6} className="mx-auto p-0 d-flex align-items-center">
                        <Card className="mx-auto border border-violet rounded bg-white shadow text-violet">
                            <Card.Header className="text-violet fw-bold text-start border-violet">
                                Login error!
                            </Card.Header>
                            <Card.Body className="text-center text-violet p-5">
                                <p className="lead">Incorrect login or password!</p>
                                <Button variant={"outline-dark border-violet text-violet"} onClick={this.hndBack.bind(this)}>
                                    OK
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginError;