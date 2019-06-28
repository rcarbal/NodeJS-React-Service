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

        this.props.saveAndNext(this.state);
    };
    
    render(){
        return (
            <div>
                <Form className="demo-dynamic">
                    <div className="container card" style={{marginTop: '2.5%', marginBottom: '2.5%'}}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>State of Incorporation</div>
                                    <Input disabled placeholder="Delaware" value={this.state.stateOfIncoporation} />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Type</div>
                                    <Input disabled placeholder="LLC" value={this.state.type} />
                                </Form.Item>
                            </div>  
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Form.Item required={true}>
                                    <div>Name</div>
                                    <Input 
                                        type='text' 
                                        value={this.state.companyName}
                                        onChange={this.onNameInput.bind(this)} 
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Alternative name(s)</div>
                                    <Input
                                        type='text'
                                        value={this.state.altName}
                                        onChange={this.onAltNameInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
    
                    <h5 style={{marginLeft: '10%'}}>Order Delivery</h5>
                    <div className="container card" style={{ marginBottom: '2.5%'}}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>First name</div>
                                    <Input 
                                        type='text'
                                        value={this.state.firstName}
                                        onChange={this.onFirstNameInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Last Name</div>
                                    <Input 
                                        type='text'
                                        value={this.state.lastName}
                                        onChange={this.onLastNameInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>Email address</div>
                                    <Input 
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.onEmailInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Phone Number</div>
                                    <Input 
                                        type='text'
                                        value={this.state.phoneNum}
                                        onChange={this.onPhoneNumInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>Street address</div>
                                    <Input
                                        type='text'
                                        value={this.state.streetAddress}
                                        onChange={this.onStreetInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Street address continued</div>
                                    <Input
                                        type='text'
                                        value={this.state.streetAddressTwo}
                                        onChange={this.onStreetTwoInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>City</div>
                                    <Input 
                                        type='text' 
                                        value={this.state.city}
                                        onChange={this.onCityInput.bind(this)}    
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>State</div>

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
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Zip Code</div>
                                    <Input 
                                        type="text"
                                        value={this.state.zip}
                                        onChange={this.onZipInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Country</div>
                                    <Select value={this.state.country} disabled={true}>
                                        <Select.Option>USA</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                        
                    <h5 style={{marginLeft: '10%'}}>Members</h5>
                    <div className="container card" style={{ marginBottom: '2.5%'}}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <div>Name</div>
                                    <Input
                                        type='text'
                                        value={this.state.memberName}
                                        onChange={this.onMemberInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <div>Additional members(if applicable)</div>
                                    <Input
                                        type='text'
                                        value={this.state.addlMemberNames}
                                        onChange={this.onAddlMemberInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
                <Button type='submit' onClick={this.handleSubmit.bind(this)} style={{margin: '0 2.5% 2.5% 90%',}}>
                    Next step
                </Button>
            </div>
        )
    };
}

export default InfoContainer;
