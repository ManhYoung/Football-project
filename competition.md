# competition

- epl
    
    ```json
     {
          "id": "GB1",
          "name": "Premier League",
          "country": "England",
          "clubs": "20",
          "players": "527",
          "totalMarketValue": "€11.55bn",
          "meanMarketValue": "€577.46m",
          "continent": "UEFA"
        },
    ```
    
- laliga
    
    ```json
     {
          "id": "ES1",
          "name": "LaLiga",
          "country": "Spain",
          "clubs": "20",
          "players": "502",
          "totalMarketValue": "€5.30bn",
          "meanMarketValue": "€264.94m",
          "continent": "UEFA"
        },
    ```
    
- laliga club
    
    ```jsx
    {
      "id": "ES1",
      "name": "LaLiga",
      "seasonID": "2024",
      "clubs": [
        {
          "id": "418",
          "name": "Real Madrid"
        },
        {
          "id": "131",
          "name": "FC Barcelona"
        },
        {
          "id": "13",
          "name": "Atlético de Madrid"
        },
        {
          "id": "681",
          "name": "Real Sociedad"
        },
        {
          "id": "621",
          "name": "Athletic Bilbao"
        },
        {
          "id": "1049",
          "name": "Valencia CF"
        },
        {
          "id": "12321",
          "name": "Girona FC"
        },
        {
          "id": "1050",
          "name": "Villarreal CF"
        },
        {
          "id": "150",
          "name": "Real Betis Balompié"
        },
        {
          "id": "368",
          "name": "Sevilla FC"
        },
        {
          "id": "472",
          "name": "UD Las Palmas"
        },
        {
          "id": "331",
          "name": "CA Osasuna"
        },
        {
          "id": "237",
          "name": "RCD Mallorca"
        },
        {
          "id": "1108",
          "name": "Deportivo Alavés"
        },
        {
          "id": "940",
          "name": "Celta de Vigo"
        },
        {
          "id": "367",
          "name": "Rayo Vallecano"
        },
        {
          "id": "714",
          "name": "RCD Espanyol Barcelona"
        },
        {
          "id": "3709",
          "name": "Getafe CF"
        },
        {
          "id": "1244",
          "name": "CD Leganés"
        },
        {
          "id": "366",
          "name": "Real Valladolid CF"
        }
      ],
      "updatedAt": "2024-09-27T16:05:29.166151"
    }
    ```
    
- epl club
    
    ```jsx
    {
      "id": "GB1",
      "name": "Premier League",
      "seasonID": "2024",
      "clubs": [
        {
          "id": "281",
          "name": "Manchester City"
        },
        {
          "id": "11",
          "name": "Arsenal FC"
        },
        {
          "id": "631",
          "name": "Chelsea FC"
        },
        {
          "id": "31",
          "name": "Liverpool FC"
        },
        {
          "id": "985",
          "name": "Manchester United"
        },
        {
          "id": "148",
          "name": "Tottenham Hotspur"
        },
        {
          "id": "762",
          "name": "Newcastle United"
        },
        {
          "id": "405",
          "name": "Aston Villa"
        },
        {
          "id": "1237",
          "name": "Brighton & Hove Albion"
        },
        {
          "id": "379",
          "name": "West Ham United"
        },
        {
          "id": "873",
          "name": "Crystal Palace"
        },
        {
          "id": "703",
          "name": "Nottingham Forest"
        },
        {
          "id": "1148",
          "name": "Brentford FC"
        },
        {
          "id": "543",
          "name": "Wolverhampton Wanderers"
        },
        {
          "id": "989",
          "name": "AFC Bournemouth"
        },
        {
          "id": "29",
          "name": "Everton FC"
        },
        {
          "id": "931",
          "name": "Fulham FC"
        },
        {
          "id": "180",
          "name": "Southampton FC"
        },
        {
          "id": "1003",
          "name": "Leicester City"
        },
        {
          "id": "677",
          "name": "Ipswich Town"
        }
      ],
      "updatedAt": "2024-09-27T16:08:11.587849"
    }
    ```
    

// club includes profile and player

// [transfermarkt-api.fly.dev/clubs/${club_id}/profile](https://transfermarkt-api.fly.dev/clubs/989/profile)

// epl

- Arsenal
    - Profile
        
        ```jsx
        {
          "id": "11",
          "url": "/fc-arsenal/startseite/verein/11",
          "name": "Arsenal FC",
          "officialName": "Arsenal Football Club",
          "image": "https://tmssl.akamaized.net//images/wappen/big/11.png",
          "addressLine1": "Highbury House, 75 Drayton Park",
          "addressLine2": "N5 1BU London",
          "addressLine3": "England",
          "tel": "+44 20 77044",
          "fax": "+44 20 77044",
          "website": "www.arsenal.com",
          "foundedOn": "Oct 1, 1886",
          "members": "130.000",
          "membersDate": "Jul 1, 2006",
          "colors": [
            "#EF0107",
            "#FFFFFF",
            "#9C824A"
          ],
          "stadiumName": "Emirates Stadium",
          "stadiumSeats": "60704",
          "currentTransferRecord": "€-25.11m",
          "currentMarketValue": "€1.17bn",
          "squad": {
            "size": "22",
            "averageAge": "26.6",
            "foreigners": "18",
            "nationalTeamPlayers": "19"
          },
          "league": {
            "id": "GB1",
            "name": "Premier League",
            "countryID": "1",
            "countryName": "England",
            "tier": "First Tier"
          },
          "historicalCrests": [
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911968.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911973.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911978.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911976.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911991.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911988.png",
            "https://tmssl.akamaized.net//images/wappen/medium/11_1400911993.png"
          ],
          "updatedAt": "2024-09-27T16:10:58.141801"
        }
        ```
        
- Aston Villa
    - Profile
        
        ```jsx
        {
          "id": "405",
          "url": "/aston-villa/startseite/verein/405",
          "name": "Aston Villa",
          "officialName": "Aston Villa Football Club",
          "image": "https://tmssl.akamaized.net//images/wappen/big/405.png",
          "addressLine1": "Villa Park",
          "addressLine2": "B6 6HE Birmingham",
          "addressLine3": "England",
          "tel": "+44 (121) 3272",
          "fax": "+44 (121) 3272",
          "website": "www.avfc.co.uk",
          "foundedOn": "Mar 1, 1874",
          "colors": [
            "#670E36",
            "#95BFE5"
          ],
          "stadiumName": "Villa Park",
          "stadiumSeats": "42682",
          "currentTransferRecord": "€-31.20m",
          "currentMarketValue": "€595.45m",
          "squad": {
            "size": "25",
            "averageAge": "26.2",
            "foreigners": "17",
            "nationalTeamPlayers": "16"
          },
          "league": {
            "id": "GB1",
            "name": "Premier League",
            "countryID": "1",
            "countryName": "England",
            "tier": "First Tier"
          },
          "historicalCrests": [
            "https://tmssl.akamaized.net//images/wappen/medium/405_1402759065.png",
            "https://tmssl.akamaized.net//images/wappen/medium/405_1469439248.png",
            "https://tmssl.akamaized.net//images/wappen/medium/405_1717155946.png",
            "https://tmssl.akamaized.net//images/wappen/medium/405_1717155968.png"
          ],
          "updatedAt": "2024-09-27T16:12:11.679022"
        }
        ```
        
- Bournemouth
    - Profile
        
        ```jsx
        {
          "id": "989",
          "url": "/afc-bournemouth/startseite/verein/989",
          "name": "AFC Bournemouth",
          "officialName": "Association Football Club Bournemouth",
          "image": "https://tmssl.akamaized.net//images/wappen/big/989.png",
          "addressLine1": "Dean Court",
          "addressLine2": "BH7 7AF   Bournemouth",
          "addressLine3": "England",
          "tel": "01202 726300",
          "fax": "01202 726373",
          "website": "www.afcb.co.uk",
          "foundedOn": "Jan 1, 1899",
          "colors": [
            "#BF0C10",
            "#0C0D0F",
            "#BEA578"
          ],
          "stadiumName": "Vitality Stadium",
          "stadiumSeats": "11329",
          "currentTransferRecord": "€-38.29m",
          "currentMarketValue": "€349.85m",
          "squad": {
            "size": "24",
            "averageAge": "24.9",
            "foreigners": "17",
            "nationalTeamPlayers": "14"
          },
          "league": {
            "id": "GB1",
            "name": "Premier League",
            "countryID": "1",
            "countryName": "England",
            "tier": "First Tier"
          },
          "historicalCrests": [
            "https://tmssl.akamaized.net//images/wappen/medium/989_1417084847.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225271.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225537.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225546.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225603.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225628.png",
            "https://tmssl.akamaized.net//images/wappen/medium/989_1697225708.png"
          ],
          "updatedAt": "2024-09-27T16:13:25.669635"
        }
        ```
        
- Brentford
    - Profile
        
        ```jsx
        {
            "id": "1148",
            "url": "/fc-brentford/startseite/verein/1148",
            "name": "Brentford FC",
            "officialName": "Brentford Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1148.png",
            "addressLine1": "Braemar Road",
            "addressLine2": "TW8 0NT   London",
            "addressLine3": "England",
            "tel": "020-8847-2511",
            "website": "www.brentfordfc.co.uk",
            "foundedOn": "Oct 9, 1889",
            "colors": [
                "#ff0000",
                "#ffffff",
                "#000000"
            ],
            "stadiumName": "Gtech Community Stadium",
            "stadiumSeats": "17250",
            "currentTransferRecord": "€-23.40m",
            "currentMarketValue": "€395.03m",
            "squad": {
                "size": "29",
                "averageAge": "24.1",
                "foreigners": "21",
                "nationalTeamPlayers": "13"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1148_1494584129.png"
            ],
            "updatedAt": "2024-09-27T16:14:26.552610"
        }
        ```
        
- Brighton & Hove Albion
    - Profile
        
        ```jsx
        {
            "id": "1237",
            "url": "/brighton-amp-hove-albion/startseite/verein/1237",
            "name": "Brighton & Hove Albion",
            "officialName": "Brighton and Hove Albion Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1237.png",
            "addressLine1": "Village Way",
            "addressLine2": "BN1 9BL Brighton",
            "addressLine3": "England",
            "tel": "+44 1273 668855",
            "fax": "+44 1273 668855",
            "website": "www.brightonandhovealbion.com",
            "foundedOn": "Jul 24, 1901",
            "colors": [
                "#0054A6",
                "#FFFFFF"
            ],
            "stadiumName": "AMEX Stadium",
            "stadiumSeats": "31800",
            "currentTransferRecord": "€-182.91m",
            "currentMarketValue": "€543.10m",
            "squad": {
                "size": "28",
                "averageAge": "25.0",
                "foreigners": "20",
                "nationalTeamPlayers": "18"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1237_1469833318.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1237_1469833359.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1237_1469833526.png"
            ],
            "updatedAt": "2024-09-27T16:15:08.140906"
        }
        ```
        
- Burnley
    - Profile
        
        ```jsx
        {
            "id": "1132",
            "url": "/fc-burnley/startseite/verein/1132",
            "name": "Burnley FC",
            "officialName": "Burnley Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1132.png",
            "addressLine1": "Harry Potts Way",
            "addressLine2": "BB10 4BX Burnley",
            "addressLine3": "England",
            "website": "www.burnleyfootballclub.com",
            "foundedOn": "Jan 1, 1882",
            "colors": [
                "#660808",
                "#73e8f0",
                "#000000"
            ],
            "stadiumName": "Turf Moor",
            "stadiumSeats": "21994",
            "currentTransferRecord": "+€57.32m",
            "currentMarketValue": "€186.70m",
            "squad": {
                "size": "30",
                "averageAge": "25.1",
                "foreigners": "19",
                "nationalTeamPlayers": "9"
            },
            "league": {
                "id": "GB2",
                "name": "Championship",
                "countryID": "1",
                "countryName": "England",
                "tier": "Second Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1132_1587809616.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1132_1587809626.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1132_1587809636.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1132_1587809646.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1132_1686900149.png"
            ],
            "updatedAt": "2024-09-27T16:15:50.949922"
        }
        ```
        
- Chelsea
    - Profile
        
        ```jsx
        {
            "id": "631",
            "url": "/fc-chelsea/startseite/verein/631",
            "name": "Chelsea FC",
            "officialName": "Chelsea Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/631.png",
            "addressLine1": "Fulham Road",
            "addressLine2": "SW6 1HS London",
            "addressLine3": "England",
            "tel": "+44 (20) 73869",
            "fax": "+44 (20) 73814",
            "website": "www.chelseafc.com",
            "foundedOn": "Mar 10, 1905",
            "members": "30.000",
            "membersDate": "Mar 14, 2018",
            "colors": [
                "#004793",
                "#FFFFFF"
            ],
            "stadiumName": "Stamford Bridge",
            "stadiumSeats": "40853",
            "currentTransferRecord": "€-40.50m",
            "currentMarketValue": "€948.20m",
            "squad": {
                "size": "29",
                "averageAge": "23.4",
                "foreigners": "19",
                "nationalTeamPlayers": "15"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/631_1400764022.png",
                "https://tmssl.akamaized.net//images/wappen/medium/631_1400764080.png",
                "https://tmssl.akamaized.net//images/wappen/medium/631_1400764132.png",
                "https://tmssl.akamaized.net//images/wappen/medium/631_1462278625.png"
            ],
            "updatedAt": "2024-09-27T16:16:19.987612"
        }
        ```
        
- Crystal Palace
    - Profile
        
        ```jsx
        {
            "id": "873",
            "url": "/crystal-palace/startseite/verein/873",
            "name": "Crystal Palace",
            "officialName": "Crystal Palace Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/873.png",
            "addressLine1": "Selhurst Park",
            "addressLine2": "SE25 6PU London",
            "addressLine3": "England",
            "tel": "+44 208 7686000",
            "website": "www.cpfc.co.uk",
            "foundedOn": "Sep 10, 1905",
            "colors": [
                "#1B458F",
                "#C4122E",
                "#A7A5A6"
            ],
            "stadiumName": "Selhurst Park",
            "stadiumSeats": "26047",
            "currentTransferRecord": "+€23.00m",
            "currentMarketValue": "€430.18m",
            "squad": {
                "size": "25",
                "averageAge": "26.4",
                "foreigners": "12",
                "nationalTeamPlayers": "13"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/873_1417084465.png",
                "https://tmssl.akamaized.net//images/wappen/medium/873_1424895646.png"
            ],
            "updatedAt": "2024-09-27T16:16:56.795807"
        }
        ```
        
- Everton
    - Profile
        
        ```jsx
        {
            "id": "29",
            "url": "/fc-everton/startseite/verein/29",
            "name": "Everton FC",
            "officialName": "Everton Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/29.png",
            "addressLine1": "Goodison Park",
            "addressLine2": "L4 4EL Liverpool",
            "addressLine3": "England",
            "tel": "+44 151 3302",
            "fax": "+44 151 2869",
            "website": "www.evertonfc.com",
            "foundedOn": "Jun 1, 1878",
            "otherSports": [
                "Basketball (als Everton Tigers)"
            ],
            "colors": [
                "#0052CC",
                "#FFFFFF"
            ],
            "stadiumName": "Goodison Park",
            "stadiumSeats": "39571",
            "currentTransferRecord": "+€33.45m",
            "currentMarketValue": "€349.10m",
            "squad": {
                "size": "25",
                "averageAge": "26.8",
                "foreigners": "14",
                "nationalTeamPlayers": "11"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/29_1400912701.png",
                "https://tmssl.akamaized.net//images/wappen/medium/29_1400912708.png",
                "https://tmssl.akamaized.net//images/wappen/medium/29_1406300365.png",
                "https://tmssl.akamaized.net//images/wappen/medium/29_1406300559.png",
                "https://tmssl.akamaized.net//images/wappen/medium/29_1406300567.png",
                "https://tmssl.akamaized.net//images/wappen/medium/29_1406300574.png"
            ],
            "updatedAt": "2024-09-27T16:17:21.352518"
        }
        ```
        
- Fulham
    - Profile
        
        ```jsx
        {
            "id": "931",
            "url": "/fc-fulham/startseite/verein/931",
            "name": "Fulham FC",
            "officialName": "Fulham Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/931.png",
            "addressLine1": "Stevenage Road",
            "addressLine2": "SW6 6HH London",
            "addressLine3": "England",
            "tel": "0843 208 1222",
            "fax": "+44 (20) 73844",
            "website": "www.fulhamfc.com",
            "foundedOn": "Dec 21, 1879",
            "members": "5.000",
            "membersDate": "Sep 1, 2010",
            "colors": [
                "#ffffff",
                "#000000",
                "#CC0000"
            ],
            "stadiumName": "Craven Cottage",
            "stadiumSeats": "25700",
            "currentTransferRecord": "€-22.75m",
            "currentMarketValue": "€342.00m",
            "squad": {
                "size": "23",
                "averageAge": "27.3",
                "foreigners": "19",
                "nationalTeamPlayers": "11"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587807894.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808771.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808822.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808835.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808851.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808875.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808928.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808938.png",
                "https://tmssl.akamaized.net//images/wappen/medium/931_1587808961.png"
            ],
            "updatedAt": "2024-09-27T16:17:49.972728"
        }
        ```
        
- Liverpool
    - Profile
        
        ```jsx
        {
            "id": "31",
            "url": "/fc-liverpool/startseite/verein/31",
            "name": "Liverpool FC",
            "officialName": "Liverpool Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/31.png",
            "addressLine1": "Anfield Road",
            "addressLine2": "L4 OTH Liverpool",
            "addressLine3": "England",
            "tel": "+44 151 2632361",
            "fax": "+44 151 2608813",
            "website": "www.liverpoolfc.com",
            "foundedOn": "Mar 15, 1892",
            "colors": [
                "#D10022",
                "#FFFFFF",
                "#00A499"
            ],
            "stadiumName": "Anfield",
            "stadiumSeats": "60725",
            "currentTransferRecord": "+€5.00m",
            "currentMarketValue": "€923.00m",
            "squad": {
                "size": "23",
                "averageAge": "26.0",
                "foreigners": "18",
                "nationalTeamPlayers": "22"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911510.png",
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911516.png",
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911528.png",
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911535.png",
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911539.png",
                "https://tmssl.akamaized.net//images/wappen/medium/31_1400911547.png"
            ],
            "updatedAt": "2024-09-27T16:19:01.121376"
        }
        ```
        
- Luton Town
    - Profile
        
        ```jsx
        {
            "id": "1031",
            "url": "/luton-town/startseite/verein/1031",
            "name": "Luton Town",
            "officialName": "Luton Town Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1031.png",
            "addressLine1": "1 Maple Road",
            "addressLine2": "LU4 8AW Luton",
            "addressLine3": "England",
            "website": "www.lutontown.co.uk",
            "foundedOn": "Apr 11, 1885",
            "colors": [
                "#F08008",
                "#2E1C94",
                "#FFFFFF"
            ],
            "stadiumName": "Kenilworth Road",
            "stadiumSeats": "11850",
            "currentTransferRecord": "+€4.25m",
            "currentMarketValue": "€101.15m",
            "squad": {
                "size": "28",
                "averageAge": "26.5",
                "foreigners": "15",
                "nationalTeamPlayers": "6"
            },
            "league": {
                "id": "GB2",
                "name": "Championship",
                "countryID": "1",
                "countryName": "England",
                "tier": "Second Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1031_1470128135.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1031_1470128209.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1031_1470128245.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1031_1470128259.png"
            ],
            "updatedAt": "2024-09-27T16:19:24.275571"
        }
        ```
        
- Manchester City
    - Profile
        
        ```jsx
        {
            "id": "281",
            "url": "/manchester-city/startseite/verein/281",
            "name": "Manchester City",
            "officialName": "Manchester City Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/281.png",
            "addressLine1": "Etihad Stadium, Etihad Campus",
            "addressLine2": "M11 3FF Manchester",
            "addressLine3": "England",
            "tel": "+44 161 4441894",
            "fax": "+44 161 4441894",
            "website": "mancity.com",
            "foundedOn": "Nov 23, 1880",
            "colors": [
                "#84BBFF",
                "#FFFFFF",
                "#84BBFF"
            ],
            "stadiumName": "Etihad Stadium",
            "stadiumSeats": "55017",
            "currentTransferRecord": "+€116.00m",
            "currentMarketValue": "€1.26bn",
            "squad": {
                "size": "24",
                "averageAge": "27.2",
                "foreigners": "16",
                "nationalTeamPlayers": "19"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/281_1400911689.png",
                "https://tmssl.akamaized.net//images/wappen/medium/281_1464678476.png",
                "https://tmssl.akamaized.net//images/wappen/medium/281_1464678615.png",
                "https://tmssl.akamaized.net//images/wappen/medium/281_1467356275.png"
            ],
            "updatedAt": "2024-09-27T16:19:41.884991"
        }
        ```
        
- Manchester United
    - Profile
        
        ```jsx
        {
            "id": "985",
            "url": "/manchester-united/startseite/verein/985",
            "name": "Manchester United",
            "officialName": "Manchester United Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/985.png",
            "addressLine1": "Sir Matt Busby Way",
            "addressLine2": "M16 0RA Manchester",
            "addressLine3": "England",
            "tel": "+44 1616767770",
            "website": "www.manutd.com",
            "foundedOn": "Apr 24, 1902",
            "otherSports": [
                "Basketball (1975-1987)"
            ],
            "colors": [
                "#D9020D",
                "#FFFFFF",
                "#000000"
            ],
            "stadiumName": "Old Trafford",
            "stadiumSeats": "74879",
            "currentTransferRecord": "€-111.50m",
            "currentMarketValue": "€857.35m",
            "squad": {
                "size": "27",
                "averageAge": "25.9",
                "foreigners": "19",
                "nationalTeamPlayers": "20"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/985_1405352828.png",
                "https://tmssl.akamaized.net//images/wappen/medium/985_1405352836.png",
                "https://tmssl.akamaized.net//images/wappen/medium/985_1405352843.png"
            ],
            "updatedAt": "2024-09-27T16:19:58.214184"
        }
        ```
        
- Newcastle United
    - Profile
        
        ```jsx
        {
            "id": "762",
            "url": "/newcastle-united/startseite/verein/762",
            "name": "Newcastle United",
            "officialName": "Newcastle United Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/762.png",
            "addressLine1": "St. James' Park",
            "addressLine2": "NE1 4ST Newcastle upon Tyne",
            "addressLine3": "England",
            "tel": "+44 191 2018",
            "fax": "+44 191 2018",
            "website": "www.nufc.co.uk",
            "foundedOn": "Dec 9, 1892",
            "members": "88.000",
            "colors": [
                "#000000",
                "#FCFCFC"
            ],
            "stadiumName": "St James' Park",
            "stadiumSeats": "52338",
            "currentTransferRecord": "+€8.00m",
            "currentMarketValue": "€651.65m",
            "squad": {
                "size": "31",
                "averageAge": "27.3",
                "foreigners": "13",
                "nationalTeamPlayers": "11"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/762_1484417242.png",
                "https://tmssl.akamaized.net//images/wappen/medium/762_1484417282.png",
                "https://tmssl.akamaized.net//images/wappen/medium/762_1484417297.png"
            ],
            "updatedAt": "2024-09-27T16:20:19.930335"
        }
        ```
        
- Nottingham Forest
    - Profile
        
        ```jsx
        {
            "id": "703",
            "url": "/nottingham-forest/startseite/verein/703",
            "name": "Nottingham Forest",
            "officialName": "Nottingham Forest Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/703.png",
            "addressLine1": "The City Ground",
            "addressLine2": "NG2 5FJ West Bridgford",
            "addressLine3": "England",
            "tel": "+44 115 982 4444",
            "fax": "+44 115 982 4455",
            "website": "nottinghamforest.co.uk",
            "foundedOn": "Jan 1, 1865",
            "colors": [
                "#e41927",
                "#2e394e",
                "#e9e837"
            ],
            "stadiumName": "The City Ground",
            "stadiumSeats": "30445",
            "currentTransferRecord": "€-18.20m",
            "currentMarketValue": "€414.00m",
            "squad": {
                "size": "27",
                "averageAge": "25.3",
                "foreigners": "20",
                "nationalTeamPlayers": "13"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/703_1470127360.png",
                "https://tmssl.akamaized.net//images/wappen/medium/703_1672914132.png",
                "https://tmssl.akamaized.net//images/wappen/medium/703_1672914146.png",
                "https://tmssl.akamaized.net//images/wappen/medium/703_1672914165.png"
            ],
            "updatedAt": "2024-09-27T16:20:51.043523"
        }
        ```
        
- Sheffield United
    - Profile
        
        ```jsx
        {
            "id": "350",
            "url": "/sheffield-united/startseite/verein/350",
            "name": "Sheffield United",
            "officialName": "Sheffield United Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/350.png",
            "addressLine1": "Bramall Lane",
            "addressLine2": "S2 4SU Sheffield",
            "addressLine3": "England",
            "website": "www.sufc.co.uk",
            "foundedOn": "Mar 22, 1889",
            "colors": [
                "#ec2227",
                "#010101",
                "#ffffff"
            ],
            "stadiumName": "Bramall Lane",
            "stadiumSeats": "32702",
            "currentTransferRecord": "+€38.12m",
            "currentMarketValue": "€89.10m",
            "squad": {
                "size": "25",
                "averageAge": "24.1",
                "foreigners": "8",
                "nationalTeamPlayers": "3"
            },
            "league": {
                "id": "GB2",
                "name": "Championship",
                "countryID": "1",
                "countryName": "England",
                "tier": "Second Tier"
            },
            "updatedAt": "2024-09-27T16:21:14.398273"
        }
        ```
        
- Tottenham Hotspur
    - Profile
        
        ```jsx
        {
            "id": "148",
            "url": "/tottenham-hotspur/startseite/verein/148",
            "name": "Tottenham Hotspur",
            "officialName": "Tottenham Hotspur Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/148.png",
            "addressLine1": "Bill Nicholson Way, 748 High Road",
            "addressLine2": "N17 0AP London",
            "addressLine3": "England",
            "tel": "+44 (20) 83655",
            "website": "www.tottenhamhotspur.com",
            "foundedOn": "Sep 5, 1882",
            "colors": [
                "#FFFFFF",
                "#001C58",
                "#FFFFFF"
            ],
            "stadiumName": "Tottenham Hotspur Stadium",
            "stadiumSeats": "62850",
            "currentTransferRecord": "€-93.55m",
            "currentMarketValue": "€768.30m",
            "squad": {
                "size": "25",
                "averageAge": "25.3",
                "foreigners": "18",
                "nationalTeamPlayers": "16"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/148_1400912414.png",
                "https://tmssl.akamaized.net//images/wappen/medium/148_1400912419.png",
                "https://tmssl.akamaized.net//images/wappen/medium/148_1400912426.png"
            ],
            "updatedAt": "2024-09-27T16:21:30.813863"
        }
        ```
        
- West Ham United
    - Profile
        
        ```jsx
        {
            "id": "379",
            "url": "/west-ham-united/startseite/verein/379",
            "name": "West Ham United",
            "officialName": "West Ham United Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/379.png",
            "legalForm": "AG",
            "addressLine1": "London Stadium, Queen Elizabeth Olympic",
            "addressLine2": "E20 2ST London",
            "addressLine3": "England",
            "tel": "+44 (871) 2222",
            "website": "www.whufc.com",
            "foundedOn": "Jan 1, 1895",
            "colors": [
                "#660033",
                "#0099FF"
            ],
            "stadiumName": "London Stadium",
            "stadiumSeats": "62500",
            "currentTransferRecord": "€-99.65m",
            "currentMarketValue": "€483.50m",
            "squad": {
                "size": "24",
                "averageAge": "28.0",
                "foreigners": "17",
                "nationalTeamPlayers": "12"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/379_1464675296.png",
                "https://tmssl.akamaized.net//images/wappen/medium/379_1724779104.png",
                "https://tmssl.akamaized.net//images/wappen/medium/379_1724779134.png"
            ],
            "updatedAt": "2024-09-27T16:22:05.386967"
        }
        ```
        
- Wolverhampton Wanderers
    - Profile
        
        ```jsx
        {
            "id": "543",
            "url": "/wolverhampton-wanderers/startseite/verein/543",
            "name": "Wolverhampton Wanderers",
            "officialName": "Wolverhampton Wanderers Football Club",
            "image": "https://tmssl.akamaized.net//images/wappen/big/543.png",
            "addressLine1": "Waterloo Road",
            "addressLine2": "WV14QR Wolverhampton",
            "addressLine3": "England",
            "website": "www.wolves.co.uk",
            "foundedOn": "Jan 13, 1877",
            "colors": [
                "#FDB913",
                "#231F20"
            ],
            "stadiumName": "Molineux Stadium",
            "stadiumSeats": "32050",
            "currentTransferRecord": "+€38.10m",
            "currentMarketValue": "€370.50m",
            "squad": {
                "size": "29",
                "averageAge": "25.6",
                "foreigners": "24",
                "nationalTeamPlayers": "18"
            },
            "league": {
                "id": "GB1",
                "name": "Premier League",
                "countryID": "1",
                "countryName": "England",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459765.png",
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459782.png",
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459824.png",
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459835.png",
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459847.png",
                "https://tmssl.akamaized.net//images/wappen/medium/543_1697459857.png"
            ],
            "updatedAt": "2024-09-27T16:22:24.447521"
        }
        ```
        

// laliga

- Real Madrid
    - Profile
        
        ```jsx
        {
            "id": "418",
            "url": "/real-madrid/startseite/verein/418",
            "name": "Real Madrid",
            "officialName": "Real Madrid Club de Fútbol",
            "image": "https://tmssl.akamaized.net//images/wappen/big/418.png",
            "addressLine1": "Avenida de Concha Espina 1",
            "addressLine2": "28036 Madrid",
            "addressLine3": "Spain",
            "tel": "+34 91 3984300",
            "fax": "+34 91 3984382",
            "website": "realmadrid.com",
            "foundedOn": "Mar 6, 1902",
            "members": "93.176",
            "membersDate": "Sep 15, 2019",
            "otherSports": [
                "Basketball",
                "Women´s Football"
            ],
            "colors": [
                "#FFFFFF",
                "#004996"
            ],
            "stadiumName": "Santiago Bernabéu",
            "stadiumSeats": "81044",
            "currentTransferRecord": "€-33.00m",
            "currentMarketValue": "€1.34bn",
            "squad": {
                "size": "22",
                "averageAge": "26.6",
                "foreigners": "17",
                "nationalTeamPlayers": "18"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/418_1400793115.png",
                "https://tmssl.akamaized.net//images/wappen/medium/418_1400793130.png",
                "https://tmssl.akamaized.net//images/wappen/medium/418_1400793167.png",
                "https://tmssl.akamaized.net//images/wappen/medium/418_1400793205.png",
                "https://tmssl.akamaized.net//images/wappen/medium/418_1400793229.png"
            ],
            "updatedAt": "2024-09-27T16:26:08.264198"
        }
        ```
        
- FC Barcelona
    - Profile
        
        ```jsx
        {
            "id": "131",
            "url": "/fc-barcelona/startseite/verein/131",
            "name": "FC Barcelona",
            "officialName": "Futbol Club Barcelona",
            "image": "https://tmssl.akamaized.net//images/wappen/big/131.png",
            "addressLine1": "Avinguda Arístides Maillol",
            "addressLine2": "08028 Barcelona",
            "addressLine3": "Spain",
            "tel": "+34 902 189900",
            "fax": "+34 934 112219",
            "website": "fcbarcelona.com",
            "foundedOn": "Nov 29, 1899",
            "members": "170.000",
            "membersDate": "Jan 1, 2022",
            "otherSports": [
                "Baseball",
                "Basketball",
                "Eishockey",
                "Eiskunstlauf",
                "Feldhockey",
                "Futsal",
                "Handball",
                "Leichtathletik",
                "Rollhockey",
                "Rollstuhlbasketball",
                "Rugby",
                "Volleyball"
            ],
            "colors": [
                "#004C99",
                "#A60042",
                "#FFEE00"
            ],
            "stadiumName": "Olímpic Lluís Companys",
            "stadiumSeats": "55926",
            "currentTransferRecord": "€-19.40m",
            "currentMarketValue": "€875.40m",
            "squad": {
                "size": "26",
                "averageAge": "23.4",
                "foreigners": "7",
                "nationalTeamPlayers": "16"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792132.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792150.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792174.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792189.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792227.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792246.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792264.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792283.png",
                "https://tmssl.akamaized.net//images/wappen/medium/131_1400792355.png"
            ],
            "updatedAt": "2024-09-27T16:28:10.653742"
        }
        ```
        
- Atlético de Madrid
    - Profile
        
        ```jsx
        {
            "id": "13",
            "url": "/atletico-madrid/startseite/verein/13",
            "name": "Atlético de Madrid",
            "officialName": "Club Atlético de Madrid S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/13.png",
            "addressLine1": "Paseo Virgen del Puerto 67",
            "addressLine2": "28005 Madrid",
            "addressLine3": "Spain",
            "tel": "+34 91 3664707",
            "fax": "+34 91 3669811",
            "website": "en.atleticodemadrid.com",
            "foundedOn": "Apr 26, 1903",
            "members": "128.249",
            "membersDate": "Jan 1, 2019",
            "colors": [
                "#CF321F",
                "#FFFFFF",
                "#212B61"
            ],
            "stadiumName": "Civitas Metropolitano",
            "stadiumSeats": "70460",
            "currentTransferRecord": "€-91.10m",
            "currentMarketValue": "€529.50m",
            "squad": {
                "size": "24",
                "averageAge": "28.0",
                "foreigners": "16",
                "nationalTeamPlayers": "16"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444723790.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444723839.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444723866.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444723900.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444723973.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444724016.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444724022.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444724085.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444724278.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1444724285.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1499465832.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1719403662.png",
                "https://tmssl.akamaized.net//images/wappen/medium/13_1719403965.png"
            ],
            "updatedAt": "2024-09-27T16:32:15.388606"
        }
        ```
        
- Real Sociedad
    - Profile
        
        ```jsx
        {
            "id": "681",
            "url": "/real-sociedad-san-sebastian/startseite/verein/681",
            "name": "Real Sociedad",
            "officialName": "Real Sociedad de Fútbol S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/681.png",
            "addressLine1": "Paseo de Anoeta 1",
            "addressLine2": "20014 Donostia-San Sebastián (Gipuzkoa)",
            "addressLine3": "Spain",
            "tel": "+34 (943) 451109",
            "fax": "+34 (943) 458941",
            "website": "www.realsociedad.com",
            "foundedOn": "Nov 30, 1908",
            "members": "35.342",
            "membersDate": "Aug 12, 2021",
            "colors": [
                "#0000ff",
                "#ffffff"
            ],
            "stadiumName": "Reale Arena",
            "stadiumSeats": "39313",
            "currentTransferRecord": "+€24.35m",
            "currentMarketValue": "€431.20m",
            "squad": {
                "size": "28",
                "averageAge": "24.6",
                "foreigners": "9",
                "nationalTeamPlayers": "12"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:32:44.228110"
        }
        ```
        
- Athletic Bilbao
    - Profile
        
        ```jsx
        {
            "id": "621",
            "url": "/athletic-bilbao/startseite/verein/621",
            "name": "Athletic Bilbao",
            "officialName": "Athletic Club Bilbao",
            "image": "https://tmssl.akamaized.net//images/wappen/big/621.png",
            "addressLine1": "Alameda de Mazarredo 23",
            "addressLine2": "48009 Bilbao-Bilbo (Bizkaia)",
            "addressLine3": "Spain",
            "tel": "+34 (94) 4240877",
            "fax": "+34 (94) 4233324",
            "website": "www.athletic-club.eus",
            "foundedOn": "Jan 1, 1898",
            "members": "44.560",
            "membersDate": "Feb 19, 2015",
            "colors": [
                "#FF0000",
                "#FFFFFF"
            ],
            "stadiumName": "San Mamés",
            "stadiumSeats": "53289",
            "currentTransferRecord": "€-6.50m",
            "currentMarketValue": "€318.60m",
            "squad": {
                "size": "26",
                "averageAge": "26.6",
                "foreigners": "2",
                "nationalTeamPlayers": "6"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:33:16.253041"
        }
        ```
        
- Valencia CF
    - Profile
        
        ```jsx
        {
            "id": "1049",
            "url": "/fc-valencia/startseite/verein/1049",
            "name": "Valencia CF",
            "officialName": "Valencia Club de Fútbol S. A. D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1049.png",
            "addressLine1": "Calle Pintor Monleón 4",
            "addressLine2": "46023 Valencia",
            "addressLine3": "Spain",
            "tel": "+34 902 011919",
            "fax": "+34 96 3372335",
            "website": "valenciacf.com",
            "foundedOn": "Mar 18, 1919",
            "members": "40.000",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FFFFFF",
                "#000000",
                "#F57710"
            ],
            "stadiumName": "Mestalla",
            "stadiumSeats": "49430",
            "currentTransferRecord": "+€28.65m",
            "currentMarketValue": "€260.00m",
            "squad": {
                "size": "25",
                "averageAge": "25.0",
                "foreigners": "8",
                "nationalTeamPlayers": "5"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1049_1439122737.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1049_1439122742.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1049_1439122747.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1049_1439122752.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1049_1439122756.png"
            ],
            "updatedAt": "2024-09-27T16:33:43.283547"
        }
        ```
        
- Girona FC
    - Profile
        
        ```jsx
        {
            "id": "12321",
            "url": "/fc-girona/startseite/verein/12321",
            "name": "Girona FC",
            "officialName": "Girona Fútbol Club S. A. D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/12321.png",
            "addressLine1": "Avenida Montilivi 141",
            "addressLine2": "17003 Girona",
            "addressLine3": "Spain",
            "tel": "+34 972 202977",
            "fax": "+34 972 201393",
            "website": "www.gironafc.cat",
            "foundedOn": "Jul 23, 1930",
            "members": "9.501",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FF0000",
                "#FFFFFF"
            ],
            "stadiumName": "Montilivi",
            "stadiumSeats": "14624",
            "currentTransferRecord": "+€12.60m",
            "currentMarketValue": "€208.00m",
            "squad": {
                "size": "24",
                "averageAge": "27.2",
                "foreigners": "12",
                "nationalTeamPlayers": "6"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:34:54.326244"
        }
        ```
        
- Villarreal CF
    - Profile
        
        ```jsx
        {
            "id": "1050",
            "url": "/fc-villarreal/startseite/verein/1050",
            "name": "Villarreal CF",
            "officialName": "Villarreal Club de Fútbol S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1050.png",
            "addressLine1": "Camino Miralcamp",
            "addressLine2": "12540 Villarreal",
            "addressLine3": "Spain",
            "tel": "+34 (964) 500250",
            "fax": "+34 (964) 500167",
            "website": "www.villarrealcf.es",
            "foundedOn": "Mar 10, 1923",
            "members": "15.000",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FFFF00",
                "#0073ff"
            ],
            "stadiumName": "La Cerámica",
            "stadiumSeats": "23500",
            "currentTransferRecord": "+€12.50m",
            "currentMarketValue": "€196.20m",
            "squad": {
                "size": "24",
                "averageAge": "26.8",
                "foreigners": "10",
                "nationalTeamPlayers": "10"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292476.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292484.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292495.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292519.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292531.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1050_1493292543.png"
            ],
            "updatedAt": "2024-09-27T16:35:18.787783"
        }
        ```
        
- Real Betis Balompié
    - Profile
        
        ```jsx
        {
            "id": "150",
            "url": "/real-betis-sevilla/startseite/verein/150",
            "name": "Real Betis Balompié",
            "officialName": "Real Betis Balompié S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/150.png",
            "addressLine1": "Avenida Heliópolis",
            "addressLine2": "41012 Sevilla",
            "addressLine3": "Spain",
            "tel": "+34 902 191907",
            "fax": "+34 954 614774",
            "website": "www.realbetisbalompie.es",
            "foundedOn": "Sep 12, 1907",
            "members": "50.373",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#00954C",
                "#FFFFFF"
            ],
            "stadiumName": "Benito Villamarín",
            "stadiumSeats": "60721",
            "currentTransferRecord": "+€20.65m",
            "currentMarketValue": "€189.40m",
            "squad": {
                "size": "25",
                "averageAge": "27.8",
                "foreigners": "12",
                "nationalTeamPlayers": "6"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/150_1663358497.png"
            ],
            "updatedAt": "2024-09-27T16:35:41.392055"
        }
        ```
        
- Sevilla FC
    - Profile
        
        ```jsx
        {
            "id": "368",
            "url": "/fc-sevilla/startseite/verein/368",
            "name": "Sevilla FC",
            "officialName": "Sevilla Fútbol Club S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/368.png",
            "addressLine1": "Calle Sevilla Fútbol Club",
            "addressLine2": "41005 Sevilla",
            "addressLine3": "Spain",
            "tel": "+34 (902) 510011",
            "fax": "+34 (954) 536061",
            "website": "www.sevillafc.es",
            "foundedOn": "Jan 25, 1890",
            "members": "39.955",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FF0000",
                "#FFFFFF"
            ],
            "stadiumName": "Ramón Sánchez-Pizjuán",
            "stadiumSeats": "43883",
            "currentTransferRecord": "+€20.05m",
            "currentMarketValue": "€181.60m",
            "squad": {
                "size": "25",
                "averageAge": "25.8",
                "foreigners": "13",
                "nationalTeamPlayers": "8"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/368_1425085225.png"
            ],
            "updatedAt": "2024-09-27T16:42:13.741324"
        }
        ```
        
- UD Las Palmas
    - Profile
        
        ```jsx
        {
            "id": "472",
            "url": "/ud-las-palmas/startseite/verein/472",
            "name": "UD Las Palmas",
            "officialName": "Unión Deportiva Las Palmas S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/472.png",
            "addressLine1": "Pio XII 29",
            "addressLine2": "35005 Las Palmas de Gran Canaria",
            "addressLine3": "Spain",
            "tel": "+34 (928) 241342",
            "fax": "+34 (928) 246714",
            "website": "www.udlaspalmas.es",
            "foundedOn": "Aug 22, 1949",
            "members": "17.085",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FFFF00",
                "#0000FF"
            ],
            "stadiumName": "Estadio de Gran Canaria",
            "stadiumSeats": "32400",
            "currentTransferRecord": "+€3.50m",
            "currentMarketValue": "€112.40m",
            "squad": {
                "size": "28",
                "averageAge": "27.0",
                "foreigners": "9",
                "nationalTeamPlayers": "1"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:42:02.710060"
        }
        ```
        
- CA Osasuna
    - Profile
        
        ```jsx
        {
            "id": "331",
            "url": "/ca-osasuna/startseite/verein/331",
            "name": "CA Osasuna",
            "officialName": "Club Atlético Osasuna",
            "image": "https://tmssl.akamaized.net//images/wappen/big/331.png",
            "addressLine1": "Calle Sadar",
            "addressLine2": "31006 Pamplona",
            "addressLine3": "Spain",
            "tel": "+34 928 152636",
            "fax": "+34 928 151655",
            "website": "www.osasuna.es",
            "foundedOn": "Nov 17, 1920",
            "members": "20.000",
            "membersDate": "Aug 30, 2023",
            "otherSports": [
                "Schwimmen"
            ],
            "stadiumName": "El Sadar",
            "stadiumSeats": "23576",
            "currentTransferRecord": "+€700k",
            "currentMarketValue": "€104.20m",
            "squad": {
                "size": "25",
                "averageAge": "27.2",
                "foreigners": "2",
                "nationalTeamPlayers": "2"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:41:51.161981"
        }
        ```
        
- RCD Mallorca
    - Profile
        
        ```jsx
        {
            "id": "237",
            "url": "/rcd-mallorca/startseite/verein/237",
            "name": "RCD Mallorca",
            "officialName": "Real Club Deportivo Mallorca S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/237.png",
            "addressLine1": "Camí dels Reis",
            "addressLine2": "07011 Palma de Mallorca",
            "addressLine3": "Spain",
            "tel": "+34 (971) 221221",
            "fax": "+34 (971) 22038",
            "website": "www.rcdmallorca.es",
            "foundedOn": "Mar 5, 1916",
            "members": "16.125",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FF0000",
                "#000000"
            ],
            "stadiumName": "Mallorca Son Moix",
            "stadiumSeats": "26020",
            "currentTransferRecord": "+€11.65m",
            "currentMarketValue": "€85.70m",
            "squad": {
                "size": "26",
                "averageAge": "27.3",
                "foreigners": "11",
                "nationalTeamPlayers": "5"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:41:39.380247"
        }
        ```
        
- Deportivo Alavés
    - Profile
        
        ```jsx
        {
            "id": "1108",
            "url": "/deportivo-alaves/startseite/verein/1108",
            "name": "Deportivo Alavés",
            "officialName": "Deportivo Alavés S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1108.png",
            "addressLine1": "Paseo de Cervantes",
            "addressLine2": "01007 Vitoria-Gasteiz",
            "addressLine3": "Spain",
            "tel": "+34 (945) 131018",
            "fax": "+34 (945) 232532",
            "website": "www.alaves.com",
            "foundedOn": "Jan 23, 1921",
            "members": "17.603",
            "membersDate": "Jan 22, 2020",
            "otherSports": [
                "Desde 2011 están asociados con el Saski Baskonia"
            ],
            "colors": [
                "#048fd9",
                "#ffffff"
            ],
            "stadiumName": "Mendizorroza",
            "stadiumSeats": "19840",
            "currentTransferRecord": "+€4.29m",
            "currentMarketValue": "€82.40m",
            "squad": {
                "size": "23",
                "averageAge": "26.0",
                "foreigners": "10",
                "nationalTeamPlayers": "3"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688046.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688055.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688065.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688075.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688084.png",
                "https://tmssl.akamaized.net//images/wappen/medium/1108_1721688104.png"
            ],
            "updatedAt": "2024-09-27T16:41:27.337183"
        }
        ```
        
- Celta de Vigo
    - Profile
        
        ```jsx
        {
            "id": "940",
            "url": "/celta-vigo/startseite/verein/940",
            "name": "Celta de Vigo",
            "officialName": "Real Club Celta de Vigo S. A. D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/940.png",
            "addressLine1": "Rúa do Príncipe 1",
            "addressLine2": "36202 Vigo",
            "addressLine3": "Spain",
            "tel": "+34 986 110900",
            "fax": "+34 986 292040",
            "website": "www.rccelta.es",
            "foundedOn": "Aug 23, 1923",
            "members": "20.300",
            "membersDate": "Aug 3, 2023",
            "colors": [
                "#99CCFF",
                "#FFFFFF"
            ],
            "stadiumName": "Abanca Balaídos",
            "stadiumSeats": "24870",
            "currentTransferRecord": "€-4.00m",
            "currentMarketValue": "€81.35m",
            "squad": {
                "size": "27",
                "averageAge": "26.4",
                "foreigners": "11",
                "nationalTeamPlayers": "8"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:41:15.157682"
        }
        ```
        
- Rayo Vallecano
    - Profile
        
        ```jsx
        {
            "id": "367",
            "url": "/rayo-vallecano/startseite/verein/367",
            "name": "Rayo Vallecano",
            "officialName": "Rayo Vallecano de Madrid S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/367.png",
            "addressLine1": "Calle Payaso Fofó",
            "addressLine2": "28018 Madrid",
            "addressLine3": "Spain",
            "tel": "+34 (91) 478225",
            "fax": "+34 (91) 477175",
            "website": "www.rayovallecano.es",
            "foundedOn": "May 29, 1924",
            "members": "10.360",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#FFFFFF",
                "#FF0000"
            ],
            "stadiumName": "Estadio de Vallecas",
            "stadiumSeats": "14708",
            "currentTransferRecord": "+€2.00m",
            "currentMarketValue": "€68.95m",
            "squad": {
                "size": "26",
                "averageAge": "29.0",
                "foreigners": "10",
                "nationalTeamPlayers": "6"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/367_1653488532.png"
            ],
            "updatedAt": "2024-09-27T16:41:02.152861"
        }
        ```
        
- RCD Espanyol Barcelona
    - Profile
        
        ```jsx
        {
            "id": "714",
            "url": "/espanyol-barcelona/startseite/verein/714",
            "name": "RCD Espanyol Barcelona",
            "officialName": "Reial Club Deportiu Espanyol de Barcelona S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/714.png",
            "addressLine1": "Avenida del Baix Llobregat,Cornellà",
            "addressLine2": "08038 Barcelona",
            "addressLine3": "Spain",
            "tel": "00 34 - 93 - 2927700",
            "fax": "00 34 - 93 - 4254552",
            "website": "www.rcdespanyol.com",
            "foundedOn": "Oct 20, 1900",
            "members": "22.970",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#0000ff",
                "#ffffff"
            ],
            "stadiumName": "Stage Front Stadium",
            "stadiumSeats": "40500",
            "currentTransferRecord": "+€1.10m",
            "currentMarketValue": "€68.30m",
            "squad": {
                "size": "26",
                "averageAge": "26.0",
                "foreigners": "9",
                "nationalTeamPlayers": "2"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:40:44.963334"
        }
        ```
        
- Getafe CF
    - Profile
        
        ```jsx
        {
            "id": "3709",
            "url": "/fc-getafe/startseite/verein/3709",
            "name": "Getafe CF",
            "officialName": "Getafe Club de Fútbol S.A.D. Team Dubai",
            "image": "https://tmssl.akamaized.net//images/wappen/big/3709.png",
            "addressLine1": "Avenida Teresa de Calcuta",
            "addressLine2": "28903 Getafe (Madrid)",
            "addressLine3": "Spain",
            "tel": "+34 (91) 6959771",
            "fax": "+34 (91) 6811212",
            "website": "www.getafecf.com",
            "foundedOn": "Jul 8, 1983",
            "members": "13.000",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#0000FF",
                "#0000FF"
            ],
            "stadiumName": "Coliseum",
            "stadiumSeats": "16800",
            "currentTransferRecord": "+€21.30m",
            "currentMarketValue": "€65.80m",
            "squad": {
                "size": "22",
                "averageAge": "25.7",
                "foreigners": "12",
                "nationalTeamPlayers": "3"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:39:57.377845"
        }
        ```
        
- CD Leganés
    - Profile
        
        ```jsx
        {
            "id": "1244",
            "url": "/cd-leganes/startseite/verein/1244",
            "name": "CD Leganés",
            "officialName": "Club Deportivo Leganés S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/1244.png",
            "addressLine1": "Calle Arquitectura",
            "addressLine2": "28918 Leganés",
            "addressLine3": "Spain",
            "tel": "+34 / 916888629",
            "fax": "+34 / 916887159",
            "website": "https://www.cdleganes.com/",
            "foundedOn": "Jun 23, 1928",
            "members": "10.000",
            "membersDate": "Jan 22, 2020",
            "colors": [
                "#0000FF",
                "#FFFFFF"
            ],
            "stadiumName": "Butarque",
            "stadiumSeats": "12454",
            "currentTransferRecord": "+€910k",
            "currentMarketValue": "€57.33m",
            "squad": {
                "size": "25",
                "averageAge": "26.7",
                "foreigners": "11",
                "nationalTeamPlayers": "5"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "updatedAt": "2024-09-27T16:39:42.012418"
        }
        ```
        
- Real Valladolid CF
    - Profile
        
        ```jsx
        {
            "id": "366",
            "url": "/real-valladolid/startseite/verein/366",
            "name": "Real Valladolid CF",
            "officialName": "Real Valladolid Club de Fútbol S.A.D.",
            "image": "https://tmssl.akamaized.net//images/wappen/big/366.png",
            "addressLine1": "Avenida Mundial 82",
            "addressLine2": "47014 Valladolid",
            "addressLine3": "Spain",
            "tel": "+34 (983) 360342",
            "fax": "+34 (983) 372164",
            "website": "www.realvalladolid.es",
            "foundedOn": "Jun 20, 1928",
            "members": "24.000",
            "membersDate": "Aug 22, 2024",
            "colors": [
                "#7f2282",
                "#ffffff"
            ],
            "stadiumName": "José Zorrilla",
            "stadiumSeats": "27618",
            "currentTransferRecord": "€-7.90m",
            "currentMarketValue": "€43.40m",
            "squad": {
                "size": "25",
                "averageAge": "26.0",
                "foreigners": "13",
                "nationalTeamPlayers": "5"
            },
            "league": {
                "id": "ES1",
                "name": "LaLiga",
                "countryID": "1",
                "countryName": "Spain",
                "tier": "First Tier"
            },
            "historicalCrests": [
                "https://tmssl.akamaized.net//images/wappen/medium/366_1656338955.png"
            ],
            "updatedAt": "2024-09-27T16:39:28.940520"
        }
        ```