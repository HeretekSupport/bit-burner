/** @param {NS} ns */
export async function main(ns) {
  ns.args.forEach(arg => {
    ns.run('weakenplace.js', 300, arg);
    ns.run('growplace.js', 400, arg);
    ns.run('hackplace.js', 100, arg);
  })
}