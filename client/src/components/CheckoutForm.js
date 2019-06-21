import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button } from 'element-react/next';


class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state= {complete: false};
        this.submit = this.submit.bind(this);
    }

    async submit(event) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });
    
        if (response.ok) {
            this.setState({ complete: true });
            console.log("Purchase Complete!");
            console.log(response);
        } else {
            console.log('There was a problem completing the puchase')
        }
    }
    
    render() {

        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <div className='checkout'>
              <CardElement />
              <Button onClick={this.submit}>Confirm order</Button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);