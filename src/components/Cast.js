import React from "react";

function Cast() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAl1JREFUeNrtmt2tgzAMhTsCIzACI7DAlRiBERghI3SEjNANbkbglbeMkA24QTISjQLE+bsBjHSkNnKB8zkxDuprnufXk/Vo8wSAABAAAkAACAABIAAE4GvA85imqdJqN6peBR7RAYBZoTVbtIy3twQAGec7xk3xOwL4OJovCkIUANoMQ5pfNVweAEx95QlAwTlqrR5AspxFMwaA3tP8Knm0TFKDiAHgHQjgdJZoNSUDEIkBJIVwOQBQHz6WZcR8lksQACiAYwYAHVxvOIkbsRC8AIBxFlD9MRJwzQ4TnwzAMhUzZd3MvkT8pk8CIPCZ76XNug+pHywWAJHT/NouO6x9F41BAAKz4KN+0yXGAs9CAHz+IfNN5CUnQwDkWvsKak29c00F3We3ednSwRj2HpfC2rkCyJX9N1yPY/cGyHcSX0+akgC0m+m/ZpcbNYEb2VYwVntu0GQJAMazft+hJmxbZtRMcAEgE5uvdjpMBWO14xpXEIvqWVwA8IQA1qzF6jA5cqsuXADUiR95LOI5VapWOMXLjy7FYzbb+4AYB6zXFLNLroCfCuBrlhUJAMyn3mTJkgFk2WFGB/DzOzVaTEssn8+M2uIzTP00ALSBVmveiJ2Yt8ZnBCBiAxgNQ+IEACo+54EGoG9+MMws4gfmUfFFA9A3Xmkpw8zyvdoxj4q/AgBuyeZwkH1UfNEALIVs0YgofIfxVwAwWgy1iMJ3GF80gLsVPhSAOxY+LIDbFT4sAIEpZNj4KwBgmEKGjb8CgAaMSK3u7ITY+OIB0J+lCQABIAAEgAAQAAJAAB6iPy4FckaI/hnJAAAAAElFTkSuQmCC"
            alt="img"
          />
          <strong className="temperatureElement"> 34</strong>

          <span className="units">
            <a href="mm" className="celsius-link,active">
              °C|
            </a>
            <a href="mm" className="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              humidity:<span className="humidity">80</span>%
            </li>
            <li>
              wind:<span className="wind">4</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cast;
