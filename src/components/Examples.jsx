import TabButton from "./TabButton";
import React, { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import { CRYPTO_EXAMPLES } from "../dataSet";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); // Must be inside

  const exampleArray = Object.values(CRYPTO_EXAMPLES); // Converts object values into an array


  function handleSelect(newTopic) {
    setSelectedTopic(newTopic);
  }

  // tabContent
  const tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{selectedTopic.title}</h3>
      <p>{selectedTopic.description}</p>
      <pre>
        <code>{selectedTopic.code}</code>
      </pre>
    </div>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={exampleArray.map((item, index) => (
          <TabButton 
            key={index}
            isSelected={selectedTopic === item}
            onClick={() => handleSelect(item)}
          >{item.title}</TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
