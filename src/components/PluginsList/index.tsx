import React from 'react'
import { Card, FlexCol, FlexRow } from '../Globals'
import pluginsDefault from './pluginsDefault.json'
import { Button } from '../Button'

interface Plugin {
    id: string;
    title: string;
    features: string[];
    description: string;
    excerpt: string;
    howto: string;
    image: string;
    price: number | void;
    pro: boolean;
    url: {
        figma_marketplace: string | void;
        website: string | void;
    }
}

interface PluginItemProps {
    plugins: Plugin[];
}

const PluginsListWrapper = () => {


    const [pluginsList, setPluginsList] = React.useState(pluginsDefault)

    //TODO Get a static plugin list
    // Then fetch and update this plugin list if changed
    // Also check with user -> if authenticated -> which plugins are installed -> display this on the list


    return <>
        <h2>Super Powers Plugins</h2>
        <PluginsListItems plugins={pluginsList} />
    </>
}



const PluginsListItems = ({ plugins }: PluginItemProps) => {

    return (<>
        {(plugins && plugins.length > 0) ?
            plugins.map(plugin => {
                return <Card key={plugin.id}>
                    <FlexRow  >
                        <img src={plugin.image} width='40%' />
                        <FlexCol justifyContent='flex-start'>
                            <h3>{plugin.title}</h3>
                        </FlexCol>
                    </FlexRow>
                    <p>{plugin.excerpt}</p>
                    <FlexRow justifyContent="flex-end" style={{ width: '100%' }}>
                        <Button label="Check it out now" primary></Button>
                    </FlexRow>
                </Card>
            })
            : 'loading...'}
    </>
    )


}


export { PluginsListWrapper as PluginsList }