import React from 'react';
import { Button } from 'element-react/next';

import Dropdowns from './Dropdowns';
import Header from './Header';

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
            <Header></Header>
            <Dropdowns></Dropdowns>
            <Button onClick={() => this.next()}>Next step</Button>
          </div>
        )
      }
}

export default App;