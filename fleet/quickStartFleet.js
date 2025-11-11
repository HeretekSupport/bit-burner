/** @param {NS} ns */
export async function main(ns) {
/*
[home /]> run destroyerGroup1-5.js joesguns
[home /]> run destroyerGroup6-10.js silver-helix
[home /]> run destroyerGroup11-15.js crush-fitness
[home /]> run destroyerGroup16-20.js phantasy
[home /]> run destroyerGroup21-25.js iron-gym

*/
//ns.args.length < 5 ? ns.alert('YOU NEED 5 ARGS BRUH') : ns.alert(`Executing on ${ns.args}`);

const targets = [
  'joesguns',
  'iron-gym',
  'phantasy',
  'silver-helix',
  'crush-fitness',
]
const fleetGroups = [
  'Destroyer1-5.js', 
  'Destroyer6-10.js', 
  'Destroyer11-15.js',
  'Destroyer16-20.js',
  'Destroyer21-25.js'
  ]

  fleetGroups.forEach(group => {
    switch (group) {
    case 'Destroyer1-5.js':
    ns.exec(group, targets[0]);
    break;
    case 'Destroyer6-10.js':
    ns.exec(group, targets[1]);
    break;
    case 'Destroyer11-15.js':
    ns.exec(group, targets[2]);
    break;
    case 'Destroyer16-20.js':
    ns.exec(group, targets[3]);
    break;
    case 'Destroyer21-25.js':
    ns.exec(group, targets[4]);
    break;
    }
  })
}