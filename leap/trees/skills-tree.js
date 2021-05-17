// TODO: Include complexity

/**
 * Find minimum skills needed to be learnt
 *
 * Time complexity - ??
 *
 * Space complexity - ??
 *
 * Codility report: ??
 * @param {number []} T Skills tree
 * @param {number []} A Needed skills
 * @returns {number minNumberOfRequiredSkills
 */
function solution(T, A) {
  let skillsRequired = new Set();

  for (const skill of A) {
    skillsRequired = findSkills(skill, T, skillsRequired);
  }
  // console.log(skillsRequired);

  return skillsRequired.size;
}

/**
 * Find required skills recursively
 *
 * Time complexity - ??
 *
 * Space complexity - ??
 *
 * Codility report: ??
 * @param {number} skill Skill
 * @param {number []} T Skills tree
 * @param {Set<number>} skillsRequired Skills required
 * @returns {number} numberOfSkillsRequired
 */
function findSkills(skill, T, skillsRequired) {
  skillsRequired.add(skill);

  if (skill > 0) {
    let neededSkill = T[skill];
    while (neededSkill >= 0 && !skillsRequired.has(neededSkill)) {
      skillsRequired.add(neededSkill);
      neededSkill = T[neededSkill];
    }
  }

  return skillsRequired;
}

// Testing
const testDataSet = [
  //0   1  2  3
  { T: [0, 0, 1, 1], A: [2], expectedRes: 3 }, // Res: 2,1,0 --> 3
  //0  1  2  3  4  5  6
  { T: [0, 0, 0, 0, 2, 3, 3], A: [2, 5, 6], expectedRes: 5 }, // Res: 2,0,5,3,6 --> 5
  //0  2  3  4
  { T: [0, 0, 1, 2], A: [1, 2], expectedRes: 3 }, // Res: 1,0,2 --> 3
  //0  1  2  3  4  5  6
  { T: [0, 3, 0, 0, 5, 0, 5], A: [4, 2, 6, 1, 0], expectedRes: 7 }, //Res: 4,5,0,2,6,1,3 --> 7
];

for (data of testDataSet) {
  const results = solution(data.T, data.A);
  console.log({ expected: data.expectedRes, got: results });
  console.log("---**---");
}
