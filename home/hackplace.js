/** @param {NS} ns */
export async function main(ns) {
  if (ns.args.length > 0) {
    const place = ns.args[0]
    while (true) {
      await ns.hack(place);
      //await ns.sleep(350000);
      await ns.sleep(90000)
    }
  } else {
    ns.alert('No target passed as arg. Provide a string as an arg');
  }
}

