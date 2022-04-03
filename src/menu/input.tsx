import { Button, Center, Input, Stack } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function InputMenu({}: Props) {
    return (
        <div>
            <Stack spacing={'6'}>
                <Input placeholder="Input your text here.." width={'lg'} />

                <Center>
                    <Button>Translatify it!</Button>
                </Center>
            </Stack>
        </div>
    )
}