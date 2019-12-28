import { Message } from "discord.js";
import { Log, LOG_LEVEL } from "../Common";
import { Command } from "../../@types";

interface Map {
  name: string;
  humanName: string;
  aliases?: string[];
  floors: number;
}

const AllMaps: Map[] = [
  {
    name: "bank",
    humanName: "Bank",
    floors: 4
  },
  {
    name: "border",
    humanName: "Border",
    floors: 3
  },
  {
    name: "chalet",
    humanName: "Chalet",
    floors: 4
  },
  {
    name: "clubhouse",
    humanName: "Clubhouse",
    aliases: ["club house", "club-house"],
    floors: 4
  },
  {
    name: "coastline",
    humanName: "Coastline",
    aliases: ["coast line", "coast-line"],
    floors: 4
  },
  {
    name: "consulate",
    humanName: "Consulate",
    floors: 4
  },
  {
    name: "favela",
    humanName: "Favela",
    floors: 5
  },
  {
    name: "fortress",
    humanName: "Fortress",
    floors: 3
  },
  {
    name: "hereford",
    humanName: "Hereford Base",
    aliases: ["hereford base", "hereford-base"],
    floors: 5
  },
  {
    name: "house",
    humanName: "House",
    floors: 4
  },
  {
    name: "kafe",
    humanName: "Kafe Dostoyevsky",
    aliases: [
      "kafe-dostoyevsky",
      "kafe dostoyevsky",
      "cafe",
      "cafe-dostoyevsky",
      "cafe dostoyevsky",
      "dostoyevsky"
    ],
    floors: 4
  },
  {
    name: "kanal",
    humanName: "Kanal",
    aliases: ["canal"],
    floors: 5
  },
  {
    name: "oregon",
    humanName: "Oregon",
    floors: 5
  },
  {
    name: "outback",
    humanName: "Outback",
    floors: 4
  },
  {
    name: "plane",
    humanName: "Presidential Plane",
    aliases: ["presidential plane", "presidential-plane", "presidential"],
    floors: 4
  },
  {
    name: "skyscraper",
    humanName: "Skyscraper",
    floors: 4
  },
  {
    name: "themepark",
    humanName: "Theme Park",
    aliases: ["theme park", "theme"],
    floors: 3
  },
  {
    name: "tower",
    humanName: "Tower",
    floors: 4
  },
  {
    name: "villa",
    humanName: "Villa",
    floors: 5
  },
  {
    name: "yacht",
    humanName: "Yacht",
    floors: 5
  }
];

const command: Command = {
  name: "getmap",
  aliases: [
    "map",
    "findmap",
    "blueprint",
    "getblueprint",
    "blueprints",
    "getblueprints"
  ],
  description: `Provides the floorplans of a Siege map via its name.
  
  Usage:
  getmap <mapname>
  
  Available maps:
  ${AllMaps.map(map => {
    return map.name;
  }).join(", ")}`,

  function: (message, args) => {
    const MapName = args.join(" ").toLowerCase();

    Log(`"${MapName}"`);

    let MapInfo: Map = null;

    AllMaps.forEach(map => {
      if (
        map.name === MapName ||
        (map.aliases && map.aliases.includes(MapName))
      ) {
        MapInfo = map;
      }
    });

    if (MapInfo === null) {
      message.reply(
        `Map name not recognised. Please pick from the following:\n\n${AllMaps.map(
          map => {
            return map.name;
          }
        ).join(", ")}`
      );
      return;
    }

    message.reply(`${MapInfo.humanName} has ${MapInfo.floors} floors.`, {
      file: `./images/map-blueprints/${MapInfo.name}/all.jpg`
    });
  }
};

export default command;
