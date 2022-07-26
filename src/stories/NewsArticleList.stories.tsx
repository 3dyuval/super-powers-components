import { NewsArticleList } from '../components/News'
import { faker } from '@faker-js/faker'
export default {
    title: 'Views/News/Article List',
    component: NewsArticleList
}

const Template = args => <NewsArticleList {...args} />

export const Default = Template.bind({})

Default.args = {
    news: [
        {
            header: {
                timestamp: faker.date.recent().toLocaleString()
            },
            body: {
                title: 'New news feature',
                text: 'Check out this cool new feature'
            },
        },
        {
            header: {
                timestamp: faker.date.recent().toLocaleString()
            },
            body: {
                title: 'A cool update',
                text: 'Also look at these new features...'
            },
        }
    ]
}
