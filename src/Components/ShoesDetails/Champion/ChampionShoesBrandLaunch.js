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

export const ChampionShoesBrandLaunch = () => {
  const classes = useStyles()
  return (
    <div>
      <AppbarComp />
      {Object.entries(ShoeDetail).map(([slug, { name, imageurl, price }]) => (
          <Card key={slug} className={classes.root}>
            <Typography className={classes.price}>{price}</Typography>
            <CardActionArea>
            <Link to={`/champion/${slug}`} style={{ textDecoration: 'none' }}>
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

export const ShoeDetail = {
    "RALLY PRO - MENS": {
        id: 31,
        name: "RALLY PRO - MENS",
        brand: "Champion",
        gender: "Male",
        price: "$99",
        imageurl: "https://wss.media.adc.aptos.io/pws/client/images/catalogue/products/CM100018M/1200/CM100018M_2.jpg",
        slug: "RALLY PRO - MENS",
        description: "The Champion Life™ Rally Pro Men's athletic sneakers deliver as much comfort as they do style. This slip-on high-top sneaker is the epitome of Champion heritage with its Champion logo detailing throughout and simplistic and sleek silhouette. Sock Design with Suede and Leather Upper. Chenille Fabric C Logo on Outer Ankle. Woven Tongue and Heel Tab for Easy On and Off."
    },
    "Champion Rally Script White Shoes": {
        id: 32,
        name: "Champion Rally Script White Shoes",
        brand: "Champion",
        gender: "Male",
        price: "$54",
        imageurl: "https://scene7.zumiez.com/is/image/zumiez/image/Champion-Rally-Script-White-Shoes-_314744.jpg",
        slug: "Champion Rally Script White Shoes",
        description: "Comfortable and streetwear-inspired, Champion introduces the Rally Script white shoes. Athletic with style to spare, these signature shoes are what you've come to expect from Champion. A clean, white look is complemented by Champion script detailing on the elastic gore strap as well as throughout the upper. With both tongue and heel pull tabs for easy access, and a high-top design for ankle support, these shoes are a striking addition to any casual, athleisure look. Rally Script White Shoes from Champion. Woven mesh and elastic textile upper. Elastic logo printed gore strap crossed across forefoot."
    },
    "Champion Men's 93 Eighteen Repeat Mens Casual Shoes": {
        id: 33,
        name: "Champion Men's 93 Eighteen Repeat Mens Casual Shoes",
        brand: "Champion",
        gender: "Male",
        price: "$19",
        imageurl: "https://www.olympiasports.net/dw/image/v2/BDWW_PRD/on/demandware.static/-/Sites-olympia-master-catalog/default/dwfeccfa66/images/large/CM100244M.1.416.jpeg?sw=600",
        slug: "Champion Men's 93 Eighteen Repeat Mens Casual Shoes",
        description: "Heritage style and plush comfort team up on the Men's Champion 93 Eighteen Repeat Casual Sneakers. On-trend and featuring low-key performance, these sneakers are a must-cop. Large embroidered Champion logo and allover logo print on the 93Eighteen Repeat . Chunky midsole for 90's-inspired style. Easy pull on with heel pull tab. Cushioned tongue and collar for comfort."
    },
    "Champion Men's Lace Up Sneaker": {
      id: 41,
      name: "Champion Men's Lace Up Sneaker",
      brand: "Champion",
      gender: "Male",
      price: "$104",
      imageurl: "https://m.media-amazon.com/images/I/61KZz9bIAmL._AC_UL320_.jpg",
      slug: "Champion Men's Lace Up Sneaker",
      description: "The Champion® 93Eighteen Classic sneakers are a 90's throwback worthy of any budding sneaker head's collection!. Rubber sole. Textile upper with synthetic overlay and Champion logo on the side. Two-color C logo on the side and heel</ol><ol>Lace-up construction."
  },
    "Champion Men's Tank": {
      id: 42,
      name: "Champion Men's Tank",
      brand: "Champion",
      gender: "Male",
      price: "$69",
      imageurl: "https://m.media-amazon.com/images/I/71hPHDb0+oL._AC_UL320_.jpg",
      slug: "Champion Men's Tank",
      description: "The Champion® Tank sneakers are ready for action. Leather and breathable mesh upper in a colorful silhouette. Lace-up closure for a secure fit. Padded collar and tongue for added comfort. Breathable textile lining and cushioned footbed for all-day wear. Durable rubber outsole with logo tread for grip. Imported. Measurements: Weight: 1 lb 5.3 oz Product measurements were taken using size 12, width M. Please note that measurements may vary by size. Weight of footwear is based on a single item, not a pair."
  },
    "Champion Rally KT Black Shoes": {
        id: 34,
        name: "Champion Rally KT Black Shoes",
        brand: "Champion",
        gender: "Male",
        price: "$69",
        imageurl: "https://scene7.zumiez.com/is/image/zumiez/image/Champion-Rally-KT-Black-Shoes-_320285.jpg",
        slug: "Champion Rally KT Black Shoes",
        description: "Add an exciting, runner-inspired look to your footwear collection with the Rally KT black shoes from Champion. These unique shoes have a laceless slip-on construction, with a stretchy textile upper, and an elastic collar to keep them secure and well-fitting. The thick, cushioned midsole ensures that your feet will have a ton of impact support and comfort, and the thick, multi-tread outsole gives you great traction through any conditions, making these shoes a no-brainer for any shoe afficianado. Rally KT Black Shoes from Champion. Elastic textile upper with sidewalls. Champion logo script embroidered at outer sidewalls. Cushioned footbed."
    },
    "Champion Sneakers Debut FSR Upper Italian Shoe": {
        id: 37,
        name: "Champion Sneakers Debut FSR Upper Italian Shoe",
        brand: "Champion",
        gender: "Male",
        price: "$65",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0un1j0Sy_vTivsVENUzbSjsOhh48nCyNT-Q&usqp=CAU",
        slug: "Champion Sneakers Debut FSR Upper Italian Shoe",
        description: "Champion sneakers debut FSR Upper Italian shoe brand Crossover Champion CASBIA x Champion AWOL Atlanta Tennis Racing Shoes. Sock Design with Suede and Leather Upper."
    },
    "Champion Rally Pro": {
        id: 38,
        name: "Champion Rally Pro",
        brand: "Champion",
        gender: "Male",
        price: "$100",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2UEuj5d8Rsns8y3PdxhQzc9Nm0OclBfJPg&usqp=CAU",
        slug: "Champion Rally Pro",
        description: "Boldly branded kicks are still having a moment today and an affordable option to cop is the Champion Rally Pro. Made from flexible textile and woven mesh, the upper comes with a suede side panel and elastic strap across the foot. These sneakers boast a well-supported midsole, rubber outsole, and multiple branding from the upper and heel, all the way to the quarter panel and bottom sole. But the best feature? Definitely the sock-like, padded collar and footbed that delivers maximum comfort and quality. Breathable lining and construction. Substantial insole and collar provide true comfort. Elastic bands for customization. Cozy feet that is perfect for daily wear."
    },
    "Champion Rally Crossover SF": {
      id: 35,
      name: "Champion Rally Crossover SF",
      brand: "Champion",
      gender: "Male",
      price: "$125",
      imageurl: "https://m.media-amazon.com/images/I/71uPcrDUzXL._AC_UL1500_.jpg",
      slug: "Champion Rally Crossover SF",
      description: "Featuring a synthetic sock-knit upper and a street ready look, the Champion® Rally Crossover hi-top sneaker will bring sporty style with a fun twist to your shoe collection. Crossed mid-foot straps with logo hits offer a secure fit. Pull tabs at the front and heel provide an easy on. Round-toe silhouette. Comfort cushion insole. Traction outsole offers durability and grip. Imported. Measurements: Weight: 1 lb Product measurements were taken using size 12, width M. Please note that measurements may vary by size. Weight of footwear is based on a single item, not a pair. Crossed mid-foot straps with logo hits offer a secure fit. Pull tabs at the front and heel provide an easy on. Round-toe silhouette."
  },
  "Champion Light Pink Trainer": {
      id: 36,
      name: "Champion Light Pink Trainer",
      brand: "Champion",
      gender: "Male",
      price: "$59",
      imageurl: "https://m.media-amazon.com/images/I/61vJ31GeP1L._AC_UL1400_.jpg",
      slug: "Champion Light Pink Trainer",
      description: "You can push yourself a little more. The Gusto Performance Cross Trainer from Champion can help you get there. It features a breathable, sporty upper, laces for a good fit, padded collar, soft lining, cushioned memory foam insole for comfort, and a lightweight, non-marking outsole. Manmade materials. fabric and mesh. Memory foam insole. Soft lining. Lightweight, non-marking outsole."
  },
    "Mens Shoes - Champion Zone High Top": {
        id: 39,
        name: "Mens Shoes - Champion Zone High Top",
        brand: "Champion",
        gender: "Male",
        price: "$58",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVa9meTcl2w-WS2-m0uNr-pL2EQ_RlR7cySQ&usqp=CAU",
        slug: "Mens Shoes - Champion Zone High Top",
        description: "The Champion Life™ Rally Pro Men's athletic sneakers deliver as much comfort as they do style. This slip-on high-top sneaker is the epitome of Champion heritage with its Champion logo detailing throughout and simplistic and sleek silhouette. Sock Design with Suede and Leather Upper. Elastic Logo Printed Strap Across Foot. Chenille Fabric C Logo on Outer Ankle. Woven Tongue and Heel Tab for Easy On and Off."
    },
    "C9 Champion Men's Pursuit Sneaker": {
        id: 40,
        name: "C9 Champion Men's Pursuit Sneaker",
        brand: "Champion",
        gender: "Male",
        price: "$21",
        imageurl: "https://m.media-amazon.com/images/I/81Hgheh1kQL._AC_UL320_.jpg",
        slug: "C9 Champion Men's Pursuit Sneaker",
        description: "C9 Champion Pursuit is a men's athetlic shoe with a heathered knit upper and an EVA midsole that provides all day comfort and style. Synthetic sole. performance athletic shoe. Speed Knit knit upper for comfort and breathability. Cushion Fit memory foam sock."
    }
}