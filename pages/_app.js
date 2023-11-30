import '../styles/global.css';

const App = (props) => {
    const { Component, pageProps } = props;
    return (<Component {...pageProps} />);
};

export default App;
