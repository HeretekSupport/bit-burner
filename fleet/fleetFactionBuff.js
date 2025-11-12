/** @param {NS} ns */
export async function main(ns) {
  const serverFleet = ns.getPurchasedServers();
  serverFleet.forEach(server => {
    const threads = Math.floor(ns.getServerMaxRam(server) / ns.getScriptRam('factionBuff.js', server));
    ns.exec('factionBuff.js', server, threads)
  });
}