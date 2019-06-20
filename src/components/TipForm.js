import React from 'react'
import {
  Button,
  Form,
} from 'react-bootstrap'
import axios from 'axios'

const openNodeKey = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_OPEN_NODE_KEY : process.env.REACT_APP_OPEN_NODE_KEY_DEV

const openNodeCheckoutUrl = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_OPEN_NODE_CHECKOUT_URL : process.env.REACT_APP_OPEN_NODE_CHECKOUT_URL_DEV



function TipForm(props) {
  const handleSubmit = async (e, windowReference) => {
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
        headers: { Authorization: openNodeKey }
      })

      if (result) {
        const charge = result.data.data
        windowReference.location = `${openNodeCheckoutUrl}/${charge.id}`
      }
    } catch (e) {
      alert(e.message)
    }

    formAmount.value = ''
  }

  const setWindowReference = (e) => {
    const windowReference = window.open();
    handleSubmit(e, windowReference)
  }

  return (
    <Form onSubmit={e => setWindowReference(e)}>
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
