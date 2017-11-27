import React, { Component } from 'react'
import { Input, Col, Row, Button } from 'react-materialize'

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {
    return (
      <div>
        <Row>
          <Input
            s={6}
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type='text'
            placeholder='A description for the link'
          />
          <Input
            s={6}
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type='text'
            placeholder='An URL for the link'
          />
        </Row>
        <Row>
          <Col s={12}>
            <Button onClick={() => this._createLink()}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    )
  }

  _createLink = async () => {
    // ... you'll implement this in a bit
  }
}

export default CreateLink
