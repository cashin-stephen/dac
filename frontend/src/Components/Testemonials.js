import RadioBrace from './Radio'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ getPosition }) => {
  const myRef = useRef()
  const [testmonyList] = useState([
    'Excellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent Work',
    'Great Job',
    'Well Done',
    'Absolutely Perfect',
    'Nice'
  ])
  const [testemonySignOffList] = useState([
    'Joe Schmoe',
    'Alphonso Gregory III',
    'Thomas Tuchel',
    'Albert Georgeson',
    'Adam Smith'
  ])
  const [testemonyLocation] = useState([
    'Cabra',
    'Rathfarnham',
    'Norway',
    '43 Downing Street',
    'Hibernia'
  ])
  const [testmonycolor] = useState([
    'blue',
    'red',
    'green',
    'brown',
    'purple'
  ])
  const [index, setIndex] = useState(0)
  const [realIndex, setRealIndex] = useState(0)
  const [textHeight, setTextHeight] = useState(130)

  const leftButtonPress = () => {
    const message = document.querySelector('.testemonialText')
    const dot = document.querySelector('.activeDot')
    message.classList.remove('messageFade')
    dot.classList.remove('messageFade')
    requestAnimationFrame(() => {
      setIndex(index - 1)
      message.classList.add('messageFade')
      dot.classList.add('messageFade')
    })
  }

  const rightButtonPress = () => {
    const message = document.querySelector('.testemonialText')
    const dot = document.querySelector('.activeDot')
    message.classList.remove('messageFade')
    dot.classList.remove('messageFade')
    requestAnimationFrame(() => {
      setIndex(index + 1)
      message.classList.add('messageFade')
      dot.classList.add('messageFade')
    })
  }

  // source: https://www.bennadel.com/blog/4310-detecting-rendered-line-breaks-in-a-text-node-in-javascript.htm

  const collapseWhiteSpace = (value) => {
    return (value.trim().replace(/\s+/g, ' '))
  }

  const getLinesFromTextNode = useCallback(() => {
    const textNode = document.querySelector('.testemony').firstChild

    textNode.textContent = collapseWhiteSpace(textNode.textContent)

    const textContent = textNode.textContent
    const range = document.createRange()
    let lines = []
    let lineCharacters = []

    for (let i = 0; i < textContent.length; i++) {
      range.setStart(textNode, 0)
      range.setEnd(textNode, (i + 1))

      const lineIndex = (range.getClientRects().length - 1)

      if (!lines[lineIndex]) {
        lines.push(lineCharacters = [])
      }

      lineCharacters.push(textContent.charAt(i))
    }

    lines = lines.map(
      function operator (characters) {
        return (collapseWhiteSpace(characters.join('')))
      }
    )
    setTextHeight(90 + lines.length * 20)
    return (lines)
  }, [])

  useEffect(() => {
    index % testmonyList.length === 0
      ? setTimeout(() => setRealIndex(0), 500)
      : index > 0
        ? setTimeout(() => setRealIndex(index % testmonyList.length), 500)
        : setTimeout(() => setRealIndex((testmonyList.length) - (Math.abs(index)) % testmonyList.length), 500)
    setTimeout(() => getLinesFromTextNode(), 510)
  }, [index, testmonyList.length, getLinesFromTextNode])

  useEffect(() => {
    getPosition(myRef)
    window.addEventListener('resize', () => getPosition(myRef))
    // monitor for performance IMPORTANT
    getLinesFromTextNode()
  }, [getPosition, getLinesFromTextNode])

  return (

        <div className="testemonials" ref={myRef}>
            <div className="clientImg" style={{ backgroundColor: testmonycolor[realIndex] }} ></div>
            <div className="textContainer" style={{ height: textHeight }}>
                <button className='galleryButton back gray' onClick={leftButtonPress}>{'<'}</button>
                <div className="testemonialText">
                    <p className="testemony">{testmonyList[realIndex]}</p>
                    <p className="testemonialSignOff">
                        {testemonySignOffList[realIndex]}, <br></br>
                        {testemonyLocation[realIndex]}
                    </p>
                </div>
                <button className='galleryButton forward gray' onClick={rightButtonPress}>{'>'}</button>
            </div>
            <div className="testemonialRadio">
                <RadioBrace index={realIndex} num={5}/>
            </div>
        </div>
  )
}

Testimonials.propTypes = {
  getPosition: PropTypes.func.isRequired
}

export default Testimonials
