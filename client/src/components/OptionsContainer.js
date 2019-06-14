import React from 'react';

import { Form, Radio, Checkbox, InputNumber, Input } from 'element-react/next';

class OptionsContainer extends React.Component {

    state = {
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
    }

    render(){
        return (
            <div>
                <Form>
                    <h3>Package</h3>
                    <Form.Item> 
                        <Radio.Group value={this.state.package.value} price={this.state.package.price} onChange={this.onChange.bind(this)}>
                            <Radio value='SmoothLegal' price='399'>SmoothLegal Formation</Radio>
                            <Radio value='Complete' price='298'>Complete Formation</Radio>
                            <Radio value='Basic' price='189'>Basic Formation</Radio>
                        </Radio.Group>
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
            </div>
        )
    }
}

export default OptionsContainer;