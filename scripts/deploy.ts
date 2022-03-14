import { ethers, run } from "hardhat";
import { MaticToken__factory, TestNFT__factory } from "../typechain";

async function main() {
  const [signer] = await ethers.getSigners();

  const maticToken = await new MaticToken__factory(signer).deploy();
  await maticToken.deployed();
  console.log('Matic Token deployed to:', maticToken.address);

  const testNft = await new TestNFT__factory(signer).deploy();
  await testNft.deployed();
  console.log('TestNFT deployed to:', testNft.address);

  await testNft.safeMint(signer.address, 'https://ipfs.io/ipfs/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR')

  await run('verify:verify', {
    address: maticToken.address,
    contract: 'contracts/MaticToken.sol:MaticToken'
  })

  await run('verify:verify', {
    address: testNft.address,
    contract: 'contracts/TestNft.sol:TestNft'
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
