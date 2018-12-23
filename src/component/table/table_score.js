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
                                <Table.HeaderCell>Food</Table.HeaderCell>
                                <Table.HeaderCell>Calories</Table.HeaderCell>
                                <Table.HeaderCell>Protein</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.dataGroup.map((items, i) =>
                                <Table.Row>
                                    <Table.Cell>{items}</Table.Cell>
                                </Table.Row>
                            )

                            }
                            <Table.Row>
                                <Table.Cell>Apples</Table.Cell>
                                <Table.Cell>200</Table.Cell>
                                <Table.Cell>0g</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Orange</Table.Cell>
                                <Table.Cell>310</Table.Cell>
                                <Table.Cell>0g</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                }
            </div>
        )
    }
}
export default TableScore