gdjs.presentCode = {};
gdjs.presentCode.localVariables = [];
gdjs.presentCode.GDhourObjects1= [];
gdjs.presentCode.GDhourObjects2= [];
gdjs.presentCode.GDmouseObjects1= [];
gdjs.presentCode.GDmouseObjects2= [];
gdjs.presentCode.GDfpsObjects1= [];
gdjs.presentCode.GDfpsObjects2= [];
gdjs.presentCode.GDcursorgamepadObjects1= [];
gdjs.presentCode.GDcursorgamepadObjects2= [];
gdjs.presentCode.GDshootsparksObjects1= [];
gdjs.presentCode.GDshootsparksObjects2= [];
gdjs.presentCode.GDfrogstationNewObjects1= [];
gdjs.presentCode.GDfrogstationNewObjects2= [];
gdjs.presentCode.GDstatusIconnewObjects1= [];
gdjs.presentCode.GDstatusIconnewObjects2= [];
gdjs.presentCode.GDHealthBgObjects1= [];
gdjs.presentCode.GDHealthBgObjects2= [];
gdjs.presentCode.GDHealthBarObjects1= [];
gdjs.presentCode.GDHealthBarObjects2= [];
gdjs.presentCode.GDAmmoObjects1= [];
gdjs.presentCode.GDAmmoObjects2= [];
gdjs.presentCode.GDpeanutnewObjects1= [];
gdjs.presentCode.GDpeanutnewObjects2= [];
gdjs.presentCode.GDpeanutpacknewObjects1= [];
gdjs.presentCode.GDpeanutpacknewObjects2= [];
gdjs.presentCode.GDpeanutpackgonenewObjects1= [];
gdjs.presentCode.GDpeanutpackgonenewObjects2= [];
gdjs.presentCode.GDSaveTextObjects1= [];
gdjs.presentCode.GDSaveTextObjects2= [];
gdjs.presentCode.GDpartnerSchrudeObjects1= [];
gdjs.presentCode.GDpartnerSchrudeObjects2= [];
gdjs.presentCode.GDpartnerDooboxxObjects1= [];
gdjs.presentCode.GDpartnerDooboxxObjects2= [];
gdjs.presentCode.GDpartnerKawaibillyObjects1= [];
gdjs.presentCode.GDpartnerKawaibillyObjects2= [];
gdjs.presentCode.GDrandomassboxObjects1= [];
gdjs.presentCode.GDrandomassboxObjects2= [];
gdjs.presentCode.GDshardsObjects1= [];
gdjs.presentCode.GDshardsObjects2= [];
gdjs.presentCode.GDschmoschmoObjects1= [];
gdjs.presentCode.GDschmoschmoObjects2= [];
gdjs.presentCode.GDQObjects1= [];
gdjs.presentCode.GDQObjects2= [];
gdjs.presentCode.GDauraofpeanObjects1= [];
gdjs.presentCode.GDauraofpeanObjects2= [];
gdjs.presentCode.GDpartnerGenkObjects1= [];
gdjs.presentCode.GDpartnerGenkObjects2= [];
gdjs.presentCode.GDpartnerSteveObjects1= [];
gdjs.presentCode.GDpartnerSteveObjects2= [];
gdjs.presentCode.GDhatsObjects1= [];
gdjs.presentCode.GDhatsObjects2= [];
gdjs.presentCode.GDSubtitlesObjects1= [];
gdjs.presentCode.GDSubtitlesObjects2= [];
gdjs.presentCode.GDelectricfxfxObjects1= [];
gdjs.presentCode.GDelectricfxfxObjects2= [];
gdjs.presentCode.GDEPRESObjects1= [];
gdjs.presentCode.GDEPRESObjects2= [];
gdjs.presentCode.GDschmoschmo2bladeObjects1= [];
gdjs.presentCode.GDschmoschmo2bladeObjects2= [];
gdjs.presentCode.GDweedwhackersliceObjects1= [];
gdjs.presentCode.GDweedwhackersliceObjects2= [];


gdjs.presentCode.mapOfGDgdjs_9546presentCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.presentCode.GDfpsObjects1});
gdjs.presentCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hr") >= 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "resist", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hr");
}{gdjs.evtTools.sound.playSound(runtimeScene, "TIMECARD.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.presentCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.presentCode.mapOfGDgdjs_9546presentCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.presentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.presentCode.GDhourObjects1.length = 0;
gdjs.presentCode.GDhourObjects2.length = 0;
gdjs.presentCode.GDmouseObjects1.length = 0;
gdjs.presentCode.GDmouseObjects2.length = 0;
gdjs.presentCode.GDfpsObjects1.length = 0;
gdjs.presentCode.GDfpsObjects2.length = 0;
gdjs.presentCode.GDcursorgamepadObjects1.length = 0;
gdjs.presentCode.GDcursorgamepadObjects2.length = 0;
gdjs.presentCode.GDshootsparksObjects1.length = 0;
gdjs.presentCode.GDshootsparksObjects2.length = 0;
gdjs.presentCode.GDfrogstationNewObjects1.length = 0;
gdjs.presentCode.GDfrogstationNewObjects2.length = 0;
gdjs.presentCode.GDstatusIconnewObjects1.length = 0;
gdjs.presentCode.GDstatusIconnewObjects2.length = 0;
gdjs.presentCode.GDHealthBgObjects1.length = 0;
gdjs.presentCode.GDHealthBgObjects2.length = 0;
gdjs.presentCode.GDHealthBarObjects1.length = 0;
gdjs.presentCode.GDHealthBarObjects2.length = 0;
gdjs.presentCode.GDAmmoObjects1.length = 0;
gdjs.presentCode.GDAmmoObjects2.length = 0;
gdjs.presentCode.GDpeanutnewObjects1.length = 0;
gdjs.presentCode.GDpeanutnewObjects2.length = 0;
gdjs.presentCode.GDpeanutpacknewObjects1.length = 0;
gdjs.presentCode.GDpeanutpacknewObjects2.length = 0;
gdjs.presentCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.presentCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.presentCode.GDSaveTextObjects1.length = 0;
gdjs.presentCode.GDSaveTextObjects2.length = 0;
gdjs.presentCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.presentCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.presentCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.presentCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.presentCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.presentCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.presentCode.GDrandomassboxObjects1.length = 0;
gdjs.presentCode.GDrandomassboxObjects2.length = 0;
gdjs.presentCode.GDshardsObjects1.length = 0;
gdjs.presentCode.GDshardsObjects2.length = 0;
gdjs.presentCode.GDschmoschmoObjects1.length = 0;
gdjs.presentCode.GDschmoschmoObjects2.length = 0;
gdjs.presentCode.GDQObjects1.length = 0;
gdjs.presentCode.GDQObjects2.length = 0;
gdjs.presentCode.GDauraofpeanObjects1.length = 0;
gdjs.presentCode.GDauraofpeanObjects2.length = 0;
gdjs.presentCode.GDpartnerGenkObjects1.length = 0;
gdjs.presentCode.GDpartnerGenkObjects2.length = 0;
gdjs.presentCode.GDpartnerSteveObjects1.length = 0;
gdjs.presentCode.GDpartnerSteveObjects2.length = 0;
gdjs.presentCode.GDhatsObjects1.length = 0;
gdjs.presentCode.GDhatsObjects2.length = 0;
gdjs.presentCode.GDSubtitlesObjects1.length = 0;
gdjs.presentCode.GDSubtitlesObjects2.length = 0;
gdjs.presentCode.GDelectricfxfxObjects1.length = 0;
gdjs.presentCode.GDelectricfxfxObjects2.length = 0;
gdjs.presentCode.GDEPRESObjects1.length = 0;
gdjs.presentCode.GDEPRESObjects2.length = 0;
gdjs.presentCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.presentCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.presentCode.GDweedwhackersliceObjects1.length = 0;
gdjs.presentCode.GDweedwhackersliceObjects2.length = 0;

gdjs.presentCode.eventsList0(runtimeScene);
gdjs.presentCode.GDhourObjects1.length = 0;
gdjs.presentCode.GDhourObjects2.length = 0;
gdjs.presentCode.GDmouseObjects1.length = 0;
gdjs.presentCode.GDmouseObjects2.length = 0;
gdjs.presentCode.GDfpsObjects1.length = 0;
gdjs.presentCode.GDfpsObjects2.length = 0;
gdjs.presentCode.GDcursorgamepadObjects1.length = 0;
gdjs.presentCode.GDcursorgamepadObjects2.length = 0;
gdjs.presentCode.GDshootsparksObjects1.length = 0;
gdjs.presentCode.GDshootsparksObjects2.length = 0;
gdjs.presentCode.GDfrogstationNewObjects1.length = 0;
gdjs.presentCode.GDfrogstationNewObjects2.length = 0;
gdjs.presentCode.GDstatusIconnewObjects1.length = 0;
gdjs.presentCode.GDstatusIconnewObjects2.length = 0;
gdjs.presentCode.GDHealthBgObjects1.length = 0;
gdjs.presentCode.GDHealthBgObjects2.length = 0;
gdjs.presentCode.GDHealthBarObjects1.length = 0;
gdjs.presentCode.GDHealthBarObjects2.length = 0;
gdjs.presentCode.GDAmmoObjects1.length = 0;
gdjs.presentCode.GDAmmoObjects2.length = 0;
gdjs.presentCode.GDpeanutnewObjects1.length = 0;
gdjs.presentCode.GDpeanutnewObjects2.length = 0;
gdjs.presentCode.GDpeanutpacknewObjects1.length = 0;
gdjs.presentCode.GDpeanutpacknewObjects2.length = 0;
gdjs.presentCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.presentCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.presentCode.GDSaveTextObjects1.length = 0;
gdjs.presentCode.GDSaveTextObjects2.length = 0;
gdjs.presentCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.presentCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.presentCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.presentCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.presentCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.presentCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.presentCode.GDrandomassboxObjects1.length = 0;
gdjs.presentCode.GDrandomassboxObjects2.length = 0;
gdjs.presentCode.GDshardsObjects1.length = 0;
gdjs.presentCode.GDshardsObjects2.length = 0;
gdjs.presentCode.GDschmoschmoObjects1.length = 0;
gdjs.presentCode.GDschmoschmoObjects2.length = 0;
gdjs.presentCode.GDQObjects1.length = 0;
gdjs.presentCode.GDQObjects2.length = 0;
gdjs.presentCode.GDauraofpeanObjects1.length = 0;
gdjs.presentCode.GDauraofpeanObjects2.length = 0;
gdjs.presentCode.GDpartnerGenkObjects1.length = 0;
gdjs.presentCode.GDpartnerGenkObjects2.length = 0;
gdjs.presentCode.GDpartnerSteveObjects1.length = 0;
gdjs.presentCode.GDpartnerSteveObjects2.length = 0;
gdjs.presentCode.GDhatsObjects1.length = 0;
gdjs.presentCode.GDhatsObjects2.length = 0;
gdjs.presentCode.GDSubtitlesObjects1.length = 0;
gdjs.presentCode.GDSubtitlesObjects2.length = 0;
gdjs.presentCode.GDelectricfxfxObjects1.length = 0;
gdjs.presentCode.GDelectricfxfxObjects2.length = 0;
gdjs.presentCode.GDEPRESObjects1.length = 0;
gdjs.presentCode.GDEPRESObjects2.length = 0;
gdjs.presentCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.presentCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.presentCode.GDweedwhackersliceObjects1.length = 0;
gdjs.presentCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['presentCode'] = gdjs.presentCode;
