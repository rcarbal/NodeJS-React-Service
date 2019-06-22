import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'element-react/next';

class Payments extends React.Component {

    onToken = (token) => {
        fetch('/api/v01/test', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
            alert(`We are in business, ${data.email}`);
            });
        });
    };

    render() {
        return <StripeCheckout
            name='SmoothLegal Checkout'
            description='Pay for your LLC formation.'
            amount={500}
            token={this.onToken}
            stripeKey='pk_test_LDIkUEQ3WzsMPUFHtVRRpq6s00jN1E6PVE'
        >
            <Button>Pay</Button>
        </StripeCheckout>
    }
}

export default Payments;