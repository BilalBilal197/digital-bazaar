import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ZG6IXX7kwnU5calpa0r7EcNv00RuiXwbfa';

const onToken = toke => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout 
      label = 'Pay Now'
      name='Transaction'
      billingAddress
      shippingAddress
      // image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;