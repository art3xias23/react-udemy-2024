import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx"

export default function Examples() {

    var [selectedTopic, setSelectedTopic] = useState("components");
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

    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => { setSelectedTopic("components") }}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => { setSelectedTopic("jsx") }}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => { setSelectedTopic("props") }}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => { setSelectedTopic("state") }}>State</TabButton>
            </menu>
            {tabContent}
        </Section>)
}