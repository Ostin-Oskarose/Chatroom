import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function ChatroomNavbar() {

    return (
    <Navbar className="bg-body-tertiary" stickuy="top">
            <Container fluid>
                <Col>
                    <Navbar.Brand>Chatroom</Navbar.Brand>
                </Col>
                <Col className="d-flex gap-2 float-end" md="auto">
                    <Button>Login</Button>
                    <Button>Sign up</Button>
                </Col>  
            </Container>
    </Navbar >
    )
}

export default ChatroomNavbar;