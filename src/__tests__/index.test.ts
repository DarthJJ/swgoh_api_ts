import { Retriever } from "../swgoh-api/http/retriever";

test("Retrieve Characters", async () => {
  const retriever = new Retriever();
  const data = await retriever.getCharacters();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});

test("Retrieve Ships", async () => {
  const retriever = new Retriever();
  const data = await retriever.getShips();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});

test("Retrieve Abilities", async () => {
  const retriever = new Retriever();
  const data = await retriever.getAbilities();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});
