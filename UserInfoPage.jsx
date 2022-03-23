
import React from 'react';
import { Button, Form, Row, Col, CloseButton, Spinner, DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserInfoPage2.css';
import { Link } from 'react-router-dom';


const UserInfoPage = () => {
    return (

        <div className="userinfo">
            <nav className='HomePage-navBar'>
            <div style={{position:'absolute', top:5, left: '43%'}}>
                        Wellness Wallet
                    </div>
                    <div>
                        <Link to="/userinfo" style={{position: 'absolute', left:300}}><Button
                variant="outline-primary">User Info</Button></Link>
                        <Link to="/goals" style={{position: 'absolute', right:300}}><Button variant="outline-primary">Goals</Button></Link>
                </div>
                    <div className='icons'>
                    <DropdownButton id="dropdown-basic-button" title="Menu">
                    <Dropdown.Item>User Info</Dropdown.Item>
                    <Dropdown.Item>Goals</Dropdown.Item>
                    <Dropdown.Item>logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
            </nav>
        <header className="userinfo-header">
        <Form>
          <div id='form-row-1'>
        <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridHeight">
        <Form.Label>Height (Feet)</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>
          4'0"
          </option>
          <option>
          4'1"
          </option>
          <option>
          4'2"
          </option>
          <option>
          4'3"
          </option>
          <option>
          4'4"
          </option>
          <option>
          4'5"
          </option>
          <option>
          4'6"
          </option>
          <option>
          4'7"
          </option>
          <option>
          4'8"
          </option>
          <option>
          4'9"
          </option>
          <option>
          4'10"
          </option>
          <option>
          4'11"
          </option>
          <option>
          5'0"
          </option>
          <option>
          5'1"
          </option>
          <option>
          5'2"
          </option>
          <option>
          5'3"
          </option>
          <option>
          5'4"
          </option>
          <option>
          5'5"
          </option>
          <option>
          5'6"
          </option>
          <option>
          5'7"
          </option>
          <option>
          5'8"
          </option>
          <option>
          5'9"
          </option>
          <option>
          5'10"
          </option>
          <option>
          5'11"
          </option>
          <option>
          6'0"
          </option>
          <option>
          6'1"
          </option>
          <option>
          6'2"
          </option>
          <option>
          6'3"
          </option>
          <option>
          6'4"
          </option>
          <option>
          6'5"
          </option>
          <option>
          6'6"
          </option>
          <option>
          6'7"
          </option>
          <option>
          6'8"
          </option>
          <option>
          6'9"
          </option>
          <option>
          6'10"
          </option>
          <option>
          6'11"
          </option>
          <option>
          7'0"
          </option>
          <option>
          7'1"
          </option>
          <option>
          7'2"
          </option>
          <option>
          7'3"
          </option>
          <option>
          7'4"
          </option>
        </Form.Select>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridWeight">
        <Form.Label>Weight (Pounds)</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>
            80
          </option>
          <option>
            90
          </option>
          <option>
            100
          </option>
          <option>
            110
          </option>
          <option>
            120
          </option>
          <option>
            130
          </option>
          <option>
            140
          </option>
          <option>
            150
          </option>
          <option>
            160
          </option>
          <option>
            160
          </option>
          <option>
            170
          </option>
          <option>
            180
          </option>
          <option>
            190
          </option>
          <option>
            200
          </option>
          <option>
            210
          </option>
          <option>
            220
          </option>
          <option>
            230
          </option>
          <option>
            240
          </option>
          <option>
            250
          </option>
          <option>
            260
          </option>
          <option>
            270
          </option>
          <option>
            280
          </option>
          <option>
            290
          </option>
          <option>
            300
          </option>
          <option>
            310
          </option>
          <option>
            320
          </option>
          <option>
            330
          </option>
          <option>
            340
          </option>
          <option>
            350
          </option>
          <option>
            360
          </option>
          <option>
            370
          </option>
          <option>
            380
          </option>
          <option>
            390
          </option>
          <option>
            400
          </option>
        </Form.Select>
      </Form.Group>
    </Row>
    </div>
  
    <div id='form-row-2'>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridHeight">
        <Form.Label>Age</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>
            12
          </option>
          <option>
            13
          </option>
          <option>
            14
          </option>
          <option>
            15
          </option>
          <option>
            16
          </option>
          <option>
            17
          </option>
          <option>
            18
          </option>
          <option>
            19
          </option>
          <option>
            20
          </option>
          <option>
            21
          </option>
          <option>
            22
          </option>
          <option>
            23
          </option>
          <option>
            24
          </option>
          <option>
            25
          </option>
          <option>
            26
          </option>
          <option>
            27
          </option>
          <option>
            28
          </option>
          <option>
            29
          </option>
          <option>
            30
          </option>
          <option>
            31
          </option>
          <option>
            32
          </option>
          <option>
            33
          </option>
          <option>
            34
          </option>
          <option>
            35
          </option>
          <option>
            36
          </option>
          <option>
            37
          </option>
          <option>
            38
          </option>
          <option>
            39
          </option>
          <option>
            40
          </option>
          <option>
            41
          </option>
          <option>
            42
          </option>
          <option>
            43
          </option>
          <option>
            44
          </option>
          <option>
            45
          </option>
          <option>
            46
          </option>
          <option>
            47
          </option>
          <option>
            48
          </option>
          <option>
            49
          </option>
          <option>
            50
          </option>
          <option>
            51
          </option>
          <option>
            52
          </option>
          <option>
            53
          </option>
          <option>
            54
          </option>
          <option>
            55
          </option>
          <option>
            56
          </option>
          <option>
            57
          </option>
          <option>
            58
          </option>
          <option>
            59
          </option>
          <option>
            60
          </option>
          <option>
            61
          </option>
          <option>
            62
          </option>
          <option>
            63
          </option>
          <option>
            64
          </option>
          <option>
            65
          </option>
          <option>
            66
          </option>
          <option>
            67
          </option>
          <option>
            68
          </option>
          <option>
            69
          </option>
          <option>
            70
          </option>
          <option>
            71
          </option>
          <option>
            72
          </option>
          <option>
            73
          </option>
          <option>
            74
          </option>
          <option>
            75
          </option>
          <option>
            76
          </option>
          <option>
            77
          </option>
          <option>
            78
          </option>
          <option>
            79
          </option>
          <option>
            80
          </option>
        </Form.Select>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridWeight">
        <Form.Label>Gender</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>
            Male
          </option>
          <option>
            Female
          </option>
        </Form.Select>
      </Form.Group>
    </Row>
    </div>
  
    <div id='form-row-3'>
    <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Fitness Goal</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>
            Weight Loss
          </option>
          <option>
            Overall Fitness
          </option>
          <option>
            Mass Gain
          </option>
        </Form.Select>
      </Form.Group>
      </div>
  
      <div id='form-row-4'>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridBench">
        <Form.Label>Max Bench Press</Form.Label>
        <Form.Control type="bench" placeholder="Enter Bench" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridSquat">
        <Form.Label>Max Squat</Form.Label>
        <Form.Control type="squat" placeholder="Enter Squat" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridDeadlift">
        <Form.Label>Max Deadlift</Form.Label>
        <Form.Control type="deadlift" placeholder="Enter Deadlift" />
      </Form.Group>
    </Row>
    </div>
  
  <div id='remember-me'>
    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Remember my information." />
    </Form.Group>
    </div>
  
    <div id='submit-button'>
    <Link to="/home"><Button variant="primary" style= {{fontSize: 22}} type="submit">
      Let's Get Fit!
    </Button></Link>
    </div>
  </Form>
  
  <div id='logo'>
    <img src="blacklogo.png" width={400} height={322} style={{position: 'absolute', left:850}} alt=''/>
  </div>
  
  <div id='quote-line-1'>
    <label>
      "Do something today
    </label> 
  </div>
  <div id='quote-line-2'>
    <label>
      that your future self
    </label> 
  </div>
  <div id='quote-line-3'>
    <label>
     will thank you for."
    </label> 
  </div>
  <div id='loading-icon-1'>
  <>
    <Spinner animation="grow" variant="info" />
  </>
  </div>
  <div id='loading-icon-2'>
  <>
    <Spinner animation="grow" variant="light" />
    </>
  </div>
  <div id='loading-icon-3'>
  <>
    <Spinner animation="grow" variant="info" />
  </>
  </div>
        </header>
      </div>
       
    );
};

export default UserInfoPage;