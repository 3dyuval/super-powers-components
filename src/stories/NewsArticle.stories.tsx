import { NewsArticle } from '../components/News'
import { faker } from '@faker-js/faker'


export default {
    title: 'Views/News/Article',
    component: NewsArticle
}


const Template = args => <NewsArticle {...args} />

export const Default = Template.bind({})

Default.args = {
    header: {
        timestamp: faker.date.recent().toLocaleString(),
    },
    title: 'New news feature',
    text: 'Check out this cool new feature',

}

export const FromFirebase = Template.bind({})

FromFirebase.args = {
    header: {
        timestamp: 'no date',
    },
    title: 'New news feature',
    text: 'Check out this cool new feature',

}
