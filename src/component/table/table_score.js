import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap'
import dataQuest from '../../data/dataQuest'
import dataFail from '../../data/dataFail'
import './table_score'
const test = [

]

class TableScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status_table: false,
            dataGroup: [],
            open: false
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
                            <Table.Row>
                                <Table.HeaderCell><label>เลขที่หมวด</label></Table.HeaderCell>
                                <Table.HeaderCell className="row-table"><label>ชื่อ - นามสกุล</label></Table.HeaderCell>
                                <Table.HeaderCell><label>เลขที่ความสูง</label></Table.HeaderCell>
                                <Table.HeaderCell><label>คะแนน</label></Table.HeaderCell>
                                <Table.HeaderCell><label>ข้อที่ตอบถูก</label></Table.HeaderCell>
                                <Table.HeaderCell><label>ข้อที่ตอบผิด</label></Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.props.groupData.map((items, i) =>
                                <Table.Row>
                                    <Table.Cell><label>{items.profile.ground}{items.profile.number}</label></Table.Cell>
                                    <Table.Cell><label>{items.profile.name}  {items.profile.lastname}</label></Table.Cell>
                                    <Table.Cell><label>{items.profile.higthNumber}</label></Table.Cell>
                                    <Table.Cell><label>{items.score}</label></Table.Cell>
                                    <Table.Cell>
                                        <Button icon labelPosition='left' color="green" onClick={() => this.setState({ open: true })}>
                                            <label>ดูข้อที่ตอบถูก</label>
                                            <Icon name='check' />
                                        </Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button icon labelPosition='left' color="red" onClick={() => this.setState({ open: true })}>
                                            <label>ดูข้อที่ตอบผิด</label>
                                            <Icon name='delete' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )

                            }
                        </Table.Body>
                    </Table>

                }
                <Modal isOpen={this.state.open} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {this.props.groupData.map((items, i) =>
                            <div>
                                {items.fail[i].status === true ?
                                    <label id="red">{items.fail.qust}  {items.fail.answer}</label>
                                    :
                                    <label id="green">{items.fail.qust}  {items.fail.answer}</label>
                                }

                            </div>
                            // <p id="green">{items.suscess[i]}</p>

                        )}

                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}
export default TableScore