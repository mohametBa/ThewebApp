INSERT INTO Utilisateur (Nom, Prenom, Email, Mot_de_passe) VALUES
('Mohamet', 'Ba', 'ba.momo@test.com', 'password123'),
('Martin', 'Sophie', 'sophie.martin@example.com', 'password123'),
('Alex', 'Alice', 'alice.durand@example.com', 'password123');
SELECT * FROM Utilisateur;

SELECT * FROM Utilisateur WHERE ID_Utilisateur = 1;

UPDATE Utilisateur
SET Email = 'jean.dupont123@example.com'
WHERE ID_Utilisateur = 1;

UPDATE Utilisateur
SET Mot_de_passe = 'newpassword123'
WHERE ID_Utilisateur = 2;

DELETE FROM Utilisateur
WHERE ID_Utilisateur = 3;

DELETE FROM Utilisateur
WHERE Nom = 'Durand';
