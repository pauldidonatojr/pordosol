import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import SingleItem from './SingleItem'
import Button from '@mui/material/Button'
const Menu = ({ items }) => {
  return (
    <Wrapper>
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem
          return (
            <article key={id} className="menu-item">
              {/* <img src={img} alt={title} className="photo" /> */}
              <div
                className="item-info"
                style={{
                  // border: '2px solid black',
                  display: 'grid',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>

                <p className="item-text">{desc}</p>

                <div
                  style={{
                    // border: '2px solid red',
                    width: '250px',
                    height: '30px',
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link to="https://ar.food2view.com/?Model=Meal%201/Por%20Do%20Sol">
                    <Button variant="contained">View in AR</Button>
                  </Link>
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
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
  }

  .menu-item {
    display: grid;

    height: 15vh;
    width: 45vh;
    padding: 0.25rem;
  }

  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid var(--clr-gold);
    border-radius: var(--radius);
    display: block;
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
    color: var(--clr-gold);
  }

  .item-text {
    margin-bottom: 0;
    padding-top: 1rem;
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
