/** @param {NS} ns */
export async function main(ns) {
  let thingToBuy = ns.args;
  let gangDeets = ns.gang.getGangInformation();
  let gangMembers = ns.gang.getMemberNames();
  let membersWithDetails = [];

  gangMembers.forEach(member => {
    membersWithDetails.push(ns.gang.getMemberInformation(member))
  })

  thingToBuy.forEach(thing => {
    membersWithDetails.forEach(member => {
      if (!member.upgrades.includes(thing)) {
        ns.gang.purchaseEquipment(member.name, thing);
      }
    })
  })

}