import React from 'react';
import { Steps, Menu, Button } from 'element-react/next';

import Dropdowns from './Dropdowns';

class App extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          active: 0
        };
      }
      
      next() {
        let active = this.state.active + 1;
        if (active > 3) {
          active = 0;
        }
        this.setState({ active });
      }
      
      render() {
        return (
          <div>
            <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
                <Steps space={500} active={this.state.active} style={{marginLeft: '22%', padding: '10px'}} finishStatus="success">
                    <Steps.Step title="Company & Contact"></Steps.Step>
                    <Steps.Step title="Options & Services"></Steps.Step>
                    <Steps.Step title="Review & Pay"></Steps.Step>
                </Steps>
            </Menu>
            <Dropdowns></Dropdowns>
            <Button onClick={() => this.next()}>Next step</Button>
          </div>
        )
      }
}

export default App;