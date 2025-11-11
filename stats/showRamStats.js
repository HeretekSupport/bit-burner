/** @param {NS} ns */
export async function main(ns) {
  const ramInUse = ns.getServerUsedRam('home');
  const ramFree = ns.getServerMaxRam('home') - ramInUse;

  ns.alert(`USED RAM: ${Math.floor(ramInUse)} GB \nFREE RAM: ${Math.floor(ramFree)} GB`);

}