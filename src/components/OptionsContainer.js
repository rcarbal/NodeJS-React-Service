import React from 'react';

import { Form, Radio, Layout } from 'element-react/next';

class OptionsContainer extends React.Component {

    state = {
        package: {
            value: '',
            price: ''
        }
    }

    render(){
        return (
            <div>
                <Form>
                    <h3>Package</h3>
                    <Form.Item> 
                        <Radio.Group value={this.state.package.value} price={this.state.package.price}>
                            <Radio value='SmoothLegal' price='399'>SmoothLegal Formation</Radio>
                            <Radio value='Complete' price='298'>Complete Formation</Radio>
                            <Radio value='Basic' price='189'>Basic Formation</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <h3>Popular Services</h3>
                    </Form.Item>
                    <Form.Item>
                        <h3>Delivery Options</h3>
                    </Form.Item>
                    <Form.Item>
                        <h3>Special Requests</h3>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default OptionsContainer;