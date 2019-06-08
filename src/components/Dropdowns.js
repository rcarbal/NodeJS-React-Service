import React from 'react';
import  { 
            Layout,
            Collapse, 
            Input, 
            Button, 
            Form, 
            Select
        } from 'element-react/next';

class Dropdowns extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            labelPosition: 'top',
            form: {
                altnames: [{
                key: 1,
                value: ''
                }]
            }
        };
    }
  
    handleSubmit(e) {
        e.preventDefault();
  
        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
  
    removeAltName(item, e) {
        var index = this.state.form.altnames.indexOf(item);
  
        if (index !== -1) {
            this.state.form.altnames.splice(index, 1);
            this.forceUpdate();
        }
  
        e.preventDefault();
    }
  
    addAltName(e) {
        e.preventDefault();
  
        this.state.form.altnames.push({
            key: this.state.form.altnames.length,
            value: ''
        });
  
        this.forceUpdate();
    }
  
    onEmailChange(value) {
        this.setState({
            form: Object.assign({}, this.state.form, { email: value })
        });
    }
  
    onAltNameChange(index, value) {
        this.state.form.altnames[index].value = value;
        this.forceUpdate();
    }

    render() {
        const activeName = "1";
        return (
            <Collapse value={activeName} accordion>
                <Collapse.Item title="Company" name="1">
                    <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-dynamic"> 
                        <Form.Item>
                            <div>State</div>
                            <Input disabled placeholder="Delaware" value="Delaware" />
                        </Form.Item>
                        <Form.Item>
                            <div>Type</div>
                            <Input disabled placeholder="LLC" value="LLC" />
                        </Form.Item>
                        <Form.Item
                            label={`Company name`}
                            rules={{
                                type: 'object', required: true,
                                fields: {
                                    value: { 
                                        required: true, 
                                        message: 'You must name your LLC', 
                                        trigger: 'blur' 
                                    }
                                }
                            }}>
                            <Input />
                        </Form.Item>
                        {
                            this.state.form.altnames.map((altname, index) => {
                                return (
                                    <Form.Item
                                        key={index}
                                        label={`Alternative name ${index + 1}`}
                                        prop={`altnames:${index}`}
                                        rules={{
                                            type: 'object', required: true,
                                            fields: {
                                                value: { 
                                                    required: true, 
                                                    message: 'You must add at least one alternate name', 
                                                    trigger: 'blur' 
                                                }
                                            }
                                        }}
                                    >
                                        <Input 
                                            value={altname.value} 
                                            onChange={this.onAltNameChange.bind(this, index)}>
                                        </Input>
                                        <Button 
                                            onClick={this.removeAltName.bind(this, altname)}>
                                            Delete
                                        </Button>
                                    </Form.Item>
                                )
                            })
                        }
                        <Form.Item>
                            <Button 
                                type="primary" 
                                onClick={this.handleSubmit.bind(this)}>
                                Submit
                            </Button>
                            <Button 
                                onClick={this.addAltName.bind(this)}>
                                New name
                            </Button>
                        </Form.Item>
                    </Form>
                </Collapse.Item>
                <Collapse.Item title="Contact" name="2">
                    <Form>
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <Input 
                                        placeholder="First name" prepend={
                                            <Select value="" placeholder="Select"> {
                                                [
                                                    'Mr.', 
                                                    'Ms.', 
                                                    'Mrs.',
                                                    'Dr.',
                                                    'Prof.'
                                                ].map((item, index) => 
                                                    <Select.Option 
                                                        key={index} 
                                                        label={item} 
                                                        value={index} 
                                                    />
                                                )
                                            }
                                            </Select>
                                        } 
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Input placeholder='Last name' gutter="20" />
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Input type='email' placeholder="Email address" append={
                                    <Select value=''> {
                                        [
                                            ".com",
                                            ".net",
                                            ".edu",
                                            ".gov"
                                        ].map((item, index) => 
                                            <Select.Option 
                                                key={index} 
                                                label={item} 
                                                value={index} 
                                            />
                                        )
                                    } </Select>
                                } />
                            </Layout.Col> 
                            <Layout.Col span='12'>
                                <Input type='number' placeholder="Phone number" />
                            </Layout.Col>               
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Input type='text' placeholder="Street Address" />
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Input type='text' placeholder="Street Address continued" />
                            </Layout.Col>
                        </Layout.Row>
                    </Form>
                </Collapse.Item>
                <Collapse.Item title="Legal Parties" name="3">
                    <div>Simplify the process: keep operating process simple and intuitive;</div>
                    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                </Collapse.Item>
            </Collapse>
        )
    }
}
export default Dropdowns;