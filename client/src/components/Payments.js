import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'element-react/next';

class Payments extends React.Component {
    
    componentDidMount(){
        console.log("PRINTING PROPS =========================")
        let formData = JSON.parse(this.props.formData);
        console.log(formData);
    }


    onToken = (token) => {
        const self = this;

        fetch('/api/v01/test', {
            method: 'POST',
            body: [
                JSON.stringify(token),
                this.props.formData
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

        return <StripeCheckout
            name='SmoothLegal Checkout'
            description='Pay for your LLC formation.'
            amount={optionsGrandTotal * 100}
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