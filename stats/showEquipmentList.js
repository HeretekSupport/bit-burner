/** @param {NS} ns */
export async function main(ns) {
  const cyan = '\u001b[36m';
  const green = '\u001b[32m';
  const red = '\u001b[31m';
  const reset = '\u001b[0m';

  let allEquip = ns.gang.getEquipmentNames();
  let equipDeets = allEquip.map((equipment) => [
    equipment,
    ns.gang.getEquipmentType(equipment),
    ns.gang.getEquipmentStats(equipment),
    ns.gang.getEquipmentCost(equipment),
  ]);

  equipDeets.forEach(([equipment, type, stats, cost]) => {
    ns.tprint(
      `\n${red}${equipment}${reset} - ${JSON.stringify(
        type
      )} - ${cyan}${JSON.stringify(stats)}${reset} - ${green}${ns.formatNumber(
        JSON.stringify(cost),
        3
      )}${reset}`
    );
  });
}


