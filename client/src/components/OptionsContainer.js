import React from 'react';

import { Form, Button, Radio, Checkbox, InputNumber, Input, Layout } from 'element-react/next';

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
    
        this.props.saveAndNext(this.state);
    };

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render(){

        // PACKAGES
        let SmoothLegal = { value: 'SmoothLegal', price: 399 };
        let complete =    { value: 'Complete', price: 289 };
        let basic =       { value: 'Basic', price: 198 };

        // SERVICES
        let statementOfOrganizer = { value: 'Statement of Organizer', price: 49 };
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
                    <h5 style={{marginTop: '2.5%', marginLeft: '10%'}}>Package</h5>
                    <div className='container card form_box' style={{marginBottom: '2.5%'}}>
                        
                            <div className='row justify-content-between'>
                                <div className='col-4'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Basic</h5>
                                            <div className='card-text'>
                                                <div className='row'>
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
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Complete</h5>
                                            <div className='card-text'>
                                                <div className='row'>
                                                    <ul className='col'>
                                                        <li>Name Search</li>
                                                        <li>Priority Mail (US & Global)</li>
                                                        <li>A Professional-Prepared 20 page LLC Operating Agreement - Ready for Signature</li>
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
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>SmoothLegal</h5>
                                            <div className='card-text'>
                                                <div className='row'>
                                                    <ul className='col'>
                                                        <li>Name Search</li>
                                                        <li>Priority Mail (US & Global)</li>
                                                        <li>A Professional-Prepared 20 page LLC Operating Agreement - Ready for Signature</li>
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
                                    </div>
                                </div>
                            </div>
                        <Form.Item>
                            <Layout.Row type='flex' className='row-bg' justify='space-around'>
                                <Layout.Col span='6' offset='2'>
                                    <Radio.Button 
                                        value={basic} 
                                        checked={this.state.llcPackage.value === 'Basic'}  
                                        onChange={this.onPackageSelect.bind(this)}
                                        className='grid-content'>
                                        Select for $198
                                    </Radio.Button> 
                                </Layout.Col>
                                <Layout.Col span='6' offset='3'>
                                    <Radio.Button 
                                        value={complete} 
                                        checked={this.state.llcPackage.value === 'Complete'}  
                                        onChange={this.onPackageSelect.bind(this)}
                                        className='grid-content'>
                                        Select for $289
                                    </Radio.Button>
                                </Layout.Col>
                                <Layout.Col span='6' offset='2'>
                                    <Radio.Button 
                                        value={SmoothLegal} 
                                        checked={this.state.llcPackage.value === 'SmoothLegal'}  
                                        onChange={this.onPackageSelect.bind(this)}
                                        className='grid-content'>
                                        Select for $399
                                    </Radio.Button>
                                </Layout.Col>
                            </Layout.Row>
                        </Form.Item>
                    </div>

                    <h5 style={{marginLeft: '10%'}}>Popular Services</h5>
                    <div className='container card form_box' style={{ marginBottom: '2.5%'}}>
                    <Form.Item>
                        <Layout.Row type='flex' justify='center'>
                            <Layout.Col span='16' offset='3'>
                                <Checkbox.Group value={this.state.servicesList}>
                                    <Checkbox.Button 
                                        value={statementOfOrganizer}
                                        onChange={this.onServicesSelect.bind(this)}>
                                        Statement of Organizer
                                    </Checkbox.Button>
                                    <Checkbox.Button 
                                        value={taxIDNumberApp}
                                        onChange={this.onServicesSelect.bind(this)}>
                                        Tax ID Number - EIN Application
                                    </Checkbox.Button>
                                    <Checkbox.Button 
                                        value={complianceKit}
                                        onChange={this.onServicesSelect.bind(this)}>
                                        Compliance Kit & Seal
                                    </Checkbox.Button>
                                </Checkbox.Group>
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row type='flex' justify='center'>
                            <Layout.Col span='3' offset='3'>$49</Layout.Col>
                            <Layout.Col span='3' offset='2'>$99</Layout.Col>
                            <Layout.Col span='3' offset='1'>$99</Layout.Col>
                        </Layout.Row>

                        <div className="dropdown-divider" style={{marginBottom: '2.5%', marginTop: '2.5%'}}></div>

                        <Layout.Row>
                            <Layout.Col span='6' offset='6'>
                                <div>Certified Copy </div>
                                <InputNumber 
                                    size='small'
                                    value={certifiedCopies.price} 
                                    defaultValue={certifiedCopies.numCopies} 
                                    onChange={this.getCertifiedCopies.bind(this)}
                                />
                                <div className="dropdown-divider"></div>
                            </Layout.Col>
                            <Layout.Col span='6' offset='6'>$99</Layout.Col>
                        </Layout.Row>

                        <Layout.Row>
                            <Layout.Col span='6' offset='6'>
                                <div>Certified Copy w/Apostille</div>
                                <InputNumber 
                                    size='small'
                                    value={certifiedCopiesWApostille.price} 
                                    defaultValue={certifiedCopiesWApostille.numCopies} 
                                    onChange={this.getCertifiedCopiesWApostille.bind(this)}
                                />
                                <div className="dropdown-divider"></div>
                            </Layout.Col>
                            <Layout.Col span='6' offset='6'>$159</Layout.Col>
                        </Layout.Row>

                        <Layout.Row>
                            <Layout.Col span='6' offset='6'>
                                <div>Certificate of Good Standing </div>
                                <InputNumber 
                                    size='small'
                                    value={goodStandingCopies.price} 
                                    defaultValue={goodStandingCopies.numCopies} 
                                    onChange={this.getGoodStandingCopies.bind(this)}
                                />
                                <div className="dropdown-divider"></div>
                            </Layout.Col>
                            <Layout.Col span='6' offset='6'>$99</Layout.Col>
                        </Layout.Row>
                        
                        <Layout.Row>
                            <Layout.Col span='6' offset='6'>
                                <div>Certificate of Good Standing w/Apostille</div>
                                <InputNumber 
                                    size='small'
                                    value={goodStandingCopiesWApostille.price} 
                                    defaultValue={goodStandingCopiesWApostille.numCopies} 
                                    onChange={this.getGoodStandingCopiesWApostille.bind(this)}
                                />
                            </Layout.Col>
                            <Layout.Col span='6' offset='6'>$159</Layout.Col>
                        </Layout.Row>
                    </Form.Item>
                    </div>
                    <h5 style={{marginLeft: '10%'}}>Delivery Options</h5>
                    <div className='container card form_box' style={{ marginBottom: '2.5%'}}>
                    <Form.Item>
                        <Layout.Row>
                            <Layout.Col span="4" offset='10'>
                                <Checkbox.Group value={this.state.deliveryOption}>
                                    <Checkbox.Button 
                                        value={fedExDelivery}
                                        onChange={this.upgradeDelivery.bind(this)}>
                                        FedEx(domestic)
                                    </Checkbox.Button>
                                </Checkbox.Group>
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='4' offset='11'>
                                <div>$29</div>
                            </Layout.Col>
                        </Layout.Row>
                    </Form.Item>
                    </div>
                    <h5 style={{marginLeft: '10%'}}>Special Requests</h5>
                    <div className='container card form_box' style={{padding: '1%', marginBottom: '2.5%'}}>
                    <Form.Item>
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
                    <div className='col'>
                        <Button onClick={this.onBack.bind(this)} style={{marginLeft: '5%'}}>
                            Back
                        </Button>
                    </div>
                    <div className='col'>
                        <Button type='submit' onClick={this.handleSubmit.bind(this)} style={{marginLeft: '80%'}}>
                            Next step
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsContainer;
