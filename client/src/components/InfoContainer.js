import React from 'react';
import  { 
            Layout, 
            Input,
            Button,
            Form, 
            Select,
            Tooltip
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
                <Form>
                    <Tooltip effect='dark' content='Create a name for your limited liability corporation' placement='bottom'>
                        <h5 className='form_box_title'>Company Info</h5>
                    </Tooltip>
                    <div className="container card form_box">
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <label>State of Incorporation</label>
                                    <Input disabled placeholder="Delaware" value={this.state.stateOfIncoporation} />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <label>Type</label>
                                    <Input disabled placeholder="LLC" value={this.state.type} />
                                </Form.Item>
                            </div>  
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Tooltip effect='dark' content="Enter the name of your prospective LLC (name must end with 'LLC')." placement='bottom'>
                                    <Form.Item>
                                        <label>Company Name</label>
                                        <Input 
                                            type='text' 
                                            value={this.state.companyName}
                                            onChange={this.onNameInput.bind(this)} 
                                        />
                                    </Form.Item>
                                </Tooltip>
                            </div>
                            <div className='col'>
                                <Tooltip effect='dark' content='Enter another name in case your first choice is already in use.' placement='bottom'>
                                    <Form.Item>
                                        <label>Alternative Company Name</label>
                                        <Input
                                            type='text'
                                            value={this.state.altName}
                                            onChange={this.onAltNameInput.bind(this)}
                                        />
                                    </Form.Item>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
    
                    <Tooltip effect='dark' content='Address where your LLC documents will be sent' placement='bottom'>
                        <h5 className='form_box_title'>Order Delivery</h5>
                    </Tooltip>
                    <div className="container card form_box">
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <label>First name</label>
                                    <Input 
                                        type='text'
                                        value={this.state.firstName}
                                        onChange={this.onFirstNameInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <label>Last Name</label>
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
                                    <label>Email address</label>
                                    <Input 
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.onEmailInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <label>Phone Number</label>
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
                                    <label>Street address</label>
                                    <Input
                                        type='text'
                                        value={this.state.streetAddress}
                                        onChange={this.onStreetInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <label>Street address continued</label>
                                    <Input
                                        type='text'
                                        value={this.state.streetAddressTwo}
                                        onChange={this.onStreetTwoInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <Form.Item>
                                    <label>City</label>
                                    <Input 
                                        type='text' 
                                        value={this.state.city}
                                        onChange={this.onCityInput.bind(this)}    
                                    />
                                </Form.Item>
                            </div>
                            <div className='col-2'>
                                <Form.Item>
                                    <label>State</label>

                                    <select value={this.state.usState} onChange={this.onStateSelect} className='custom-select'>
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
                            <div className='col-3'>
                                <Form.Item>
                                    <label>Zip Code</label>
                                    <Input 
                                        type="text"
                                        value={this.state.zip}
                                        onChange={this.onZipInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col-3'>
                                <Form.Item>
                                    <label>Country</label>
                                    <select value={this.state.country} disabled={true} className='custom-select'>
                                        <option>USA</option>
                                    </select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    <Tooltip effect='dark' content="Add names of your LLC's legal members" placement='bottom'>
                        <h5 className='form_box_title'>Members</h5>
                    </Tooltip>    
                    <div className="container card form_box">
                        <div className='row'>
                            <div className='col'>
                                <Form.Item>
                                    <label>Name</label>
                                    <Input
                                        type='text'
                                        value={this.state.memberName}
                                        onChange={this.onMemberInput.bind(this)}
                                    />
                                </Form.Item>
                            </div>
                            <div className='col'>
                                <Form.Item>
                                    <label>Additional members(if applicable)</label>
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
                <Button type='submit' onClick={this.handleSubmit.bind(this)} style={{margin: '0 2.5% 2.5% 90%'}}>
                    Next step
                </Button>
            </div>
        )
    };
}

export default InfoContainer;
