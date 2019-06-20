import React from 'react'
import {
  Card,
  Button,
} from 'react-bootstrap'
import techrally from '../assets/techrally.png'

function ProfileCard() {
  return (
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
          <Button variant="success">
            Tip Jar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProfileCard
