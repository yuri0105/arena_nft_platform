import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameStats from '../gameStats/GameStats';

// Import bootstrap
import { Container,Row,Col } from 'react-bootstrap';
function NoLogIn({ walletAddress }) {
  if (walletAddress) {
    return <Navigate to='/log_in_page' />;
  }

  return (
    <section id="NoLogIn">
      {/* <p className="d-none d-sm-block">
        WARRIORS & VIKINGS BATTLE IT OUT TO FIND OUT WHO REIGNS SUPREME. <br />{" "}
        $SILVER IS AT STAKE AND RICHES ARE READY FOR EVERYONE.
      </p> */}

      <div className="col-md-11 mx-auto diamong_image_wrapper mt-5">
        
        <Row>
        <Col md={4}>
          <Container>
        <h2 className="text-white mt-5">WELCOME WARRIOR</h2>
            <h3 className="text-white mt-5">Arena Royale is a game in which players stake their 
            warriors to earn SILVER which can be used for multiple functionalities. Along with such 
            players can use their warriors to fight in the arena and earn more silver.</h3>
          <div className="btn_control mb-5 mt-5">
          <Link to="/whitepaper" className="btn_roadmap">
            PLAY GAME
          </Link><br></br>
          <Link to="/whitepaper" className="btn_roadmap">
            LEARN MORE
          </Link>
        </div>
        </Container>
        </Col>
        <Col md={8}>
        <img
          className="diamond_1"
          src={require("../../assets/img/diamond.png").default}
          alt="diamond"
        />
        </Col>
       </Row>

        {/* <img
          className="diamond_1"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="diamond_1 diamond_1_copy d-sm-none"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="steel_1"
          src={require("../../assets/img/steel_1.png").default}
          alt="steel_1"
        /> */}
        {/* <GameStats />

        <div className="btn_control mb-5 mt-5">
          <Link to="/whitepaper" className="btn_roadmap">
            WHITEPAPER
          </Link>
        </div> */}
      </div>
    </section>
  );
}

NoLogIn.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  walletAddress: state.wallet.walletAddress
});

export default connect(mapStateToProps)(NoLogIn);
