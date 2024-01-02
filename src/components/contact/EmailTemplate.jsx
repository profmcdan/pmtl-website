import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

const EmailTemplate = ({title, message, senderName, senderEmail})  => {
  return (
    <Html lang="en">
      <h3>{title}</h3>
      <p><span>You have a message from {senderName} - {senderEmail}</span></p>
      <p>Message : <span>{message}</span></p>
    </Html>
  );
}

export default EmailTemplate;