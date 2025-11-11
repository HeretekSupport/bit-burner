/** @param {NS} ns */
export async function main(ns) {
  const totalServers = ns.getPurchasedServers().length;
  const serverBaseName = 'Destroyer';

  for (let i = 1; i <= totalServers; i++){
    ns.killall(`${serverBaseName}${i}`)
  }
}