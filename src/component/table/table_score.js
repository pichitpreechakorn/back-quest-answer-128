import React from 'react'
import { Table } from 'semantic-ui-react'

const test = [

]

class TableScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status_table: false,
            dataGroup: []
        }
    }

    componentDidMount() {
        let data = this.props.groupData
        console.log(this.props.groupData)
        
        this.setState({ dataGroup: this.props.groupData.profile, status_table: true })
    }
    render() {
        let data = this.props.groupData
        return (
            <div>
                {this.state.status_table &&
                    <Table color="blue" key="blue">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>เลขที่หมวด</Table.HeaderCell>
                                <Table.HeaderCell>ชื่อ - นามสกุล</Table.HeaderCell>
                                <Table.HeaderCell>เลขที่ความสูง</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            { this.props.groupData.map((items, i) =>
                                <Table.Row>
                                    <Table.Cell>{items.profile.ground}{items.profile.number}</Table.Cell>
                                    <Table.Cell>{items.profile.name}  {items.profile.lastname}</Table.Cell>
                                    <Table.Cell>{items.profile.higthNumber}</Table.Cell>
                                </Table.Row>
                            )

                            }
                        </Table.Body>
                    </Table>
                }
            </div>
        )
    }
}
export default TableScore