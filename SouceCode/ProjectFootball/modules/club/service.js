const { default: axios } = require("axios")
const db = require("../../config/db/index")

exports.index = async () => {
    try {

        const queryGetAllCm = `
        SELECT * FROM public.competitions
        ORDER BY id ASC;`;

        const { rows: competitions } = await db.query(queryGetAllCm);

        const promiseClubRequest = competitions.map((competition) => {
            return axios.get(`https://transfermarkt-api.fly.dev/competitions/${competition.id}/clubs`)
        })
        const clubs = await Promise.allSettled(promiseClubRequest);


        let results = [];
        const a = clubs.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            data = item.value.data.clubs;
            results = results.concat(data)
        })

        const insertPromises = results.map((club) => {
            const {
                id,
                name
            } = club;

            const query = `
                INSERT INTO public. (
                  id, name
                )
                VALUES ($1, $2)
                ON CONFLICT (id) DO NOTHING;`;

            return db.query(query, [
                id,
                name
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club service", err)
    }
}

exports.profile = async () => {
    try {

        const queryGetAllClubs = `
        SELECT * FROM public.clubs
        ORDER BY id ASC;`;

        const { rows: clubs } = await db.query(queryGetAllClubs);

        const promiseClubProfileRequest = clubs.map((club) => {
            return axios.get(`https://transfermarkt-api.fly.dev/clubs/${club.id}/profile`)
        })
        const profiles = await Promise.allSettled(promiseClubProfileRequest);


        let results = [];
        profiles.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            results.push(item.value.data)
        })

        const insertPromises = results.map((profile) => {
            const {
                id, url, name, officialName, image, addressLine1, addressLine2, addressLine3, tel, fax, website, foundedOn, members, membersDate, colors, stadiumName, stadiumSeats, currentTransferRecord, currentMarketValue, squad, league, historicalCrests
            } = profile;

            const query = `
                INSERT INTO public.club_profiles (
                    id, url, name, officialName, image, addressLine1, addressLine2, addressLine3, tel, fax, website, foundedOn, members, membersDate, colors, stadiumName, stadiumSeats, currentTransferRecord, currentMarketValue, squad, league, historicalCrests
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
                ON CONFLICT (id) DO NOTHING;
            `;
            return db.query(query, [
                id, url, name, officialName, image, addressLine1, addressLine2, addressLine3, tel, fax, website, foundedOn, members, membersDate, colors, stadiumName, stadiumSeats, currentTransferRecord, currentMarketValue, squad, league, historicalCrests
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club profile service", err)
    }
}