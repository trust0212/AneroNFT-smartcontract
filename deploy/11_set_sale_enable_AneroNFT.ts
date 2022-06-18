import { DeployFunction } from 'hardhat-deploy/types';

const fn: DeployFunction = async function ({ deployments: { deploy, get, execute }, ethers: { getSigners, provider, utils }, network }) {
  const deployer = (await getSigners())[0];

  // Set sale enable
  await execute(
    'AneroToken',
    {from: deployer.address, log: true},
    'withdrawMoney',
    "0x1ecF212beaA83E1E892fDc8E579C91Cd8D0102A2",
    utils.parseEther('40')
  )
};
fn.skip = async (hre) => {
  return true;
  // Skip this on kovan.
  const chain = parseInt(await hre.getChainId());
  return chain != 1;
};
fn.tags = ['Anero Config Enable'];
fn.dependencies = ['AneroToken']
export default fn;
