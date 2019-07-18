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
			            <div className="header-shape header-shape-1">
				            <svg width="337" height="222" viewBox="0 0 337 222" xmlns="http://www.w3.org/2000/svg">
				                <defs>
				                    <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="header-shape-1">
				                        <stop stop-color="#E0E1FE" stop-opacity="0" offset="0%"/>
				                        <stop stop-color="#E0E1FE" offset="100%"/>
				                    </linearGradient>
				                </defs>
				                <path d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z" transform="translate(-1103)" fill="url(#header-shape-1)" fill-rule="evenodd"/>
				            </svg>
			            </div>
			            <div className="header-shape header-shape-2">
				            <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{overflow: 'visible'}}>
				                <defs>
				                    <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
				                        <stop stop-color="#FF3058" offset="0%"/>
				                        <stop stop-color="#FF6381" offset="100%"/>
				                    </linearGradient>
				                </defs>
				                <circle className="anime-element fadeup-animation" cx="64" cy="64" r="64" fill="url(#header-shape-2)" fill-rule="evenodd"/>
				            </svg>
			            </div>

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

                    <Footer />
                    
                    {/*
                    <Navbar />
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8' style={{marginTop: '2.5%', marginBottom: '2.5%'}}>
                                <img src='undraw_filing_system_b5d2.svg' className='card-image-top' alt='Filing papers' />
                            </div> 
                            <div className='col-4' style={{marginTop: '15%'}}>
                                <h2>Leave the paperwork to us.</h2>
                                <p style={{padding: '2.5%', textAlign: 'justify'}}>SmoothLegal helps you to effortlessly create and file your prospective LLC. Fill out your info in minutes and we'll take care of the rest!</p>
                                <div className='d-flex justify-content-center'>
                                    <Button className='text-center' onClick={this.startForm} style={{marginTop: '2.5%'}}>Form your LLC now</Button>                 
                                </div>
                            </div>  
                        </div>
                    </div>
                    */}
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
            </div>
        )
    }
}

export default App;
