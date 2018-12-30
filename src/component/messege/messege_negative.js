import React from 'react'
import { Message } from 'semantic-ui-react'

class MessageExampleNegative extends React.Component {
  render() {
    return (
      <Message negative>
        <label id="text-score">คะแนนได้ 0-49 ข้อ <b>0 - 49%</b></label>
      </Message>
    )
  }
}


export default MessageExampleNegative