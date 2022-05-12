import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [{name: 'Page A', uv: 200, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page C', uv: 500, pv: 2400, amt: 2400},
            ];

  //this will display data visualization of your book progress which you can filter by  genre, year, etc
function Progress() {

    return (
        <main style={{ color: "white"}}>
          <h2>Welcome to the Progress Page</h2>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </main>
        
    );
  }

export default Progress;

