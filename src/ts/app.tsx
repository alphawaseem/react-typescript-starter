import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<void, void> {
    public render() {
        return <h1>Hello Waseem!</h1>;
    }
}

import "../scss/styles.scss";

ReactDOM.render(<App />, document.getElementsByTagName("main")[0]);
