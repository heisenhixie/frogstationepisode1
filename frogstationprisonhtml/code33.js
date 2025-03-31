gdjs.cutscenedoorshutCode = {};
gdjs.cutscenedoorshutCode.localVariables = [];
gdjs.cutscenedoorshutCode.GDdoorObjects1= [];
gdjs.cutscenedoorshutCode.GDdoorObjects2= [];
gdjs.cutscenedoorshutCode.GDblObjects1= [];
gdjs.cutscenedoorshutCode.GDblObjects2= [];
gdjs.cutscenedoorshutCode.GDmouseObjects1= [];
gdjs.cutscenedoorshutCode.GDmouseObjects2= [];
gdjs.cutscenedoorshutCode.GDfpsObjects1= [];
gdjs.cutscenedoorshutCode.GDfpsObjects2= [];
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects1= [];
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects2= [];
gdjs.cutscenedoorshutCode.GDshootsparksObjects1= [];
gdjs.cutscenedoorshutCode.GDshootsparksObjects2= [];
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects1= [];
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects2= [];
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects1= [];
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects2= [];
gdjs.cutscenedoorshutCode.GDHealthBgObjects1= [];
gdjs.cutscenedoorshutCode.GDHealthBgObjects2= [];
gdjs.cutscenedoorshutCode.GDHealthBarObjects1= [];
gdjs.cutscenedoorshutCode.GDHealthBarObjects2= [];
gdjs.cutscenedoorshutCode.GDAmmoObjects1= [];
gdjs.cutscenedoorshutCode.GDAmmoObjects2= [];
gdjs.cutscenedoorshutCode.GDpeanutnewObjects1= [];
gdjs.cutscenedoorshutCode.GDpeanutnewObjects2= [];
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects1= [];
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects2= [];
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects1= [];
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects2= [];
gdjs.cutscenedoorshutCode.GDSaveTextObjects1= [];
gdjs.cutscenedoorshutCode.GDSaveTextObjects2= [];
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects1= [];
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects2= [];
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects1= [];
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects2= [];
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects1= [];
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects2= [];
gdjs.cutscenedoorshutCode.GDrandomassboxObjects1= [];
gdjs.cutscenedoorshutCode.GDrandomassboxObjects2= [];
gdjs.cutscenedoorshutCode.GDshardsObjects1= [];
gdjs.cutscenedoorshutCode.GDshardsObjects2= [];
gdjs.cutscenedoorshutCode.GDschmoschmoObjects1= [];
gdjs.cutscenedoorshutCode.GDschmoschmoObjects2= [];
gdjs.cutscenedoorshutCode.GDQObjects1= [];
gdjs.cutscenedoorshutCode.GDQObjects2= [];
gdjs.cutscenedoorshutCode.GDauraofpeanObjects1= [];
gdjs.cutscenedoorshutCode.GDauraofpeanObjects2= [];
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects1= [];
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects2= [];
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects1= [];
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects2= [];
gdjs.cutscenedoorshutCode.GDhatsObjects1= [];
gdjs.cutscenedoorshutCode.GDhatsObjects2= [];
gdjs.cutscenedoorshutCode.GDSubtitlesObjects1= [];
gdjs.cutscenedoorshutCode.GDSubtitlesObjects2= [];
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects1= [];
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects2= [];
gdjs.cutscenedoorshutCode.GDEPRESObjects1= [];
gdjs.cutscenedoorshutCode.GDEPRESObjects2= [];
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects1= [];
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects2= [];
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects1= [];
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects2= [];


gdjs.cutscenedoorshutCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("shutdoor");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


};gdjs.cutscenedoorshutCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "getogg");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("roomid").setNumber(8);
}{gdjs.evtTools.storage.writeStringInJSONFile("frogstationprison", "room", runtimeScene.getGame().getVariables().getFromIndex(6).getChild("roomid").getAsString());
}}

}


{


gdjs.cutscenedoorshutCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "getogg") >= 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lightson", false);
}}

}


};

gdjs.cutscenedoorshutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutscenedoorshutCode.GDdoorObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDdoorObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDblObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDblObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDmouseObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDmouseObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDfpsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDfpsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDshootsparksObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDshootsparksObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBgObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBgObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBarObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBarObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDAmmoObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDAmmoObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutnewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutnewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDSaveTextObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDSaveTextObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDrandomassboxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDrandomassboxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDshardsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDshardsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmoObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmoObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDQObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDQObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDauraofpeanObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDauraofpeanObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDhatsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDhatsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDSubtitlesObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDSubtitlesObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDEPRESObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDEPRESObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects2.length = 0;

gdjs.cutscenedoorshutCode.eventsList1(runtimeScene);
gdjs.cutscenedoorshutCode.GDdoorObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDdoorObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDblObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDblObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDmouseObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDmouseObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDfpsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDfpsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDcursorgamepadObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDshootsparksObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDshootsparksObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDfrogstationNewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDstatusIconnewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBgObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBgObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBarObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDHealthBarObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDAmmoObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDAmmoObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutnewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutnewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpacknewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpeanutpackgonenewObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDSaveTextObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDSaveTextObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSchrudeObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerDooboxxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerKawaibillyObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDrandomassboxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDrandomassboxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDshardsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDshardsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmoObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmoObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDQObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDQObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDauraofpeanObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDauraofpeanObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerGenkObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDpartnerSteveObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDhatsObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDhatsObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDSubtitlesObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDSubtitlesObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDelectricfxfxObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDEPRESObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDEPRESObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDschmoschmo2bladeObjects2.length = 0;
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects1.length = 0;
gdjs.cutscenedoorshutCode.GDweedwhackersliceObjects2.length = 0;


return;

}

gdjs['cutscenedoorshutCode'] = gdjs.cutscenedoorshutCode;
