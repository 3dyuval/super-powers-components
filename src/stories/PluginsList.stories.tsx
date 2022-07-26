import { storiesOf } from '@storybook/react'
import { faker } from '@faker-js/faker';
import { PluginsList } from '..'


export default {
    title: 'Components/Plugins List',
    component: PluginsList
}

const Template = args => <PluginsList {...args} />

export const Default = Template.bind({})

Default.args = {
    plugins: [{ plugin1: true }, { plugin2: false }, { plugin3: false }, { plugin4: true }],
}
