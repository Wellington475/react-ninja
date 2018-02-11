import React from 'react'
import {
  Grid, Row, Col,
  Navbar, NavItem, Nav
} from 'react-bootstrap/lib'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='logo' href='/'>React Ninja</a>
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
