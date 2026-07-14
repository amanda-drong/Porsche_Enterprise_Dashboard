/* ============ DATA ============ */
const DATA = [{"id": 6, "date": "2024-02-29", "customer": "Michael Adams", "model": "718 Cayman", "modelYear": 2022, "price": 79500.0, "mileage": 9800, "payMethod": "Credit Card", "city": "Boston", "state": "MA", "salesperson": "Kevin", "status": "Delivered"}, {"id": 7, "date": "2024-03-14", "customer": "Sophia Miller", "model": "911 Turbo S", "modelYear": 2024, "price": 235000.0, "mileage": 1200, "payMethod": "Wire Transfer", "city": "Seattle", "state": "WA", "salesperson": "Amanda Scott", "status": "Delivered"}, {"id": 8, "date": "2024-04-18", "customer": "Daniel Jones", "model": "Cayenne Coupe", "modelYear": 2023, "price": 112750.0, "mileage": 6400, "payMethod": "Financing", "city": "Austin", "state": "TX", "salesperson": "Brian Hall", "status": "In Transit"}, {"id": 9, "date": "2024-04-30", "customer": "Olivia Brown", "model": "Macan S", "modelYear": 2021, "price": 68900.0, "mileage": 28, "payMethod": "Cash", "city": "Denver", "state": "CO", "salesperson": "Jessica", "status": "Pending"}, {"id": 10, "date": "2024-05-22", "customer": "Ethan Wilson", "model": "Taycan 4S", "modelYear": 2024, "price": 121000.0, "mileage": null, "payMethod": "Bank Transfer", "city": "Los Angeles", "state": "CA", "salesperson": "Thomas King", "status": "Delivered"}, {"id": 11, "date": "2024-08-06", "customer": "Ava Martinez", "model": "Panamera 4", "modelYear": 2023, "price": 104500.0, "mileage": 14500, "payMethod": "Credit Card", "city": "Miami", "state": "FL", "salesperson": "Lisa Ray", "status": "Cancelled"}, {"id": 12, "date": "2024-07-11", "customer": "Noah Davis", "model": "911 Carrera S", "modelYear": 2020, "price": 96300.0, "mileage": 41000, "payMethod": "Lease", "city": "New York", "state": "NY", "salesperson": "Mark Evans", "status": "Delivered"}, {"id": 13, "date": "2024-07-15", "customer": "Isabella Garcia", "model": "Cayenne E-Hybrid", "modelYear": 2022, "price": 89750.0, "mileage": 11744, "payMethod": "Wire Transfer", "city": "San Diego", "state": "CA", "salesperson": "Nancy Reed", "status": "Pending Approval"}, {"id": 14, "date": "2024-08-19", "customer": "Liam Rodriguez", "model": "718 Boxster", "modelYear": 2021, "price": 73500.0, "mileage": 22300, "payMethod": "Debit Card", "city": "Chicago", "state": "IL", "salesperson": "George Bell", "status": "Shipped"}, {"id": 15, "date": "2024-09-02", "customer": "Mia Hernandez", "model": "Macan GTS", "modelYear": 2024, "price": 95000.0, "mileage": 3500, "payMethod": "Financing", "city": "Phoenix", "state": "AZ", "salesperson": "Helen Brooks", "status": "In Transit"}, {"id": 16, "date": "2024-09-17", "customer": "James Lopez", "model": "Taycan Turbo", "modelYear": 2023, "price": 153200.0, "mileage": 11, "payMethod": "ACH Payment", "city": "Dallas", "state": "TX", "salesperson": "Samuel Price", "status": "Delivered"}, {"id": 17, "date": "2024-10-04", "customer": "Charlotte Young", "model": "911 GT3", "modelYear": 2024, "price": 241000.0, "mileage": 750, "payMethod": "Wire Transfer", "city": "Las Vegas", "state": "NV", "salesperson": "Peter Ford", "status": "Pending"}, {"id": 18, "date": "2024-05-11", "customer": "Benjamin Allen", "model": "Panamera Turbo S", "modelYear": 2022, "price": 132000.0, "mileage": 19250, "payMethod": "Cash", "city": "San Jose", "state": "CA", "salesperson": "Angela Green", "status": "Delivered"}, {"id": 19, "date": "2024-12-12", "customer": "Amelia King", "model": "Cayenne Turbo GT", "modelYear": 2024, "price": 188000.0, "mileage": 2100, "payMethod": "Crypto Payment", "city": "Houston", "state": "TX", "salesperson": "Victor Stone", "status": "Awaiting Delivery"}, {"id": 20, "date": "2024-12-25", "customer": "Lucas Wright", "model": "911 Carrera Cabriolet", "modelYear": 2023, "price": 127800.0, "mileage": 12000, "payMethod": "Credit Card", "city": "Atlanta", "state": "GA", "salesperson": "Rachel Turner", "status": "Delivered"}, {"id": 21, "date": "2025-01-06", "customer": "Harper Scott", "model": "Macan", "modelYear": 2021, "price": 58900.0, "mileage": 33700, "payMethod": "Bank Transfer", "city": "Orlando", "state": "FL", "salesperson": "Chris Moore", "status": "Pending"}, {"id": 22, "date": "2025-02-01", "customer": "Henry Torres", "model": "718 Spyder RS", "modelYear": 2024, "price": 164000.0, "mileage": 900, "payMethod": "Financing", "city": "Portland", "state": "OR", "salesperson": "Laura Hill", "status": "In Transit"}, {"id": 23, "date": "2025-02-14", "customer": "Evelyn Nguyen", "model": "Taycan Cross Turismo", "modelYear": 2023, "price": 118500.0, "mileage": 7800, "payMethod": "Wire Transfer", "city": "Charlotte", "state": "NC", "salesperson": "Martin Young", "status": "Delivered"}, {"id": 24, "date": "2025-02-26", "customer": "Alexander Flores", "model": "Cayenne S", "modelYear": 2022, "price": 91300.0, "mileage": 16000, "payMethod": "Credit Card", "city": "Nashville", "state": "TN", "salesperson": "Diana Cooper", "status": "Pending"}, {"id": 25, "date": "2025-03-21", "customer": "Abigail Carter", "model": "911 Targa 4S", "modelYear": 2024, "price": 158750.0, "mileage": 2500, "payMethod": "Lease", "city": "Minneapolis", "state": "MN", "salesperson": "Steve Gray", "status": "Delivered"}, {"id": 26, "date": "2025-03-28", "customer": "Jack Mitchell", "model": "Panamera", "modelYear": 2020, "price": 72000.0, "mileage": 49000, "payMethod": "Bank Transfer", "city": "Philadelphia", "state": "PA", "salesperson": "Olivia Ross", "status": "Cancelled"}, {"id": 27, "date": "2025-04-09", "customer": "Emily Perez", "model": "Macan Electric", "modelYear": 2025, "price": 86500.0, "mileage": null, "payMethod": "Wire Transfer", "city": "San Antonio", "state": "TX", "salesperson": "Patrick Wood", "status": "Delivered"}, {"id": 28, "date": "2025-04-30", "customer": "William Roberts", "model": "911 Dakar", "modelYear": 2024, "price": 270000.0, "mileage": 1050, "payMethod": "Cash", "city": "Salt Lake City", "state": "UT", "salesperson": "Karen Diaz", "status": "Awaiting Pickup"}, {"id": 29, "date": "2025-05-12", "customer": "Sofia Turner", "model": "Taycan GTS", "modelYear": 2023, "price": 139000.0, "mileage": 6250, "payMethod": "Financing", "city": "Raleigh", "state": "NC", "salesperson": "Justin Cox", "status": "In Transit"}, {"id": 30, "date": "2025-06-18", "customer": "Mason Phillips", "model": "Cayenne", "modelYear": 2021, "price": 76800.0, "mileage": 38400, "payMethod": "Credit Card", "city": "Detroit", "state": "MI", "salesperson": "Betty Ward", "status": "Delivered"}, {"id": 31, "date": "2025-06-17", "customer": "Ella Campbell", "model": "718 Cayman GT4 RS", "modelYear": 2024, "price": 173600.0, "mileage": 400, "payMethod": "Wire Transfer", "city": "Columbus", "state": "OH", "salesperson": "Gary Reed", "status": "Pending"}, {"id": 32, "date": "2025-07-07", "customer": "Logan Parker", "model": "911 Carrera GTS", "modelYear": 2022, "price": 119900.0, "mileage": 13600, "payMethod": "Cash", "city": "Indianapolis", "state": "IN", "salesperson": "Maria Foster", "status": "Delivered"}, {"id": 33, "date": "2025-07-22", "customer": "Grace Evans", "model": "Panamera 4 E-Hybrid", "modelYear": 2023, "price": 109250.0, "mileage": 8900, "payMethod": "Lease", "city": "Fort Worth", "state": "TX", "salesperson": "Harold Bennett", "status": "In Transit"}, {"id": 34, "date": "2025-08-14", "customer": "Jacob Edwards", "model": "Macan T", "modelYear": 2022, "price": 82000.0, "mileage": 21750, "payMethod": "Wire Transfer", "city": "Jacksonville", "state": "FL", "salesperson": "Teresa Cook", "status": "Delivered"}, {"id": 35, "date": "2025-09-01", "customer": "Victoria Collins", "model": "Taycan Turbo S", "modelYear": 2025, "price": 214000.0, "mileage": null, "payMethod": "Crypto Payment", "city": "San Diego", "state": "CA", "salesperson": "Frank Morgan", "status": "Pending Review"}, {"id": 36, "date": "2025-09-19", "customer": "Andrew Simmons", "model": "911 Carrera", "modelYear": 2024, "price": 124500.0, "mileage": 4800, "payMethod": "Credit Card", "city": "Tampa", "state": "FL", "salesperson": "Natalie", "status": "Delivered"}, {"id": 37, "date": "2025-09-18", "customer": "Chloe Bennett", "model": "Cayenne S", "modelYear": 2023, "price": 98200.0, "mileage": 12200, "payMethod": "Bank Transfer", "city": "Sacramento", "state": "CA", "salesperson": "Eric Woods", "status": "Pending"}, {"id": 38, "date": "2025-10-04", "customer": "Ryan Cooper", "model": "Macan", "modelYear": 2022, "price": 67500.0, "mileage": 24100, "payMethod": "Financing", "city": "Cleveland", "state": "OH", "salesperson": "Patricia Fox", "status": "Delivered"}, {"id": 39, "date": "2025-10-12", "customer": "Hannah Reed", "model": "Taycan", "modelYear": 2025, "price": 116900.0, "mileage": null, "payMethod": "Wire Transfer", "city": "Milwaukee", "state": "WI", "salesperson": "Alan Price", "status": "In Transit"}, {"id": 40, "date": "2025-10-29", "customer": "Dylan Parker", "model": "Panamera 4S", "modelYear": 2024, "price": 112000.0, "mileage": 10, "payMethod": "Cash", "city": "Kansas City", "state": "MO", "salesperson": "Sandra Hill", "status": "Delivered"}, {"id": 41, "date": "2025-02-11", "customer": "Lily Coleman", "model": "718 Boxster", "modelYear": 2021, "price": 74000.0, "mileage": 31000, "payMethod": "Debit Card", "city": "Omaha", "state": "NE", "salesperson": "Victor Lee", "status": "Cancelled"}, {"id": 42, "date": "2025-11-16", "customer": "Nathan Hughes", "model": "911 Turbo", "modelYear": 2024, "price": 198300.0, "mileage": 2400, "payMethod": "Wire Transfer", "city": "Albuquerque", "state": "NM", "salesperson": "Monica", "status": "Awaiting Delivery"}, {"id": 43, "date": "2025-11-18", "customer": "Zoe Foster", "model": "Cayenne Coupe", "modelYear": 2023, "price": 103750.0, "mileage": 6773, "payMethod": "Wire Transfer", "city": "Tucson", "state": "AZ", "salesperson": "Gregory Adams", "status": "Pending Approval"}, {"id": 44, "date": "2025-11-30", "customer": "Caleb Ward", "model": "Macan GTS", "modelYear": 2024, "price": 93600.0, "mileage": 5800, "payMethod": "Financing", "city": "Fresno", "state": "CA", "salesperson": "Laura West", "status": "Shipped"}, {"id": 45, "date": "2025-12-07", "customer": "Stella Brooks", "model": "Taycan 4S", "modelYear": 2025, "price": 129000.0, "mileage": null, "payMethod": "ACH Payment", "city": "Virginia Beach", "state": "VA", "salesperson": "Henry King", "status": "In Transit"}, {"id": 46, "date": "2025-12-22", "customer": "Owen Bryant", "model": "Panamera Turbo", "modelYear": 2022, "price": 136000.0, "mileage": 18400, "payMethod": "Credit Card", "city": "Colorado Springs", "state": "CO", "salesperson": "Amber Clark", "status": "Delivered"}, {"id": 47, "date": "2026-12-03", "customer": "Nora Simmons", "model": "911 GT3 RS", "modelYear": 2024, "price": 286500.0, "mileage": 700, "payMethod": "Wire Transfer", "city": "Arlington", "state": "TX", "salesperson": "Peter Lane", "status": "Pending"}, {"id": 48, "date": "2026-01-08", "customer": "Isaac Butler", "model": "Cayenne E-Hybrid", "modelYear": 2023, "price": 92800.0, "mileage": 15000, "payMethod": "Lease", "city": "Bakersfield", "state": "CA", "salesperson": "Grace Morris", "status": "Delivered"}, {"id": 49, "date": "2026-01-15", "customer": "Leah Henderson", "model": "Macan T", "modelYear": 2022, "price": 72400.0, "mileage": 19750, "payMethod": "Cash", "city": "Mesa", "state": "AZ", "salesperson": "Kyle Perry", "status": "Awaiting Pickup"}, {"id": 50, "date": "2026-01-28", "customer": "Christian Bailey", "model": "Taycan Turbo", "modelYear": 2025, "price": 158500.0, "mileage": 3200, "payMethod": "Crypto Payment", "city": "Atlanta", "state": "GA", "salesperson": "Megan Reed", "status": "Delivered"}, {"id": 51, "date": "2026-02-03", "customer": "Audrey Russell", "model": "718 Cayman", "modelYear": 2021, "price": 69900.0, "mileage": 27600, "payMethod": "Bank Transfer", "city": "Long Beach", "state": "CA", "salesperson": "Carl Simmons", "status": "Pending"}, {"id": 52, "date": "2026-02-15", "customer": "Hunter Griffin", "model": "911 Targa 4", "modelYear": 2024, "price": 141250.0, "mileage": 2100, "payMethod": "Financing", "city": "Oakland", "state": "CA", "salesperson": "Linda Cole", "status": "In Transit"}, {"id": 53, "date": "2026-02-19", "customer": "Scarlett Diaz", "model": "Panamera", "modelYear": 2020, "price": 71500.0, "mileage": 52000, "payMethod": "Wire Transfer", "city": "Tulsa", "state": "OK", "salesperson": "Martin Brooks", "status": "Delivered"}, {"id": 54, "date": "2026-02-25", "customer": "Eli Jenkins", "model": "Cayenne Turbo", "modelYear": 2023, "price": 146800.0, "mileage": 11300, "payMethod": "Credit Card", "city": "Wichita", "state": "KS", "salesperson": "Diana Long", "status": "Pending"}, {"id": 55, "date": "2026-03-01", "customer": "Madison Powell", "model": "Macan Electric", "modelYear": 2025, "price": 89700.0, "mileage": null, "payMethod": "Lease", "city": "New Orleans", "state": "LA", "salesperson": "Steve Ross", "status": "Delivered"}, {"id": 56, "date": "2026-03-14", "customer": "Adrian Sanders", "model": "911 Carrera S", "modelYear": 2022, "price": 104600.0, "mileage": 15900, "payMethod": "Bank Transfer", "city": "Honolulu", "state": "HI", "salesperson": "Olivia Cruz", "status": "Cancelled"}, {"id": 57, "date": "2026-08-03", "customer": "Penelope Barnes", "model": "Taycan GTS", "modelYear": 2024, "price": 142000.0, "mileage": 6600, "payMethod": "Wire Transfer", "city": "Anaheim", "state": "CA", "salesperson": "Patrick Wood", "status": "Delivered"}, {"id": 58, "date": "2026-04-08", "customer": "Nolan Fisher", "model": "Cayenne", "modelYear": 2021, "price": 78400.0, "mileage": 40250, "payMethod": "Cash", "city": "Henderson", "state": "NV", "salesperson": "Karen Stone", "status": "Awaiting Review"}, {"id": 59, "date": "2026-04-21", "customer": "Layla Marshall", "model": "718 Spyder RS", "modelYear": 2025, "price": 169000.0, "mileage": 850, "payMethod": "Financing", "city": "Lexington", "state": "KY", "salesperson": "Justin Fox", "status": "In Transit"}, {"id": 60, "date": "2026-04-21", "customer": "Gabriel Owens", "model": "911 Dakar", "modelYear": 2024, "price": 268900.0, "mileage": 1400, "payMethod": "Credit Card", "city": "Riverside", "state": "CA", "salesperson": "Betty James", "status": "Delivered"}, {"id": 61, "date": "2026-04-29", "customer": "Victoria Hart", "model": "Panamera 4", "modelYear": 2023, "price": 101300.0, "mileage": 12700, "payMethod": "Wire Transfer", "city": "Corpus Christi", "state": "TX", "salesperson": "Gary Price", "status": "Pending"}, {"id": 62, "date": "2026-05-05", "customer": "Julian Stone", "model": "Macan S", "modelYear": 2021, "price": 66750.0, "mileage": 29800, "payMethod": "Cash", "city": "St. Louis", "state": "MO", "salesperson": "Maria Green", "status": "Delivered"}, {"id": 63, "date": "2026-05-14", "customer": "Brooklyn Webb", "model": "Taycan Cross Turismo", "modelYear": 2024, "price": 127900.0, "mileage": 7500, "payMethod": "Lease", "city": "Pittsburgh", "state": "PA", "salesperson": "Harold Young", "status": "In Transit"}, {"id": 64, "date": "2026-05-23", "customer": "Aaron Kim", "model": "Cayenne Turbo GT", "modelYear": 2025, "price": 200000.0, "mileage": 1950, "payMethod": "Wire Transfer", "city": "Cincinnati", "state": "OH", "salesperson": "Teresa Ward", "status": "Delivered"}, {"id": 65, "date": "2026-06-02", "customer": "Claire Watson", "model": "911 Carrera Cabriolet", "modelYear": 2023, "price": 132000.0, "mileage": 8800, "payMethod": "Crypto Payment", "city": "Anchorage", "state": "AK", "salesperson": "Frank Reed", "status": "Pending Review"}, {"id": 66, "date": "2026-06-15", "customer": "Sebastian Brooks", "model": "718 Cayman GT4 RS", "modelYear": 2024, "price": 176400.0, "mileage": 600, "payMethod": "Credit Card", "city": "Plano", "state": "TX", "salesperson": "Angela Moore", "status": "Delivered"}, {"id": 67, "date": "2026-06-30", "customer": "Bella Ramirez", "model": "Panamera 4 E-Hybrid", "modelYear": 2022, "price": 108500.0, "mileage": 16200, "payMethod": "Bank Transfer", "city": "Newark", "state": "NJ", "salesperson": "Rachel West", "status": "Cancelled"}, {"id": 68, "date": "2026-07-07", "customer": "Miles Peterson", "model": "Macan", "modelYear": 2021, "price": 59000.0, "mileage": 36000, "payMethod": "Financing", "city": "Greensboro", "state": "NC", "salesperson": "Thomas Fox", "status": "Awaiting Delivery"}, {"id": 69, "date": "2026-07-20", "customer": "Skylar Rogers", "model": "Taycan Turbo S", "modelYear": 2025, "price": 218000.0, "mileage": null, "payMethod": "Wire Transfer", "city": "Lincoln", "state": "NE", "salesperson": "Lisa Dunn", "status": "Pending"}, {"id": 70, "date": "2023-07-25", "customer": "Dominic Kelly", "model": "Cayenne S", "modelYear": 2024, "price": 99950.0, "mileage": 5300, "payMethod": "Debit Card", "city": "Jersey City", "state": "NJ", "salesperson": "Brian Allen", "status": "Delivered"}, {"id": 71, "date": "2026-04-08", "customer": "Lucy Howard", "model": "911 Carrera GTS", "modelYear": 2024, "price": 121750.0, "mileage": 5872, "payMethod": "Credit Card", "city": "Chandler", "state": "AZ", "salesperson": "George Hall", "status": "Delivered"}, {"id": 72, "date": "2026-08-18", "customer": "Everett Cox", "model": "718 Boxster GTS", "modelYear": 2023, "price": 91500.0, "mileage": 13300, "payMethod": "Lease", "city": "Reno", "state": "NV", "salesperson": "Helen King", "status": "Shipped"}, {"id": 73, "date": "2026-08-31", "customer": "Maya Rivera", "model": "Panamera Turbo S", "modelYear": 2022, "price": 134000.0, "mileage": 20100, "payMethod": "Wire Transfer", "city": "Buffalo", "state": "NY", "salesperson": "Samuel Price", "status": "In Transit"}, {"id": 74, "date": "2026-09-09", "customer": "Connor Ward", "model": "Macan GTS", "modelYear": 2024, "price": 96800.0, "mileage": null, "payMethod": "ACH Payment", "city": "Durham", "state": "NC", "salesperson": "Peter Ford", "status": "Delivered"}, {"id": 75, "date": "2026-09-17", "customer": "Eliana Bell", "model": "Taycan 4S", "modelYear": 2025, "price": 131600.0, "mileage": 2900, "payMethod": "Wire Transfer", "city": "Laredo", "state": "TX", "salesperson": "Angela Green", "status": "Pending Approval"}, {"id": 76, "date": "2026-09-28", "customer": "Cameron Murphy", "model": "Cayenne E-Hybrid", "modelYear": 2023, "price": 94300.0, "mileage": 13100, "payMethod": "Cash", "city": "Madison", "state": "WI", "salesperson": "Victor Stone", "status": "Delivered"}, {"id": 77, "date": "2026-10-06", "customer": "Ariana Cook", "model": "911 Turbo S", "modelYear": 2025, "price": 242000.0, "mileage": 1100, "payMethod": "Crypto Payment", "city": "Lubbock", "state": "TX", "salesperson": "Rachel Turner", "status": "Awaiting Pickup"}, {"id": 78, "date": "2026-10-16", "customer": "Wesley Morgan", "model": "718 Cayman S", "modelYear": 2022, "price": 82750.0, "mileage": 22500, "payMethod": "Credit Card", "city": "Toledo", "state": "OH", "salesperson": "Chris Moore", "status": "Cancelled"}, {"id": 79, "date": "2026-10-29", "customer": "Naomi Peterson", "model": "Macan Electric", "modelYear": 2026, "price": 91300.0, "mileage": null, "payMethod": "Wire Transfer", "city": "Irvine", "state": "CA", "salesperson": "Laura Hill", "status": "Delivered"}, {"id": 80, "date": "2026-11-03", "customer": "Jason Perry", "model": "Panamera", "modelYear": 2021, "price": 79900.0, "mileage": 44800, "payMethod": "Financing", "city": "Garland", "state": "TX", "salesperson": "Martin Young", "status": "Pending"}, {"id": 81, "date": "2026-11-14", "customer": "Riley Flores", "model": "Cayenne Coupe", "modelYear": 2024, "price": 111000.0, "mileage": 6700, "payMethod": "Bank Transfer", "city": "Irving", "state": "TX", "salesperson": "Diana Cooper", "status": "In Transit"}, {"id": 82, "date": "2026-12-11", "customer": "Hazel Long", "model": "911 Targa 4S", "modelYear": 2023, "price": 156500.0, "mileage": 4200, "payMethod": "Cash", "city": "Chesapeake", "state": "VA", "salesperson": "Steve Gray", "status": "Delivered"}, {"id": 83, "date": "2026-12-24", "customer": "Easton Bailey", "model": "Taycan", "modelYear": 2025, "price": 119900.0, "mileage": 1250, "payMethod": "Lease", "city": "Scottsdale", "state": "AZ", "salesperson": "Olivia Ross", "status": "Pending"}, {"id": 84, "date": "2026-12-28", "customer": "Aurora Cooper", "model": "Macan T", "modelYear": 2022, "price": 73200.0, "mileage": 18600, "payMethod": "Wire Transfer", "city": "Norfolk", "state": "VA", "salesperson": "Patrick Wood", "status": "Delivered"}, {"id": 85, "date": "2026-12-28", "customer": "Colton Richardson", "model": "911 GT3", "modelYear": 2024, "price": 224000.0, "mileage": 3000, "payMethod": "Wire Transfer", "city": "Boise", "state": "ID", "salesperson": "Karen Diaz", "status": "Awaiting Delivery"}, {"id": 86, "date": "2027-01-15", "customer": "Mason Stewart", "model": "911 Carrera", "modelYear": 2024, "price": 126900.0, "mileage": 7200, "payMethod": "Credit Card", "city": "Orlando", "state": "FL", "salesperson": "Kevin Brown", "status": "Delivered"}, {"id": 87, "date": "2027-01-29", "customer": "Harper Reed", "model": "Cayenne", "modelYear": 2023, "price": 84500.0, "mileage": 21400, "payMethod": "Bank Transfer", "city": "San Jose", "state": "CA", "salesperson": "Amanda Lee", "status": "Pending"}, {"id": 88, "date": "2027-02-11", "customer": "Tyler Morris", "model": "Macan S", "modelYear": 2022, "price": 69800.0, "mileage": 26300, "payMethod": "Financing", "city": "Tampa", "state": "FL", "salesperson": "Brian Hall", "status": "Delivered"}, {"id": 89, "date": "2026-02-10", "customer": "Natalie Brooks", "model": "Taycan 4S", "modelYear": 2025, "price": 132700.0, "mileage": null, "payMethod": "Wire Transfer", "city": "Denver", "state": "CO", "salesperson": "Jessica White", "status": "In Transit"}, {"id": 90, "date": "2027-03-05", "customer": "Brandon Parker", "model": "Panamera", "modelYear": 2021, "price": 81000.0, "mileage": 42, "payMethod": "Cash", "city": "Austin", "state": "TX", "salesperson": "Thomas King", "status": "Delivered"}, {"id": 91, "date": "2027-03-18", "customer": "Lauren Foster", "model": "718 Cayman", "modelYear": 2023, "price": 78900.0, "mileage": 17500, "payMethod": "Debit Card", "city": "Seattle", "state": "WA", "salesperson": "Victor Lee", "status": "Cancelled"}, {"id": 92, "date": "2027-04-02", "customer": "Adam Hughes", "model": "911 Turbo S", "modelYear": 2026, "price": 249300.0, "mileage": 900, "payMethod": "Wire Transfer", "city": "Boston", "state": "MA", "salesperson": "Monica Green", "status": "Awaiting Delivery"}, {"id": 93, "date": "2027-05-04", "customer": "Julia Coleman", "model": "Cayenne Coupe", "modelYear": 2024, "price": 108750.0, "mileage": 5530, "payMethod": "Wire Transfer", "city": "Phoenix", "state": "AZ", "salesperson": "Gregory Adams", "status": "Pending Approval"}, {"id": 94, "date": "2027-03-07", "customer": "Caleb Simmons", "model": "Macan Electric", "modelYear": 2026, "price": 92600.0, "mileage": null, "payMethod": "Financing", "city": "Chicago", "state": "IL", "salesperson": "Laura West", "status": "Shipped"}, {"id": 95, "date": "2027-05-12", "customer": "Ariana Price", "model": "Taycan Turbo", "modelYear": 2025, "price": 164000.0, "mileage": null, "payMethod": "ACH Payment", "city": "Dallas", "state": "TX", "salesperson": "Henry King", "status": "In Transit"}, {"id": 96, "date": "2027-05-27", "customer": "Owen Rivera", "model": "Panamera 4S", "modelYear": 2024, "price": 119000.0, "mileage": 13400, "payMethod": "Credit Card", "city": "San Francisco", "state": "CA", "salesperson": "Amber Clark", "status": "Delivered"}, {"id": 97, "date": "2027-06-14", "customer": "Nora Bennett", "model": "911 GT3", "modelYear": 2026, "price": 232500.0, "mileage": 1700, "payMethod": "Wire Transfer", "city": "Las Vegas", "state": "NV", "salesperson": "Peter Lane", "status": "Pending"}, {"id": 98, "date": "2027-06-18", "customer": "Isaac Turner", "model": "Cayenne E-Hybrid", "modelYear": 2023, "price": 96800.0, "mileage": 14000, "payMethod": "Lease", "city": "Charlotte", "state": "NC", "salesperson": "Grace Morris", "status": "Delivered"}, {"id": 99, "date": "2027-07-03", "customer": "Leah Scott", "model": "Macan T", "modelYear": 2022, "price": 74400.0, "mileage": 20750, "payMethod": "Cash", "city": "Mesa", "state": "AZ", "salesperson": "Kyle Perry", "status": "Awaiting Pickup"}, {"id": 100, "date": "2027-07-22", "customer": "Christian Bailey", "model": "Taycan GTS", "modelYear": 2025, "price": 148500.0, "mileage": 5200, "payMethod": "Crypto Payment", "city": "Atlanta", "state": "GA", "salesperson": "Megan Reed", "status": "Delivered"}, {"id": 101, "date": "2027-08-08", "customer": "Audrey Russell", "model": "718 Boxster", "modelYear": 2021, "price": 71900.0, "mileage": 29600, "payMethod": "Bank Transfer", "city": "Long Beach", "state": "CA", "salesperson": "Carl Simmons", "status": "Pending"}, {"id": 102, "date": "2027-08-12", "customer": "Hunter Griffin", "model": "911 Targa 4", "modelYear": 2024, "price": 143250.0, "mileage": 3100, "payMethod": "Financing", "city": "Oakland", "state": "CA", "salesperson": "Linda Cole", "status": "In Transit"}, {"id": 103, "date": "2027-09-19", "customer": "Scarlett Diaz", "model": "Panamera Turbo", "modelYear": 2020, "price": 137500.0, "mileage": 48000, "payMethod": "Wire Transfer", "city": "Tulsa", "state": "OK", "salesperson": "Martin Brooks", "status": "Delivered"}, {"id": 104, "date": "2027-09-25", "customer": "Eli Jenkins", "model": "Cayenne Turbo GT", "modelYear": 2025, "price": 204800.0, "mileage": 3300, "payMethod": "Credit Card", "city": "Wichita", "state": "KS", "salesperson": "Diana Long", "status": "Pending"}, {"id": 105, "date": "2027-10-01", "customer": "Madison Powell", "model": "911 Dakar", "modelYear": 2024, "price": 271700.0, "mileage": 1050, "payMethod": "Lease", "city": "New Orleans", "state": "LA", "salesperson": "Steve Ross", "status": "Delivered"}];
/* ============ HELPERS ============ */
const familyOf = (model) => model.split(' ')[0];
const fmtBRL = (n) => 'R$ ' + n.toLocaleString('pt-BR', {maximumFractionDigits:0});
const fmtBRLfull = (n) => 'R$ ' + n.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});

const PURPLE_PINK_SCALE = ['#7C3AED','#9B5DE5','#B57BEE','#C98BE8','#D97FCB','#E63FAF','#F06BC0','#F3A8DC','#A78BFA','#8B5CF6'];

/* ============ POPULATE FILTERS ============ */
const families = [...new Set(DATA.map(d => familyOf(d.model)))].sort();
const years = [...new Set(DATA.map(d => d.modelYear))].sort((a,b)=>a-b);
const cities = [...new Set(DATA.map(d => d.city))].sort();
const payMethods = [...new Set(DATA.map(d => d.payMethod))].sort();

function fillSelect(id, values){
  const sel = document.getElementById(id);
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v; opt.textContent = v;
    sel.appendChild(opt);
  });
}
fillSelect('f-model', families);
fillSelect('f-year', years);
fillSelect('f-city', cities);
fillSelect('f-pay', payMethods);

/* ============ STATE ============ */
let sortKey = 'date', sortDir = -1;

/* ============ CHART INSTANCES ============ */
let cityChart = null, yearChart = null;

/* Shared ranking used by BOTH chart 01 and insights 02, so they stay in harmony */
function getCityRanking(rows){
  const byCity = {};
  rows.forEach(d => { (byCity[d.city] = byCity[d.city]||[]).push(d); });
  return Object.entries(byCity).map(([city, list]) => {
    const modelCounts = {}, familyCounts = {};
    list.forEach(d => {
      modelCounts[d.model] = (modelCounts[d.model]||0)+1;
      familyCounts[familyOf(d.model)] = (familyCounts[familyOf(d.model)]||0)+1;
    });
    const [champModel, champCount] = Object.entries(modelCounts).sort((a,b)=>b[1]-a[1])[0];
    const [champFamily] = Object.entries(familyCounts).sort((a,b)=>b[1]-a[1])[0];
    const revenue = list.reduce((s,d)=>s+d.price,0);
    return { city, champModel, champCount, champFamily, total: list.length, revenue };
  }).sort((a,b) => b.total - a.total || a.city.localeCompare(b.city));
}

const familyColorMap = {};
families.forEach((f,i)=> familyColorMap[f] = PURPLE_PINK_SCALE[i % PURPLE_PINK_SCALE.length]);

/* ============ CORE RENDER ============ */
function getFiltered(){
  const fm = document.getElementById('f-model').value;
  const fy = document.getElementById('f-year').value;
  const fc = document.getElementById('f-city').value;
  const fp = document.getElementById('f-pay').value;
  return DATA.filter(d =>
    (!fm || familyOf(d.model) === fm) &&
    (!fy || String(d.modelYear) === fy) &&
    (!fc || d.city === fc) &&
    (!fp || d.payMethod === fp)
  );
}

function render(){
  const rows = getFiltered();
  document.getElementById('result-count').innerHTML = `<b>${rows.length}</b> de ${DATA.length} vendas`;
  document.getElementById('table-count-label').textContent = `${rows.length} registro(s)`;

  renderKPIs(rows);
  renderGauge(rows);
  renderCityChart(rows);
  renderYearChart(rows);
  renderInsights(rows);
  renderTable(rows);
}

/* ---- KPIs ---- */
function renderKPIs(rows){
  const revenue = rows.reduce((s,d)=>s+d.price,0);
  const units = rows.length;
  const avg = units ? revenue/units : 0;
  const delivered = rows.filter(d=>d.status==='Delivered').length;

  document.getElementById('kpi-revenue').textContent = fmtBRL(revenue);
  document.getElementById('kpi-revenue-sub').innerHTML = `<b>${delivered}</b> entregues no recorte`;
  document.getElementById('kpi-units').innerHTML = `${units}<span class="unit">un.</span>`;
  document.getElementById('kpi-units-sub').innerHTML = units ? `<b>${new Set(rows.map(d=>d.city)).size}</b> cidades atendidas` : 'sem resultados';
  document.getElementById('kpi-avg').textContent = fmtBRL(avg);
  const maxRow = rows.reduce((m,d)=> (!m || d.price>m.price) ? d : m, null);
  document.getElementById('kpi-avg-sub').innerHTML = maxRow ? `Maior venda: <b>${fmtBRL(maxRow.price)}</b>` : '—';
}

/* ---- Gauge (tachometer-style, signature element) ---- */
function renderGauge(rows){
  const svg = document.getElementById('gauge-svg');
  const counts = {};
  rows.forEach(d => counts[d.modelYear] = (counts[d.modelYear]||0)+1);
  const entries = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
  const [topYear, topCount] = entries[0] || [null, 0];
  const total = rows.length || 1;
  const frac = entries.length ? topCount/total : 0;

  const cx=50, cy=54, r=40;
  const startAngle = 145, sweep = 250;
  const toRad = (deg) => (deg * Math.PI/180);
  function pointOnArc(fracVal){
    const ang = startAngle + sweep*fracVal;
    const rad = toRad(ang);
    return [cx + r*Math.cos(rad), cy + r*Math.sin(rad)];
  }
  let ticks = '';
  for(let i=0;i<=10;i++){
    const f = i/10;
    const ang = toRad(startAngle + sweep*f);
    const inner = r-6, outer = r;
    const x1 = cx + inner*Math.cos(ang), y1 = cy + inner*Math.sin(ang);
    const x2 = cx + outer*Math.cos(ang), y2 = cy + outer*Math.sin(ang);
    const color = f > 0.78 ? '#E63FAF' : 'rgba(180,150,220,0.35)';
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`;
  }
  const [sx,sy] = pointOnArc(0);
  const [ex,ey] = pointOnArc(1);
  const largeArc = sweep > 180 ? 1 : 0;
  const trackPath = `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
  const [fx,fy] = pointOnArc(Math.min(frac,1));
  const fillPath = `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 ${frac>0.5?1:0} 1 ${fx.toFixed(2)} ${fy.toFixed(2)}`;

  const needleAng = toRad(startAngle + sweep*Math.min(frac,1));
  const nx = cx + (r-10)*Math.cos(needleAng), ny = cy + (r-10)*Math.sin(needleAng);

  svg.innerHTML = `
    <defs>
      <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#E63FAF"/>
      </linearGradient>
    </defs>
    <path d="${trackPath}" fill="none" stroke="rgba(180,150,220,0.14)" stroke-width="6" stroke-linecap="round"/>
    ${ticks}
    <path d="${fillPath}" fill="none" stroke="url(#gaugeGrad)" stroke-width="6" stroke-linecap="round"/>
    <line x1="${cx}" y1="${cy}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="#F4EEF9" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="3.4" fill="#E63FAF" stroke="#F4EEF9" stroke-width="1"/>
  `;

  document.getElementById('gauge-year').textContent = topYear || '—';
  document.getElementById('gauge-count').innerHTML = topYear ? `<b>${topCount}</b> unidades (${Math.round(frac*100)}% do recorte)` : 'sem resultados';
}

/* ---- Chart 1: ALL cities colored by champion model family (shares ranking with insights 02) ---- */
function renderCityChart(rows){
  const scrollWrap = document.querySelector('.chart-scroll');
  const holder = document.getElementById('city-chart-holder');
  if(!rows.length){
    holder.innerHTML = '<div class="empty-state">◇<br>Nenhuma venda para este recorte de filtros</div>';
    if(cityChart){ cityChart.destroy(); cityChart=null; }
    return;
  }
  if(!document.getElementById('chart-city')){
    holder.innerHTML = '<canvas id="chart-city"></canvas>';
  }

  const ranking = getCityRanking(rows);

  document.getElementById('city-chart-sub').textContent =
    `Todas as ${ranking.length} cidade(s) do recorte, coloridas pela família de modelo mais vendida em cada uma — role para ver mais`;

  const labels = ranking.map(c => c.city);
  const values = ranking.map(c => c.total);
  const champFamily = ranking.map(c => c.champFamily);
  const champModel = ranking.map(c => c.champModel);
  const colors = champFamily.map(f => familyColorMap[f] || '#7C3AED');

  const barHeight = 26;
  holder.style.height = Math.max(ranking.length * barHeight, 300) + 'px';
  scrollWrap.scrollTop = 0;

  const ctx = document.getElementById('chart-city').getContext('2d');
  if(cityChart) cityChart.destroy();
  cityChart = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{
      label:'Unidades vendidas', data: values, backgroundColor: colors, borderRadius:6, maxBarThickness:18,
    }]},
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'#1D1529', borderColor:'rgba(180,150,220,0.28)', borderWidth:1, padding:10,
          titleFont:{family:'Manrope', weight:700}, bodyFont:{family:'JetBrains Mono', size:11.5},
          callbacks:{ afterLabel: (ctx) => `Modelo campeão: ${champModel[ctx.dataIndex]} (${champFamily[ctx.dataIndex]})` }
        }
      },
      scales:{
        x:{ grid:{color:'rgba(180,150,220,0.10)'}, ticks:{color:'#B7A9C9', font:{family:'JetBrains Mono', size:10.5}, precision:0}, beginAtZero:true },
        y:{ grid:{display:false}, ticks:{color:'#F4EEF9', font:{family:'Manrope', weight:700, size:11.5} } }
      }
    }
  });
}

/* ---- Chart 2: Model Year distribution ---- */
function renderYearChart(rows){
  const holder = document.getElementById('chart-year').parentElement;
  if(!rows.length){
    holder.innerHTML = '<div class="empty-state">◇<br>Nenhuma venda para este recorte de filtros</div>';
    if(yearChart){ yearChart.destroy(); yearChart=null; }
    return;
  }
  if(!document.getElementById('chart-year')){
    holder.innerHTML = '<canvas id="chart-year"></canvas>';
  }
  const counts = {};
  rows.forEach(d => counts[d.modelYear] = (counts[d.modelYear]||0)+1);
  const labels = Object.keys(counts).sort((a,b)=>a-b);
  const values = labels.map(y=>counts[y]);
  const maxVal = Math.max(...values);

  const ctx = document.getElementById('chart-year').getContext('2d');
  if(yearChart) yearChart.destroy();
  yearChart = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{
      label:'Unidades', data: values,
      backgroundColor: values.map(v => v===maxVal ? '#E63FAF' : 'rgba(124,58,237,0.55)'),
      borderRadius:6, maxBarThickness:38,
    }]},
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{ backgroundColor:'#1D1529', borderColor:'rgba(180,150,220,0.28)', borderWidth:1, padding:10, bodyFont:{family:'JetBrains Mono', size:11.5} } },
      scales:{
        x:{ grid:{display:false}, ticks:{color:'#B7A9C9', font:{family:'JetBrains Mono', size:11}} },
        y:{ grid:{color:'rgba(180,150,220,0.10)'}, ticks:{color:'#B7A9C9', font:{family:'JetBrains Mono', size:10.5}, precision:0}, beginAtZero:true }
      }
    }
  });
}

/* ---- Insights: champion model per city (uses the SAME ranking as chart 01, in harmony) ---- */
function renderInsights(rows){
  const grid = document.getElementById('insights-grid');
  grid.innerHTML = '';
  if(!rows.length){
    grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">◇<br>Nenhuma venda para gerar insights</div>';
    return;
  }
  const ranking = getCityRanking(rows);

  ranking.forEach(c => {
    const pct = Math.round((c.champCount / c.total) * 100);
    const color = familyColorMap[c.champFamily] || '#7C3AED';
    const div = document.createElement('div');
    div.className = 'insight-card';
    div.innerHTML = `
      <p class="city-name">
        <span class="city-label"><span class="family-dot" style="background:${color}; color:${color};"></span>${c.city}</span>
        <span class="trophy">🏆</span>
      </p>
      <p class="champion">${c.champModel}</p>
      <p class="champion-meta">${c.champCount} de ${c.total} vendas · ${pct}%</p>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:linear-gradient(90deg, var(--purple), ${color});"></div></div>
    `;
    grid.appendChild(div);
  });
}

/* ---- Table ---- */
function statusClass(status){
  if(status==='Delivered') return 'st-delivered';
  if(status==='Cancelled') return 'st-cancelled';
  if(status.includes('Pending')) return 'st-pending';
  if(status.includes('Transit') || status.includes('Awaiting') || status==='Shipped') return 'st-transit';
  return 'st-other';
}

function renderTable(rows){
  const sorted = [...rows].sort((a,b)=>{
    let va = a[sortKey], vb = b[sortKey];
    if(sortKey==='mileage'){ va = va ?? -1; vb = vb ?? -1; }
    if(typeof va === 'string') return va.localeCompare(vb) * sortDir;
    return (va - vb) * sortDir;
  });
  const tbody = document.getElementById('table-body');
  if(!sorted.length){
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:32px; color:var(--ink-faint); font-family:'JetBrains Mono',monospace;">Nenhum registro encontrado para este filtro</td></tr>`;
    return;
  }
  tbody.innerHTML = sorted.map(d => `
    <tr>
      <td>#${d.id}</td>
      <td>${d.date}</td>
      <td>${d.customer}</td>
      <td class="model-cell">${d.model}</td>
      <td>${d.modelYear}</td>
      <td class="price-cell">${fmtBRLfull(d.price)}</td>
      <td>${d.mileage!=null ? d.mileage.toLocaleString('pt-BR') : '—'}</td>
      <td>${d.payMethod}</td>
      <td>${d.city} / ${d.state}</td>
      <td><span class="status-pill ${statusClass(d.status)}">${d.status}</span></td>
    </tr>
  `).join('');
}

/* ---- Sorting ---- */
document.querySelectorAll('#sales-table thead th').forEach(th => {
  th.addEventListener('click', () => {
    const key = th.dataset.key;
    if(sortKey === key){ sortDir *= -1; } else { sortKey = key; sortDir = 1; }
    document.querySelectorAll('#sales-table thead th').forEach(t => t.querySelector('.arrow')?.remove());
    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = sortDir === 1 ? '▲' : '▼';
    th.appendChild(arrow);
    renderTable(getFiltered());
  });
});

/* ---- Filter events ---- */
['f-model','f-year','f-city','f-pay'].forEach(id => {
  document.getElementById(id).addEventListener('change', render);
});
document.getElementById('reset-btn').addEventListener('click', () => {
  ['f-model','f-year','f-city','f-pay'].forEach(id => document.getElementById(id).value = '');
  render();
});

/* ---- Init ---- */
render();