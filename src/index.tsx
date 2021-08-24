import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatBot from 'react-simple-chatbot';

function GoToEmail(){
  window.open('mailto:arturo@arturoromero.online', "_blank");
  return <p>Gracias por contactarme! 👏</p>
}

function GoToLinked(){
  window.open('https://www.linkedin.com/in/arturo-romero-b01b641a7/', "_blank");
  return <p>Gracias por contactarme! 👏</p>
}

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
    message: 'Selecciona como deseas contactarme',
    trigger: 'question-3'
  },
  {
  id: 'question-3',
  options: [
    {value: 'email', label: 'Email 📧', trigger: 'user-response-email'},
    {value: 'linked', label: 'LinkedIn 💼', trigger: 'user-response-linked'}
  ]
  },
  {
    id: 'user-response-email',
    component: <GoToEmail />,
    asMessage: true,
    end: true
  },
  {
    id: 'user-response-linked',
    component: <GoToLinked />,
    asMessage: true,
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
      <div>Te dejo mis redes sociales por si cambias de opinion <a href="https://www.linkedin.com/in/arturo-romero-b01b641a7/" target="_blank" rel="noreferrer" style={styleLink}>LinkedIn 💼</a><br></br><a href="mailto:arturo@arturoromero.online" target="_blank" rel="noreferrer" style={styleLink}>Email 📧</a></div>
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
