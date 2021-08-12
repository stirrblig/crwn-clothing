import React from 'react'
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JNaEPJeTv1q3EbpN6PGaKNDbdT7eUmwtiCVnepZMcRT3bQkhpLhxjlQd1aJwxidxNML5bE75Ho3HAzr6cnKAI1w004XiP3XjZ';

    const onToken = token => {
        console.log(token);
        alert('Payment OK');
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='CROWN clothing'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount="{priceForStripe}"
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
             />
    )
}

export default StripeCheckoutButton;