/** @param {NS} ns */
export async function main(ns) {
  const targets = ns.args;
  const files = ['weakenplace.js','growplace.js','hackplace.js'];

  targets.forEach(target => {
    ns.scp(files, target);
  })
}