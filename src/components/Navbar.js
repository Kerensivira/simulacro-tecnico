import React, { Component } from 'react'
import { Container } from 'react-router-dom'
//import Button from 'react-bootstrap/Button';

export default class Navbar extends Component{
    render() {
         return(
             <div>
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
             
             </div>
         )
        }
   
}