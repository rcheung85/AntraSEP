///////////////////////////////////////////////////////////////
// Merge two objects

const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];

const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];

function merge(names, roles) {
  return names.map((nameObj) => {
    const roleObj = roles.find((role) => role.userid === nameObj.userid);
    return {
      userid: nameObj.userid,
      name: nameObj.name,
      role: roleObj ? roleObj.role : null,
    };
  });
}

console.log('~~~~~~~~~Merged~~~~~~~~~~~~~~');
const mergedObj = merge(names, roles);
console.log(JSON.stringify(mergedObj));


///////////////////////////////////////////////////////////////
// Run all
function runAll(initNum) {
  return function(...cbs) {
    return cbs.reduce((acc, cb) => {
      return cb(acc);
    }, initNum);
  }
}

const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10
console.log('~~~~~~~~~Run all~~~~~~~~~~~~~~');
console.log(runAll(4)(callback1, callback2, callback3)); // 10



///////////////////////////////////////////////////////////////
// Transform source
const source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];

function transform(source) {
  const result = [];
  source.forEach((item) => {
    let curr = result;
    item.forEach((name) => {
      let node = curr.find((item) => item.name == name);
      if (!node) {
        node = { name, children: [] };
        curr.push(node);
      }
      curr = node.children;
    });
  });
  return result;
}

console.log('~~~~~~~~~Transform~~~~~~~~~~~~~~');
const output2 = transform(source);
console.log(JSON.stringify(output2));
