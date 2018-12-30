import React from 'react'
import { Message } from 'semantic-ui-react'

class MessageExampleInfo extends React.Component {
    render() {
        return (
            <Message info>
                <label id="text-score">คะแนนได้เต็ม 100-120 ข้อ <b>80%</b></label>
            </Message>
        )
    }
}


export default MessageExampleInfo