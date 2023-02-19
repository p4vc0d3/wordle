import Tile from "./Tile";

export default {
    guessesAllowed: 3,
    currentRowIndex: 0,
    theWord: "cat",
    state: "active",
    message: "",

    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join("");
    },

    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.theWord.length },
                () => new Tile()
            );
        });
    },

    onKeyPress(key) {
        this.message = "";

        if (/^[A-Za-z]$/.test(key)) {
            this.fillTile(key);
        } else if (key === "Enter") {
            this.submitGuess();
        }
    },

    fillTile(key) {
        for (let tile of this.currentRow) {
            if (tile.letter === "") {
                tile.fill(key);
                break;
            }
        }
    },
    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    submitGuess() {
        let guess = this.currentGuess;

        if (guess.length < this.theWord.length) {
            return;
        }

        this.refreshStatusForCurrentRow();

        if (guess === this.theWord) {
            this.message = "You Win!";
        } else if (this.guessesAllowed === this.currentRowIndex + 1) {
            this.message = "Game Over. You Lose.";
            this.state = "complete";
        } else {
            this.message = "Incorrect";
            this.currentRowIndex++;
        }
    },
    refreshStatusForCurrentRow() {
        this.currentRow.forEach((tile, index) => {
            tile.status = this.theWord.includes(tile.letter) ? 'present' : 'absent';

            if (this.currentGuess[index] === this.theWord[index]) {
                tile.status = 'correct';
            }
        });
    }
};
