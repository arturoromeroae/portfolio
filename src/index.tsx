import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatBot from 'react-simple-chatbot';

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
    message: 'Grandioso! Dejame tu mensaje y tu contacto y te escribire lo antes posible',
    end: true
  },
  {
    id: 'user-response-no',
    message: 'Que lástima! 😥',
    trigger: 'my-social'
  },
  {
    id: 'my-social',
    message: 'Te dejo mis redes sociales por si cambias de opinion https://www.linkedin.com/in/arturo-romero-b01b641a7/',
    end: true
  }
];

const config ={
  width: "400px",
  height: "500px",
  floating: true,
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
