import { Jumbotron, Container } from "react-bootstrap"

const MyWelcome = () => (
    <Jumbotron fluid>
        <Container>
            <h1 className="text-center pb-3">Welcome to our Bookstore</h1>
            <p className="text-center">Browse through the latest releases</p>
        </Container>
    </Jumbotron>
)

export default MyWelcome