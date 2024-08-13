const heading =React.createElement(
  "h1",
  {id:"heading",xyz:"abc"},
  "Hellow world from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);