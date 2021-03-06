import {model, Schema} from "mongoose";


const matchSchema = new Schema({
    winner: {type: String},
    looser: {type: String},
    result: {type: String},
    time: {type: Date},
    costs: {type: Number},

}, {_id: false});


const playerSchema = new Schema({
    name: {type: String},
    score: {type: Number},
    totalGames: {type: Number},
    wins: {type: Number},
    losses: {type: Number},
    matches: [matchSchema]
});

export const PLAYER = model("Player", playerSchema);
export const MATCH = model("Match", matchSchema);