// const heading = React.createElement("h1",{id:"root"},"Khan");
const heading2 = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tah"),
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);