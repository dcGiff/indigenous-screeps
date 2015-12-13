/*
 *TESTING
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('mech'); // -> 'a thing'
 */


 module.exports = function (creep) {


//harvester actions
if(creep.memory.role == 'mech'){
	if(creep.carry.energy < creep.carryCapacity) {
		var sources = creep.room.find(FIND_SOURCES);
		if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources[0]);
    
		}
	}
	else {
		if(creep.transferEnergy(Game.spawns.Spawn1) == ERR_NOT_IN_RANGE) {
			creep.moveTo(Game.spawns.Spawn1);

		}
	}
}

//builder actions

//medic actions

//guard actions


}
