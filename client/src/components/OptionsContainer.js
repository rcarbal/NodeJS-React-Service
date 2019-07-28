import React from 'react';

import { Form, Button, Radio, Checkbox, InputNumber, Input, Tooltip } from 'element-react/next';

class OptionsContainer extends React.Component {

    state = {
        active: 0,
        llcPackage: {},
        certifiedCopies: {},
        certifiedCopiesWApostille: {},
        goodStandingCopies: {},
        goodStandingCopiesWApostille: {},
        deliveryOption: [],
        servicesList: [],
        requests: '',
        paymentTotal: 0
    }

    
    onPackageSelect(value) {
        this.setState({ llcPackage: value});
    }
    
    getCertifiedCopies(e) {
        this.setState({ certifiedCopies: {numCopies: e, price: 99} });
    }
    getCertifiedCopiesWApostille(e) {
        this.setState({ certifiedCopiesWApostille: {numCopies: e, price: 159} });
    }
    getGoodStandingCopies(e) {
        this.setState({ goodStandingCopies: {numCopies: e, price: 99} });
    }
    getGoodStandingCopiesWApostille(e) {
        this.setState({ goodStandingCopiesWApostille: {numCopies: e, price: 159} });
    }
    
    upgradeDelivery(e) {
        const deliveryOption = this.state.deliveryOption;
        let index;

        if(e.target.checked) {
            deliveryOption.push(+e.target.value)
        } else {
            deliveryOption[0].price = 0;
            index = deliveryOption.indexOf(+e.target.value)
            deliveryOption.splice(index, 1)
        }
        this.setState({ deliveryOption: deliveryOption });
    }

    onServicesSelect(e) {
        // current array of servicesList
        const servicesList = this.state.servicesList
        let index;
        
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to servicesList array
            servicesList.push(+e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = servicesList.indexOf(+e.target.value)
            servicesList.splice(index, 1)
        }

        // update the state with the new array of servicesList
        this.setState({ servicesList: servicesList })
    }
    
    onRequestInput(requests) {
        this.setState({ requests });
    }

    handleSubmit(event) {    
        event.preventDefault();

        let llcPackage = this.state.llcPackage;

        // Checks if a package is selected
        if (Object.keys(llcPackage).length === 0) {
            alert('Please select a package option');
        } else {
            this.props.saveAndNext(this.state);
        }
    };

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render(){

        // PACKAGES
        let Premium = { value: 'Premium', price: 399 };
        let complete =    { value: 'Complete', price: 289 };
        let basic =       { value: 'Basic', price: 198 };

        // SERVICES
        let statementOfOrganizer = { value: "Statement of Organizer", price: 49 };
        let taxIDNumberApp       = { value: 'Tax ID Number - EIN Application', price: 99 };
        let complianceKit        = { value: 'Compliance Kit & Seal', price: 99 };

        // DELIVERY OPTION
        let fedExDelivery = { value: 'FedEx(domestic)', price: 29 };

        // DOCUMENTS
        let certifiedCopies = { 
            name: 'Certified Copy', 
            numCopies: 0, 
            price: 99 
        };
        let certifiedCopiesWApostille = { 
            name: 'Certified Copy w/ Apostille', 
            numCopies: 0, 
            price: 159 
        };
        let goodStandingCopies = { 
            name: 'Certificate of Good Standing', 
            numCopies: 0, 
            price: 99 
        };
        let goodStandingCopiesWApostille = { 
            name: 'Certificate of Good Standing w/ Apostille', 
            numCopies: 0, 
            price: 159 
        };

        return (
            <div>
                <Form>
                    <Tooltip effect='dark' content='Choose an LLC formation package that best suits your needs' placement='bottom'>
                        <h5 className='form_box_title'>Package</h5>
                    </Tooltip>
                    <div className='container card form_box'>           
                        <Form.Item>
                            <div className='row justify-content-between' style={{marginTop: '2.5%', marginBottom: '2.5%'}}>
                                <div className='col-md-4'>
                                    <div className='card package_card'>
                                        <h5 className='card-header text-center' id='package_card_title'>Basic</h5>
                                        <div className='card-body'>
                                            <div className='card-text package_card_text align-self-end'>
                                                <div className='row' style={{marginLeft: '1.75%'}}>
                                                    <ul className='col'>
                                                        <li>Name Search</li>
                                                        <li>Priority Mail (US & Global)</li>
                                                    </ul>
                                                    <ul className='col'>
                                                        <li>Certificate of Formation</li>
                                                        <li>Registered Agent service until 2020</li>
                                                        <li>State Filing Fee</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='control'>
                                                <Radio 
                                                    value={basic} 
                                                    checked={this.state.llcPackage.value === 'Basic'}  
                                                    onChange={this.onPackageSelect.bind(this)}
                                                    className='grid-content button button-primary button-block'>
                                                    Select for $198
                                                </Radio>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                     
                                <div className='col-md-4'>
                                    <div className='card package_card'>
                                        <h5 className='card-header text-center' id='package_card_title'>Complete</h5>
                                        <div className='card-body'>
                                            <div className='card-text package_card_text align-self-end'>
                                                <div className='row' style={{marginLeft: '1.75%'}}>
                                                    <ul className='col'>
                                                        <li>Name Search</li>
                                                        <li>Priority Mail (US & Global)</li>
                                                        <li>Professionally-Prepared 20 page LLC Operating Agreement - Ready for Signature</li>
                                                    </ul>
                                                    <ul className='col'>
                                                        <li>Certificate of Formation</li>
                                                        <li>IRS and Corporate forms</li>
                                                        <li>Registered Agent service until 2020</li>
                                                        <li>State Filing Fee</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='control'>
                                                <Radio 
                                                    value={complete} 
                                                    checked={this.state.llcPackage.value === 'Complete'}  
                                                    onChange={this.onPackageSelect.bind(this)}
                                                    className='grid-content button button-primary button-block'>
                                                    Select for $289
                                                </Radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='col-md-4'>
                                    <div className='card package_card'>
                                        <h5 className='card-header text-center' id='package_card_title'>Premium</h5>
                                        <div className='card-body'>
                                            <div className='card-text package_card_text'>
                                                <div className='row' style={{marginLeft: '1.75%'}}>
                                                    <ul className='col align-text-bottom'>
                                                        <li>Name Search</li>
                                                        <li>Priority Mail (US & Global)</li>
                                                        <li>Professionally-Prepared 20 page LLC Operating Agreement - Ready for Signature</li>
                                                        <li>1 - Business Day Turnaround</li>
                                                    </ul>
                                                    <ul className='col'>
                                                        <li>Certificate of Formation</li>
                                                        <li>IRS and Corporate forms</li>
                                                        <li>Registered Agent service until 2020</li>
                                                        <li>State Filing Fee</li>
                                                        <li>Email Document Delivery</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='control'>
                                                <Radio 
                                                    value={Premium} 
                                                    checked={this.state.llcPackage.value === 'Premium'}  
                                                    onChange={this.onPackageSelect.bind(this)}
                                                    className='grid-content button button-primary button-block'>
                                                    Select for $399
                                                </Radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Item>
                    </div>

                    <Tooltip effect='dark' content='Add more to your order' placement='bottom'>
                        <h5 className='form_box_title'>Popular Services</h5>
                    </Tooltip>
                    <div className='container card form_box' style={{ marginBottom: '2.5%'}}>
                        <div className='card' style={{ marginTop: '2.5%', paddingTop: '2.5%' }}>
                            <Form.Item>
                                <div className='d-flex justify-content-center'>
                                    <Checkbox.Group value={this.state.servicesList} fill='#4950F6'>
                                        <Checkbox.Button
                                            value={statementOfOrganizer}
                                            onChange={this.onServicesSelect.bind(this)}
                                            checked={true}>
                                            Statement of Organizer
                                        </Checkbox.Button>
                                        <Checkbox.Button 
                                            value={taxIDNumberApp}
                                            onChange={this.onServicesSelect.bind(this)}
                                            checked={true}>
                                            Tax ID Number - EIN Application
                                        </Checkbox.Button>
                                        <Checkbox.Button 
                                            value={complianceKit}
                                            onChange={this.onServicesSelect.bind(this)}>
                                            Compliance Kit & Seal
                                        </Checkbox.Button>
                                    </Checkbox.Group>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h5 className='col-4 text-right'><span className='badge badge-succes'>$ 49</span></h5>
                                    <h5 className='col-4 text-center'><span className='badge badge-succes'>$ 99</span></h5>
                                    <h5 className='col-4 text-left'><span className='badge badge-succes'>$ 99</span></h5>
                                </div>
                            </Form.Item>
                        </div>
                    <div className="dropdown-divider" style={{marginBottom: '2.5%', marginTop: '2.5%'}}></div>
                    <Form.Item>
                        <ul className='list-group'>
                            <li className='list-group-item d-flex justify-content-between'>
                                <InputNumber 
                                    size='small'
                                    value={certifiedCopies.price} 
                                    defaultValue={certifiedCopies.numCopies} 
                                    onChange={this.getCertifiedCopies.bind(this)}
                                />
                                <Tooltip 
                                    effect='dark' 
                                    content='A copy of a Certificate of Incorporation/Formation or Amendments thereto that has been Certified by the Secretary of State with a cover sheet and authentication code.'
                                    placement='top-start'
                                >
                                    <div>Certified Copy</div>
                                </Tooltip>  
                                <h4><span className='badge badge-success'>$ 99</span></h4>
                            </li>
                            <li className='list-group-item d-flex justify-content-between'>
                                <InputNumber 
                                    size='small'
                                    value={certifiedCopiesWApostille.price} 
                                    defaultValue={certifiedCopiesWApostille.numCopies} 
                                    onChange={this.getCertifiedCopiesWApostille.bind(this)}
                                />
                                <Tooltip 
                                    effect='dark' 
                                    content="The apostille is a certification from the Secretary of State required by certain countries (who have accepted the terms of the Hague Convention's international treaty). It is the equivalent of a 'legalization' and avoids having to get an official filing 'legalized' by the US Department of State then the foreign consulate. We can provide a company with an apostille along with their Certified Copy of the Certificate of Incorporation/Formation and Amendments thereto. This can be produced usually the same day it is ordered."
                                    placement='top-start'    
                                >
                                    <div>Certified Copy w/Apostille</div>
                                </Tooltip>
                                <h4><span className='badge badge-success'>$ 159</span></h4>
                            </li>
                            <li className='list-group-item d-flex justify-content-between'>
                                <InputNumber 
                                    size='small'
                                    value={goodStandingCopies.price} 
                                    defaultValue={goodStandingCopies.numCopies} 
                                    onChange={this.getGoodStandingCopies.bind(this)}
                                />
                                <Tooltip 
                                    effect='dark' 
                                    content='Official document from Secretary of State to certify that an entity is in existence and has satisfied state corporate or LLC law requirements such as filing all the necessary reports and documents, having a Registered Agent and being up-to-date with regards to all penalties and fees owed to the state. This is sometimes required for banking, business transactions or other governmental authorities outside the state of incorporation. This document will be sent to you electronically through email and will not be sent through FedEx if the option is selected.'
                                    placement='top-start'    
                                >
                                    <div>Certificate of Good Standing</div>  
                                </Tooltip>   
                                <h4><span className='badge badge-success'>$ 99</span></h4>
                            </li>
                            <li className='list-group-item d-flex justify-content-between'>
                                <InputNumber 
                                    size='small'
                                    value={goodStandingCopiesWApostille.price} 
                                    defaultValue={goodStandingCopiesWApostille.numCopies} 
                                    onChange={this.getGoodStandingCopiesWApostille.bind(this)}
                                />
                                <Tooltip 
                                    effect='dark'
                                    content="The apostille is a certification from the Secretary of State required by certain countries (who have accepted the terms of the Hague Convention's international treaty). It is the equivalent of a 'legalization' and avoids having to get an official filing 'legalized' by the US Department of State then the foreign consulate. We can provide a company with an apostille along with their Certificate of Good Standing. This can be produced usually the same day it is ordered."
                                    placement='top-start'
                                >
                                    <div>Certificate of Good Standing w/Apostille</div>
                                </Tooltip>
                                <h4><span className='badge badge-success'>$ 159</span></h4>
                            </li>
                        </ul>
                    </Form.Item>
                    </div>

                    <Tooltip effect='dark' content='Optionally upgrade your order delivery' placement='bottom'>
                        <h5 className='form_box_title'>Delivery Options</h5>
                    </Tooltip>
                    <div className='container card form_box' style={{ marginBottom: '2.5%'}}>
                        <div className='card' style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%' }}>
                            <Form.Item>
                                <div className='d-flex justify-content-center'>
                                    <Checkbox.Group value={this.state.deliveryOption}>
                                        <Checkbox.Button 
                                            value={fedExDelivery}
                                            onChange={this.upgradeDelivery.bind(this)}>
                                            FedEx(domestic)
                                        </Checkbox.Button>
                                    </Checkbox.Group>
                                </div>    
                                <div className='d-flex justify-content-center'>
                                    <h4><span className='badge badge-success'>$29</span></h4>
                                </div>
                            </Form.Item>
                        </div>
                    </div>

                    <Tooltip effect='dark' content='Feel free to include anything else about your order' placement='bottom'>
                        <h5 className='form_box_title'>Special Requests</h5>
                    </Tooltip>
                    <div className='container card form_box' style={{padding: '1%', marginBottom: '2.5%'}}>
                    <Form.Item style={{marginTop: '2.5%'}}>
                        <Input 
                            type="textarea" 
                            autosize={{ minRows: 3, maxRows: 5}}
                            value={this.state.requests}
                            onChange={this.onRequestInput.bind(this)}
                        />
                    </Form.Item>
                    </div>
                </Form>
                <div className='row' style={{marginBottom: '2.5%'}}>
                    <div className='col-6'>
                        <div className='d-flex justify-content-center'>
                            <Button className='button button-secondary button-block' onClick={this.onBack.bind(this)}>
                                Back
                            </Button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex justify-content-center'>
                            <Button className='button button-primary button-block' onClick={this.handleSubmit.bind(this)}>
                                Next step
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsContainer;
