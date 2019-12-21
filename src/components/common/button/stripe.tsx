import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }: any) => {
  const priceForStripe = price * 100
  const publishableKey = ''

  const onToken = (token: any) => {
    console.log(token)
    alert('Payment Succesful!')
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
