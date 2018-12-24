import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Dropdown, Form, FormField } from 'semantic-ui-react'
import TableScore from '../table/table_score'
import dataGroup from '../../data/dataGroup'
import firebase from 'firebase'
import firebaseConfig from '../../config/firebaseConfig'
import './show.css'

class ShowScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status_table: false,
            groupData: []
        };
        firebase.initializeApp(firebaseConfig)
    }
    handleChange = (e, { name, value }) => {
        this.setState({ name: value })
        this.fetchData(value)
    }
    fetchData(group) {
        const itemsRef = firebase.database().ref('group').child(group);
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            console.log(Object.values(items))
            this.setState({ groupData: Object.values(items) ,status_table: true})

        })
        console.log(itemsRef)
    }
    render() {
        return (
            <div>
                <h2 id="head">ดูคะแนน</h2>
                <div className="dropdown-group">
                    <Form>
                        <FormField>
                            <Dropdown
                                placeholder='เลือกหมวด'
                                fluid
                                selection options={dataGroup}
                                id="head"
                                onChange={this.handleChange}
                            />
                        </FormField>
                    </Form>
                </div>
                <div className="table-score">
                    {this.state.status_table &&
                        <TableScore
                            groupData={this.state.groupData}
                        />
                    }
                </div>

            </div>
        );
    }
}
export default ShowScore