import { UserAvatar } from '..'
import { faker } from '@faker-js/faker'

export default {
    title: 'Components/User Profile',
    component: UserAvatar,
    argTypes: {
        loading: { control: 'boolean' },
        username: { control: 'text' },
        pro: { control: 'boolean' },
        loggedIn: { control: 'boolean' },
        size: { control: 'selection' }
    }
}


const GlobalTemplate = (args, { globals }) => <UserAvatar {...args} {...globals} />
export const Default = GlobalTemplate.bind({})

const Template = args => <UserAvatar {...args} />

export const UserLoggedOut = Template.bind({})
UserLoggedOut.args = {
    loading: false,
    pro: false
}

export const UserLoggingIn = Template.bind({})
UserLoggingIn.args = {
    loading: true,
    pro: false
}

export const UserLogged = Template.bind({})
UserLogged.args = {
    picture: faker.image.nature(80, 80, true),
    userName: faker.name.firstName(),
    loading: false,
    pro: false,
    state: {
        loggedIn: true
    }
}


export const UserLoggedPro = Template.bind({})
UserLoggedPro.args = {
    picture: faker.image.nature(80, 80, true),
    userName: faker.name.firstName(),
    loading: false,
    pro: true,
    state: {
        loggedIn: true
    }
}
