const { default: axios } = require("axios")
const db = require("../../config/db/index")

exports.index = async (conpertion_name) => {
    try {
        const { data } = await axios.get(`https://transfermarkt-api.fly.dev/competitions/search/${conpertion_name}?page_number=1`)
        const results = [data?.results[0]];
        const insertPromises = results.map((competition) => {
            const {
                id,
                name,
                country,
                clubs,
                players,
                totalMarketValue,
                meanMarketValue,
                continent,
            } = competition;

            const query = `
                INSERT INTO public.competitions (
                  id, name, country, clubs, players, totalmarketvalue, meanmarketvalue, continent
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT (id) DO NOTHING;`;

            return db.query(query, [
                id,
                name,
                country,
                clubs,
                players,
                totalMarketValue,
                meanMarketValue,
                continent,
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("competition service", err)
    }
}