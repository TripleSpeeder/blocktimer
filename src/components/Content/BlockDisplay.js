import React  from 'react'
import {Button, Card, Placeholder} from 'semantic-ui-react'
import moment from 'moment'


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
                <Card.Meta>
                    {hash}
                </Card.Meta>
                <Card.Description>
                    Mined on {moment.unix(timestamp).format("Y-MM-DDThh:mm:ss")} (Delta: {diff} seconds)
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button
                    basic
                    color={'green'}
                    href={"https://etherscan.io/block/"+height}
                    target={'_blank'}
                >
                    view on Etherscan.io
                </Button>
                <Button
                    basic
                    color={'green'}
                    href={"https://www.etherchain.org/block/"+hash}
                    target={'_blank'}
                >
                    view on Etherchain.org
                </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default BlockDisplay