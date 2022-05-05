DROP DATABASE truetile;
CREATE DATABASE truetile;
\c truetile;

CREATE TABLE IF NOT EXISTS tile (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  name varchar(50) NOT NULL,
  price varchar(5) NOT NULL,
  photo text NOT NULL
);

CREATE INDEX idx_tile_name ON tile (name);

CREATE TABLE IF NOT EXISTS grout (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  name varchar(50) NOT NULL,
  price varchar(5) NOT NULL,
  color varchar(25) NOT NULL,
  photo text NOT NULL
);

CREATE INDEX idx_grout_name ON grout (name);

CREATE TABLE IF NOT EXISTS estimate (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  name varchar(15) NOT NULL,
  city varchar(15) NOT NULL,
  email varchar(30) NOT NULL,
  tile varchar(50) NOT NULL,
  grout varchar(50) NOT NULL,
  sq_feet int NOT NULL
);


/*        TILES        */

INSERT INTO tile (name, price, photo) VALUES ('Carrara', '1.99', 'https://images.thdstatic.com/productImages/0993561b-5920-48a0-b281-2090d2cc62c5/svn/carrara-home-decorators-collection-porcelain-tile-nhdcarr1224p-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Santa Fe Green', '7.99', 'https://images.thdstatic.com/productImages/178fe8e0-7e58-42fc-8208-51626c24c9b4/svn/green-ivy-hill-tile-ceramic-tile-ext3rd106067-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Polar Orbit Blue', '9.99', 'https://images.thdstatic.com/productImages/9d6605cf-95d2-4561-8fca-d26604e632c8/svn/blue-jeffrey-court-glass-tile-13014-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Suomi Hex Grey', '10.60', 'https://images.thdstatic.com/productImages/efce62c7-8e29-47a4-9d12-da5601b0ba00/svn/grey-merola-tile-porcelain-tile-fcd10sgx-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Montauk Black', '3.49', 'https://images.thdstatic.com/productImages/3bb6aece-a47b-417b-a806-936681a266d1/svn/montauk-black-msi-slate-tile-shdmonblk1224g-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Wind River Beige', '1.89', 'https://images.thdstatic.com/productImages/f9080b76-9f65-4d79-8ce0-bbcb13f0487e/svn/brown-beige-matte-florida-tile-home-collection-porcelain-tile-chdewnd016x24-64_145.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Aple Graphite', '1.99', 'https://images.thdstatic.com/productImages/e177924a-63a6-4c05-96e6-491b34f834bd/svn/graphite-matte-corso-italia-porcelain-tile-610010002399-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Cascade Ridge', '1.49', 'https://images.thdstatic.com/productImages/f6be1b2b-aacf-4a9e-b986-7dfbf8848e51/svn/slate-daltile-ceramic-tile-cr081224hd1pv-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Alaska Gray', '5.99', 'https://images.thdstatic.com/productImages/bbc4c767-1b5a-4b5f-965e-50c245747156/svn/alaska-gray-msi-marble-tile-lpnlmalagry624-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Montagna Gray', '1.69', 'https://images.thdstatic.com/productImages/a2d2bc58-7d1f-498f-aa7d-02c03c9d6bce/svn/dapple-gray-marazzi-porcelain-tile-ulm7-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Vintage Lace', '3.49', 'https://images.thdstatic.com/productImages/1c2fd143-7eec-4378-98a1-296c9ce38932/svn/vintage-lace-msi-porcelain-tile-nvinlac8x36-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Metro Gris', '1.59', 'https://images.thdstatic.com/productImages/ab23d6f0-6a3d-4aeb-83fb-9d7a97809d90/svn/metro-gris-msi-porcelain-tile-nmetgris1224-n-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Duttonwood Ash', '1.39', 'https://images.thdstatic.com/productImages/7e91b7ea-e45a-42a7-a113-b650eb81e7fd/svn/gray-msi-ceramic-tile-nhddutash7x20-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Strata', '1.19', 'https://images.thdstatic.com/productImages/99eed5d1-1495-48af-99f5-97cdc9b03801/svn/strata-trafficmaster-ceramic-tile-nhdstr1224-64_100.jpg');
INSERT INTO tile (name, price, photo) VALUES ('Galactic Black', '1.99', 'https://images.thdstatic.com/productImages/7aaebcee-5d50-4f6a-9609-061460c53cc8/svn/black-matte-florida-tile-home-collection-porcelain-tile-chdeglx1012x24-64_100.jpg');

/*        GROUT        */

INSERT INTO grout (name, price, color, photo) VALUES ('Prism', '32.47', 'Charcoal', 'https://images.thdstatic.com/productImages/be0685db-a7d3-439f-bb5b-5295283681c7/svn/custom-building-products-grout-pg6017t-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Fusion Pro', '54.57', 'Bright White', 'https://images.thdstatic.com/productImages/28cccbd0-19c6-471e-a318-637eddab59db/svn/custom-building-products-grout-fp3811-2t-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Polyblend Plus', '17.97', 'Platinum', 'https://images.thdstatic.com/productImages/a5a8f791-f7ea-45b9-a129-4896884abafa/svn/custom-building-products-grout-pbpg11510-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Polyblend Plus', '17.97', 'Snow White', 'https://images.thdstatic.com/productImages/32d8b1a0-1bda-42ca-809d-459ab080b454/svn/custom-building-products-grout-pbpg1110-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Prism', '32.47', 'Haystack', 'https://images.thdstatic.com/productImages/a3d40ea1-a6be-4883-b3d4-47f5bb4f8710/svn/custom-building-products-grout-pg38017t-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Prism', '32.47', 'Pewter', 'https://images.thdstatic.com/productImages/95283126-5c2c-4525-8c1a-ec77843ae993/svn/custom-building-products-grout-pg1917t-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Prism', '32.47', 'Coffee Bean', 'https://images.thdstatic.com/productImages/1f9b4152-1ab6-4ece-8dd2-edc38729eb3b/svn/custom-building-products-grout-pg64617t-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('SimpleGrout', '57.42', 'Charcoal', 'https://images.thdstatic.com/productImages/dad93169-fe24-4276-b902-c957e697e281/svn/custom-building-products-grout-pmg601-2-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('QuicTile', '47.27', 'Mist', 'https://images.thdstatic.com/productImages/1ce9f74d-b4af-4361-9456-8be0de83f86d/svn/daltile-grout-9999575236-64_100.jpg');
INSERT INTO grout (name, price, color, photo) VALUES ('Starklike', '67.34', 'Bianco Classic', 'https://images.thdstatic.com/productImages/72e720ed-bf67-4dc3-95e0-7207e473da68/svn/the-tile-doctor-grout-102-2-5kg-5-5lb-64_100.jpg');
