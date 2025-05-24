"use client";

import { Column, Heading, Flex, Text, Grid } from "@/once-ui/components"; // Added Grid
import { ProjectCard } from "@/components"; // Assuming ProjectCard is in "@/components"

// --- SEPARATED DATA ARRAYS ---

const movieExperiencesData = [
  {
    slug: "movies-experiences",
    href: "experiences/movies",
    images: [
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Sultan (2016)",
        description: "First cinema experience with school friends during a school trip.",
        content: "Watched at Lucknow Public College as part of an NSO program. I bought a very costly 70 rupees pastry and enjoyed it without sharing due to extreme hunger.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Avengers: Infinity War (2018)",
        description: "Watched with family at Fun Mall, Lucknow.",
        content: "Had already watched a cam-recorded version but suggested it to family. They didn't quite understand what was going on.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Avengers: Endgame (2019)",
        description: "Best movie experience with school friends at Fun Mall, with many goosebumps moments.",
        content: "Enjoyed along with the audience and friends. Considered the best movie experience at that time.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Godzilla vs. Kong (2021)",
        description: "Watched with school friends at Wave Mall.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Venom: Let There Be Carnage (2021)",
        description: "Watched with school friends in Lucknow.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Shang-Chi and the Legend of the Ten Rings (2021)",
        description: "Enjoyed with friends.",
        content: "No specific location or anecdote provided beyond enjoyment.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Eternals (2021)",
        description: "Watched at Wave Mall.",
        content: "No specific 'watched with' or anecdote provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Resident Evil: Welcome to Raccoon City (2021)",
        description: "Watched the movie.",
        content: "No specific 'watched with', location, or anecdote provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Spider-Man: No Way Home (2021)",
        description: "Another best movie experience with school friends at Cinepolis One Awadh Centre, with many goosebumps moments.",
        content: "Considered another best movie experience.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Bhool Bhulaiyaa (2022)",
        description: "Watched with friends in Lucknow.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Doctor Strange in the Multiverse of Madness (2022)",
        description: "Watched with College friends at a mall in Shahdra.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Black Adam (2022)",
        description: "Watched with school friends at Phoenix Palasio.",
        content: "Traveled via metro and had chole kulche.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Brahmāstra: Part One – Shiva (2022)",
        description: "Watched with College friends at Gaur City Mall.",
        content: "Opinion: 'Bakwas movie' (worthless/bad movie).",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Insidious: The Red Door (2023)",
        description: "Watched with friends late night on a night out.",
        content: "After the movie, we had a party with drinks and Zomato order.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Mission: Impossible – Dead Reckoning Part One (2023)",
        description: "Watched with friends at Lulu Mall, Lucknow.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Jawan (2023)",
        description: "Watched with College friends at Gaur City Mall.",
        content: "Opinion: 'Badiya thi' (it was good).",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Deadpool & Wolverine (2024)",
        description: "Watched with college friends at VVIP Mall, Ghaziabad.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Venom: The Last Dance (2024)",
        description: "Watched with college friends at VVIP Mall, Ghaziabad.",
        content: "No specific anecdote or opinion provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Final Destination 6 (2025)",
        description: "Watched at Phoenix Palasio Mall.",
        content: "No specific 'watched with' or anecdote provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Mission: Impossible – Dead Reckoning Part Two (2025)",
        description: "Watched at Wave Mall.",
        content: "No specific 'watched with' or anecdote provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Shinchan: Dinosaur Diary (2025)",
        description: "Watched at Lulu Mall.",
        content: "No specific 'watched with' or anecdote provided.",
      },
      {
        src: "/images/experiences/movies/generic-movie.png", // Placeholder image
        title: "Thunderbolts (2025)",
        description: "Watched with friends at Fun Mall, Lucknow.",
        content: "No specific anecdote provided.",
      },
    ],
    avatars: [],
    link: "",
  },
];

const foodExperiencesData = [
  {
    slug: "family-restaurant-experiences",
    href: "experiences/restaurants",
    images: [
      {
        src: "/images/experiences/restaurants/family-dining-generic.png", // Generic placeholder
        title: "Aryan Family Restaurant, Lucknow",
        description: "Enjoying traditional family dining experiences.",
        content: "Gathering with family for memorable meals and quality time at this well-known Lucknow spot.",
      },
      {
        src: "/images/experiences/restaurants/family-dining-generic.png", // Generic placeholder
        title: "Delicious Point Restaurant, Sahara States",
        description: "Exploring local flavors with family.",
        content: "A casual dining spot offering tasty food for family outings in Sahara States.",
      },
      {
        src: "/images/experiences/restaurants/family-dining-generic.png", // Generic placeholder
        title: "Lucknow Kitchen",
        description: "Savoring the unique tastes of Lucknow with loved ones.",
        content: "Experiencing the rich culinary heritage of Lucknow, a perfect setting for family dinners.",
      },
      {
        src: "/images/experiences/restaurants/family-dining-generic.png", // Generic placeholder
        title: "Shaadi Invitation Dining",
        description: "Attending and enjoying food at wedding celebrations with family.",
        content: "Participating in joyous wedding feasts, a staple of family social gatherings, with a wide variety of delicious food.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "school-friends-restaurant-experiences",
    href: "experiences/school-friends-restaurants",
    images: [
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Mr. James, Engineering Chauraha",
        description: "Casual meetups and snacks with school friends.",
        content: "A popular spot for quick bites and conversations with friends after school or on weekends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Albaik",
        description: "Enjoying popular fast food options with school buddies.",
        content: "A go-to place for delicious and quick meals shared among friends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Sahara Gate Street Food Stalls",
        description: "Exploring diverse street food stalls with school friends.",
        content: "An exciting culinary journey through local street food, discovering new tastes and experiences together.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "1090 Chatori Gali",
        description: "Indulging in a variety of local delicacies with school friends.",
        content: "A famous food street offering a wide array of savory snacks and treats, perfect for a food crawl with friends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Lulu Mall Food Court",
        description: "Diverse dining choices for group hangouts with school friends.",
        content: "The convenience and variety of the mall food court made it an easy choice for gathering and trying different cuisines with friends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Phoenix Food Court",
        description: "Quick Bites at Phoenix Food Court",
        content: "Another mall food court that served as a regular spot for quick meals and social time with friends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Planetoz",
        description: "Combining entertainment with dining experiences with school friends.",
        content: "A place that offered more than just food, providing an enjoyable atmosphere for friends to hang out.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Burger King",
        description: "Classic Fast Food at Burger King",
        content: "A reliable choice for fast food cravings and casual meetups.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "School Canteen",
        description: "Daily Treats at the School Canteen",
        content: "The hub of daily school life, where quick snacks and lunch breaks were shared with classmates and friends.",
      },
      {
        src: "/images/experiences/restaurants/friends-casual-generic.png", // Generic placeholder
        title: "Deepu Bhai Canteen",
        description: "Local Favorites at Deepu Bhai Canteen",
        content: "A memorable local spot for specific dishes and friendly gatherings with school friends.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "college-food-experiences",
    href: "experiences/college-food",
    images: [
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "Sardar Ji Biryani",
        description: "Savoring delicious biryani during college days.",
        content: "A go-to spot for flavorful biryani, a favorite among college students for satisfying hunger.",
      },
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "Raja Sweets and Restaurant",
        description: "Enjoying sweets and meals at a popular college-area restaurant.",
        content: "A versatile spot for both quick snacks and full meals, a common hangout during college years.",
      },
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "SRM College Canteens (Red/Green)",
        description: "Daily meals and breaks at the college campus canteens.",
        content: "The regular dining spots within the SRM college, where quick meals and conversations filled the breaks between classes.",
      },
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "China Town",
        description: "Exploring Chinese cuisine near college.",
        content: "A popular choice for Chinese food cravings, offering a taste of Asian flavors during college outings.",
      },
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "Punjabi Chap Corner",
        description: "Indulging in Punjabi delicacies and street food.",
        content: "A vibrant spot for flavorful Punjabi snacks and quick meals, enjoyed with college friends.",
      },
      {
        src: "/images/experiences/restaurants/college-food-generic.png", // Generic placeholder
        title: "4am",
        description: "Late Night Bites at 4am",
        content: "Experiencing post-midnight food runs with college friends. The ultimate late-night food spot for hunger pangs during study sessions or after parties.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "intern-blr-food-experiences",
    href: "experiences/intern-blr-food",
    images: [
      {
        src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "Biryani Zest near Manyata Tech Park",
        description: "Enjoying flavorful biryani during the internship.",
        content: "A favorite spot for delicious biryani, perfect for lunch breaks or after-work meals.",
      },
      {
        src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "Domino's Nagawara",
        description: "Quick pizza runs during the internship.",
        content: "A convenient option for pizza cravings, ideal for group orders during lunch or late evenings.",
      },
      {
        src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "McDonald's Manyata Tech Park",
        description: "Classic fast food during internship days.",
        content: "A go-to place for quick and familiar fast food options near the tech park.",
      },
      {
        src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "Pot Biryani",
        description: "Trying unique pot biryani experiences.",
        content: "Exploring different styles of biryani served in pots, a flavorful culinary adventure.",
      },
      {
        src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "North Indian Restaurant (Name Unknown)",
        description: "Exploring North Indian cuisine.",
        content: "Enjoying a variety of North Indian dishes, from rich curries to tandoori delights.",
      },
      {
         src: "/images/experiences/restaurants/intern-food-generic.png",
        title: "Suman's Kitchen",
        description: "Home-style meals during the internship.",
        content: "A place offering home-style cooked meals, providing comfort and a taste of home.",
      },
    ],
    avatars: [],
    link: "",
  },
];

const funExperiencesData = [
  {
    slug: "fun-experiences",
    href: "experiences/fun",
    images: [
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder for new fun activities
        title: "VR Car Driving",
        description: "Immersive virtual reality car driving simulations (Lulu Mall Lucknow, Funtura).",
        content: "Experiencing the thrill of driving in a virtual world, a fun and exciting escape at Funtura, Lulu Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Shooting Games",
        description: "Engaging in competitive shooting activities (Lulu Mall Lucknow, Funtura).",
        content: "Participating in shooting games, testing aim and precision for an adrenaline rush at Funtura, Lulu Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Bumper Car Rides",
        description: "Thrilling and fun car colliding experiences (Lulu Mall Lucknow, Funtura).",
        content: "Enjoying the excitement of bumper cars, a classic fun activity for laughs and playful collisions at Funtura, Lulu Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Zero Gravity Experiences",
        description: "Simulating weightlessness in a fun setting (Lulu Mall Lucknow, Funtura).",
        content: "Feeling the sensation of zero gravity, a unique and memorable experience at Funtura, Lulu Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Roller Coaster Thrills",
        description: "Riding exhilarating roller coasters for an adrenaline rush (Lulu Mall Lucknow, Funtura).",
        content: "The excitement of twists, turns, and drops on a roller coaster, a classic fun adventure at Funtura, Lulu Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Biking Adventures with Sister",
        description: "Enjoying bike rides with your sister (Lulu Mall Lucknow, Funtura).",
        content: "Sharing fun and memorable moments while biking together at Funtura, Lulu Mall, exploring places on two wheels.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "VR Horror Ride (Fun Mall Lucknow)",
        description: "An intense virtual reality horror ride experience.",
        content: "Diving into a terrifying virtual world, a thrilling and chilling experience at Fun Mall.",
      },
      {
        src: "/images/experiences/fun/activity-generic.png", // Generic placeholder
        title: "Real-Life PUBG Shooting Game (Fun Mall Lucknow)",
        description: "Immersive real-life shooting game experience, like PUBG.",
        content: "Engaging in a tactical real-life shooting game, simulating the excitement of PUBG with friends at Fun Mall.",
      },
    ],
    avatars: [],
    link: "",
  },
];

// --- MAIN REACT COMPONENT ---

export default function LifeExperiences() {
  const formatSlugForDisplay = (slug: string) => {
    return slug
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' ') // Join back into a string
      .replace('Exp', 'Experiences') // Correct common abbreviation
      .replace('Blr', 'Bengaluru'); // Correct 'BLR' to 'Bengaluru'
  };

  return (
    <Column
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
      // Adjust maxWidth here if you want the content to be wider overall.
      // Example: maxWidth="l"
    >
      {/* Hero Section for the page */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="xl" // Increased vertical padding for a more spacious look
        className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-neutral-800 dark:to-neutral-950 text-white rounded-xl shadow-lg"
        style={{ borderRadius: '2rem' }} // More pronounced rounded corners
      >
        <Heading as="h1" wrap="balance" variant="display-strong-xl" className="text-center">
          Journey Through My Life&apos;s Tapestry
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" className="mt-4 text-center max-w-2xl px-4">
          A curated collection of cherished moments, from cinematic adventures to culinary delights and thrilling personal pursuits.
        </Text>
      </Column>

      {/* Main Content Sections */}
      <Column fillWidth flex={1} gap="xl"> {/* Increased gap between main sections */}

        {/* Movies Experiences Section */}
        <Column fillWidth gap="xl">
          <Heading as="h2" variant="heading-strong-xl" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 dark:from-cyan-400 dark:to-fuchsia-500">
            {formatSlugForDisplay(movieExperiencesData[0].slug)}
          </Heading>
          <Grid columns="1" mobileColumns="1" gap="l"> {/* Grid for section content */}
            <ProjectCard
              href={movieExperiencesData[0].href}
              images={movieExperiencesData[0].images}
              avatars={movieExperiencesData[0].avatars}
              link={movieExperiencesData[0].link}
            />
          </Grid>
        </Column>

        {/* Food Experiences Section */}
        <Column fillWidth gap="xl">
          <Heading as="h2" variant="heading-strong-xl" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 dark:from-lime-400 dark:to-teal-500">
            Food Experiences
          </Heading>
          {/* Suggestion for UI Arrangement in Food Experiences:
              Since food experiences are categorized (Family, School, College, Intern),
              we can create subsections for each category.
              Each subsection will have its own sub-heading and display its items.
              The ProjectCard component is assumed to be capable of rendering a grid of items
              from its 'images' prop. This allows each food sub-category to have its own
              visually distinct group of cards.
          */}
          {foodExperiencesData.map((foodCategory) => (
            <Column key={foodCategory.slug} fillWidth gap="l">
              <Heading as="h3" variant="heading-strong-m" className="text-neutral-700 dark:text-neutral-200 mt-8">
                {formatSlugForDisplay(foodCategory.slug)}
              </Heading>
              {/* ProjectCard handles the grid/layout of items for this specific food category */}
              <ProjectCard
                href={foodCategory.href}
                images={foodCategory.images}
                avatars={foodCategory.avatars}
                link={foodCategory.link}
              />
            </Column>
          ))}
        </Column>

        {/* Fun Experiences Section */}
        <Column fillWidth gap="xl">
          <Heading as="h2" variant="heading-strong-xl" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 dark:from-fuchsia-400 dark:to-red-500">
            {formatSlugForDisplay(funExperiencesData[0].slug)}
          </Heading>
          <Grid columns="1" mobileColumns="1" gap="l"> {/* Grid for section content */}
            <ProjectCard
              href={funExperiencesData[0].href}
              images={funExperiencesData[0].images}
              avatars={funExperiencesData[0].avatars}
              link={funExperiencesData[0].link}
            />
          </Grid>
        </Column>

      </Column>

      {/* Footer / Call to Action Section */}
      <Flex
        fillWidth
        horizontal="center"
        paddingY="64"
        className="bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md mt-40"
        direction="column"
        gap="l"
      >
        <Heading as="h3" variant="heading-strong-xl" className="text-center text-neutral-800 dark:text-neutral-100">
          Curious for More?
        </Heading>
        <Text variant="body-default-m" className="text-center max-w-xl text-neutral-600 dark:text-neutral-300 px-4">
          Every experience shapes who we are. Explore more details or connect to share your own memorable moments!
        </Text>
        {/* You can add a button here, e.g., <Button label="Get in Touch" href="/contact" /> */}
      </Flex>
    </Column>
  );
}