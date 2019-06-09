import React from "react";
import { Container, Row, Col } from 'react-grid-system';

export default class UniversiteList extends React.Component {
  state = {
    isLoading: true,
    students: [],
    error: null
  };

  fetchStudents() {
    fetch(`http://localhost:3000/students`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          students: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchStudents();
  }
  render() {
    const { isLoading, students, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          students.map(student => {
            const { id, name, university } = student;
            return (
              <div key={id}>
      			    <Container className='table'>
      			      <Row debug  className='row'>
      			        <Col debug sm={1}>
      			          {id}
      			        </Col>
      			        <Col debug sm={5}>
      			          {name}
      			        </Col>
      			        <Col debug sm={5}>
      			          {university}
      			        </Col>
      			      </Row>
      			    </Container>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}