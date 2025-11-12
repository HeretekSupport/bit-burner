/** @param {NS} ns */
export async function main(ns) {
  let startingTask = '';
  let gangDeets = ns.gang.getGangInformation();
  let gangMembers = ns.gang.getMemberNames();
  ns.args[0] ? startingTask = ns.args[0] : startingTask = 'Train Hacking';
  
  
  let memberAscDeets = gangMembers.map((member) => [
    member,
    ns.gang.getAscensionResult(member),
  ]);

  memberAscDeets.forEach(([name, ascResults]) => {
    //Check if member can be ascended otherwise we get Undefined instead of asc details
    if (!ascResults) {return;}
    
    let shouldAscend = true;
    //Check everything excluding respect for multiplier of >= 2
    ['hack', 'str', 'def', 'dex', 'agi', 'cha'].forEach((stat) => {
      if (ascResults[stat] < 2) {
        shouldAscend = false;
      } else {
        shouldAscend = true;
      }
    });
    //If we have any wanted level, set up to decreate it down to 1
    if (shouldAscend && gangDeets.wantedLevel > 1) { 
      ns.gang.setMemberTask(name, 'Ethical Hacking');
    } else if (shouldAscend && gangDeets.wantedLevel === 1){
      ns.gang.ascendMember(name);
      ns.gang.setMemberTask(name, startingTask);
    }
  });
}
