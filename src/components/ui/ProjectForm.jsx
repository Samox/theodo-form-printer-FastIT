import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button, Icon } from 'semantic-ui-react'


class ProjectForm extends PureComponent {
  constructor(props) {
    super(props);
    this.printForm = this.printForm.bind(this)
  }

  printForm(event, data) {
    event.preventDefault();
    print();
  }

  render() {
    return <Form>
      <Button className="no-print" onClick={ this.printForm } icon>
        <Icon name='print' />
      </Button>
      <Segment vertical>
        <Header as="h3">How do you feel about the speed of the team?</Header>
        <Form.Radio label='5 - Excellente' checked={ this.props.form.speed ==='5 - Excellente' } />
        <Form.Radio label='4 - Très bonne' checked={ this.props.form.speed ==='4 - Très bonne' } />
        <Form.Radio label='3 - Bonne' checked={ this.props.form.speed ==='3 - Bonne' } />
        <Form.Radio label='2 - Moyenne' checked={ this.props.form.speed ==='2 - Moyenne' } />
        <Form.Radio label='1 - Insuffisante' checked={ this.props.form.speed ==='1 - Insuffisante' } />
        <Form.Radio label='0 - Très insuffisante' checked={ this.props.form.speed ==='0 - Très insuffisante' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">How do you feel about the quality of the collaboration with Theodo?</Header>
        <Form.Radio label='5 - Excellente' checked={ this.props.form.colaboration ==='5 - Excellente' } />
        <Form.Radio label='4 - Très bonne' checked={ this.props.form.colaboration ==='4 - Très bonne' } />
        <Form.Radio label='3 - Bonne' checked={ this.props.form.colaboration ==='3 - Bonne' } />
        <Form.Radio label='2 - Moyenne' checked={ this.props.form.colaboration ==='2 - Moyenne' } />
        <Form.Radio label='1 - Insuffisante' checked={ this.props.form.colaboration ==='1 - Insuffisante' } />
        <Form.Radio label='0 - Très insuffisante' checked={ this.props.form.colaboration ==='0 - Très insuffisante' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">What is the main priority the team should concentrate on to improve the score?</Header>
        { this.props.form['client-voice'].split(/\n/).map((string, index) => <p key={`client-voice-${index}`}>{ string }</p>) }
      </Segment>
      <Segment vertical>
        <Header as="h3">Should you have a magic wand, what is "the" thing you would change at Theodo?</Header>
        { this.props.form['magic-wand'].split(/\n/).map((string, index) => <p key={`magix-wand-${index}`}>{ string }</p>) }
      </Segment>
      <Segment vertical>
        <Header as="h3">Would you recommend Theodo?</Header>
        <Form.Radio label='Oui bien sûr' checked={ this.props.form.recommendation === 'Oui bien sûr' } />
        <Form.Radio label='Oui' checked={ this.props.form.recommendation === 'Oui' } />
        <Form.Radio label='Pas vraiment' checked={ this.props.form.recommendation === 'Pas vraiment' } />
        <Form.Radio label='Pas du tout' checked={ this.props.form.recommendation === 'Pas du tout' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">Would you like to have a sales appointment with your Project Director this week?</Header>
        <Form.Radio label='Oui' checked={ this.props.form['sales-appointement'] === 'Oui' } />
        <Form.Radio label='Non' checked={ this.props.form['sales-appointement'] === 'Non' } />
      </Segment>
    </Form>;
  }
}

ProjectForm.propTypes = {
  form: PropTypes.object.isRequired,
}

export default ProjectForm;
