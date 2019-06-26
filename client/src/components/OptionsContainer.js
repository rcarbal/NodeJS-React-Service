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

    /* ORIGINAL WORKING FUNCTION WITH JUST VALUE
    onPackageSelect(value) {
        let llcPackage = {...this.state.llcPackage};
        llcPackage.value = value;
        this.setState({ llcPackage: { value: value }});
    }
    */
   /* BROKEN FUNCTION
   onPackageSelect = (event) => {
       event.preventDefault();
       let value = event.target.value;
       let price = event.target.price;
       this.setState({ llcPackages: { value: value, price: price }});
   }
   */
    /*
    onPackageSelect = ({ target }) => {
        let packages = [...this.state.llcPackages];
        packages.name = target.value;
        packages.price = target.price;
    }
    */
   onPackageSelect(value) {
       this.setState({ llcPackage: value});
   }
    
    getCertifiedCopies(e) {
        console.log(e)
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
    
   /*
    orderDocuments(e) {
        const llcDocuments = this.state.llcDocuments;
        let index;

        if(e.defaultValue) {
            llcDocuments.push(+e.value);
        } else {
            index = llcDocuments.indexOf(+e.defaultValue)
            llcDocuments.splice(index, 1)
        }
        this.setState({ llcDocuments: llcDocuments });
    }
    */

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

    upgradeDelivery(e) {
        const deliveryOption = this.state.deliveryOption;
        let index;

        if(e.target.checked) {
            deliveryOption.push(+e.target.value)
        } else {
            index = deliveryOption.indexOf(+e.target.value)
            deliveryOption.splice(index, 1)
        }
        this.setState({ deliveryOption: deliveryOption });
    }
    
    onRequestInput(requests) {
        this.setState({ requests });
    }

    handleSubmit(event) {
    
        event.preventDefault();

        alert(`
            USER ORDERED ${this.state.llcDocuments}
            User chose the ${this.state.llcPackage} package for $${this.state.price}
            User ordered ${this.state.certifiedCopies} certified copies
            User ordered ${this.state.certifiedCopiesWApostille} certified copies w/ apostille
            User ordered ${this.state.goodStandingCopies} certificate of good standing copies
            User ordered ${this.state.goodStandingCopiesWApostille} certificate of good standing copies w/ apostille
            User ordered the following list of services: ${this.state.servicesList}
            FedEx delivery upgrade: ${this.state.deliveryOption}
            User requests: ${this.state.requests}
        `);

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
        let taxIDNumberApp = { value: 'Tax ID Number - EIN Application', price: 99 };
        let complianceKit = { value: 'Compliance Kit & Seal', price: 99 };

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
