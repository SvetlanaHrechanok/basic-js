module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   let obj = {};
   obj.turns = Math.pow(2, disksNumber) - 1;
   obj.seconds = obj.turns / (turnsSpeed / 3600);

   console.log(obj.turns + ' ' + obj.seconds);

   return obj;
}