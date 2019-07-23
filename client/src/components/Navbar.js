import React from 'react';

import { Dialog, Button, Form, Input } from 'element-react/next';

import '../Smooth.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogVisible: false,
            form: {
                name: '',
                password: ''
            }
        }
    }

    render() {
        return (
            <nav className="navbar">
                <a href='/' className="nav_brand">
                    <span className="fa-stack">
                        <i className="far fa-circle fa-stack-2x"></i>
                        <i className="far fa-paper-plane fa-stack-1x"></i>
                    </span>
                </a>
                <div className='nav-item'>
                    <Button>Login</Button>
                    <Dialog
            title="Shipping Address"
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
              <Button onClick={ () => this.setState({ dialogVisible: false }) }>取 消</Button>
              <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确 定</Button>
            </Dialog.Footer>
          </Dialog>
                </div>
            </nav>
        )
    }
    
};

export default Navbar;