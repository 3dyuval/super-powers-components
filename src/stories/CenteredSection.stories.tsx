import { CenteredSection } from '../components/Globals'
import { ComponentMeta } from '@storybook/react'

export default {
    title: 'Views/Layouts/Centered Section',
    component: CenteredSection,
} as ComponentMeta<typeof CenteredSection>


const Template = args => <CenteredSection {...args} >content</CenteredSection>

export const Default = Template.bind({})
export const FourRows = Template.bind({})

Default.args = {
    rows: undefined,
}

FourRows.args = {
    rows: 4,
}