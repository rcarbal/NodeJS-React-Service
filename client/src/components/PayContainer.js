import React from 'react';
import { Button } from 'element-react/next';
import Payments from './Payments';

class PayContainer extends React.Component {
    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render() {

        let formData = JSON.parse(this.props.formData);
        console.log(`LLC CERTIFIED COPIEEEEES: ${formData.certifiedCopies.numCopies}`);
        console.log(`GRAND TOTALLLL!!!! ===== ${formData.paymentTotal}`)

        let llcPackage = formData.llcPackage.value,
            llcPackagePrice = formData.llcPackage.price,

            numCertifiedCopies = formData.certifiedCopies.numCopies,
            certifiedCopiesPrice = formData.certifiedCopies.price,

            numCertifiedCopiesWApostille = formData.certifiedCopiesWApostille.numCopies,
            certifiedCopiesWApostillePrice = formData.certifiedCopiesWApostille.price,

            numGoodStandingCopies= formData.goodStandingCopies.numCopies,
            goodStandingCopiesPrice = formData.goodStandingCopies.price,

            numGoodStandingCopiesWApostille = formData.goodStandingCopiesWApostille.numCopies,
            goodStandingCopiesWApostillePrice = formData.goodStandingCopiesWApostille.price,

            //servicesList= formData.servicesList,
            //deliveryOption={this.state.form.deliveryOption}
            specialRequests = formData.requests,
            paymentTotal = formData.paymentTotal;

        return (
            <div>
                <h5 style={{marginLeft: '10%', marginTop: '2.5%'}}>Review</h5>
                <div className='container card form_box'>
                    <h5>Order for: {this.props.stateOfIncorporation} {this.props.type}</h5>
                    <h4>{this.props.companyName}</h4>
                    <h6>(Alternate name: {this.props.altName})</h6>
                    <p>
                        <strong>Contact: </strong>
                        {this.props.firstName}{this.props.lastName} | {this.props.phoneNum} | {this.props.email} | 
                        {this.props.streetAddress} {this.props.city}, {this.props.usState} {this.props.zip} {this.props.country}
                    </p>
                    <p>
                        <strong>Members: </strong>
                        {this.props.memberName}
                        {this.props.addlMemberNames}
                    </p>
                    <div>
                        <strong>Services: </strong>
                            <p>servicesList=</p>
                            <p>deliveryOption=</p>
                            <p>paymentTotal={paymentTotal}</p>
                            <p>specialRequests={specialRequests}</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>'{llcPackage}' Package</td>
                                        <td></td>
                                        <td>${llcPackagePrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Certified Copies</td>
                                        <td>{numCertifiedCopies}</td>
                                        <td>${certifiedCopiesPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Certified Copies w/ Apostille</td>
                                        <td>{numCertifiedCopiesWApostille}</td>
                                        <td>${certifiedCopiesWApostillePrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Certificates of Good Standing</td>
                                        <td>{numGoodStandingCopies}</td>
                                        <td>${goodStandingCopiesPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Certificates of Good Standing w/ Apostille</td>
                                        <td>{numGoodStandingCopiesWApostille}</td>
                                        <td>${goodStandingCopiesWApostillePrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <h3>Pay</h3>
                <div className='container card form_box'>
                <Payments formData={this.props.formData}/>
                </div>
                <Button onClick={this.onBack.bind(this)}>
                    Back
                </Button>
            </div>
        )
    }
}

export default PayContainer;