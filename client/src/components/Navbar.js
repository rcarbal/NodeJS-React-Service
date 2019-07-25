import React from 'react';

import { Dialog, Button, Form, Input } from 'element-react/next';

import '../Smooth.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogVisible: false,
            dialogVisible2: false,
            form: {
                name: '',
                password: ''
            }
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark">
                <a href='/' className="nav_brand">
                    <span className="fa-stack">
                        <i className="far fa-circle fa-stack-2x"></i>
                        <i className="far fa-paper-plane fa-stack-1x"></i>
                    </span>
                </a>
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
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
                                <Form model={this.state.form}>
                                    <Form.Item label="Promotion name" labelWidth="120">
                                        <Input value={this.state.form.name}></Input>
                                    </Form.Item>
                                    <Form.Item label="Zones" labelWidth="120">
                                        <Input value={this.state.form.name}></Input>
                                    </Form.Item>
                                </Form>
                            </Dialog.Body>
        
                            <Dialog.Footer className="dialog-footer">
                                <button className='button button-primary' onClick={ () => this.setState({ dialogVisible: false }) }>Submit</button>
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
                                <Form model={this.state.form}>
                                    <Form.Item label="Promotion name" labelWidth="120">
                                        <Input value={this.state.form.name}></Input>
                                    </Form.Item>
                                    <Form.Item label="Zones" labelWidth="120">
                                        <Input value={this.state.form.name}></Input>
                                    </Form.Item>
                                </Form>
                            </Dialog.Body>
        
                            <Dialog.Footer className="dialog-footer">
                                <button className='button button-primary' onClick={ () => this.setState({ dialogVisible2: false }) }>Submit</button>
                            </Dialog.Footer>
                        </Dialog>
                    </div>
                </div>
            </nav>
        )
    }
    
};

export default Navbar;