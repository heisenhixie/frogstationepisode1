gdjs.whiteCode = {};
gdjs.whiteCode.localVariables = [];
gdjs.whiteCode.GDmouseObjects1= [];
gdjs.whiteCode.GDmouseObjects2= [];
gdjs.whiteCode.GDfpsObjects1= [];
gdjs.whiteCode.GDfpsObjects2= [];
gdjs.whiteCode.GDcursorgamepadObjects1= [];
gdjs.whiteCode.GDcursorgamepadObjects2= [];
gdjs.whiteCode.GDshootsparksObjects1= [];
gdjs.whiteCode.GDshootsparksObjects2= [];
gdjs.whiteCode.GDfrogstationNewObjects1= [];
gdjs.whiteCode.GDfrogstationNewObjects2= [];
gdjs.whiteCode.GDstatusIconnewObjects1= [];
gdjs.whiteCode.GDstatusIconnewObjects2= [];
gdjs.whiteCode.GDHealthBgObjects1= [];
gdjs.whiteCode.GDHealthBgObjects2= [];
gdjs.whiteCode.GDHealthBarObjects1= [];
gdjs.whiteCode.GDHealthBarObjects2= [];
gdjs.whiteCode.GDAmmoObjects1= [];
gdjs.whiteCode.GDAmmoObjects2= [];
gdjs.whiteCode.GDpeanutnewObjects1= [];
gdjs.whiteCode.GDpeanutnewObjects2= [];
gdjs.whiteCode.GDpeanutpacknewObjects1= [];
gdjs.whiteCode.GDpeanutpacknewObjects2= [];
gdjs.whiteCode.GDpeanutpackgonenewObjects1= [];
gdjs.whiteCode.GDpeanutpackgonenewObjects2= [];
gdjs.whiteCode.GDSaveTextObjects1= [];
gdjs.whiteCode.GDSaveTextObjects2= [];
gdjs.whiteCode.GDpartnerSchrudeObjects1= [];
gdjs.whiteCode.GDpartnerSchrudeObjects2= [];
gdjs.whiteCode.GDpartnerDooboxxObjects1= [];
gdjs.whiteCode.GDpartnerDooboxxObjects2= [];
gdjs.whiteCode.GDpartnerKawaibillyObjects1= [];
gdjs.whiteCode.GDpartnerKawaibillyObjects2= [];
gdjs.whiteCode.GDrandomassboxObjects1= [];
gdjs.whiteCode.GDrandomassboxObjects2= [];
gdjs.whiteCode.GDshardsObjects1= [];
gdjs.whiteCode.GDshardsObjects2= [];
gdjs.whiteCode.GDschmoschmoObjects1= [];
gdjs.whiteCode.GDschmoschmoObjects2= [];
gdjs.whiteCode.GDQObjects1= [];
gdjs.whiteCode.GDQObjects2= [];
gdjs.whiteCode.GDauraofpeanObjects1= [];
gdjs.whiteCode.GDauraofpeanObjects2= [];
gdjs.whiteCode.GDpartnerGenkObjects1= [];
gdjs.whiteCode.GDpartnerGenkObjects2= [];
gdjs.whiteCode.GDpartnerSteveObjects1= [];
gdjs.whiteCode.GDpartnerSteveObjects2= [];
gdjs.whiteCode.GDhatsObjects1= [];
gdjs.whiteCode.GDhatsObjects2= [];
gdjs.whiteCode.GDSubtitlesObjects1= [];
gdjs.whiteCode.GDSubtitlesObjects2= [];
gdjs.whiteCode.GDelectricfxfxObjects1= [];
gdjs.whiteCode.GDelectricfxfxObjects2= [];
gdjs.whiteCode.GDEPRESObjects1= [];
gdjs.whiteCode.GDEPRESObjects2= [];
gdjs.whiteCode.GDschmoschmo2bladeObjects1= [];
gdjs.whiteCode.GDschmoschmo2bladeObjects2= [];
gdjs.whiteCode.GDweedwhackersliceObjects1= [];
gdjs.whiteCode.GDweedwhackersliceObjects2= [];


gdjs.whiteCode.mapOfGDgdjs_9546whiteCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.whiteCode.GDfpsObjects1});
gdjs.whiteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tweettweetnigga\\flashbang.ogg", false, 27, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "oooo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "oooo") >= 6;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prison", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.whiteCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.whiteCode.mapOfGDgdjs_9546whiteCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.whiteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.whiteCode.GDmouseObjects1.length = 0;
gdjs.whiteCode.GDmouseObjects2.length = 0;
gdjs.whiteCode.GDfpsObjects1.length = 0;
gdjs.whiteCode.GDfpsObjects2.length = 0;
gdjs.whiteCode.GDcursorgamepadObjects1.length = 0;
gdjs.whiteCode.GDcursorgamepadObjects2.length = 0;
gdjs.whiteCode.GDshootsparksObjects1.length = 0;
gdjs.whiteCode.GDshootsparksObjects2.length = 0;
gdjs.whiteCode.GDfrogstationNewObjects1.length = 0;
gdjs.whiteCode.GDfrogstationNewObjects2.length = 0;
gdjs.whiteCode.GDstatusIconnewObjects1.length = 0;
gdjs.whiteCode.GDstatusIconnewObjects2.length = 0;
gdjs.whiteCode.GDHealthBgObjects1.length = 0;
gdjs.whiteCode.GDHealthBgObjects2.length = 0;
gdjs.whiteCode.GDHealthBarObjects1.length = 0;
gdjs.whiteCode.GDHealthBarObjects2.length = 0;
gdjs.whiteCode.GDAmmoObjects1.length = 0;
gdjs.whiteCode.GDAmmoObjects2.length = 0;
gdjs.whiteCode.GDpeanutnewObjects1.length = 0;
gdjs.whiteCode.GDpeanutnewObjects2.length = 0;
gdjs.whiteCode.GDpeanutpacknewObjects1.length = 0;
gdjs.whiteCode.GDpeanutpacknewObjects2.length = 0;
gdjs.whiteCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.whiteCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.whiteCode.GDSaveTextObjects1.length = 0;
gdjs.whiteCode.GDSaveTextObjects2.length = 0;
gdjs.whiteCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.whiteCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.whiteCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.whiteCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.whiteCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.whiteCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.whiteCode.GDrandomassboxObjects1.length = 0;
gdjs.whiteCode.GDrandomassboxObjects2.length = 0;
gdjs.whiteCode.GDshardsObjects1.length = 0;
gdjs.whiteCode.GDshardsObjects2.length = 0;
gdjs.whiteCode.GDschmoschmoObjects1.length = 0;
gdjs.whiteCode.GDschmoschmoObjects2.length = 0;
gdjs.whiteCode.GDQObjects1.length = 0;
gdjs.whiteCode.GDQObjects2.length = 0;
gdjs.whiteCode.GDauraofpeanObjects1.length = 0;
gdjs.whiteCode.GDauraofpeanObjects2.length = 0;
gdjs.whiteCode.GDpartnerGenkObjects1.length = 0;
gdjs.whiteCode.GDpartnerGenkObjects2.length = 0;
gdjs.whiteCode.GDpartnerSteveObjects1.length = 0;
gdjs.whiteCode.GDpartnerSteveObjects2.length = 0;
gdjs.whiteCode.GDhatsObjects1.length = 0;
gdjs.whiteCode.GDhatsObjects2.length = 0;
gdjs.whiteCode.GDSubtitlesObjects1.length = 0;
gdjs.whiteCode.GDSubtitlesObjects2.length = 0;
gdjs.whiteCode.GDelectricfxfxObjects1.length = 0;
gdjs.whiteCode.GDelectricfxfxObjects2.length = 0;
gdjs.whiteCode.GDEPRESObjects1.length = 0;
gdjs.whiteCode.GDEPRESObjects2.length = 0;
gdjs.whiteCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.whiteCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.whiteCode.GDweedwhackersliceObjects1.length = 0;
gdjs.whiteCode.GDweedwhackersliceObjects2.length = 0;

gdjs.whiteCode.eventsList0(runtimeScene);
gdjs.whiteCode.GDmouseObjects1.length = 0;
gdjs.whiteCode.GDmouseObjects2.length = 0;
gdjs.whiteCode.GDfpsObjects1.length = 0;
gdjs.whiteCode.GDfpsObjects2.length = 0;
gdjs.whiteCode.GDcursorgamepadObjects1.length = 0;
gdjs.whiteCode.GDcursorgamepadObjects2.length = 0;
gdjs.whiteCode.GDshootsparksObjects1.length = 0;
gdjs.whiteCode.GDshootsparksObjects2.length = 0;
gdjs.whiteCode.GDfrogstationNewObjects1.length = 0;
gdjs.whiteCode.GDfrogstationNewObjects2.length = 0;
gdjs.whiteCode.GDstatusIconnewObjects1.length = 0;
gdjs.whiteCode.GDstatusIconnewObjects2.length = 0;
gdjs.whiteCode.GDHealthBgObjects1.length = 0;
gdjs.whiteCode.GDHealthBgObjects2.length = 0;
gdjs.whiteCode.GDHealthBarObjects1.length = 0;
gdjs.whiteCode.GDHealthBarObjects2.length = 0;
gdjs.whiteCode.GDAmmoObjects1.length = 0;
gdjs.whiteCode.GDAmmoObjects2.length = 0;
gdjs.whiteCode.GDpeanutnewObjects1.length = 0;
gdjs.whiteCode.GDpeanutnewObjects2.length = 0;
gdjs.whiteCode.GDpeanutpacknewObjects1.length = 0;
gdjs.whiteCode.GDpeanutpacknewObjects2.length = 0;
gdjs.whiteCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.whiteCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.whiteCode.GDSaveTextObjects1.length = 0;
gdjs.whiteCode.GDSaveTextObjects2.length = 0;
gdjs.whiteCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.whiteCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.whiteCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.whiteCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.whiteCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.whiteCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.whiteCode.GDrandomassboxObjects1.length = 0;
gdjs.whiteCode.GDrandomassboxObjects2.length = 0;
gdjs.whiteCode.GDshardsObjects1.length = 0;
gdjs.whiteCode.GDshardsObjects2.length = 0;
gdjs.whiteCode.GDschmoschmoObjects1.length = 0;
gdjs.whiteCode.GDschmoschmoObjects2.length = 0;
gdjs.whiteCode.GDQObjects1.length = 0;
gdjs.whiteCode.GDQObjects2.length = 0;
gdjs.whiteCode.GDauraofpeanObjects1.length = 0;
gdjs.whiteCode.GDauraofpeanObjects2.length = 0;
gdjs.whiteCode.GDpartnerGenkObjects1.length = 0;
gdjs.whiteCode.GDpartnerGenkObjects2.length = 0;
gdjs.whiteCode.GDpartnerSteveObjects1.length = 0;
gdjs.whiteCode.GDpartnerSteveObjects2.length = 0;
gdjs.whiteCode.GDhatsObjects1.length = 0;
gdjs.whiteCode.GDhatsObjects2.length = 0;
gdjs.whiteCode.GDSubtitlesObjects1.length = 0;
gdjs.whiteCode.GDSubtitlesObjects2.length = 0;
gdjs.whiteCode.GDelectricfxfxObjects1.length = 0;
gdjs.whiteCode.GDelectricfxfxObjects2.length = 0;
gdjs.whiteCode.GDEPRESObjects1.length = 0;
gdjs.whiteCode.GDEPRESObjects2.length = 0;
gdjs.whiteCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.whiteCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.whiteCode.GDweedwhackersliceObjects1.length = 0;
gdjs.whiteCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['whiteCode'] = gdjs.whiteCode;
