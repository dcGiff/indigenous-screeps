//Get info on room
for(var name in Game.creeps) { //loop through each creep here
  var creep = Game.creeps[name];


  console.log(creep.pos)
  console.log(creep.carry.energy)
  console.log(creep.carryCapacity)
  console.log(creep.memory.role)
  console.log(creep.hits)
  console.log(creep.hitsMax)
  console.log(creep.id)
  console.log(creep.my)
  console.log(creep.owner.username)
  for(i in creep.body){ // Loop through each element of array object body
      console.log(creep.body[i].type, creep.body[i].hits)}
  console.log(creep.fatigue)
  console.log(creep.spawning)
  console.log(creep.ticksToLive)
  console.log(creep.room)
}
