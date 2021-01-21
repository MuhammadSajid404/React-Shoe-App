import { Link } from 'react-router-dom'
import React from 'react'
import { Card, CardActionArea, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { AppbarComp } from '../../Appbar/AppbarComp'

const useStyles = makeStyles({
  root: {
    maxWidth: 395,
    margin:  '20px',
    textAlign: 'center',
    float: 'left'
  },
  price: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '-30px',
    width: '100px',
    backgroundColor: '#212121',
    color: '#fafafa',
    borderRadius: '50%',
  }, 
  name: {
    color: '#212121',
  }
})

export const JordanShoesBrandLaunch = () => {
  const classes = useStyles()
  return (
    <div>
      <AppbarComp />
      {Object.entries(ShoesDetails).map(([slug, { name, imageurl, price }]) => (
          <Card key={slug} className={classes.root}>
            <Typography className={classes.price}>{price}</Typography>
            <CardActionArea>
            <Link to={`/jordan/${slug}`} style={{ textDecoration: 'none' }}>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={imageurl}
              title="Contemplative Reptile"
            />
            <Typography gutterBottom variant="h6" component="h2" className={classes.name}>
              {name}
            </Typography>
            </Link>
            </CardActionArea>
          </Card>
        ))}
    </div>
  )
}

export const ShoesDetails = {
  "Air Jordan - Men - Air Jordan 6 Retro 'Infrared 2019'": {
    id: 43,
    name: "Air Jordan - Men - Air Jordan 6 Retro 'Infrared 2019'",
    brand: "Jordan",
    gender: "Male",
    price: "$1170",
    imageurl: "https://i5.walmartimages.com/asr/c9472d5d-5272-4f95-bfe4-66e6589c1fab_1.81d0d6fa3fc2f9ff51daae61c5a2c895.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    slug: "Air Jordan - Men - Air Jordan 6 Retro 'Infrared 2019'",
    description: "Air Jordan - Men - Air Jordan 6 Retro 'Infrared 2019' - 384664-060 - Black, Infrared 23-Black - Size - 9 - Basketball - Shoes."
},
"Jordan React Elevation": {
    id: 44,
    name: "Jordan React Elevation",
    brand: "Jordan",
    gender: "Male",
    price: "$104",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dbd508f-69bc-414e-8649-4564b9ed7875/jordan-react-elevation-basketball-shoe-3MNcdW.jpg",
    slug: "Jordan React Elevation",
    description: "Play with flair, but focus on the fundamentals. The Jordan React Elevation is inspired by team players who beat opponents with their grit and tenacity at both ends of the court. Light and durable, it offers a secure, supportive fit. An underfoot combination of responsive cushioning and herringbone traction helps keep you on your game during clutch moments. Colour Shown: Black/Wolf Grey/University Red Style: CK6618-006."
},
"Jordan 'Why Not?' Zer0.4 'Upbringing'": {
    id: 45,
    name: "Jordan 'Why Not?' Zer0.4 'Upbringing'",
    brand: "Jordan",
    gender: "Male",
    price: "$124",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6b1247a-369c-4273-ab30-73fcec9a93da/jordan-why-not-zer04-upbringing-basketball-shoe-f9wP5k.jpg",
    slug: "Jordan 'Why Not?' Zer0.4 'Upbringing'",
    description: "Our youth is often referred to as the foundation of our personality, principles and dreams. Growing up in LA, the city became the bedrock for Russ' life today. From playing little league American football at his local park to hooping in middle school, high school and college, the city of Los Angeles has always been Russ' home court. Inspired by Russ' youth in Los Angeles, the Jordan 'Why Not?' Zer0.4 'Upbringing' honours the moments, places and teams that helped shape who he became as an athlete and individual. Double-Stacked Attack 2 stacked Air Zoom units in the forefoot deliver the ultimate responsiveness and cushioning. They help optimise the energy return you get out of every step. Locked-In Lacing The laces combine with strips of webbing in the heel and forefoot. When you tighten the laces, the material engages to help you stay harnessed over the cushioning. Fast-Action Traction The durable rubber outsole has a new, data-informed tread pattern. It helps keep you low to the ground and ready to react to the game's changing tempo."
},

"Air Jordan V Low": {
  id: 54,
  name: "Air Jordan V Low",
  brand: "Jordan",
  gender: "Male",
  price: "$169",
  imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3d859f6-5249-4bd8-ae54-6f5b4ea15999/air-jordan-v-low-golf-shoe-vQxv2c.jpg",
  slug: "Air Jordan V Low",
  description: "The Air Jordan V Low brings the translucent outsole and legendary design lines of the original Jordan 5 to the course. You'll get the same iconic style that debuted on the feet of a hoops legend, with golf-specific stability and traction. Product Details Jumpman logo on the heel and tongue Iconic netting on the lateral and medial upper Lace locks nod to the original Not intended for use as Personal Protective Equipment (PPE) Colour Shown: Black/Metallic Silver/White/Fire Red Style: CU4523-003."
},
"Jordan One Take II": {
    id: 46,
    name: "Jordan One Take II",
    brand: "Jordan",
    gender: "Male",
    price: "$150",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e51afba-053a-49ae-bfff-761f0a09ae27/jordan-one-take-ii-basketball-shoe-rHXwwQ.jpg",
    slug: "Jordan One Take II",
    description: "Russell Westbrook backs up his brashness with a fast, aggressive playing style and numbers that place him among the league's best. His all-new Jordan One Take II embodies his edginess and speed. Colours, textures and design lines speak to Russ' persona both on and off the court. Product Details Lightweight, mixed-material upper Breathable mesh tongue Padded collar Exterior plastic shank Colour-shifting tongue logo Heel pull made from lace material Colour Shown: White/Black/Wolf Grey/Black Style: CW2457-100."
},
"Jordan Zoom '92": {
    id: 47,
    name: "Jordan Flight 45 High IPJordan Zoom '92",
    brand: "Jordan",
    gender: "Male",
    price: "$129",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb3b34dc-0735-4359-8d3f-0678a5760cb7/jordan-zoom-92-shoe-TQSxWl.jpg",
    slug: "Jordan Zoom '92", 
    description: "INSPIRED BY HERITAGE, DEDICATED TO COMFORT. A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort, while tapping into the irreverent spirit of that era's designs. A stretchy-fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavour. Product Details Lightweight closed-mesh material with structured overlays Rubberised eyestays 'Nike Air' and the Jumpman design moulded on outsole Moulded Jumpman design on tongue Colour Shown: Smoke Grey/Gym Red/White/Black Style: CK9183-006."
},
"Jordan Delta Breathe": {
    id: 48,
    name: "Jordan Delta Breathe",
    brand: "Jordan",
    gender: "Male",
    price: "$124",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b54eef6b-6dd5-4c07-9b09-901ab9d7b01a/jordan-delta-breathe-shoe-rLfwZh.jpg",
    slug: "Jordan Delta Breathe",
    description: "EVERYDAY COMFORT AND FEARLESS ATTITUDE. Inspired by high-tech functionality and handmade craftsmanship, the Jordan Delta Breathe combines natural and synthetic materials. The result is a lifestyle shoe that's lightweight, breathable and comfortable all day. The layered mix of diverse elements creates a distinctive look and feel with subtle nods to Jordan DNA. Nike React foam offers responsive cushioning on the move. More Benefits Webbing pull tabs are offset and designed to stay open, so they're easier to use when putting on your shoes. A padded collar with internal nodes provides comfort and support around your Achilles tendon. A moulded groove in the forefoot helps the shoe flex. Colour Shown: Clear/Light Bone/Varsity Red/Medium Grey Style: CW0783-901."
},
"Jordan AJ XXXV": {
    id: 49,
    name: "Jordan AJ XXXV",
    brand: "Jordan",
    gender: "Male",
    price: "$180",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0777cf6-40b9-4a40-b8ab-5864a6e06447/air-jordan-xxxv-basketball-shoe-vKMDjw.jpg",
    slug: "Jordan AJ XXXV",
    description: "Take your game to legendary heights with the signature Jordan AJ XXXV. These kicks feature the game-changing Eclipse Plate, modified to extend higher into the midsole, to improve stability and lateral support. The top tongue design, molded foam pods in the collar, and Kurim detailing pay tribute to the Air Jordan V but are modified to suit today’s playing style. Exposed Zoom Air units ensure greater responsiveness during movement. Herringbone pattern on the sole offers superior grip and traction."
},
"Jordan Max Aura 2": {
    id: 50,
    name: "Jordan Jumpman Team 1Jordan Max Aura 2",
    brand: "Jordan",
    gender: "Male",
    price: "$140",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/332a20a1-fdba-4858-b21b-a77a8b830896/jordan-max-aura-2-shoe-df4XZl.jpg",
    slug: "Jordan Max Aura 2",
    description: "MADE FOR THE STREET. The Jordan Max Aura 2 is inspired by the brand's rich legacy of performance basketball shoes. The design takes cues from past Air Jordans with lightweight cushioning and a look that's money on the street. Product Details Rubber outsole Leather, synthetic leather and textile materials in upper Not intended for use as Personal Protective Equipment (PPE) Colour Shown: White/Black/Gym Red Style: CK6636-100."
},
"Volt Gold": {
    id: 51,
    name: "Volt Gold",
    brand: "Jordan",
    gender: "Male",
    price: "$131",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84fc4e69-30b8-4a06-9837-26ad18c2da9f/air-jordan-1-retro-high-og-shoe.jpg",
    slug: "Volt Gold",
    description: "This fresh take on the classic Air Jordan 1 draws design cues from previous AJ1 colourways that left a cultural mark. The tongue features exposed foam and a transparent, reversed tag for a deconstructed feel, while tri-tonal colourblocking in Volt, Sail and University Gold adds a burst of bright energy to the timeless silhouette."
},
"Air Jordan 1 Hi OG Fearless": {
    id: 52,
    name: "Air Jordan 1 Hi OG Fearless",
    brand: "Jordan",
    gender: "Male",
    price: "$139",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/wgxy4y8vyqolhvtekqmn/air-jordan-1-hi-og-fearless-shoe-qNnQMt.jpg",
    slug: "Air Jordan 1 Hi OG Fearless",
    description: "Celebrating 35 years of a sneaker icon, the Air Jordan 1 Hi OG Fearless channels MJ's passion and unapologetic attitude in this fresh take on the '85 model. Coated suede gives the shoe a shiny look to match the metallic Wings logo. More Benefits Rubber cupsole construction provides durable traction and support. Colour Shown: Black/Metallic Rose Gold/White/Black Style: CU6690-006."
},
"Air Jordan 1 Zoom Crater": {
    id: 53,
    name: "Air Jordan 1 Zoom Crater",
    brand: "Jordan",
    gender: "Male",
    price: "$154",
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/220d3232-37b3-4f1e-8ec6-d0094ac7dae2/air-jordan-1-high-zoom-shoe.jpg",
    slug: "Air Jordan 1 Zoom Crater",
    description: "The Jordan Crater pack represents the brand's unique take on circular design principles and the latest composite material construction. Named for the recycled Crater Foam found in each shoe's midsole, this collection bridges Jordan's brand heritage with a philosophy of sustainability, creating a new, raw aesthetic informed by the shoe's production method."
}
}