import react from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../'

const stories = storiesOf('App test', module)

stories.add('App', () => {
    return (<Button />)
})