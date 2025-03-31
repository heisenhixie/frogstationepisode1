gdjs.crashCode = {};
gdjs.crashCode.localVariables = [];
gdjs.crashCode.GDhwayObjects1= [];
gdjs.crashCode.GDhwayObjects2= [];
gdjs.crashCode.GDscreamObjects1= [];
gdjs.crashCode.GDscreamObjects2= [];
gdjs.crashCode.GDcarObjects1= [];
gdjs.crashCode.GDcarObjects2= [];
gdjs.crashCode.GDmouseObjects1= [];
gdjs.crashCode.GDmouseObjects2= [];
gdjs.crashCode.GDfpsObjects1= [];
gdjs.crashCode.GDfpsObjects2= [];
gdjs.crashCode.GDcursorgamepadObjects1= [];
gdjs.crashCode.GDcursorgamepadObjects2= [];
gdjs.crashCode.GDshootsparksObjects1= [];
gdjs.crashCode.GDshootsparksObjects2= [];
gdjs.crashCode.GDfrogstationNewObjects1= [];
gdjs.crashCode.GDfrogstationNewObjects2= [];
gdjs.crashCode.GDstatusIconnewObjects1= [];
gdjs.crashCode.GDstatusIconnewObjects2= [];
gdjs.crashCode.GDHealthBgObjects1= [];
gdjs.crashCode.GDHealthBgObjects2= [];
gdjs.crashCode.GDHealthBarObjects1= [];
gdjs.crashCode.GDHealthBarObjects2= [];
gdjs.crashCode.GDAmmoObjects1= [];
gdjs.crashCode.GDAmmoObjects2= [];
gdjs.crashCode.GDpeanutnewObjects1= [];
gdjs.crashCode.GDpeanutnewObjects2= [];
gdjs.crashCode.GDpeanutpacknewObjects1= [];
gdjs.crashCode.GDpeanutpacknewObjects2= [];
gdjs.crashCode.GDpeanutpackgonenewObjects1= [];
gdjs.crashCode.GDpeanutpackgonenewObjects2= [];
gdjs.crashCode.GDSaveTextObjects1= [];
gdjs.crashCode.GDSaveTextObjects2= [];
gdjs.crashCode.GDpartnerSchrudeObjects1= [];
gdjs.crashCode.GDpartnerSchrudeObjects2= [];
gdjs.crashCode.GDpartnerDooboxxObjects1= [];
gdjs.crashCode.GDpartnerDooboxxObjects2= [];
gdjs.crashCode.GDpartnerKawaibillyObjects1= [];
gdjs.crashCode.GDpartnerKawaibillyObjects2= [];
gdjs.crashCode.GDrandomassboxObjects1= [];
gdjs.crashCode.GDrandomassboxObjects2= [];
gdjs.crashCode.GDshardsObjects1= [];
gdjs.crashCode.GDshardsObjects2= [];
gdjs.crashCode.GDschmoschmoObjects1= [];
gdjs.crashCode.GDschmoschmoObjects2= [];
gdjs.crashCode.GDQObjects1= [];
gdjs.crashCode.GDQObjects2= [];
gdjs.crashCode.GDauraofpeanObjects1= [];
gdjs.crashCode.GDauraofpeanObjects2= [];
gdjs.crashCode.GDpartnerGenkObjects1= [];
gdjs.crashCode.GDpartnerGenkObjects2= [];
gdjs.crashCode.GDpartnerSteveObjects1= [];
gdjs.crashCode.GDpartnerSteveObjects2= [];
gdjs.crashCode.GDhatsObjects1= [];
gdjs.crashCode.GDhatsObjects2= [];
gdjs.crashCode.GDSubtitlesObjects1= [];
gdjs.crashCode.GDSubtitlesObjects2= [];
gdjs.crashCode.GDelectricfxfxObjects1= [];
gdjs.crashCode.GDelectricfxfxObjects2= [];
gdjs.crashCode.GDEPRESObjects1= [];
gdjs.crashCode.GDEPRESObjects2= [];
gdjs.crashCode.GDschmoschmo2bladeObjects1= [];
gdjs.crashCode.GDschmoschmo2bladeObjects2= [];
gdjs.crashCode.GDweedwhackersliceObjects1= [];
gdjs.crashCode.GDweedwhackersliceObjects2= [];


gdjs.crashCode.mapOfGDgdjs_9546crashCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.crashCode.GDfpsObjects1});
gdjs.crashCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.crashCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.crashCode.mapOfGDgdjs_9546crashCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scream"), gdjs.crashCode.GDscreamObjects1);
{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "DEATH6", 6, "", "linear", 3);
}{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "DEATH", 4, "bg", "linear", 2);
}{for(var i = 0, len = gdjs.crashCode.GDscreamObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDscreamObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 8, 8, 5, 0.01, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dded");
}{gdjs.evtTools.sound.playSound(runtimeScene, "polishing\\carscreeching.wav", false, 100, 1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "", 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "change");
}{gdjs.evtTools.sound.playSound(runtimeScene, "emoji-death-sound.mp3", false, 60, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dded") >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "an hour before", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.crashCode.GDcarObjects1);
{for(var i = 0, len = gdjs.crashCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDcarObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 6, 0, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.crashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.crashCode.GDhwayObjects1.length = 0;
gdjs.crashCode.GDhwayObjects2.length = 0;
gdjs.crashCode.GDscreamObjects1.length = 0;
gdjs.crashCode.GDscreamObjects2.length = 0;
gdjs.crashCode.GDcarObjects1.length = 0;
gdjs.crashCode.GDcarObjects2.length = 0;
gdjs.crashCode.GDmouseObjects1.length = 0;
gdjs.crashCode.GDmouseObjects2.length = 0;
gdjs.crashCode.GDfpsObjects1.length = 0;
gdjs.crashCode.GDfpsObjects2.length = 0;
gdjs.crashCode.GDcursorgamepadObjects1.length = 0;
gdjs.crashCode.GDcursorgamepadObjects2.length = 0;
gdjs.crashCode.GDshootsparksObjects1.length = 0;
gdjs.crashCode.GDshootsparksObjects2.length = 0;
gdjs.crashCode.GDfrogstationNewObjects1.length = 0;
gdjs.crashCode.GDfrogstationNewObjects2.length = 0;
gdjs.crashCode.GDstatusIconnewObjects1.length = 0;
gdjs.crashCode.GDstatusIconnewObjects2.length = 0;
gdjs.crashCode.GDHealthBgObjects1.length = 0;
gdjs.crashCode.GDHealthBgObjects2.length = 0;
gdjs.crashCode.GDHealthBarObjects1.length = 0;
gdjs.crashCode.GDHealthBarObjects2.length = 0;
gdjs.crashCode.GDAmmoObjects1.length = 0;
gdjs.crashCode.GDAmmoObjects2.length = 0;
gdjs.crashCode.GDpeanutnewObjects1.length = 0;
gdjs.crashCode.GDpeanutnewObjects2.length = 0;
gdjs.crashCode.GDpeanutpacknewObjects1.length = 0;
gdjs.crashCode.GDpeanutpacknewObjects2.length = 0;
gdjs.crashCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.crashCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.crashCode.GDSaveTextObjects1.length = 0;
gdjs.crashCode.GDSaveTextObjects2.length = 0;
gdjs.crashCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.crashCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.crashCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.crashCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.crashCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.crashCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.crashCode.GDrandomassboxObjects1.length = 0;
gdjs.crashCode.GDrandomassboxObjects2.length = 0;
gdjs.crashCode.GDshardsObjects1.length = 0;
gdjs.crashCode.GDshardsObjects2.length = 0;
gdjs.crashCode.GDschmoschmoObjects1.length = 0;
gdjs.crashCode.GDschmoschmoObjects2.length = 0;
gdjs.crashCode.GDQObjects1.length = 0;
gdjs.crashCode.GDQObjects2.length = 0;
gdjs.crashCode.GDauraofpeanObjects1.length = 0;
gdjs.crashCode.GDauraofpeanObjects2.length = 0;
gdjs.crashCode.GDpartnerGenkObjects1.length = 0;
gdjs.crashCode.GDpartnerGenkObjects2.length = 0;
gdjs.crashCode.GDpartnerSteveObjects1.length = 0;
gdjs.crashCode.GDpartnerSteveObjects2.length = 0;
gdjs.crashCode.GDhatsObjects1.length = 0;
gdjs.crashCode.GDhatsObjects2.length = 0;
gdjs.crashCode.GDSubtitlesObjects1.length = 0;
gdjs.crashCode.GDSubtitlesObjects2.length = 0;
gdjs.crashCode.GDelectricfxfxObjects1.length = 0;
gdjs.crashCode.GDelectricfxfxObjects2.length = 0;
gdjs.crashCode.GDEPRESObjects1.length = 0;
gdjs.crashCode.GDEPRESObjects2.length = 0;
gdjs.crashCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.crashCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.crashCode.GDweedwhackersliceObjects1.length = 0;
gdjs.crashCode.GDweedwhackersliceObjects2.length = 0;

gdjs.crashCode.eventsList0(runtimeScene);
gdjs.crashCode.GDhwayObjects1.length = 0;
gdjs.crashCode.GDhwayObjects2.length = 0;
gdjs.crashCode.GDscreamObjects1.length = 0;
gdjs.crashCode.GDscreamObjects2.length = 0;
gdjs.crashCode.GDcarObjects1.length = 0;
gdjs.crashCode.GDcarObjects2.length = 0;
gdjs.crashCode.GDmouseObjects1.length = 0;
gdjs.crashCode.GDmouseObjects2.length = 0;
gdjs.crashCode.GDfpsObjects1.length = 0;
gdjs.crashCode.GDfpsObjects2.length = 0;
gdjs.crashCode.GDcursorgamepadObjects1.length = 0;
gdjs.crashCode.GDcursorgamepadObjects2.length = 0;
gdjs.crashCode.GDshootsparksObjects1.length = 0;
gdjs.crashCode.GDshootsparksObjects2.length = 0;
gdjs.crashCode.GDfrogstationNewObjects1.length = 0;
gdjs.crashCode.GDfrogstationNewObjects2.length = 0;
gdjs.crashCode.GDstatusIconnewObjects1.length = 0;
gdjs.crashCode.GDstatusIconnewObjects2.length = 0;
gdjs.crashCode.GDHealthBgObjects1.length = 0;
gdjs.crashCode.GDHealthBgObjects2.length = 0;
gdjs.crashCode.GDHealthBarObjects1.length = 0;
gdjs.crashCode.GDHealthBarObjects2.length = 0;
gdjs.crashCode.GDAmmoObjects1.length = 0;
gdjs.crashCode.GDAmmoObjects2.length = 0;
gdjs.crashCode.GDpeanutnewObjects1.length = 0;
gdjs.crashCode.GDpeanutnewObjects2.length = 0;
gdjs.crashCode.GDpeanutpacknewObjects1.length = 0;
gdjs.crashCode.GDpeanutpacknewObjects2.length = 0;
gdjs.crashCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.crashCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.crashCode.GDSaveTextObjects1.length = 0;
gdjs.crashCode.GDSaveTextObjects2.length = 0;
gdjs.crashCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.crashCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.crashCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.crashCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.crashCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.crashCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.crashCode.GDrandomassboxObjects1.length = 0;
gdjs.crashCode.GDrandomassboxObjects2.length = 0;
gdjs.crashCode.GDshardsObjects1.length = 0;
gdjs.crashCode.GDshardsObjects2.length = 0;
gdjs.crashCode.GDschmoschmoObjects1.length = 0;
gdjs.crashCode.GDschmoschmoObjects2.length = 0;
gdjs.crashCode.GDQObjects1.length = 0;
gdjs.crashCode.GDQObjects2.length = 0;
gdjs.crashCode.GDauraofpeanObjects1.length = 0;
gdjs.crashCode.GDauraofpeanObjects2.length = 0;
gdjs.crashCode.GDpartnerGenkObjects1.length = 0;
gdjs.crashCode.GDpartnerGenkObjects2.length = 0;
gdjs.crashCode.GDpartnerSteveObjects1.length = 0;
gdjs.crashCode.GDpartnerSteveObjects2.length = 0;
gdjs.crashCode.GDhatsObjects1.length = 0;
gdjs.crashCode.GDhatsObjects2.length = 0;
gdjs.crashCode.GDSubtitlesObjects1.length = 0;
gdjs.crashCode.GDSubtitlesObjects2.length = 0;
gdjs.crashCode.GDelectricfxfxObjects1.length = 0;
gdjs.crashCode.GDelectricfxfxObjects2.length = 0;
gdjs.crashCode.GDEPRESObjects1.length = 0;
gdjs.crashCode.GDEPRESObjects2.length = 0;
gdjs.crashCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.crashCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.crashCode.GDweedwhackersliceObjects1.length = 0;
gdjs.crashCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['crashCode'] = gdjs.crashCode;
