/** @param {NS} ns */
export async function main(ns) {
  ns.args.forEach(arg => {
    ns.run('weakenplace.js', 200, arg);
    ns.run('growplace.js', 250, arg);
    ns.run('hackplace.js', 50, arg);
  })
}