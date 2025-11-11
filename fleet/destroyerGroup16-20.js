/** @param {NS} ns */
export async function main(ns) {
  const destroyerGroup = ['Destroyer16', 'Destroyer17', 'Destroyer18', 'Destroyer19', 'Destroyer20']
  const scripts = ['weakenplace.js', 'growplace.js', 'hackplace.js'];;
  const weakenMaxThreads = calcScriptMaxThreads(destroyerGroup[0], scripts[0])
  const growMaxThreads = calcScriptMaxThreads(destroyerGroup[1], scripts[1])
  const hackMaxThreads = calcScriptMaxThreads(destroyerGroup[2], scripts[2])
  const target = ns.args[0];

  function calcScriptMaxThreads(server, script) {
    return Math.floor(ns.getServerMaxRam(server) / ns.getScriptRam(script));
  }


  destroyerGroup.forEach(destroyer => {
    switch (destroyer) {
      case 'Destroyer16':
      case 'Destroyer17':
        ns.exec(scripts[0], destroyer, weakenMaxThreads, target);
        break;
      case 'Destroyer18':
      case 'Destroyer19':
        ns.exec(scripts[1], destroyer, growMaxThreads, target);
        break;
      case 'Destroyer20':
        ns.exec(scripts[2], destroyer, hackMaxThreads, target);
        break;
    }
  })

}