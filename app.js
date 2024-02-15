/*
* <div>
*   <div>
**    <h1></h1>
      <h2></h2>
** </div>
   <div>
**    <h1></h1>
      <h2></h2>
** </div>
**</div>
*
*/const heading =React.createElement("div",
{"id":"parent"},
[React.createElement("div",
{"id":"child1"},
[React.createElement("h1",
{"id":"sibling1"},"I M H1"),React.createElement("h2",
{"id":"sibling2"},"I M H2")]),
React.createElement("div",
{"id":"child2"},
[React.createElement("h1",
{"id":"sibling3"},"I M H1"),React.createElement("h2",
{"id":"sibling4"},"I M H2")])])
  const root=ReactDOM.createRoot(document.querySelector('#root'));
  root.render(heading);