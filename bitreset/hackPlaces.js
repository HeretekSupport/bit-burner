/** @param {NS} ns */
export async function main(ns) {
  ns.args.forEach(arg => {
    ns.run('weakenplace.js', 5, arg);
    ns.run('growplace.js', 5, arg);
    ns.run('hackplace.js', 2, arg);
  })
}