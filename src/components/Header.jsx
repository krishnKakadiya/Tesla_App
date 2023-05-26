import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
// import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
      <img src="/images/logo.svg" alt="logo tesla"/>
      </a>
      <Menu>
          <a href="#">Model S</a>     
        <a href="#">Model 3</a>     
        <a href="#">Model X</a>     
        <a href="#">Model Y</a>     
          
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        
        <CustomMenu onClick={()=>setBurgerStatus(true)}  />
      </RightMenu>
    <BurgerNav  show={burgerStatus}>
       <CloseWrapper>
      
         <CustomColse onClick={()=>setBurgerStatus(false)} />

        </CloseWrapper>
        <li><a href="#">Model S</a> </li>    
         <li><a href="#">Model 3</a> </li>    
         <li><a href="#">Model X</a> </li>    
         <li><a href="#">Model Y</a> </li>    
         <li><a href="#">Existing Inventory</a> </li>    
         <li><a href="#"> Used Inventory</a></li>    
         <li><a href="#">Trade-in</a> </li>    
         <li><a href="#">Cybertruck</a> </li>    
         <li><a href="#">Roadaster</a> </li>    
    


      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;  
    position:fixed;
    display:flex;
    align-item:center;
    justify-content:space-between;
    padding:15px 15px;
    top:0;
    left:0;
    right:0;
    z-index: 1;
    font-size: 1.3rem;

 @media (max-width: 650px)  {
    font-size: 1rem;
  }


`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex: 1;

 a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 25px;
  flex-wrap:nowrap;


 }
 @media (max-width: 768px)  {
    display: none;
  }

`

const RightMenu = styled.div`
    display: flex;
    align-item: center;

   a{
      
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 20px;
      


   }
   @media (max-width: 370px) {
    a{
    font-size:0.9rem;
      margin-right: 8px;

    }
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
 


`
const BurgerNav = styled.div`

  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:#DCDCDC;
  width:330px;
   z-index: 16;
   list-style:none;
   padding:10px 20px;
  text-align:start;
  transform: ${props => props.show? 'translateX(0%)' : 'translateX(100%)' };
 transition: transform 0.3s ease-in;
 background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
  li{
    padding:1.5rem 1rem;
    border-bottom:1px solid rgba(0, 0, 0, .2);
    
    a{
      font-weight: 600;

    }
  }

`

const CustomColse = styled(CloseIcon)`
 cursor: pointer;
 
`
const CloseWrapper = styled.div`

display: flex;
justify-content: flex-end;


 
`

/*here is use tailwand css  and styled components*/ 