import React from 'react';
import { Steps, Menu, Button } from 'element-react/next';

import FormContainer from './FormContainer';
import OptionsContainer from './OptionsContainer';
import PayContainer from './PayContainer';

class App extends React.Component { 
    // Function overriding React.Component constructor() 
    constructor(props) {
        // Calls code in parent(React.Component)
        super(props);

        this.state = {
            // Toggles nav steps
            active: 1,
            form: {
                stateOfIncoporation: 'Delaware',
                type: 'LLC',
                name: ''
            }
        };
    }
    handleSubmit() {
        let active = this.state.active + 1;
            if (active > 3) {
                active = 1;
            }
        this.setState({ active });
    }
        
    render() {

        let pageContent;
        let activeContent = this.state.active;

        if (activeContent === 1) {
            pageContent = <FormContainer />
        } else if (activeContent === 2) {
            pageContent = <OptionsContainer />
        } else {
            pageContent = <PayContainer />
        }

        return (
            <div style={{fontFamily: 'Helvetica Neue, helvetica'}}>
                <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
                    <Steps space={500} active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                        <Steps.Step title="Company & Contact"></Steps.Step>
                        <Steps.Step title="Options & Services"></Steps.Step>
                        <Steps.Step title="Review & Pay"></Steps.Step>
                    </Steps>
                </Menu>
                { pageContent }
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Next step
                </Button>
            </div>
        )
    }
}

export default App;