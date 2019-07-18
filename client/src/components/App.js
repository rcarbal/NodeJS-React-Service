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
                                    
						            <div className="hero-illustration" style={{zIndex: '1'}}>
							            <div className="hero-shape hero-shape-1">
							            	<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible"}}>
							            		<circle className="anime-element fadeup-animation" cx="20" cy="20" r="20" fill="#FFD8CD" fill-rule="evenodd"/>
							            	</svg>
							            </div>
							            <div className="hero-shape hero-shape-2">
							            	<svg width="88" height="88" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible"}}>
							            	    <circle class="anime-element fadeup-animation" cx="44" cy="44" r="44" fill="#FFD2DA" fill-rule="evenodd"/>
							            	</svg>
                                        </div>
                                    
                                        <div className="hero-main-shape">
                                            <svg width="940" height="647" viewBox="0 0 940 647" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{overflow: "visible"}}>
                                                <defs>
                                                    <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="hero-illustration-a">
                                                        <stop stop-color="#261FB6" offset="0%"/>
                                                        <stop stop-color="#4950F6" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="89.764%" y1="16.809%" x2="11.987%" y2="82.178%" id="hero-illustration-b">
                                                        <stop stop-color="#FC8464" offset="0%"/>
                                                        <stop stop-color="#FB5C32" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="100%" y1="23.096%" x2="4.439%" y2="96.586%" id="hero-illustration-c">
                                                        <stop stop-color="#1ADAB7" offset="0%"/>
                                                        <stop stop-color="#55EBD0" offset="100%"/>
                                                    </linearGradient>
                                                    <filter x="-13%" y="-150%" width="126.1%" height="400%" filterUnits="objectBoundingBox" id="hero-illustration-d">
                                                        <feGaussianBlur stdDeviation="32" in="SourceGraphic"/>
                                                    </filter>
                                                    <linearGradient x1="0%" y1="100%" x2="46.694%" y2="42.915%" id="hero-illustration-f">
                                                        <stop stop-color="#EEF1FA" offset="0%"/>
                                                        <stop stop-color="#FFF" offset="100%"/>
                                                    </linearGradient>
                                                    <rect id="hero-illustration-e" width="800" height="450" rx="4"/>
                                                    <linearGradient x1="100%" y1="-12.816%" x2="0%" y2="-12.816%" id="hero-illustration-g">
                                                        <stop stop-color="#D2DAF0" stop-opacity="0" offset="0%"/>
                                                        <stop stop-color="#D2DAF0" offset="50.045%"/>
                                                        <stop stop-color="#D2DAF0" stop-opacity="0" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="116.514%" y1="-21.201%" x2="0%" y2="100%" id="hero-illustration-h">
                                                        <stop stop-color="#55EBD0" offset="0%"/>
                                                        <stop stop-color="#4950F6" offset="100%"/>
                                                    </linearGradient>
                                                    <path id="hero-illustration-j" d="M0 0h308v288H0z"/>
                                                    <filter x="-15.6%" y="-12.5%" width="139%" height="141.7%" filterUnits="objectBoundingBox" id="hero-illustration-i">
                                                        <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                                        <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                                        <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                                                    </filter>
                                                    <circle id="hero-illustration-k" cx="16" cy="16" r="16"/>
                                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-m">
                                                        <stop stop-color="#C6FDF3" offset="0%"/>
                                                        <stop stop-color="#C6FDF3" stop-opacity="0" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="2.875%" y1="89.028%" x2="99.412%" y2="6.885%" id="hero-illustration-n">
                                                        <stop stop-color="#83F0DD" offset="0%"/>
                                                        <stop stop-color="#1ADAB7" offset="50.924%"/>
                                                        <stop stop-color="#55EBD0" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="50%" y1="1.569%" x2="50%" y2="97.315%" id="hero-illustration-o">
                                                        <stop stop-color="#FF97AA" offset="0%"/>
                                                        <stop stop-color="#FF6381" offset="100%"/>
                                                    </linearGradient>
                                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-p">
                                                        <stop stop-color="#FCAC96" offset="0%"/>
                                                        <stop stop-color="#FC8464" offset="100%"/>
                                                    </linearGradient>
                                                    <circle id="hero-illustration-r" cx="28" cy="28" r="28"/>
                                                    <filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-q">
                                                        <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                                        <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                                        <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                                                    </filter>
                                                    <circle id="hero-illustration-t" cx="36" cy="36" r="36"/>
                                                    <filter x="-66.7%" y="-50%" width="266.7%" height="266.7%" filterUnits="objectBoundingBox" id="hero-illustration-s">
                                                        <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                                        <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                                        <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                                                    </filter>
                                                    <circle id="hero-illustration-v" cx="28" cy="28" r="28"/>
                                                    <filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-u">
                                                        <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                                        <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                                        <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                                                    </filter>
                                                    <circle id="hero-illustration-x" cx="24" cy="24" r="24"/>
                                                    <filter x="-100%" y="-75%" width="350%" height="350%" filterUnits="objectBoundingBox" id="hero-illustration-w">
                                                        <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                                        <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                                        <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                                                    </filter>
                                                </defs>
                                                
                                                <g fill="none" fill-rule="evenodd">
                                                    <path className="anime-element stroke-animation" d="M600,300 C600,465.685425 465.685425,600 300,600 C134.314575,600 1.3749042e-14,465.685425 3.60373576e-15,300 C-6.54157051e-15,134.314575 134.314575,-1.29473326e-14 300,-2.30926389e-14 C465.685425,-3.32379452e-14 600,134.314575 600,300 Z" fill="url(#hero-illustration-a)" stroke="#4950F6"/>
                                                    <g transform="translate(435 518)">
                                                        <circle className="anime-element fadeup-animation" fill="url(#hero-illustration-b)" cx="106" cy="32" r="32"/>
                                                        <circle className="anime-element fadeup-animation" fill="url(#hero-illustration-c)" cx="12" cy="117" r="12"/>
                                                    </g>
                                                    <g className="anime-element fadeleft-animation">
                                                        <g transform="translate(103 75)">
                                                            <path fill-opacity=".24" fill="#11103E" filter="url(#hero-illustration-d)" d="M32 410h736v64H32z"/>
                                                            <use fill="url(#hero-illustration-f)" xlinkHref="#hero-illustration-e"/>
                                                        </g>
                                                        <g transform="translate(123 87)">
                                                            <circle fill="#D2DAF0" cx="4" cy="4" r="4"/>
                                                            <circle fill="#D2DAF0" cx="20" cy="4" r="4"/>
                                                            <circle fill="#D2DAF0" cx="36" cy="4" r="4"/>
                                                            <path fill-opacity=".56" fill="#FFF" d="M736 2h24v4h-24z"/>
                                                            <path fill="url(#hero-illustration-g)" d="M27 20h706v2H27z"/>
                                                        </g>
                                                        <g transform="translate(396 157)">
                                                            <path fill="#FFF" d="M0 0h308v144H0z"/>
                                                            <path fill="#EEF1FA" d="M28 119h252v1H28zM28 94h252v1H28zM28 69h252v1H28zM28 44h252v1H28z"/>
                                                            <path stroke="url(#hero-illustration-h)" stroke-width="3" d="M26 119l49.19-38.316 14.615 19.035 16.36-19.035 31.306 4.272 33.079-23.54 34.86 38.303 15.625-50.412 16.356 12.109 16.472-12.11 15.075 21.443 16.976-21.442"/>
                                                            <rect fill="#D2DAF0" x="28" y="20" width="24" height="4" rx="2"/>
                                                        </g>
                                                        <g>
                                                            <path fill="#FFF" d="M396 333h308v144H396z"/>
                                                            <path fill="#EEF1FA" d="M424 452h252v1H424zM424 427h252v1H424zM424 402h252v1H424zM424 377h252v1H424z"/>
                                                            <path fill="url(#hero-illustration-o)" d="M28 24h12v96H28z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-p)" d="M52 67h12v53H52z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-o)" d="M76 24h12v96H76z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-p)" d="M100 82h12v38h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-o)" d="M124 45h12v75h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-p)" d="M148 67h12v53h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-o)" d="M172 82h12v38h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-p)" d="M196 45h12v75h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-o)" d="M220 67h12v53h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-p)" d="M244 82h12v38h-12z" transform="translate(396 333)"/>
                                                            <path fill="url(#hero-illustration-o)" d="M268 45h12v75h-12z" transform="translate(396 333)"/>
                                                        </g>
                                                    </g>
                                                
                                                    
                                                    <g className="anime-element fadeleft-animation">
                                                        <g transform="translate(56 157)">
                                                            <use fill="#000" filter="url(#hero-illustration-i)" xlinkHref="#hero-illustration-j"/>
                                                            <use fill="#FFF" xlinkHref="#hero-illustration-j"/>
                                                            <path fill="#EEF1FA" d="M0 191h308v1H0zM28 44h252v1H28z"/>
                                                            <rect fill="#D2DAF0" x="28" y="20" width="24" height="4" rx="2"/>
                                                            <rect fill="#ABABC9" x="28" y="216" width="64" height="4" rx="2"/>
                                                            <rect fill="#D2DAF0" x="256" y="216" width="24" height="4" rx="2"/>
                                                            <rect fill="#D2DAF0" x="64" y="20" width="24" height="4" rx="2"/>
                                                            <g transform="translate(28 232)">
                                                                <mask id="hero-illustration-l" fill="#fff">
                                                                    <use xlinkHref="#hero-illustration-k"/>
                                                                </mask>
                                                                <use fill="#ABABC9" xlinkHref="#hero-illustration-k"/>
                                                                </g>
                                                            <path d="M308 89.82v101.063H0v-33.728l3.038-3.799 10.783-7.894 8.687-2.646h9.246l21.198 10.54 9.852 3.251 6.608-3.25 8.644-12.005 6.87-6.388 7.892-1.512 10.906 6.066 13.895 15.802 11.188 5.944h5.692l7.314-3.28 7.19-9.37 5.879-13.65 10.774-21.657 8.34-14.026 9.243-12.336 9.594-7.043 15.407-3.881 6.362 1.497 14.939 7.765 10.531 8.166 13.17 12.338 12.362 7.52 12.756 3.746 8.366-1.542 8.96-5.366 10.183-15.377L308 89.82z" fill="url(#hero-illustration-m)"/>
                                                            <path d="M308 84.066v8.885c-13.215 32.373-36.292 33.308-68.007 2.699-18.456-17.814-33.74-21.583-47.058-13.978-10.675 6.097-19.593 18.713-29.342 38.963-2.594 5.388-10.386 22.73-11.136 24.336-11.298 24.181-27.067 24.181-45.624.363-12.17-13.657-21.486-13.657-29.221-.248-3.596 6.232-6.872 9.923-10.352 11.627-3.677 1.8-7.4 1.412-12.305-.82-2.416-1.098-12.51-6.8-14.82-7.981a101.498 101.498 0 0 0-4.586-2.208c-11.912-5.359-23.695-.926-35.549 13.65v-4.62c11.94-13.38 24.255-17.4 36.78-11.766 1.571.707 3.13 1.46 4.72 2.273 2.416 1.235 12.425 6.889 14.697 7.922 4.167 1.895 7.013 2.192 9.744.855 2.836-1.388 5.748-4.67 9.072-10.432 8.843-15.326 20.622-15.326 34.123-.172 17.344 22.257 30.338 22.257 40.603.287.734-1.572 8.536-18.936 11.151-24.368 9.998-20.768 19.193-33.776 30.557-40.266 14.618-8.348 31.298-4.234 50.63 14.424 32.601 31.465 54.068 28.367 65.923-9.425z" fill="url(#hero-illustration-n)" fill-rule="nonzero"/>
                                                        </g>
                                                    </g>
                                        
                                                    <g>
                                                        <g className="anime-element fadeleft-animation">
                                                            <g transform="translate(164 483)">
                                                                <use fill="#000" filter="url(#hero-illustration-q)" xlinkHref="#hero-illustration-r"/>
                                                                <use fill="#FFF" xlinkHref="#hero-illustration-r"/>
                                                            </g>
                                                            <path d="M200 506c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4h-.8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fill-rule="nonzero"/>
                                                        </g>
                                                        <g className="anime-element fadeleft-animation">
                                                            <g transform="translate(251 390)">
                                                                <use fill="#000" filter="url(#hero-illustration-s)" xlinkHref="#hero-illustration-t"/>
                                                                <use fill="#FFF" xlinkHref="#hero-illustration-t"/>
                                                            </g>
                                                            <g fill-rule="nonzero">
                                                                <path d="M290.56 415.485a2.137 2.137 0 1 0-4.066 1.32l5.526 17.004a2.137 2.137 0 0 0 2.6 1.325c1.135-.327 1.826-1.532 1.464-2.646l-5.525-17.003" fill="#DFA22F"/>
                                                                <path d="M281.996 418.267a2.137 2.137 0 0 0-4.065 1.321l5.526 17.003a2.137 2.137 0 0 0 2.6 1.325c1.134-.326 1.826-1.531 1.464-2.645l-5.525-17.004" fill="#3CB187"/>
                                                                <path d="M297.515 429.567a2.137 2.137 0 1 0-1.32-4.065l-17.004 5.526a2.137 2.137 0 0 0-1.325 2.6c.327 1.134 1.532 1.825 2.646 1.464l17.003-5.525" fill="#CE1E5B"/>
                                                                <path fill="#392538" d="M282.735 434.37l4.064-1.321-1.32-4.065-4.065 1.321 1.321 4.064"/>
                                                                <path d="M291.298 431.587l4.064-1.32-1.32-4.066-4.065 1.321 1.321 4.065" fill="#BB242A"/>
                                                                <path d="M294.733 421.004a2.137 2.137 0 0 0-1.321-4.066l-17.003 5.527a2.136 2.136 0 0 0-1.325 2.6c.326 1.134 1.531 1.825 2.645 1.463l17.004-5.524" fill="#72C5CD"/>
                                                                <path d="M279.952 425.806l4.065-1.32c-.5-1.537-.964-2.965-1.32-4.065l-4.066 1.322 1.321 4.063" fill="#248C73"/>
                                                                <path d="M288.515 423.024l4.065-1.32-1.321-4.066-4.065 1.321 1.321 4.065" fill="#62803A"/>
                                                            </g>
                                                        </g>
                                                        <g className="anime-element fadeleft-animation">
                                                            <g transform="translate(28 221)">
                                                                <use fill="#000" filter="url(#hero-illustration-u)" xlinkHref="#hero-illustration-v"/>
                                                                <use fill="#FFF" xlinkHref="#hero-illustration-v"/>
                                                            </g>
                                                            <text font-family="AppleColorEmoji, Apple Color Emoji" font-size="19" fill="#11103E" transform="translate(28 221)">
                                                                <tspan x="17" y="36">🤗</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="anime-element fadeleft-animation">
                                                            <g transform="translate(325 257)">
                                                                <use fill="#000" filter="url(#hero-illustration-w)" xlinkHref="#hero-illustration-x"/>
                                                                <use fill="#FFF" xlinkHref="#hero-illustration-x"/>
                                                            </g>
                                                            <text font-family="AppleColorEmoji, Apple Color Emoji" font-size="16" fill="#11103E" transform="translate(325 257)">
                                                                <tspan x="13" y="31">👋</tspan>
                                                            </text>
                                                        </g>
                                                    </g>   
                                                </g>
                                            </svg>
                                        </div>   
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
