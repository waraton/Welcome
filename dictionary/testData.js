const testData = [
  {
    word: "hello",
    phonetics: [
      {
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=75797336",
        license: {
          name: "BY-SA 4.0",
          url: "https://creativecommons.org/licenses/by-sa/4.0",
        },
      },
      {
        text: "/həˈləʊ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9021983",
        license: {
          name: "BY 3.0 US",
          url: "https://creativecommons.org/licenses/by/3.0/us",
        },
      },
      { text: "/həˈloʊ/", audio: "" },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: '"Hello!" or an equivalent greeting.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ["greeting"],
        antonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: 'To greet with "hello".',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "interjection",
        definitions: [
          {
            definition:
              "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
            synonyms: [],
            antonyms: [],
            example: "Hello, everyone.",
          },
          {
            definition: "A greeting used when answering the telephone.",
            synonyms: [],
            antonyms: [],
            example: "Hello? How may I help you?",
          },
          {
            definition:
              "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
            synonyms: [],
            antonyms: [],
            example: "Hello? Is anyone there?",
          },
          {
            definition:
              "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
            synonyms: [],
            antonyms: [],
            example:
              "You just tried to start your car with your cell phone. Hello?",
          },
          {
            definition: "An expression of puzzlement or discovery.",
            synonyms: [],
            antonyms: [],
            example: "Hello! What’s going on here?",
          },
        ],
        synonyms: [],
        antonyms: ["bye", "goodbye"],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/hello"],
  },
];
const testData2 = [
  {
    word: "king",
    phonetic: "/kɪŋ/",
    phonetics: [
      {
        text: "/kɪŋ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/king-uk.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9027599",
        license: {
          name: "BY 3.0 US",
          url: "https://creativecommons.org/licenses/by/3.0/us",
        },
      },
      {
        text: "/kiŋ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/king-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=643251",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A male monarch; a man who heads a monarchy. If it's an absolute monarchy, then he is the supreme ruler of his nation.",
            synonyms: [],
            antonyms: [],
            example: "Henry VIII was the king of England from 1509 to 1547.",
          },
          {
            definition: "A powerful or majorly influential person.",
            synonyms: [],
            antonyms: [],
            example: 'Howard Stern styled himself as the "king of all media".',
          },
          {
            definition: "Something that has a preeminent position.",
            synonyms: [],
            antonyms: [],
            example: "In times of financial panic, cash is king.",
          },
          {
            definition: "A component of certain games.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "A king skin.",
            synonyms: [],
            antonyms: [],
            example: "Oi mate, have you got kings?",
          },
          {
            definition: "A male dragonfly; a drake.",
            synonyms: [],
            antonyms: [],
          },
          { definition: "A king-sized bed.", synonyms: [], antonyms: [] },
          { definition: "A male person.", synonyms: [], antonyms: [] },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To crown king, to make (a person) king.",
            synonyms: [],
            antonyms: [],
          },
          { definition: "To rule over as king.", synonyms: [], antonyms: [] },
          {
            definition: "To perform the duties of a king.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To assume or pretend preeminence (over); to lord it over.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To promote a piece of draughts/checkers that has traversed the board to the opposite side, that piece subsequently being permitted to move backwards as well as forwards.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "To dress and perform as a drag king.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/king"],
  },
  {
    word: "king",
    phonetic: "/kɪŋ/",
    phonetics: [
      {
        text: "/kɪŋ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/king-uk.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9027599",
        license: {
          name: "BY 3.0 US",
          url: "https://creativecommons.org/licenses/by/3.0/us",
        },
      },
      {
        text: "/kiŋ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/king-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=643251",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "A sounding stone, a Chinese musical instrument.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: [
      "https://en.wiktionary.org/wiki/king",
      "https://en.wiktionary.org/wiki/qing",
    ],
  },
];
