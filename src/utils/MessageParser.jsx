import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);

    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }
    if (message.includes("widget")) {
      actions.handleCustomWidget();
    }
    if (message.includes("formulario")) {
      actions.handleCarForm();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;