import React from 'react';

import { Dialog, Form, Input } from 'element-react/next';

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

    onLoginSubmit = () => {
        let email = this.state.loginForm.email;
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        let URL = '/api/v1/login';

        if(emailRegex.test(email) === false && email !== '') {
            alert('Please enter a valid email address.');
        } else {
            this.setState({ dialogVisible: false });
            this.setState({ loginSubmitClicked: true });

            /*
            fetch(URL, {
                method: 'POST',
                body: 
            })
            */
            console.log(this.state.loginForm.email);
        }
    }

    signUpEmailInput(signUpEmail) {
        this.state.signUpForm.email = signUpEmail;
        this.setState({ signUpEmail: signUpEmail });
    }

    onSignUpSubmit(event) {
        event.preventDefault();

        let email = this.state.signUpForm.email;
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        const data = new FormData(event.target);

        if(emailRegex.test(email) === false && email !== '') {
            alert('Please enter a valid email address.');
        } else {
            fetch('/api/v1/register', {
                method: 'POST',
                body: data
            })

            this.setState({ dialogVisible2: false });
            this.setState({ signUpSubmitClicked: true });
            console.log(this.state.signUpForm.email);
        }
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
                                style={{margin: '3px', outline: '0'}}>
                                Login
                            </button>
                                <Dialog
                                    title="Login"
                                    visible={ this.state.dialogVisible }
                                    onCancel={ () => this.setState({ dialogVisible: false }) }
                                >
                                <Dialog.Body>
                                    <Form model={this.state.loginForm} onSubmit={this.onLoginSubmit}>
                                        <Form.Item label="Email Address" labelWidth="120">
                                            <Input 
                                                type='email'
                                                value={this.state.loginForm.email}
                                                onChange={this.loginEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Password" labelWidth="120">
                                            <Input 
                                                value={this.state.loginForm.password} 
                                            />
                                        </Form.Item>
                                    </Form>
                                </Dialog.Body>
            
                                <Dialog.Footer className="dialog-footer">
                                    <button 
                                        action="/api/v1/login" 
                                        method="POST"
                                        className='button button-primary'>
                                        Submit
                                    </button>
                                </Dialog.Footer>
                            </Dialog>
                        </div>
                        
                        <div className='nav-item'>
                            <button 
                                className="button button-sm nav-button-secondary" 
                                onClick={ () => this.setState({ dialogVisible2: true })} 
                                style={{marginTop: '1px', margin: '3px', outline: '0'}}>
                                Sign Up
                            </button>
                                <Dialog
                                    title="Sign Up"
                                    visible={ this.state.dialogVisible2 }
                                    onCancel={ () => this.setState({ dialogVisible2: false }) }
                                >
                                <Dialog.Body>
                                    <Form model={this.state.signUpForm} onSubmit={this.onSignUpSubmit.bind(this)}>
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
                                        className='button button-primary'>
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
                                style={{margin: '3px', outline: '0'}}>
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