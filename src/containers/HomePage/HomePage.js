import React from 'react';

import './HomePage.scss';

export default function HomePage() {
  return (
      <div className='home-page'>
          <h1>Several facts about cats</h1>
          <section className='home-page__section home-page__section--one'>
                  <div className='home-page__text'>
                      <p>Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice. They can also see in near darkness.</p>
                      <p>Cats rub up against your leg to make you smell like a cat. The more you smell like them the more they like being around you. Also, they are letting other cats know that you are their own special friend. They are depositing their scent, or marking their territory, on you. A cat will rub its head or the side of its chin against you, the furniture, or any object.
                          Cats have glands on their forehead, mouth and chin that produce pheromones and they transfer these onto objects.</p>
                      <p>To aid with navigation and sensation, cats have dozens of movable whiskers over their body, especially their face.
                          These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents.</p>
                  </div>
          </section>
          <section className='home-page__section home-page__section--two'>
              <div className='home-page__text home-page__text--two'>
                  <p>The average life expectancy for male indoor cats at birth is around 12 to 14 years. However, there have been reports of cats reaching into their 30s, with the oldest known cat,
                      Creme Puff, dying at a verified age of 38.</p>
                  <p>Cats usually sleep 12-16 hours a day, although some cats can sleep as much as 20 hours in a 24-hour period. The term "cat nap" for a short rest refers to the cat's tendency to fall asleep (lightly) for a brief period.
                      While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests that they are dreaming.</p>
                  <p>Types of body language, including position of ears and tail, relaxation of whole body, and kneading of paws, are all indicators of mood.
                      The tail and ears are particularly important social signal mechanisms in cats e.g. with a raised tail acting as a friendly greeting, and flattened ears indicating hostility.</p>
              </div>
          </section>
          <section className='home-page__section home-page__section--third'>
              <div className='home-page__text'>
                 <p>Cats are known for their cleanliness, spending many hours licking their coats. If you have ever been licked by a cat, you have probably noticed that their tongues feel like sandpaper.
                     Cats use their tongue to brush their fur and keep it smooth.</p>
                  <p>Owing to the close similarity between play and hunting, cats prefer to play with objects that resemble prey, such as small furry toys that move rapidly, but rapidly lose interest (they become habituated) in a toy they have played with before.
                      Cats also tend to play with toys more when they are hungry.</p>
                  <p>Cats often press against you with their paws. Kittens get milk by nursing from their mother. They press against their mother with one paw and then the other. This is called "kneading". Kneading helps the mother cat give milk to the kittens.
                      When adult cats knead with their paws, it reminds them of their mother when they were a kitten.</p>
              </div>
          </section>
      </div>
  )
}
