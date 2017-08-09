const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const GameSchema = new Schema({
    points: Integer,
    board: booleans,
    category: [catagory]
});

const CatagorySchema = new Schema({
    name: String,
    questions: [questions]
});

const QuestionSchema = new Schema({
    value: Integer,
    question: String,
    answer: String
});
const GameModel = mongoose.model("Game", GameSchema);
const CatagoryModel = mongoose.model("Catagory", CatagorySchema);
const QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = {
    Game: GameModel,
    Catagory: CatagoryModel,
    Question: QuestionModel
};