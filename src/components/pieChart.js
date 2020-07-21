import React,{ Component } from 'react';
import { VictoryPie } from "victory";

class pieChart extends Component {
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
          height={260}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          style={{
            labels: {
              fontSize: 14
            }
          }}
        />
  
    </>
  );
 }
}

export default pieChart;
