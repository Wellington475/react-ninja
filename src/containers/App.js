import React from 'react'
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap/lib'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>React Ninja</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='/'>
              Home
            </NavItem>
            <NavItem eventKey={2} href='/about'>
              Sobre
            </NavItem>
          </Nav>
        </Navbar>
        <Grid>
          <Row className='show-grid'>
            <Col xs={12} md={8}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
