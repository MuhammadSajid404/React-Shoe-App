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

export const AdidasShoesBrandLaunch = () => {
    const classes = useStyles()
  return (
    <div>
        <AppbarComp />
      {Object.entries(ShoeDetails).map(([slug, { name, imageurl, price }]) => (
          <Card key={slug} className={classes.root}>
            <Typography className={classes.price}>{price}</Typography>
            <CardActionArea>
            <Link to={`/adidas/${slug}`} style={{ textDecoration: 'none' }}>
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

export const ShoeDetails = {
    "NMD_R1 SHOES": {
        id: 18,
        name: "NMD_R1 SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$140",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/ad3348fcdb5f40a0b410a8ba00fc6427_9366/nmd_r1-shoes.jpg",
        slug: "NMD_R1 SHOES",
        description: "Run with it. These adidas NMD_R1 Shoes are a little technical and a lot street smart. Their midsole plugs flash back to the '80s, but the knit upper, full-length cushioned midsole and EVA inserts are 100 percent fashion forward. Regular fit. Lace closure. Knit upper. Stretchy, foot-hugging feel. Iconic street shoes."
    },
    "LITE RACER ADAPT 3.0 SHOES": {
        id: 16,
        name: "LITE RACER ADAPT 3.0 SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$65",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5c3f7a88fdf245a48a7eabb400f44178_9366/lite-racer-adapt-3.0-shoes.jpg",
        slug: "LITE RACER ADAPT 3.0 SHOES",
        description: "Inspired by the run. Reimagined to run the day. Sharp, simple and all about the slip-on. The mesh upper and snug, cushioned feel in these adidas running-inspired shoes keep you comfortably cool. All day, every day. No matter what the morning throws at you, adapt. Stay light and up for whatever. Slip-on construction with laces. Mesh upper. Snug, cushioned feel. Running-inspired slip-on mesh shoe."
    },
    "ULTRA 4D 5.0 SHOES": {
        id: 17,
        name: "ULTRA 4D 5.0 SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$200",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/e4e20051c6cb45b19b7eac7800a9e347_9366/ultra-4d-5.0-shoes.jpg",
        slug: "ULTRA 4D 5.0 SHOES",
        description: "When the adidas Ultraboost debuted back in 2015, it had an impact that spilled beyond the world of running. For this version of the shoes, we retooled the design on a 3D-printed midsole. The denser parts of the lattice provide more support, and the parts that are open feel more cushioned. These shoes don't just look like the future. They feel like it, too. Regular fit. Lace closure. Textile upper. adidas 4D midsole. Continental™ Rubber outsole."
    },
    "ULTRABOOST DNA PYTHON SHOES": {
        id: 19,
        name: "ULTRABOOST DNA PYTHON SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$180",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5f730daaaf034f9fafbfabdf0127f39a_9366/ultraboost-dna-python-shoes.jpg",
        slug: "ULTRABOOST DNA PYTHON SHOES",
        description: "In Zulu culture, pythons are a symbol of great power, and their skins are often worn by traditional healers. Channel the strength of the great snake in these adidas Ultraboost DNA Python Shoes. The stretchy knit upper features python-inspired details. Energy-returning cushioning keeps you comfortable on the move. Sock-like fit. Snug, sock-like fit. Lace closure. adidas Primeknit textile upper. Stabilizing Torsion System."
    },
    "ULTRABOOST 1.0 DNA SHOES": {
        id: 20,
        name: "ULTRABOOST 1.0 DNA SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$180",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f56e19c9185b4ef38ee9ac280077b7ef_9366/ultraboost-1.0-dna-shoes.jpg",
        slug: "ULTRABOOST 1.0 DNA SHOES",
        description: "The race to end plastic waste is a long one. But these Ultraboost shoes belong somewhere near the starting line. For this version, we add some shine with reflective details on the toe. The adidas Primeknit upper has the same weave featured on the original design dropped back in 2015. Boost provides incredible energy return, whether you wear them while running or as an everyday pair. Sock, snug-like fit. Lace closure. adidas Primeknit textile upper. Textile lining. Boost midsole."
    },
    "KANSAS JAYHAWKS ULTRABOOST 1.0": {
        id: 23,
        name: "KANSAS JAYHAWKS ULTRABOOST 1.0",
        brand: "Adidas",
        gender: "Male",
        price: "$144",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1e5f3ded4bae463d9922abf60189e99e_9366/kansas-jayhawks-ultraboost-1.0-dna-shoes.jpg",
        slug: "KANSAS JAYHAWKS ULTRABOOST 1.0",
        description: "Chase your personal best in running shoes made for top performance. The textile adidas Primeknit upper hugs the foot and supports natural movement. Responsive cushioning fuels every step. Bring grit and glory into each stride by repping your KU basketball gear. Snug, sock-like fit. adidas Primeknit textile upper. Interchangeable tongue patches. High-performance running shoes."
    },
    "DAME 7 CHRISTMAS SHOES": {
        id: 24,
        name: "DAME 7 CHRISTMAS SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$110",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/161326a2d16b40f58255ac640180463a_9366/dame-7-christmas-shoes.jpg",
        slug: "DAME 7 CHRISTMAS SHOES",
        description: "No one in the game today sees the court quite like Damian Lillard does. These Dame 7 shoes from adidas Basketball embody every part of his game to ensure he becomes the closer each night he laces them up. They're styled with a graphic textile upper and equipped with an ultralight midsole, so it's no wonder Lillard wants the ball when the clock ticks down. That's why it's called Dame Time. Regular fit. Lace closure. Lightstrike cushioning."
    },
    "ULTRABOOST LTD SHOES": {
        id: 21,
        name: "ULTRABOOST LTD SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$180",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1700b7b6202d4fd2aa21ac2f00b2022b_9366/ultraboost-ltd-shoes.jpg",
        slug: "ULTRABOOST LTD SHOES",
        description: "Every run is a chance to check in and build. These adidas running shoes are the tool you need to unlock your best self. The knit upper features wool yarn for added warmth on cold days. Get back what you put in with responsive cushioning that brings energy return in each step. Embrace the journey. Regular fit. Lace closure. Knit wool-blend upper. Running shoes designed for warmth. Responsive Boost midsole."
    },
    "ULTRABOOST DNA PRIME SHOES": {
        id: 22,
        name: "ULTRABOOST DNA PRIME SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$140",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/eb8694e60adb41b3a822ab5601074785_9366/ultraboost-dna-prime-shoes.jpg",
        slug: "ULTRABOOST DNA PRIME SHOES",
        description: "Created to break world marathon records, the Adizero Prime became the first adidas shoe made with adidas Primeknit. Inspired by that trailblazing model, these adidas Ultraboost DNA Prime Shoes have a stretchy knit upper that riffs on the original. Responsive cushioning combined with a flexible rubber outsole gives them the legendary Ultraboost feel. So you can get out there and set some records of your own. Regular fit. Lace closure. adidas Primeknit textile upper. Runners with heel-to-toe support. Responsive Boost midsole."
    },
    "NMD_R1 TRAIL SHOES": {
        id: 25,
        name: "NMD_R1 TRAIL SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$150",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/b36980da5cc94cd5bd5cac4400d8db20_9366/nmd_r1-trail-shoes.jpg",
        slug: "NMD_R1 TRAIL SHOES",
        description: "Don't let anyone tell you that the outdoors is wilder than the city. The city is a whole different kind of beast, and these adidas NMD_R1 Trail Shoes take their cues from the backcountry so you can explore the streets in comfort. A water-repellent knit upper makes sure you stay as dry as can be when things start coming down, or when a car inevitably hits that puddle you happen to be walking right by. (Of course.) The Continental™ Rubber outsole helps you stand tall, or at least upright thanks to its superior grip. Lace closure. Water-repellent knit upper. TPU mudguard. Boost midsole."
    },
    "SUPERSTAR SHOES": {
        id: 27,
        name: "SUPERSTAR SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$90",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/3c174a406ba14e178fa2ac4600056888_9366/superstar-shoes.jpg",
        slug: "SUPERSTAR SHOES",
        description: "The stuff of legends. Yes, that's legends, plural. Because the adidas Superstar shoes can't be attached to just one story, or one person, or one place. We're talking 50 years here. There's their beginning on the hardwood. The moments on hip-hop stages after, which flooded into the crowds, then onto the streets. Then there's what you're doing in them. That's all you. The details that make them unmistakable are all there, from the rubber shell toe to 3-Stripes. Lace closure. Coated leather upper. Molded sockliner. Rubber outsole."
    },
    "ZX 2K BOOST SHOES": {
        id: 28,
        name: "ZX 2K BOOST SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$140",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/a6c1d070b729432c9e2cac4800168f8e_9366/zx-2k-boost-shoes.jpg",
        slug: "ZX 2K BOOST SHOES",
        description: "ZX takes an icon to a new dimension of comfy. Innovated for the ultimate squish with new wrapped BOOST, ZX never felt so good. A springy Boost midsole swaddled in a wrap-around gradient. A progressive look and technical design, brimming with Boost. Feels too good to be explained. Lace closure. Mesh and TPU upper. Responsive shoes. Distinctive Boost midsole."
    },
    "LITE RACER ADAPT 3.0 WIDE SHOES": {
        id: 29,
        name: "LITE RACER ADAPT 3.0 WIDE SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$65",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/bb41e491c07c4ae4bdddabd1010f8b04_9366/lite-racer-adapt-3.0-wide-shoes.jpg",
        slug: "LITE RACER ADAPT 3.0 WIDE SHOES",
        description: "Live life your way in these everyday adidas shoes. Cut wide for maximum comfort, this pair keeps you feeling good through every step of your day with a cushioned midsole and a snug feel. The running-inspired design insures that no matter what's on your agenda, you're supported. Lace closure. Textile upper. Clean, versatile sneakers. Cushioned Cloudfoam midsole."
    },
    "POWERLIFT 4 SHOES": {
        id: 30,
        name: "POWERLIFT 4 SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$90",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/96353ba38b86441789feab97012f29d7_9366/powerlift-4-shoes.jpg",
        slug: "POWERLIFT 4 SHOES",
        description: "Take your weight training sessions to new heights. Made for stability, these weightlifting shoes have a narrow fit, a midsole wedge and a wide instep strap for complete lockdown. A rubber outsole keeps you firmly planted when lifting. The lightweight upper is made from durable canvas. Narrow, snug fit. Lace closure with a hook-and-loop strap. Canvas upper. Open forefoot and flexible toe design. Lightweight, locked-down feel."
    },
    "ALPHAEDGE 4D SHOES": {
        id: 31,
        name: "ALPHAEDGE 4D SHOES",
        brand: "Adidas",
        gender: "Male",
        price: "$121",
        imageurl: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/7c50a3d3d8fa4824b29fab6000bfc87f_9366/ultraboost-20-shoes.jpg",
        slug: "ALPHAEDGE 4D SHOES",
        description: "Take your weight training sessions to new heights. Made for stability, these weightlifting shoes have a narrow fit, a midsole wedge and a wide instep strap for complete lockdown. A rubber outsole keeps you firmly planted when lifting. The lightweight upper is made from durable canvas. Narrow, snug fit. Lace closure with a hook-and-loop strap. Canvas upper. Open forefoot and flexible toe design. Lightweight, locked-down feel."
    }
}