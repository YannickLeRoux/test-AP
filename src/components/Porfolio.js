import React from 'react';

import Card from './Card';

import '../assets/css/Portfolio.css';

import image1 from '../assets/img/1.png';
import image2 from '../assets/img/2.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Card
        className="portfolio1"
        image={image1}
        title="Regional Cuisine Down Home Southern Cooking"
        description="The quick, brown fox jumps over a lazy dog.
        DJs flock by when MTV ax quiz prog.
        Junk MTV quiz graced by fox whelps.
        Bawds jog, flick quartz, vex nymphs."
      />
      <Card
        className="portfolio2"
        image={image2}
        title="Pos Hardware More Options In Less Space"
        description="The quick, brown fox jumps over a lazy dog.
        DJs flock by when MTV ax quiz prog.
        Junk MTV quiz graced by fox whelps.
        Bawds jog, flick quartz, vex nymphs."
      />
    </section>
  );
};

export default Portfolio;
