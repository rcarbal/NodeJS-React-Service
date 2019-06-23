import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';
import PaymentRequestForm from './PaymentRequestForm';
import Payments from './Payments';

class CheckoutContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
        };
        window.addEventListener('resize', () => {
          if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
            this.setState({elementFontSize: '14px'});
          } else if (
            window.innerWidth >= 450 &&
            this.state.elementFontSize !== '18px'
          ) {
            this.setState({elementFontSize: '18px'});
          }
        });
      }

      finalSubmit = () => {
        this.props.finalSubmit(this.state);
      }
    
      render() {
        const {elementFontSize} = this.state;
        return (
          <div className="Checkout">

            <h1>{this.props.tokenInfo}</h1>
            <Payments />
            {/*
            <StripeProvider apiKey='pk_test_LDIkUEQ3WzsMPUFHtVRRpq6s00jN1E6PVE'>
              <Elements>
                <CheckoutForm fontSize={elementFontSize} />
              </Elements>
            </StripeProvider>
            
            <Elements>
              <PaymentRequestForm />
            </Elements>
            */}
          </div>
        );
      }
};

export default CheckoutContainer;