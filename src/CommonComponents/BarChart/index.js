import React from 'react'
import { ChartWrapper, ChartTitle } from './Chart.styles'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
const data = [
  { date: 'Day 1', value: 2400 },
  { date: 'Day 2', value: 1398 },
  { date: 'Day 3', value: 9800 },
  { date: 'Day 4', value: 3908 },
  { date: 'Day 5', value: 4800 }
]
const SimpleBarChart = ({ title, data }) => {
  return (
    <ChartWrapper>
      <ChartTitle>{title}</ChartTitle>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="value" fill="#5b4ed0" />
      </BarChart>
    </ChartWrapper>
  )
}

export default SimpleBarChart
