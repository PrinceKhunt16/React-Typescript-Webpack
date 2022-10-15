import "./style.css";
import Image from "./react.png";

const App = () => {
    return (
        <>
            <h1>React Typescript Webpack - {process.env.NODE_ENV} - {process.env.name}</h1>
            <img src={Image} alt="" width={300} />
        </>
    );
}

export default App;