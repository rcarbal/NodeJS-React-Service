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
                <div className='container card form_box' style={{marginBottom: '2.5%'}}>
                    <div className='card' style={{padding: '2.5%', marginBottom: '2.5%'}}>
                        <h5 style={{textAlign: 'center'}}>Order for {this.props.stateOfIncorporation} {this.props.type}:</h5>
                        <h4 className='card-title'>{this.props.companyName}</h4>
                        <h5 style={{textAlign: 'center'}}   ><em>(Alternate name: {this.props.altName})</em></h5>
                        <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                    
                        <div>
                            <strong>Contact:</strong>
                            <div className='row'>
                                <div className='col-3'></div>
                                <div className='col-6' style={{textAlign: 'center'}}>
                                    {this.props.firstName} {this.props.lastName} | {this.props.phoneNum} | {this.props.email}
                                </div>
                                <div className='col-3'></div>
                            </div>
                            <div className='row'>
                                <div className='col-3'></div>
                                <div className='col-6' style={{textAlign: 'center'}}>
                                    {this.props.streetAddress} {this.props.city}, {this.props.usState} {this.props.zip} {this.props.country}
                                </div>
                                <div className='col-3'></div>
                            </div>
                        </div>
                        
                        <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                        <div>
                            <strong>Members: </strong>
                            {this.props.memberName}
                            {this.props.addlMemberNames}
                        </div>
                        <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>

                        <div>
                            <strong>Package:</strong>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Item</th>
                                        <th scope='col'></th>
                                        <th scope='col'>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>'{llcPackage}'</td>
                                        <td></td>
                                        <td>${llcPackagePrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>

                        <strong>Services: </strong>
                        <p>servicesList=</p>
                        <p>deliveryOption=</p>
                        <p>paymentTotal={paymentTotal}</p>
        <p>specialRequests={specialRequests}</p>

                        <div>
                            <strong>Document Copies:</strong>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
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

                        <div className="card border-light mx-auto" style={{width: '50%'}}>
                            <div className="card-header"><strong>Special Request</strong></div>
                            <div className="card-body">
                                <p className="card-text">{specialRequests}</p>
                            </div>
                        </div>
                    </div>
                    
                    <Payments formData={this.props.formData}/>
                </div>
                <Button onClick={this.onBack.bind(this)} style={{marginLeft: '2.5%', marginBottom: '2.5%'}}>
                    Back
                </Button>
            </div>
        )
    }
}

export default PayContainer;