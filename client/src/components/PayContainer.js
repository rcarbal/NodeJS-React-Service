import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { Button } from 'element-react/next';

import CheckoutContainer from './CheckoutContainer';

class PayContainer extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        this.props.finalSubmit(this.state);
    }

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render() {
        return (
            <div>
                <h3>Review</h3>
                <h3>Pay</h3>
                <StripeProvider apiKey='pk_test_LDIkUEQ3WzsMPUFHtVRRpq6s00jN1E6PVE'>
                    <CheckoutContainer />
                </StripeProvider>
                <Button onClick={this.onBack.bind(this)}>
                    Back
                </Button>
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default PayContainer;