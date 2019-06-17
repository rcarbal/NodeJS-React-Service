import React from 'react';

import { Form, Button, Radio, Checkbox, InputNumber, Input } from 'element-react/next';

class OptionsContainer extends React.Component {

    state = {
        active: 0,
        package: {
            value: '',
            price: ''
        },
        copies: {
            value: 0
        },
        requests: ''
    }

    onChange(value) {
        this.setState({ value });
        console.log(this.state.value)
    }
    handleSubmit(event) {
    
        event.preventDefault();

        alert(`User chose the ${this.state.value} package for $${this.state.price}`)

        this.props.saveAndNext(this.state);
        //this.props.handleSubmitFromEric();
        
    };

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render(){
        return (
            <div>
                <Form>
                <div>{this.props.active}</div>
                <div>{this.props.companyName}</div>
                    <h3>Package</h3>
                    <Form.Item>
                        <Radio 
                            value='SmoothLegal' 
                            checked={this.state.package.value === 'SmoothLegal'} 
                            price='399' 
                            onChange={this.onChange.bind(this)}>
                            SmoothLegal Formation
                        </Radio>
                        <Radio 
                            value='Complete' 
                            checked={this.state.package.value === 'Complete'} 
                            price='298' 
                            onChange={this.onChange.bind(this)}>
                            Complete Formation
                        </Radio>
                        <Radio 
                            value='Basic' 
                            checked={this.state.package.value === 'Basic'} 
                            price='189' 
                            onChange={this.onChange.bind(this)}>
                            Basic Formation
                        </Radio> 
                    </Form.Item>
                    <Form.Item>
                        <h3>Popular Services</h3>
                        <Checkbox checked>Statement of Organizer</Checkbox>
                        <Checkbox>Tax ID Number - EIN Application</Checkbox>
                        <Checkbox>Compliance Kit & Seal</Checkbox>
                        <div>Certified Copy </div>
                        <InputNumber size='small' defaultValue={this.state.copies.value} />
                        <div>Certified Copy w/Apostille</div>
                        <InputNumber size='small' defaultValue={this.state.copies.value} />
                        <div>Certified of Good Standing </div>
                        <InputNumber size='small' defaultValue={this.state.copies.value} />
                        <div>Certified of Good Standing w/Apostille</div>
                        <InputNumber size='small' defaultValue={this.state.copies.value} />
                    </Form.Item>
                    <Form.Item>
                        <h3>Delivery Options</h3>
                        <Checkbox>FedEx(domestic)</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <h3>Special Requests</h3>
                        <Input type="textarea" autosize={{ minRows: 3, maxRows: 5}} />
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
