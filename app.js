

//  Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

// Import and link the newly created file
const personnageCharactersRoutes = require("./routes/personnage-character.routes");
app.use("/", personnageCharactersRoutes);


/*  ...  */
