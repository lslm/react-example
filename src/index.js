const createElement = React.createElement

const HelloComponentButton = () => {
  const sayHello = () => {
    alert('Boas vindas ao React com JSX')
  }

  return (
    <button className="button" onClick={sayHello}>Diga olá com JSX</button>
  )
}

const rootDiv = document.getElementById('root')
ReactDOM.createRoot(rootDiv).render(HelloComponentButton())
