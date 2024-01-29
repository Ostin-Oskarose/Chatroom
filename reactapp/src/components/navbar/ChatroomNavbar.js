import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ChatroomNavbar() {

    return (
    <Navbar className="bg-body-tertiary" stickuy="top">
            <Container fluid>
                <Navbar.Brand>Chatroom</Navbar.Brand>
                <Button>Login</Button>
                <Button>Sign up</Button>
            </Container>
    </Navbar >
    )
}

export default ChatroomNavbar;