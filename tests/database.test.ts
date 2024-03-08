import { sequelize } from "../src/database";
import { Card } from "../src/models/Card"

describe("test database.ts", () => {
    beforeEach( async () => {
        await sequelize.sync({force:true})
    })
    test("can connect to database", async () => {
        await sequelize.authenticate();
    })
    test("can add a Card",async () => {
        const cardToAdd = {
            name: "Magicien sombre",
            attack: 2500,
            type: "attack",
          }
        await Card.create(cardToAdd)
        const cards = await Card.findAll()
        // expect(cards).toMatch([cardToAdd])

        })
    })