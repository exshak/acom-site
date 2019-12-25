import axios from 'axios'
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }: any) => {
  const priceForStripe = price * 100
  const publishableKey = ''

  const onToken = (token: any) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment')
      })
      .catch(error => {
        console.log('Payment Error: ', error)
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name=''
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
