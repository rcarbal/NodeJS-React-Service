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
                }],
                members: [{
                    key: 1,
                    value: ''
                }],
                states: [{
                  value: 'AL',
                  label: 'Alabama'
                }, {
                  value: 'AK',
                  label: 'Alaska'
                }, {
                  value: 'AZ',
                  label: 'Arizona'
                }, {
                  value: 'AR',
                  label: 'Arkansas'
                }, {
                  value: 'CA',
                  label: 'California'
                }, {
                  value: 'CO',
                  label: 'Colorado'
                }, {
                  value: 'CT',
                  label: 'Connecticut'
                }, {
                  value: 'DE',
                  label: 'Delaware'
                }, {
                  value: 'DC',
                  label: 'District of Columbia'
                }, {
                  value: 'FL',
                  label: 'Florida'
                }, {
                  value: 'GA',
                  label: 'Georgia'
                }, {
                  value: 'HI',
                  label: 'Hawaii'
                }, {
                  value: 'ID',
                  label: 'Idaho'
                }, {
                  value: 'IL',
                  label: 'Illinois'
                }, {
                  value: 'IN',
                  label: 'Indiana'
                }, {
                  value: 'IA',
                  label: 'Iowa'
                }, {
                  value: 'KS',
                  label: 'Kansas'
                }, {
                  value: 'KY',
                  label: 'Kentucky'
                }, {
                  value: 'LA',
                  label: 'Louisiana'
                }, {
                  value: 'ME',
                  label: 'Maine'
                }, {
                  value: 'MD',
                  label: 'Maryland'
                }, {
                  value: 'MA',
                  label: 'Massachusetts'
                }, {
                  value: 'MI',
                  label: 'Michigan'
                }, {
                  value: 'MN',
                  label: 'Minnesota'
                }, {
                  value: 'MS',
                  label: 'Mississippi'
                }, {
                  value: 'MO',
                  label: 'Missouri'
                }, {
                  value: 'MT',
                  label: 'Montana'
                }, {
                  value: 'NE',
                  label: 'Nebraska'
                }, {
                  value: 'NV',
                  label: 'Nevada'
                }, {
                  value: 'NH',
                  label: 'New Hampshire'
                }, {
                  value: 'NJ',
                  label: 'New Jersey'
                }, {
                  value: 'NM',
                  label: 'New Mexico'
                }, {
                  value: 'NY',
                  label: 'New York'
                }, {
                  value: 'NC',
                  label: 'North Carolina'
                }, {
                  value: 'ND',
                  label: 'North Dakota'
                }, {
                  value: 'OH',
                  label: 'Ohio'
                }, {
                  value: 'OK',
                  label: 'Oklahoma'
                }, {
                  value: 'OR',
                  label: 'Oregon'
                }, {
                  value: 'PA',
                  label: 'Pennsylvania'
                }, {
                  value: 'RI',
                  label: 'Rhode Island'
                }, {
                  value: 'SC',
                  label: 'South Carolina'
                }, {
                  value: 'SD',
                  label: 'South Dakota'
                }, {
                  value: 'TN',
                  label: 'Tennessee'
                }, {
                  value: 'TX',
                  label: 'Texas'
                }, {
                  value: 'UT',
                  label: 'Utah'
                }, {
                  value: 'VT',
                  label: 'Vermont'
                }, {
                  value: 'VA',
                  label: 'Virginia'
                }, {
                  value: 'WA',
                  label: 'Washington'
                }, {
                  value: 'WV',
                  label: 'West Virginia'
                }, {
                  value: 'WI',
                  label: 'Wisconsin'
                }, {
                  value: 'WY',
                  label: 'Wyoming'
                }],
                country: [{
                  value: 'USA',
                  label: 'United States of America'
                }],
            },
            value: ''
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

    removeMember(item, event) {
        let index = this.state.form.members.indexOf(item);

        if(index !== -1 ) {
            this.state.form.members.splice(index, 1);
            this.forceUpdate();
        }

        event.preventDefault();
    }
  
    addAltName(e) {
        e.preventDefault();
  
        this.state.form.altnames.push({
            key: this.state.form.altnames.length,
            value: ''
        });
  
        this.forceUpdate();
    }

    addMember(event) {
        event.preventDefault();

        this.state.form.members.push({
            key: this.state.form.members.length,
            value: ''
        });
    }
  
    onAltNameChange(index, value) {
        this.state.form.altnames[index].value = value;
        //this.setState({ value: this.state.form.altnames[index].value })
        this.forceUpdate();
    }

    onMemberChange(index, value) {
        this.state.form.members[index].value = value;
        //this.setState({ value: this.state.form.members[index].value });
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
                                <Form.Item>
                                    <Input placeholder='Last name' gutter="20" />
                                </Form.Item>                                     
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Form.Item>
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
                                </Form.Item>           
                            </Layout.Col> 
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <Input type='number' placeholder="Phone number" />
                                </Form.Item>                      
                            </Layout.Col>               
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <Input type='text' placeholder="Street Address" />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <Input type='text' placeholder="Street Address continued" />
                                </Form.Item>
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row>
                            <Layout.Col span='11'>
                                <Form.Item>
                                    <Input type='text' placeholder="City" />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='5'>
                                <Form.Item>
                                    <Select value={this.state.value}> {
                                        this.state.form.states.map(el => {
                                            return  <Select.Option 
                                                        key={el.value} 
                                                        label={el.label} 
                                                        value={el.value} 
                                                    />
                                        })
                                    } </Select>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="8">
                                <Form.Item>
                                    <Input placeholder="Zip Code" />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='24'>
                                <Form.Item>
                                    <Select value={ this.state.value }> {
                                        this.state.form.country.map(item => {
                                            return  <Select.Option
                                                        key={item.value}
                                                        label={item.label}
                                                        value={item.label}
                                                    />
                                        })
                                    } </Select>
                                </Form.Item>
                            </Layout.Col>
                        </Layout.Row>
                    </Form>
                </Collapse.Item>
                <Collapse.Item title="Legal Parties" name="3">
                    <Form ref="form" model={this.state.form} rules={this.state.rules}>
                        {
                            this.state.form.members.map((member, index) => {
                                return (
                                    <Form.Item
                                        key={index}
                                        label={`Member name ${index + 1}`}
                                  
                                        rules={{
                                            type: 'object', required: true,
                                            fields: {
                                                value: { 
                                                    required: true, 
                                                    message: 'You must add at least one member', 
                                                    trigger: 'blur' 
                                                }
                                            }
                                        }}
                                    >
                                        <Input 
                                            value={member.value} 
                                            onChange={this.onMemberChange.bind(this, index)}>
                                        </Input>
                                        <Button 
                                            onClick={this.removeMember.bind(this, member)}>
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
                                onClick={this.addMember.bind(this)}>
                                New name
                            </Button>
                        </Form.Item>                
                    </Form>
                </Collapse.Item>
            </Collapse>
        )
    }
}
export default Dropdowns;