import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {
  VictoryPie, 
  VictoryChart,
  VictoryLabel
} from "victory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 7 },
        { x: 5, y: 9 }
      ]

    };
  }
  render() {
  return (
    <>
        <VictoryPie
          data={this.state.data}
          height={160}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          style={{
            labels: {
              fontSize: 6
            }
          }}
        />
  
    </>
  );
 }
}

export default App;
