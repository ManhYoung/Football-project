const { default: axios } = require("axios")
const db = require("../../config/db/index")

exports.index = async () => {
    try {
        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);

        const promiseMarketValueRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/market_value`)
        })
        const marketValues = await Promise.allSettled(promiseMarketValueRequest);


        let results = [];
        marketValues.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            results.push(item.value.data)
        })

        console.log(results)

        const insertPromises = results.map((item) => {
            const {
                id,
                marketValue,
                marketValueHistory,
                ranking
            } = item;

            const query = `
                INSERT INTO public.market_values (
                  id, marketValue, marketValueHistory,
                ranking
                )
                VALUES ($1, $2,$3,$4)
                ON CONFLICT (id) DO NOTHING;`;

            return db.query(query, [
                id,
                marketValue,
                marketValueHistory,
                ranking
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("competition service", err)
    }
}