import express from "express"
import { PlaylistControler } from "../PlaylistController"

export const playlistRouter = express.Router()

const playlistController = new PlaylistControler()

//playlist.post("/create", musicController.createMusic)