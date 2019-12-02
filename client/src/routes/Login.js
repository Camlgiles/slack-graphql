import React from 'react';
import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';
import { Input, Container, Header, Button } from "semantic-ui-react";
import { gql, graphql } from "react-apollo";

export default observer(class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  }
  // you can bind "this" using function above OR:
  // add to constructor: this.onChange = this.onChange.bind(this);
  // then use: onChange(e) {
  //    const { name, value } = e.target;
  //   this[name] = value;
  // }


  onSubmit = () => {
    const {email, password} = this;
    console.log(email, password)
  }







  render() {
    const { email, password } = this;

    return (
      <Container text>
        <Header as="h2">Login</Header>

        <Input
          // error={!!usernameError} //error is from semantic-ui
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          // error={!!passwordError}
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        {/* { emailError || passwordError ? (
          <Message
            // errors
            header="There were some errors with your submission"
            list={errorList}
          />
        ) : null} */}
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
});