import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

import CheckoutContainer from './CheckoutContainer';

class PayContainer extends React.Component {
    render() {
        return (
            <div>
                <h3>Review</h3>
                <h3>Pay</h3>
                <StripeProvider apiKey='pk_test_LDIkUEQ3WzsMPUFHtVRRpq6s00jN1E6PVE'>
                    <CheckoutContainer />
                </StripeProvider>
            </div>
        )
    }
}

export default PayContainer;