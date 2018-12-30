import React from 'react'
import { Message } from 'semantic-ui-react'

class MessageExampleWarning extends React.Component {
    render() {
        return (
            <Message warning>
                <label id="text-score">คะแนนได้เต็ม 50-100 ข้อ <b>50-79%</b></label>
            </Message>
        )
    }
}


export default MessageExampleWarning