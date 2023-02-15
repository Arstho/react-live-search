import React, { Component } from "react";
import PropTypes from 'prop-types';

class Title extends React.Component {
   render() {
      return (
         <div className='title'>
            <div className="title_and_basket">
               <h1 className="title">{this.props.title}</h1>
               <a href="."><img className="basket" src="shopping-cart.png" alt="" /></a>
            </div>
         </div>
      )
   }
}

Title.propTypes = {
   title: PropTypes.string.isRequired
}.isRequired

export default Title;