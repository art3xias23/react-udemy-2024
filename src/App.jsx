import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react';


function App() {

  var [tabComponent, setTabComponent] = useState("Dynamic Content");

  function handleSelect(name) {
    setTabComponent(name);
    console.log(name);
  }

  console.log("Tab Component Rendering")
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
          </ul>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => { handleSelect("Components1") }}>Components</TabButton>
              <TabButton onSelect={() => { handleSelect("JSX") }}>JSX</TabButton>
              <TabButton onSelect={() => { handleSelect("Props") }}>Props</TabButton>
              <TabButton onSelect={() => { handleSelect("State") }}>State</TabButton>
            </menu>
            {tabComponent}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
