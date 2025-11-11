/** @param {NS} ns */
export async function main(ns) {
  let i = ns.args[0];
  let newMember;
  while (true) {
    if (ns.gang.canRecruitMember()) {
      newMember = ns.gang.recruitMember(`Brujah-${i}`);
      ns.gang.setMemberTask(newMember,)
      i++;
    }
    else {
      await ns.sleep(300000); //sleep 5 min
    }
  }
}