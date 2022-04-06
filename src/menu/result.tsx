import { Flex } from '@chakra-ui/layout'
import React from 'react'
import LanguageCard from '../components/languagecard'

type Props = {
    languageList: any,
}

function ResultMenu({ languageList }: Props) {
    const languageCards = languageList.map((language: any, index: any) => {
        if (index === languageList.length - 1) {
            return <LanguageCard key={index} langName={language.name} translation={language.text} isLast={true} />
        }

        return (
            <LanguageCard key={index} langName={language.name} index={index + 1} translation={language.text} isLast={false} />
        )
    })

    return (
        <div>
            {/* <Center> */}
                <Flex justifyContent={'space-between'} columnGap={'6'}>
                    {languageCards}
                </Flex>
            {/* </Center> */}
        </div>
    )
}

export default ResultMenu