//declare all modules here
var mech = require('mech');
var planner = require('planner');

//var reportallcreepstats = require('reportallcreepstats')
//var roomstats = require('constructionsite')

//end module declaration

// program variables
var mechcount = 0;



module.exports.loop = function () {



//Find my creeps and have them each do their thing.
  mechcount = 0; //mech counting variable
	for(var name in Game.creeps) {
		var creep = Game.creeps[name];

		if(creep.memory.role == 'mech') {
			mech(creep);
			mechcount = mechcount + 1;
			}

			//reportallcreepstats(creep);

      planner(creep);
	}

//SPAWN SOME MECH's till limit is reached
	if(mechcount == 0){
	    Game.spawns.Spawn1.createCreep([MOVE, CARRY, WORK], null, {role: 'mech'});
	}




}
