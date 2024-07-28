/* eslint-disable react/prop-types */
import {Helmet} from "react-helmet-async"
const Title = ({title ="chat App", description="this a chat app WhatsThat"}) => {
  return (
   <Helmet>
    <title>{title}</title>
    <meta name="description" content={description}></meta>
   </Helmet>
  )
}

export default Title