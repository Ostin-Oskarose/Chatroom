import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function ChatroomNavbar() {

    return (
    <Navbar className = "bg-body-tertiary" >
        <Container fluid>
            <Navbar.Brand>Chatroom</Navbar.Brand>
        </Container>
    </Navbar >
    )
}

export default ChatroomNavbar;