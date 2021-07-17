const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')


const provider = new HDWalletProvider(
    'neither shine scout hood find lawn pelican option extra end cup infant',
    'https://rinkeby.infura.io/v3/4b4061cb466d42319ccee3b9c76fc0f9'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('attempting to deploy from acc', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address)
}
deploy()