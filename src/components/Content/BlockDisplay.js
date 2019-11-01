import React, {useEffect, useState} from 'react'
import {Button, Card, Input} from 'semantic-ui-react'


function BlockDisplay({block, loading, error, handleHeightChange}) {
    const [height, setHeight] = useState(block ? block.height : 0)

    // use useEffect hook to update state variable when props change
    useEffect(()=>{
        if (block && block.height)
            setHeight(block.height)
    }, [block])

    if (loading) {
        return (<Card>Loading...</Card>)
    } else if (error) {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        Error!
                    </Card.Header>
                    <Card.Description>
                        {error.message}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    // trigger loading of block depending on local blockheight change
    const onChange = (event) => {
        const height = event.target.value
        setHeight(height)
        if (height && (height > 0))
            handleHeightChange(height)
    }

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    Block #&nbsp;
                    <Input
                        size={'huge'}
                        type={'number'}
                        transparent
                        value={height}
                        min={1}
                        onChange={onChange}
                    />
                </Card.Header>
                <Card.Description>
                    {block.hash}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button
                    basic
                    color={'green'}
                    href={"https://etherscan.io/block/"+block.height}
                    target={'_blank'}
                >
                    view on Etherscan.io
                </Button>
                <Button
                    basic
                    color={'green'}
                    href={"https://www.etherchain.org/block/"+block.hash}
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