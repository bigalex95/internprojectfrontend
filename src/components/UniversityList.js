import React from "react";
import { Container, Row, Col } from 'react-grid-system';

export default class UniversityList extends React.Component {
  state = {
    isLoading: true,
    universities: [],
    error: null
  };

  fetchUniversities() {
    fetch(`http://localhost:3000/data/universities`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          universities: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUniversities();
  }
  render() {
    const { isLoading, universities, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          universities.map(university => {
            const { id, name, web_page } = university;
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
      			          {web_page}
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