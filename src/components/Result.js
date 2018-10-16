import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Result = (props) => {
  const cookingTimePercentage = (props.data.cooking.time / 60) * 100;
  const depressureTimePercentage = (props.data.depressure.time / 30) * 100;
  return (
    <div className="result card">
      <div className="card-header result__header">
        <h3 className="card-title result__name">{props.data.name}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6 col-md-4 result__graph">
            <h4 className="result__col-header">Cooking Time</h4>
            <CircularProgressbar
              percentage={cookingTimePercentage}
              text={`${props.data.cooking.time} min`}
              initialAnimation={true}
            />
            <p className="result__graph-description">
              {props.data.cooking.time} {props.data.cooking.type}
            </p>
          </div>
          <div className="col-sm-6 col-md-4 result__graph">
            <h4 className="result__col-header">Pressure Release*</h4>
            <CircularProgressbar
              percentage={depressureTimePercentage}
              text={`${props.data.depressure.time} min`}
              initialAnimation={true}
            />
            <p className="result__graph-description">
              {props.data.depressure.time > 0 &&
                props.data.depressure.time + ' '}
              {props.data.depressure.type}*
            </p>
          </div>
          <div className="col-md-4 flex-grow-1">
            <h4 className="result__col-header ">Get Cooking!</h4>
            <ul className="result__recipe-list">
              {props.data.recipes.map((recipe, index) => (
                <li className="result__recipe-link-item" key={index}>
                  <a
                    href={recipe.link}
                    className="result__recipe-link d-flex justify-content-start"
                  >
                    <i className="result__recipe-icon fas fa-utensils-alt" />
                    <span className="result__recipe-name">
                      {recipe.name}
                      <span className="result__recipe-link-arrow">&#8599;</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {props.data.notes.length > 0 && (
          <h5 className="result__note-header">Note(s):</h5>
        )}
        {props.data.notes.map((note, index) => (
          <li key={index} className="result__note-text">
            {note}
          </li>
        ))}
      </div>
      <div className="text-muted result__footer">
        * Not sure what this means? Read up on the{' '}
        <a href="https://instantpot.com/quick-release-natural-release/">
          difference between quick release and natural release.
        </a>
      </div>
    </div>
  );
};

export default Result;
