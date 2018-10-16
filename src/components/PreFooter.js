import React from 'react';

const PreFooter = () => (
  <aside className="prefooter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <h5 className="prefooter__header">New to Instant Pot?</h5>
          <p>
            If you're new to cooking with your Instant Pot, be sure to{' '}
            <a href="https://instantpot.com/faq/getting-started-instant-pot/">
              read the user guide
            </a>
            ,{' '}
            <a href="https://www.youtube.com/results?search_query=instant+pot">
              watch some YouTube videos
            </a>{' '}
            or{' '}
            <a href="https://instantpot.com/">visit the Instant Pot website</a>{' '}
            to learn the ins and outs of pressure cooking.{' '}
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <h5 className="prefooter__header">Depressuring: Natural vs. Quick</h5>
          <p>
            You'll notice Instant Pot recipes include instructions on what to do
            after the time is up on your cooking: do you let the pressure
            release naturally or do a quick release? This is an important
            concept in Instant Pot cooking,{' '}
            <a href="https://instantpot.com/quick-release-natural-release/">
              so read up on the difference
            </a>
            .
          </p>
        </div>
        <div className="col-lg-4">
          <h5 className="prefooter__header">Want More Instant Pot?</h5>
          <ul className="prefooter__links-list">
            <li className="links-list__item">
              <a href="https://instantpot.com/faq/getting-started-instant-pot/">
                Instant Pot
              </a>{' '}
              <span className="prefooter__link-desc">(official website)</span>
            </li>
            <li className="links-list__item">
              <a href="https://www.tasteofhome.com/collection/recipes-you-can-make-in-your-instant-pot/view-all/">
                66 Instant Pot Recipes
              </a>{' '}
              <span className="prefooter__link-desc">(tasteofhome.com)</span>
            </li>
            <li>
              <a href="https://www.foodnetwork.com/recipes/packages/comfort-foods/easy-comfort-food-recipes/must-try-instant-pot-recipes">
                Must-Try Instant Pot Recipes
              </a>{' '}
              <span className="prefooter__link-desc">(foodnetwork.com)</span>
            </li>
            <li className="links-list__item">
              <a href="https://www.allrecipes.com/recipes/22882/everyday-cooking/cookware-and-equipment/pressure-cooker/instant-pot/">
                Instant Pot Recipes
              </a>{' '}
              <span className="prefooter__link-desc">(allrecipes.com)</span>
            </li>
            <li className="links-list__item">
              <a href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=instant%20pot%20recipes">
                Instant Pot on Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
);

export default PreFooter;
