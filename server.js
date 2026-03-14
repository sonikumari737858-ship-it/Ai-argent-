import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import chatRoutes from "./routes/chat.js"
import imageRoutes from "./routes/image.js"
import videoRoutes from "./routes/video.js"
import voiceRoutes from "./routes/voice.js"
import musicRoutes from "./routes/music.js"
import codeRoutes from "./routes/code.js"
import gameRoutes from "./routes/game.js"
import storyRoutes from "./routes/story.js"
import memeRoutes from "./routes/meme.js"
import thumbnailRoutes from "./routes/thumbnail.js"
import docsRoutes from "./routes/documents.js"
import arenaRoutes from "./routes/arena.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/chat", chatRoutes)
app.use("/api/image", imageRoutes)
app.use("/api/video", videoRoutes)
app.use("/api/voice", voiceRoutes)
app.use("/api/music", musicRoutes)
app.use("/api/code", codeRoutes)
app.use("/api/game", gameRoutes)
app.use("/api/story", storyRoutes)
app.use("/api/meme", memeRoutes)
app.use("/api/thumbnail", thumbnailRoutes)
app.use("/api/docs", docsRoutes)
app.use("/api/arena", arenaRoutes)

app.listen(5000, () => {
 console.log("ArenaAI Backend Running")
})
