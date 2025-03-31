gdjs.whatthefuckCode = {};
gdjs.whatthefuckCode.localVariables = [];
gdjs.whatthefuckCode.GDNewVideoObjects1= [];
gdjs.whatthefuckCode.GDNewVideoObjects2= [];
gdjs.whatthefuckCode.GDmouseObjects1= [];
gdjs.whatthefuckCode.GDmouseObjects2= [];
gdjs.whatthefuckCode.GDfpsObjects1= [];
gdjs.whatthefuckCode.GDfpsObjects2= [];
gdjs.whatthefuckCode.GDcursorgamepadObjects1= [];
gdjs.whatthefuckCode.GDcursorgamepadObjects2= [];
gdjs.whatthefuckCode.GDshootsparksObjects1= [];
gdjs.whatthefuckCode.GDshootsparksObjects2= [];
gdjs.whatthefuckCode.GDfrogstationNewObjects1= [];
gdjs.whatthefuckCode.GDfrogstationNewObjects2= [];
gdjs.whatthefuckCode.GDstatusIconnewObjects1= [];
gdjs.whatthefuckCode.GDstatusIconnewObjects2= [];
gdjs.whatthefuckCode.GDHealthBgObjects1= [];
gdjs.whatthefuckCode.GDHealthBgObjects2= [];
gdjs.whatthefuckCode.GDHealthBarObjects1= [];
gdjs.whatthefuckCode.GDHealthBarObjects2= [];
gdjs.whatthefuckCode.GDAmmoObjects1= [];
gdjs.whatthefuckCode.GDAmmoObjects2= [];
gdjs.whatthefuckCode.GDpeanutnewObjects1= [];
gdjs.whatthefuckCode.GDpeanutnewObjects2= [];
gdjs.whatthefuckCode.GDpeanutpacknewObjects1= [];
gdjs.whatthefuckCode.GDpeanutpacknewObjects2= [];
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects1= [];
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects2= [];
gdjs.whatthefuckCode.GDSaveTextObjects1= [];
gdjs.whatthefuckCode.GDSaveTextObjects2= [];
gdjs.whatthefuckCode.GDpartnerSchrudeObjects1= [];
gdjs.whatthefuckCode.GDpartnerSchrudeObjects2= [];
gdjs.whatthefuckCode.GDpartnerDooboxxObjects1= [];
gdjs.whatthefuckCode.GDpartnerDooboxxObjects2= [];
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects1= [];
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects2= [];
gdjs.whatthefuckCode.GDrandomassboxObjects1= [];
gdjs.whatthefuckCode.GDrandomassboxObjects2= [];
gdjs.whatthefuckCode.GDshardsObjects1= [];
gdjs.whatthefuckCode.GDshardsObjects2= [];
gdjs.whatthefuckCode.GDschmoschmoObjects1= [];
gdjs.whatthefuckCode.GDschmoschmoObjects2= [];
gdjs.whatthefuckCode.GDQObjects1= [];
gdjs.whatthefuckCode.GDQObjects2= [];
gdjs.whatthefuckCode.GDauraofpeanObjects1= [];
gdjs.whatthefuckCode.GDauraofpeanObjects2= [];
gdjs.whatthefuckCode.GDpartnerGenkObjects1= [];
gdjs.whatthefuckCode.GDpartnerGenkObjects2= [];
gdjs.whatthefuckCode.GDpartnerSteveObjects1= [];
gdjs.whatthefuckCode.GDpartnerSteveObjects2= [];
gdjs.whatthefuckCode.GDhatsObjects1= [];
gdjs.whatthefuckCode.GDhatsObjects2= [];
gdjs.whatthefuckCode.GDSubtitlesObjects1= [];
gdjs.whatthefuckCode.GDSubtitlesObjects2= [];
gdjs.whatthefuckCode.GDelectricfxfxObjects1= [];
gdjs.whatthefuckCode.GDelectricfxfxObjects2= [];
gdjs.whatthefuckCode.GDEPRESObjects1= [];
gdjs.whatthefuckCode.GDEPRESObjects2= [];
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects1= [];
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects2= [];
gdjs.whatthefuckCode.GDweedwhackersliceObjects1= [];
gdjs.whatthefuckCode.GDweedwhackersliceObjects2= [];


gdjs.whatthefuckCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "weird") >= 16;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.whatthefuckCode.GDNewVideoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "weird");
}{for(var i = 0, len = gdjs.whatthefuckCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.whatthefuckCode.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs.whatthefuckCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.whatthefuckCode.GDNewVideoObjects1.length = 0;
gdjs.whatthefuckCode.GDNewVideoObjects2.length = 0;
gdjs.whatthefuckCode.GDmouseObjects1.length = 0;
gdjs.whatthefuckCode.GDmouseObjects2.length = 0;
gdjs.whatthefuckCode.GDfpsObjects1.length = 0;
gdjs.whatthefuckCode.GDfpsObjects2.length = 0;
gdjs.whatthefuckCode.GDcursorgamepadObjects1.length = 0;
gdjs.whatthefuckCode.GDcursorgamepadObjects2.length = 0;
gdjs.whatthefuckCode.GDshootsparksObjects1.length = 0;
gdjs.whatthefuckCode.GDshootsparksObjects2.length = 0;
gdjs.whatthefuckCode.GDfrogstationNewObjects1.length = 0;
gdjs.whatthefuckCode.GDfrogstationNewObjects2.length = 0;
gdjs.whatthefuckCode.GDstatusIconnewObjects1.length = 0;
gdjs.whatthefuckCode.GDstatusIconnewObjects2.length = 0;
gdjs.whatthefuckCode.GDHealthBgObjects1.length = 0;
gdjs.whatthefuckCode.GDHealthBgObjects2.length = 0;
gdjs.whatthefuckCode.GDHealthBarObjects1.length = 0;
gdjs.whatthefuckCode.GDHealthBarObjects2.length = 0;
gdjs.whatthefuckCode.GDAmmoObjects1.length = 0;
gdjs.whatthefuckCode.GDAmmoObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutnewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutnewObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutpacknewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutpacknewObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.whatthefuckCode.GDSaveTextObjects1.length = 0;
gdjs.whatthefuckCode.GDSaveTextObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.whatthefuckCode.GDrandomassboxObjects1.length = 0;
gdjs.whatthefuckCode.GDrandomassboxObjects2.length = 0;
gdjs.whatthefuckCode.GDshardsObjects1.length = 0;
gdjs.whatthefuckCode.GDshardsObjects2.length = 0;
gdjs.whatthefuckCode.GDschmoschmoObjects1.length = 0;
gdjs.whatthefuckCode.GDschmoschmoObjects2.length = 0;
gdjs.whatthefuckCode.GDQObjects1.length = 0;
gdjs.whatthefuckCode.GDQObjects2.length = 0;
gdjs.whatthefuckCode.GDauraofpeanObjects1.length = 0;
gdjs.whatthefuckCode.GDauraofpeanObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerGenkObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerGenkObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerSteveObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerSteveObjects2.length = 0;
gdjs.whatthefuckCode.GDhatsObjects1.length = 0;
gdjs.whatthefuckCode.GDhatsObjects2.length = 0;
gdjs.whatthefuckCode.GDSubtitlesObjects1.length = 0;
gdjs.whatthefuckCode.GDSubtitlesObjects2.length = 0;
gdjs.whatthefuckCode.GDelectricfxfxObjects1.length = 0;
gdjs.whatthefuckCode.GDelectricfxfxObjects2.length = 0;
gdjs.whatthefuckCode.GDEPRESObjects1.length = 0;
gdjs.whatthefuckCode.GDEPRESObjects2.length = 0;
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.whatthefuckCode.GDweedwhackersliceObjects1.length = 0;
gdjs.whatthefuckCode.GDweedwhackersliceObjects2.length = 0;

gdjs.whatthefuckCode.eventsList0(runtimeScene);
gdjs.whatthefuckCode.GDNewVideoObjects1.length = 0;
gdjs.whatthefuckCode.GDNewVideoObjects2.length = 0;
gdjs.whatthefuckCode.GDmouseObjects1.length = 0;
gdjs.whatthefuckCode.GDmouseObjects2.length = 0;
gdjs.whatthefuckCode.GDfpsObjects1.length = 0;
gdjs.whatthefuckCode.GDfpsObjects2.length = 0;
gdjs.whatthefuckCode.GDcursorgamepadObjects1.length = 0;
gdjs.whatthefuckCode.GDcursorgamepadObjects2.length = 0;
gdjs.whatthefuckCode.GDshootsparksObjects1.length = 0;
gdjs.whatthefuckCode.GDshootsparksObjects2.length = 0;
gdjs.whatthefuckCode.GDfrogstationNewObjects1.length = 0;
gdjs.whatthefuckCode.GDfrogstationNewObjects2.length = 0;
gdjs.whatthefuckCode.GDstatusIconnewObjects1.length = 0;
gdjs.whatthefuckCode.GDstatusIconnewObjects2.length = 0;
gdjs.whatthefuckCode.GDHealthBgObjects1.length = 0;
gdjs.whatthefuckCode.GDHealthBgObjects2.length = 0;
gdjs.whatthefuckCode.GDHealthBarObjects1.length = 0;
gdjs.whatthefuckCode.GDHealthBarObjects2.length = 0;
gdjs.whatthefuckCode.GDAmmoObjects1.length = 0;
gdjs.whatthefuckCode.GDAmmoObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutnewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutnewObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutpacknewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutpacknewObjects2.length = 0;
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.whatthefuckCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.whatthefuckCode.GDSaveTextObjects1.length = 0;
gdjs.whatthefuckCode.GDSaveTextObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.whatthefuckCode.GDrandomassboxObjects1.length = 0;
gdjs.whatthefuckCode.GDrandomassboxObjects2.length = 0;
gdjs.whatthefuckCode.GDshardsObjects1.length = 0;
gdjs.whatthefuckCode.GDshardsObjects2.length = 0;
gdjs.whatthefuckCode.GDschmoschmoObjects1.length = 0;
gdjs.whatthefuckCode.GDschmoschmoObjects2.length = 0;
gdjs.whatthefuckCode.GDQObjects1.length = 0;
gdjs.whatthefuckCode.GDQObjects2.length = 0;
gdjs.whatthefuckCode.GDauraofpeanObjects1.length = 0;
gdjs.whatthefuckCode.GDauraofpeanObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerGenkObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerGenkObjects2.length = 0;
gdjs.whatthefuckCode.GDpartnerSteveObjects1.length = 0;
gdjs.whatthefuckCode.GDpartnerSteveObjects2.length = 0;
gdjs.whatthefuckCode.GDhatsObjects1.length = 0;
gdjs.whatthefuckCode.GDhatsObjects2.length = 0;
gdjs.whatthefuckCode.GDSubtitlesObjects1.length = 0;
gdjs.whatthefuckCode.GDSubtitlesObjects2.length = 0;
gdjs.whatthefuckCode.GDelectricfxfxObjects1.length = 0;
gdjs.whatthefuckCode.GDelectricfxfxObjects2.length = 0;
gdjs.whatthefuckCode.GDEPRESObjects1.length = 0;
gdjs.whatthefuckCode.GDEPRESObjects2.length = 0;
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.whatthefuckCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.whatthefuckCode.GDweedwhackersliceObjects1.length = 0;
gdjs.whatthefuckCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['whatthefuckCode'] = gdjs.whatthefuckCode;
