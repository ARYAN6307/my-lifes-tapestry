// components/work/Projects.tsx
"use client"; // This is a Client Component

import { Column, Grid, Heading, Flex, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components"; // Ensure this path is correct for ProjectCard

// The provided projectsData is hardcoded here
const projectsData = [
  {
    slug: "outdoor-games",
    category: "Games",
    type: "Outdoor",
    href: "work/outdoor-games",
    images: [
      {
        src: "/images/games/outdoor/cricket.png",
        title: "Cricket",
        description: "Played with friends at Sahara Stadium and park, including senior and junior boys.",
        content: "A popular team sport where I bonded with friends and neighbors through evening matches.",
      },
      {
        src: "/images/games/outdoor/football.png",
        title: "Football",
        description: "Played in the evening under floodlights at Sahara Stadium and park.",
        content: "Intense, fast-paced game that boosted teamwork and stamina.",
      },
      {
        src: "/images/games/outdoor/basketball.png",
        title: "Basketball",
        description: "Played in school during games period.",
        content: "Enjoyed playing despite injuring my finger once. Competitive and thrilling.",
      },
      {
        src: "/images/games/outdoor/badminton.png",
        title: "Badminton",
        description: "Played near Sahara Park after passing 12th in 2021.",
        content: "Quick reflex sport that became a great post-school hobby.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "indoor-games",
    category: "Games",
    type: "Indoor",
    href: "work/indoor-games",
    images: [
      {
        src: "/images/games/indoor/chess.png",
        title: "Chess",
        description: "Played with friends in school and at Sahara States.",
        content: "Strategic board game that taught patience and foresight.",
      },
      {
        src: "/images/games/indoor/ludo.png",
        title: "Ludo",
        description: "Played with friends during breaks in school.",
        content: "Fun dice-based board game that brought lots of laughter.",
      },
      {
        src: "/images/games/indoor/carrom.png",
        title: "Carrom",
        description: "Played at Sahara States community center.",
        content: "Aiming and flicking coins with precision was satisfying.",
      },
      {
        src: "/images/games/indoor/uno.png",
        title: "UNO",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "Card game full of reversals, skips, and wild cards—always unpredictable.",
      },
      {
        src: "/images/games/indoor/rajamantri.png",
        title: "Rajamantri Chor Sipahi",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "A fun social deduction game involving roles and quick guesses.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "online-games",
    category: "Games",
    type: "Online",
    href: "work/online-games",
    images: [
      {
        src: "/images/games/online/freefire.png",
        title: "Free Fire",
        description: "Played since 2019, still actively playing.",
        content: "Battle royale with fast-paced action and strategic gunfights.",
      },
      {
        src: "/images/games/online/pokemon.png",
        title: "Pokemon Games",
        description: "Played FireRed, DarkGrey, Hey Monster, Pocketown, Pokeland Legends, and Go.",
        content: "Adventure-filled creature collecting and turn-based battles.",
      },
      {
        src: "/images/games/online/cod.png",
        title: "Call of Duty (COD)",
        description: "Played free-for-all rounds with friends.",
        content: "High-octane shooter with impressive graphics and team strategy.",
      },
      {
        src: "/images/games/online/amongus.png",
        title: "Among Us / Suspects",
        description: "Played with friends in 2021 after school.",
        content: "Hilarious deception game with impostors and crewmates.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "card-collections",
    category: "Collections",
    type: "Cards",
    href: "work/card-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png",
        title: "Pokemon Cards",
        description: "Collected a pack worth ₹1000 in 9th class. Focused on legendary, mega evolution, and EX cards.",
        content: "Traded with friends and built a powerful collection.",
      },
      {
        src: "/images/games/cards/world.png",
        title: "Wonders of the World Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Fun educational card game about famous landmarks.",
      },
      {
        src: "/images/games/cards/animals.png",
        title: "Animals Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Enjoyed comparing animal stats and playing competitively.",
      },
      {
        src: "/images/games/cards/places.png",
        title: "Places Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Cards about famous global places—boosted general knowledge.",
      },
      {
        src: "/images/games/cards/angrybirds.png",
        title: "Angry Birds Cards",
        description: "Collected 20+ free cards from Kurkure Puffcorn packs.",
        content: "Short, collectible cards featuring Angry Birds characters.",
      },
      {
        src: "/images/games/cards/pokemonevo.png",
        title: "Pokemon Evolution Cards",
        description: "Collected 20+ cards from Chocos packs.",
        content: "Evolved form cards of favorite Pokémon. Loved opening cereal packs.",
      },
      {
        src: "/images/games/cards/avengers.png",
        title: "Avengers Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Battle-style Marvel hero cards. Lots of fun battles.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "sticker-collections",
    category: "Collections",
    type: "Stickers",
    href: "work/sticker-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png", // Reusing image for example
        title: "Tazos & Stickers",
        description: "Collected Tazos from Lays/Cheetos and stickers from various snacks.",
        content: "A childhood passion of collecting and trading. Tazos were especially popular.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "stamp-collections",
    category: "Collections",
    type: "Stamps",
    href: "work/stamp-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png", // Reusing image for example
        title: "Stamp Collection",
        description: "Collected various stamps, especially commemorative ones.",
        content: "A fascinating hobby of exploring history and and geography through stamps.",
      },
    ],
    avatars: [],
    link: "",
  },
];

// No props needed for Projects component anymore
export function Projects() {
  // Filter projects into their respective categories
  const outdoorGames = projectsData.filter(p => p.category === "Games" && p.type === "Outdoor");
  const indoorGames = projectsData.filter(p => p.category === "Games" && p.type === "Indoor");
  const onlineGames = projectsData.filter(p => p.category === "Games" && p.type === "Online");
  const cardCollections = projectsData.filter(p => p.category === "Collections" && p.type === "Cards");

  const gridColumns = "1"; // This is for the *inner* grids of project cards

  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* NEW: Wrap the sections in a Grid for 2x2 layout of the sections themselves */}
      <Grid columns="2" mobileColumns="1" gap="0">
        {outdoorGames.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40">
            <Heading as="h3" variant="heading-strong-xl" className="text-orange-600 dark:text-orange-400">
              Outdoor Games
            </Heading>
            <Grid columns={gridColumns} mobileColumns="1" gap="l">
              {outdoorGames.map((project) => (
                <ProjectCard
                  key={project.slug}
                  href={project.href}
                  images={project.images}
                  avatars={project.avatars}
                  link={project.link}
                />
              ))}
            </Grid>
          </Column>
        )}

        {indoorGames.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40">
            <Heading as="h3" variant="heading-strong-xl" className="text-blue-600 dark:text-blue-400">
              Indoor Games
            </Heading>
            <Grid columns={gridColumns} mobileColumns="1" gap="l">
              {indoorGames.map((project) => (
                <ProjectCard
                  key={project.slug}
                  href={project.href}
                  images={project.images}
                  avatars={project.avatars}
                  link={project.link}
                />
              ))}
            </Grid>
          </Column>
        )}

        {onlineGames.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40">
            <Heading as="h3" variant="heading-strong-xl" className="text-purple-600 dark:text-purple-400">
              Online Games
            </Heading>
            <Grid columns={gridColumns} mobileColumns="1" gap="l">
              {onlineGames.map((project) => (
                <ProjectCard
                  key={project.slug}
                  href={project.href}
                  images={project.images}
                  avatars={project.avatars}
                  link={project.link}
                />
              ))}
            </Grid>
          </Column>
        )}

        {cardCollections.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40">
            <Heading as="h3" variant="heading-strong-xl" className="text-green-600 dark:text-green-400">
              Card Collections
            </Heading>
            <Grid columns={gridColumns} mobileColumns="1" gap="l">
              {cardCollections.map((project) => (
                <ProjectCard
                  key={project.slug}
                  href={project.href}
                  images={project.images}
                  avatars={project.avatars}
                  link={project.link}
                />
              ))}
            </Grid>
          </Column>
        )}
      </Grid> {/* End of the new Grid */}

      {/* Fallback for no projects, though with hardcoded data it should always display something */}
      {outdoorGames.length === 0 && indoorGames.length === 0 && onlineGames.length === 0 && cardCollections.length === 0 && (
        <Flex horizontal="center" paddingY="xl">
          <Text variant="body-default-m" onBackground="neutral-weak">
            No game or collection projects found.
          </Text>
        </Flex>
      )}
    </Column>
  );
}