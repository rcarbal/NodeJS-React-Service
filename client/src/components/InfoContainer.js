import React from 'react';
import  { 
            Layout, 
            Input,
            Button,
            Form, 
            Select
        } from 'element-react/next';

class InfoContainer extends React.Component {
    
    state = {
        active: 0,
        stateOfIncoporation: 'Delaware',
        type: 'LLC',
        companyName: '',
        altName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        streetAddress: '',
        streetAddressTwo: '',
        city: '',
        usState: '',
        /*
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
        */
        
        zip: '',
        country: 'USA',
        memberName: '',
        addlMemberNames: ''
    }

    onNameInput(companyName) {
        this.setState({ companyName });
    }

    onAltNameInput(altName) {
        this.setState({ altName });
    }

    onFirstNameInput(firstName) {
        this.setState({ firstName });
    }

    onLastNameInput(lastName) {
        this.setState({ lastName });
    }

    onEmailInput(email) {
        this.setState({ email });
    }

    onPhoneNumInput(phoneNum) {
        this.setState({ phoneNum });
    }

    onStreetInput(streetAddress) {
        this.setState({ streetAddress })
    }

    onStreetTwoInput(streetAddressTwo) {
        this.setState({ streetAddressTwo })
    }

    onCityInput(city) {
        this.setState({ city });
    }

    /*
    onStatesSelect(usStates) {
        this.setState({ usStates })
    }

    onStateSelect(usStates) {
        this.setState({ usStates })
    }
   */

   onStateSelect = (event) => {
       this.setState({ usState: event.target.value });
   }
   
   
    onZipInput(zip) {
        this.setState({ zip });
    }

    onCountrySelect = (event) => {
        this.setState({ country: event.target.value });
    }

    onMemberInput(memberName) {
        this.setState({ memberName });
    }

    onAddlMemberInput(addlMemberNames) {
        this.setState({ addlMemberNames });
    }

    handleSubmit(event) {
    
        event.preventDefault();

        alert(`
            The name '${this.state.companyName}' was submitted. 
            The alternate name '${this.state.altName}' was submitted.
            The first name for order delivery is '${this.state.firstName}'.
            The last name for order delivery is '${this.state.lastName}'.
            The email address is '${this.state.email}'.
            The phone number is ${this.state.phoneNum}.
            The address is ${this.state.streetAddressTwo} ${this.state.streetAddress} ${this.state.city}, 
            ${this.state.usState} ${this.state.zip}.
            LLC members include: ${this.state.memberName} ${this.state.addlMemberNames}.
        `);
         
        this.props.saveAndNext(this.state);
        
    };
    
    render(){
        return (
            <div>
                <div>{this.props.active}</div>
                <div>{this.props.companyName}</div>

                <Form className="demo-dynamic">
                <div className="container card">
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
                                <Input
                                    type='text'
                                    value={this.state.altName}
                                    onChange={this.onAltNameInput.bind(this)}
                                />
                            </Form.Item>
                        </Layout.Col>
                    </Layout.Row>
                    </div>
                    
                    <h3>Order Delivery</h3>
                    <div className="container card">
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>First name</div>
                                    <Input 
                                        type='text'
                                        value={this.state.firstName}
                                        onChange={this.onFirstNameInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>Last Name</div>
                                    <Input 
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
                                    <Input 
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.onEmailInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>Phone Number</div>
                                    <Input 
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
                                    <Input
                                        type='text'
                                        value={this.state.streetAddress}
                                        onChange={this.onStreetInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>Street address continued</div>
                                    <Input
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
                                    <Input 
                                        type='text' 
                                        value={this.state.city}
                                        onChange={this.onCityInput.bind(this)}    
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='5'>
                                <Form.Item>
                                    <div>State</div>
                                            
                                            {/*
                                            <Select 
                                                value={this.state.usStates} 
                            
                                            > {
                                                this.state.usStates.map((usState) => {
                                                    return  <Select.Option 
                                                                key={usState.value} 
                                                                value={usState.value}
                                                                label={usState.value}
                                                                onClick={this.onStateSelect.bind(this)}
                                                            />
                                                })
                                            } </Select>
                                            */}
                                    
                                    <select value={this.state.usState} onChange={this.onStateSelect}>
                                        <option value='AL'>AL</option> <option value='AK'>AK</option> <option value='AR'>AR</option> <option value='AZ'>AZ</option> <option value='CA'>CA</option>
                                        <option value='CO'>CO</option> <option value='CT'>CT</option> <option value='DC'>DC</option> <option value='DE'>DE</option> <option value='FL'>FL</option>
                                        <option value='GA'>GA</option> <option value='HI'>HI</option> <option value='IA'>IA</option> <option value='ID'>ID</option> <option value='IL'>IL</option>
                                        <option value='IN'>IN</option> <option value='KS'>KS</option> <option value='KY'>KY</option> <option value='LA'>LA</option> <option value='MA'>MA</option>
                                        <option value='MD'>MD</option> <option value='ME'>ME</option> <option value='MI'>MI</option> <option value='MN'>MN</option> <option value='MO'>MO</option>
                                        <option value='MS'>MS</option> <option value='MT'>MT</option> <option value='NC'>NC</option> <option value='ND'>ND</option> <option value='NE'>NE</option>
                                        <option value='NH'>NH</option> <option value='NJ'>NJ</option> <option value='NM'>NM</option> <option value='NV'>NV</option> <option value='NY'>NY</option>
                                        <option value='OH'>OH</option> <option value='OK'>OK</option> <option value='OR'>OR</option> <option value='PA'>PA</option> <option value='RI'>RI</option>
                                        <option value='SC'>SC</option> <option value='SD'>SD</option> <option value='TN'>TN</option> <option value='TX'>TX</option> <option value='UT'>UT</option>
                                        <option value='VT'>VT</option> <option value='VA'>VA</option> <option value='WA'>WA</option> <option value='WV'>WV</option> <option value='WI'>WI</option>
                                        <option value='WY'>WY</option>
                                    </select>
                                            
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="8">
                                <Form.Item>
                                    <div>Zip Code</div>
                                    <Input 
                                        type="text"
                                        value={this.state.zip}
                                        onChange={this.onZipInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='24'>
                                <Form.Item>
                                    <div>Country</div>
                                            {/*
                                            <Select value={ this.state.value }> {
                                                this.state.countries.map(country => {
                                                    return  <Select.Option
                                                                key={country.value}
                                                                label={country.label}
                                                                value={country.value}
                                                            />
                                                })
                                            } </Select>
                                            */}
                                    <Select value={this.state.country} disabled={true}>
                                        <Select.Option>USA</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Layout.Col>
                        </Layout.Row>
                        </div>
                        
                        <h3>Members</h3>
                        <div className="container card">
                        <Layout.Row>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>Name</div>
                                    <Input
                                        type='text'
                                        value={this.state.memberName}
                                        onChange={this.onMemberInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span='12'>
                                <Form.Item>
                                    <div>Additional members(if applicable)</div>
                                    <Input
                                        type='text'
                                        value={this.state.addlMemberNames}
                                        onChange={this.onAddlMemberInput.bind(this)}
                                    />
                                </Form.Item>
                            </Layout.Col>
                        </Layout.Row>
                        </div>
                    </Form>
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Next step
                </Button>
            </div>
        )
    };
}

export default InfoContainer;
