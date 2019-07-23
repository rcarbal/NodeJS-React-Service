import React from 'react';
import { Steps, Menu, Button } from 'element-react';

import Navbar from './Navbar';
import InfoContainer from './InfoContainer';
import OptionsContainer from './OptionsContainer';
import PayContainer from './PayContainer';
import Footer from './Footer';

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
                            //addlMemberNames={this.state.form.addlMemberNames}
                            saveAndNext={this.saveAndNext}
                        />
                    </div>
                )
            } else if (activeContent === 2) {
                pageContent = (
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
                            //addlMemberNames={this.state.form.addlMemberNames}

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
                            onNextStep={this.onNextStep}
                            saveAndNext={this.saveAndNext}
                            onBack={this.saveAndBack}
                            formData={JSON.stringify(this.state.form)}

                            active={this.state.active}
                        />
                    </div>
                )
            }
        } else {
            pageContent = (
                <div>
                    <header className="site-header">
                        <div className="container">
                            <div className="site-header-inner">
                                <div className="brand header-brand">
                                    <h1 className="m-0">
                                    <a href='/' className="brand">
                                        <span className="fa-stack">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="far fa-paper-plane fa-stack-1x"></i>
                                        </span>
                                    </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main>  
                        <section className="hero">
                            <div className="container">
                                <div className="hero-inner">
						            <div className="hero-copy">
	                                    <h2 className="hero-title mt-0">Leave the paperwork to us.</h2>
	                                    <p className="hero-paragraph">SmoothLegal helps you to effortlessly create and file your prospective LLC. Fill out your info in minutes and we'll take care of the rest!</p>
							            <div className="hero-form field field-grouped">
							            	<div className="control">
							            		<a className="button button-primary button-block" onClick={this.startForm} href="#">Start your form</a>
							            	</div>
							            </div>
                                    </div>
                                    
						            <div className="hero-illustration">
                                        <img src='filingPapers.svg' className='card-image-top' alt='Filing papers' />   
                                    </div> 
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            )
        }
        if (this.state.start) {
            headerContent = (
                <div>
                    <Navbar />
                    <Menu defaultActive="1" className="container-fluid" mode="horizontal" className='border-top border-light' style={{background: '#11103E'}}>
                        <Steps active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                            <Steps.Step title="Company & Contact"></Steps.Step>
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
                <Footer />
            </div>
        )
    }
}

export default App;
