import React from 'react'
import PropTypes from 'prop-types'
import ContactTitle from './ContactTitle.tsx'

const Contact = (props) => {
  return (
    // <section className='pageSection'>
    //   <div className='titleWrapper'>
    //     <ContactTitle classProp='titleGridFront'/>
    //   </div>
    // </section>
    <section>
      <header className='headerSection'>
        <h1 className='pageTitle'>Contact</h1>
      </header>
    </section>
  )
}

Contact.propTypes = {}

export default Contact