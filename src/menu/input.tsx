import { Button, Center, Input, Stack, Spinner } from '@chakra-ui/react'
import React from 'react'

type Props = {
    clickCallback: any,
    errorCallback: Function,
    isLoading: Boolean,
}

export default function InputMenu({clickCallback, errorCallback, isLoading}: Props) {
    function translateCallback() {
        let text: String = (document.getElementById('input-text') as HTMLInputElement).value

        if (text === '') {
            errorCallback('Please enter text to translate')
            return
        }

        clickCallback(text)
    }

    return (
        <div>
            <Center>
                <Stack spacing={'6'}>
                    <Input placeholder="Input your text here.." width={'xl'} id={'input-text'} isRequired />

                    <Center>
                        <Button onClick={translateCallback}>{isLoading ? <Spinner/> : 'Translatify it!'}</Button>
                    </Center>
                </Stack>
            </Center>
        </div>
    )
}