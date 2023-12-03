/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const testUsers = [
    { id: 1, first_name: "Taro", last_name: "Tanaka" },
    { id: 2, first_name: "Micuki", last_name: "Hashimoto" },
    { id: 3, first_name: "Kojiro", last_name: "Suzuki" },
  ];

  await knex("user").del();
  await knex("user").insert(testUsers);
};
