import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import SingleItem from './SingleItem'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ViewInArIcon from '@mui/icons-material/ViewInAr'


const theme = createTheme({
  palette: {
    neutral: {
      main: '#c59d5f',
      contrastText: '#fff',
    },
  },
});

const Menu = ({ items }) => {
  return (
    <Wrapper>
      <div className="sectionCenter">
        {items.map((menuItem) => {
          const { id, title, img, desc, price, model } = menuItem
          return (
            <article key={id} className="product-card">
              <img className="card-image" src={img} />
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>

                <div className='description-holder'>
                  <p className="item-text">{desc}</p>
                </div>


                <div
                  style={{
                    // border: '2px solid red',
                    width: '100%',
                    height: '30px',
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained"
                      onClick={function (event) {
                        var win = window.open(
                          'https://ar.food2view.com/ ' + '?Model=' + model + '/' + 'Por Do Sol',
                          '_blank'
                        )
                        win.focus()
                      }}>
                      Try in AR
                      <ViewInArIcon></ViewInArIcon>
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: absolute;
left: 0;
width: 100%;
font-family: "Roboto Condensed", sans-serif;

  .sectionCenter {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    background-color: var(--blue);
    color: cornsilk;
  }

  .product-card {
    display: grid;
    height: 40vh;
    width: 50vh;
    margin-top: 4rem;
    margin-bottom: 1rem;
    /* transition: all 0.7s cubic-bezier(0.895, 0.03, 0.685, 0.22); */
    transition: box-shadow 0.3s;
    &:hover{
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),
      0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14); 
    }
  }

  .card-image{
    object-fit:cover;
    height: 40vh;
    width: 50vh;
    border-radius: var(--radius);
    display: block;
    position: absolute;
  }

  
  .product-details{
      display: grid;
      justify-content: center;
      align-items: center;
      z-index: 1;
      height: 40vh;
      width: 50vh;
      position: relative;
      transition: backdrop-filter 0.3s;
      border-radius: var(--radius);
  }


  .overlay-product{
      display: grid;
      justify-content: center;
      align-items: center;
      background-color: black;
      z-index: 1;
      height: 40vh;
      width: 50vh;
      position: absolute;
      opacity: 0.5;
      border-radius: var(--radius);
  }

  .product-details:hover{
    backdrop-filter: blur(5px);
    }

  .product-header{
      width: 100%;
      display: grid;
      position: relative;
      align-items: center;
      justify-content: center;

  }
  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted var(--clr-grey-5);
  }

  .item-info h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    position: relative;
    text-align: center;
    color: var(--clr-gold);
  }

  .description-holder {
    position: relative;
    display: inline;
    padding: 1rem;
    color: white;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .item-text {
    color: white;
  }

  @media (min-width: 576px) {
  }

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (min-width: 600px) {
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }

    .photo {
      height: 175px;
    }
  }

  @media (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
    .section-center {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }

    .photo {
      height: 150px;
    }
  }
`
export default Menu
