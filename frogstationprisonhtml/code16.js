gdjs.an_32hour_32beforeCode = {};
gdjs.an_32hour_32beforeCode.localVariables = [];
gdjs.an_32hour_32beforeCode.GDhourObjects1= [];
gdjs.an_32hour_32beforeCode.GDhourObjects2= [];
gdjs.an_32hour_32beforeCode.GDmouseObjects1= [];
gdjs.an_32hour_32beforeCode.GDmouseObjects2= [];
gdjs.an_32hour_32beforeCode.GDfpsObjects1= [];
gdjs.an_32hour_32beforeCode.GDfpsObjects2= [];
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects1= [];
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects2= [];
gdjs.an_32hour_32beforeCode.GDshootsparksObjects1= [];
gdjs.an_32hour_32beforeCode.GDshootsparksObjects2= [];
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects1= [];
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects2= [];
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects1= [];
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects2= [];
gdjs.an_32hour_32beforeCode.GDHealthBgObjects1= [];
gdjs.an_32hour_32beforeCode.GDHealthBgObjects2= [];
gdjs.an_32hour_32beforeCode.GDHealthBarObjects1= [];
gdjs.an_32hour_32beforeCode.GDHealthBarObjects2= [];
gdjs.an_32hour_32beforeCode.GDAmmoObjects1= [];
gdjs.an_32hour_32beforeCode.GDAmmoObjects2= [];
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects1= [];
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects2= [];
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects1= [];
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects2= [];
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects1= [];
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects2= [];
gdjs.an_32hour_32beforeCode.GDSaveTextObjects1= [];
gdjs.an_32hour_32beforeCode.GDSaveTextObjects2= [];
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects1= [];
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects2= [];
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects1= [];
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects2= [];
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects1= [];
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects2= [];
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects1= [];
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects2= [];
gdjs.an_32hour_32beforeCode.GDshardsObjects1= [];
gdjs.an_32hour_32beforeCode.GDshardsObjects2= [];
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects1= [];
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects2= [];
gdjs.an_32hour_32beforeCode.GDQObjects1= [];
gdjs.an_32hour_32beforeCode.GDQObjects2= [];
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects1= [];
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects2= [];
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects1= [];
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects2= [];
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects1= [];
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects2= [];
gdjs.an_32hour_32beforeCode.GDhatsObjects1= [];
gdjs.an_32hour_32beforeCode.GDhatsObjects2= [];
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects1= [];
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects2= [];
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects1= [];
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects2= [];
gdjs.an_32hour_32beforeCode.GDEPRESObjects1= [];
gdjs.an_32hour_32beforeCode.GDEPRESObjects2= [];
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects1= [];
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects2= [];
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects1= [];
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects2= [];


gdjs.an_32hour_32beforeCode.mapOfGDgdjs_9546an_959532hour_959532beforeCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.an_32hour_32beforeCode.GDfpsObjects1});
gdjs.an_32hour_32beforeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hr") >= 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "grocers", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hr");
}{gdjs.evtTools.sound.playSound(runtimeScene, "TIMECARD.wav", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "polishing\\carcrash.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.an_32hour_32beforeCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.an_32hour_32beforeCode.mapOfGDgdjs_9546an_959532hour_959532beforeCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.an_32hour_32beforeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.an_32hour_32beforeCode.GDhourObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDhourObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDmouseObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDmouseObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDfpsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDfpsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDshootsparksObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDshootsparksObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBgObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBgObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBarObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBarObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDAmmoObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDAmmoObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDSaveTextObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDSaveTextObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDshardsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDshardsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDQObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDQObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDhatsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDhatsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDEPRESObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDEPRESObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects2.length = 0;

gdjs.an_32hour_32beforeCode.eventsList0(runtimeScene);
gdjs.an_32hour_32beforeCode.GDhourObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDhourObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDmouseObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDmouseObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDfpsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDfpsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDcursorgamepadObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDshootsparksObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDshootsparksObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDfrogstationNewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDstatusIconnewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBgObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBgObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBarObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDHealthBarObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDAmmoObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDAmmoObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutnewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpacknewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDSaveTextObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDSaveTextObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDrandomassboxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDshardsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDshardsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmoObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDQObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDQObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDauraofpeanObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerGenkObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDpartnerSteveObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDhatsObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDhatsObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDSubtitlesObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDelectricfxfxObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDEPRESObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDEPRESObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects1.length = 0;
gdjs.an_32hour_32beforeCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['an_32hour_32beforeCode'] = gdjs.an_32hour_32beforeCode;
