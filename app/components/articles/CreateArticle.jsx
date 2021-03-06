import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {};
    this.state.Article = {};
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputTitle(article) {
    this.setState({ Article: article });
  }

  handleInputContent(article) {
    this.setState({ Article: article });
  }

  _formSubmit(value) {
    ArticleStore.addArticle(value, this.history);
  }

  render() {

    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create Article</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} Article={this.state.Article}
               handleInputTitle={this.handleInputTitle}
              handleInputContent={this.handleInputContent}  />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CreateArticle;
