import React, { useState } from 'react'
import {
  Card,
  Button,
  Modal,
} from 'react-bootstrap'
import TipForm from './TipForm'
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
            Welcome to the TechRally tip page!
          </Card.Text>

          <Card.Text>
            Creating content has always been a passion of mine and overwhelmed by the encouragement and support. 🙏
          </Card.Text>

          <Card.Text>
            Tip is not required, but much appreciated!
          </Card.Text>

          <Card.Text style={{ textAlign: 'center' }}>
            Currently accepting BTC only
          </Card.Text>

          <Card.Text style={{ textAlign: 'center' }}>
            onchain ⛓ and lightning ⚡️
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
            <TipForm />
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
