import React from 'react';
import { Button } from 'element-react/next';
import Payments from './Payments';
import Footer from './Footer';

class PayContainer extends React.Component {

    state = {
        tokenInfo: {
            tokenInfo: {
                card: {
                    cvc_check: ''
                }
            }
        }
    }

    saveToken = (tokenInfo) => {
        this.setState({tokenInfo: tokenInfo });
    }

    reviewOrder() {
        this.props.onNextStep(this.state);
    }
    
    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveAndNext(this.state);
        console.log('+++++++++++ THIS.STATE CALLED ON SUBMIT +++++++++++')
        console.log(this.state)
        console.log('+++++++ THIS.STATE.TOKENINFO.TOKENINFO.CARD.CVC_CHECK')
        console.log(this.state.tokenInfo.tokenInfo.card.cvc_check)
    }

    render() {

        let formData = JSON.parse(this.props.formData);
        let payStatus = this.state.tokenInfo.tokenInfo.card.cvc_check;
        console.log('+++++++ THIS.STATE.TOKENINFO.TOKENINFO.CARD.CVC_CHECK')
        console.log(payStatus);
        
        console.log(`GRAND TOTALLLL!!!! ===== ${formData.paymentTotal}`);

        let renderedServiceList = formData.servicesList.map((service, index) => {
            return(
                <tbody>
                    <tr>
                        <td>{service.value}</td>
                        <td>${service.price}</td>                    
                    </tr>
                </tbody>
            ) 
        });

        let memberList = formData.memberName.map((member, index) => {
            return(
                <li className='list-group-item'>{member.value}</li>
            )
        })


        let llcPackage = formData.llcPackage.value;
        let llcPackagePrice;
        if (llcPackage !== undefined) {
            llcPackagePrice = formData.llcPackage.price;
        } else {
            llcPackagePrice = 0
        }

        let numCertifiedCopies = formData.certifiedCopies.numCopies,
            certifiedCopiesPrice = formData.certifiedCopies.price,
            certifiedCopiesTotal;
        if (numCertifiedCopies !== undefined) {
            certifiedCopiesTotal = numCertifiedCopies * certifiedCopiesPrice; 
        } else {
            certifiedCopiesTotal = 0;
        }

        let numCertifiedCopiesWApostille = formData.certifiedCopiesWApostille.numCopies,
            certifiedCopiesWApostillePrice = formData.certifiedCopiesWApostille.price,
            certifiedCopiesWApostilleTotal;
        if (numCertifiedCopiesWApostille !== undefined) {
            certifiedCopiesWApostilleTotal = numCertifiedCopiesWApostille * certifiedCopiesWApostillePrice;
        } else {
            certifiedCopiesWApostilleTotal = 0;
        }

        let numGoodStandingCopies= formData.goodStandingCopies.numCopies,
            goodStandingCopiesPrice = formData.goodStandingCopies.price,
            goodStandingCopiesTotal;
        if (numGoodStandingCopies !== undefined) {
            goodStandingCopiesTotal = numGoodStandingCopies * goodStandingCopiesPrice;
        } else {
            goodStandingCopiesTotal = 0;
        }

        let numGoodStandingCopiesWApostille = formData.goodStandingCopiesWApostille.numCopies,
            goodStandingCopiesWApostillePrice = formData.goodStandingCopiesWApostille.price,
            goodStandingCopiesWApostilleTotal;
        if (numGoodStandingCopiesWApostille !== undefined) {
            goodStandingCopiesWApostilleTotal = numGoodStandingCopiesWApostille * goodStandingCopiesWApostillePrice;
        } else {
            goodStandingCopiesWApostilleTotal = 0;
        }

        let deliveryOption = formData.deliveryOption;
        let deliveryOptionPriceSum = deliveryOption.reduce((option, {price}) => option + price, 0)
        let servicesList = formData.servicesList;
        let servicesPriceSum = servicesList.reduce((service, {price}) =>  service + price, 0)


        let documentsSum = 
            certifiedCopiesTotal + certifiedCopiesWApostilleTotal +
            goodStandingCopiesTotal + goodStandingCopiesWApostilleTotal + 
            llcPackagePrice + deliveryOptionPriceSum + servicesPriceSum,

            specialRequests = formData.requests;
        let renderedDeliveryOption = formData.deliveryOption.map((option, index) => {
            return(
                <tbody>
                    <tr>
                        <td>{option.value}</td>  
                        <td>{option.price}</td>                  
                    </tr>
                </tbody>
            )
        })
        
        let packageReview;
        if (llcPackage !== undefined) {
            packageReview = (
                <div>
                    <div>
                        <strong>Package:</strong>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>'{llcPackage}'</td>
                                    <td>${llcPackagePrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                </div>
            )
        }

        let serviceReview;
        if (formData.servicesList[0] !== undefined) {
            serviceReview = (
                <div>
                    <div>
                        <strong>Services: </strong>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                </tr>
                            </thead>
                            {renderedServiceList}
                        </table>
                    </div>
                    <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                </div>
            )
        }

        let deliveryPreview;
        if (deliveryOption[0] !== undefined) {
            deliveryPreview = (
                <div>
                    <div>
                        <strong>Delivery Option:</strong>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                </tr>
                            </thead>
                            {renderedDeliveryOption}
                        </table>
                    </div>
                    <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                </div>
            )
        }


        let certifiedCopiesPreview;
        if (numCertifiedCopies !== undefined) {
            certifiedCopiesPreview = (
                <tr>
                    <td>Certified Copies</td>
                    <td>{numCertifiedCopies}</td>
                    <td>${certifiedCopiesPrice}</td>
                </tr>
            )
        }
        let certifiedCopiesWApostillePreview;
        if (numCertifiedCopiesWApostille !== undefined) {
            certifiedCopiesWApostillePreview = (
                <tr>
                    <td>Certified Copies w/ Apostille</td>
                    <td>{numCertifiedCopiesWApostille}</td>
                    <td>${certifiedCopiesWApostillePrice}</td>
                </tr>
            )
        }
        let goodStandingCopiesPreview;
        if (numGoodStandingCopies !== undefined) {
            goodStandingCopiesPreview = (
                <tr>
                    <td>Certificates of Good Standing</td>
                    <td>{numGoodStandingCopies}</td>
                    <td>${goodStandingCopiesPrice}</td>
                </tr>
            )
        }
        let goodStandingCopiesWApostillePreview;
        if (numGoodStandingCopiesWApostille !== undefined) {
            goodStandingCopiesWApostillePreview = (
                <tr>
                    <td>Certificates of Good Standing w/ Apostille</td>
                    <td>{numGoodStandingCopiesWApostille}</td>
                    <td>${goodStandingCopiesWApostillePrice}</td>
                </tr>
            )
        }

        let documentsCountPreview;
        if (numCertifiedCopies === undefined && numCertifiedCopiesWApostille === undefined && numGoodStandingCopies === undefined && numGoodStandingCopiesWApostille === undefined) {
            documentsCountPreview = (
                <div></div>
            )
        } else {
            documentsCountPreview = (
                <div>
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
                                {certifiedCopiesPreview}
                                {certifiedCopiesWApostillePreview}
                                {goodStandingCopiesPreview}
                                {goodStandingCopiesWApostillePreview}
                            </tbody>
                        </table>
                    </div>
                    <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
                </div>
            )   
        }

        let specialRequestsPreview;
        if (specialRequests !== '') {
            specialRequestsPreview = (
                <div className="card border-light mx-auto" style={{width: '50%'}}>
                    <div className="card-header"><strong>Special Request</strong></div>
                    <div className="card-body">
                        <p className="card-text">{specialRequests}</p>
                    </div>
                </div>
            )
        }

        if(payStatus === 'pass') {
            return (
                <div className='container card form_box' style={{marginBottom: '2.5%'}}>
                    <div className="alert alert-info" role="alert">
                        Thank you for your purchase. Your payment was processed successfully.
                    </div>
                    <div className='card' style={{padding: '2.5%', marginBottom: '2.5%', marginTop: '2.5%'}}>
                        <h5 style={{textAlign: 'center'}}>Order for {this.props.stateOfIncorporation} {this.props.type}:</h5>
                        <h4 className='card-title'>{this.props.companyName}</h4>
                        <h5 style={{textAlign: 'center'}}><em>(Alternate name: {this.props.altName})</em></h5>
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
                            <div className='row' style={{marginBottom: '2.5%'}}>
                                <div className='col'></div>
                                <div className='col-4'>
                                    <ul className='list-group text-center'>
                                        {memberList}    
                                    </ul>
                                </div>
                                <div className='col'></div>
                            </div>
                        </div>
                        <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
    
                        {packageReview}
    
                        {serviceReview}
                            
                        {deliveryPreview}
                            
                        {documentsCountPreview}
    
                        <div className='row'>
                            <div className='col'></div>
                            <div className="alert alert-secondary col-2" role="alert">
                                ${documentsSum}
                            </div>
                            <div className='col'></div>
                        </div>
                        {specialRequestsPreview}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h5 className='form_box_title'>Review</h5>
                    <div className='container card form_box' style={{marginBottom: '2.5%'}}>
                        <div className='card' style={{padding: '2.5%', marginBottom: '2.5%', marginTop: '2.5%'}}>
                            <h5 style={{textAlign: 'center'}}>Order for {this.props.stateOfIncorporation} {this.props.type}:</h5>
                            <h4 className='card-title'>{this.props.companyName}</h4>
                            <h5 style={{textAlign: 'center'}}><em>(Alternate name: {this.props.altName})</em></h5>
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
                                <div className='row' style={{marginBottom: '2.5%'}}>
                                    <div className='col'></div>
                                    <div className='col-4'>
                                        <ul className='list-group text-center'>
                                            {memberList}    
                                        </ul>
                                    </div>
                                    <div className='col'></div>
                                </div>
                            </div>
                            <div className='dropdown-divider' style={{marginBottom: '2.5%'}}></div>
    
                            {packageReview}
    
                            {serviceReview}
                            
                            {deliveryPreview}
                            
                            {documentsCountPreview}
    
                            <div className='row'>
                                <div className='col'></div>
                                <div className="alert alert-secondary col-2" role="alert">
                                    ${documentsSum}
                                </div>
                                <div className='col'></div>
                            </div>
                            {specialRequestsPreview}
                        </div>
    
                        <Payments 
                            formData={this.props.formData} 
                            reviewOrder={this.reviewOrder} 
                            tokenInfo={this.state}
                            saveToken={this.saveToken}
                        />
    
                    </div>
                    <div className='row' style={{marginBottom: '2.5%'}}>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
                                <Button className='button button-secondary button-block' onClick={this.onBack.bind(this)}>
                                    Back
                                </Button>
                            </div>
                        </div>
                        <div className='col'>
                        </div>
                    </div>

                    <Footer />

                </div>
            )
        }
    }
}

export default PayContainer;