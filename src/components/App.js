import React from 'react';
import { Steps, Menu } from 'element-react/next';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
                    <Steps space={600} active={1} finishStatus="success">
                        <Steps.Step title="Done"></Steps.Step>
                        <Steps.Step title="Processing"></Steps.Step>
                        <Steps.Step title="Step 3"></Steps.Step>
                    </Steps>
                </Menu>
            </div>   
        )
    }
}

export default App;