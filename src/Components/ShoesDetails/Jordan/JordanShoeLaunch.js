import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoesDetails } from './JordanShoesBrandLaunch'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  nameClass: {
    marginTop: '30px',
    fontFamily: 'Sans-serif',
    fontWeight: 'bold'
  },
  imageClass: {
    width: '40%',
    height: '450px',
    marginLeft: '15px',
    marginRight: '15px',
    float: 'left'
  },
  container: {
    margin: '20px auto 20px'
  }
})

export const JordanShoeLaunch = () => {
  const classes = useStyles()
  const { slug } = useParams()
  const shoe = ShoesDetails[slug]

  const { name, imageurl, brand, gender, price, description } = shoe

  return (
    <div>
      <h2 className={classes.nameClass}>{name}</h2>
      <div className={classes.container}>
      <img src={imageurl} alt={name} className={classes.imageClass}/>
      <h3>Brand: {brand}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Price: {price}</h3>
      <h3>Details: {description}</h3>
    </div>
    </div>
  )
}