import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatBot from 'react-simple-chatbot';

const styleLink = {
  color: 'black'
}

const steps = [
  {
    id: 'intro',
    message: 'Hola Bienvenido a mi sitio web!',
    trigger: 'question'
  },
  {
    id: 'question',
    message: '¿Quieres contactarme?',
    trigger: 'user-response-1'
  },
  {
    id: 'user-response-1',
    options: [
      {value: 'y', label: 'Si', trigger: 'user-response-yes'},
      {value: 'n', label: 'No', trigger: 'user-response-no'}
    ]
  },
  {
    id: 'user-response-yes',
    message: 'Grandioso! Cómo te llamas?',
    trigger:'intro-user',
  },
  {
    id: 'intro-user',
    user: true,
    trigger: 'user-response-2',
  },
  {
    id: 'user-response-2',
    message: 'Hola {previousValue}, mucho gusto!',
    trigger: 'question-2'
  },
  {
    id: 'question-2',
    message: 'Podrias dejarme tu email?',
    trigger: 'email'
  },
  {
    id: 'email',
    user: true,
    validator: (value) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        {
          return true;
        }
      else
        {
          return'Por favor ingresa un email válido.';
        }
    },
    trigger: 'question-3',
  },
  {
    id: 'question-3',
    message: 'Gracias! 😁 Ahora, podrias dejarme tu mensaje?',
    trigger: 'user-response-3'
  },
  {
    id: 'user-response-3',
    user: true,
    trigger: 'question-4',
  },
  {
    id: 'question-4',
    message: 'Gracias por tu mensaje! 🥳 Me pondre en contacto contigo!',
    trigger: 'question-5'
  },
  {
    id: 'question-5',
    message: 'Adios! 🙋‍♂️',
    end: true
  },
  {
    id: 'user-response-no',
    message: 'Que lástima! 😥',
    trigger: 'my-social'
  },
  {
    id: 'my-social',
    component: (
      <div>Te dejo mis redes sociales por si cambias de opinion <a href="https://www.linkedin.com/in/arturo-romero-b01b641a7/" target="_blank" rel="noreferrer" style={styleLink}>LinkedIn</a></div>
    ),
    asMessage: true,
    end: true
  }
];

const config ={
  width: "400px",
  height: "500px",
  floating: true,
  botDelay: 2000
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <ChatBot {...config} recognitionEnable={true} steps={steps} />
    </div>,
  </React.StrictMode>,
  document.getElementById('root')
);
