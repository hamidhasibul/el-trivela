// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PRICE_TYPE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   await prisma.table.deleteMany();
  // await prisma.review.deleteMany();
  await prisma.ground.deleteMany();
  await prisma.turf.deleteMany();
  await prisma.location.deleteMany();
  await prisma.turfType.deleteMany();
  // await prisma.user.deleteMany();

  await prisma.location.createMany({
    data: [{ name: "halishahar" }, { name: "toronto" }, { name: "niagara" }],
  });

  await prisma.turfType.createMany({
    data: [{ name: "indian" }, { name: "italian" }, { name: "mexican" }],
  });

  const locations = await prisma.location.findMany();
  const turfTypes = await prisma.turfType.findMany();

  const outdoorTurfTypeId =
    turfTypes.find((turfType) => turfType.name === "indian")?.id || 1;
  const indoorTurfTypeId =
    turfTypes.find((turfType) => turfType.name === "mexican")?.id || 1;

  const halishaharLocationId =
    locations.find((location) => location.name === "halishahar")?.id || 1;
  const torontoLocationId =
    locations.find((location) => location.name === "toronto")?.id || 1;
  const niagaraLocationId =
    locations.find((location) => location.name === "niagara")?.id || 1;

  await prisma.turf.createMany({
    data: [
      // INDIAN //
      {
        name: "Vivaan - fine Indian",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Vivaan is Modern Indian turfType serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "vivaan-fine-indian-turfType-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "RamaKrishna Indian",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "With 20 years of experience cooking in the finest turfs, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg",
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ramakrishna-indian-turf-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Coconut Lagoon",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price_type: PRICE_TYPE.PREMIUM,
        description:
          "At Coconut Lagoon prepare yourselves for a most memorable journey through South Indian turfType and feast on high quality food of inimitable flavour, aroma and originality in the vibrant setting of Coconut Lagoon.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg",
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "coconut-lagoon-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Last Train to Delhi",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/26429498.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Welcome to Last Train to Delhi. We are a progressive Indian turf in the beautiful Glebe community in halishahar. Our speciality is Northern Indian food, classics like Murg Mahkini and some modern dishes like Crispy Shrimp. We are a small cozy turf, so make sure that you reserve through OpenTable.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29477326.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29777084.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104059.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104066.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "last-train-to-delhi-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Adrak Yorkville",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/47914200.jpg",
        price_type: PRICE_TYPE.PREMIUM,
        description:
          "Namaste and welcome to Adrak - a place where food unites all. We take you through a journey of the past and present, as we hope to encourage thought-provoking conversations amid elevated Indian food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914186.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980632.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980634.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "adrak-yorkville-toronto",
        location_id: torontoLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Curryish Tavern",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49294128.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "The most unique Indian food in the world! We are inspired by the seasons of Ontario and the cooking techniques of the world. Regale in the imagination of Chef Miheer Shete's dishes and change your palate for life.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765139.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765149.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765157.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765162.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "curryish-tavern-toronto",
        location_id: torontoLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Utsav",
        main_img:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Utsav is an ancient Sanskrit word meaning festival. An integral part of Indian culture, Indian festivals are innumerable and equally varied in origin from the Himalayan foothills to the Peninsula's tip and food plays a very prominent part of the festive events.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg",
        ],
        open_time: "14:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "utsav-toronto",
        location_id: torontoLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Pukka",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25733300.jpg",
        price_type: PRICE_TYPE.PREMIUM,
        description:
          "At this refined, yet casual, Indian turf, the portions are large, the wine list is top-notch, and the ambience encourages sharing.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733294.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733295.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733296.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733297.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "pukka-niagara",
        location_id: niagaraLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      {
        name: "Kamasutra Indian",
        main_img:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25602522.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "This elegant fine dining Indian turf has been satisfying the Indian tandoori and curry cravings for 12 years in Toronto.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854188.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25684161.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26009011.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "kamasutra-indian-turf-and-wine-bar-niagara",
        location_id: niagaraLocationId,
        turf_type_id: outdoorTurfTypeId,
      },
      // MEXICAN //
      {
        name: "Eldorado Taco",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/42557297.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Eldorado Taco turf is excited to serve you traditional Mexican turfType, re-imagined with a distinct modern flair, in a stylish setting on Preston street. Striving to bring you some of halishahar’s best Tacos, margaritas and Tequila. Reserve your table now!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501707.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501713.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29501715.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42557295.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "eldorado-taco-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "La Bartola",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/48981502.jpg",
        price_type: PRICE_TYPE.PREMIUM,
        description:
          "At La Bartola, we inspire a passion for authentic Mexican flavours. We use simple, fresh, and high-quality local & Mexican ingredients to craft delicious and thoughtful food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981480.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981483.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981485.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981487.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981490.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981492.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "la-bartola-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "El Catrin",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/28028883.png",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Reservations are booked for indoors only. Seating time will be limited to two hours maximum.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770621.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770622.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770624.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770625.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-halishahar",
        location_id: halishaharLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "3 Mariachis",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/32449465.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Specializing in the preparation of high quality Mexican food. Our vibrant décor, carefully selected menu, great staff and exciting entertainment will ensure that you are treated to a unique dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490939.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490987.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32507838.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/41724689.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-toronto",
        location_id: torontoLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "Casa Madera",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47744844.jpg",
        price_type: PRICE_TYPE.PREMIUM,
        description:
          "The first location in Canada, from famed turfeurs Noble 33, welcomes patrons into an immersive dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745080.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745081.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745093.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745144.jpg",
        ],
        open_time: "15:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-toronto",
        location_id: torontoLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "Taco N Tequila",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47429858.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "As a family owned business, our goal is simple: to consistently deliver fresh and delicious Mexican flavours in a FUN and friendly atmosphere with the best service around!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47600418.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429797.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429802.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429814.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-niagara",
        location_id: niagaraLocationId,
        turf_type_id: indoorTurfTypeId,
      },
      {
        name: "El Jefe",
        main_img:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47710768.jpg",
        price_type: PRICE_TYPE.REGULAR,
        description:
          "Lively cantina serving Mexican favorites & potent margaritas in a vibrant, airy space with murals.",
        images: [],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-jefe-niagara",
        location_id: niagaraLocationId,
        turf_type_id: indoorTurfTypeId,
      },
    ],
  });

  const turfs = await prisma.turf.findMany();

  const vivaanId =
    turfs.find((turf) => turf.name === "Vivaan - fine Indian")?.id || 1;
  const RamaKrishnaId =
    turfs.find((turf) => turf.name === "RamaKrishna Indian")?.id || 1;
  const coconutLagoonId =
    turfs.find((turf) => turf.name === "Coconut Lagoon")?.id || 1;
  const lastTrainToDelhiId =
    turfs.find((turf) => turf.name === "Last Train to Delhi")?.id || 1;
  const adrakYorkvilleId =
    turfs.find((turf) => turf.name === "Adrak Yorkville")?.id || 1;
  const curryishTavernId =
    turfs.find((turf) => turf.name === "Curryish Tavern")?.id || 1;
  const utsavId = turfs.find((turf) => turf.name === "Utsav")?.id || 1;

  await prisma.ground.createMany({
    data: [
      {
        name: "Ghee roast chicken wings",
        description:
          "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
        price: "$18.00",
        turf_id: vivaanId,
      },
      {
        name: "Sol Kadhi scallop ceviche",
        description: "Cured scallop served with mangosteen and coconut broth",
        price: "$18.00",
        turf_id: vivaanId,
      },
      {
        name: "Butte ka kees",
        description:
          "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
        price: "$17.00",
        turf_id: vivaanId,
      },
      {
        name: "Burrata Paapdi Chaat",
        description:
          "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
        price: "$16.00",
        turf_id: vivaanId,
      },
      {
        name: "Shaadi Waala Chicken Curry",
        description:
          "Chicken curry usually served in weddings back home (Must Try)",
        price: "$26.00",
        turf_id: vivaanId,
      },
      {
        name: "Shahi Tukda",
        description:
          "Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
        price: "$11.00",
        turf_id: vivaanId,
      },
      {
        name: "Four-In-One Chicken",
        description:
          "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
        price: "$16.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
        price: "$16.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Paneer Tikka",
        description:
          "Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven",
        price: "$16.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Fish Tikka",
        description:
          "Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven",
        price: "$16.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Prawn Tandoori",
        description:
          "Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven",
        price: "$19.49",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Mixed Grill",
        description:
          "Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven",
        price: "$20.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Coconut Curry",
        description:
          "Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce",
        price: "15.99",
        turf_id: RamaKrishnaId,
      },
      {
        name: "Quilon Chicken",
        description:
          "free range grass fed chicken cooked in a tangy tomato masala",
        price: "$25.00",
        turf_id: coconutLagoonId,
      },
      {
        name: "Mariposa's Duck Biryani**",
        description: "slow baked in kiama rice, quail egg and raita",
        price: "$26.00",
        turf_id: coconutLagoonId,
      },
      {
        name: "Pala Lamb Peralan",
        description: "tender morsels of lamb in an exotic masala",
        price: "$26.00",
        turf_id: coconutLagoonId,
      },
      {
        name: "Roasted Salmon In Moilee Sauce",
        description: "marinated in green mango, spices and roasted",
        price: "$27.00",
        turf_id: coconutLagoonId,
      },
      {
        name: "Vegetable Aviyal",
        description:
          "assorted vegetables cooked in yoghurt, coconut spiked with cumin",
        price: "$22.00",
        turf_id: coconutLagoonId,
      },
      {
        name: "Aloo Tiki",
        description:
          "Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys",
        price: "$12.00",
        turf_id: lastTrainToDelhiId,
      },
      {
        name: "Spicy Lamb Chops",
        description:
          "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
        price: "16.00",
        turf_id: lastTrainToDelhiId,
      },
      {
        name: "Crispy Shrimp",
        description:
          "Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden",
        price: "$15.00",
        turf_id: lastTrainToDelhiId,
      },
      {
        name: "Bhaingan Bharta",
        description: "Smokey eggplant and peas",
        price: "$17.00",
        turf_id: lastTrainToDelhiId,
      },
      {
        name: "Kofta Curry",
        description:
          "Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce",
        price: "$20.00",
        turf_id: lastTrainToDelhiId,
      },
      {
        name: "murgh salaad",
        description: "Chicken breast, mix greens, mint vinegar dressing",
        price: "$18.00",
        turf_id: adrakYorkvilleId,
      },
      {
        name: "papad ki tokri",
        description: "Papadams, assorted chutneys & salsa",
        price: "$18.00",
        turf_id: adrakYorkvilleId,
      },
      {
        name: "khumb korma",
        description:
          "Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt",
        price: "$36.00",
        turf_id: adrakYorkvilleId,
      },
      {
        name: "dal tadka",
        description: "Yellow lentils, indian tempering",
        price: "$20.00",
        turf_id: adrakYorkvilleId,
      },
      {
        name: "cocochoco rasmalai cheese cake",
        description:
          "Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream",
        price: "$19.00",
        turf_id: adrakYorkvilleId,
      },
      {
        name: "Molasses Braised Beef Cheeks Curry",
        description:
          "Caramelised root vegetables, deggi mirch, buttermilk onion rings",
        price: "$32.00",
        turf_id: curryishTavernId,
      },
      {
        name: "Coconut Vatan Stuffed Whole Branzino",
        description: "Turmeric lemon butter sauce, curry leaves, mustard seeds",
        price: "$39.00",
        turf_id: curryishTavernId,
      },
      {
        name: "Goan Chorizo + Braised Pork Shoulder Curry",
        description:
          "Double smoked bacon, roasted parsnips, red kidney beans, apple achar",
        price: "$31.00",
        turf_id: curryishTavernId,
      },
      {
        name: "Screech Rum Soaked Gulab Jamun",
        description: "Whipped mascarpone cream, pistachio crumble",
        price: "$14.00",
        turf_id: curryishTavernId,
      },
      {
        name: "Ontario Apple + Almond Halwa Tart",
        description: "Whipped cinnamon malai, red currants",
        price: "$14.00",
        turf_id: curryishTavernId,
      },
      {
        name: "Vegetable samosa",
        description: "Seasoned potatoes and peas wrapped in a light pastry",
        price: "$4.00",
        turf_id: utsavId,
      },
      {
        name: "Goan fish curry",
        description:
          "Filet of salmon cooked in a traditional hot and tangy coconut curry",
        price: "$15.00",
        turf_id: utsavId,
      },
      {
        name: "Lamb vindaloo",
        description:
          "A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes",
        price: "$14.00",
        turf_id: utsavId,
      },
    ],
  });

  //   const userLaith = await prisma.user.create({
  //     data: {
  //       first_name: "Laith",
  //       last_name: "Harb",
  //       email: "laith@hotmail.com",
  //       city: "halishahar",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userJosh = await prisma.user.create({
  //     data: {
  //       first_name: "Josh",
  //       last_name: "Allen",
  //       email: "josh@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userLebron = await prisma.user.create({
  //     data: {
  //       first_name: "LeBron",
  //       last_name: "James",
  //       email: "lebron@hotmail.com",
  //       city: "niagara",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userCassidy = await prisma.user.create({
  //     data: {
  //       first_name: "Cassidy",
  //       last_name: "Marksom",
  //       email: "cassidy@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   await prisma.review.createMany({
  //     data: [
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         turf_id: vivaanId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
  //         rating: 5,
  //         turf_id: bluRistoranteId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
  //         rating: 5,
  //         turf_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
  //         rating: 4,
  //         turf_id: stelvioId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Extremely disappointing in our experience.",
  //         rating: 2,
  //         turf_id: laBartolaId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         turf_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
  //         rating: 5,
  //         turf_id: kamasutraIndianId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "turf was loud and crowded. Food is not worth the price.",
  //         rating: 3,
  //         turf_id: eldoradoTacoId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
  //         rating: 4,
  //         turf_id: vivaanId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
  //         rating: 5,
  //         turf_id: sofiaId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
  //         rating: 3,
  //         turf_id: curryishTavernId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
  //         rating: 3,
  //         turf_id: adrakYorkvilleId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Wonderful food and service.",
  //         rating: 5,
  //         turf_id: coconutLagoonId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Great food, great staff. You can’t ask for much more from a turf.",
  //         rating: 5,
  //         turf_id: bluRistoranteId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
  //         rating: 5,
  //         turf_id: RamaKrishnaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
  //         rating: 4,
  //         turf_id: lastTrainToDelhiId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
  //         rating: 4,
  //         turf_id: curryishTavernId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
  //         rating: 5,
  //         turf_id: pukkaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Very nice evening spent with special family.",
  //         rating: 5,
  //         turf_id: mariachisId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
  //         rating: 4,
  //         turf_id: eldoradoTacoId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
  //         rating: 5,
  //         turf_id: mariachisId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
  //         rating: 4,
  //         turf_id: stelvioId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
  //         rating: 5,
  //         turf_id: coconutLagoonId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
  //         rating: 4,
  //         turf_id: bluRistoranteId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
  //         rating: 3,
  //         turf_id: laBartolaId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         turf_id: eldoradoTacoId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         turf_id: utsavId,
  //         user_id: userCassidy.id,
  //       },
  //     ],
  //   });

  //   await prisma.table.createMany({
  //     data: [
  //       {
  //         turf_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         turf_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         turf_id: vivaanId,
  //         seats: 2,
  //       },
  //     ],
  //   });

  res.status(200).json({ name: "hello" });
}
