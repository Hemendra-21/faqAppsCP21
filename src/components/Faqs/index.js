// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <li className="app-container">
        <div className="FAQs-bg-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachItem => (
              <FaqItem details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </li>
    )
  }
}

export default Faqs
