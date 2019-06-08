import React from 'react';
import { Steps, Menu, } from 'element-react/next';

const Header = () => {
    return (
        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
            <Steps space={500} active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                <Steps.Step title="Company & Contact"></Steps.Step>
                <Steps.Step title="Options & Services"></Steps.Step>
                <Steps.Step title="Review & Pay"></Steps.Step>
            </Steps>
        </Menu>
    )
};

export default Header;