import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react';


function App() {

  var [selectedTopic, setSelectedTopic] = useState();
  var tabContent = "Please select a topic";
  if (selectedTopic) {
    tabContent = 
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code><p>{EXAMPLES[selectedTopic].code}</p></code>
        </pre>
      </div>
  }
  function handleSelect(name) {
    setSelectedTopic(name);
  }

  console.log("Tab Component Rendering")
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => { handleSelect("components") }}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => { handleSelect("jsx") }}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => { handleSelect("props") }}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => { handleSelect("state") }}>State</TabButton>
            </menu>
          </section>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
