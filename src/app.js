//Progression 1 - create a Manager array and return it
let managerName = 'Alex Ferguson';
let managerAge = 78;
let currentTeam = 'Manchester FC';
let trophiesWon = 27;

//Write your function here
const createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  return [managerName, managerAge, currentTeam, trophiesWon];
};

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
        // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
const createFormation = (formation) => {
  if (formation.length == 0) {
      return null;
  } else {
      let obj = {};
      if (formation.length <= 3 && formation.length > 1) {
          for (let i = 0; i < 3 - formation.length; i++) {
              formation.push(undefined);
          }
      }
      for (let index = 0; index < formation.length; index++) {
          const playerPosition = formation[index];
          if (index == 0) {
              obj['defender'] = playerPosition;
          } else if (index == 1) {
              obj['midfield'] = playerPosition;
          } else {
              obj['forward'] = playerPosition;
          }
      }
      return obj;
  }
};


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
const filterByDebut = (year) => {
  const k = players.filter((p) => p.debut == year);
  return k;
};

//Progression 4 - Filter players that play at the position _______
const filterByPosition = (position) => {
  const k = players.filter((p) => p.position == position);
  return k;
};

//Progression 5 - Filter players that have won ______ award
const filterByAward = (awardName) => {
  let master = [];
  if (awardName == null) {
      return [];
  }
  for (const key in players) {
      currPlayerAwards = players[key].awards;
      let ls = [];
      for (const i of currPlayerAwards) {
          ls.push(i.name);
      }
      if (ls.indexOf(awardName) >= 0) {
          master.push(players[key]);
      }
  }
  return master;
};
//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes = (awardName, noOfTimes) => {
  let master = [];

  if (awardName == null || noOfTimes == null) {
      return [];
  }
  for (const key in players) {
      currPlayerAwards = players[key].awards;
      let ls = [];
      let mp = {};
      for (const i of currPlayerAwards) {
          ls.push(i.name);
          if (mp[i.name]) {
              mp[i.name] += 1;
          } else {
              mp[i.name] = 1;
          }
      }
      if (mp[awardName] == noOfTimes) {
          master.push(players[key]);
      }
  }
  return master;
};

//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry = (awardName, cn) => {
  let master = [];

  if (awardName == null || cn == null) {
      return [];
  }
  for (const key in players) {
      currPlayerAwards = players[key].awards;
      let ls = [];
      for (const i of currPlayerAwards) {
          ls.push(i.name);
      }
      if (ls.indexOf(awardName) >= 0 && players[key].country == cn) {
          master.push(players[key]);
      }
      // console.log(master);
  }
  return master;
};
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge = (noOfTimes, team, age) => {
  let master = [];
  if (noOfTimes == null || team == null || age == null) {
      return [];
  }
  for (const key in players) {
      currPlayerAwards = players[key].awards;
      let ls = [];
      let mp = {};
      let awrdNumber = [];
      for (const i of currPlayerAwards) {
          ls.push(i.name);
          if (mp[i.name]) {
              mp[i.name] += 1;
          } else {
              mp[i.name] = 1;
          }
      }
      for (const key in mp) {
          const l = mp[key];
          awrdNumber.push(l);
      }
      // console.log(awrdNumber);
      if (
          awrdNumber.indexOf(noOfTimes) >= 0 &&
          players[key].team == team &&
          players[key].age < age
      ) {
          master.push(players[key]);
          // console.log(noOfTimes);
      }
  }
  return master;
};

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
