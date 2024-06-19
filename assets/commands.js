export const CommandList  = [
        {
          "Command": "AddExperience",
          "CommandDesc": "This command adds experience points to the experience amount of the player who executes it.",
          "CommandID": "cheat AddExperience <Amount> <From Tribe> <Prevent Sharing With Tribe (1 - only you, 2 share tribe)>"
        },
        {
          "Command": "AddHexagons",
          "CommandDesc": "This console command gives you the specified amount of Hexagons.",
          "CommandID": "cheat AddHexagons <Amount>"
        },
        {
          "Command": "AllowPlayerToJoinNoCheck",
          "CommandDesc": "Adds a player to your whitelist.",
          "CommandID": "cheat AllowPlayerToJoinNoCheck <Player ID>"
        },
        {
          "Command": "BanPlayer",
          "CommandDesc": "This command bans the player with the ID provided, kicking them from the server and preventing them from ever reconnecting. Use a player's Xbox or PlayStation name if you are using this command on a console.",
          "CommandID": "cheat BanPlayer <Player ID>"
        },
        {
          "Command": "Broadcast",
          "CommandDesc": "This command will send the specified message to all players currently connected to the server.",
          "CommandID": "cheat Broadcast <Message>"
        },
        {
          "Command": "ChangeSize",
          "CommandDesc": "This command will change your character's size. A multiplier of 2 would double your size, 0.5 would half it.",
          "CommandID": "cheat ChangeSize <Multiplier>"
        },
        {
          "Command": "ClearCryoSickness",
          "CommandDesc": "This command will heal the Cryo Sickness of the dinosaur that is under your crosshair, waking it up.",
          "CommandID": "cheat ClearCryoSickness "
        },
        {
          "Command": "ClearPlayerInventory",
          "CommandDesc": "This command will clear the inventory of the player with the specified numerical ID.",
          "CommandID": "cheat ClearPlayerInventory <UE4 ID> <Inventory> <Slot Items> <Equipped Items>"
        },
        {
          "Command": "Debugstructures",
          "CommandDesc": "This command will display the structure information and ID when you look at building or structure.",
          "CommandID": "cheat Debugstructures "
        },
        {
          "Command": "DefeatAllBosses",
          "CommandDesc": "This command will defeat and unlock all Alpha difficulty bosses for the player with the specified player ID. Specify 0 as the player ID to unlock all Alpha bosses for yourself.",
          "CommandID": "cheat DefeatAllBosses <Player ID> <Boss ID> <Difficulty>"
        },
        {
          "Command": "DefeatBoss",
          "CommandDesc": "This admin command will defeat/unlock the specified boss for the player with the specified ID. You also need to specify a difficulty (0 for Gamma, 1 for Beta, or 2 for Alpha). Unlocking a boss will instantly give the player all of the Tek Engrams associated with it. They will need to die and respawn in order for the levels and implant to change. See argument information for boss IDs.",
          "CommandID": "cheat DefeatBoss <Player ID> <Boss ID> <Difficulty>"
        },
        {
          "Command": "DestroyAll",
          "CommandDesc": "This command will destroy the all the dino's entered.",
          "CommandID": "cheat DestroyAll <Entity ID>"
        },
        {
          "Command": "DestroyAllEnemies",
          "CommandDesc": "This command will clear the map of all non-player creatures. Enemies refers to all creatures, including those that are tamed or non-hostile.",
          "CommandID": "cheat DestroyAllEnemies "
        },
        {
          "Command": "DestroyMyTarget",
          "CommandDesc": "Whatever is in your characters crosshairs will be destroyed upon entering this admin command. No corpse or remains will be left.",
          "CommandID": "cheat DestroyMyTarget "
        },
        {
          "Command": "DestroyTribeDinos",
          "CommandDesc": "All dinos will be destroyed depending on the player or character which you are looking at. Including all those belonging to the different members of the tribe.",
          "CommandID": "cheat DestroyTribeDinos "
        },
        {
          "Command": "DestroyTribeIdDinos",
          "CommandDesc": "This console command will kill all dinos that the tribe with the specified tribe ID has tamed.",
          "CommandID": "cheat DestroyTribeIdDinos <Tribe ID>"
        },
        {
          "Command": "DestroyTribePlayers",
          "CommandDesc": "All tribe members will be destroyed depending on the player or character which you are looking at.",
          "CommandID": "cheat DestroyTribePlayers "
        },
        {
          "Command": "DestroyTribeStructuresLessThan",
          "CommandDesc": "This command will destroy all structures belonging to the tribe with the specified ID that have less than the specified amount of connections.",
          "CommandID": "cheat DestroyTribeStructuresLessThan <Tribe ID> <Minimum Connections>"
        },
        {
          "Command": "DestroyWildDinoClasses",
          "CommandDesc": "This command kills all wild (untamed) dinos and creatures that match the specified creature ID.",
          "CommandID": "cheat DestroyWildDinoClasses <Creature ID>"
        },
        {
          "Command": "DestroyWildDinos",
          "CommandDesc": "Useful when servers become over/underpopulated with certain types of dinos. Important to do this after any change in wild dino behavior or stats in order to add the changes made.",
          "CommandID": "cheat DestroyWildDinos "
        },
        {
          "Command": "DetroyTribeStructures",
          "CommandDesc": "All tribe structures will be destroyed depending on the player or character which you are looking at. Including all those belonging to the different members of the tribe.",
          "CommandID": "cheat DetroyTribeStructures "
        },
        {
          "Command": "Dino DestroyCenterNode",
          "CommandDesc": "This console command destroys the left arm and node of the Forest Titan that you are looking at.",
          "CommandID": "cheat Dino DestroyCenterNode "
        },
        {
          "Command": "Dino DestroyLeftNode",
          "CommandDesc": "This console command destroys the left arm and node of the Forest Titan that you are looking at.",
          "CommandID": "cheat Dino DestroyLeftNode "
        },
        {
          "Command": "Dino DestroyRightNode",
          "CommandDesc": "This console command destroys the right arm and node of the Forest Titan that you are looking at.",
          "CommandID": "cheat Dino DestroyRightNode "
        },
        {
          "Command": "Dino DontHideRiderDuringBlink",
          "CommandDesc": "This enables and disables (toggles) interference with rider visibility when the Enforcer blinks. Affects the Enforcer that you are currently riding, or the Enforcer that you are looking at (i.e. the enforcer your crosshair is over).",
          "CommandID": "cheat Dino DontHideRiderDuringBlink "
        },
        {
          "Command": "Dino InfiniteBlink",
          "CommandDesc": "This console command will disable blink cooldowns for the Enforcer you are currently riding or that your crosshair is over. This allows for blinks without a cooldown in between. Not recommended if playing seriously as without the cooldowns the Enforcer will teleport a lot.",
          "CommandID": "cheat Dino InfiniteBlink "
        },
        {
          "Command": "Dino InfiniteFuel",
          "CommandDesc": "This is a toggle command, running it again while targeting the same dino will disable it. It will give the Mek that you are looking at or riding infinite maximum fuel. This is different to the Reset command because the fuel will not run out until you toggle it off.",
          "CommandID": "cheat Dino InfiniteFuel "
        },
        {
          "Command": "Dino InfiniteGas",
          "CommandDesc": "This is a toggle command -- i.e. using it on a Gasbag will turn the feature on, but you can run it again (while looking at the same Gasbag) to disable it. It will enable infinite inflation for the Gasbag you are looking at or riding. This is different to the \"Dino Inflate\" command in that it will not deflate at all until you toggle it off.",
          "CommandID": "cheat Dino InfiniteGas "
        },
        {
          "Command": "Dino Inflate",
          "CommandDesc": "This cheat command fully inflates the Gasbag that you are currently riding or looking at - i.e. it will set its inflation to the maximum possible level.",
          "CommandID": "cheat Dino Inflate "
        },
        {
          "Command": "Dino ReplayIntro",
          "CommandDesc": "This command will replay the VFX intro for the Mega Mek that is behind your crosshair.",
          "CommandID": "cheat Dino ReplayIntro "
        },
        {
          "Command": "Dino Reset",
          "CommandDesc": "If you are looking at or riding an Enforcer when you run this console command, it will reset all existing blink cooldowns for the Enforcer (its teleport ability). If you are looking at or riding a Mek, it will reset its fuel and heat levels to 100% and 0, respectively.",
          "CommandID": "cheat Dino Reset "
        },
        {
          "Command": "Dino TitanMode",
          "CommandDesc": "This console command increases the inflation of Gasbags by 1000% (10x).",
          "CommandID": "cheat Dino TitanMode "
        },
        {
          "Command": "Dino ToggleUpkeep",
          "CommandDesc": "This is a toggle command. Using this command while looking at or riding a Mek will disable the upkeep system (i.e. health and fuel is no longer subtracted every minute). Running it again whilst riding or looking at a Mek you've disabled it on will re-enable it.",
          "CommandID": "cheat Dino ToggleUpkeep "
        },
        {
          "Command": "DinoSet Blink",
          "CommandDesc": "This command sets the percentage the Enforcer can blink forwards -- the percentage should be given as a decimal 0.4 = 40%, 0.24 = 24%. Affects the Enforcer that you are currently riding, or the Enforcer that you are looking at (i.e. the enforcer your crosshair is over).",
          "CommandID": "cheat DinoSet Blink <Blink Percentage>"
        },
        {
          "Command": "DinoSet BlinkBack",
          "CommandDesc": "This command sets the percentage the Enforcer can blink backwards -- the percentage should be given as a decimal 0.4 = 40%, 0.24 = 24%. Affects the Enforcer that you are currently riding, or the Enforcer that you are looking at (i.e. the enforcer your crosshair is over).",
          "CommandID": "cheat DinoSet BlinkBack <Blink Percentage>"
        },
        {
          "Command": "DinoSet Cooldowns",
          "CommandDesc": "This admin command sets the blink cooldown slot amount of the Enforcer that you are riding or looking at (the amount of additional teleport charges it can gain).",
          "CommandID": "cheat DinoSet Cooldowns <Amount>"
        },
        {
          "Command": "DinoSet EatTime",
          "CommandDesc": "This admin commands sets the amount of time, in seconds, that the Gacha you are looking at or riding takes to eat/digest.",
          "CommandID": "cheat DinoSet EatTime <Seconds>"
        },
        {
          "Command": "DinoSet Fuel",
          "CommandDesc": "This command gives the Mek you are looking at or riding infinite 0% heat -- i.e. they can hover forever and not overheat. Note that this is a toggle command, run it again while looking at/riding the same dino to disable it.",
          "CommandID": "cheat DinoSet Fuel "
        },
        {
          "Command": "DinoSet Inflate",
          "CommandDesc": "This admin command will increase or decrease a Gasbag's inflation by the amount specified. Specify negative numbers to decrease a Gasbag's inflation. The Gasbag that this command has an effect on is the one you are looking at (i.e. under your crosshair, in the middle of your screen), or if you are riding a Gasbag, the one you are riding.",
          "CommandID": "cheat DinoSet Inflate <Amount>"
        },
        {
          "Command": "DinoSet UpkeepInterval",
          "CommandDesc": "This console command sets the interval, in seconds, between each update of the Mek's upkeep system. Default is 60.",
          "CommandID": "cheat DinoSet UpkeepInterval <Seconds>"
        },
        {
          "Command": "DisableSpectator",
          "CommandDesc": "This command will take you out of spectator mode.",
          "CommandID": "cheat DisableSpectator "
        },
        {
          "Command": "DisallowPlayerToJoinNoCheck",
          "CommandDesc": "Removes a player from your whitelist.",
          "CommandID": "cheat DisallowPlayerToJoinNoCheck <Player ID>"
        },
        {
          "Command": "DoExit",
          "CommandDesc": "This command will stop/shutdown the server at the soonest possible time.",
          "CommandID": "cheat DoExit "
        },
        {
          "Command": "DoRestartLevel",
          "CommandDesc": "Use carefully! Will cause an internal restart on the map",
          "CommandID": "cheat DoRestartLevel "
        },
        {
          "Command": "DoTame",
          "CommandDesc": "This command tames the creature you are currently looking at, if it is a creature that can be tamed.",
          "CommandID": "cheat DoTame "
        },
        {
          "Command": "DumpDinoStats",
          "CommandDesc": "This is a debug command that will print to the console all of the statistics and information there is about a dinosaur. If you are riding a dino when you run this command, the information will be printed for this dino, otherwise, this command will print information about the dino that your crosshair is over.",
          "CommandID": "cheat DumpDinoStats "
        },
        {
          "Command": "EnableCheats",
          "CommandDesc": "This command enables access to cheat commands (admincheat), if the given password is correct. The password is set in the server configuration as \"ServerAdminPassword\".",
          "CommandID": "EnableCheats <Password>"
        },
        {
          "Command": "EnableSpectator",
          "CommandDesc": "This command enables spectator mode for your character.",
          "CommandID": "cheat EnableSpectator "
        },
        {
          "Command": "EnemyInvisible",
          "CommandDesc": "When true is active, all wild dinos will not attack you on sight and also will not attack if you hit or shoot (attack) them. False with disable enemy invisible and result back to the normal settings.",
          "CommandID": "cheat EnemyInvisible <True / False>"
        },
        {
          "Command": "Fly",
          "CommandDesc": "This command enables fly mode, disabling collisions with all objects. To disable, use the command 'walk'.",
          "CommandID": "cheat Fly "
        },
        {
          "Command": "ForceJoinTribe",
          "CommandDesc": "This command will make you forcefully join the tribe of the player, dino, or structure that your crosshair is over.",
          "CommandID": "cheat ForceJoinTribe "
        },
        {
          "Command": "ForcePlayerToJoinTargetTribe",
          "CommandDesc": "This command forces a player based on the player ID input to force join the tribe of which you are looking at. You can look at either the tribes' structures or players and the tribe will join them instantly.",
          "CommandID": "cheat ForcePlayerToJoinTargetTribe <Player ID>"
        },
        {
          "Command": "ForcePlayerToJoinTribe",
          "CommandDesc": "This forces the player based on the Player ID input to join the tribe mentioned within the admin command.",
          "CommandID": "cheat ForcePlayerToJoinTribe <Player ID> <Tribe Name>"
        },
        {
          "Command": "ForcePoop",
          "CommandDesc": "This cheat command makes a dinosaur poop. If you are riding a dino when you run this command, it will make that dino poop, otherwise, it will make the dino that your crosshair is over poop.",
          "CommandID": "cheat ForcePoop "
        },
        {
          "Command": "ForceTame",
          "CommandDesc": "This command will forcefully tame the creature that is behind your crosshair. If tamed with this command, creatures can be ridden without a saddle.",
          "CommandID": "cheat ForceTame "
        },
        {
          "Command": "ForceUpdateDynamicConfig",
          "CommandDesc": "This command forcefully updates the dynamic config (i.e. applies any changes you've made to the config file).",
          "CommandID": "cheat ForceUpdateDynamicConfig "
        },
        {
          "Command": "GameCommand",
          "CommandDesc": "This is used in order trigger or activate a game command, such as run a map or start a new game mode.",
          "CommandID": "cheat GameCommand <command>"
        },
        {
          "Command": "GCM",
          "CommandDesc": "This command sets your gamemode to creative mode.",
          "CommandID": "cheat GCM "
        },
        {
          "Command": "GetAllState",
          "CommandDesc": "Prints all admin entries to console and also to the server log which can be found within the \"shootergame.log\" file. This can be manually shown again in the admin control page either on console, PC or through the third party provider.",
          "CommandID": "cheat GetAllState <type>"
        },
        {
          "Command": "GetChat",
          "CommandDesc": "Shows the admin all the game chat similar to that which is shown in the in-game chat box for all players.",
          "CommandID": "GetChat <command>"
        },
        {
          "Command": "GetEgg",
          "CommandDesc": "This command will spawn a fertilized egg for the type of dino that your crosshair is over (i.e. targeting a Parasaur will result in a Parasaur egg). The dino you target will become aggressive towards you if you pick up the egg.",
          "CommandID": "cheat GetEgg "
        },
        {
          "Command": "GetGameLog",
          "CommandDesc": "This command will send and show all major game log events (restart/stop/start the server) to the \".log\" or \"servergamelogs\" files. ",
          "CommandID": "GetGameLog <type>"
        },
        {
          "Command": "GetTribeIdPlayerList",
          "CommandDesc": "This command returns a list of players in the tribe with the specified ID.",
          "CommandID": "cheat GetTribeIdPlayerList <Tribe ID>"
        },
        {
          "Command": "GFI",
          "CommandDesc": "This command adds an item to your inventory, relative to the blueprint, amount and quality specified. You can specify only part of the blueprint instead of the full blueprint, provided it is a unique part that no other blueprints have (e.g. 'gem' is shared between the Blue Gem, Green Gem and Red Gem, so it cannot be used, but 'Absorbent' is only in 'Absorbent Substrate' so it is fine). Check out our items page for more information.",
          "CommandID": "cheat GFI <Blueprint / GFI> <Amount> <Quality> <Force Blueprint>"
        },
        {
          "Command": "Ghost",
          "CommandDesc": "This command enables 'noclip' mode, disabling collisions (allowing you to pass through any objects, including the terrain of the map). Use the 'walk' command to disable this mode.",
          "CommandID": "cheat Ghost "
        },
        {
          "Command": "GiveAllStructure",
          "CommandDesc": "Will allow the user to gain ownership of all tribe/player structures belonging to that which he is looking at.",
          "CommandID": "cheat GiveAllStructure "
        },
        {
          "Command": "GiveColors",
          "CommandDesc": "Will add <Amount> amount of all in-game dyes/colors to the users' inventory",
          "CommandID": "cheat GiveColors <Amount>"
        },
        {
          "Command": "GiveCreativeMode",
          "CommandDesc": "This command sets your gamemode to creative mode.",
          "CommandID": "cheat GiveCreativeMode "
        },
        {
          "Command": "GiveDinoSet",
          "CommandDesc": "This admin command will spawn a set of dinos, relative to the tier you specify. See tier ID argument information for a list of tier IDs and what dinos are in each tier. You also need to specify a quantity (0 for the entire set) of dinos that should spawn.",
          "CommandID": "cheat GiveDinoSet <Tier ID> <0 / Amount>"
        },
        {
          "Command": "GiveEngrams",
          "CommandDesc": "This command will unlock all crafting recipes for your character.",
          "CommandID": "cheat GiveEngrams "
        },
        {
          "Command": "GiveExpToPlayer",
          "CommandDesc": "This command simply gives experience to the specified player, of a decided amount. Only input fromtribeshare if you wish to use this command line and also 0 in sharewithtribe will share and 1 will not. But it should be noted that this is only effective if giving XP to another player, if you want to use it on yourself or a mount (whilst riding) then use the AddExperience command.",
          "CommandID": "cheat GiveExpToPlayer <PlayerID> <Amount> <FromTribeshare> <ShareWithTribe>"
        },
        {
          "Command": "GiveExpToTarget",
          "CommandDesc": "This command will give experience points to the player, or dino, that is behind your crosshair.",
          "CommandID": "cheat GiveExpToTarget <Amount> <From Tribe> <Prevent Sharing With Tribe>"
        },
        {
          "Command": "GiveInfiniteStatsToTarget",
          "CommandDesc": "This command will give infinite stats to the player, or dino, that is under your crosshair.",
          "CommandID": "cheat GiveInfiniteStatsToTarget "
        },
        {
          "Command": "GiveItem",
          "CommandDesc": "Add the specified blueprint to a players inventory. Quality and quantity can be set and 1 at the end will add blueprint, 0 will not for the last input number under [forceblueprint].",
          "CommandID": "cheat GiveItem <Blueprint Path> <Amount> <Quality> <Forceblueprint>"
        },
        {
          "Command": "GiveItemNum",
          "CommandDesc": "This command will add the specified item straight into the player's inventory based on the Item Number. In forceblueprint 1 will add blueprint and 0 will add the item.",
          "CommandID": "cheat GiveItemNum <Item Number> <Amount> <Quality> <Forceblueprint>"
        },
        {
          "Command": "GiveItemToPlayer",
          "CommandDesc": "Gives the specified item or blueprint to the player based on the [playerid] input into the command bar.",
          "CommandID": "cheat GiveItemToPlayer <PlayerID> <Blueprint Path> <Amount> <Quality> <Forceblueprint>"
        },
        {
          "Command": "GiveResources",
          "CommandDesc": "This command will add 50 of each resource in the game to the user's inventory.",
          "CommandID": "cheat GiveResources "
        },
        {
          "Command": "GiveSlotItem",
          "CommandDesc": "This command will add the item based on the blueprintpath to the specified hotbar slot 0-9.",
          "CommandID": "cheat GiveSlotItem <Blueprint Path> <Slotnumber> <Quantity>"
        },
        {
          "Command": "GiveSlotItemNum",
          "CommandDesc": "This command will add the item based on the item number to the specified hotbar slot 0-9.",
          "CommandID": "cheat GiveSlotItemNum <Item Number> <Slotnumber> <Quantity>"
        },
        {
          "Command": "GiveToMe",
          "CommandDesc": "This command will transfer the targeted dino, item, structure or building to the user who enters this command. However when used on a dino, although the ownership will be transferred it will not be accessible or rideable unless the tame command (forcetame or dotame) is also used.",
          "CommandID": "cheat GiveToMe "
        },
        {
          "Command": "GMBuff",
          "CommandDesc": "This command will give you near unlimited experience, enable EnemyInvisible (so that creatures do not attack you), infinite stats and make you invincible (god mode).",
          "CommandID": "cheat GMBuff "
        },
        {
          "Command": "GMSummon",
          "CommandDesc": "This command spawns the creature with the specified entity ID and level in front of your character. Note that you must put quotation marks around the entity ID.",
          "CommandID": "cheat GMSummon <Entity ID> <Creature Level>"
        },
        {
          "Command": "God",
          "CommandDesc": "This command will make your character enter god mode if you are not already in god mode. If you are already in god mode, it will disable it. God mode makes you invincible to most forms of damage. You can still die via drowning when in god mode, so if you do not wish to drown, you will need to use the InfiniteStats command.",
          "CommandID": "cheat God "
        },
        {
          "Command": "HatchEgg",
          "CommandDesc": "This admin command instantly completes the incubation progress of the egg you are currently looking at (i.e. that your crosshair is over). Because this command only sets the incubation progress of an egg to 0%, you will need to make sure that hatching conditions (temperature) are met in order for the egg to hatch.",
          "CommandID": "cheat HatchEgg "
        },
        {
          "Command": "HideRiders",
          "CommandDesc": "This command will make players (or other riders) of dinosaurs invisible. After unmounting, they will stay invisible - they will need to rejoin the game, or turn this feature off to become visible again.",
          "CommandID": "cheat HideRiders <True / False>"
        },
        {
          "Command": "HideTutorial",
          "CommandDesc": "This command will hide the tutorial shown based on the index input when the “ShowTutorial” command was input.",
          "CommandID": "cheat HideTutorial <Tutorial Index>"
        },
        {
          "Command": "HurtMe",
          "CommandDesc": "This command will damage the player based on the amount input. So if you wanted to hurt yourself or kill yourself you input an amount that matches or exceeds your total health.",
          "CommandID": "cheat HurtMe <Amount>"
        },
        {
          "Command": "InfiniteStats",
          "CommandDesc": "This command will give you infinite stats: health, oxygen, stamina, food and water.",
          "CommandID": "cheat InfiniteStats "
        },
        {
          "Command": "InfiniteWeight",
          "CommandDesc": "This is a toggle command. Using this command will enable or disable infinite weight for your character, meaning you will not have any weight restrictions. When enabled, the maximum amount of inventory slots that you can have is 299 and you are only able to transfer up to two times the max carry weight of a creature into its inventory.",
          "CommandID": "cheat InfiniteWeight "
        },
        {
          "Command": "Kickplayer",
          "CommandDesc": "Will remove the player from the current game server based on the ID entered into the command input bar.",
          "CommandID": "cheat Kickplayer <Player ID>"
        },
        {
          "Command": "Kill",
          "CommandDesc": "This command will kill the entity or structure that is currently behind your crosshair (leaves a corpse).",
          "CommandID": "cheat Kill "
        },
        {
          "Command": "KillAOE",
          "CommandDesc": "This command will destroy all of the specified category within the specified radius. Categories are: pawns, dinos, tamed, players, wild, structures.",
          "CommandID": "cheat KillAOE <Category> <Radius>"
        },
        {
          "Command": "KillPlayer",
          "CommandDesc": "This command will kill the entity or structure that is currently behind your crosshair (leaves a corpse).",
          "CommandID": "cheat KillPlayer <Player ID>"
        },
        {
          "Command": "LeaveMeAlone",
          "CommandDesc": "This command will put you in god mode (God), give you infinite stats (InfiniteStats) and make creatures not attack you (EnemyInvisible).",
          "CommandID": "cheat LeaveMeAlone "
        },
        {
          "Command": "ListPlayers",
          "CommandDesc": "The command will send you a list of all players who are connected to the server, along with their IDs.",
          "CommandID": "cheat ListPlayers "
        },
        {
          "Command": "MakeTribeAdmin",
          "CommandDesc": "Will promote you to the admin of a tribe even if you were not the one who created it (you have to be a member of the tribe in question in order for this command to work).",
          "CommandID": "cheat MakeTribeAdmin "
        },
        {
          "Command": "MakeTribeFounder",
          "CommandDesc": "Will make you the founder go the tribe you are part of, even if you were not the one to originally make it.",
          "CommandID": "cheat MakeTribeFounder "
        },
        {
          "Command": "OnToggleInGameMenu",
          "CommandDesc": "Will open or close in-game menu (currently only used on PC version by hitting the Escape key).",
          "CommandID": "cheat OnToggleInGameMenu "
        },
        {
          "Command": "OpenMap",
          "CommandDesc": "This will open the map that has been specified in the mapname parameter.",
          "CommandID": "cheat OpenMap <Map>"
        },
        {
          "Command": "PlayersOnly",
          "CommandDesc": "Players can still all move upon entering this command but all dinos/creatures and even the crafting or items will be suspended or “frozen” until this command is input again into the command bar.",
          "CommandID": "cheat PlayersOnly "
        },
        {
          "Command": "PrintActorLocation",
          "CommandDesc": "This command prints to console the coordinates of the actor with the specified ID.",
          "CommandID": "cheat PrintActorLocation <Actor ID>"
        },
        {
          "Command": "PrintColors",
          "CommandDesc": "This command prints the Color ID’s.",
          "CommandID": "PrintColors "
        },
        {
          "Command": "RainCritters",
          "CommandDesc": "This command will spawn a random selection of sheep and dodos above you.",
          "CommandID": "cheat RainCritters <Amount> <Spread Radius> <Height>"
        },
        {
          "Command": "RainDanger",
          "CommandDesc": "This console command will spawn a random selection of Tyrannosauruses and Allosauruses above your character.",
          "CommandID": "cheat RainDanger <Amount> <Spread Radius> <Height>"
        },
        {
          "Command": "RainDinos",
          "CommandDesc": "This console command will spawn a random selection of trikes and parasaurs above your character.",
          "CommandID": "cheat RainDinos <Amount> <Spread Radius> <Height>"
        },
        {
          "Command": "RemoveTribeAdmin",
          "CommandDesc": "This command will remove the current tribe admin of your tribe to just simply be a member of that tribe.",
          "CommandID": "cheat RemoveTribeAdmin "
        },
        {
          "Command": "RenamePlayer",
          "CommandDesc": "This command will change the targeted player name based on their ID. A fun command to change the in-game display name of a player but will not affect any other element or property with their game. Purely visual.",
          "CommandID": "cheat RenamePlayer <Player ID> <New Name>"
        },
        {
          "Command": "RenameTribe",
          "CommandDesc": "This command will change the targeted tribe name based on their [tribename]. A fun command to change the in-game display name of a tribe but will not affect any other element or property with their game. Purely visual.",
          "CommandID": "cheat RenameTribe <Tribe Name> <New Name>"
        },
        {
          "Command": "RequestSpectator",
          "CommandDesc": "This command will request for spectator mode.",
          "CommandID": "RequestSpectator <Password>"
        },
        {
          "Command": "Saveworld",
          "CommandDesc": "This command will run a save command and cause all game settings and instances to save.",
          "CommandID": "cheat Saveworld "
        },
        {
          "Command": "ScriptCommand",
          "CommandDesc": "This command runs a command or script that is specific to the servers current game mode.",
          "CommandID": "cheat ScriptCommand <Commandstring>"
        },
        {
          "Command": "SDF",
          "CommandDesc": "This command spawns a creature in-front of you with a random level, relative to the creature ID specified.",
          "CommandID": "cheat SDF <Creature ID> <Tamed (True/False)> <Level>"
        },
        {
          "Command": "ServerChat",
          "CommandDesc": "This command sends a message in the chat to all players currently connected to the server.",
          "CommandID": "cheat ServerChat <Message>"
        },
        {
          "Command": "ServerChatTo",
          "CommandDesc": "This command will send a PM from the server to the player with the ID specified.",
          "CommandID": "cheat ServerChatTo <Player ID> <Message>"
        },
        {
          "Command": "ServerChatToPlayer",
          "CommandDesc": "This command will send a PM from the server to the player with the name (not ID) specified.",
          "CommandID": "cheat ServerChatToPlayer <Name> <Message>"
        },
        {
          "Command": "SetAdminIcon",
          "CommandDesc": "This command will show or hide your admin icon in the in-game chat that by default shows when cheats are enabled.",
          "CommandID": "cheat SetAdminIcon <True / False>"
        },
        {
          "Command": "SetBabyAge",
          "CommandDesc": "This command will set the age of the creature (provided it is a baby) behind your crosshair.",
          "CommandID": "cheat SetBabyAge <Age>"
        },
        {
          "Command": "SetCheatPlayer",
          "CommandDesc": "This command enables (true) or disables (false) cheats for the player that executes it.",
          "CommandID": "SetCheatPlayer <True / False>"
        },
        {
          "Command": "SetDifficultyValue",
          "CommandDesc": "This console command sets the maximum level that wild dinos can spawn at. Due to spawn limits, it is best to run the DestroyWildDinos command after using this command (as new dinos will only spawn in where there aren't enough existing ones).",
          "CommandID": "cheat SetDifficultyValue <Level>"
        },
        {
          "Command": "SetFacialHairPercent",
          "CommandDesc": "This command will set the age of the creature (provided it is a baby) behind your crosshair.",
          "CommandID": "cheat SetFacialHairPercent <Percentage>"
        },
        {
          "Command": "SetFacialHairStyle",
          "CommandDesc": "This command will set the style of your facial hair, relative to the facial hair ID specified (0-7).",
          "CommandID": "cheat SetFacialHairStyle <Facial Hair ID>"
        },
        {
          "Command": "SetGlobalPause",
          "CommandDesc": "This command will completely pause (or unpause) the game/server.",
          "CommandID": "cheat SetGlobalPause <True/False>"
        },
        {
          "Command": "SetGodMode",
          "CommandDesc": "This command to enable or disable god mode. God mode prevents your character from taking most forms of damage (you can still drown).",
          "CommandID": "cheat SetGodMode <True/False>"
        },
        {
          "Command": "SetGraphicsQuality",
          "CommandDesc": "This command sets your client's graphics quality, relative to the 'quality' number provided (0-3).",
          "CommandID": "cheat SetGraphicsQuality <Quality>"
        },
        {
          "Command": "SetHeadHairPercent",
          "CommandDesc": "This command sets the percentage of hair that is on your characters head.",
          "CommandID": "cheat SetHeadHairPercent <Percentage>"
        },
        {
          "Command": "SetHeadHairStyle",
          "CommandDesc": "This command will set the style of your hair, relative to the hair ID specified (0-7).",
          "CommandID": "cheat SetHeadHairStyle <Hair ID>"
        },
        {
          "Command": "SetImprintedPlayer",
          "CommandDesc": "This command will change the imprinted player for the dinosaur that your crosshair is over to the player with the specified name and ID. Use TransferImprints to transfer all of a player's imprinted dinos to you.",
          "CommandID": "cheat SetImprintedPlayer <Name> <Player ID>"
        },
        {
          "Command": "SetImprintQuality",
          "CommandDesc": "This command will set the quality of the entity under your crosshair.",
          "CommandID": "cheat SetImprintQuality <Percentage>"
        },
        {
          "Command": "SetMessageOfTheDay",
          "CommandDesc": "This command sets the MOTD (message of the day). The MOTD is a message that is displayed to a player when they connect to the server.",
          "CommandID": "cheat SetMessageOfTheDay <Message>"
        },
        {
          "Command": "SetMyTargetSleeping",
          "CommandDesc": "This command, if you specify '1' (without quotes) as an argument will put to sleep (knock out) the dinosaur, player, or entity, that your crosshair is over. If '0' (without quotes) is specified as an argument, it will wake up the player or dino under your crosshair.",
          "CommandID": "cheat SetMyTargetSleeping <True / False>"
        },
        {
          "Command": "SetPlayerPos",
          "CommandDesc": "This command will teleport your character to the specified coordinates. View our Map to find out common coordinates.",
          "CommandID": "cheat SetPlayerPos <X> <Y> <Z>"
        },
        {
          "Command": "SetShowAllPlayers",
          "CommandDesc": "This command enables/disables names when in spectator mode.",
          "CommandID": "cheat SetShowAllPlayers <True / False>"
        },
        {
          "Command": "SetStatOnTarget",
          "CommandDesc": "This console command sets a specified stat to a specified value for the creature, structure or player behind your crosshair (your target).",
          "CommandID": "cheat SetStatOnTarget <Stat> <Value>"
        },
        {
          "Command": "SetTargetDinoColor",
          "CommandDesc": "The command will set the color of the dino (relative to the color ID and region specified) your crosshair is currently over.",
          "CommandID": "cheat SetTargetDinoColor <Region> <Color ID>"
        },
        {
          "Command": "SetTargetPlayerBodyVal",
          "CommandDesc": "This command allows you to resize a specific part of a character's body. Note that the player may have to respawn for the changes to take effect.",
          "CommandID": "cheat SetTargetPlayerBodyVal <Body Region ID> <Scale>"
        },
        {
          "Command": "SetTargetPlayerColorVal",
          "CommandDesc": "This command allows you to recolor a specific part of a character's body. Note that the player may have to respawn for the changes to take effect.",
          "CommandID": "cheat SetTargetPlayerColorVal <Body Part> <Color>"
        },
        {
          "Command": "SetTimeOfDay",
          "CommandDesc": "his command sets the time of the day in the current game world.",
          "CommandID": "cheat SetTimeOfDay <Hour:Minute[:Second]>"
        },
        {
          "Command": "Showdebug",
          "CommandDesc": "This command shows debug information overlays, relative to the debug type specified. Types: reset (disables all debug screens), physics, camera, bones, animation, input, collision, net, weapon and ai.",
          "CommandID": "cheat Showdebug <Debug Type>"
        },
        {
          "Command": "ShowInGameMenu",
          "CommandDesc": "This command will show the in-game menu.",
          "CommandID": "cheat ShowInGameMenu "
        },
        {
          "Command": "ShowMessageOfTheDay",
          "CommandDesc": "This command will send you a chat message with the server's current MOTD (message of the day).",
          "CommandID": "ShowMessageOfTheDay "
        },
        {
          "Command": "ShowMyAdminManager",
          "CommandDesc": "This command opens the admin management interface, which has a lot of useful admin tools.",
          "CommandID": "cheat ShowMyAdminManager "
        },
        {
          "Command": "ShowTutorial",
          "CommandDesc": "This command shows a tutorial, relative to the tutorial ID entered.",
          "CommandID": "cheat ShowTutorial <Tutorial ID> <Force Display>"
        },
        {
          "Command": "Slomo",
          "CommandDesc": "This command sets the speed multiplier of the game, allowing you to speed it up or slow it down, 1 is default/normal speed.",
          "CommandID": "cheat Slomo <Multiplier>"
        },
        {
          "Command": "SpawnActor",
          "CommandDesc": "This command spawns an entity, relative to the blueprint specified, with a random level.",
          "CommandID": "cheat SpawnActor <Blueprint> <Spawn Distance> <Y Offset> <Z Offset>"
        },
        {
          "Command": "SpawnActorSpread",
          "CommandDesc": "This command spawns a given amount of entities, relative to the blueprint specified.",
          "CommandID": "cheat SpawnActorSpread <Blueprint> <Spawn Distance> <Y Offset> <Z Offset> <Amount> <Radius>"
        },
        {
          "Command": "SpawnDino",
          "CommandDesc": "This command spawns an entity (creature or dinosaur), relative to the blueprint path and level specified. Specify Y/Z offsets to change the location it will spawn at (relative to your character).",
          "CommandID": "cheat SpawnDino <Blueprint> <Spawn Distance> <Y Offset> <Z Offset> <Level>"
        },
        {
          "Command": "SpawnExactDino",
          "CommandDesc": "This command spawns the specified creature with all of the specified settings. You will need to put the spawned creature into a crypod and then take it out in order for it to function correctly. See the argument information and/or the command builder for more help using this command. Set arguments to 0 (numbers) or \"\" (text) to skip them.",
          "CommandID": "cheat SpawnExactDino <Blueprint> <Saddle Blueprint> <Saddle Quality> <Base Level> <Extra Levels> <Base Stats> <Added Stats> <Name> <Cloned> <Neutered> <Tamed Date> <Uploaded From> <Imprinter Name> <Imprinter ID> <Imprint Quality> <0> <Region Colors> <Creature ID> <Experience> <Spawn Distance> <Spawn Y> <Spawn Z>"
        },
        {
          "Command": "SpawnSetupDino",
          "CommandDesc": "This command will spawn a dinosaur (specified by blueprint path) with your desired configuration. This command allows you to specify the saddle, level, stats, and location of the spawned dino.",
          "CommandID": "cheat SpawnSetupDino <Blueprint Path> <Blueprint Path (Saddle)> <Saddle Quality> <Level> <Stats> <Spawn Distance> <Y Offset> <Z Offset>"
        },
        {
          "Command": "Stat",
          "CommandDesc": "This command toggles on-screen debug information for the specified stat. Types are: FPS, Levels, Unit and UnitGraph.",
          "CommandID": "cheat Stat <Stat Type>"
        },
        {
          "Command": "StopSpectating",
          "CommandDesc": "This command disables spectator mode for your character.",
          "CommandID": "StopSpectating "
        },
        {
          "Command": "Suicide",
          "CommandDesc": "This command will forcefully kill your character.",
          "CommandID": "cheat Suicide "
        },
        {
          "Command": "Summon",
          "CommandDesc": "This command will spawn a creature, relative to the entity ID specified.",
          "CommandID": "cheat Summon <Entity ID>"
        },
        {
          "Command": "SummonTamed",
          "CommandDesc": "This command will spawn a tamed creature, relative to the entity ID specified.",
          "CommandID": "cheat SummonTamed <Entity ID>"
        },
        {
          "Command": "TakeAllDino",
          "CommandDesc": "This command will forcefully make your tribe the owner of <strong>all dinos</strong> that belong to the tribe of the entity/structure your crosshair is over.",
          "CommandID": "cheat TakeAllDino "
        },
        {
          "Command": "TakeAllStructure",
          "CommandDesc": "This command will forcefully make your tribe the owner of <strong>all structures</strong> that belong to the tribe of the entity/structure your crosshair is over.",
          "CommandID": "cheat TakeAllStructure "
        },
        {
          "Command": "TakeTribe",
          "CommandDesc": "This admin command will transfer all of the dinosaurs and structures of the tribe with the specified ID to you.",
          "CommandID": "cheat TakeTribe <Tribe ID>"
        },
        {
          "Command": "Teleport",
          "CommandDesc": "This command will move your character forward (very fast) until you collide with something.",
          "CommandID": "cheat Teleport "
        },
        {
          "Command": "TeleportPlayerIDToMe",
          "CommandDesc": "This command will teleport a player to you, specified by their player ID.",
          "CommandID": "cheat TeleportPlayerIDToMe <Player ID>"
        },
        {
          "Command": "TeleportPlayerNameToMe",
          "CommandDesc": "This command will teleport a player to you, specified by their player name (not ID).",
          "CommandID": "cheat TeleportPlayerNameToMe <Player Name>"
        },
        {
          "Command": "TeleportToActorLocation",
          "CommandDesc": "This admin command will teleport you to the location of the actor with the specified actor ID.",
          "CommandID": "cheat TeleportToActorLocation <Actor ID>"
        },
        {
          "Command": "TeleportToPlayer",
          "CommandDesc": "This command will teleport you to the player with the specified player ID.",
          "CommandID": "cheat TeleportToPlayer <Player ID>"
        },
        {
          "Command": "TestSteamRefreshItems",
          "CommandDesc": "This command will check that Steam can refresh items.",
          "CommandID": "cheat TestSteamRefreshItems "
        },
        {
          "Command": "ToggleGun",
          "CommandDesc": "This command toggles the visibility of the item in your hands. If you do not have an item in your hands, and this setting is enabled, your hands will be hidden.",
          "CommandID": "cheat ToggleGun "
        },
        {
          "Command": "ToggleInfiniteAmmo",
          "CommandDesc": "The command will toggle on or off unlimited ammo for any weapons that your character fires.",
          "CommandID": "cheat ToggleInfiniteAmmo "
        },
        {
          "Command": "TransferImprints",
          "CommandDesc": "This command will change the imprinted player for the dinosaur that your crosshair is over to the player with the specified name and ID. Use TransferImprints to transfer all of a player's imprinted dinos to you.",
          "CommandID": "cheat TransferImprints <Player ID> <Player ID> <Player Name>"
        },
        {
          "Command": "TribeDinoAudit",
          "CommandDesc": "This console command will list all of the dinos that the tribe with the specified ID has, along with the amount of each dino that they have.",
          "CommandID": "cheat TribeDinoAudit <Tribe ID>"
        },
        {
          "Command": "TribeMessage",
          "CommandDesc": "This admin command sends a message to the tribe with the specified ID.",
          "CommandID": "cheat TribeMessage <Tribe ID> <Message>"
        },
        {
          "Command": "UnbanPlayer",
          "CommandDesc": "This command will unban a player from the server, relative to the ID specified.",
          "CommandID": "cheat UnbanPlayer <Player ID>"
        },
        {
          "Command": "UnlockEngram",
          "CommandDesc": "This command will unlock Tek Engrams/Tekgrams, specified by their blueprint path.",
          "CommandID": "cheat UnlockEngram <Blueprint>"
        },
        {
          "Command": "Walk",
          "CommandDesc": "This command deactivates fly mode, meaning your character will again be affected by the game's physics.",
          "CommandID": "cheat Walk "
        }
]
      