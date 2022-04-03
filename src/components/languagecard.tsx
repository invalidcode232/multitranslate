import { Box, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

type Props = {
    langName: String,
    index?: Number,
    isLast?: Boolean,
    translation: String,
}

function LanguageCard({ langName, index, translation, isLast }: Props) {
    return (
        <Box p={'4'} bgColor={'box'} borderRadius={'5'} width={'100%'}>
            <Text color={'gray'}>{isLast ? `Result` : `Language #${index}`}</Text>
            <Text fontSize={'2xl'}>{langName}</Text>
            <Spacer my={'2'}/>
            <Text>{translation}</Text>
        </Box>
    )
}

export default LanguageCard