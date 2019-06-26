import React from 'react';
import { Steps, Menu, Button } from 'element-react/next';

import InfoContainer from './InfoContainer';
import OptionsContainer from './OptionsContainer';
import PayContainer from './PayContainer';

const axios = require('axios');

// Config for Axios
const config = {     
    headers: { 'content-type': 'application/json' }
}

class App extends React.Component { 
    // Function overriding React.Component constructor() 
    constructor(props) {
        // Calls code in parent(React.Component)
        super(props);

        this.state = {
            // Toggles nav steps
            start: false,
            active: 1,
            form: {
                stateOfIncorporation: 'Delaware',
                type: 'LLC'
            }
        };
    }

    onNextStep() {
        let active = this.state.active + 1;
            if (active > 3) {
                active = 1;
            }
        this.setState({ active });
    }
    onBack() {
        let active = this.state.active - 1;
            if (active < 1) {
                active = 1;
            }
        this.setState({ active });
    }

    saveForm = (data) => {
        this.setState({form: Object.assign(this.state.form, data)});
    }

    saveAndNext = (data) => {
       this.saveForm(data);
       this.onNextStep();
       console.log(this.state)
    }

    saveAndBack = (data) => {
        this.saveForm(data);
        this.onBack();
    }

    startForm = () => {
       this.setState({start: true});
    }

    
    /*
    finalSubmit = () => {
        alert(JSON.stringify(this.state.form));
        console.log(this.state)
        axios.post('/api/v01/test', JSON.stringify(this.state.form), config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            }) 
    }
    */

    render() {

        let pageContent;
        let headerContent;
        let activeContent = this.state.active;

        if (this.state.start){
           if (activeContent === 1) {
               pageContent = (
                   <div>
                       <InfoContainer 
                           active={this.state.form.active} 
                           companyName={this.state.form.companyName}
                           altName={this.state.form.altName}
                           firstName={this.state.form.firstName}
                           lastName={this.state.form.lastName}
                           email={this.state.form.email}
                           phoneNum={this.state.form.phoneNum}
                           streetAddress={this.state.form.streetAddress}
                           streetAddressTwo={this.state.form.streetAddressTwo}
                           city={this.state.form.city}
                           usState={this.state.form.usState}
                           zip={this.state.form.zip}
                           memberName={this.state.form.memberName}
                           addlMemberNames={this.state.form.addlMemberNames}
                           saveAndNext={this.saveAndNext}
                       />
                   </div>
               )
           } else if (activeContent === 2) {
               pageContent =(
                   <div>
                        <OptionsContainer 
                           companyName={this.state.form.companyName} 
                           active={this.state.form.active}
                           package={this.state.form.package}
                           certifiedCopies={this.state.form.certifiedCopies}
                           certifiedCopiesWApostille={this.state.form.certifiedCopiesWApostille}
                           goodStandingCopies={this.state.form.goodStandingCopies}
                           goodStandingCopiesWApostille={this.state.form.goodStandingCopiesWApostille}
                           servicesList={this.state.form.servicesList}
                           deliveryOption={this.state.form.deliveryOption}
                           specialRequests={this.state.form.requests}
                           saveAndNext={this.saveAndNext}
                           onBack={this.saveAndBack}
                        />
                   </div>
               )
           } else {
               pageContent = (
                   <div>
                       <PayContainer 
                            companyName={this.state.form.companyName} 
                            stateOfIncorporation={this.state.form.stateOfIncorporation}
                            type={this.state.form.type}
                            altName={this.state.form.altName}
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            phoneNum={this.state.form.phoneNum}
                            streetAddress={this.state.form.streetAddress}
                            streetAddressTwo={this.state.form.streetAddressTwo}
                            city={this.state.form.city}
                            usState={this.state.form.usState}
                            zip={this.state.form.zip}
                            country={this.state.form.country}
                            memberName={this.state.form.memberName}
                            addlMemberNames={this.state.form.addlMemberNames}

                            llcPackage={this.state.form.llcPackage}
                            certifiedCopies={this.state.form.certifiedCopies}
                            certifiedCopiesWApostille={this.state.form.certifiedCopiesWApostille}
                            goodStandingCopies={this.state.form.goodStandingCopies}
                            goodStandingCopiesWApostille={this.state.form.goodStandingCopiesWApostille}
                            servicesList={this.state.form.servicesList}
                            deliveryOption={this.state.form.deliveryOption}
                            specialRequests={this.state.form.requests}

                            saveForm={this.saveForm}
                            onBack={this.saveAndBack}
                            formData={JSON.stringify(this.state.form)}
                       />
                   </div>
               )
           }

        } else {
           pageContent = (
             <div>
                <Button className='text-center' onClick={this.startForm}>Create LLC in Five Minutes!</Button>
             </div>
           )
        }
       if (this.state.start) {
          headerContent = (
              <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
                  <Steps space={500} active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                      <Steps.Step title="Company & Contact"></Steps.Step>
                      <Steps.Step title="Options & Services"></Steps.Step>
                      <Steps.Step title="Review & Pay"></Steps.Step>
                  </Steps>
              </Menu>
          )
       } 

        return (
            <div style={{fontFamily: 'Helvetica Neue, helvetica'}}>
                { headerContent }
                { pageContent }
            </div>
        )
    }
}

export default App;
