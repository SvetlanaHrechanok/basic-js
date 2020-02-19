const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let time;
  if (typeof sampleActivity === 'string')  time = parseFloat(sampleActivity);
  else return false;

  return (time > 0 && time < MODERN_ACTIVITY) ? Math.ceil(Math.log(MODERN_ACTIVITY / time) * HALF_LIFE_PERIOD / 0.693) : false;
};
