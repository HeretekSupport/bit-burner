/** @param {NS} ns */
export async function main(ns) {
  /* IN DEVELOPMENT
  1) check how many porthacks we have
  2) set the number to a var
  3) scan (depth 1)
  4) for each item where the required open ports = number of porthacks we have:
  - run porthack
  - if nuked -> write to openedTargets.txt
  5) 
   */



  const portExecs = ['brutessh.exe', 'relaysmtp.exe', 'httpworm.exe', 'ftpcrack.exe', 'sqlinject.exe'];
  let execs = ns.ls('home');
  let numPortHacks;

  execs = execs
    .filter(file => portExecs.includes(file.toLowerCase()));

  numPortHacks = execs.length;

  function portForceOneLevel() {
    const targets = ns.scan();
    targets.forEach(target => {
      execs.forEach(exec => ns.run(exec, 1, target));
      run('NUKE.exe', 1, target) ? 
      ns.write('openedTargets.txt', target, "a") : 
      ns.write('failedTargets', target, "a");
    })
  }
}