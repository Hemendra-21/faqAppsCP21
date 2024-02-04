// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  showOrHideAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {showAnswer} = this.state

    const buttonImgUrl = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAltText = showAnswer ? 'minus' : 'plus'

    const answerSectionClassName = showAnswer ? '' : 'hide-answer'
    const answerTexClassName = showAnswer ? 'answer-text' : 'hide-answer'
    return (
      <li className="faq-container">
        <div className="question-button-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="button-icon"
            onClick={this.showOrHideAnswer}
          >
            <img src={buttonImgUrl} alt={imgAltText} />
          </button>
        </div>
        <div className={answerSectionClassName}>
          <hr className="section-divider" />
          <p className={answerTexClassName}>{answerText}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
