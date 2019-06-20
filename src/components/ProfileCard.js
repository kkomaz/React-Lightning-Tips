import React, { useState } from 'react'
import {
  Card,
  Button,
  Modal,
} from 'react-bootstrap'
import TipForm from './TipForm'
import techrally from '../assets/techrally.png'
import Icon from './Icon'

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
            Creating content has always been a passion of mine and I am overwhelmed by the support to keep the content coming.
          </Card.Text>

          <Card.Text>
            Tip is not required, but much appreciated!
          </Card.Text>

          <Card.Text style={{ textAlign: 'center' }}>
            Thank you! 🙏
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
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
            <Icon
              icon="IconYoutube"
              fill="white"
              onClick={() => window.open('https://www.youtube.com/c/techrally')}
              style={{
                svg: {
                  fill: 'white',
                },
                cursor: 'pointer'
              }}
            />
            <Icon
              icon="IconTwitter"
              color="white"
              onClick={() => window.open('https://www.twitter.com/thetechrally')}
              style={{
                svg: {
                  fill: 'white',
                },
                cursor: 'pointer'
              }}
            />
            <Icon
              icon="IconIG"
              color="white"
              onClick={() => window.open('https://www.instagram.com/thetechrally')}
              style={{
                svg: {
                  fill: 'white',
                },
                cursor: 'pointer'
              }}
            />
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
