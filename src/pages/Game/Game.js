import React, { Component } from "react";
import "animate.css";

import hero from "../../images/hero.svg";
import monster from "../../images/monster.svg";

import Header from "../../components/Header";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
    };
  }

  startNewGame = () => {
    this.setState({
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: true,
    });
  };

  inputDamage = (damage) => {
    return Math.floor(Math.random() * Math.floor(damage));
  };

  inputHeal = (heal) => {
    return Math.floor(Math.random() * Math.floor(heal));
  };

  acttack = () => {
    const { playerHealth, monsterHealth } = this.state;

    //You attack monster

    var damage = this.inputDamage(20);
    this.setState({
      monsterHealth: monsterHealth - damage,
    });

    //Monster attack you

    var damage1 = this.inputDamage(20);
    this.setState({
      playerHealth: playerHealth - damage1,
    });

    this.checkHeal();
  };

  specialActtack = () => {
    const { playerHealth, monsterHealth } = this.state;

    //You attack monster
    var damage = this.inputDamage(40);
    this.setState({
      monsterHealth: monsterHealth - damage,
    });

    //Monster attack you
    var damage1 = this.inputDamage(40);
    this.setState({
      playerHealth: playerHealth - damage1,
    });

    this.checkHeal();
  };

  heal = () => {
    const { playerHealth } = this.state;
    if (playerHealth <= 50) {
      var heal = this.inputHeal(20);
      this.setState({
        playerHealth: playerHealth + heal,
      });
    } else {
      return alert("HP must be under 50 points !!!");
    }
  };

  giveUp = () => {
    alert("You Lost!");
    this.setState({
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
    });
  };

  checkHeal = () => {
    const { playerHealth, monsterHealth } = this.state;
    if (monsterHealth <= 0) {
      alert("You Won !!!");
      this.setState({
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
      });
    } else if (playerHealth <= 0) {
      alert("You Lost !!!");
      this.setState({
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
      });
    }
  };

  render() {
    const { playerHealth, monsterHealth, gameIsRunning } = this.state;
    return (
      <div>
        <Header />

        <div className="container animate__animated animate__zoomIn">
          <div className="row">
            <div className="col-6 text-center mt-5">
              <h1 className="text-primary">YOU</h1>
              <img src={hero} alt="" width="200" className="mt-3 mb-3" />
              <div className="healthbar">
                <div
                  className="healthbar heal"
                  style={{
                    margin: 0,
                    color: "white",
                    width: playerHealth + "%",
                  }}
                >
                  {playerHealth}
                </div>
              </div>
            </div>

            <div className="col-6 text-center mt-5">
              <h1 className="text-primary">MONSTER</h1>
              <img src={monster} alt="" width="200" className="mt-3 mb-3" />
              <div className="healthbar">
                <div
                  className="healthbar heal"
                  style={{
                    margin: 0,
                    color: "white",
                    width: monsterHealth + "%",
                  }}
                >
                  {monsterHealth}
                </div>
              </div>
            </div>
          </div>
          <div className="controls mt-5 text-center">
            {gameIsRunning ? (
              <div className="row">
                <div className="col">
                  <div className="col mb-3">
                    <button
                      className="btn btn-info mr-3"
                      onClick={this.acttack}
                    >
                      ATTACK
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.specialActtack}
                    >
                      SPECIAL ATTACK
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-success mr-3"
                      onClick={this.heal}
                    >
                      HEAL
                    </button>
                    <button className="btn btn-warning" onClick={this.giveUp}>
                      GIVE UP
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col">
                <button className="btn btn-primary" onClick={this.startNewGame}>
                  START NEW GAME
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
