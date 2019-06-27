import React from 'react';

import { Form, Button, Radio, Checkbox, InputNumber, Input } from 'element-react/next';

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
        requests: ''
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

        let certifiedCopiesTotal = this.state.certifiedCopies.numCopies * this.state.certifiedCopies.price;
        let certifiedCopiesWApostilleTotal = this.state.certifiedCopiesWApostille.numCopies * this.state.certifiedCopiesWApostille.price;
        let goodStandingCopiesTotal = this.state.goodStandingCopies.numCopies * this.state.goodStandingCopies.price;
        let goodStandingCopiesWApostilleTotal = this.state.goodStandingCopiesWApostille.numCopies * this.state.goodStandingCopiesWApostille.price;

        let servicesList = this.state.servicesList;
        let servicesPriceSum = servicesList.reduce((service, {price}) =>  service + price, 0)

        console.log(`
            LLC Package price = ${this.state.llcPackage.price}
            Certified Copies price = ${this.state.certifiedCopies.numCopies} * ${this.state.certifiedCopies.price} = ${certifiedCopiesTotal}
            Certified Copies w/Apostille price = ${this.state.certifiedCopiesWApostille.numCopies} * ${this.state.certifiedCopiesWApostille.price} = ${certifiedCopiesWApostilleTotal}
            Certs of Good Standing price = ${this.state.goodStandingCopies.numCopies} * ${this.state.goodStandingCopies.price} = ${goodStandingCopiesTotal}
            Certs of Good Standing w/Apostille price = ${this.state.goodStandingCopiesWApostille.numCopies} * ${this.state.goodStandingCopiesWApostille.price} = ${goodStandingCopiesWApostilleTotal}
            Delivery Price = ${this.state.deliveryOption[0].price}
            Services Sum = ${servicesPriceSum}
            `)

        this.props.saveAndNext(this.state);
        //this.props.finalSubmit(this.state);
        
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
                <div>{this.props.active}</div>
                <div>{this.props.companyName}</div>
                    <h3>Package</h3>
                    <Form.Item>
                        <Radio 
                            value={SmoothLegal} 
                            checked={this.state.llcPackage.value === 'SmoothLegal'}  
                            onChange={this.onPackageSelect.bind(this)}>
                            SmoothLegal Formation
                        </Radio>
                        <Radio 
                            value={complete} 
                            checked={this.state.llcPackage.value === 'Complete'}  
                            onChange={this.onPackageSelect.bind(this)}>
                            Complete Formation
                        </Radio>
                        <Radio 
                            value={basic} 
                            checked={this.state.llcPackage.value === 'Basic'}  
                            onChange={this.onPackageSelect.bind(this)}>
                            Basic Formation
                        </Radio> 
                    </Form.Item>
                    <Form.Item>
                        <h3>Popular Services</h3>
                        <Checkbox.Group value={this.state.servicesList}>
                            <Checkbox 
                                value={statementOfOrganizer}
                                onChange={this.onServicesSelect.bind(this)}>
                                Statement of Organizer
                            </Checkbox>
                            <Checkbox 
                                value={taxIDNumberApp}
                                onChange={this.onServicesSelect.bind(this)}>
                                Tax ID Number - EIN Application
                            </Checkbox>
                            <Checkbox 
                                value={complianceKit}
                                onChange={this.onServicesSelect.bind(this)}>
                                Compliance Kit & Seal
                            </Checkbox>
                        </Checkbox.Group>
                        <div>Certified Copy </div>
                        <InputNumber 
                            size='small'
                            value={certifiedCopies.price} 
                            defaultValue={certifiedCopies.numCopies} 
                            onChange={this.getCertifiedCopies.bind(this)}
                        />
                        <div>Certified Copy w/Apostille</div>
                        <InputNumber 
                            size='small'
                            value={certifiedCopiesWApostille.price} 
                            defaultValue={certifiedCopiesWApostille.numCopies} 
                            onChange={this.getCertifiedCopiesWApostille.bind(this)}
                        />
                        <div>Certificate of Good Standing </div>
                        <InputNumber 
                            size='small'
                            value={goodStandingCopies.price} 
                            defaultValue={goodStandingCopies.numCopies} 
                            onChange={this.getGoodStandingCopies.bind(this)}
                        />
                        <div>Certificate of Good Standing w/Apostille</div>
                        <InputNumber 
                            size='small'
                            value={goodStandingCopiesWApostille.price} 
                            defaultValue={goodStandingCopiesWApostille.numCopies} 
                            onChange={this.getGoodStandingCopiesWApostille.bind(this)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <h3>Delivery Options</h3>
                        <Checkbox.Group value={this.state.deliveryOption}>
                            <Checkbox 
                                value={fedExDelivery}
                                onChange={this.upgradeDelivery.bind(this)}>
                                FedEx(domestic)
                            </Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item>
                        <h3>Special Requests</h3>
                        <Input 
                            type="textarea" 
                            autosize={{ minRows: 3, maxRows: 5}}
                            value={this.state.requests}
                            onChange={this.onRequestInput.bind(this)}
                        />
                    </Form.Item>
                </Form>
                <Button onClick={this.onBack.bind(this)}>
                    Back
                </Button>
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Next step
                </Button>
            </div>
        )
    }
}

export default OptionsContainer;
