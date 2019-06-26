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
            Tips are not required, but much appreciated!
          </Card.Text>

          <Card.Text style={{ textAlign: 'center' }}>
            <span role="img" aria-label="Lightning">
              Thank you! 🙏
            </span>
          </Card.Text>

          <Card.Text style={{ textAlign: 'center' }}>
            Accepting BTC via <span role="img" aria-label="Lightning">onchain ⛓ and lightning ⚡️</span> or ☕️
          </Card.Text>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <Button variant="success" onClick={handleOpen}>
              Tip Jar
            </Button>
          </div>


          <style dangerouslySetInnerHTML={{__html: `
              .bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet">
            `}}
          />

        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/heNcCO458" rel="noopener noreferrer">
              <img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee" />
                <span style={{ marginLeft: '5px' }}>Buy me a coffee</span>
            </a>

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
          <Modal.Title style={{ fontSize: '16px' }}>
            Tip Jar
          </Modal.Title>
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
