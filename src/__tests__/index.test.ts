import { AppDataSource } from "../../data-source";
import { ToUpdate } from "../swgoh-api/apiManager";
import { SwgohApi } from "../swgohApi";

jest.setTimeout(20000);
test("Retrieve and save Characters", async () => {
  const database = AppDataSource;
  try {
    await database.initialize().catch((error) => {
      console.error(error);
      throw error;
    });
    const swgohApi = new SwgohApi({ database: database });
    await swgohApi.updateStaticData(ToUpdate.CHARACTERS);
    await database.destroy();
  } catch (exception: unknown) {
    console.error(exception);
    expect(exception).toBeNull();
  }
});
