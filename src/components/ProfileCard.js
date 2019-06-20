import React, { useState } from 'react'
import {
  Card,
  Button,
  Modal,
} from 'react-bootstrap'
import techrally from '../assets/techrally.png'

function ProfileCard() {
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <Card
        style={{
          background: '#52616a',
          width: '25rem',
          margin: '5em 0',
        }}>
        <Card.Img variant="top" src={techrally} />
        <Card.Body style={{ color: 'white' }}>
          <Card.Title>Tech Rally</Card.Title>
          <Card.Text>
            Welcome to the TechRally Tip page!
          </Card.Text>

          <Card.Text>
            Thank you for stopping by and I hope you've been enjoying the coding videos!
          </Card.Text>

          <Card.Text>
            Your tip is much appreciated!
          </Card.Text>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="success" onClick={handleOpen}>
              Tip Jar
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tip Jar</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            Tip Form
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default ProfileCard
