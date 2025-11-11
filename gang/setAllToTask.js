/** @param {NS} ns */
export async function main(ns) {
  let members = ns.gang.getMemberNames();
  members.forEach(member => {
    ns.gang.setMemberTask(member, ns.args[0]);
  })
}