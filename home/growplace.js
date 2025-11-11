/** @param {NS} ns */
export async function main(ns) {

  if (ns.args.length > 0) {
    const place = ns.args[0]
    while (true) {
      await ns.grow(place);
    }
  } else {
    ns.alert('No target passed as arg. Provide a string as an arg');
  }
}