import React from 'react';

import { Button } from 'element-react/next';

import CheckoutContainer from './CheckoutContainer';
import Payments from './Payments';

class PayContainer extends React.Component {


    componentDidMount(){
        console.log("PRINTING PROPS OF PAYCONTAINER =========================")
        console.log(this.props)
    }


    handleSubmit(event) {
        event.preventDefault();

        //this.props.finalSubmit(this.state);
    }

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render() {
        return (
            <div>
                <h3>Review</h3>
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
                <div>================</div>
                <h3>Pay</h3>
                {/*
                <CheckoutContainer 
                    tokenInfo={this.state.tokenInfo}
                />
                */}
                <Payments formData={this.props.formData}/>
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