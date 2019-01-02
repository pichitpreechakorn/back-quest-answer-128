import React from 'react'
import { Table, Button, Icon, Message, Progress } from 'semantic-ui-react'
// import { Modal, ModalFooter, ModalBody, ModalHeader, Progress } from 'reactstrap'
import dataQuest from '../../data/dataQuest'
import dataFail from '../../data/dataFail'
import MessageSuscess from '../messege/messege_positive'

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
            per_success: 0,
            per_info: 0,
            per_warning: 0,
            per_fail: 0
        }
    }
    componentDidUpdate(nextProps) {
        if (nextProps.groupData !== this.props.groupData) {
            this.sumPercent()
        }
    }
    componentDidMount() {
        this.sumPercent()
        console.log(Object.assign(this.props.groupData))
        this.setState({ dataGroup: this.props.groupData.profile, status_table: true })

    }
    sumPercent() {
        let success = 0
        let info = 0
        let warning = 0
        let fail = 0
        for (let index = 0; index < this.props.groupData.length; index++) {
            if (this.props.groupData[index].score === 128) {
                success = ((success + 1) * 100) / 44
                console.log(success)
            }
            else if (this.props.groupData[index].score >= 101 && this.props.groupData[index].score <= 127) {
                info = ((info + 1) * 100) / 44

            }
            else if (this.props.groupData[index].score >= 81 && this.props.groupData[index].score <= 100) {
                warning = ((warning + 1) * 100) / 44
            }
            else if (this.props.groupData[index].score >= 0 && this.props.groupData[index].score <= 80) {
                fail = ((fail + 1) * 100) / 44
                console.log(fail)
            }
            else if (this.props.groupData[index].score === 0 || this.props.groupData[index].score === null || this.props.groupData[index].score === undefined) {
                fail = ((fail + 1) * 100) / 44
                console.log(fail)
            }
        }
        console.log(success, info, warning, fail)
        this.setState({ per_success: success, per_info: info, per_warning: warning, per_fail: fail })
    }
    render() {
        let data = this.props.groupData
        return (
            <div className="table-score">
                {/* <Progress multi>
                    <Progress bar animated color="danger" value={this.state.per_fail} > 0-80 </Progress>
                    <Progress bar animated color="warning" value={this.state.per_warning}> 81-100 </Progress>
                    <Progress bar animated color="info" value={this.state.per_info}> 101-127 </Progress>
                    <Progress bar animated color="success" value={this.state.per_success}> 128 </Progress>

                </Progress> */}
                <Progress percent={this.state.per_fail} active size='large' color='red' >
                    Active
                </Progress>
                <Progress percent={this.state.per_warning} active size='large' color='orange'>
                    Active
                </Progress>
                <Progress percent={this.state.per_info} active size='large' color='blue'>
                    Active
                </Progress>
                <Progress percent={this.state.per_success} active size='large' color='green'>
                    Active
                </Progress>

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
                                items.score === 128 ?
                                    <Table.Row positive textAlign='center' >
                                        <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                        <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                        <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                        <Table.Cell><label>{items.score} / 128</label></Table.Cell>
                                    </Table.Row>
                                    :
                                    items.score >= 101 && items.score <= 127 ?
                                        <Table.Row info textAlign='center' >
                                            <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                            <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                            <Table.Cell><label>{items.score} / 128</label></Table.Cell>
                                        </Table.Row>
                                        :
                                        items.score >= 81 && items.score <= 100 ?
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