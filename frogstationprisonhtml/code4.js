gdjs.newgroundsCode = {};
gdjs.newgroundsCode.localVariables = [];
gdjs.newgroundsCode.GDaurawhiteObjects1= [];
gdjs.newgroundsCode.GDaurawhiteObjects2= [];
gdjs.newgroundsCode.GDtankObjects1= [];
gdjs.newgroundsCode.GDtankObjects2= [];
gdjs.newgroundsCode.GDnglogoObjects1= [];
gdjs.newgroundsCode.GDnglogoObjects2= [];
gdjs.newgroundsCode.GDmouseObjects1= [];
gdjs.newgroundsCode.GDmouseObjects2= [];
gdjs.newgroundsCode.GDfpsObjects1= [];
gdjs.newgroundsCode.GDfpsObjects2= [];
gdjs.newgroundsCode.GDcursorgamepadObjects1= [];
gdjs.newgroundsCode.GDcursorgamepadObjects2= [];
gdjs.newgroundsCode.GDshootsparksObjects1= [];
gdjs.newgroundsCode.GDshootsparksObjects2= [];
gdjs.newgroundsCode.GDfrogstationNewObjects1= [];
gdjs.newgroundsCode.GDfrogstationNewObjects2= [];
gdjs.newgroundsCode.GDstatusIconnewObjects1= [];
gdjs.newgroundsCode.GDstatusIconnewObjects2= [];
gdjs.newgroundsCode.GDHealthBgObjects1= [];
gdjs.newgroundsCode.GDHealthBgObjects2= [];
gdjs.newgroundsCode.GDHealthBarObjects1= [];
gdjs.newgroundsCode.GDHealthBarObjects2= [];
gdjs.newgroundsCode.GDAmmoObjects1= [];
gdjs.newgroundsCode.GDAmmoObjects2= [];
gdjs.newgroundsCode.GDpeanutnewObjects1= [];
gdjs.newgroundsCode.GDpeanutnewObjects2= [];
gdjs.newgroundsCode.GDpeanutpacknewObjects1= [];
gdjs.newgroundsCode.GDpeanutpacknewObjects2= [];
gdjs.newgroundsCode.GDpeanutpackgonenewObjects1= [];
gdjs.newgroundsCode.GDpeanutpackgonenewObjects2= [];
gdjs.newgroundsCode.GDSaveTextObjects1= [];
gdjs.newgroundsCode.GDSaveTextObjects2= [];
gdjs.newgroundsCode.GDpartnerSchrudeObjects1= [];
gdjs.newgroundsCode.GDpartnerSchrudeObjects2= [];
gdjs.newgroundsCode.GDpartnerDooboxxObjects1= [];
gdjs.newgroundsCode.GDpartnerDooboxxObjects2= [];
gdjs.newgroundsCode.GDpartnerKawaibillyObjects1= [];
gdjs.newgroundsCode.GDpartnerKawaibillyObjects2= [];
gdjs.newgroundsCode.GDrandomassboxObjects1= [];
gdjs.newgroundsCode.GDrandomassboxObjects2= [];
gdjs.newgroundsCode.GDshardsObjects1= [];
gdjs.newgroundsCode.GDshardsObjects2= [];
gdjs.newgroundsCode.GDschmoschmoObjects1= [];
gdjs.newgroundsCode.GDschmoschmoObjects2= [];
gdjs.newgroundsCode.GDQObjects1= [];
gdjs.newgroundsCode.GDQObjects2= [];
gdjs.newgroundsCode.GDauraofpeanObjects1= [];
gdjs.newgroundsCode.GDauraofpeanObjects2= [];
gdjs.newgroundsCode.GDpartnerGenkObjects1= [];
gdjs.newgroundsCode.GDpartnerGenkObjects2= [];
gdjs.newgroundsCode.GDpartnerSteveObjects1= [];
gdjs.newgroundsCode.GDpartnerSteveObjects2= [];
gdjs.newgroundsCode.GDhatsObjects1= [];
gdjs.newgroundsCode.GDhatsObjects2= [];
gdjs.newgroundsCode.GDSubtitlesObjects1= [];
gdjs.newgroundsCode.GDSubtitlesObjects2= [];
gdjs.newgroundsCode.GDelectricfxfxObjects1= [];
gdjs.newgroundsCode.GDelectricfxfxObjects2= [];
gdjs.newgroundsCode.GDEPRESObjects1= [];
gdjs.newgroundsCode.GDEPRESObjects2= [];
gdjs.newgroundsCode.GDschmoschmo2bladeObjects1= [];
gdjs.newgroundsCode.GDschmoschmo2bladeObjects2= [];
gdjs.newgroundsCode.GDweedwhackersliceObjects1= [];
gdjs.newgroundsCode.GDweedwhackersliceObjects2= [];


gdjs.newgroundsCode.mapOfGDgdjs_9546newgroundsCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.newgroundsCode.GDfpsObjects1});
gdjs.newgroundsCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.newgroundsCode.GDnglogoObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.newgroundsCode.GDnglogoObjects1.length;i<l;++i) {
    if ( gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.newgroundsCode.GDnglogoObjects1[k] = gdjs.newgroundsCode.GDnglogoObjects1[i];
        ++k;
    }
}
gdjs.newgroundsCode.GDnglogoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nicelymean", false);
}}

}


};gdjs.newgroundsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.newgroundsCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.newgroundsCode.mapOfGDgdjs_9546newgroundsCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("aurawhite"), gdjs.newgroundsCode.GDaurawhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("nglogo"), gdjs.newgroundsCode.GDnglogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.newgroundsCode.GDtankObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "neeintros\\tank\\ngintro.wav", 7, false, 100, 1);
}{for(var i = 0, len = gdjs.newgroundsCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDtankObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDaurawhiteObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDaurawhiteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDtankObjects1[i].setPosition(1224,803);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDaurawhiteObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDaurawhiteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("aura", 255, "easeInOutQuad", 3, false);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDtankObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tank", 255, "easeInOutQuad", 5, false);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDtankObjects1[i].getBehavior("Tween").addObjectPositionYTween2("tankup", 720, "easeOutQuad", 5, false);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDnglogoObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ngng");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nicelymean", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ngng") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46319788);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("aurawhite"), gdjs.newgroundsCode.GDaurawhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("nglogo"), gdjs.newgroundsCode.GDnglogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.newgroundsCode.GDtankObjects1);
{for(var i = 0, len = gdjs.newgroundsCode.GDnglogoObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDnglogoObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDtankObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.newgroundsCode.GDaurawhiteObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDaurawhiteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "newfontandpartner\\sounds\\impact 2.wav", 3, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ngng") >= 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nglogo"), gdjs.newgroundsCode.GDnglogoObjects1);
{for(var i = 0, len = gdjs.newgroundsCode.GDnglogoObjects1.length ;i < len;++i) {
    gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.newgroundsCode.GDnglogoObjects1[i].getBehavior("Opacity").getOpacity() - (0.5));
}
}
{ //Subevents
gdjs.newgroundsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.newgroundsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.newgroundsCode.GDaurawhiteObjects1.length = 0;
gdjs.newgroundsCode.GDaurawhiteObjects2.length = 0;
gdjs.newgroundsCode.GDtankObjects1.length = 0;
gdjs.newgroundsCode.GDtankObjects2.length = 0;
gdjs.newgroundsCode.GDnglogoObjects1.length = 0;
gdjs.newgroundsCode.GDnglogoObjects2.length = 0;
gdjs.newgroundsCode.GDmouseObjects1.length = 0;
gdjs.newgroundsCode.GDmouseObjects2.length = 0;
gdjs.newgroundsCode.GDfpsObjects1.length = 0;
gdjs.newgroundsCode.GDfpsObjects2.length = 0;
gdjs.newgroundsCode.GDcursorgamepadObjects1.length = 0;
gdjs.newgroundsCode.GDcursorgamepadObjects2.length = 0;
gdjs.newgroundsCode.GDshootsparksObjects1.length = 0;
gdjs.newgroundsCode.GDshootsparksObjects2.length = 0;
gdjs.newgroundsCode.GDfrogstationNewObjects1.length = 0;
gdjs.newgroundsCode.GDfrogstationNewObjects2.length = 0;
gdjs.newgroundsCode.GDstatusIconnewObjects1.length = 0;
gdjs.newgroundsCode.GDstatusIconnewObjects2.length = 0;
gdjs.newgroundsCode.GDHealthBgObjects1.length = 0;
gdjs.newgroundsCode.GDHealthBgObjects2.length = 0;
gdjs.newgroundsCode.GDHealthBarObjects1.length = 0;
gdjs.newgroundsCode.GDHealthBarObjects2.length = 0;
gdjs.newgroundsCode.GDAmmoObjects1.length = 0;
gdjs.newgroundsCode.GDAmmoObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutnewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutnewObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutpacknewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutpacknewObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.newgroundsCode.GDSaveTextObjects1.length = 0;
gdjs.newgroundsCode.GDSaveTextObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.newgroundsCode.GDrandomassboxObjects1.length = 0;
gdjs.newgroundsCode.GDrandomassboxObjects2.length = 0;
gdjs.newgroundsCode.GDshardsObjects1.length = 0;
gdjs.newgroundsCode.GDshardsObjects2.length = 0;
gdjs.newgroundsCode.GDschmoschmoObjects1.length = 0;
gdjs.newgroundsCode.GDschmoschmoObjects2.length = 0;
gdjs.newgroundsCode.GDQObjects1.length = 0;
gdjs.newgroundsCode.GDQObjects2.length = 0;
gdjs.newgroundsCode.GDauraofpeanObjects1.length = 0;
gdjs.newgroundsCode.GDauraofpeanObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerGenkObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerGenkObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerSteveObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerSteveObjects2.length = 0;
gdjs.newgroundsCode.GDhatsObjects1.length = 0;
gdjs.newgroundsCode.GDhatsObjects2.length = 0;
gdjs.newgroundsCode.GDSubtitlesObjects1.length = 0;
gdjs.newgroundsCode.GDSubtitlesObjects2.length = 0;
gdjs.newgroundsCode.GDelectricfxfxObjects1.length = 0;
gdjs.newgroundsCode.GDelectricfxfxObjects2.length = 0;
gdjs.newgroundsCode.GDEPRESObjects1.length = 0;
gdjs.newgroundsCode.GDEPRESObjects2.length = 0;
gdjs.newgroundsCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.newgroundsCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.newgroundsCode.GDweedwhackersliceObjects1.length = 0;
gdjs.newgroundsCode.GDweedwhackersliceObjects2.length = 0;

gdjs.newgroundsCode.eventsList1(runtimeScene);
gdjs.newgroundsCode.GDaurawhiteObjects1.length = 0;
gdjs.newgroundsCode.GDaurawhiteObjects2.length = 0;
gdjs.newgroundsCode.GDtankObjects1.length = 0;
gdjs.newgroundsCode.GDtankObjects2.length = 0;
gdjs.newgroundsCode.GDnglogoObjects1.length = 0;
gdjs.newgroundsCode.GDnglogoObjects2.length = 0;
gdjs.newgroundsCode.GDmouseObjects1.length = 0;
gdjs.newgroundsCode.GDmouseObjects2.length = 0;
gdjs.newgroundsCode.GDfpsObjects1.length = 0;
gdjs.newgroundsCode.GDfpsObjects2.length = 0;
gdjs.newgroundsCode.GDcursorgamepadObjects1.length = 0;
gdjs.newgroundsCode.GDcursorgamepadObjects2.length = 0;
gdjs.newgroundsCode.GDshootsparksObjects1.length = 0;
gdjs.newgroundsCode.GDshootsparksObjects2.length = 0;
gdjs.newgroundsCode.GDfrogstationNewObjects1.length = 0;
gdjs.newgroundsCode.GDfrogstationNewObjects2.length = 0;
gdjs.newgroundsCode.GDstatusIconnewObjects1.length = 0;
gdjs.newgroundsCode.GDstatusIconnewObjects2.length = 0;
gdjs.newgroundsCode.GDHealthBgObjects1.length = 0;
gdjs.newgroundsCode.GDHealthBgObjects2.length = 0;
gdjs.newgroundsCode.GDHealthBarObjects1.length = 0;
gdjs.newgroundsCode.GDHealthBarObjects2.length = 0;
gdjs.newgroundsCode.GDAmmoObjects1.length = 0;
gdjs.newgroundsCode.GDAmmoObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutnewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutnewObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutpacknewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutpacknewObjects2.length = 0;
gdjs.newgroundsCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.newgroundsCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.newgroundsCode.GDSaveTextObjects1.length = 0;
gdjs.newgroundsCode.GDSaveTextObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.newgroundsCode.GDrandomassboxObjects1.length = 0;
gdjs.newgroundsCode.GDrandomassboxObjects2.length = 0;
gdjs.newgroundsCode.GDshardsObjects1.length = 0;
gdjs.newgroundsCode.GDshardsObjects2.length = 0;
gdjs.newgroundsCode.GDschmoschmoObjects1.length = 0;
gdjs.newgroundsCode.GDschmoschmoObjects2.length = 0;
gdjs.newgroundsCode.GDQObjects1.length = 0;
gdjs.newgroundsCode.GDQObjects2.length = 0;
gdjs.newgroundsCode.GDauraofpeanObjects1.length = 0;
gdjs.newgroundsCode.GDauraofpeanObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerGenkObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerGenkObjects2.length = 0;
gdjs.newgroundsCode.GDpartnerSteveObjects1.length = 0;
gdjs.newgroundsCode.GDpartnerSteveObjects2.length = 0;
gdjs.newgroundsCode.GDhatsObjects1.length = 0;
gdjs.newgroundsCode.GDhatsObjects2.length = 0;
gdjs.newgroundsCode.GDSubtitlesObjects1.length = 0;
gdjs.newgroundsCode.GDSubtitlesObjects2.length = 0;
gdjs.newgroundsCode.GDelectricfxfxObjects1.length = 0;
gdjs.newgroundsCode.GDelectricfxfxObjects2.length = 0;
gdjs.newgroundsCode.GDEPRESObjects1.length = 0;
gdjs.newgroundsCode.GDEPRESObjects2.length = 0;
gdjs.newgroundsCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.newgroundsCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.newgroundsCode.GDweedwhackersliceObjects1.length = 0;
gdjs.newgroundsCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['newgroundsCode'] = gdjs.newgroundsCode;
