import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2018', etudiants: 20 },
  { year: '2019', etudiants: 30 },
  { year: '2020', etudiants: 25 },
  { year: '2021', etudiants: 35 },
  { year: '2022', etudiants: 40 },
  { year: '2023', etudiants: 45 },
];

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="etudiants" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
