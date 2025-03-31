gdjs.nicelymeanCode = {};
gdjs.nicelymeanCode.localVariables = [];
gdjs.nicelymeanCode.GDnObjects1= [];
gdjs.nicelymeanCode.GDnObjects2= [];
gdjs.nicelymeanCode.GDnicelymeanObjects1= [];
gdjs.nicelymeanCode.GDnicelymeanObjects2= [];
gdjs.nicelymeanCode.GDtestObjects1= [];
gdjs.nicelymeanCode.GDtestObjects2= [];
gdjs.nicelymeanCode.GDpresentsObjects1= [];
gdjs.nicelymeanCode.GDpresentsObjects2= [];
gdjs.nicelymeanCode.GDmouseObjects1= [];
gdjs.nicelymeanCode.GDmouseObjects2= [];
gdjs.nicelymeanCode.GDfpsObjects1= [];
gdjs.nicelymeanCode.GDfpsObjects2= [];
gdjs.nicelymeanCode.GDcursorgamepadObjects1= [];
gdjs.nicelymeanCode.GDcursorgamepadObjects2= [];
gdjs.nicelymeanCode.GDshootsparksObjects1= [];
gdjs.nicelymeanCode.GDshootsparksObjects2= [];
gdjs.nicelymeanCode.GDfrogstationNewObjects1= [];
gdjs.nicelymeanCode.GDfrogstationNewObjects2= [];
gdjs.nicelymeanCode.GDstatusIconnewObjects1= [];
gdjs.nicelymeanCode.GDstatusIconnewObjects2= [];
gdjs.nicelymeanCode.GDHealthBgObjects1= [];
gdjs.nicelymeanCode.GDHealthBgObjects2= [];
gdjs.nicelymeanCode.GDHealthBarObjects1= [];
gdjs.nicelymeanCode.GDHealthBarObjects2= [];
gdjs.nicelymeanCode.GDAmmoObjects1= [];
gdjs.nicelymeanCode.GDAmmoObjects2= [];
gdjs.nicelymeanCode.GDpeanutnewObjects1= [];
gdjs.nicelymeanCode.GDpeanutnewObjects2= [];
gdjs.nicelymeanCode.GDpeanutpacknewObjects1= [];
gdjs.nicelymeanCode.GDpeanutpacknewObjects2= [];
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects1= [];
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects2= [];
gdjs.nicelymeanCode.GDSaveTextObjects1= [];
gdjs.nicelymeanCode.GDSaveTextObjects2= [];
gdjs.nicelymeanCode.GDpartnerSchrudeObjects1= [];
gdjs.nicelymeanCode.GDpartnerSchrudeObjects2= [];
gdjs.nicelymeanCode.GDpartnerDooboxxObjects1= [];
gdjs.nicelymeanCode.GDpartnerDooboxxObjects2= [];
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects1= [];
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects2= [];
gdjs.nicelymeanCode.GDrandomassboxObjects1= [];
gdjs.nicelymeanCode.GDrandomassboxObjects2= [];
gdjs.nicelymeanCode.GDshardsObjects1= [];
gdjs.nicelymeanCode.GDshardsObjects2= [];
gdjs.nicelymeanCode.GDschmoschmoObjects1= [];
gdjs.nicelymeanCode.GDschmoschmoObjects2= [];
gdjs.nicelymeanCode.GDQObjects1= [];
gdjs.nicelymeanCode.GDQObjects2= [];
gdjs.nicelymeanCode.GDauraofpeanObjects1= [];
gdjs.nicelymeanCode.GDauraofpeanObjects2= [];
gdjs.nicelymeanCode.GDpartnerGenkObjects1= [];
gdjs.nicelymeanCode.GDpartnerGenkObjects2= [];
gdjs.nicelymeanCode.GDpartnerSteveObjects1= [];
gdjs.nicelymeanCode.GDpartnerSteveObjects2= [];
gdjs.nicelymeanCode.GDhatsObjects1= [];
gdjs.nicelymeanCode.GDhatsObjects2= [];
gdjs.nicelymeanCode.GDSubtitlesObjects1= [];
gdjs.nicelymeanCode.GDSubtitlesObjects2= [];
gdjs.nicelymeanCode.GDelectricfxfxObjects1= [];
gdjs.nicelymeanCode.GDelectricfxfxObjects2= [];
gdjs.nicelymeanCode.GDEPRESObjects1= [];
gdjs.nicelymeanCode.GDEPRESObjects2= [];
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects1= [];
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects2= [];
gdjs.nicelymeanCode.GDweedwhackersliceObjects1= [];
gdjs.nicelymeanCode.GDweedwhackersliceObjects2= [];


gdjs.nicelymeanCode.mapOfGDgdjs_9546nicelymeanCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.nicelymeanCode.GDfpsObjects1});
gdjs.nicelymeanCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("presents"), gdjs.nicelymeanCode.GDpresentsObjects1);
{for(var i = 0, len = gdjs.nicelymeanCode.GDpresentsObjects1.length ;i < len;++i) {
    gdjs.nicelymeanCode.GDpresentsObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "22fff");
}{gdjs.evtTools.sound.playSound(runtimeScene, "lastmenupdateipromise\\nicelymean.wav", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "22fff") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46353724);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lastmenupdateipromise\\presents.wav", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "22fff") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("presents"), gdjs.nicelymeanCode.GDpresentsObjects1);
{for(var i = 0, len = gdjs.nicelymeanCode.GDpresentsObjects1.length ;i < len;++i) {
    gdjs.nicelymeanCode.GDpresentsObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "22fff") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.nicelymeanCode.GDnObjects1);
gdjs.copyArray(runtimeScene.getObjects("presents"), gdjs.nicelymeanCode.GDpresentsObjects1);
{for(var i = 0, len = gdjs.nicelymeanCode.GDnObjects1.length ;i < len;++i) {
    gdjs.nicelymeanCode.GDnObjects1[i].getBehavior("Opacity").setOpacity(gdjs.nicelymeanCode.GDnObjects1[i].getBehavior("Opacity").getOpacity() - (3));
}
}{for(var i = 0, len = gdjs.nicelymeanCode.GDpresentsObjects1.length ;i < len;++i) {
    gdjs.nicelymeanCode.GDpresentsObjects1[i].getBehavior("Opacity").setOpacity(gdjs.nicelymeanCode.GDpresentsObjects1[i].getBehavior("Opacity").getOpacity() - (3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.nicelymeanCode.GDnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nicelymeanCode.GDnObjects1.length;i<l;++i) {
    if ( gdjs.nicelymeanCode.GDnObjects1[i].getAnimationFrame() == 10 ) {
        isConditionTrue_0 = true;
        gdjs.nicelymeanCode.GDnObjects1[k] = gdjs.nicelymeanCode.GDnObjects1[i];
        ++k;
    }
}
gdjs.nicelymeanCode.GDnObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.nicelymeanCode.GDnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nicelymeanCode.GDnObjects1.length;i<l;++i) {
    if ( gdjs.nicelymeanCode.GDnObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.nicelymeanCode.GDnObjects1[k] = gdjs.nicelymeanCode.GDnObjects1[i];
        ++k;
    }
}
gdjs.nicelymeanCode.GDnObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("n"), gdjs.nicelymeanCode.GDnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nicelymeanCode.GDnObjects1.length;i<l;++i) {
    if ( gdjs.nicelymeanCode.GDnObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.nicelymeanCode.GDnObjects1[k] = gdjs.nicelymeanCode.GDnObjects1[i];
        ++k;
    }
}
gdjs.nicelymeanCode.GDnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.nicelymeanCode.GDfpsObjects1);
{gdjs.evtsExt__fpsshow__showfps.func(runtimeScene, gdjs.nicelymeanCode.mapOfGDgdjs_9546nicelymeanCode_9546GDfpsObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.nicelymeanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nicelymeanCode.GDnObjects1.length = 0;
gdjs.nicelymeanCode.GDnObjects2.length = 0;
gdjs.nicelymeanCode.GDnicelymeanObjects1.length = 0;
gdjs.nicelymeanCode.GDnicelymeanObjects2.length = 0;
gdjs.nicelymeanCode.GDtestObjects1.length = 0;
gdjs.nicelymeanCode.GDtestObjects2.length = 0;
gdjs.nicelymeanCode.GDpresentsObjects1.length = 0;
gdjs.nicelymeanCode.GDpresentsObjects2.length = 0;
gdjs.nicelymeanCode.GDmouseObjects1.length = 0;
gdjs.nicelymeanCode.GDmouseObjects2.length = 0;
gdjs.nicelymeanCode.GDfpsObjects1.length = 0;
gdjs.nicelymeanCode.GDfpsObjects2.length = 0;
gdjs.nicelymeanCode.GDcursorgamepadObjects1.length = 0;
gdjs.nicelymeanCode.GDcursorgamepadObjects2.length = 0;
gdjs.nicelymeanCode.GDshootsparksObjects1.length = 0;
gdjs.nicelymeanCode.GDshootsparksObjects2.length = 0;
gdjs.nicelymeanCode.GDfrogstationNewObjects1.length = 0;
gdjs.nicelymeanCode.GDfrogstationNewObjects2.length = 0;
gdjs.nicelymeanCode.GDstatusIconnewObjects1.length = 0;
gdjs.nicelymeanCode.GDstatusIconnewObjects2.length = 0;
gdjs.nicelymeanCode.GDHealthBgObjects1.length = 0;
gdjs.nicelymeanCode.GDHealthBgObjects2.length = 0;
gdjs.nicelymeanCode.GDHealthBarObjects1.length = 0;
gdjs.nicelymeanCode.GDHealthBarObjects2.length = 0;
gdjs.nicelymeanCode.GDAmmoObjects1.length = 0;
gdjs.nicelymeanCode.GDAmmoObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutnewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutnewObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutpacknewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutpacknewObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.nicelymeanCode.GDSaveTextObjects1.length = 0;
gdjs.nicelymeanCode.GDSaveTextObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.nicelymeanCode.GDrandomassboxObjects1.length = 0;
gdjs.nicelymeanCode.GDrandomassboxObjects2.length = 0;
gdjs.nicelymeanCode.GDshardsObjects1.length = 0;
gdjs.nicelymeanCode.GDshardsObjects2.length = 0;
gdjs.nicelymeanCode.GDschmoschmoObjects1.length = 0;
gdjs.nicelymeanCode.GDschmoschmoObjects2.length = 0;
gdjs.nicelymeanCode.GDQObjects1.length = 0;
gdjs.nicelymeanCode.GDQObjects2.length = 0;
gdjs.nicelymeanCode.GDauraofpeanObjects1.length = 0;
gdjs.nicelymeanCode.GDauraofpeanObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerGenkObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerGenkObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerSteveObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerSteveObjects2.length = 0;
gdjs.nicelymeanCode.GDhatsObjects1.length = 0;
gdjs.nicelymeanCode.GDhatsObjects2.length = 0;
gdjs.nicelymeanCode.GDSubtitlesObjects1.length = 0;
gdjs.nicelymeanCode.GDSubtitlesObjects2.length = 0;
gdjs.nicelymeanCode.GDelectricfxfxObjects1.length = 0;
gdjs.nicelymeanCode.GDelectricfxfxObjects2.length = 0;
gdjs.nicelymeanCode.GDEPRESObjects1.length = 0;
gdjs.nicelymeanCode.GDEPRESObjects2.length = 0;
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.nicelymeanCode.GDweedwhackersliceObjects1.length = 0;
gdjs.nicelymeanCode.GDweedwhackersliceObjects2.length = 0;

gdjs.nicelymeanCode.eventsList0(runtimeScene);
gdjs.nicelymeanCode.GDnObjects1.length = 0;
gdjs.nicelymeanCode.GDnObjects2.length = 0;
gdjs.nicelymeanCode.GDnicelymeanObjects1.length = 0;
gdjs.nicelymeanCode.GDnicelymeanObjects2.length = 0;
gdjs.nicelymeanCode.GDtestObjects1.length = 0;
gdjs.nicelymeanCode.GDtestObjects2.length = 0;
gdjs.nicelymeanCode.GDpresentsObjects1.length = 0;
gdjs.nicelymeanCode.GDpresentsObjects2.length = 0;
gdjs.nicelymeanCode.GDmouseObjects1.length = 0;
gdjs.nicelymeanCode.GDmouseObjects2.length = 0;
gdjs.nicelymeanCode.GDfpsObjects1.length = 0;
gdjs.nicelymeanCode.GDfpsObjects2.length = 0;
gdjs.nicelymeanCode.GDcursorgamepadObjects1.length = 0;
gdjs.nicelymeanCode.GDcursorgamepadObjects2.length = 0;
gdjs.nicelymeanCode.GDshootsparksObjects1.length = 0;
gdjs.nicelymeanCode.GDshootsparksObjects2.length = 0;
gdjs.nicelymeanCode.GDfrogstationNewObjects1.length = 0;
gdjs.nicelymeanCode.GDfrogstationNewObjects2.length = 0;
gdjs.nicelymeanCode.GDstatusIconnewObjects1.length = 0;
gdjs.nicelymeanCode.GDstatusIconnewObjects2.length = 0;
gdjs.nicelymeanCode.GDHealthBgObjects1.length = 0;
gdjs.nicelymeanCode.GDHealthBgObjects2.length = 0;
gdjs.nicelymeanCode.GDHealthBarObjects1.length = 0;
gdjs.nicelymeanCode.GDHealthBarObjects2.length = 0;
gdjs.nicelymeanCode.GDAmmoObjects1.length = 0;
gdjs.nicelymeanCode.GDAmmoObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutnewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutnewObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutpacknewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutpacknewObjects2.length = 0;
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.nicelymeanCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.nicelymeanCode.GDSaveTextObjects1.length = 0;
gdjs.nicelymeanCode.GDSaveTextObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.nicelymeanCode.GDrandomassboxObjects1.length = 0;
gdjs.nicelymeanCode.GDrandomassboxObjects2.length = 0;
gdjs.nicelymeanCode.GDshardsObjects1.length = 0;
gdjs.nicelymeanCode.GDshardsObjects2.length = 0;
gdjs.nicelymeanCode.GDschmoschmoObjects1.length = 0;
gdjs.nicelymeanCode.GDschmoschmoObjects2.length = 0;
gdjs.nicelymeanCode.GDQObjects1.length = 0;
gdjs.nicelymeanCode.GDQObjects2.length = 0;
gdjs.nicelymeanCode.GDauraofpeanObjects1.length = 0;
gdjs.nicelymeanCode.GDauraofpeanObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerGenkObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerGenkObjects2.length = 0;
gdjs.nicelymeanCode.GDpartnerSteveObjects1.length = 0;
gdjs.nicelymeanCode.GDpartnerSteveObjects2.length = 0;
gdjs.nicelymeanCode.GDhatsObjects1.length = 0;
gdjs.nicelymeanCode.GDhatsObjects2.length = 0;
gdjs.nicelymeanCode.GDSubtitlesObjects1.length = 0;
gdjs.nicelymeanCode.GDSubtitlesObjects2.length = 0;
gdjs.nicelymeanCode.GDelectricfxfxObjects1.length = 0;
gdjs.nicelymeanCode.GDelectricfxfxObjects2.length = 0;
gdjs.nicelymeanCode.GDEPRESObjects1.length = 0;
gdjs.nicelymeanCode.GDEPRESObjects2.length = 0;
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.nicelymeanCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.nicelymeanCode.GDweedwhackersliceObjects1.length = 0;
gdjs.nicelymeanCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['nicelymeanCode'] = gdjs.nicelymeanCode;
