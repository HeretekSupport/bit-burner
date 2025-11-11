/** @param {NS} ns */
export async function main(ns) {
  const serverPrice = ns.getPurchasedServerCost(16);

  let homeMoney = ns.getServerMoneyAvailable("home");

  for (let i = 21; i < 41; i++) {
    ns.purchaseServer(`Destroyer${i}`, 16)
  }
}