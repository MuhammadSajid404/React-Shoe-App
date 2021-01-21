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

export const NikeShoesBrandLaunch = () => {
  const classes = useStyles()
  return (
    <div style={{justify: 'center'}}>
        <AppbarComp />
        {Object.entries(ShoesDetails).map(([slug, { name, imageurl, price}]) => (
          <Card key={slug} className={classes.root}>
            <Typography className={classes.price}>{price}</Typography>
            <CardActionArea>
            <Link to={`/nike/${slug}`} style={{ textDecoration: 'none' }}>
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
  "Nike Air Force 1 '07": {
    id: 1,
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    gender: "Male",
    price: '$160',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-shoe-3nGnlt.jpg",
    slug: "Nike Air Force 1 '07",
    description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine."
  },
  "Nike Air Force 1 React": {
    id: 2,
    name: "Nike Air Force 1 React",
    brand: "Nike",
    gender: "Male",
    price: '$104',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-fe0b0aa8-5a11-4839-b1ae-28358239e214/air-force-1-react-shoe-nm7D17.jpg",
    slug: "Nike Air Force 1 React",
    description: "Refresh your look and step into a new AF-1 world with the Nike Air Force 1 React. It fuses modern design with iconic b-ball style for a big, bold look. The oversized Swoosh, large AIR on the midsole and new sole pattern let you express your modern world while Nike React technology adds exceptional underfoot comfort."
  },
  "Nike Air Max 90": {
    id: 3,
    name: "Nike Air Max 90",
    brand: "Nike",
    gender: "Male",
    price: '$114',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44e884ee-aabe-4bef-b4e1-b7ba83436d38/air-max-90-shoe-nDppDk.jpg",
    slug: "Nike Air Max 90",
    description: "Clean lines, versatile and timeless—the people's shoe returns with the Nike Air Max 90. Featuring the same iconic Waffle sole, stitched overlays and classic TPU accents you've come to love, it lets you walk among the pantheon of Air."
  },
  "Nike Air Max VG-R": {
    id: 4,
    name: "Nike Air Max VG-R",
    brand: "Nike",
    gender: "Male",
    price: '$89',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88e71cfa-7c44-4a26-bb72-825e5b65c2b1/air-max-vg-r-shoe-W1dBz9.jpg",
    slug: "Nike Air Max VG-R",
    description: "Time happens—keep up in your Nike Air Max VG-R, a new gesture of speed and air that lets you occupy the now. Inspired by the Air Max 95, the new design quickens the shape with hybrid lines evoking GT race cars and the drivers' fast-paced breathing. Monofilament mesh on the upper adds rich texture and ventilation while Air cushioning in the heel softens the ride. Winning is just too easy when the shoes are an extension of your body."
  },
  "Nike Air Max 270": {
    id: 5,
    name: "Nike Air Max 270",
    brand: "Nike",
    gender: "Male",
    price: '$119',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efwa2z2axzuqhv35gxbz/air-max-270-shoe-8HhX8Z.jpg",
    slug: "Nike Air Max 270",
    description: "Celebrating the 25th anniversary of the Air Max 95, the Nike Air Max ZM950 warps the OG's iconic side panels, adds fully visible Nike Air cushioning and boasts colours that express its attitude: untouchable, confident and tough."
  },
  "Nike Air Max ZM950": {
    id: 6,
    name: "Nike Air Max ZM950",
    brand: "Nike",
    gender: "Male",
    price: '$149',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41b1ef6d-97c5-4acc-becd-94c3b15cb557/air-max-zm950-shoe-GXGhxK.jpg",
    slug: "Nike Air Max ZM950",
    description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine."
  },
  "Nike Air VaporMax 2020 Flyknit": {
    id: 7,
    name: "Nike Air VaporMax 2020 Flyknit",
    brand: "Nike",
    gender: "Male",
    price: '$113',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f035601-bb2c-450a-bc3b-d88a2df87073/air-vapormax-2020-flyknit-shoe-gV1V9R.jpg",
    slug: "Nike Air VaporMax 2020 Flyknit",
    description: "Designed with sustainability in mind, the Nike Air VaporMax 2020 Flyknit is made from at least 50% recycled content by weight. That's a lot of trash! As part of Nike's journey towards lowering our impact, we're discovering new ways to put our waste to good use. By utilising leftover materials, recycled polyester, recycled foam and a Nike Air-Sole made from at least 75% recycled TPU, the VaporMax 2020 Flyknit marks the next step towards our ultimate goal of zero carbon and zero waste."
  },
  "Nike Air Force 1 High '07": {
    id: 8,
    name: "Nike Air Force 1 High '07",
    brand: "Nike",
    gender: "Male",
    price: '$119',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/li76xfogpzgct6nxifm3/air-force-1-high-07-shoe-BKPV3q.jpg",
    slug: "Nike Air Force 1 High '07",
    description: "The legend lives on in the Nike Air Force 1 High '07, an update on the iconic AF-1 that offers classic court style and premium cushioning."
  },
  "Nike Pegasus Trail 2": {
    id: 9,
    name: "Nike Pegasus Trail 2",
    brand: "Nike",
    gender: "Male",
    price: '$115',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c48c5ac-68d7-4c86-8892-1f405f834bc0/pegasus-trail-2-trail-running-shoe-fWmzwd.jpg",
    slug: "Nike Pegasus Trail 2",
    description: "Find your wings on the path less travelled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction."
  },
  "Nike SuperRep Cycle": {
    id: 10,
    name: "Nike SuperRep Cycle",
    brand: "Nike",
    gender: "Male",
    price: '$104',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74e90b58-871a-4cac-a2ab-644b10e5551b/superrep-cycle-indoor-cycling-shoe-n1C9sL.jpg",
    slug: "Nike SuperRep Cycle",
    description: "The Nike SB Zoom Blazer Mid takes a heritage design and tailors it to the needs of the modern skateboarder. Soft cushioning and a flexible sole work together to provide great boardfeel and traction."
  },
  "Nike SB Zoom Blazer Mid": {
    id: 11,
    name: "Nike SB Zoom Blazer Mid",
    brand: "Nike",
    gender: "Male",
    price: '$74',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fambaubeufwpravdy1xs/sb-zoom-blazer-mid-skate-shoe-17FxBf.jpg",
    slug: "Nike SB Zoom Blazer Mid",
    description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine."
  },
  "Nike Revolution 5": {
    id: 12,
    name: "Nike Revolution 5",
    brand: "Nike",
    gender: "Male",
    price: '$47',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/rjlsjfiooaxrthntwypg/revolution-5-running-shoe-b9s3hv.jpg",
    slug: "Nike Revolution 5",
    description: "The Nike Revolution 5 cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you."
  },
  "Nike SB Zoom Stefan Janoski RM": {
    id: 13,
    name: "Nike SB Zoom Stefan Janoski RM",
    brand: "Nike",
    gender: "Male",
    price: '$69',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dlgldxulxcgsz5v6du9z/sb-zoom-stefan-janoski-rm-skate-shoe-wrdqPL.jpg",
    slug: "Nike SB Zoom Stefan Janoski RM",
    description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine."
  },
  "Nike Mercurial Superfly 7 Elite MDS": {
    id: 14,
    name: "Nike Mercurial Superfly 7 Elite MDS",
    brand: "Nike",
    gender: "Male",
    price: '$249',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7747ccc-6df6-4ffb-84f4-27b1a043ce1d/mercurial-superfly-7-elite-mds-fg-football-boot-68MQMQ.jpg",
    slug: "Nike Mercurial Superfly 7 Elite MDS",
    description: "Dream of speed and play fast in the Nike Mercurial Superfly 7 Elite MDS FG. A streamlined upper combines with a Nike Aerowtrac zone for high-speed play and supercharged traction."
  },
  "Kyrie 7 'Sisterhood'": {
    id: 15,
    name: "Kyrie 7 'Sisterhood'",
    brand: "Nike",
    gender: "Male",
    price: '$114',
    imageurl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22793d2f-a225-4f52-b9eb-9aaa99433e8c/kyrie-7-sisterhood-basketball-shoe-WTN4WG.jpg",
    slug: "Kyrie 7 'Sisterhood'",
    description: "Kyrie made headlines with his generous, outspoken support of female ballers. Nike is joining him with the special 'Sisterhood' colourway of the Kyrie 7, which aims to empower and unify support for women athletes everywhere. The eye-grabbing aesthetic is highlighted by a detailed floral graphic underneath the pop of its yellow-outlined Swoosh logo. On or off the court, show your support for women athletes in style."
  }
}
