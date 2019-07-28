import React from 'react';

import { Dialog, Form, Input, Button } from 'element-react/next';

import '../Smooth.css';

class Navbar extends React.Component {
   
    state = {
        loginForm: {
            email: '',
            password: '',
            adminCode: ''
        },

        signUpForm: {
            email: '',
            password: '',
            adminCode: ''
        },

        isLoggedIn: false,
        signedInUsername: '',
        isAdmin: false,
        adminData: {},

        dialogVisible: false,
        dialogVisible2: false,
        loginSubmitClicked: false,
        signUpSubmitClicked: false
    }

    saveUserData() {
        let userData = this.state;
        this.props.saveUserData(userData);
    }
    
    loginEmailInput(loginEmail) {
        this.state.loginForm.email = loginEmail;
        this.setState({ loginEmail : loginEmail });
    }

    loginPasswordInput(loginPassword) {
        this.state.loginForm.password = loginPassword;
        this.setState({ loginPassword: loginPassword });
    }



    onLoginSubmit = () => {
        let data = this.state.loginForm
        let email = this.state.loginForm.email;
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        const self = this;
        console.log(data)

        if(emailRegex.test(email) === false && email !== '') {
            alert('Please enter a valid email address.');
        } else {
            fetch('/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password 
                })
            }).then(response => {
                return response.json();
            })
            .then(myJson => {
                self.setState({ isLoggedIn: myJson.loggedIn });
                self.setState({ signedInUsername: myJson.username });
                self.setState({ isAdmin: myJson.isAdmin });
                self.setState({ adminData: myJson })
                console.log(`MYJSON.LOGGEDIN ==== ${myJson.loggedIn}`)
                console.log(`THIS.STATE.ISLOGGEDIN === ${this.state.isLoggedIn}`)
                console.log(`MYJSON.USERNAME === ${myJson.username}`)
                console.log(myJson.username);
                console.log(`THIS.STATE.SIGNEDINUSERNAME`);
                console.log(this.state.signedInUsername);
                console.log(`MYJSON.ISADMIN === ${myJson.isAdmin}`)
                console.log(`THIS.STATE.ISADMIN === ${this.state.isAdmin}`)
                console.log(JSON.stringify(myJson));
                this.saveUserData();
            })
            .catch(error => console.log(`Error ===== ${error}`));

            this.setState({ dialogVisible: false });
            this.setState({ loginSubmitClicked: true });
        }
    }

    signUpEmailInput(signUpEmail) {
        this.state.signUpForm.email = signUpEmail;
        this.setState({ signUpEmail: signUpEmail });
    }

    signUpPasswordInput(signUpPassword) {
        this.state.signUpForm.password = signUpPassword;
        this.setState({ signUpPassword: signUpPassword });
    }

    signUpAdminInput(adminCode) {
        this.state.signUpForm.adminCode = adminCode;
        this.setState({ adminCode: adminCode });
    }

    onSignUpSubmit(event) {
        event.preventDefault(); 
        let data = this.state.signUpForm;
        let email = this.state.signUpForm.email;
        console.log(email);
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

        const self = this;

        console.log(`TYPE OF DATA === ${typeof data}`)
        console.log(data);
        console.log(`TYPE OF DATA.email === ${typeof data.email}`)

        if(emailRegex.test(email) === false && email !== '') {
            alert('Please enter a valid email address.');
        } else {
            fetch('/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                    adminCode: data.adminCode
                })
            }).then(response => {
                return response.json();
            }).then(myJson => {
                self.setState({ isLoggedIn: myJson.loggedIn });
                self.setState({ signedInUsername: myJson.user });
                self.setState({ isAdmin: myJson.isAdmin });
                console.log(JSON.stringify(myJson))
                this.saveUserData();
            }).catch(error => console.log('Error: ', error))

            this.setState({ dialogVisible2: false });
            this.setState({ signUpSubmitClicked: true });
            console.log(this.state.signUpForm.email);
        }
    }

    onLogout(e) {
        e.preventDefault();

        fetch('/api/v1/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        this.setState({ 
            isLoggedIn: false, 
            signedInUsername: e.target.value,
            loginForm: {
                email: e.target.value,
                password: e.target.value,
                adminCode: e.target.value
            },
            signUpForm: {
                email: e.target.value,
                password: e.target.value,
                adminCode: e.target.value
            },
            loginEmail: e.target.value,
            loginPassword: e.target.value,
            loginSubmitClicked: false,
            signUpSubmitClicked: false
        });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let username = this.state.signedInUsername;

        if (isLoggedIn === false) {
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
                            <Form labelPosition='top'>
                                <Dialog
                                    title="Login"
                                    visible={ this.state.dialogVisible }
                                    onCancel={ () => this.setState({ dialogVisible: false }) }
                                >
                                    <Dialog.Body>
                                        <Form.Item label="Email Address" labelWidth="120">
                                            <Input 
                                                type='email'
                                                value={this.state.loginForm.email}
                                                onChange={this.loginEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Password" labelWidth="120">
                                            <Input 
                                                type='password'
                                                value={this.state.loginForm.password} 
                                                onChange={this.loginPasswordInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Dialog.Body>
                                    
                                    <Dialog.Footer className="dialog-footer">
                                        <Button 
                                            onClick={this.onLoginSubmit.bind(this)}
                                            className='button button-primary'>
                                            Submit
                                        </Button>
                                    </Dialog.Footer>
                                </Dialog>
                            </Form>
                        </div>
                        
                        <div className='nav-item'>
                            <button 
                                className="button button-sm nav-button-secondary" 
                                onClick={ () => this.setState({ dialogVisible2: true })} 
                                style={{marginTop: '1px', margin: '3px', outline: '0'}}>
                                Sign Up
                            </button>
                            <Form labelPosition='top'>
                                <Dialog
                                    title="Sign Up"
                                    visible={ this.state.dialogVisible2 }
                                    onCancel={ () => this.setState({ dialogVisible2: false }) }
                                >
                                    <Dialog.Body>
                                        <Form.Item label="Email Address" labelWidth="120">
                                            <Input 
                                                type='email'
                                                value={this.state.signUpForm.email} 
                                                onChange={this.signUpEmailInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Password" labelWidth="120">
                                            <Input 
                                                type='password'
                                                value={this.state.signUpForm.password} 
                                                onChange={this.signUpPasswordInput.bind(this)}
                                            />
                                        </Form.Item>
                                        <div className="dropdown-divider" style={{margin: '5%'}}></div>
                                        <Form.Item label='Admin Code' labelWidth="120">
                                            <Input 
                                                type='password'
                                                value={this.state.signUpForm.adminCode}
                                                onChange={this.signUpAdminInput.bind(this)}
                                            />
                                        </Form.Item>
                                    </Dialog.Body>
            
                                    <Dialog.Footer className="dialog-footer">
                                        <Button 
                                            className='button button-primary'
                                            onClick={this.onSignUpSubmit.bind(this)}>
                                            Submit
                                        </Button>
                                    </Dialog.Footer>
                                </Dialog>
                            </Form>
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
                            Signed in with '{username}'
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