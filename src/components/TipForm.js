import React from 'react'
import {
  Button,
  Form,
} from 'react-bootstrap'
import axios from 'axios'
import keys from '../config/keys'

function TipForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      formAmount,
    } = e.currentTarget

    const params = {
      amount: formAmount.value,
      description: 'Tip to Tech Rally',
      currency: 'USD'
    }

    try {
      const result = await axios.post(`/charges`, params, {
        headers: { Authorization: keys.openNodeKey }
      })

      if (result) {
        const charge = result.data.data
        window.open(`${keys.openNodeCheckoutUrl}/${charge.id}`)
      }
    } catch (e) {
      alert(e.message)
    }

    formAmount.value = ''
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="formAmount">
        <Form.Label>Tip Amount (in USD)</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Enter Tip amount (USD)"
          step="0.01"
        />
      <Form.Control.Feedback type="invalid">Please enter a tip amount!</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default TipForm
