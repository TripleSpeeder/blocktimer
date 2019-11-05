import pkg from '../../../package.json'
import React from 'react'
import {Button, Divider, Grid, Icon, List, Segment} from 'semantic-ui-react'


function Footer() {
    return (
        <Segment basic>
        <Grid columns={12} centered>
            <Grid.Row>
                <Grid.Column width={12} textAlign={'center'}>
                    <Divider fitted></Divider>
                    <List horizontal floated={'right'}>
                        <List.Item >
                            <span style={{fontSize: '0.5rem'}}>v {pkg.version}</span>
                        </List.Item>
                    </List>
                    <List horizontal>
                        <List.Item>
                            <Button
                                as='a'
                                href={'https://github.com/TripleSpeeder/blocktimer'}
                                size='tiny'
                                circular
                                icon='github'/>
                        </List.Item>
                        <List.Item>
                            <Button
                                as='a'
                                href={'mailto:michael@m-bauer.org'}
                                size='tiny'
                                circular
                                icon='mail'
                            />
                        </List.Item>
                        <List.Item>
                            <span style={{fontSize: '0.7rem'}}><Icon name={'copyright'}/> Michael Bauer</span>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )
}

export default Footer