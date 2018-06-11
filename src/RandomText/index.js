import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default class RandomText extends Component {
  static defaultProps = {
    words: [],
    textBefore: ``,
    textAfter: ``
  }

  state = {
    currentWordIndex: 0
  }

  componentWillMount() {
    const currentWordIndex = rand(0, this.props.words.length - 1)
    this.setState({
      currentWordIndex
    })
  }

  getCurrentWord = () => this.props.words[this.state.currentWordIndex]

  render() {
    const { textBefore, textAfter } = this.props
    const word = this.getCurrentWord()

    return (
      <Wrapper>
        <p>{textBefore}</p> <p>{word}</p>
        <p>{textAfter}</p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.span``
