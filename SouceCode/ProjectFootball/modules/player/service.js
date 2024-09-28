const { default: axios } = require("axios")
const db = require("../../config/db/index")

exports.index = async () => {
    try {
        const queryGetAllClubs = `
        SELECT * FROM public.clubs
        ORDER BY id ASC;`;

        const { rows: clubs } = await db.query(queryGetAllClubs);

        const promisePlayerRequest = clubs.map((club) => {
            return axios.get(`https://transfermarkt-api.fly.dev/clubs/${club.id}/players`)
        })
        const players = await Promise.allSettled(promisePlayerRequest);


        let results = [];
        players.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            const players = item.value.data.players.map((e) => {
                return { ...e, club_id: item.value.data.id }
            });
            results = results.concat(players)
        })

        const insertPromises = results.map((player) => {
            const {
                id,
                name,
                club_id,
                position,
                nationality,
                height,
                foot,
                joinedOn,
                signedFrom
            } = player;

            const query = `
                INSERT INTO public.players (
                  id, name, club_id,
                position,
                nationality,
                height,
                foot,
                joinedOn,
                signedFrom
                )
                VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)
                ON CONFLICT (id) DO NOTHING;`;

            return db.query(query, [
                id,
                name,
                club_id,
                position,
                nationality,
                height,
                foot,
                joinedOn,
                signedFrom
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("competition service", err)
    }
}


exports.profile = async () => {
    try {

        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);

        const promisePlayersProfileRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/profile`)
        })
        const profiles = await Promise.allSettled(promisePlayersProfileRequest);


        let results = [];
        profiles.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            results.push(item.value.data)
        })

        const insertPromises = results.map((profile) => {
            const {
                id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
            } = profile;

            const query = `
                INSERT INTO public.player_profiles (
                    id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
                ON CONFLICT (id) DO NOTHING;

            `;
            return db.query(query, [
                id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club profile service", err)
    }
}

exports.profile = async () => {
    try {

        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);

        const promisePlayersProfileRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/profile`)
        })
        const profiles = await Promise.allSettled(promisePlayersProfileRequest);


        let results = [];
        profiles.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            results.push(item.value.data)
        })

        const insertPromises = results.map((profile) => {
            const {
                id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
            } = profile;

            const query = `
                INSERT INTO public.player_profiles (
                    id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
                ON CONFLICT (id) DO NOTHING;

            `;
            return db.query(query, [
                id, url, name, description, nameInHomeCountry, imageURL, dateOfBirth, placeOfBirth, age, height, citizenship, isRetired, position, foot, shirtNumber, club, marketValue, agent, socialMedia
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club profile service", err)
    }
}


exports.transfers = async () => {
    try {

        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);

        const promisePlayersTransfersRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/transfers`)
        })
        const transfers = await Promise.allSettled(promisePlayersTransfersRequest);


        let results = [];
        transfers.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            const data = item.value.data.transfers.map((e) => {
                return { ...e, "player_id": item.value.data.id }
            })
            results = results.concat(data)
        })

        const insertPromises = results.map((transfer) => {
            const {
                id, player_id, from, to, date, upcoming, season, marketValue, fee
            } = transfer;

            const query = `
                INSERT INTO public.player_transfers (
                    id,player_id, from_club, to_club, date, upcoming, season, marketValue, fee
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                ON CONFLICT (id) DO NOTHING;

            `;
            return db.query(query, [
                id, player_id, from, to, date, upcoming, season, marketValue, fee
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club transfers service", err)
    }
}


exports.stats = async () => {
    try {

        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);
        const promisePlayersStatsRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/stats`)
        })
        const stats = await Promise.allSettled(promisePlayersStatsRequest);


        let results = [];
        stats.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            const data = item.value.data;
            results.push(data)
        })

        const insertPromises = results.map((stat) => {
            const {
                id, stats
            } = stat;
            const query = `
                INSERT INTO public.player_stats (
                    id,stats
                )
                VALUES ($1, $2)
                ON CONFLICT (id) DO NOTHING;

            `;
            return db.query(query, [
                id, stats
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club transfers service", err)
    }
}

exports.injuries = async () => {
    try {

        const queryGetAllPlayers = `
        SELECT * FROM public.players
        ORDER BY id ASC;`;

        const { rows: players } = await db.query(queryGetAllPlayers);
        const promisePlayersInjuriesRequest = players.map((player) => {
            return axios.get(`https://transfermarkt-api.fly.dev/players/${player.id}/injuries`)
        })
        const injuries = await Promise.allSettled(promisePlayersInjuriesRequest);


        let results = [];
        injuries.filter(({ status, value }) => {
            return status == "fulfilled";
        }).map((item) => {
            const data = item.value.data;
            results.push(data)
        })

        const insertPromises = results.map((injurie) => {
            const {
                id, injuries
            } = injurie;
            const query = `
                INSERT INTO public.player_injuries (
                    id,injuries
                )
                VALUES ($1, $2)
                ON CONFLICT (id) DO NOTHING;

            `;
            return db.query(query, [
                id, injuries
            ]);
        });
        await Promise.all(insertPromises);
    }
    catch (err) {
        console.log("club injuries service", err)
    }
}