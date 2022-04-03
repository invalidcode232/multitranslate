import { Center, Container, Heading, Spacer } from '@chakra-ui/react'
import React, { Component } from 'react'
import InputMenu from '../menu/input'
import ResultMenu from '../menu/result'

type Props = {}

type State = {
  showResult: Boolean,
}

class Main extends Component<Props, State> {
  state = {
    showResult: true,
  }

  handleClick = () => {
    this.setState({
      showResult: true,
    })
  }

  render() {
    let result: any = (null)
    
    if (this.state.showResult) {
      result = <ResultMenu />
    }

    return (
      <div>
        <Container marginTop={'10'}>
          <Center>
            <Heading size={'xl'}>Make funny text!</Heading>
          </Center>

          <Spacer mt={'6'} />

          <InputMenu/>

          {result}

        </Container>
      </div>
    )
  }
}

export default Main