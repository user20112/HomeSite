DROP DATABASE IF EXISTS MainDataBase;
CREATE DATABASE MainDataBase;
USE MainDataBase;

CREATE TABLE Schedule
(
   Task          varchar(255) 	    NOT NULL DEFAULT 'Free',
   Hour      	   varchar(8)      NOT NULL,
   Day             varchar(8)      NOT NULL,
   PRIMARY KEY(Hour,Day)
);
CREATE TABLE MiscData
(
   Name          varchar(255) 	    NOT NULL,
   Value      	   varchar(8)      NOT NULL,
   PRIMARY KEY(Name)
);
CREATE TABLE MessageBoard
(
   Message         varchar(255)     NOT NULL,
   TimeSent        varchar(20)      NOT NULL,
   Name            varchar(20)      NOT NULL,
   MessageID       varchar(20)      NOT NULL,
   PRIMARY KEY(MessageID)
);
CREATE TABLE ProjectBoard
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   ProjectID     varchar(20)      NOT NULL,
   PRIMARY KEY(ProjectID)
);
CREATE TABLE Units
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   UnitID     varchar(20)      NOT NULL,
   PRIMARY KEY(UnitID)
);
CREATE TABLE Structures
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   StructureID     varchar(20)      NOT NULL,
   PRIMARY KEY(StructureID)
);
CREATE TABLE Upgrades
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   UpgradeID     varchar(20)      NOT NULL,
   PRIMARY KEY(UpgradeID)
);
CREATE TABLE Plans
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   PlanID     varchar(20)      NOT NULL,
   PRIMARY KEY(PlanID)
);
CREATE TABLE NewProjectBoard
(
   Title         varchar(255)     NOT NULL,
   Description   varchar(2550)    NOT NULL,
   ProjectID     varchar(20)      NOT NULL,
   PRIMARY KEY(ProjectID)
);
CREATE TABLE GiftCardTable
(
   TimeOfSale         varchar(255)     NOT NULL,
   CERTNumber   varchar(10)    NOT NULL,
   AccountNumber     varchar(10)      NOT NULL,
   Balance     varchar(10)      NOT NULL,
   PRIMARY KEY(CERTNumber)
);
insert Schedule values ('Sleep','23:00','0');
insert Schedule values ('Sleep','22:00','0');
insert Schedule values ('Sleep','21:00','0');
insert Schedule values ('Free','20:00','0');
insert Schedule values ('Free','19:00','0');
insert Schedule values ('Free','18:00','0');
insert Schedule values ('Free','17:00','0');
insert Schedule values ('Free','16:00','0');
insert Schedule values ('Free','15:00','0');
insert Schedule values ('Free','14:00','0');
insert Schedule values ('Free','13:00','0');
insert Schedule values ('Free','12:00','0');
insert Schedule values ('Free','11:00','0');
insert Schedule values ('Free','10:00','0');
insert Schedule values ('Free','9:00','0');
insert Schedule values ('Free','8:00','0');
insert Schedule values ('Free','8:00','0');
insert Schedule values ('Free','7:00','0');
insert Schedule values ('Sleep','6:00','0');
insert Schedule values ('Sleep','5:00','0');
insert Schedule values ('Sleep','4:00','0');
insert Schedule values ('Sleep','3:00','0');
insert Schedule values ('Sleep','2:00','0');
insert Schedule values ('Sleep','1:00','0');
insert Schedule values ('Sleep','0:00','0');
insert Schedule values ('Sleep','23:00','1');
insert Schedule values ('Sleep','22:00','1');
insert Schedule values ('Sleep','21:00','1');
insert Schedule values ('Free','20:00','1');
insert Schedule values ('Free','19:00','1');
insert Schedule values ('Free','18:00','1');
insert Schedule values ('Free','17:00','1');
insert Schedule values ('Free','16:00','1');
insert Schedule values ('Free','15:00','1');
insert Schedule values ('Free','14:00','1');
insert Schedule values ('Free','13:00','1');
insert Schedule values ('Free','12:00','1');
insert Schedule values ('Free','11:00','1');
insert Schedule values ('Free','10:00','1');
insert Schedule values ('Free','9:00','1');
insert Schedule values ('Free','8:00','1');
insert Schedule values ('Free','8:00','1');
insert Schedule values ('Free','7:00','1');
insert Schedule values ('Sleep','6:00','1');
insert Schedule values ('Sleep','5:00','1');
insert Schedule values ('Sleep','4:00','1');
insert Schedule values ('Sleep','3:00','1');
insert Schedule values ('Sleep','2:00','1');
insert Schedule values ('Sleep','1:00','1');
insert Schedule values ('Sleep','0:00','1');
insert Schedule values ('Sleep','23:00','2');
insert Schedule values ('Sleep','22:00','2');
insert Schedule values ('Sleep','21:00','2');
insert Schedule values ('Free','20:00','2');
insert Schedule values ('Free','19:00','2');
insert Schedule values ('Free','18:00','2');
insert Schedule values ('Free','17:00','2');
insert Schedule values ('Free','16:00','2');
insert Schedule values ('Free','15:00','2');
insert Schedule values ('Free','14:00','2');
insert Schedule values ('Free','13:00','2');
insert Schedule values ('Free','12:00','2');
insert Schedule values ('Free','11:00','2');
insert Schedule values ('Free','10:00','2');
insert Schedule values ('Free','9:00','2');
insert Schedule values ('Free','8:00','2');
insert Schedule values ('Free','8:00','2');
insert Schedule values ('Free','7:00','2');
insert Schedule values ('Sleep','6:00','2');
insert Schedule values ('Sleep','5:00','2');
insert Schedule values ('Sleep','4:00','2');
insert Schedule values ('Sleep','3:00','2');
insert Schedule values ('Sleep','2:00','2');
insert Schedule values ('Sleep','1:00','2');
insert Schedule values ('Sleep','0:00','2');
insert Schedule values ('Sleep','23:00','3');
insert Schedule values ('Sleep','22:00','3');
insert Schedule values ('Sleep','21:00','3');
insert Schedule values ('Free','20:00','3');
insert Schedule values ('Free','19:00','3');
insert Schedule values ('Free','18:00','3');
insert Schedule values ('Free','17:00','3');
insert Schedule values ('Free','16:00','3');
insert Schedule values ('Free','15:00','3');
insert Schedule values ('Free','14:00','3');
insert Schedule values ('Free','13:00','3');
insert Schedule values ('Free','12:00','3');
insert Schedule values ('Free','11:00','3');
insert Schedule values ('Free','10:00','3');
insert Schedule values ('Free','9:00','3');
insert Schedule values ('Free','8:00','3');
insert Schedule values ('Free','8:00','3');
insert Schedule values ('Free','7:00','3');
insert Schedule values ('Sleep','6:00','3');
insert Schedule values ('Sleep','5:00','3');
insert Schedule values ('Sleep','4:00','3');
insert Schedule values ('Sleep','3:00','3');
insert Schedule values ('Sleep','2:00','3');
insert Schedule values ('Sleep','1:00','3');
insert Schedule values ('Sleep','0:00','3');
insert Schedule values ('Sleep','23:00','4');
insert Schedule values ('Sleep','22:00','4');
insert Schedule values ('Sleep','21:00','4');
insert Schedule values ('Free','20:00','4');
insert Schedule values ('Free','19:00','4');
insert Schedule values ('Free','18:00','4');
insert Schedule values ('Free','17:00','4');
insert Schedule values ('Free','16:00','4');
insert Schedule values ('Free','15:00','4');
insert Schedule values ('Free','14:00','4');
insert Schedule values ('Free','13:00','4');
insert Schedule values ('Free','12:00','4');
insert Schedule values ('Free','11:00','4');
insert Schedule values ('Free','10:00','4');
insert Schedule values ('Free','9:00','4');
insert Schedule values ('Free','8:00','4');
insert Schedule values ('Free','8:00','4');
insert Schedule values ('Free','7:00','4');
insert Schedule values ('Sleep','6:00','4');
insert Schedule values ('Sleep','5:00','4');
insert Schedule values ('Sleep','4:00','4');
insert Schedule values ('Sleep','3:00','4');
insert Schedule values ('Sleep','2:00','4');
insert Schedule values ('Sleep','1:00','4');
insert Schedule values ('Sleep','0:00','4');
insert Schedule values ('Sleep','23:00','5');
insert Schedule values ('Sleep','22:00','5');
insert Schedule values ('Sleep','21:00','5');
insert Schedule values ('Free','20:00','5');
insert Schedule values ('Free','19:00','5');
insert Schedule values ('Free','18:00','5');
insert Schedule values ('Free','17:00','5');
insert Schedule values ('Free','16:00','5');
insert Schedule values ('Free','15:00','5');
insert Schedule values ('Free','14:00','5');
insert Schedule values ('Free','13:00','5');
insert Schedule values ('Free','12:00','5');
insert Schedule values ('Free','11:00','5');
insert Schedule values ('Free','10:00','5');
insert Schedule values ('Free','9:00','5');
insert Schedule values ('Free','8:00','5');
insert Schedule values ('Free','8:00','5');
insert Schedule values ('Free','7:00','5');
insert Schedule values ('Sleep','6:00','5');
insert Schedule values ('Sleep','5:00','5');
insert Schedule values ('Sleep','4:00','5');
insert Schedule values ('Sleep','3:00','5');
insert Schedule values ('Sleep','2:00','5');
insert Schedule values ('Sleep','1:00','5');
insert Schedule values ('Sleep','0:00','5');
insert Schedule values ('Sleep','23:00','6');
insert Schedule values ('Sleep','22:00','6');
insert Schedule values ('Sleep','21:00','6');
insert Schedule values ('Free','20:00','6');
insert Schedule values ('Free','19:00','6');
insert Schedule values ('Free','18:00','6');
insert Schedule values ('Free','17:00','6');
insert Schedule values ('Free','16:00','6');
insert Schedule values ('Free','15:00','6');
insert Schedule values ('Free','14:00','6');
insert Schedule values ('Free','13:00','6');
insert Schedule values ('Free','12:00','6');
insert Schedule values ('Free','11:00','6');
insert Schedule values ('Free','10:00','6');
insert Schedule values ('Free','9:00','6');
insert Schedule values ('Free','8:00','6');
insert Schedule values ('Free','8:00','6');
insert Schedule values ('Free','7:00','6');
insert Schedule values ('Sleep','6:00','6');
insert Schedule values ('Sleep','5:00','6');
insert Schedule values ('Sleep','4:00','6');
insert Schedule values ('Sleep','3:00','6');
insert Schedule values ('Sleep','2:00','6');
insert Schedule values ('Sleep','1:00','6');
insert Schedule values ('Sleep','0:00','6');

insert MessageBoard values ('TestMessage','17:27','Devlin','0');

insert ProjectBoard values ('TeamViewer Clone','Basicly a teamviewer clone. sent screenshots of one pc over the network to master pc where input was taken and transfered back. ran at about 30 frames per second on a decent computer. worked well but needed some optimization to really be usefull. supported multiple clients at once however.',0);
insert ProjectBoard values ('menero mining service installer and manager.','Ran a menero mining script as a service in the background then had a client to manage it allowing for more specific management then available with the windows service manager.',1);
insert ProjectBoard values ('Bank Manager','Took csv out from td bank and alloud for better transaction management to view finances. really surprised td bank didnt have anything along this line as a service available already.',2);
insert ProjectBoard values ('Everything on the other page','The other page has all of my html5 projects such as snake a weird liquid simulator menero miner and some email and text things.',3);
insert ProjectBoard values ("Server's hosted",'Tekkit classic 24.60.48.74:25565 Minecraft 24.60.48.74:25566 CubeWorld 24.60.48.74:12345 Terraria 24.60.48.74:7777',4);
insert ProjectBoard values ('Key Logger/auto clicker',' a c++ keyboard hook keylogger. and a c++ auto clicker that uses the windows api to simulate clicks whereever the mouse currently is. ',5);
insert ProjectBoard values ('Decoders','GIF,PNG,JPG, and zlib deocders in c# and a zlib decoder in c++.',6);
insert ProjectBoard values ('External Harddrive power enclosure','Used ac -> 12 v adapter then used voltage switching regulators and capacitors to get 3.3 v 5v and 12v rails to power some external harddrives for my dell poweredge server.',7);
insert ProjectBoard values ('Automated IC Drill','c++ code to drive a drill press using an arduino mega, an outboard to use a seperate powersupply to drive 2 stepper mottors to move the drill location from side to side then 1 to drill down then back up.',8);
insert ProjectBoard values ('.sh startup script',"Uses a .sh file to spawn all my game servers and dynamicly served webpages at once in different tabs and uses expect's to respond to server querries and add initial parameters on launch.",9);
insert ProjectBoard values ('C++ Menero, and bitcoin miner','a c++ menero miner and a seperate c++ bitcoin miner. both are outdated compared to asics or modern programs i jsut wanted to get used to creating code to run certain algorithms as fast as i could.',10);
insert ProjectBoard values ('SQL Schedule Manager','A c# schedule manager interface that interfaces with my servers website that then comunicates with SQL to store a copy of my schedule that i can look at.',11);
insert ProjectBoard values ('Ubuntu Samba share','I setup my ubuntu server to use a samba share accross the network to help with html deploying as it was really tedios to copy the files over as the site grew. now its a one click deployment!',12);
insert ProjectBoard values ('Aspnet site','There i s also an aspnet site linked in the nav bar above.',13);

insert NewProjectBoard values ('test idea','Create a sql stored Project idea board.',0);

insert Units values ('Drone','Basic mineral gatherer. Gathers 1 mineral at start and can be doubled twice through upgrades. costs 50 minerals and doesnt increase in cost over time. 1 larva required and limited to number of hatcheries * 30 +30. (they are cute on low graphics in starcraft)',1);
insert Units values ('Zergling','Morphs in pairs by defualt but will morph in groups of three after upgrade. mineral gather can be doubled twice. starts at gathering 1 mineral and requires 30 minerals and 1 larva per morph. Limited by number of spawning pools *1000',2);
insert Units values ('roach','4 minerals per second costs 75 minerals and restricted to 500 per roach warren. number of minerals directly related to purplyness and can be turned 2 times more purple twice with upgrades ( purple is the only acceptable zerg color)',3);
insert Units values ('Queen',' Costs 20000 minerals and increases after each one is purchased. generates 3 larva every three seconds in batches. can be doubled twice using upgrades to improve larva injections.',4);
insert Units values ('Infested Terran',' Generated by the Infested barracks.This unit may be removed shortly when the better infestation page is pushed to a live version maybe replaced with something like broodlings and a brood den.',5);
insert Units values ('Overlord','Cost increases after each purchase, at first gives 50 supply however when upgraded new overlords will supply 100 supply. Costs 500 minerals to start and one larva',6);

insert Structures values ('Extractor','The only way to get Vespene so far. requires 4 drones and 200 minerals to make. limited to the number of hatcheries *2 +2. 200 minerals to make.',1);
insert Structures values ('CreepTumor','Increases All army Mineral Generation rate by 1%. Cost increases by 10 times each time.Starting cost is 20000 minerals and 2000 vespene, and 1 drone.',2);
insert Structures values ('Hatchery','Increases Max Drone Count by 30 and Max Extractor Count by 2. Increases cost by 10 percent every time starts at 800 minerals 50 vesp and 10 drones',3);
insert Structures values ('EvolutionChamber','Unlocks New Upgrades on the upgrade section 100 times more expensive for each one. starting cost is 300 minerals and 1 drone.',4);
insert Structures values ('Spawning Pool','Unlocks/Allows you to build 1000 more batches of zerglings. cost increases by 10 percent each time. starting cost is 1000 minerals 100 vespene and 20 drones.',5);
insert Structures values ('Roach Warren','Unlocks roaches/ Allows you to build 500 more. cost increases by 10 percent each time. starting cost is 3000000 minerals 10000 vespene and 10000 drones.',6);
insert Structures values ('Infested barracks','Unlocks and generates 1 infested terran per seccond. cost increases 10 percent per purchase and starts at 3000000 minerals 1000 vespene and 100 drones.',7);
insert Upgrades values ('Hardened Mandibles','Doubles mineral generation for drones',1);
insert Upgrades values ('Super Sonic Drones','Doubles the gathering amount of drones',2);
insert Upgrades values ('Quicker Gather','Doubles the gathering amount of drones',3);
insert Upgrades values ('Bigger Overlords','makes new overlords supply double supply',4);
insert Upgrades values ('Injection Infusion','Doubles Larva Generation',5);
insert Upgrades values ('Energized Injection',' Doubles larva generation',6);
insert Upgrades values ('Metabolic boost','Doubles Zergling mineral generation',7);
insert Upgrades values ('Tunnling Claws','Doubles roach mineral generation',8);
insert Upgrades values ('Purpler roaches','Doubles purplyness and therefore mineral generation of roaches',9);
insert Upgrades values ('More Purple Roaches','Further doubles the purpleness of roaches doubling the mineral generation',10);
insert Upgrades values ('Agressive mutation','Doubles Zergling mineral generation',11);
insert Upgrades values ('More Effecient Zerglings','Morphs zerglings in triplets instead of pairs',12);
insert Upgrades values ('Strong spikes','Doubles Infested tarren income',13);
insert Upgrades values ('Stronger spikes','Doubles Infested tarren income',14);
insert Upgrades values ('Explosive spikes','Doubles Infested tarren income',15);
insert Upgrades values ('Lairs','Allows 15 more drones and 1 extractor per hatchery',16);
insert Upgrades values ('Hives','Allows 15 more drones and 1 extractor per hatchery',17);
insert Upgrades values ('Faster Extractors','Doubles Extractor Vespene Generation',18);
insert Upgrades values ('Larger Tanks','Doubles Extractor Vespene Generation',19);

insert Plans values ('Infestation Page','Im planning on adding a page that uses a new resource terazine and allows for infestation of terran units for some really unique unit creation. these would also use a new resource feederlings to feed virophages to spread the infestation.',1);
insert Plans values ('Protoss Attacks',' Thinking about making protoss attack waves that come and steal your resources if you dont have enough units on defense. probably going to use a defense value for all the units and then have a slider for each on wether they are harvesting or defending.',2);
insert Plans values ('Reset Rewards','Gain Something for resetting progress. this would stay across resets.',3);
