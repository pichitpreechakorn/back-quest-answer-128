import React from 'react'
import { Table, Button, Icon, Message } from 'semantic-ui-react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap'
import dataQuest from '../../data/dataQuest'
import dataFail from '../../data/dataFail'
import MessageSuscess from '../messege/messege_positive'
import MessageFail from '../messege/messege_negative'
import MessageInfo from '../messege/messege_info'
import MessageWarn from '../messege/messege_warning'
import './table_score'
const test = [

]

class TableScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status_table: false,
            dataGroup: [],
            open: false,
            number: 0
        }
    }

    componentDidMount() {
        let number = 0
        let data = this.props.groupData
        console.log(this.props.groupData)
        console.log(Object.assign(this.props.groupData))
        this.setState({ dataGroup: this.props.groupData.profile, status_table: true })
        // this.props.groupData.map((items, i) => {
        //     console.log(items.fail[i].qust)
        // })
    }
    render() {
        let data = this.props.groupData
        return (
            <div className="table-score">
                {this.state.status_table &&
                    <Table color="blue" key="blue">
                        <Table.Header>
                            <Table.Row textAlign='center' >
                                <Table.HeaderCell><label>เลขที่หมวด</label></Table.HeaderCell>
                                <Table.HeaderCell className="row-table"><label>ชื่อ - นามสกุล</label></Table.HeaderCell>
                                <Table.HeaderCell><label>เลขที่ความสูง</label></Table.HeaderCell>
                                <Table.HeaderCell><label>คะแนน</label></Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.props.groupData.map((items, i) =>
                                items.score >= 2 ?
                                    <Table.Row positive textAlign='center' >
                                        <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                        <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                        <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                        <Table.Cell><label>{items.score} / 128</label></Table.Cell>
                                    </Table.Row>
                                    :
                                    items.score <= 1 ?
                                        <Table.Row warning textAlign='center' >
                                            <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                            <Table.Cell><label>{items.score} / 128</label></Table.Cell>
                                        </Table.Row>
                                        :
                                        <Table.Row negative textAlign='center' >
                                            <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                            <Table.Cell><label>{items.score} / 128</label></Table.Cell>
                                            {/* <Table.Cell>
                                        <Button icon labelPosition='left' color="green" onClick={() => this.setState({ open: true, number : i })}>
                                            <label>ดูข้อที่ตอบถูก</label>
                                            <Icon name='check' />
                                        </Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button icon labelPosition='left' color="red" onClick={() => this.setState({ open: true })}>
                                            <label>ดูข้อที่ตอบผิด</label>
                                            <Icon name='delete' />
                                        </Button>
                                    </Table.Cell> */}
                                        </Table.Row>
                            )

                            }
                        </Table.Body>
                    </Table>

                }
                <Message floating>
                    <div>
                        <label id="text-score">ระดับคะแนน</label>
                    </div>
                    <MessageSuscess />
                </Message>

            </div>
        )
    }
}
export default TableScore