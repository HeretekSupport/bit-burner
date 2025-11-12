/** @param {NS} ns */
export async function main(ns) {
  let startCount = ns.args[0];
  let stopCount = ns.args[1];
  let ramAmt = ns.args[2]; //1024 for the 1tb servers
  const serverPrice = ns.getPurchasedServerCost(ramAmt);

  let homeMoney = ns.getServerMoneyAvailable("home");

  for (startCount; startCount < stopCount; startCount++) {
    if (homeMoney > serverPrice) {
      ns.purchaseServer(`Destroyer${startCount}`, ramAmt);
      ns.tprint(`Bought Destroyer${startCount}`);
      homeMoney = ns.getServerMoneyAvailable("home");
    }
  }
};