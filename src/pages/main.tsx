import { Alert, AlertIcon, AlertTitle, Center, Container, Heading, Spacer, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import InputMenu from '../menu/input'
import ResultMenu from '../menu/result'
import languages from '../utils/languages'
import axios from 'axios'

type Props = {}

type State = {
  showResult: Boolean,
  languageData: any,
  isError: Boolean,
  errorMessage: String,
  isLoading: Boolean,
}

function getLanguages(languageList: Array<any>, languageNumber: Number) {
  // get 3 languages from language_list RANDOMLY and UNIQUELY
  // language_list is an array with objects like:
  // {
  //   "code": "en",
  //   "name": "English",
  // }

  const languages_array = []
  for (let i = 0; i < languageNumber; i++) {
    const random_index = Math.floor(Math.random() * languageList.length)
    languages_array.push(languageList[random_index])
  }

  return languages_array
}

function multitranslate(text: String, languageList: Array<any>) {
  let curText = text;

  let data: any = [];

  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < languageList.length; i++) {
      const language = languageList[i]
      let language_code = language.code

      curText = encodeURIComponent(curText as string)
      language_code = encodeURIComponent(language_code as string)

      let result = await axios.get(`/translate?text=${curText}&language=${language.code}`)
      // let result = await axios.get(encodeURI(`https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=${language.code}&q=${curText}`))
      curText = result.data[0]
      data.push({
        name: language.name,
        text: result.data[0]
      })

      if (i === languageList.length - 1) {
        resolve(data)
      }
    }
  })
}
class Main extends Component<Props, State> {
  state = {
    showResult: false,
    languageData: [],
    isError: false,
    errorMessage: '',
    isLoading: false,
  }

  handleClick(text: any) {
    let languageList: Array<any> = getLanguages(languages, 3)

    languageList.push({
      code: 'en',
      name: 'English'
    })

    this.setState({
      isLoading: true,
    })

    multitranslate(text, languageList).then(data => {
      this.setState({
        showResult: true,
        languageData: data,
        isError: false,
        errorMessage: '',
        isLoading: false,
      })
    })
  }

  errorCallback(message: String) {
    this.setState({
      isError: true,
      errorMessage: message,
      isLoading: false,
    })
  }

  render() {
    let result: any = (null)
    let error: any = (null)

    if (this.state.showResult) {
      result = <ResultMenu languageList={this.state.languageData} />
    }

    if (this.state.isError) {
      error = (
        <div>
          <Alert status={'error'}>
            <AlertIcon />
            <AlertTitle mr={'2'}>{this.state.errorMessage}</AlertTitle>
          </Alert>

          <Spacer my={'4'}/>
        </div>
      )
    }

    return (
      <div>
        <Container marginTop={'10'} maxW={'container.xl'}>
          {error}

          <Center>
            <Heading size={'xl'}>Multitranslator</Heading>
          </Center>

          <Spacer my={'4'} />

          <Center>
            <Text color={'gray'}>Multitranslator translates your text through multiple languages</Text>
          </Center>

          <Spacer my={'6'} />

          <InputMenu clickCallback={this.handleClick.bind(this)} errorCallback={this.errorCallback.bind(this)} isLoading={this.state.isLoading} />

          <Spacer my={'10'} />

          {result}
        </Container>

      </div>
    )
  }
}

export default Main