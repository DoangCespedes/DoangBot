import config from '../utils/config.jsx';
import ActionProvider from '../utils/ActionProvider.jsx';
import MessageParser from '../utils/MessageParser.jsx'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Styles.css'

const SimpleForm = () => {
  return (
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
  )
}

export default SimpleForm