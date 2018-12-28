import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Icon } from 'semantic-ui-react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer-bg">
                <Container>
                    <Row>
                        <Col className="copyright" xs="12" sm="6">
                            {/* <p className="text-copyrigth">©PichitreeChakorn 7002 2018 v1.0.0</p> */}
                            <a href="https://www.facebook.com/wearesuddan7002/" target="_blank">
                                <Icon name="facebook" size='big' className="text-copyrigth" />
                            </a>
                        </Col>
                        {/* <Col className="copyright" xs="12" sm="4">
                            <p className="text-copyrigth">©PichitreeChakorn 7002 2018 v1.0.0</p>
                        </Col> */}

                        <Col className="copyright" xs="12" sm="6">
                            <p className="text-copyrigth">©PichitreeChakorn 7002 2018 v1.0.0</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer