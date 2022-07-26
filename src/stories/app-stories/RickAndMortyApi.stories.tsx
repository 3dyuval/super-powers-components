import { Circle } from '../../components/Globals'
import React from 'react'


const RickAndMortyButton = (props) => {

    const [pic, setPic] = React.useState('')


    const fetchChar = async () => {
        try {
            const randomCharInt = Math.floor(Math.random() * (826))
            const res = await fetch(`https://rickandmortyapi.com/api/character/${randomCharInt}`)
            const data = await res.json()
            setPic(data.image)

        } catch {
            console.log('Something went wrong')
        }
    }

    React.useEffect(() => {
        fetchChar()
    }, [])

    return <div {...props} onClick={() => fetchChar()}>
        <Circle picture={pic && pic} />
    </div>
}

export default {
    title: 'App Stories/Rick And Morty',
    component: RickAndMortyButton,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

const Template = args => <RickAndMortyButton {...args} />

export const Button = Template.bind({})

Button.args = {

}