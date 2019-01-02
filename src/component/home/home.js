import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Button, Image } from 'semantic-ui-react'
import NavBar from '../nav/nav'
import CardLogin from '../card/card_login'
import ShowScore from '../showScore/show_score'
import Footer from '../footer/footer'
import './home.css'
import '../../App.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let imgUrl = 'https://campus.campus-star.com/app/uploads/2017/03/edu144.jpg';

        return (
            <div className="App">
                {/* <NavBar /> */}
                <div className="App-header">
                    <Image src='https://campus.campus-star.com/app/uploads/2017/03/edu144.jpg' fluid id="bg"/>
                    <div className="in-bg">
                        <h1 id="title">ระบบตรวจสอบคะแนนการสอนอมรม 128 ข้อ</h1>
                        <a href="#card-login">
                            <Button inverted color='grey' size="huge">
                                <span id="title">ตรวจสอบคะแนน</span>
                            </Button>
                        </a>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md="12" sm="12" xs="12">

                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" sm="12" xs="12">
                            <div id="card-login">
                                {/* <CardLogin /> */}
                                <ShowScore />
                            </div>
                        </Col>
                    </Row>
                    <div className="footer">
                        <Footer />
                    </div>
                </Container>
            </div>

        );
    }
}
export default Home