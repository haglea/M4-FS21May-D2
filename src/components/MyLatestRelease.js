import { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

class MyLatestRelease extends Component {


    render () {
        

        return (
            <Container>
                <Row>
                    

            { fantasy.slice(0, 4).map(book => (
                <Col md={3}>
                        <Card>                                                
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                        </Card.Body>
                        </Card>
                        </Col>
            )                 
            )
            }
            
            </Row>
            </Container>
        )

}
}

export default MyLatestRelease