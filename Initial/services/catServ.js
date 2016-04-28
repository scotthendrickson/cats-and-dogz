angular.module("rainingCatzAndDogz").service("catServ", function() {
  this.allCats = [{
    breed: "Abyssinian",
    image: "./images/Abyssinian.jpg",
    activity: "High",
    affection: "Moderate-High",
    description: "Abyssinians aren't for those who want decorative cats to match the rust-colored carpet, or for those who want cats that enjoy being picked up and cuddled. Courageous, curious, and high-spirited, when restrained Abys tend to become struggling bundles of fur with more than the usual number of elbows; however, that's not to say that Abyssinians are aloof or standoffish. While Abyssinians will cheerfully entertain themselves, they are most happy when involved in every aspect of your life. They are particularly involved at dinnertime. In fact, you'll know it's dinnertime when small, furry, food-seeking missiles attach themselves to your legs!"
  },{
    breed: "Bengal",
    image: "./images/Bengal.jpg",
    activity: "High",
    affection: "Moderate-High",
    description: "The Bengal may look like a wild cat, but breeders insist that the Bengal is as lovably friendly and docile as any full-blooded domestic cat. Fanciers describe Bengals as playful, gregarious, and energetic cats that have a generous dose of feline curiosity and that want to be involved with their family. Not intimidated by water, they will sometimes join their family for a swim, as long as it's on their terms."
  },{
    breed: "Cornish Rex",
    image: "./images/CornishRex.jpg",
    activity: "High",
    affection: "Moderate-High",
    description: "Cornish Rexes are good for folks who like having their lives run by active, inquisitive, gazelle-like felines that love a good joke, as long as it's not on them. Everything is a game to the Cornish Rex, and they can be hard to ignore when they're in a sociable mood, which is most of the time. Rexes are determinedly outgoing with their favorite humans. With their warm suede feel, they make the perfect winter lap warmer, too. They are intelligent, alert, and usually easy to handle."
  },{
    breed: "Exotic Shorthair",
    image: "./images/ExoticShorthair.jpg",
    activity: "Low",
    affection: "High",
    description: "Some folks who don't appreciate that laid-back, mellow personality label Persians and their relatives 'furniture with fur', but in truth Exotics are playful and enjoy a good game of catching the catnip mouse between bouts of catching a few ZZZs. Because of the American Shorthair influence, Exotics are reported to be livelier than Persians, although some breeders say that the two breeds are very similar in temperament."
  },{
    breed: "Javanese",
    image: "./images/Javanese.jpg",
    activity: "Moderate-High",
    affection: "Moderate-High",
    description: "Javanese cats, like their Balinese relatives, are playful, devoted, and always eager to tell you their views on life, love, and what you've served them for dinner. Javanese (and their Siamese relatives) have a fascination with food, and, while some will burn off the extra calories in playful antics, care must be taken that the less active don't turn into butterballs."
  },{
    breed: "Munchkin",
    image: "./images/Munchkin.jpg",
    activity: "Moderate",
    affection: "Moderate",
    description: "For their part, Munchkins, oblivious to the controversy surrounding them, go on being just what they are, cats; self-assured and outgoing. They love to wrestle and play with their long-legged feline friends, happily unaware that there's anything different about them. Nor do their feline companions treat them like members of the vertically challenged. Only humans look at them askance."
  },{
    breed: "Oriental",
    image: "./images/Oriental.jpg",
    activity: "Moderate-High",
    affection: "Moderate-High",
    description: "The personality of the Oriental is as distinctive as the multicolored exterior. They are natural entertainers, full of enthusiasm, energy, and the belief that the world should revolve around them. Haughty and royal one minute, they are animated and inquisitive the next. They are highly curious, and will go to great lengths to be involved in your activities."
  },{
    breed: "Persian",
    image: "./images/Persian.jpg",
    activity: "Low",
    affection: "Moderate-High",
    description: "If you want your cats bouncing around like hyperactive popcorn, don't buy a Persian. Persians are perfect companions, if you like placid, sweet-tempered cats. Don't count on using your Persian pal as a furry doorstop, however. They love to play between periods of regal lounging on your favorite davenport. Proponents say that Persians do not deserve their 'furniture with fur' reputation, they are intelligent, just not as inquisitive as some breeds, and not as active."
  },{
    breed: "Siamese",
    image: "./images/Siamese.jpg",
    activity: "Moderate-High",
    affection: "Moderate-High",
    description: "Some cats seem to think that a purr or a friendly rub speaks louder than words. Siamese are not of this school of thought and are known for their talent for communicating their ideas and desires clearly to their chosen humans. If you can't be drawn into dialogue, they're happy to keep up a running monologue for your enlightenment. No meaningless meows, these, but real attempts at communication, according to Siamese fans. To some cat lovers, who prefer their felines to be seen and not heard, the Siamese rasp (some would say yowl) can be a bit annoying. But Siamese worshipers wouldn't have it any other way."
  },{
    breed: "Sphynx",
    image: "./images/Sphynx.jpg",
    activity: "Moderate-High",
    affection: "High",
    description: "According to the French breed standard, the Sphynx is part monkey, part dog, part child, and part cat. The breed does seem to possess some personality traits of each, despite what geneticists might say about such a combination. To say Sphynxes are lively is an understatement; they perform monkey-like aerialist feats from the top of doorways and bookshelves. Very devoted and loyal, they follow their humans around, wagging their tails doggy fashion and purring with affection. They demand your unconditional attention and are as mischievous (and lovable) as children. And despite all that and their alien appearance, they are completely cats, with all the mystery and charm that has fascinated humankind for thousands of years. While the Sphynx may not be for everyone, his unique appearance and charming temperament has won him an active, enthusiastic following."
  }];
});
