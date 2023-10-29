var createElement = React.createElement;

var HelloComponentButton = function HelloComponentButton() {
  var sayHello = function sayHello() {
    alert('Boas vindas ao React com JSX');
  };

  return React.createElement(
    'button',
    { className: 'button', onClick: sayHello },
    'Diga ol\xE1 com JSX'
  );
};

var rootDiv = document.getElementById('root');
ReactDOM.createRoot(rootDiv).render(HelloComponentButton());