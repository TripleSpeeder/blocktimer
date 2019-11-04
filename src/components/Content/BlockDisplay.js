import React  from 'react'
import {Button, Card, Image, Placeholder, Popup} from 'semantic-ui-react'
import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'

function BlockDisplay({height, hash, timestamp, loading, error, diff}) {

    if (loading) {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Placeholder fluid>
                            <Placeholder.Header>
                                <Placeholder.Line length={'full'}/>
                            </Placeholder.Header>
                        </Placeholder>
                    </Card.Header>
                    <Card.Meta>
                        <Placeholder fluid>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length={'full'}/>
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Card.Meta>
                    <Card.Description>
                        <Placeholder fluid>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length={'full'}/>
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button
                            basic
                            color={'green'}
                            disabled
                        >
                            view on Etherscan.io
                        </Button>
                        <Button
                            basic
                            color={'green'}
                            disabled
                        >
                            view on Etherchain.org
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    } else if (error) {
        return (
            <Card fluid color='red'>
                <Card.Content>
                    <Card.Header>
                        Error!
                    </Card.Header>
                    <Card.Description>
                        {error.message}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button
                            basic
                            color={'green'}
                            disabled
                        >
                            view on Etherscan.io
                        </Button>
                        <Button
                            basic
                            color={'green'}
                            disabled
                        >
                            view on Etherchain.org
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    Block #{height}
                </Card.Header>
                <Card.Meta style={{wordWrap: 'break-word'}}>
                    {hash}
                </Card.Meta>
                <Card.Description>
                    Mined on {format(fromUnixTime(timestamp),"yyyy-MM-dd HH:mm OOOO")} (Delta: {diff} seconds)
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <Popup
                        trigger={
                            <Button
                                basic
                                compact
                                size='mini'
                                href={"https://etherscan.io/block/" + height}
                                target={'_blank'}
                            >
                                <Image
                                    size={'mini'}
                                    src='https://etherscan.io/images/favicon2.ico'/>
                            </Button>
                        }
                        content={'Show on Etherscan.io'}
                    />
                    <Popup
                        trigger={
                            <Button
                                compact
                                basic
                                size='mini'
                                href={"https://www.etherchain.org/block/"+hash}
                                target={'_blank'}
                            >
                                <Image
                                    size={'mini'}
                                    src='https://www.etherchain.org/images/favicon.png'/>
                            </Button>
                        }
                        content={'Show on Etherchain.org'}
                    />
                    <Popup
                        trigger={
                            <Button
                                basic
                                compact
                                size='mini'
                                href={"https://blockchair.com/ethereum/block/"+height}
                                target={'_blank'}
                            >
                                <Image size={'mini'} src='https://blockchair.com/favicon.ico'/>
                            </Button>
                        }
                        content={'Show on blockchair.com'}
                    />
            </Card.Content>
        </Card>
    )
}

export default BlockDisplay