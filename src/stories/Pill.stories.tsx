import { Pill } from '..'

export default {
    title: 'Components/Pill',
    component: Pill,
    argTypes: {
        size: { control: 'text' },
        color: { control: 'color' }
    }
}
const Template = args => <Pill {...args} />

export const Small = Template.bind({})
Small.args = {
    small: true,
    children: 'Small pill'
}


export const Default = Template.bind({})

Default.args = {
    children: 'Pill'
}

export const Large = Template.bind({})
Large.args = {
    large: true,
    children: 'Large pill'
}

