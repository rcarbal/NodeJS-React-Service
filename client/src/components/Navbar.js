import React from 'react';

import { Dialog, Button, Form, Input } from 'element-react/next';

import '../Smooth.css'

class Navbar extends React.Component {
   
    state = {
        dialogVisible: false,
        dialogVisible2: false,
        loginForm: {
            email: '',
            password: ''
        },
        signUpForm: {
            email: '',
            password: ''
        },
        loginSubmitClicked: false,
        signUpSubmitClicked: false
    }
    
    loginEmailInput(loginEmail) {
        this.state.loginForm.email = loginEmail;
        this.setState({ loginEmail : loginEmail });
    }

    signUpEmailInput(signUpEmail) {
        this.state.signUpForm.email = signUpEmail;
        this.setState({ signUpEmail: signUpEmail });
    }

    onLogout(e) {
        e.preventDefault();

        let loginEmail = this.state.loginForm.email;
        let signUpEmail = this.state.signUpForm.email;
        let loginSubmitClicked = this.state.loginSubmitClicked;
        let signUpSubmitClicked = this.state.signUpSubmitClicked;

        if (loginEmail !== '' && signUpEmail === '' && loginSubmitClicked === true) {
            this.setState({ loginEmail: e.target.value });
            this.setState({ loginSubmitClicked: false})
        }
        if (loginEmail === '' && signUpEmail !== '' && signUpSubmitClicked === true) {
            this.setState({ signUpEmail: e.target.value });
            this.setState({ signUpSubmitClicked: false });
        }
    }

    render() {
        let loginEmail = this.state.loginForm.email;
        let signUpEmail = this.state.signUpForm.email;
        let loginSubmitClicked = this.state.loginSubmitClicked;
        let signUpSubmitClicked = this.state.signUpSubmitClicked;

        let signedIn;
        if (loginEmail !== '' && signUpEmail === '' && loginSubmitClicked === true) {
            signedIn = loginEmail;
        } else if (loginEmail === '' && signUpEmail !== '' && signUpSubmitClicked === true) {
            signedIn = signUpEmail;
        } else {
            signedIn = undefined;
        }

        if (signedIn === undefined) {
            return (
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a href='/' className="nav_brand">
                        <span className="fa-stack">
                            <i className="far fa-circle fa-stack-2x"></i>
                            <i className="far fa-paper-plane fa-stack-1x"></i>
                        </span>
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
                        <div className='nav-item'>
                            <button 
                                className="button-sm nav-button-primary button" 
                                onClick={ () => this.setState({ dialogVisible: true })} 
                                style={{margin: '3px'}}>
                                Login
                            </button>
                                <Dialog
                                    title="Login"
                                    visible={ this.state.dialogVisible }
                                    onCancel={ () => this.setState({ dialogVisible: false }) }
                                >
                                <Dialog.Body>
                                    <Form model={this.state.loginForm}>
                                        <Form.Item label="Email Address" labelWidth="120">
                                            <Input 
                                                type='email'
                                                value={this.state.loginForm.email}
                                                onChange={this.loginEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Password" labelWidth="120">
                                            <Input value={this.state.loginForm.password}></Input>
                                        </Form.Item>
                                    </Form>
                                </Dialog.Body>
            
                                <Dialog.Footer className="dialog-footer">
                                    <button 
                                        className='button button-primary' 
                                        onClick={ () => {
                                            this.setState({ dialogVisible: false });
                                            this.setState({ loginSubmitClicked: true })
                                            console.log(this.state.loginForm.email);
                                        }}>
                                        Submit
                                    </button>
                                </Dialog.Footer>
                            </Dialog>
                        </div>
                        
                        <div className='nav-item'>
                            <button 
                                className="button button-sm nav-button-secondary" 
                                onClick={ () => this.setState({ dialogVisible2: true })} 
                                style={{marginTop: '1px', margin: '3px'}}>
                                Sign Up
                            </button>
                                <Dialog
                                    title="Sign Up"
                                    visible={ this.state.dialogVisible2 }
                                    onCancel={ () => this.setState({ dialogVisible2: false }) }
                                >
                                <Dialog.Body>
                                    <Form model={this.state.signUpForm}>
                                        <Form.Item label="Email Address" labelWidth="120">
                                            <Input 
                                                type='email'
                                                value={this.state.signUpForm.email} 
                                                onChange={this.signUpEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Password" labelWidth="120">
                                            <Input value={this.state.signUpForm.password}></Input>
                                        </Form.Item>
                                    </Form>
                                </Dialog.Body>
            
                                <Dialog.Footer className="dialog-footer">
                                    <button 
                                        className='button button-primary' 
                                        onClick={ () => {
                                            this.setState({ dialogVisible2: false });
                                            this.setState({ signUpSubmitClicked: true });
                                            console.log(this.state.signUpForm.email);
                                        }}>
                                        Submit
                                    </button>
                                </Dialog.Footer>
                            </Dialog>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a href='/' className="nav_brand">
                        <span className="fa-stack">
                            <i className="far fa-circle fa-stack-2x"></i>
                            <i className="far fa-paper-plane fa-stack-1x"></i>
                        </span>
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
                        <div className='nav-item' style={{margin: '3px', color: '#ABABC9'}}>
                            Signed in with '{signedIn}'
                        </div>
                        <div className='nav-item'>
                            <button 
                                className="button-sm nav-button-primary button" 
                                value=''
                                onClick={ this.onLogout.bind(this) } 
                                style={{margin: '3px'}}>
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            )
        } 
    }
};

export default Navbar;