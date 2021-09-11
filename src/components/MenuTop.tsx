import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import Info from './Info';
import { Depht3DProp } from '../lib/Interfaces';

export default class MenuTop extends Component<any, any> {
  constructor(props:any) {
    super(props)
    this.state = {
      showInfo: false,
    }
  }
  render() {
    const { onSelectImage } = this.props;
    let handleInfo = () => {
      this.setState({
        showInfo: true
      });
    }

    let InfoCloseHandle = () => {
      this.setState({
        showInfo: false
      });
    }
        
    const Images = (
      <Nav className="mr-auto">
        <NavDropdown title="Select a Image" id="puzzle">
          {this.props.content.map((c: Depht3DProp) =>
          (
              <NavDropdown.Item as={Link} id={c.id} key={c.id} to={"./?img=" + c.url} onClick={onSelectImage}>
                {c.name}
              </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    );

    return <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {Images}
      <Form inline>
            <Button id="info" variant="outline-secondary" onClick={handleInfo}><span className="navbar-info-icon"></span> Info</Button>
          </Form>
      </Navbar.Collapse>
      <Info show={this.state.showInfo} content={this.props.content} InfoClose={InfoCloseHandle}/>
    </Navbar>
    ;
  }

}