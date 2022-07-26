import react from 'react'
import { action } from '@storybook/addon-actions';

import { Button } from '..'

export default {
    title: 'Components/Button',
    component: Button,

}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Click Me',
}
