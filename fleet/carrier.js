/** @param {NS} ns */
export async function main(ns) {

  let target;
  let availableServers = ns.getPurchasedServers();

  ns.args.length > 0 ? target = [...ns.args] :  ns.alert(`NO ARGS`);
   
  while (availableServers.length > 0 && target.length > 0){
    availableServers = availableServers.slice(0, 4);//:WLRJEL:KJSDF RECHECK
    for (let i = 0; i < 5; i++){
      let filename = `${availableServers[0]}-${availableServers[0]+4}.js`
      ns.alert(filename);
      availableServers.slice();
      ns.alert(`Array: ${availableServers}`)
    }
  }  
  ns.alert(`${target}`);
}