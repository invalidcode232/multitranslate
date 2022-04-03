import { Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import LanguageCard from '../components/languagecard'

type Props = {}

type State = {}

class ResultMenu extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <Flex>
                    <LanguageCard />
                </Flex>
            </div>
        )
    }
}

export default ResultMenu