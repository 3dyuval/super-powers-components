import { Navigation } from '../'
import { Router } from '../'
import { Main } from '../components/Router/Main'
import { PluginsList } from '../components/PluginsList'

export default {
    title: 'Components/Navigation',
    component: Navigation,
    propTypes: {
        layout: 'centered',
    }
}

const Template = args => (<Router {...args} />)

export const Default = Template.bind({})

Default.args = {
    routes: [
        {
            path: '/main',
            element: <Main />,
            title: 'Main',
            description: 'Get back to work'
        },
        {
            path: '/plugins',
            element: <PluginsList />,
            title: 'All Our Plugins',
            description: 'More Super Powers'
        },
        {
            url: 'https://www.google.com',
            title: 'Visit Super Powers site',
            description: 'Super Tools',
        }
    ]
}

// Default.args = {
//     nav: [
//         {
//             path: '/',
//             component: <Main />,
//             title: 'Main',
//             description: 'Get back to work'
//         },
//         {
//             path: '/more',
//             component: <More />,
//             title: 'More',
//             description: 'More Super Powers'
//         },
//         {
//             path: 'https://www.google.com',
//             title: 'News',
//             description: 'Better late than never!'
//         },
//         {
//             path: 'https://www.google.com',
//             title: 'Shop',
//             description: 'Super tools'
//         }
//     ]
// }