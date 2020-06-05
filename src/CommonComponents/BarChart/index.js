import React from 'react'
import { ChartWrapper, ChartTitle } from './Chart.styles'
import PropTypes from 'prop-types'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
const SimpleBarChart = ({ title, data }) => {
  return (
    <ChartWrapper>
      <ChartTitle>{title}</ChartTitle>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis />
        <Tooltip/>
        <Bar dataKey="value" fill="#5b4ed0" />
      </BarChart>
    </ChartWrapper>
  )
}

SimpleBarChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

SimpleBarChart.defaultProps = {
  title: '',
  data: []
}

export default SimpleBarChart
