import blockChainImg from "../../assets/blockchain.png";
import "./Header.css";

// Blockchain-specific descriptions
const blockchainDescriptions = [
  "Secure",
  "Decentralized",
  "Innovative",
  "Future-proof",
  "Transparent",
];

// Generates a random integer within the range of 0 to max (inclusive)
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  // Dynamically select a description
  const description =
    blockchainDescriptions[genRandomInt(blockchainDescriptions.length - 1)];

  return (
    <header>
      <img src={blockChainImg} alt="Blockchain concept visualization" />
      <h1>Blockchain Essentials</h1>
      <p>
        {description} blockchain concepts you will need to build cutting-edge
        decentralized applications!
      </p>
    </header>
  );
}
