import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CRYPTO_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Bitcoin',
    description:
      'The first cryptocurrency, created in 2009. Bitcoin is a decentralized digital currency that operates on a peer-to-peer network.',
  },
  {
    image: propsImg,
    title: 'Ethereum',
    description:
      'A blockchain platform with smart contract functionality. Ethereum allows developers to build decentralized applications (dApps).',
  },
  {
    image: jsxImg,
    title: 'Dogecoin',
    description:
      'Originally started as a joke, Dogecoin has become a widely recognized cryptocurrency, popular for its meme culture.',
  },
  {
    image: stateImg,
    title: 'Blockchain',
    description:
      'The underlying technology of cryptocurrencies. A distributed ledger that records all transactions securely and transparently.',
  },
];

export const CRYPTO_EXAMPLES = {
  bitcoin: {
    title: 'Bitcoin',
    description:
      'Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.',
    code: `
const bitcoinTransaction = {
  sender: "Alice",
  receiver: "Bob",
  amount: 0.5,
  timestamp: new Date(),
};

console.log("Bitcoin transaction:", bitcoinTransaction);`,
  },
  ethereum: {
    title: 'Ethereum',
    description:
      'Ethereum supports smart contracts - programs that automatically execute when predefined conditions are met.',
    code: `
const smartContract = {
  name: "Escrow",
  condition: "PaymentReceived",
  action: "ReleaseFunds",
};

console.log("Ethereum Smart Contract:", smartContract);`,
  },
  dogecoin: {
    title: 'Dogecoin',
    description:
      'Dogecoin is often used for tipping content creators or small peer-to-peer transactions.',
    code: `
const dogecoinTip = {
  sender: "Charlie",
  receiver: "ContentCreator",
  amount: 100,
  currency: "DOGE",
};

console.log("Dogecoin Tip:", dogecoinTip);`,
  },
  blockchain: {
    title: 'Blockchain',
    description:
      'Blockchain ensures the immutability and security of data, which makes it a trusted technology for cryptocurrencies and beyond.',
    code: `
class Block {
  constructor(index, data, previousHash = '') {
    this.index = index;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return JSON.stringify(this.data) + this.timestamp + this.previousHash;
  }
}

const genesisBlock = new Block(0, { balance: 100 }, "0");
console.log("Genesis Block:", genesisBlock);`,
  },
};
