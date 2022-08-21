import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ToUpdate } from "../swgoh-api/apiManager";
import { SwgohApi } from "../swgohApi";

let database: DataSource;
let swgohApi: SwgohApi;
beforeAll(async () => {
  try {
    database = AppDataSource;
    await database.initialize().catch((error) => {
      console.error(error);
      throw error;
    });
    swgohApi = new SwgohApi({ database: database });
  } catch (exception: unknown) {
    console.error(exception);
  }
});

afterAll(async () => {
  try {
    await database.destroy();
  } catch (exception: unknown) {
    console.error(exception);
  }
});

jest.setTimeout(20000);

test("Retrieve Player data", async () => {
  try {
    await swgohApi.updateStaticData(ToUpdate.ALL);
    const profile = await swgohApi.getPlayer({ allycode: 393333993, update: true });
    console.log(profile);
  } catch (exception: unknown) {
    console.error(exception);
    expect(exception).toBeNull();
  }
});

// test("Retrieve and save Characters", async () => {
//   try {
//     await swgohApi.updateStaticData(ToUpdate.CHARACTERS);
//     const toon = await swgohApi.characters.getById("SUPREMELEADERKYLOREN");
//     expect(toon).not.toBeNull();
//     expect(toon?.gear_levels).not.toBeNull();
//     expect(toon?.gear_levels.length).toBeGreaterThan(0);
//     expect(toon?.abilities).not.toBeNull();
//     expect(toon?.abilities.length).toBeGreaterThan(0);
//   } catch (exception: unknown) {
//     console.error(exception);
//     expect(exception).toBeNull();
//   }
// });

// test("Retrieve and save Ships", async () => {
//   try {
//     await swgohApi.updateStaticData(ToUpdate.SHIPS);
//     const ship = await swgohApi.ships.getById("JEDISTARFIGHTERAHSOKATANO");
//     expect(ship).not.toBeNull();
//     expect(ship?.abilities).not.toBeNull();
//     expect(ship?.abilities.length).toBeGreaterThan(0);
//   } catch (exception: unknown) {
//     console.error(exception);
//     expect(exception).toBeNull();
//   }
// });

// test("Retrieve and save Abilities", async () => {
//   try {
//     await swgohApi.updateStaticData(ToUpdate.ABILITIES);
//     const ability = await swgohApi.abilities.getById("hardwareskill_TIEINTERCEPTOR");
//     expect(ability).not.toBeNull();
//   } catch (exception: unknown) {
//     console.error(exception);
//     expect(exception).toBeNull();
//   }
// });
