import SSButton from './SSButton'

export default {
  title: 'Component/Button',
  component: SSButton,
}

const Template = (args) => <SSButton {...args} />

export const One = Template.bind({})
One.args = {
  children: 5,
  onClick: () => {
    console.log('Hejje')
  },
}

export const Two = Template.bind({})
Two.args = {
  children: '-5',
  onClick: () => {
    console.log('hejjjee')
  },
}
