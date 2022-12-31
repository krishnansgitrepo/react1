const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
const reactHeading = React.createElement("h1", {}, "Namaste React!!");
reactRoot.render(reactHeading);