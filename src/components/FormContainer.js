import React from 'react';
import  { 
            Layout, 
            Input, 
            Button,
            Steps, 
            Menu, 
            Form, 
            Select
        } from 'element-react/next';

class FormContainer extends React.Component {
    
  /*
    constructor(props) {
        super(props);

        this.state = {
            // Toggles nav steps
            active: 0,
            form: {
                stateOfIncoporation: 'Delaware',
                type: 'LLC',
                companyName: ''
            }
        };
    }
  */

    state = {
        active: 0,
        stateOfIncoporation: 'Delaware',
        type: 'LLC',
        companyName: '',
        altnames: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        streetAddress: '',
        streetAddressTwo: '',
        city: '',
        usStates: [
          { value: 'AL',
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
          }
        ],
        zip: '',
        countries: [
          { value: 'United States of America', label: 'USA' }
        ]
    }

    onNameInput = (event) => {
        this.setState({ companyName: event.target.value });
    }

    onAltNameInput = (event) => {
        this.setState({ altnames: event.target.value });
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

    onStatesSelect = (selectedState, event) => {
      let index = this.state.usStates.indexOf(selectedState);


      this.setState({ usStates: event.target.value })
    }

    onZipInput = (event) => {
      this.setState({ zip: event.target.value });
    }

    handleSubmit(event) {
      
      event.preventDefault();

      alert(`
          The name '${this.state.companyName}' was submitted. 
          The alternate name '${this.state.altnames}' was submitted.
          The first name for order delivery is '${this.state.firstName}'.
          The last name for order delivery is '${this.state.lastName}'.
          The email address is '${this.state.email}'.
          The phone number is ${this.state.phoneNum}.
          The address is ${this.state.streetAddress} ${this.state.city}, 
          ${this.state.usStates[4].value} ${this.state.zip}.
      `);

      let active = this.state.active + 1;
        if (active > 3) {
          active = 0;
        }
        this.setState({ active });
    }

    render(){
      return (
        <div>
        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Steps space={500} active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
            <Steps.Step title="Company & Contact"></Steps.Step>
            <Steps.Step title="Options & Services"></Steps.Step>
            <Steps.Step title="Review & Pay"></Steps.Step>
          </Steps>
        </Menu>
        <Form ref="form" model={this.state} rules={this.state.rules} labelWidth="100" className="demo-dynamic">
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
                          <input 
                              type='text' 
                              value={this.state.companyName}
                              onChange={this.onNameInput} 
                          />
                    </Form.Item>
                </Layout.Col>
                <Layout.Col span='12'>
                    <Form.Item>
                        <div>Alternative name(s)</div>
                        <input
                            type='text'
                            value={this.state.altnames}
                            onChange={this.onAltNameInput}
                        />
                    </Form.Item>
                </Layout.Col>
            </Layout.Row>

            <h3>Order Delivery</h3>
            <Layout.Row>
              <Layout.Col span='12'>
                  <Form.Item>
                      <div>First name</div>
                      <input 
                          type='text'
                          value={this.state.firstName}
                          onChange={this.onFirstNameInput}
                      />
                  </Form.Item>
              </Layout.Col>
              <Layout.Col span='12'>
                  <Form.Item>
                      <div>Last Name</div>
                      <input 
                          type='text'
                          value={this.state.lastName}
                          onChange={this.onLastNameInput}
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
                            onChange={this.onEmailInput}
                        />
                    </Form.Item>
                </Layout.Col>
                <Layout.Col span='12'>
                    <Form.Item>
                        <div>Phone Number</div>
                        <input 
                            type='text'
                            value={this.state.phoneNum}
                            onChange={this.onPhoneNumInput}
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
                            onChange={this.onStreetInput}
                        />
                    </Form.Item>
                </Layout.Col>
                <Layout.Col span='12'>
                    <Form.Item>
                        <div>Street address continued</div>
                        <input
                            type='text'
                            value={this.state.streetAddressTwo}
                            onChange={this.onStreetTwoInput}
                        />
                    </Form.Item>
                </Layout.Col>
            </Layout.Row>
            <Layout.Row>
                <Layout.Col span='11'>
                    <Form.Item>
                        <input 
                            type='text' 
                            value={this.state.city}
                            onChange={this.onCityInput}    
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
                            onChange={this.onZipInput}
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
        </Form>

        <Button type='submit' onClick={this.handleSubmit.bind(this)}>
          Next step
        </Button> 
        </div>  
        
        
      )
    };
}
export default FormContainer;
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
