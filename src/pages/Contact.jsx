import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
display: flex;
${mobile({
  flexDirection: 'column'
})}
`
const Left = styled.div`
flex: 0.7;
`
const Right = styled.div`
flex: 0.5;
display: flex;
margin: auto;
align-items: center;
flex-direction: column;

`
const Image = styled.img`
height: 100vh;
max-width: 100%;
object-fit: cover;
${mobile({
  height: '100%',
  width: "100%"
})}
`
const Heading = styled.h2`
    ${mobile({
      display: 'none'
})}
`
const Form = styled.form`
width: 80%;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`
const Email = styled.input`
width: 100%;
height: 20px;
padding: 4px;
border-radius: 5px;
font-size: 20px;
border: 1px solid rgb(15, 150, 196);
:focus{
  border: 3px solid rgb(15, 150, 196);
  outline: none;
  
}
`
const Button = styled.button`
height: 2rem;
width: 4rem;
margin-top: 4px;
background-color:rgb(15, 150, 196) ;
border: none;
border-radius: 10px;
color: white;
transition: 0.3s ease all;
cursor: pointer;
:hover{
  transform: scale(1.2);
}
`
const Textarea = styled.textarea`
      width: 100%;
      aspect-ratio: 1;
      padding: 4px;
border-radius: 5px;
font-size: 20px;
border: 1px solid rgb(15, 150, 196);
:focus{
  border: 3px solid rgb(15, 150, 196);
  outline: none;
  
}

`
const Contact = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
  <Container id='contact'>
    <Left>
      <Image src='https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.15752-9/249171332_561561951573024_7895053092159900741_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JFri9fzgjM8AX-rIX0o&_nc_ht=scontent.fkhi2-3.fna&oh=03_AdSRL5fel7udnw4Q6eFdgbyzVWPI63isdfz7tJKvnt-uyg&oe=63948104' />
    </Left>
    <Right>
      <Heading>Let's Connect</Heading>
      <Form onSubmit={handleSubmit}>
        <Email placeholder="Email" />
        <Textarea placeholder='Type Here' className='textarea'></Textarea>
        <Button type="submit">Send</Button>
      </Form>
    </Right>
  </Container>
    )
}

export default Contact