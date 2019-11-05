import React, {useState} from 'react'
import {Accordion, Grid, Header, Icon, Item, Segment} from 'semantic-ui-react'

const IpfsInfo = () => {
    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (e, titleProps) => {
        const {index} = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const listItems = [
        {
            type: 'IPFS + ENS',
            uri: 'http://blocktimer.dappstar.eth/',
            description: 'This is the recommended method if your system supports .eth name resolution. The ENS name \n' +
                ' is set up to point to the ipfs CID. The content hash\n' +
                'can be updated in the ENS system, so using this domain will always point to the latest release.',
        },
        {
            type: 'Native IPFS link',
            uri: 'ipfs://QmXHWfbbU3A3HrSuEM9HFS842Vi6r3FmkXgwv4TzgnjPR1/',
            description: 'This works if your system supports native ipfs links. However note that the CID is static' +
                ' and therefor is most likely not pointing to the latest release. Therefor this method is not recommended.',
        },
        {
            type: 'IPFS + ENS + EthDNS',
            uri: 'http://blocktimer.dappstar.eth.link/',
            description: 'If your system/browser does not have direct support for .eth domains you can use the ethDNS\n' +
                'system by simply adding ".link" to the ENS domain. The nameserver responsible for .link\n' +
                'domains will automatically look up the according content hash entry and return a gateway.ipfs.io\n' +
                'link to the correct address.',
        },
        {
            type: 'Https',
            uri: 'https://triplespeeder.github.io/blocktimer/',
            description: 'Fallback traditional hosting on github pages.',
        },
    ]

    return (
        <Segment basic>
        <Grid columns={12} stackable centered>
            <Grid.Row>
                <Grid.Column width={12} textAlign={'left'}>
                    <Header size={'medium'}>IPFS availability</Header>
                    <p>This site is hosted decentralized via <a href='https://ipfs.io' target='_blank' rel='noopener noreferrer'>IPFS</a>. It can
                        be accessed in different ways:</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Accordion styled fluid>
                        {listItems.map((entry, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Accordion.Title
                                        active={activeIndex === index}
                                        index={index}
                                        onClick={handleClick}
                                    >
                                        <Icon name='dropdown'/>
                                        {entry.type}
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <Item.Group>
                                            <Item>
                                                <Item.Content>
                                                    <Item.Header as={'a'} href={entry.uri}>
                                                        <span style={{wordWrap: 'break-word'}}>{entry.uri}</span>
                                                    </Item.Header>
                                                    <Item.Description>
                                                        {entry.description}
                                                    </Item.Description>
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                    </Accordion.Content>
                                </React.Fragment>
                            )
                        })}
                    </Accordion>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )
}


export default IpfsInfo