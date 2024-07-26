import React from 'react';

import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture';
import { BotAvatar } from '../components/botAvatar/BotAvatar';
import MyWidget from '../components/todos/MyWidget';
import CarFormWidget from '../components/formWidget/CarFormWidget';

const botName = 'DoangBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  
  botName: botName,
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}/>
  },
  customStyles: {
    
    botMessageBox: {
      backgroundColor: 'grey',
    },
    chatButton: {
      backgroundColor: 'grey',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "myWidget",
      widgetFunc: (props) => <MyWidget {...props} />,
      mapStateToProps: ["someState"], // Opcional: mapea el estado del bot a las props del widget
      props: {
        someProp: "valor de ejemplo"
      }
    },
    {
      widgetName: "carForm",
      widgetFunc: (props) => <CarFormWidget {...props} />,
      mapStateToProps: ["someState"], // Opcional: mapea el estado del bot a las props del widget
      props: {
        someProp: "valor de ejemplo222"
      }
    },
    
  ],
};

export default config;