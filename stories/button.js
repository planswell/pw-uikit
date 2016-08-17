import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button } from './../packages/pw-component-button';
import { Container } from './../packages/pw-container';

storiesOf('Button', module)
  .add('with text', () => (
    <Container>
      <Button>Test</Button>
    </Container>
  ));
