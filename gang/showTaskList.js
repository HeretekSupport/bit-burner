/** @param {NS} ns */
export async function main(ns) {
  const cyan = "\u001b[36m";
  const green = "\u001b[32m";
  const red = "\u001b[31m";
  const reset = "\u001b[0m";

  let tasks = ns.gang.getTaskNames();
  tasks.forEach(task => ns.tprint(`${cyan}${task}`))
}