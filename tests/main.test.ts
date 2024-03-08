import request from "supertest";

import { app, server } from "../src/main";

afterAll(() => {
    server.close()
})


describe("Test main.ts", () => {
  test("get message", async () => {
    const res = await request(app).get("/api/");
    expect(res.body).toEqual({ message: "Express + TypeScript Server" });
  });

  it.each([
    {
        name: "Magicien sombre",
        attack: 2500,
        type: "attack",
      },
      {
        name: "Monster rebord",
        attack: 0,
        type: "magick",
      }
  ]) ("post card", async (card) => {
    const res = await request(app).post("/api/cards").send(card);
    expect(res.status).toEqual(200);
  })
});