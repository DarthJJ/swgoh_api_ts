import { Retriever } from "../swgoh-api/http/retriever";

test("Retrieve Characters", async () => {
  const retriever = new Retriever();
  const data = await retriever.characters();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});

test("Retrieve Ships", async () => {
  const retriever = new Retriever();
  const data = await retriever.ships();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});

test("Retrieve Abilities", async () => {
  const retriever = new Retriever();
  const data = await retriever.abilities();
  expect(data).not.toBeNull();
  expect(data.length).toBeGreaterThan(0);
});

test("Retrieve Player", async () => {
  const retriever = new Retriever();
  const data = await retriever.player(393333993);
  console.log(data);
  expect(data).not.toBeNull();
});
