gdjs.grocersCode = {};
gdjs.grocersCode.localVariables = [];
gdjs.grocersCode.GDgrocersObjects1= [];
gdjs.grocersCode.GDgrocersObjects2= [];
gdjs.grocersCode.GDDIEObjects1= [];
gdjs.grocersCode.GDDIEObjects2= [];
gdjs.grocersCode.GDparkinObjects1= [];
gdjs.grocersCode.GDparkinObjects2= [];
gdjs.grocersCode.GDlightObjects1= [];
gdjs.grocersCode.GDlightObjects2= [];
gdjs.grocersCode.GDmouseObjects1= [];
gdjs.grocersCode.GDmouseObjects2= [];
gdjs.grocersCode.GDfpsObjects1= [];
gdjs.grocersCode.GDfpsObjects2= [];
gdjs.grocersCode.GDcursorgamepadObjects1= [];
gdjs.grocersCode.GDcursorgamepadObjects2= [];
gdjs.grocersCode.GDshootsparksObjects1= [];
gdjs.grocersCode.GDshootsparksObjects2= [];
gdjs.grocersCode.GDfrogstationNewObjects1= [];
gdjs.grocersCode.GDfrogstationNewObjects2= [];
gdjs.grocersCode.GDstatusIconnewObjects1= [];
gdjs.grocersCode.GDstatusIconnewObjects2= [];
gdjs.grocersCode.GDHealthBgObjects1= [];
gdjs.grocersCode.GDHealthBgObjects2= [];
gdjs.grocersCode.GDHealthBarObjects1= [];
gdjs.grocersCode.GDHealthBarObjects2= [];
gdjs.grocersCode.GDAmmoObjects1= [];
gdjs.grocersCode.GDAmmoObjects2= [];
gdjs.grocersCode.GDpeanutnewObjects1= [];
gdjs.grocersCode.GDpeanutnewObjects2= [];
gdjs.grocersCode.GDpeanutpacknewObjects1= [];
gdjs.grocersCode.GDpeanutpacknewObjects2= [];
gdjs.grocersCode.GDpeanutpackgonenewObjects1= [];
gdjs.grocersCode.GDpeanutpackgonenewObjects2= [];
gdjs.grocersCode.GDSaveTextObjects1= [];
gdjs.grocersCode.GDSaveTextObjects2= [];
gdjs.grocersCode.GDpartnerSchrudeObjects1= [];
gdjs.grocersCode.GDpartnerSchrudeObjects2= [];
gdjs.grocersCode.GDpartnerDooboxxObjects1= [];
gdjs.grocersCode.GDpartnerDooboxxObjects2= [];
gdjs.grocersCode.GDpartnerKawaibillyObjects1= [];
gdjs.grocersCode.GDpartnerKawaibillyObjects2= [];
gdjs.grocersCode.GDrandomassboxObjects1= [];
gdjs.grocersCode.GDrandomassboxObjects2= [];
gdjs.grocersCode.GDshardsObjects1= [];
gdjs.grocersCode.GDshardsObjects2= [];
gdjs.grocersCode.GDschmoschmoObjects1= [];
gdjs.grocersCode.GDschmoschmoObjects2= [];
gdjs.grocersCode.GDQObjects1= [];
gdjs.grocersCode.GDQObjects2= [];
gdjs.grocersCode.GDauraofpeanObjects1= [];
gdjs.grocersCode.GDauraofpeanObjects2= [];
gdjs.grocersCode.GDpartnerGenkObjects1= [];
gdjs.grocersCode.GDpartnerGenkObjects2= [];
gdjs.grocersCode.GDpartnerSteveObjects1= [];
gdjs.grocersCode.GDpartnerSteveObjects2= [];
gdjs.grocersCode.GDhatsObjects1= [];
gdjs.grocersCode.GDhatsObjects2= [];
gdjs.grocersCode.GDSubtitlesObjects1= [];
gdjs.grocersCode.GDSubtitlesObjects2= [];
gdjs.grocersCode.GDelectricfxfxObjects1= [];
gdjs.grocersCode.GDelectricfxfxObjects2= [];
gdjs.grocersCode.GDEPRESObjects1= [];
gdjs.grocersCode.GDEPRESObjects2= [];
gdjs.grocersCode.GDschmoschmo2bladeObjects1= [];
gdjs.grocersCode.GDschmoschmo2bladeObjects2= [];
gdjs.grocersCode.GDweedwhackersliceObjects1= [];
gdjs.grocersCode.GDweedwhackersliceObjects2= [];


gdjs.grocersCode.mapOfGDgdjs_9546grocersCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.grocersCode.GDfpsObjects1});
gdjs.grocersCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "zoooom", 1.3, "", "easeInOutSine", 5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gotogrocer");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "outsidegrocerscricket.ogg", 1, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.grocersCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.grocersCode.mapOfGDgdjs_9546grocersCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gotogrocer") >= 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intgrocer", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.grocersCode.GDlightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("roomid").setNumber(1);
}{gdjs.evtTools.storage.writeStringInJSONFile("frogstationprison", "room", runtimeScene.getGame().getVariables().getFromIndex(6).getChild("roomid").getAsString());
}{for(var i = 0, len = gdjs.grocersCode.GDlightObjects1.length ;i < len;++i) {
    gdjs.grocersCode.GDlightObjects1[i].setAnimationFrame(gdjs.randomInRange(0, 5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(47690964);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.grocersCode.GDlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.grocersCode.GDlightObjects1.length;i<l;++i) {
    if ( gdjs.grocersCode.GDlightObjects1[i].getBehavior("Animation").getAnimationName() == "on" ) {
        isConditionTrue_0 = true;
        gdjs.grocersCode.GDlightObjects1[k] = gdjs.grocersCode.GDlightObjects1[i];
        ++k;
    }
}
gdjs.grocersCode.GDlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(47688020);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lighton");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.grocersCode.GDlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.grocersCode.GDlightObjects1.length;i<l;++i) {
    if ( gdjs.grocersCode.GDlightObjects1[i].getBehavior("Animation").getAnimationName() == "off" ) {
        isConditionTrue_0 = true;
        gdjs.grocersCode.GDlightObjects1[k] = gdjs.grocersCode.GDlightObjects1[i];
        ++k;
    }
}
gdjs.grocersCode.GDlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(47689012);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lightoff");
}}

}


};

gdjs.grocersCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.grocersCode.GDgrocersObjects1.length = 0;
gdjs.grocersCode.GDgrocersObjects2.length = 0;
gdjs.grocersCode.GDDIEObjects1.length = 0;
gdjs.grocersCode.GDDIEObjects2.length = 0;
gdjs.grocersCode.GDparkinObjects1.length = 0;
gdjs.grocersCode.GDparkinObjects2.length = 0;
gdjs.grocersCode.GDlightObjects1.length = 0;
gdjs.grocersCode.GDlightObjects2.length = 0;
gdjs.grocersCode.GDmouseObjects1.length = 0;
gdjs.grocersCode.GDmouseObjects2.length = 0;
gdjs.grocersCode.GDfpsObjects1.length = 0;
gdjs.grocersCode.GDfpsObjects2.length = 0;
gdjs.grocersCode.GDcursorgamepadObjects1.length = 0;
gdjs.grocersCode.GDcursorgamepadObjects2.length = 0;
gdjs.grocersCode.GDshootsparksObjects1.length = 0;
gdjs.grocersCode.GDshootsparksObjects2.length = 0;
gdjs.grocersCode.GDfrogstationNewObjects1.length = 0;
gdjs.grocersCode.GDfrogstationNewObjects2.length = 0;
gdjs.grocersCode.GDstatusIconnewObjects1.length = 0;
gdjs.grocersCode.GDstatusIconnewObjects2.length = 0;
gdjs.grocersCode.GDHealthBgObjects1.length = 0;
gdjs.grocersCode.GDHealthBgObjects2.length = 0;
gdjs.grocersCode.GDHealthBarObjects1.length = 0;
gdjs.grocersCode.GDHealthBarObjects2.length = 0;
gdjs.grocersCode.GDAmmoObjects1.length = 0;
gdjs.grocersCode.GDAmmoObjects2.length = 0;
gdjs.grocersCode.GDpeanutnewObjects1.length = 0;
gdjs.grocersCode.GDpeanutnewObjects2.length = 0;
gdjs.grocersCode.GDpeanutpacknewObjects1.length = 0;
gdjs.grocersCode.GDpeanutpacknewObjects2.length = 0;
gdjs.grocersCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.grocersCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.grocersCode.GDSaveTextObjects1.length = 0;
gdjs.grocersCode.GDSaveTextObjects2.length = 0;
gdjs.grocersCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.grocersCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.grocersCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.grocersCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.grocersCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.grocersCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.grocersCode.GDrandomassboxObjects1.length = 0;
gdjs.grocersCode.GDrandomassboxObjects2.length = 0;
gdjs.grocersCode.GDshardsObjects1.length = 0;
gdjs.grocersCode.GDshardsObjects2.length = 0;
gdjs.grocersCode.GDschmoschmoObjects1.length = 0;
gdjs.grocersCode.GDschmoschmoObjects2.length = 0;
gdjs.grocersCode.GDQObjects1.length = 0;
gdjs.grocersCode.GDQObjects2.length = 0;
gdjs.grocersCode.GDauraofpeanObjects1.length = 0;
gdjs.grocersCode.GDauraofpeanObjects2.length = 0;
gdjs.grocersCode.GDpartnerGenkObjects1.length = 0;
gdjs.grocersCode.GDpartnerGenkObjects2.length = 0;
gdjs.grocersCode.GDpartnerSteveObjects1.length = 0;
gdjs.grocersCode.GDpartnerSteveObjects2.length = 0;
gdjs.grocersCode.GDhatsObjects1.length = 0;
gdjs.grocersCode.GDhatsObjects2.length = 0;
gdjs.grocersCode.GDSubtitlesObjects1.length = 0;
gdjs.grocersCode.GDSubtitlesObjects2.length = 0;
gdjs.grocersCode.GDelectricfxfxObjects1.length = 0;
gdjs.grocersCode.GDelectricfxfxObjects2.length = 0;
gdjs.grocersCode.GDEPRESObjects1.length = 0;
gdjs.grocersCode.GDEPRESObjects2.length = 0;
gdjs.grocersCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.grocersCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.grocersCode.GDweedwhackersliceObjects1.length = 0;
gdjs.grocersCode.GDweedwhackersliceObjects2.length = 0;

gdjs.grocersCode.eventsList0(runtimeScene);
gdjs.grocersCode.GDgrocersObjects1.length = 0;
gdjs.grocersCode.GDgrocersObjects2.length = 0;
gdjs.grocersCode.GDDIEObjects1.length = 0;
gdjs.grocersCode.GDDIEObjects2.length = 0;
gdjs.grocersCode.GDparkinObjects1.length = 0;
gdjs.grocersCode.GDparkinObjects2.length = 0;
gdjs.grocersCode.GDlightObjects1.length = 0;
gdjs.grocersCode.GDlightObjects2.length = 0;
gdjs.grocersCode.GDmouseObjects1.length = 0;
gdjs.grocersCode.GDmouseObjects2.length = 0;
gdjs.grocersCode.GDfpsObjects1.length = 0;
gdjs.grocersCode.GDfpsObjects2.length = 0;
gdjs.grocersCode.GDcursorgamepadObjects1.length = 0;
gdjs.grocersCode.GDcursorgamepadObjects2.length = 0;
gdjs.grocersCode.GDshootsparksObjects1.length = 0;
gdjs.grocersCode.GDshootsparksObjects2.length = 0;
gdjs.grocersCode.GDfrogstationNewObjects1.length = 0;
gdjs.grocersCode.GDfrogstationNewObjects2.length = 0;
gdjs.grocersCode.GDstatusIconnewObjects1.length = 0;
gdjs.grocersCode.GDstatusIconnewObjects2.length = 0;
gdjs.grocersCode.GDHealthBgObjects1.length = 0;
gdjs.grocersCode.GDHealthBgObjects2.length = 0;
gdjs.grocersCode.GDHealthBarObjects1.length = 0;
gdjs.grocersCode.GDHealthBarObjects2.length = 0;
gdjs.grocersCode.GDAmmoObjects1.length = 0;
gdjs.grocersCode.GDAmmoObjects2.length = 0;
gdjs.grocersCode.GDpeanutnewObjects1.length = 0;
gdjs.grocersCode.GDpeanutnewObjects2.length = 0;
gdjs.grocersCode.GDpeanutpacknewObjects1.length = 0;
gdjs.grocersCode.GDpeanutpacknewObjects2.length = 0;
gdjs.grocersCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.grocersCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.grocersCode.GDSaveTextObjects1.length = 0;
gdjs.grocersCode.GDSaveTextObjects2.length = 0;
gdjs.grocersCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.grocersCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.grocersCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.grocersCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.grocersCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.grocersCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.grocersCode.GDrandomassboxObjects1.length = 0;
gdjs.grocersCode.GDrandomassboxObjects2.length = 0;
gdjs.grocersCode.GDshardsObjects1.length = 0;
gdjs.grocersCode.GDshardsObjects2.length = 0;
gdjs.grocersCode.GDschmoschmoObjects1.length = 0;
gdjs.grocersCode.GDschmoschmoObjects2.length = 0;
gdjs.grocersCode.GDQObjects1.length = 0;
gdjs.grocersCode.GDQObjects2.length = 0;
gdjs.grocersCode.GDauraofpeanObjects1.length = 0;
gdjs.grocersCode.GDauraofpeanObjects2.length = 0;
gdjs.grocersCode.GDpartnerGenkObjects1.length = 0;
gdjs.grocersCode.GDpartnerGenkObjects2.length = 0;
gdjs.grocersCode.GDpartnerSteveObjects1.length = 0;
gdjs.grocersCode.GDpartnerSteveObjects2.length = 0;
gdjs.grocersCode.GDhatsObjects1.length = 0;
gdjs.grocersCode.GDhatsObjects2.length = 0;
gdjs.grocersCode.GDSubtitlesObjects1.length = 0;
gdjs.grocersCode.GDSubtitlesObjects2.length = 0;
gdjs.grocersCode.GDelectricfxfxObjects1.length = 0;
gdjs.grocersCode.GDelectricfxfxObjects2.length = 0;
gdjs.grocersCode.GDEPRESObjects1.length = 0;
gdjs.grocersCode.GDEPRESObjects2.length = 0;
gdjs.grocersCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.grocersCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.grocersCode.GDweedwhackersliceObjects1.length = 0;
gdjs.grocersCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['grocersCode'] = gdjs.grocersCode;
