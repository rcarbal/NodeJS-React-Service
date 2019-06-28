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
                <h3>Review</h3>
                <div className='container card'>
                <div>================</div>
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
                            <p>llcPackage = {llcPackage} - {llcPackagePrice}</p>
                            <p>certifiedCopies={numCertifiedCopies} X {certifiedCopiesPrice}</p>
                            <p>certifiedCopiesWApostille={numCertifiedCopiesWApostille} X {certifiedCopiesWApostillePrice}</p>
                            <p>goodStandingCopies={numGoodStandingCopies} X {goodStandingCopiesPrice}</p>
                            <p>goodStandingCopiesWApostille={numGoodStandingCopiesWApostille} X {goodStandingCopiesWApostillePrice}</p>
                            <p>servicesList=</p>
                            <p>deliveryOption=</p>
                            <p>paymentTotal={paymentTotal}</p>
                            <p>specialRequests={specialRequests}</p>
                    </div>
                <div>================</div>
                </div>
                <h3>Pay</h3>
                <div className='container card'>
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