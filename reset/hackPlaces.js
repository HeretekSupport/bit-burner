/** @param {NS} ns */
export async function main(ns) {
  ns.args.forEach(arg => {
    ns.run('weakenplace.js', 30, arg);
    ns.run('growplace.js', 50, arg);
    ns.run('hackplace.js', 7, arg);
  })
}