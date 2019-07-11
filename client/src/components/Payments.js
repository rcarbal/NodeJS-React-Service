import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'element-react/next';

class Payments extends React.Component {

    propsData = JSON.parse(this.props.formData);

    onToken = (token) => {
        const self = this;

        let URL;
        if(process.env.NODE_ENV === 'production'){
            URL = '/api/v1/';
        }else{
            URL = '/api/v01/test';
        }

        fetch(URL, {
            method: 'POST',
            body: [
                JSON.stringify(token),
                JSON.stringify(this.propsData)
            ]
        }).then(response => {
            response.json().then(data => {
                self.setState({ token: data });
                console.log(this.state);
                alert(`We are in business, ${data.email}`);
            });
        });
    };

    render() {

        let formData = JSON.parse(this.props.formData);
        
        let llcPackagePrice;
        if (formData.llcPackage.price !== undefined) {
            llcPackagePrice = formData.llcPackage.price;
        } else {
            llcPackagePrice = 0;
        }

        let certifiedCopiesTotal;
        if (formData.certifiedCopies.numCopies !== undefined) {
            certifiedCopiesTotal = formData.certifiedCopies.numCopies * formData.certifiedCopies.price;
        } else {
            certifiedCopiesTotal = 0; 
        }

        let certifiedCopiesWApostilleTotal;
        if (formData.certifiedCopiesWApostille.numCopies !== undefined) {
            certifiedCopiesWApostilleTotal = formData.certifiedCopiesWApostille.numCopies * formData.certifiedCopiesWApostille.price;
        } else {
            certifiedCopiesWApostilleTotal = 0;
        }
        
        let goodStandingCopiesTotal;
        if (formData.goodStandingCopies.numCopies !== undefined) {
            goodStandingCopiesTotal = formData.goodStandingCopies.numCopies * formData.goodStandingCopies.price;
        } else {
            goodStandingCopiesTotal = 0;
        }
        
        let goodStandingCopiesWApostilleTotal;
        if (formData.goodStandingCopiesWApostille.numCopies !== undefined) {
            goodStandingCopiesWApostilleTotal = formData.goodStandingCopiesWApostille.numCopies * formData.goodStandingCopiesWApostille.price;
        } else {
            goodStandingCopiesWApostilleTotal = 0;   
        }

        let servicesDocsSum = certifiedCopiesTotal + certifiedCopiesWApostilleTotal + goodStandingCopiesTotal + goodStandingCopiesWApostilleTotal;

        let deliveryOption = formData.deliveryOption;
        let deliveryOptionPriceSum = deliveryOption.reduce((option, {price}) => option + price, 0)
        let servicesList = formData.servicesList;
        let servicesPriceSum = servicesList.reduce((service, {price}) =>  service + price, 0)

        let optionsGrandTotal = llcPackagePrice + servicesDocsSum + deliveryOptionPriceSum + servicesPriceSum;

        console.log(`
            LLC Package price = ${llcPackagePrice}
            Certified Copies price = ${formData.certifiedCopies.numCopies} * ${formData.certifiedCopies.price} = ${certifiedCopiesTotal}
            Certified Copies w/Apostille price = ${formData.certifiedCopiesWApostille.numCopies} * ${formData.certifiedCopiesWApostille.price} = ${certifiedCopiesWApostilleTotal}
            Certs of Good Standing price = ${formData.goodStandingCopies.numCopies} * ${formData.goodStandingCopies.price} = ${goodStandingCopiesTotal}
            Certs of Good Standing w/Apostille price = ${formData.goodStandingCopiesWApostille.numCopies} * ${formData.goodStandingCopiesWApostille.price} = ${goodStandingCopiesWApostilleTotal}
            Service Documents Total price = ${servicesDocsSum}
            Delivery Price = ${deliveryOptionPriceSum}
            Services Sum = ${servicesPriceSum}
            GRAND TOTAL FOR OPTIONS AND SERVICES = ${optionsGrandTotal}
        `)
        this.propsData.paymentTotal = optionsGrandTotal;

        console.log("==========================================================================")
        console.log("Printing PROPS");
        console.log(this.propsData);

        this.propsData.paymentTotal = optionsGrandTotal;
        console.log('PROPS DATA');
        console.log('=++++++++=====');
        console.log(this.propsData);
        console.log('=++++++++=====');

        return(
            <StripeCheckout
                name='SmoothLegal Checkout'
                description='Pay for your LLC formation.'
                stripeKey='pk_test_LDIkUEQ3WzsMPUFHtVRRpq6s00jN1E6PVE'
                amount={this.propsData.paymentTotal * 100}
                email={this.propsData.email} 
                token={this.onToken}
                extra={this.data}
            >            
                <Button style={{marginBottom: '2.5%'}}>Submit & Pay</Button>
                <div>{this.props.finalSubmit}</div>
            </StripeCheckout>
        )
    }
}

export default Payments;