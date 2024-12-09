// CRYPTO_CONCEPTS Feature - Section

import CoreConcept from "./CoreConcept"; // component
import { CRYPTO_CONCEPTS } from "../dataSet";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CRYPTO_CONCEPTS.map((item, index) => (
          <CoreConcept key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}
