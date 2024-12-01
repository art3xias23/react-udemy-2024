import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx";
import { Fragment } from "react";

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
            <Tabs ButtonsContainer = "menu"
            buttons={
                <Fragment>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => { setSelectedTopic("components") }}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => { setSelectedTopic("jsx") }}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => { setSelectedTopic("props") }}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => { setSelectedTopic("state") }}>State</TabButton>
                </Fragment>
            }>
                {tabContent}
            </Tabs>
        </Section>)
}