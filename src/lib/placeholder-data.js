const users = [
  {
    id: "4be52ea1-d9af-4bf1-a56f-1feb442294f6",
    name: "Bastien",
    email: "bshury0@prweb.com",
    password: "mK5%Dl|`/aSEv3o",
  },
  {
    id: "feca7d21-7620-4506-95c0-254bd6f6ab31",
    name: "Evie",
    email: "egibbens1@bizjournals.com",
    password: "dR3\\|!,_Gq%1F`{E",
  },
  {
    id: "b9e434cf-eb2b-4a43-9a46-7cda4f3ed7ab",
    name: "Domenico",
    email: "dwhithorn2@people.com.cn",
    password: "kE2}Vu>a)nFTJ",
  },
  {
    id: "776737dc-7482-48d8-8b85-0bd3a96a3ffd",
    name: "Donavon",
    email: "dsandilands3@google.com.hk",
    password: "cB8{_PNh%U|",
  },
  {
    id: "18cf1b48-a5ed-475d-a936-94b7f7415bf2",
    name: "Glen",
    email: "ghector4@comsenz.com",
    password: 'eG0"p`aY~$EHq',
  },
  {
    id: "aaa06c0f-0e63-4c9c-8974-197d0bc2d074",
    name: "Berton",
    email: "bgaskarth5@europa.eu",
    password: "qU4,MS`XZ",
  },
  {
    id: "30ebdd4e-65a7-4abc-b393-5df581bf665b",
    name: "Evered",
    email: "egrinaugh6@shinystat.com",
    password: "xS4+5da$Ex_mW",
  },
  {
    id: "368febdc-70b6-49af-b736-127bd83ba582",
    name: "Yettie",
    email: "yboast7@gov.uk",
    password: "uU2/1Bkm",
  },
  {
    id: "675df710-6007-4e7e-b782-10718c53aef7",
    name: "Darsie",
    email: "dingleson8@bing.com",
    password: "nV7!zsX&$`\\a",
  },
  {
    id: "999fcd28-fb9e-42b0-830f-41029ec6782c",
    name: "Alfonso",
    email: "amaclice9@sciencedaily.com",
    password: "gC5*Ysgy',t",
  },
];

const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-18",
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2023-10-04",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
