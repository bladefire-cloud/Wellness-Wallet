import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Create Account</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" />
    <Form.Text className="text-muted">
      Please enter a new username.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
      Please enter a new password.
    </Form.Text>
  </Form.Group>
  <Link to="/home"><Button variant="primary" type="submit">
    Submit
  </Button></Link>
</Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function Example2() {
    return (
      <>
        {['Create Account'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={'end'} name={placement} />
        ))}
      </>
    );
  }
  
  render(<Example2 />);

  export default Example2;