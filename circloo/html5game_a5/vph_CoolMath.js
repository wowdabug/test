function funmathCallStart()
{
	if (typeof parent.cmgGameEvent === "function") {
		try {
			parent.cmgGameEvent("start");
		} catch (e) {}
	}
	console.log("game start event");
}

function funmathCallLevelStart(lvl)
{
	if (typeof parent.cmgGameEvent === "function") {
		try {
			parent.cmgGameEvent("start", String(lvl)); // where 1 is the level
		} catch (e) {}
	}
	console.log("level start " + lvl);
}

function funmathCallLevelRestart(lvl)
{
	if (typeof parent.cmgGameEvent === "function") {
		try {
			parent.cmgGameEvent("replay", String(lvl)); // where 1 is the level
		} catch (e) {}
	}
	console.log("level restart " + lvl);
}

var shouldUnlockAll = false;

function unlockAllLevels()
{
	shouldUnlockAll = true;
}

function coolMathShouldUnlockAll()
{
	return shouldUnlockAll;
}