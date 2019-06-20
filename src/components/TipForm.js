import React from 'react'
import {
  Button,
  Form,
} from 'react-bootstrap'

function TipForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      formAmount,
    } = e.currentTarget

    formAmount.value = ''
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="formAmount">
        <Form.Label>Contribution Amount (in USD)</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Enter Contribution"
          step="0.01"
        />
      <Form.Control.Feedback type="invalid">Please enter a description</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default TipForm
