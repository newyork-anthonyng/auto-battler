const data = [
  {
    from: null,
    to: null,
    description: "initial",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 1 },
      { id: "team1.2", name: "fish", attack: 2, health: 3 }
    ],
    team2: [
      { id: "team2.1", name: "cricket", attack: 2, health: 1 },
      { id: "team2.2", name: "pig", attack: 3, health: 2 }
    ]
  },
  {
    from: "team1.1",
    to: "team2.2",
    description: "mosquito.effect",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 1 },
      { id: "team1.2", name: "fish", attack: 2, health: 3 }
    ],
    team2: [
      { id: "team2.1", name: "cricket", attack: 2, health: 1 },
      { id: "team2.2", name: "pig", attack: 3, health: 1 }
    ]
  },

  {
    from: "team1.1",
    to: "team2.1",
    description: "battle",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 0 },
      { id: "team1.2", name: "fish", attack: 2, health: 3 }
    ],
    team2: [
      { id: "team2.1", name: "cricket", attack: 2, health: 0 },
      { id: "team2.2", name: "pig", attack: 3, health: 1 }
    ]
  },
  {
    from: "team2.1",
    to: "team2.1",
    description: "cricket.effect",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 0 },
      { id: "team1.2", name: "fish", attack: 2, health: 3 }
    ],
    team2: [
      { id: "team2.1", name: "cricket.zombie", attack: 1, health: 1 },
      { id: "team2.2", name: "pig", attack: 3, health: 1 }
    ]
  },

  {
    from: "team1.2",
    to: "team2.1",
    description: "battle",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 0 },
      { id: "team1.2", name: "fish", attack: 2, health: 2 }
    ],
    team2: [
      { id: "team2.1", name: "cricket.zombie", attack: 1, health: 0 },
      { id: "team2.2", name: "pig", attack: 3, health: 1 }
    ]
  },

  {
    from: "team1.2",
    to: "team2.2",
    description: "battle",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 0 },
      { id: "team1.2", name: "fish", attack: 2, health: 1 }
    ],
    team2: [
      { id: "team2.1", name: "cricket.zombie", attack: 1, health: 0 },
      { id: "team2.2", name: "pig", attack: 3, health: 0 }
    ]
  },

  {
    result: "Team1",
    team1: [
      { id: "team1.1", name: "mosquito", attack: 1, health: 0 },
      { id: "team1.2", name: "fish", attack: 2, health: 1 }
    ],
    team2: [
      { id: "team2.1", name: "cricket.zombie", attack: 1, health: 0 },
      { id: "team2.2", name: "pig", attack: 3, health: 0 }
    ]
  }
];

module.exports = data;
