const sqlite3 = require("sqlite3").verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database(
  "./maBaseDeDonnees.sqlite",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error("Erreur de connexion à SQLite :", err.message);
    } else {
      console.log("Connexion réussie à SQLite.");

      // Vérifier si la colonne 'adresse' existe déjà
      db.all("PRAGMA table_info(personnes);", (err, rows) => {
        if (err) {
          console.error(
            "Erreur lors de la vérification de la table :",
            err.message
          );
          return;
        }

        const columnExists = rows.some((col) => col.name === "adresse");
        if (!columnExists) {
          console.log("Ajout de la colonne 'adresse'...");
          db.run("ALTER TABLE personnes ADD COLUMN adresse TEXT;", (err) => {
            if (err) {
              console.error(
                "Erreur lors de l'ajout de la colonne :",
                err.message
              );
            } else {
              console.log("Colonne 'adresse' ajoutée avec succès !");
            }
          });
        } else {
          console.log("La colonne 'adresse' existe déjà.");
        }
      });

      // Création de la table si elle n'existe pas
      db.run(
        `CREATE TABLE IF NOT EXISTS personnes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nom TEXT NOT NULL
        )`,
        (err) => {
          if (err) {
            console.error(
              "Erreur lors de la création de la table :",
              err.message
            );
          } else {
            console.log("Table 'personnes' prête.");
          }
        }
      );
    }
  }
);

module.exports = db;
