module.exports = function createDreamTeam(members) {

  return Array.isArray(members) ? members
      .filter(member => typeof member === 'string')
      .map(member => member.trim().split('')[0].toUpperCase())
      .sort()
      .join('')
      : false;
};