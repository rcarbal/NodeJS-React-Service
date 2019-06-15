import React from 'react';
import { Steps, Menu, Button } from 'element-react/next';

import InfoContainer from './InfoContainer';
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

    saveForm(data){
        /// this will break! but save data here
        this.setState(data);
    }

    saveAndNext(data){
       this.saveForm(data):
       this.onNextStep();
    }


    render() {

        let pageContent;
        let activeContent = this.state.active;

        if (activeContent === 1) {
            pageContent = (
                <div>
                    <InfoContainer active={this.state.active} saveAndNext={this.saveAndNext}/>
                </div>
            )
        } else if (activeContent === 2) {
            pageContent =(
                <div>
                    <OptionsContainer />
                    <Button onClick={this.onBack.bind(this)}>Back</Button>
                    <Button type='submit' onClick={this.onNextStep.bind(this)}>
                        Next step
                    </Button>
                </div>
            )
        } else {
            pageContent = (
                <div>
                    <PayContainer />
                    <Button onClick={this.onBack.bind(this)}>Back</Button>
                </div>
            )
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
            </div>
        )
    }
}

export default App;
