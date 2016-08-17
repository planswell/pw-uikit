import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Input, InputGroup } from './../packages/pw-component-input';
import { Container } from './../packages/pw-container';

storiesOf('InputGroup', module)
  .add('with text', () => (
    <Container>
      <InputGroup>
        <Input />
        <Input />
      </InputGroup>
    </Container>
  ));
