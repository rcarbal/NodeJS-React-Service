import React from 'react';
import  { 
            Layout, 
            Input,
            Button,
            Form, 
            Select
        } from 'element-react/next';

let index;

class InfoContainer extends React.Component {
    
    state = {
        active: 0,
        stateOfIncoporation: 'Delaware',
        type: 'LLC',
        companyName: '',
        altNames: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        streetAddress: '',
        streetAddressTwo: '',
        city: '',
        usStates: [
          { value: 'AL'
          }, {
            value: 'AK'
          }, {
            value: 'AZ'
          }, {
            value: 'AR'
          }, {
            value: 'CA'
          }, {
            value: 'CO'
          }, {
            value: 'CT'
          }, {
            value: 'DE'
          }, {
            value: 'DC'
          }, {
            value: 'FL'
          }, {
            value: 'GA'
          }, {
            value: 'HI'
          }, {
            value: 'ID'
          }, {
            value: 'IL'
          }, {
            value: 'IN'
          }, {
            value: 'IA'
          }, {
            value: 'KS'
          }, {
            value: 'KY'
          }, {
            value: 'LA'
          }, {
            value: 'ME'
          }, {
            value: 'MD'
          }, {
            value: 'MA'
          }, {
            value: 'MI'
          }, {
            value: 'MN'
          }, {
            value: 'MS'
          }, {
            value: 'MO'
          }, {
            value: 'MT'
          }, {
            value: 'NE'
          }, {
            value: 'NV'
          }, {
            value: 'NH'
          }, {
            value: 'NJ'
          }, {
            value: 'NM'
          }, {
            value: 'NY'
          }, {
            value: 'NC'
          }, {
            value: 'ND'
          }, {
            value: 'OH'
          }, {
            value: 'OK'
          }, {
            value: 'OR'
          }, {
            value: 'PA'
          }, {
            value: 'RI'
          }, {
            value: 'SC'
          }, {
            value: 'SD'
          }, {
            value: 'TN'
          }, {
            value: 'TX'
          }, {
            value: 'UT'
          }, {
            value: 'VT'
          }, {
            value: 'VA'
          }, {
            value: 'WA'
          }, {
            value: 'WV'
          }, {
            value: 'WI'
          }, {
            value: 'WY'
          }
        ],
        zip: '',
        countries: [
          { value: 'United States of America', label: 'USA' }
        ],
        memberName: '',
        addlMemberNames: ''
    }

    onNameInput(companyName) {
        this.setState({ companyName });
    }

    onAltNameInput = (event) => {
        this.setState({ altNames: event.target.value });
    }

    onFirstNameInput = (event) => {
        this.setState({ firstName: event.target.value });
    }

    onLastNameInput = (event) => {
        this.setState({ lastName: event.target.value });
    }

    onEmailInput = (event) => {
        this.setState({ email: event.target.value });
    }

    onPhoneNumInput = (event) => {
        this.setState({ phoneNum: event.target.value });
    }

    onStreetInput = (event) => {
        this.setState({ streetAddress: event.target.value })
    }

    onStreetTwoInput = (event) => {
        this.setState({ streetAddressTwo: event.target.value })
    }

    onCityInput = (event) => {
        this.setState({ city: event.target.value });
    }

    onStatesSelect = (event) => {

        for(index = 0; index < this.state.usStates.length; index++ ) {
            index = this.state.usStates[index];
        }

        this.setState({ usStates: event.value.target.value })
    }

    onZipInput = (event) => {
        this.setState({ zip: event.target.value });
    }

    onMemberInput = (event) => {
        this.setState({ memberName: event.target.value });
    }

    onAddlMemberInput = (event) => {
        this.setState({ addlMemberNames: event.target.value });
    }

    handleSubmit(event) {
    
        event.preventDefault();

        alert(`
            The name '${this.state.companyName}' was submitted. 
            The alternate name '${this.state.altNames}' was submitted.
            The first name for order delivery is '${this.state.firstName}'.
            The last name for order delivery is '${this.state.lastName}'.
            The email address is '${this.state.email}'.
            The phone number is ${this.state.phoneNum}.
            The address is ${this.state.streetAddressTwo} ${this.state.streetAddress} ${this.state.city}, 
            ${this.state.usStates[4].value} ${this.state.zip}.
            LLC members include: ${this.state.memberName} ${this.state.addlMemberNames}.
        `);
         
        this.props.saveAndNext(this.state);
        
    };
    
    render(){
        return (
            <div>
                <div>{this.props.active}</div>
                <div>{this.props.companyName}</div>

                <Form labelWidth="100" className="demo-dynamic">
 
                {/*
                    <Collapse>
                        <Collapse.Item title="Company" name="1">
                */}
                            <Layout.Row>
                                <Layout.Col span="12">
                                    <Form.Item>
                                        <div>State of Incorporation</div>
                                        <Input disabled placeholder="Delaware" value={this.state.stateOfIncoporation} />
                                    </Form.Item>
                                </Layout.Col>
                                <Layout.Col span="12">
                                    <Form.Item>
                                        <div>Type</div>
                                        <Input disabled placeholder="LLC" value={this.state.type} />
                                    </Form.Item>
                                </Layout.Col>  
                            </Layout.Row>
                            <Layout.Row>
                                <Layout.Col span='12'>
                                    <Form.Item>
                                          <div>Name</div>
                                          <Input 
                                              type='text' 
                                              value={this.state.companyName}
                                              onChange={this.onNameInput.bind(this)} 
                                          />
                                    </Form.Item>
                                </Layout.Col>
                                <Layout.Col span='12'>
                                    <Form.Item>
                                        <div>Alternative name(s)</div>
                                        <input
                                            type='text'
                                            value={this.state.altNames}
                                            onChange={this.onAltNameInput.bind(this)}
                                        />
                                    </Form.Item>
                                </Layout.Col>
                            </Layout.Row>
                    {/*        
                        </Collapse.Item>

                        <Collapse.Item title="Contact" name="2">
                    */}
                            <h3>Order Delivery</h3>
                                <Layout.Row>
                                  <Layout.Col span='12'>
                                      <Form.Item>
                                          <div>First name</div>
                                          <input 
                                              type='text'
                                              value={this.state.firstName}
                                              onChange={this.onFirstNameInput.bind(this)}
                                          />
                                      </Form.Item>
                                  </Layout.Col>
                                  <Layout.Col span='12'>
                                      <Form.Item>
                                          <div>Last Name</div>
                                          <input 
                                              type='text'
                                              value={this.state.lastName}
                                              onChange={this.onLastNameInput.bind(this)}
                                          />
                                      </Form.Item>
                                  </Layout.Col>
                                </Layout.Row>

                                <Layout.Row>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Email address</div>
                                            <input 
                                                type='email'
                                                value={this.state.email}
                                                onChange={this.onEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Phone Number</div>
                                            <input 
                                                type='text'
                                                value={this.state.phoneNum}
                                                onChange={this.onPhoneNumInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                </Layout.Row>

                                <Layout.Row>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Street address</div>
                                            <input
                                                type='text'
                                                value={this.state.streetAddress}
                                                onChange={this.onStreetInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Street address continued</div>
                                            <input
                                                type='text'
                                                value={this.state.streetAddressTwo}
                                                onChange={this.onStreetTwoInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                </Layout.Row>
                                <Layout.Row>
                                    <Layout.Col span='11'>
                                        <Form.Item>
                                            <div>City</div>
                                            <input 
                                                type='text' 
                                                value={this.state.city}
                                                onChange={this.onCityInput.bind(this)}    
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span='5'>
                                        <Form.Item>
                                            <div>State</div>
                                            <Select value={this.state.value}> {
                                                this.state.usStates.map(usState => {
                                                    return  <Select.Option 
                                                                key={usState.value} 
                                                                value={usState.value} 
                                                                onChange={usState.value}
                                                            />
                                                })
                                            } </Select>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span="8">
                                        <Form.Item>
                                            <div>Zip Code</div>
                                            <input 
                                                type="text"
                                                value={this.state.zip}
                                                onChange={this.onZipInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span='24'>
                                        <Form.Item>
                                            <div>Country</div>
                                            <Select value={ this.state.value }> {
                                                this.state.countries.map(country => {
                                                    return  <Select.Option
                                                                key={country.value}
                                                                label={country.label}
                                                                value={country.value}
                                                            />
                                                })
                                            } </Select>
                                        </Form.Item>
                                    </Layout.Col>
                                </Layout.Row>
                        {/*
                            </Collapse.Item>

                            <Collapse.Item title="Legal Parties" name="3">
                        */}
                                <h3>Members</h3>
                                <Layout.Row>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Name</div>
                                            <input
                                                type='text'
                                                value={this.state.memberName}
                                                onChange={this.onMemberInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col span='12'>
                                        <Form.Item>
                                            <div>Additional members(if applicable)</div>
                                            <input
                                                type='text'
                                                value={this.state.addlMemberNames}
                                                onChange={this.onAddlMemberInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Layout.Col>
                                </Layout.Row>
                    {/*
                            </Collapse.Item>
                        </Collapse>
                    */}
                    </Form>
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Next step
                </Button>
            </div>
        )
    };
}

export default InfoContainer;
        /*
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
                states: [],
                country: [{
                  value: 'USA',
                  label: 'United States of America'
                }],
            },
            value: ''
        };
  
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
    */

    /*
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
    */
