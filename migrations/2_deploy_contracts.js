const Decentragram = artifacts.require("./src/contracts/Decentragram");

module.exports = function(deployer) {
  deployer.deploy(Decentragram);
};
