import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'element-react/next';

class Payments extends React.Component {
    data = {
        ricardo: "===================================================================================================================="
    }
    componentDidMount(){
        console.log("PRINTING PROPS =========================")
        console.log(this.props.formData);
    }


    onToken = (token) => {
        const self = this;

        fetch('/api/v01/test', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
            self.setState({ token: data });
            console.log(this.state);
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
            extra={this.data}
                   >
            <Button>Pay</Button>

            <div>{this.props.finalSubmit}</div>
        </StripeCheckout>
    }
}

export default Payments;