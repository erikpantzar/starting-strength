import React from 'react'

import SSHeader from './SSHeader'

export default {
  title: 'Component/Header',
  component: SSHeader,
}

const Template = (args) => <SSHeader {...args} />

export const Squats = Template.bind({})
Squats.args = {
  workout: 'Squats',
  details: '1 set of 12',
  historicWeight: 90,
}
