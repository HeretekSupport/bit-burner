/** @param {NS} ns */
export async function main(ns) {
  const execs = [
    'BruteSSH.exe',
    'FTPCrack.exe',
    'relaySMTP.exe',
    'HTTPWorm.exe',
    'SQLInject.exe',
  ];

  //Check what scripts we have
  let existingScripts = [];
  let nukedTargets = [];
  let failedTargets = [];

  execs.map((x) => {
    ns.fileExists(x, 'home') ? existingScripts.push(x) : null;
  })


  ns.args.forEach((target) => {
    existingScripts.forEach((script) => {
      switch (script) {
        case 'BruteSSH.exe':
          ns.brutessh(target);
          break;
        case 'FTPCrack.exe':
          ns.ftpcrack(target);
          break;
        case 'relaySMTP.exe':
          ns.relaysmtp(target);
          break;
        case 'HTTPWorm.exe':
          ns.httpworm(target);
          break;
        case 'SQLInject.exe':
          ns.sqlinject(target);
          break;
      }
    })
    ns.nuke(target) ? nukedTargets.push(target) : failedTargets.push(target);
  })
  ns.alert(`NUKED targets: ${nukedTargets} \nFAILED targets: ${failedTargets}`);
}