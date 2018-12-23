import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import NavBar from '../nav/nav'
import CardLogin from '../card/card_login'
import ShowScore from '../showScore/show_score'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <Row>
                        <Col md="12" sm="12" xs="12">
                            <div id="card-login">
                                {/* <CardLogin /> */}
                                <ShowScore />
                            </div>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}
export default Home