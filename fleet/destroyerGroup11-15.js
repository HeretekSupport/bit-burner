/** @param {NS} ns */
export async function main(ns) {
  const destroyerGroup = ['Destroyer11', 'Destroyer12', 'Destroyer13', 'Destroyer14', 'Destroyer15']
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
      case 'Destroyer11':
      case 'Destroyer12':
        ns.exec(scripts[0], destroyer, weakenMaxThreads, target);
        break;
      case 'Destroyer13':
      case 'Destroyer14':
        ns.exec(scripts[1], destroyer, growMaxThreads, target);
        break;
      case 'Destroyer15':
        ns.exec(scripts[2], destroyer, hackMaxThreads, target);
        break;
    }
  })

}