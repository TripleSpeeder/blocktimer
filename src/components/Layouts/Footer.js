import React from 'react'
import {Button, Grid, Icon, List} from 'semantic-ui-react'


function Footer() {
    return (
        <Grid columns={12} centered>
            <Grid.Row>
                <Grid.Column width={12} textAlign={'center'}>
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
                            <span><Icon name={'copyright'}/> Michael Bauer</span>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Footer