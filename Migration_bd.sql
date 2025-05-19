DROP DATABASE IF EXISTS sw_evaluation_2012487;

CREATE DATABASE sw_evaluation_2012487;

\c sw_evaluation_2012487;

DROP TABLE IF EXISTS public.sous_taches;
DROP TABLE IF EXISTS public.taches;
DROP TABLE IF EXISTS public.utilisateurs;

CREATE TABLE public.utilisateurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(30),
    prenom VARCHAR(30),
    courriel VARCHAR(255),
    cle_api VARCHAR(30),
    password VARCHAR(100)
);

CREATE TABLE public.taches (
    id SERIAL PRIMARY KEY,
    utilisateur_id INT REFERENCES utilisateurs(id),
    titre VARCHAR(100),
    description VARCHAR(500),
    date_debut DATE,
    date_echeance DATE,
    complete BOOLEAN
);

CREATE TABLE public.sous_taches (
    id SERIAL PRIMARY KEY,
    tache_id INT REFERENCES taches(id),
    titre VARCHAR(100),
    complete BOOLEAN
);