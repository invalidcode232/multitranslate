import { Button, Center, Input, Stack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    clickCallback: any,
}

export default function InputMenu({clickCallback}: Props) {
    return (
        <div>
            <Stack spacing={'6'}>
                <Input placeholder="Input your text here.." width={'lg'} />

                <Center>
                    <Button onClick={clickCallback}>Translatify it!</Button>
                </Center>
            </Stack>
        </div>
    )
}