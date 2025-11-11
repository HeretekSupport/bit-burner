/** @param {NS} ns */
export async function main(ns) {
  const serverList = ns.getPurchasedServers();

  serverList.forEach(server => ns.upgradePurchasedServer(server, ns.args[0]));

}