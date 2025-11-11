/*
ns.getGangInformation():

let gangdeets = {
  faction: 'NiteSec',
  isHacking: true,
  moneyGainRate: 99143.86621747789,
  power: 1,
  respect: 283437.26720381365,
  respectGainRate: 4.675937762766338,
  respectForNextRecruit: 15625,
  territory: 0.1428571428571439,
  territoryClashChance: 0,
  territoryWarfareEngaged: false,
  wantedLevel: 10588.131630167303,
  wantedLevelGainRate: 0.18535483052000928,
  wantedPenalty: 0.9639890578427689,
};


ns.getAscensionResult('X'):

let ascensionResult = {
  respect: 92408.13000582393,
  hack: 1.6039751348464704,
  str: 1.0743174542438823,
  def: 1.0743174542438823,
  dex: 1.0746602160092273,
  agi: 1.0746602160092273,
  cha: 1.5715747237616928,
};
*/
let gangAscDeets = [
  [
    'Nikolas',
    {
      respect: 121077.46997963967,
      hack: 1.8389463075591452,
      str: 1.0753379321661152,
      def: 1.0753379321661152,
      dex: 1.0756859859528898,
      agi: 1.0756859859528898,
      cha: 1.8509330132919917,
    },
  ],
  [
    'Rhean',
    {
      respect: 102924.11116963302,
      hack: 1.7203173682778021,
      str: 1.0743174542438823,
      def: 1.0743174542438823,
      dex: 1.0746602160092273,
      agi: 1.0746602160092273,
      cha: 1.7137308892005605,
    },
  ],
  [
    'Pyra',
    {
      respect: 102493.22922907259,
      hack: 1.7199577423762011,
      str: 1.0747890949622756,
      def: 1.0747890949622756,
      dex: 1.0751346791856433,
      agi: 1.0751346791856433,
      cha: 1.7025919855173366,
    },
  ],
  [
    'Brujah-0',
    {
      respect: 0,
      hack: 2.5296211088097618,
      str: 2.3450698817801934,
      def: 2.3450698817801934,
      dex: 2.3450698817801934,
      agi: 2.3450698817801934,
      cha: 1.5609841331500078,
    },
  ],
  [
    'Brujah-1',
    {
      respect: 0,
      hack: 2.5255654368806475,
      str: 2.3495498849599348,
      def: 2.3495498849599348,
      dex: 2.3495498849599348,
      agi: 2.3495498849599348,
      cha: 1.558199530971899,
    },
  ],
  [
    'Brujah-2',
    {
      respect: 0,
      hack: 2.5215032416787295,
      str: 2.3450698817801934,
      def: 2.3450698817801934,
      dex: 2.3450698817801934,
      agi: 2.3450698817801934,
      cha: 1.560290183765763,
    },
  ],
  [
    'Brujah-3',
    {
      respect: 0,
      hack: 2.5296211088097618,
      str: 2.3450698817801934,
      def: 2.3450698817801934,
      dex: 2.3450698817801934,
      agi: 2.3450698817801934,
      cha: 1.558894411020621,
    },
  ],
  [
    'Brujah-4',
    {
      respect: 0,
      hack: 2.5255654368806475,
      str: 2.3450698817801934,
      def: 2.3450698817801934,
      dex: 2.3450698817801934,
      agi: 2.3450698817801934,
      cha: 1.559602869716973,
    },
  ],
];

/** @param {NS} ns */
export async function main(ns) {
  let gangDeets = ns.gang.getGangInformation();
  ns.write('/stats/gangDetails.txt', JSON.stringify(gangDeets));


}
