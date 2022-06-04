import React from 'react'
import styled from 'styled-components'

function Srush({backgroundImg,title,description}) {
  return (
      <Wrap bgImage={backgroundImg}>
          <TeslaTitle>
              <h3>
                  {title}
              </h3>
              <p>
                  {description}
              </p>
          </TeslaTitle>
      </Wrap>
    
  )
}

export default Srush
const Wrap=styled.div`
float:left;
width:75%;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`
const TeslaTitle=styled.div`
padding-top:15vh;
text-align:center;
`