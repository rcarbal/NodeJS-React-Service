import React from 'react';

import FormContainer from './FormContainer';

class App extends React.Component { 
    // Function overriding React.Component constructor() 
    constructor(props) {
        // Calls code in parent(React.Component)
        super(props);
    }
        
    render() {
        return (
            <div style={{fontFamily: 'Helvetica Neue, helvetica'}}>
                <FormContainer></FormContainer>  
            </div>
        )
    }
}

export default App;