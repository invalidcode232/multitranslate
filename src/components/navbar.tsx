import { Container, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './colorswitcher'


type Props = {}

function Navbar({ }: Props) {
    return (
        <div>
            <Container maxW={'container.xl'} marginY={'3'}>
                <Flex justifyContent={'space-between'}>
                    <div>
                        <Heading size={'md'}>Multitranslate</Heading>
                    </div>
                    <div>
                        <Link href='https://github.com/invalidcode232/multitranslate'>Github</Link>
                        <ColorModeSwitcher/>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Navbar