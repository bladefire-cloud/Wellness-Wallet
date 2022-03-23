import React from 'react';
import './login.css';
import { Button, Form, Row, Col, CloseButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Example2 from './OffCanvaslogin';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <header className="login-header">
        <div id='form'>
        <Row>
          <Col>
        <Form>
        <Form.Group>
        <Form.Text classname="text-muted">
          Username
          </Form.Text>
          <Form.Control style={{width:400, position:'relative', left:150}}type="username" placeholder="Username" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
        <Form.Text classname="text-muted">
           Password
          </Form.Text>
          <Form.Control style={{width:400,position:'relative', left:150}}type="password" placeholder="Password" />
        </Form.Group>
      </Form>
  </Col>
</Row>
</div>
<div id='loginButton'>
<>
  <Link to="/userinfo"><Button variant="primary" type='submit' style= {{fontSize: 25, position:'relative',left:90}}active>
    Login
    </Button>{' '}</Link>
</>
</div>
<div id='createAccountButton'>
<label>
  Don't have an account?
  </label>
  <div id='offCanvas'>
   <Example2/> 
   </div>
   </div>

<div id='logo'>
        <img src="logo.png" width={800} height={700} alt=''/>
      </div>
      </header>
    </div>
  );
}

export default Login;
