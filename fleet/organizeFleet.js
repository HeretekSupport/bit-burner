/** @param {NS} ns */
export async function main(ns) {
  let allFiles = ns.ls('home');
  let filteredFiles = allFiles.filter(file =>  file.toLowerCase().includes('dest'));
  
  
  filteredFiles.forEach(file => {
    ns.mv('home', file, `./fleet/${file}`)
  });
  ns.alert(`allFiles array: ${allFiles}`);
  ns.alert(`filteredFiles array: ${filteredFiles}`);
  //ns.alert(`Sorted: ${ns.ls('home', './fleet/')}`);
}