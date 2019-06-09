import React from 'react';
import { Steps, Menu, Button } from 'element-react/next';

import FormContainer from './FormContainer';

class App extends React.Component { 
    // Function overriding React.Component constructor() 
    constructor(props) {
        // Calls code in parent(React.Component)
        super(props);
    }
        
    render() {
        return (
            <div>
                <FormContainer></FormContainer>  
            </div>
        )
    }
}

export default App;