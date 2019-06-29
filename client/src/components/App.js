import React from 'react';
import { Steps, Menu, Button } from 'element-react';

import InfoContainer from './InfoContainer';
import OptionsContainer from './OptionsContainer';
import PayContainer from './PayContainer';

import '../Smooth.css'

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

    render() {

        let pageContent;
        let headerContent;
        let activeContent = this.state.active;

        if (this.state.start){
           if (activeContent === 1) {
               pageContent = (
                   <div>
                       <InfoContainer className="container"
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
                            llcPackage={this.state.form.llcPackage}
                            certifiedCopies={this.state.form.certifiedCopies}
                            certifiedCopiesWApostille={this.state.form.certifiedCopiesWApostille}
                            goodStandingCopies={this.state.form.goodStandingCopies}
                            goodStandingCopiesWApostille={this.state.form.goodStandingCopiesWApostille}
                            servicesList={this.state.form.servicesList}
                            deliveryOption={this.state.form.deliveryOption}
                            specialRequests={this.state.form.requests}
                            paymentTotal={this.state.form.paymentTotal}
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
                            paymentTotal={this.state.form.paymentTotal}

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
                    <div className='container-fluid'>
                        <h1>SmoothLegal</h1>
                        <div style={{marginTop: '5%', marginBottom: '5%'}}>
                            <img src='undraw_filing_system_b5d2.svg' className='card-image-top' />
                            <div>
                                <h3 className='card-title'>Leave the paperwork to us</h3>
                                <p className='card-text'>SmoothLegal helps you to effortlessly create and file your prospective LLC. Fill out your info in minutes and we'll take care of the rest!</p>
                            </div>
                        </div>   
                    <div className='d-flex justify-content-end' style={{marginBottom: '5%', marginRight: '5%'}}>
                        <Button className='text-center' onClick={this.startForm}>Form your LLC now</Button>
                    </div>
                    </div>
                </div>
            )
        }
        if (this.state.start) {
            headerContent = (
                <div>
                <Menu defaultActive="1" className="container-fluid" mode="horizontal">
                    <Steps active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                        <Steps.Step title='Company & Contacts'></Steps.Step>
                        <Steps.Step title="Options & Services"></Steps.Step>
                        <Steps.Step title="Review & Pay"></Steps.Step>
                    </Steps>
                </Menu>
                </div>
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
