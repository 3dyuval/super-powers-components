import { Account } from '..'
import { faker } from '@faker-js/faker'

export default {
    title: 'Views/Account',
    component: Account,
}


const Template = args => <Account {...args} />


export const Default = Template.bind({})

Default.args = {
}