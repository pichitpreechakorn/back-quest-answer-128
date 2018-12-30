import React from 'react'
import { Message } from 'semantic-ui-react'

class MessageExamplePositive extends React.Component {
  render() {
    return (
      <div>
        <Message positive>
          {/* <Message.Header>You are eligible for a reward</Message.Header> */}
          <label id="text-score">คะแนนได้เต็ม 128 ข้อ <b>100%</b></label>
        </Message>
        <Message info>
          <label id="text-score">คะแนนได้เต็ม 100-120 ข้อ <b>80%</b></label>
        </Message>
        <Message warning>
          <label id="text-score">คะแนนได้เต็ม 50-100 ข้อ <b>50-79%</b></label>
        </Message>
        <Message negative>
          <label id="text-score">คะแนนได้ 0-49 ข้อ <b>0 - 49%</b></label>
        </Message>
      </div>

    )
  }
}


export default MessageExamplePositive