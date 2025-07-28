// Izarra Villareal CS 81 JavaScript Module 10 Assignment 10B Dynamic Profile

// GitHub URL: https://github.com/izzyduzzzit/module10a-profile

// Import Profile component
import Profile from './Profile';

// App parent function with user data that will be inherited into Profile component as props
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Climbing Athlete Profiles</h1>
      
      <Profile 
        name="Lynn Hill"
        occupation="Professional rock climber"
        funFact="First person to free climb El Capitan's 'The Nose' route"
        bio="Widely regarded as one of the leading competition climbers, traditional climbers (and particularly big wall climbers), sport climbers, and boulderers in the world during the late 1980s and early 1990s, she is famous for making the first free ascent of the difficult sheer rock face of The Nose on El Capitan in Yosemite Valley, and for repeating it the next year in less than 24 hours. She has been described as both one of the best female climbers in the world and one of the best climbers in the history of the sport."
      />
      
      <Profile 
        name="Alex Puccio"
        occupation="Professional boulderer"
        funFact="Multiple World Cup winner and one of the strongest female climbers"
        bio="She competes in climbing competitions and split her time between climbing outdoor and indoor. She finished third overall in the 2011 and 2013 World Cup bouldering competition, second overall in the 2014 Climbing World Championship bouldering competition, and has won the American Bouldering Series eleven times."
      />
      
      <Profile 
        name="Sasha DiGiulian"
        occupation="Sport & big wall climber"
        funFact="First North American woman to climb grade 5.14d"
        bio="She has climbed over 30 First Female Ascents and over a dozen significant First Ascents, including Rolihlahla in South Africa, a Big Wall in Brazil in 2016, and The Misty Wall in Yosemite National Park in 2017. In 2011 she redpointed multiple 5.14c, onsighted two of 5.14a and four of 5.13d. In 2013, she was the first American woman to redpoint Era Vella 5.14d, and established the First Female Ascent of Alpine Big Wall route, Bellavista, 5.14b."
      />
    </div>
  );
}

export default App;
