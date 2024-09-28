const pg = require("pg");



async function connect() {
    try {

        const client = new pg.Client({
            database: "MyPc",
            password: "123",
        });
        await client.connect();


        // const createTable = `
        //     CREATE TABLE competitions(
        //         id text PRIMARY KEY,
        //         name text,
        //         country text,
        //         clubs text,
        //         players text,
        //         totalMarketValue text,
        //         meanMarketValue text,
        //         continent text
        //     );
        // `;
        // const createTable = `
        //     CREATE TABLE clubs(
        //         id text PRIMARY KEY,
        //         name text
        //     );
        // `;
        // const createTable = `
        //     CREATE TABLE players(
        //         id text PRIMARY KEY,
        //         name text,
        //         club_id text,
        //         position text,
        //         nationality text[],
        //         height text,
        //         foot text,
        //         joinedOn text,
        //         signedFrom text
        //     );
        // `;

        // const createTable = `
        //     CREATE TABLE market_values(
        //         id text PRIMARY KEY,
        //         marketValue text,
        //         marketValueHistory JSONB[],
        //         ranking JSONB 
        //     );
        // `;

        // const createTable = `
        //     CREATE TABLE club_profiles (
        //     id TEXT PRIMARY KEY,                      
        //     url TEXT,                                    
        //     name TEXT,                                   
        //     officialName TEXT,                          
        //     image TEXT,                                 
        //     addressLine1 TEXT,                           
        //     addressLine2 TEXT,                          
        //     addressLine3 TEXT,                           
        //     tel TEXT,                                    
        //     fax TEXT,                                    
        //     website TEXT,                               
        //     foundedOn TEXT,                              
        //     members TEXT,                               
        //     membersDate TEXT,                           
        //     colors TEXT[],                               
        //     stadiumName TEXT,                            
        //     stadiumSeats TEXT,                        
        //     currentTransferRecord TEXT,                  
        //     currentMarketValue TEXT,                    
        //     squad JSONB,                                 
        //     league JSONB,                                
        //     historicalCrests TEXT[]                      
        //     );
        // `;



        // const createTable = `
        //     CREATE TABLE player_profiles (
        //     id TEXT PRIMARY KEY,                              -- ID của cầu thủ
        //     url TEXT,                                         -- Đường dẫn URL đến hồ sơ cầu thủ
        //     name TEXT,                                        -- Tên cầu thủ
        //     description TEXT,                                 -- Mô tả cầu thủ
        //     nameInHomeCountry TEXT,                           -- Tên cầu thủ theo cách gọi ở quê hương
        //     imageURL TEXT,                                    -- Đường dẫn hình ảnh cầu thủ
        //     dateOfBirth TEXT,                                 -- Ngày sinh
        //     placeOfBirth JSONB,                               -- Thông tin nơi sinh
        //     age TEXT,                                      -- Tuổi cầu thủ
        //     height TEXT,                                      -- Chiều cao cầu thủ
        //     citizenship TEXT[],                               -- Mảng chứa quốc tịch
        //     isRetired BOOLEAN,                                -- Trạng thái đã nghỉ hưu hay chưa
        //     position JSONB,                                   -- Vị trí cầu thủ
        //     foot TEXT,                                        -- Chân thuận của cầu thủ
        //     shirtNumber TEXT,                                 -- Số áo cầu thủ
        //     club JSONB,                                      -- Thông tin câu lạc bộ
        //     marketValue TEXT,                                 -- Giá trị thị trường cầu thủ
        //     agent JSONB,                                     -- Thông tin về người đại diện
        //     socialMedia TEXT[]                                -- Mảng chứa các đường dẫn mạng xã hội                    
        //     );
        // `;


        // const createTable = `
        //     CREATE TABLE player_transfers (
        //     id TEXT PRIMARY KEY,                             -- ID của giao dịch
        //     player_id TEXT,
        //     from_club JSONB,                                -- Thông tin câu lạc bộ từ
        //     to_club JSONB,                                  -- Thông tin câu lạc bộ đến
        //     date TEXT,                                       -- Ngày thực hiện giao dịch
        //     upcoming BOOLEAN,                                -- Trạng thái giao dịch có phải là sắp tới hay không
        //     season TEXT,                                     -- Mùa giải
        //     marketValue TEXT,                                -- Giá trị thị trường của cầu thủ
        //     fee TEXT                      
        //     );
        // `;

        // const createTable = `
        //     CREATE TABLE player_stats (
        //     id TEXT PRIMARY KEY,                             -- ID của giao dịch
        //     stats JSONB[]                     
        //     );
        // `;

        const createTable = `
            CREATE TABLE player_injuries (
            id TEXT PRIMARY KEY,                             -- ID của giao dịch
            injuries JSONB[]                     
            );
        `;






        await client.query(createTable, (err, result) => {
            if (err) {
                console.error('Error creating table', err);
            } else {
                console.log('Table created successfully');
            }
        });


        console.log("connect db thanh cong");
    } catch (error) {
        console.log("connect db that bai");
    }
}
module.exports = { connect };
