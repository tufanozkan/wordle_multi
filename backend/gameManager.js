class GameManager {
  constructor() {
    this.rooms = [
      {
        roomId: "room4",
        playerCount: 0,
        player1: null,
        player2: null,
        word1: null,
        word2: null,
      },
      {
        roomId: "room5",
        playerCount: 0,
        player1: null,
        player2: null,
        word1: null,
        word2: null,
      },
      {
        roomId: "room6",
        playerCount: 0,
        player1: null,
        player2: null,
        word1: null,
        word2: null,
      },
      {
        roomId: "room7",
        playerCount: 0,
        player1: null,
        player2: null,
        word1: null,
        word2: null,
      },
    ];

    console.log(this.rooms);
  }

  // Odaya oyuncu ekleme
  addPlayerToRoom(roomid, playerid) {
    return new Promise((resolve, reject) => {
      this.rooms.forEach((room) => {
        if (room.roomId == roomid) {
          if (room.playerCount < 2) {
            console.log("Oyuncu eklendi " + playerid);
            room.playerCount++;
            if (room.player1 == null) {
              room.player1 = playerid;
            } else {
              room.player2 = playerid;
            }
            resolve("Oyuncu odaya eklendi.");
          } else {
            console.log("Oda dolu");
            reject(new Error("Oda dolu."));
          }
        }
      });
      // Eğer oda bulunamazsa
      reject(new Error("Oda bulunamadı."));
    });
  }

  addWords(roomid, word, player) {
    const room = this.rooms.find((room) => room.roomId === roomid);
    if (room) {
      if (room.player1 == player) {
        room.word1 = word;
        console.log("eklendi word1");
      }
      if (room.player2 == player) {
        room.word2 = word;
        console.log("eklendi word2");
      }
    } else {
      reject(new Error("Oda bulunamadı."));
    }
  }

  checkforReady(roomid) {
    const room = this.rooms.find((room) => room.roomId === roomid);
    if (room) {
      if (room.word1 !== null && room.word2 !== null) {
        return true;
      }
    }
    return false;
  }

  findWord(roomid, playerid) {
    const room = this.rooms.find((room) => room.roomId === roomid);
    if (room) {
      if (room.player1 == playerid) {
        return room.word2;
      }
      if (room.player2 == playerid) {
        return room.word1;
      }
    }
  }

  removePlayer(roomid, player) {
    const room = this.rooms.find((room) => room.roomId === roomid);
    if (room.player1 == player) {
      room.player1 = null;
      room.playerCount--;
    }
    if (room.player2 == player) {
      room.player2 = null;
      room.playerCount--;
    }
  }
}

module.exports = GameManager;
