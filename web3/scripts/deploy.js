const hre = require("hardhat");

async function main() {
  const socialMediaDapp = await hre.ethers.deployContract("SocialMediaDapp");

  await socialMediaDapp.waitForDeployment();

  console.log(` SocialMediaDapp: ${socialMediaDapp.target}`);
}

//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
