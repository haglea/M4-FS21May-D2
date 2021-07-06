import { Container, Row, Col } from "react-bootstrap"

const MyFooter = () => (
    <Container>
        <Row>
            <Col>
                <strong>Latest Releases</strong>
            </Col>
            <Col>
                <strong>About</strong>
            </Col>
            <Col>
                <strong>Account</strong>
            </Col>
            <Col>
                <strong>Contact Us</strong>
            </Col>
        </Row>
        <Row>
            <Col>Fantasy</Col>
            <Col>Our Story</Col>
            <Col>Sign Up</Col>
            <Col>FAQ</Col>
        </Row>
        <Row>
        <Col>History</Col>            
            <Col>Our Blog</Col>
            <Col>Sign In</Col>
            <Col>Help Center</Col>
        </Row>
        <Row>
        <Col>Horror</Col>
        <Col>Facebook</Col>
            <Col>Payment methods</Col>
            <Col>Contacts</Col>
        </Row>
        <Row>
        <Col>Romance</Col>
        <Col>Instagram</Col>
        <Col>Delivery methods</Col>
        <Col>Recommendations</Col>
        </Row>
    </Container>
)

export default MyFooter