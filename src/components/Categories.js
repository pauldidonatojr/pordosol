import React from 'react'
import styled from 'styled-components'
const Categories = ({ categories, filterItems }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-gold);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
  }

  .filter-btn:hover {
    background: var(--clr-gold);
    color: var(--clr-white);
  }
`
export default Categories
