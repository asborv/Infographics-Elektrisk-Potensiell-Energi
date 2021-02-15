(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("h", "39px 'Century Schoolbook'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-25.4,104,99.69999999999999);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("h", "39px 'Century Schoolbook'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-25.4,104,50.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("AkJBCQgcgHgVgIQg8gWAAgdQAAgcA8gXIAxgPQBugbCbAAQCcAABtAbQBuAcAAAmQAAAnhuAbQhuAcibAAQibAAhugcg");
	this.shape.setTransform(3.6,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-6.9,75.1,18.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FAF4F9","#DDBCD8","#C48ABA","#AF5FA2","#9E3D8E","#90227E","#870F73","#81046C","#7F006A"],[0,0.02,0.137,0.255,0.373,0.494,0.616,0.737,0.867,1],0,0,0,0,0,46).s().p("AlFFGQiGiHAAi/QAAi+CGiHQCHiGC+AAQC/AACHCGQCGCHAAC+QAAC/iGCHQiHCGi/AAQi+AAiHiGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.Tabletop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#42210B").p("EAjPgICMg7DAAAIraNlIAACgMA7BAAAILctlg");
	this.shape.setTransform(286.5,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#603813").s().p("EgjOAIDIAAigILatlMA7DAAAIAACgIrcNlg");
	this.shape_1.setTransform(286.5,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tabletop, new cjs.Rectangle(60,-0.5,453,105), null);


(lib.Roofshadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgnDgHpMBOGAAAMhOGAPTg");
	this.shape.setTransform(249.95,49.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Roofshadow, new cjs.Rectangle(0,0,499.9,98.1), null);


(lib.Houseshadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EglGgRLMBKNAAAMhKNAiXg");
	this.shape.setTransform(237.45,110.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Houseshadow, new cjs.Rectangle(0,0,474.9,220.1), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AnACmQi6hFAAhhQAAhgC6hFQC5hFEHAAQEHAAC6BFQC6BFAABgQAABhi6BFQi6BFkHAAQkGAAi6hFg");
	this.shape.setTransform(63.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,47), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AlBB1QiFgxAAhEQAAhDCFgxQCFgwC8AAQC9AACFAwQCFAxAABDQAABEiFAxQiGAwi8AAQi7AAiGgwg");
	this.shape.setTransform(45.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,91,33), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("ApcDlQj6hfAAiGQAAiFD6hgQD7hfFhAAQFiAAD7BfQD6BgAACFQAACGj6BfQj7BgliAAQlhAAj7hgg");
	this.shape.setTransform(85.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,171,65), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AmoDlQivhfAAiGQAAiFCvhgQCwhfD4AAQD4AACwBfQCwBgAACFQAACGiwBfQiwBgj4AAQj4AAiwhgg");
	this.shape.setTransform(60,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,120,65), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AmrDpQixhgAAiJQAAiICxhhQCxhgD6AAQD7AACxBgQCxBhAACIQAACJixBgQixBhj7AAQj5AAiyhhg");
	this.shape.setTransform(60.5,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,121,66), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AoEC0QjVhKAAhqQAAhoDVhLQDXhLEtAAQEvAADVBLQDWBLAABoQAABqjWBKQjWBLkuAAQktAAjXhLg");
	this.shape.setTransform(73,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,146,51), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AqQD/QkRhqAAiVQAAiUERhqQEQhpGAAAQGBAAERBpQEQBqAACUQAACVkQBqQkRBpmBAAQmAAAkQhpg");
	this.shape.setTransform(93,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,186,72), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006837").s().p("AkEBnQhtgrAAg8QAAg7BtgrQBsgqCYAAQCZAABtAqQBsArAAA7QAAA8hsArQhtAqiZAAQiYAAhsgqg");
	this.shape.setTransform(37,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,74,29), null);


// stage content:
(lib.Hangingball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.text = new cjs.Text("h", "39px 'Century Schoolbook'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(566,205.45,0.3749,0.3749);

	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(566.15,214.5,0.3749,0.3749,0,0,0,0.6,0.8);
	this.instance._off = true;

	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.setTransform(566.15,232.7,0.3749,0.3749,0,0,0,0.6,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},47).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance_1}]},75).to({state:[{t:this.text}]},19).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true,y:232.7},12).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},12).wait(47).to({startPosition:0},0).to({regY:0.4,y:159.5},18).wait(75).to({startPosition:0},0).to({_off:true,regX:0,regY:0,x:566,y:205.45,text:"h",font:"39px 'Century Schoolbook'",color:"#000000",textAlign:NaN,lineHeight:48.85,lineWidth:100},19).wait(19));

	// Vectors
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("Ah1h1IDrDr");
	this.shape.setTransform(534.8838,181.8369,0.1586,0.1586,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3).p("EAAAgirMAAABFX");
	this.shape_1.setTransform(537.6954,182.0104,0.1586,0.0118,-45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("Ah1h1IDrDr");
	this.shape_2.setTransform(537.6662,255.5131,0.1586,0.1586,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2).p("AAyAyIhjhj");
	this.shape_3.setTransform(534.8882,255.7428,0.3749,0.3749);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2).p("EAAAgirMAAABFX");
	this.shape_4.setTransform(536.2794,218.7033,0.3749,0.1692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2).p("EAAAgirMAAABFX");
	this.shape_5.setTransform(536.2794,218.7033,0.3749,0.1692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2).p("AgelQIAegfIAfAfAgeFSIAeAeIAggiAAAFpIAArU");
	this.shape_6.setTransform(536.2994,220.1019);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2).p("AgdlAIAdgfIAAABIAdAbAgdFFIAdAbIAegiAAAFbIAAq5");
	this.shape_7.setTransform(536.3068,221.5971);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2).p("AgckuIAcgfIAAABIAcAXAgcE2IAcAYIABgCIAbghAABFMIgBqY");
	this.shape_8.setTransform(536.3065,223.2232);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2).p("AgakaIAagfIAAABIAaATAgaElIAaAVIAAgBIAbgjAAAE5IAApx");
	this.shape_9.setTransform(536.3318,225.0655);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2).p("AgYkEIAYgfIAAAAIAZAQAgYERIAYARIAAgBIAZgiAAAEhIAApEIAAgF");
	this.shape_10.setTransform(536.3355,227.2303);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2).p("AgWjpIAWgfIAAAAIAXAKAAAkIIAAgJAgWD8IAWANIAAgBIAXgjAAAEMIAAgEIAAoQ");
	this.shape_11.setTransform(536.3387,229.5287);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2).p("AgTjLIATgfIAAAAIAUAFAAAjqIAAgMAgTDjIATAIIAAgBIAUgjAAADyIAAgIIAAnU");
	this.shape_12.setTransform(536.3855,232.243);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2).p("AgQinIAQgeIAAAAIARgCAAAjFIAAgQAgQDJIAQADIARglAAADWIAAgKIAAmR");
	this.shape_13.setTransform(536.3872,235.0986);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2).p("AgNh/IANgeIAAAAIANgJAAAidIAAgVAgNCoIANgDIAAgBIAOglAAACzIAAgPIAAlB");
	this.shape_14.setTransform(536.4113,238.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2).p("AgJhRIAJgeIAKgSAAAhvIAAgaAgJCDIAJgMIAKgmAAACKIAAgTIAAjm");
	this.shape_15.setTransform(536.4327,242.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2).p("AgEgbIAEgeIAFgdAAAg5IAAghAgEBWIAEgUIAFgnAAABbIAAgZIAAh7");
	this.shape_16.setTransform(536.477,247.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2).p("AgBgiIABgEIACgBIgDBf");
	this.shape_17.setTransform(536.5353,250.8444);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2).p("AgDhTIADgFIADABIgDB+AgDBjIAHg+");
	this.shape_18.setTransform(536.525,246.3309);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2).p("AgFh/IAFgHIAFACIgFDfAgFCRIAFgVIAFgl");
	this.shape_19.setTransform(536.5272,241.4947);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2).p("AgHitIAHgIIAGAEIgGE/AgHC/IAHgRIAHgl");
	this.shape_20.setTransform(536.5567,236.6611);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2).p("AgJjaIAJgLIAIAHIgIGgAgJDtIAJgNIAIgl");
	this.shape_21.setTransform(536.6019,231.863);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2).p("AgLkIIALgMIAJAIIgJIBAgLEbIALgKIAKgk");
	this.shape_22.setTransform(536.6352,227.0956);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2).p("AgNk1IANgOIALAKIgLJhAgNFJIANgGIAMgk");
	this.shape_23.setTransform(536.632,222.2956);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2).p("AgPliIAPgQIANAMIgNLBAgOF3IAOgDIAOgj");
	this.shape_24.setTransform(536.625,217.4843);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2).p("AgQmQIAQgRIAPANIgPMiAgQGkIAQABIAQgj");
	this.shape_25.setTransform(536.6406,212.7067);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2).p("AgSm/IARgTIASAPIgRODAgSHRIASAEIASgj");
	this.shape_26.setTransform(536.6416,208.0966);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2).p("AgUnvIATgUIATARIgSPjAgUH9IAUAIIAUgj");
	this.shape_27.setTransform(536.6246,203.4681);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2).p("AgWodIAVgWIAVASIgUREAgWIpIAWAMIAVgi");
	this.shape_28.setTransform(536.6429,198.8236);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2).p("AgYpMIAXgYIAXAUIgWSlAgXJVIAXAQIAXgi");
	this.shape_29.setTransform(536.6222,194.172);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2).p("Agap7IAZgaIAZAWIgYUGAgZKCIAZATIAZgh");
	this.shape_30.setTransform(536.6224,189.512);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2).p("AgbqqIAagbIAaAYIgZVmAgbKvIAbAXIAbgi");
	this.shape_31.setTransform(536.6225,184.8418);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2).p("AgdrYIAcgdIAcAZIgbXHAgdLbIAeAbIAcgh");
	this.shape_32.setTransform(536.6228,180.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2).p("AgfsHIAegeIAeAbIgdYnAgeMIIAfAeIAegg");
	this.shape_33.setTransform(536.6228,175.4955);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2).p("EAAAgirMAAABFX");
	this.shape_34.setTransform(536.5294,170.442,0.3749,0.3831);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2).p("AggsDIAfgeIAdAbIgcJhIABOvIAAAWIAAAJAABMgIABAAIAAgDIAZgqIAGgFAABMKIAagXAgfLrIAgAfAgeMSIAfAO");
	this.shape_35.setTransform(536.5365,174.4723);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2).p("AggrVIAdgcIAdAaIgaJAIADNQIAAAkIAAAjAAbKmIAHgGAAbKmIADgIAgfKeIAhAcIABgBIAYgTAgcLrIAegGIAAgGIABgCIAYg3");
	this.shape_36.setTransform(536.4834,178.5207);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2).p("AggqqIAcgaIAaAYIgWIhIAELvIABAxIAUg/IADgKAgfJOIAgAYIADgCIAVgOIAJgGAgaLBIAcgaIAAgJIADgJIAAA+");
	this.shape_37.setTransform(536.4526,182.9229);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2).p("Agfp+IAagZIAZAXIgUIAIAGKQIABA8IAShHIADgLAgeH+IAgAUIAEgCIATgLIAJgFAgYKXIAagtIAAgMIAFgSIABBa");
	this.shape_38.setTransform(536.3918,187.294);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2).p("AgfpUIAYgXIAYAWIgRHgIAGIxIARgIIALgFAgWJsIAYhBIAAgPIAGgZIABB2AAGG8IACBHIAPhPIADgMAgfGtIAhARIAEgC");
	this.shape_39.setTransform(536.3609,191.7005);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2).p("AgeooIAWgWIAWAVIgNG/IAGHTIAQgGIAMgEAAXFjIACgMAgeFdIAhAOIAEgCIACBPIAOhVAgTJCIAWhUIAAgSIAGgkIADCU");
	this.shape_40.setTransform(536.2685,196.0798);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2).p("Agen9IAVgUIAVATIgLGfIAGF1IAOgEIAOgDAAVESIACgNAgdENIAgAKIAEgBIACBYIAMhcAgRIYIAUhoIAAgVIAGgtIAFCx");
	this.shape_41.setTransform(536.2331,200.4881);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2).p("AgdnSIATgSIATASIgHICIAECTIAOgCIAQgCAAUDBIACgOAAJEhIALhgAAGDDIADBeAgdC9IAgAGIADAAAgPHuIASh8IAAgYIAGg5IAHDR");
	this.shape_42.setTransform(536.18,204.8943);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2).p("AgdmnIASgQIARAQIgEHWIADBAIAEBuIAJDoAATBvIABgOAgdBsIAgADIACAAIAOAAIARgBAgNHEIARiQIAFhXIAKhu");
	this.shape_43.setTransform(536.1025,209.267);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2).p("Agdl9IAQgOIAQAOIgBGXIAGCGIAKiFIASACAgMGZIAPikIAFhVIAMD4AACAaIABAAIAPABIABgNAgdAbIAfgB");
	this.shape_44.setTransform(536.1112,213.788);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2).p("AgdlTIAOgNIAPAOIACEZIAECmIAKikIATADAACg5IABgBIANADIABgNAgdg2IAfgDAgKFtIAQkAIAPD9");
	this.shape_45.setTransform(536.138,218.2668);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2).p("AgekqIANgKIANAMIAECaIADDPIALjMIAVAGAAAiOIACgBIAMAEIAAgMAgeiHIAegHAADBBIAUD6AgJFCIAMkB");
	this.shape_46.setTransform(536.1982,222.8159);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2).p("AALjgIAAgKAALjgIAXAJAgGjiIAGgCIALAEAgfkAIAMgJIALALIACAcAgfjZIAZgJIAGEIIABAKIAKkQAABAwIAWDdAgJEWIAKjm");
	this.shape_47.setTransform(536.26,227.3774);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2).p("AAJkIIAAgIAAJkIIAYAMAgfj+IAfgOIAJAEAgfipIAKgHIAKAJIALDnIAAARIAZC7AAABAIAJlIAgHEYIAHjY");
	this.shape_48.setTransform(536.2637,227.3662);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2).p("AggkOIAggSIAHAEIAAgGAggg+IAJgFIAIAHIAPCYIAAAEIAAAwIAaCPAgGEuIAGjSIAHl4IAaAQ");
	this.shape_49.setTransform(536.3227,225.3921);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2).p("AggkgIAggVIAFAEIAbATAAFkxIAAgEAggAqIAHgDIAHAGIARByIABALIAAAkIAbBiAgEFCIADijIAGnQ");
	this.shape_50.setTransform(536.3109,223.5041);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2).p("AggkxIAggZIADAEIAdAXAggCVIAFgCIAFAFIAVBVIABAIIAAAYIAdA2AgDFXIAChqIAEoz");
	this.shape_51.setTransform(536.304,221.57);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2).p("AgglCIAggcIADADIAdAbAggD/IAEAAIAEAEIAYA6IAAACIAAAMIAfAKAgBFsIABgvIADqY");
	this.shape_52.setTransform(536.2568,219.6305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:0.3749,scaleY:0.1692,rotation:0,x:536.2794,y:218.7033}},{t:this.shape_3},{t:this.shape_2,p:{skewX:180,skewY:0,x:537.6662,y:255.5131}},{t:this.shape_1},{t:this.shape,p:{skewX:0,skewY:180,x:534.8838,y:181.8369}}]}).to({state:[{t:this.shape_5,p:{scaleX:0.3749,scaleY:0.1692,rotation:0,x:536.2794,y:218.7033}},{t:this.shape_3},{t:this.shape_2,p:{skewX:180,skewY:0,x:537.6662,y:255.5131}},{t:this.shape_4,p:{scaleX:0.1586,scaleY:0.0118,rotation:-45,x:537.6954,y:182.0104}},{t:this.shape,p:{skewX:0,skewY:180,x:534.8838,y:181.8369}}]},7).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_4,p:{scaleX:0.3749,scaleY:0.0158,rotation:0,x:536.5294,y:253.1162}}]},1).to({state:[{t:this.shape_4,p:{scaleX:0.3749,scaleY:0.0158,rotation:0,x:536.5294,y:253.1162}}]},47).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_5,p:{scaleX:0.1586,scaleY:0.0118,rotation:-45,x:537.8954,y:86.3604}},{t:this.shape_2,p:{skewX:0,skewY:180,x:535.1338,y:86.6869}},{t:this.shape_4,p:{scaleX:0.1586,scaleY:0.0118,rotation:135,x:535.1046,y:254.7396}},{t:this.shape,p:{skewX:180,skewY:0,x:538.0162,y:254.9131}}]},1).to({state:[{t:this.shape_34},{t:this.shape_5,p:{scaleX:0.1586,scaleY:0.0118,rotation:-45,x:537.8954,y:86.3604}},{t:this.shape_2,p:{skewX:0,skewY:180,x:535.1338,y:86.6869}},{t:this.shape_4,p:{scaleX:0.1586,scaleY:0.0118,rotation:135,x:535.1046,y:254.7396}},{t:this.shape,p:{skewX:180,skewY:0,x:538.0162,y:254.9131}}]},75).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.3749,scaleY:0.1692,rotation:0,x:536.2794,y:218.7033}},{t:this.shape_3},{t:this.shape_2,p:{skewX:180,skewY:0,x:537.6662,y:255.5131}},{t:this.shape_4,p:{scaleX:0.1586,scaleY:0.0118,rotation:-45,x:537.6954,y:182.0104}},{t:this.shape,p:{skewX:0,skewY:180,x:534.8838,y:181.8369}}]},1).wait(19));

	// Ball
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(511.15,178.5,0.3749,0.3749,0,0,0,1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:510.8,y:179.1974},0).wait(1).to({y:180.35},0).wait(1).to({y:181.7851},0).wait(1).to({y:183.6068},0).wait(1).to({y:185.9554},0).wait(1).to({y:189.0194},0).wait(1).to({y:193.0491},0).wait(1).to({y:198.3665},0).wait(1).to({y:205.3606},0).wait(1).to({y:214.4477},0).wait(1).to({y:225.9785},0).wait(1).to({regX:1,regY:0.8,x:511.15,y:240.35},0).to({regY:1.4,scaleY:0.2226,y:247.45},2).wait(2).to({regY:0.8,scaleY:0.3749,y:240.35},0).to({regY:0.4,y:227.7},6,cjs.Ease.cubicOut).to({regY:0.8,y:240.35},8,cjs.Ease.cubicIn).wait(2).to({scaleY:0.3214,y:242.8},0).to({regY:1,scaleY:0.3565,y:241.25},2).wait(25).to({startPosition:0},0).to({regY:0.8,y:82.9},18).wait(75).to({startPosition:0},0).to({regY:0.7,scaleY:0.3749,y:178.5},19).wait(19));

	// Thread
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#42210B").ss(2).p("EAAAgirMAAABFX");
	this.shape_53.setTransform(510.9794,83.2263,0.3749,0.3749);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#42210B").ss(2).p("AAANZIAA6x");
	this.shape_54.setTransform(510.95,85.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#42210B").ss(2).p("AAANyIAA7j");
	this.shape_55.setTransform(510.95,88.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#42210B").ss(2).p("AAAOLIAA8V");
	this.shape_56.setTransform(510.95,90.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#42210B").ss(2).p("AAAOkIAA9H");
	this.shape_57.setTransform(510.95,93.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#42210B").ss(2).p("AAAO8IAA93");
	this.shape_58.setTransform(510.95,95.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#42210B").ss(2).p("AAAPVIAA+p");
	this.shape_59.setTransform(510.95,98.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#42210B").ss(2).p("AAAPuIAA/b");
	this.shape_60.setTransform(510.95,100.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#42210B").ss(2).p("AAAQHMAAAggN");
	this.shape_61.setTransform(510.95,103.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#42210B").ss(2).p("AAAQgMAAAgg/");
	this.shape_62.setTransform(510.95,105.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#42210B").ss(2).p("AAAQ5MAAAghx");
	this.shape_63.setTransform(510.95,108.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#42210B").ss(2).p("AAARRMAAAgih");
	this.shape_64.setTransform(510.95,110.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#42210B").ss(2).p("AAAQ/MAAAgh9");
	this.shape_65.setTransform(510.95,108.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#42210B").ss(2).p("AAAQTMAAAggl");
	this.shape_66.setTransform(510.95,104.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#42210B").ss(2).p("AAAPnIAA/N");
	this.shape_67.setTransform(510.95,99.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#42210B").ss(2).p("AAAO7IAA91");
	this.shape_68.setTransform(510.95,95.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#42210B").ss(2).p("AAAOPIAA8d");
	this.shape_69.setTransform(510.95,91.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#42210B").ss(2).p("AAANjIAA7F");
	this.shape_70.setTransform(510.95,86.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#42210B").ss(2).p("AAAM4IAA5v");
	this.shape_71.setTransform(510.95,82.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#42210B").ss(2).p("AAAMMIAA4X");
	this.shape_72.setTransform(510.95,77.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#42210B").ss(2).p("AAALgIAA2/");
	this.shape_73.setTransform(510.95,73.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#42210B").ss(2).p("AAAK0IAA1n");
	this.shape_74.setTransform(510.95,69.075);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#42210B").ss(2).p("AAAKJIAA0R");
	this.shape_75.setTransform(510.95,64.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#42210B").ss(2).p("AAAJdIAAy5");
	this.shape_76.setTransform(510.95,60.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#42210B").ss(2).p("AAAIxIAAxh");
	this.shape_77.setTransform(510.95,55.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#42210B").ss(2).p("AAAIFIAAwJ");
	this.shape_78.setTransform(510.95,51.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#42210B").ss(2).p("AAAHZIAAux");
	this.shape_79.setTransform(510.95,46.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#42210B").ss(2).p("AAAGuIAAta");
	this.shape_80.setTransform(510.95,42.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#42210B").ss(2).p("AAAGCIAAsD");
	this.shape_81.setTransform(510.95,38.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#42210B").ss(2).p("AAAFwIAArf");
	this.shape_82.setTransform(510.95,36.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#42210B").ss(2).p("AAAGJIAAsR");
	this.shape_83.setTransform(510.95,38.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#42210B").ss(2).p("AAAGjIAAtF");
	this.shape_84.setTransform(510.95,41.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#42210B").ss(2).p("AAAG9IAAt5");
	this.shape_85.setTransform(510.95,44.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#42210B").ss(2).p("AAAHXIAAut");
	this.shape_86.setTransform(510.95,46.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#42210B").ss(2).p("AAAHxIAAvh");
	this.shape_87.setTransform(510.95,49.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#42210B").ss(2).p("AAAILIAAwV");
	this.shape_88.setTransform(510.95,51.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#42210B").ss(2).p("AAAIkIAAxH");
	this.shape_89.setTransform(510.95,54.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#42210B").ss(2).p("AAAI+IAAx7");
	this.shape_90.setTransform(510.95,57.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#42210B").ss(2).p("AAAJYIAAyv");
	this.shape_91.setTransform(510.95,59.775);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#42210B").ss(2).p("AAAJyIAAzj");
	this.shape_92.setTransform(510.95,62.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#42210B").ss(2).p("AAAKMIAA0X");
	this.shape_93.setTransform(510.95,65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#42210B").ss(2).p("AAAKmIAA1L");
	this.shape_94.setTransform(510.95,67.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#42210B").ss(2).p("AAAK/IAA19");
	this.shape_95.setTransform(510.95,70.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#42210B").ss(2).p("AAALZIAA2x");
	this.shape_96.setTransform(510.95,72.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#42210B").ss(2).p("AAALzIAA3l");
	this.shape_97.setTransform(510.95,75.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#42210B").ss(2).p("AAAMNIAA4Z");
	this.shape_98.setTransform(510.95,78.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#42210B").ss(2).p("AAAMmIAA5L");
	this.shape_99.setTransform(510.95,80.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_53}]},46).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},8).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},75).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_53}]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(46).to({_off:true},1).wait(11).to({_off:false,scaleY:0.5091,y:113.2223},0).wait(8).to({_off:true},1).wait(17).to({_off:false,scaleY:0.1539,y:33.726},0).wait(75).to({_off:true},1).wait(18).to({_off:false,scaleY:0.3749,y:83.2263},0).wait(19));

	// Ball_shadow
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(503.2,254.95,0.3749,0.3749,0,0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).to({regX:0.5,regY:0.3,scaleX:0.5069,scaleY:0.6186,x:507.65,y:256.6},12,cjs.Ease.cubicIn).to({startPosition:0},4,cjs.Ease.cubicIn).to({regX:0.9,regY:0.7,scaleX:0.4568,scaleY:0.4639,x:506.05,y:255.55},6,cjs.Ease.cubicOut).to({regX:0.8,regY:0.4,scaleX:0.5049,scaleY:0.5814,x:507.6,y:256.45},8,cjs.Ease.cubicIn).wait(29).to({startPosition:0},0).to({regX:1.1,regY:1,scaleX:0.23,scaleY:0.2066,x:498.15,y:253.75},18).wait(75).to({startPosition:0},0).to({regX:0.7,regY:0.7,scaleX:0.3749,scaleY:0.3749,x:503.2,y:254.95},19).wait(19));

	// Foreground
	this.instance_4 = new lib.Tabletop();
	this.instance_4.setTransform(503.35,261.55,0.3749,0.3749,0,0,0,287,52.7);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",-17,31,15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#42210B").s().p("ASNI/IAAr3ICgAAIAAL3gA6AIXIAAr3ICgAAIAAL3gAXhDhIAAr3ICgAAIAAL3gA0sC5IAAr3ICgAAIAAL3g");
	this.shape_100.setTransform(499.5452,277.6084,0.3749,0.3749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.instance_4}]}).wait(197));

	// Background
	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(592.75,285.45,0.3749,0.3749,0,0,0,37.5,15);
	this.instance_5.alpha = 0.8008;
	this.instance_5.compositeOperation = "darken";
	this.instance_5.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_5.cache(-2,-2,78,33);

	this.instance_6 = new lib.Path_1();
	this.instance_6.setTransform(579.65,396.7,0.3749,0.3749,0,0,0,93.4,36.8);
	this.instance_6.alpha = 0.8008;
	this.instance_6.compositeOperation = "darken";
	this.instance_6.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_6.cache(-2,-2,190,76);

	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(496.8,394.95,0.3749,0.3749,0,0,0,73.6,26.2);
	this.instance_7.alpha = 0.8008;
	this.instance_7.compositeOperation = "darken";
	this.instance_7.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_7.cache(-2,-2,150,55);

	this.instance_8 = new lib.Path_3();
	this.instance_8.setTransform(353.7,353.55,0.3749,0.3749,0,0,0,61.1,33.8);
	this.instance_8.alpha = 0.8008;
	this.instance_8.compositeOperation = "darken";
	this.instance_8.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_8.cache(-2,-2,125,70);

	this.instance_9 = new lib.Path_4();
	this.instance_9.setTransform(281.6,402.15,0.3749,0.3749,0,0,0,60.7,33.2);
	this.instance_9.alpha = 0.8008;
	this.instance_9.compositeOperation = "darken";
	this.instance_9.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_9.cache(-2,-2,124,69);

	this.instance_10 = new lib.Path_5();
	this.instance_10.setTransform(162.15,400.25,0.3749,0.3749,0,0,0,86,33.4);
	this.instance_10.alpha = 0.8008;
	this.instance_10.compositeOperation = "darken";
	this.instance_10.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_10.cache(-2,-2,175,69);

	this.instance_11 = new lib.Path_6();
	this.instance_11.setTransform(187.65,315.15,0.3749,0.3749,0,0,0,46.1,17.2);
	this.instance_11.alpha = 0.8008;
	this.instance_11.compositeOperation = "darken";
	this.instance_11.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_11.cache(-2,-2,95,37);

	this.instance_12 = new lib.Path_7();
	this.instance_12.setTransform(56.05,365.85,0.3749,0.3749,0,0,0,64.3,24.4);
	this.instance_12.alpha = 0.8008;
	this.instance_12.compositeOperation = "darken";
	this.instance_12.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_12.cache(-2,-2,131,51);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#006837").ss(5).p("AjEJaQAAnpB6lYQA6ijBLhZQBNhdBWAA");
	this.shape_101.setTransform(510.6608,372.3814,0.3749,0.3749);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#006837").ss(5).p("Ak6FlQAAkdDAjJQC+jKEQAA");
	this.shape_102.setTransform(515.0845,381.5663,0.3749,0.3749);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#006837").ss(5).p("AISIAQAAjLhVi6QhSiyiWiKQiWiLjDhLQjJhPjdAA");
	this.shape_103.setTransform(483.406,375.7554,0.3749,0.3749);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#006837").ss(5).p("AhwLlQAApcBKmpQBImrBoAA");
	this.shape_104.setTransform(361.1052,322.1664,0.3749,0.3749);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#006837").ss(5).p("Ai3G2QAAlhBzj4QByj5CjAA");
	this.shape_105.setTransform(363.7574,333.5153,0.3749,0.3749);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#006837").ss(5).p("AE5J2QAAoAi/loQhairhzheQh5hgiFAA");
	this.shape_106.setTransform(345.1454,326.3367,0.3749,0.3749);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AgTAjQgPgHgEgQQgFgQAIgPQAIgPAQgEQAQgFAOAIQAPAJAFAPQAFAQgIAPQgIAPgRAEQgGACgFAAQgJAAgKgGg");
	this.shape_107.setTransform(82.6278,311.2176,0.3749,0.3749);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D4145A").s().p("AhqARQA0gwA2ADQA4AEAzA1g");
	this.shape_108.setTransform(78.6245,310.1459,0.3749,0.3749);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D4145A").s().p("AAAAdQg3gDgzg2IDVAMQgwAtg0AAIgHAAg");
	this.shape_109.setTransform(78.6057,311.8405,0.3749,0.3749);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D4145A").s().p("AgngPQAUg0BDggIhNDHQgfhAAVgzg");
	this.shape_110.setTransform(80.8506,314.9571,0.3749,0.3749);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D4145A").s().p("AAehjQAfBAgVAzQgUA0hDAgg");
	this.shape_111.setTransform(81.4969,314.9759,0.3749,0.3749);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D4145A").s().p("AgeApQgqgkgKhJIClCIQgOABgMAAQg1AAgigcg");
	this.shape_112.setTransform(85.7381,313.7789,0.3749,0.3749);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D4145A").s().p("AhShCQBHgJAqAjQArAkAJBJg");
	this.shape_113.setTransform(85.7474,313.7421,0.3749,0.3749);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D4145A").s().p("AhaA4IC0hzQgNBFgvAeQgfAUgsAAQgVAAgYgEg");
	this.shape_114.setTransform(86.0005,309.1267,0.3749,0.3749);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D4145A").s().p("AgdgnQAugeBKAOIi1BzQAOhFAvgeg");
	this.shape_115.setTransform(86.0286,308.9597,0.3749,0.3749);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D4145A").s().p("AgnhnQA9AjAOA2QAOA1gkBBg");
	this.shape_116.setTransform(82.09,307.3374,0.3749,0.3749);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D4145A").s().p("AgjAQQgOg1AkhCIA1DPQg9gjgOg1g");
	this.shape_117.setTransform(81.1197,307.3187,0.3749,0.3749);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFF00").s().p("AgPAlQgQgHgGgQQgGgPAHgPQAHgQAPgFQAPgGAQAHQAQAHAFAQQAGAOgHAPQgHAQgQAGQgHADgHAAQgHAAgIgEg");
	this.shape_118.setTransform(47.4427,329.6811,0.3749,0.3749);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D4145A").s().p("AhMhJQBGgEAoAnQAoAmADBLg");
	this.shape_119.setTransform(44.5373,326.9015,0.3749,0.3749);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D4145A").s().p("AghAnQgogngDhKICZCUIgLABQg/AAgkgkg");
	this.shape_120.setTransform(44.5373,326.8935,0.3749,0.3749);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D4145A").s().p("AgagnQAwgaBJAUIi9BkQAThDAxgbg");
	this.shape_121.setTransform(43.9187,331.4224,0.3749,0.3749);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D4145A").s().p("AheAuIC9hkQgTBEgxAaQgbAPgjAAQgbAAgggJg");
	this.shape_122.setTransform(43.8906,331.7373,0.3749,0.3749);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D4145A").s().p("AghAMQgJg2Apg/IAkDTQg6gngKg3g");
	this.shape_123.setTransform(47.5404,333.6268,0.3749,0.3749);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D4145A").s().p("AgjhpQA7AnAKA3QAJA2gpA/g");
	this.shape_124.setTransform(48.7787,333.6549,0.3749,0.3749);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D4145A").s().p("AgDAhQg4gIgug6IDTAeQgvAlgvAAIgPgBg");
	this.shape_125.setTransform(51.4166,330.9291,0.3749,0.3749);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D4145A").s().p("AhqAEQA4grA2AHQA4AIAvA6g");
	this.shape_126.setTransform(51.4353,329.5202,0.3749,0.3749);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D4145A").s().p("AAphfQAZBCgZAxQgYAzhFAZg");
	this.shape_127.setTransform(49.4227,326.0634,0.3749,0.3749);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D4145A").s().p("AgogTQAYgyBFgbIhdDBQgZhDAZgxg");
	this.shape_128.setTransform(48.9681,326.054,0.3749,0.3749);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AgQAlQgPgHgGgQQgGgPAHgPQAHgQAQgFQAPgGAPAHQAPAHAGAPQAGAPgHAPQgHAQgQAGQgHADgHAAQgIAAgIgEg");
	this.shape_129.setTransform(50.6078,305.388,0.3749,0.3749);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D4145A").s().p("AhMhJQBHgEAnAnQAoAmAEBLg");
	this.shape_130.setTransform(47.7052,302.6084,0.3749,0.3749);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D4145A").s().p("AghAnQgogngDhKICaCUIgMABQg/AAgkgkg");
	this.shape_131.setTransform(47.7052,302.6004,0.3749,0.3749);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D4145A").s().p("AgagnQAwgaBJAUIi9BkQAThEAxgag");
	this.shape_132.setTransform(47.0772,307.1293,0.3749,0.3749);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D4145A").s().p("AheAuIC9hkQgTBEgxAaQgbAPgjAAQgbAAgggJg");
	this.shape_133.setTransform(47.0491,307.4442,0.3749,0.3749);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D4145A").s().p("AghAMQgJg2Apg/IAlDTQg7gngKg3g");
	this.shape_134.setTransform(50.6993,309.3337,0.3749,0.3749);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D4145A").s().p("AgihpQA6AnAKA3QAKA2gqA/g");
	this.shape_135.setTransform(51.9404,309.3525,0.3749,0.3749);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D4145A").s().p("AgDAhQg3gIgwg6IDUAeQgvAlgwAAIgOgBg");
	this.shape_136.setTransform(54.5844,306.636,0.3749,0.3749);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D4145A").s().p("AhqAEQA4grA2AHQA3AIAwA6g");
	this.shape_137.setTransform(54.6032,305.2271,0.3749,0.3749);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D4145A").s().p("AAphfQAZBCgYAxQgZAzhFAZg");
	this.shape_138.setTransform(52.5742,301.7703,0.3749,0.3749);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D4145A").s().p("AgpgTQAZgyBFgbIhdDBQgZhDAYgxg");
	this.shape_139.setTransform(52.1335,301.7609,0.3749,0.3749);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#006837").ss(5).p("AC/MMQg7qGhwnBQhvnChjAJ");
	this.shape_140.setTransform(57.4243,333.8071,0.3749,0.3749);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#006837").ss(5).p("ADZHCQgjl6iFj/QiFkBibAO");
	this.shape_141.setTransform(56.4541,346.1779,0.3749,0.3749);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#006837").ss(5).p("AjlK8QgyojCRmSQBEi/BlhuQBphzB+gL");
	this.shape_142.setTransform(73.2115,336.8002,0.3749,0.3749);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgaQgHgaANgYQAOgYAbgHQAZgHAYANQAYAOAHAbQAHAZgNAYQgOAYgaAHQgJADgJAAQgQAAgQgJg");
	this.shape_143.setTransform(628.428,317.0043,0.3749,0.3749);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#662D91").s().p("AhyiEQBzAGA8BEQA7BEgFB7g");
	this.shape_144.setTransform(624.1403,312.0798,0.3749,0.3749);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#662D91").s().p("Ag7A7Qg8hEAGh7IDkEJQhzgFg7hFg");
	this.shape_145.setTransform(624.1322,312.033,0.3749,0.3749);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#662D91").s().p("Agkg/QBTgjBzArIlCCHQAphsBTgjg");
	this.shape_146.setTransform(622.4164,319.1165,0.3749,0.3749);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#662D91").s().p("AigA4IFCiHQgqBshTAjQglAQgsAAQg1AAg/gYg");
	this.shape_147.setTransform(622.3789,319.9939,0.3749,0.3749);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#662D91").s().p("AgwALQgHhZBLhgIAeFcQhahIgIhbg");
	this.shape_148.setTransform(627.6992,323.5141,0.3749,0.3749);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#662D91").s().p("AgwitQBZBIAIBbQAHBZhLBfg");
	this.shape_149.setTransform(630.283,323.5516,0.3749,0.3749);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#662D91").s().p("AgOA7QhYgVhEhlIFVBPQhJAwhEAAQgXAAgVgFg");
	this.shape_150.setTransform(634.7973,319.375,0.3749,0.3749);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#662D91").s().p("AipgPQBhhABWAVQBZAVBDBlg");
	this.shape_151.setTransform(634.8254,317.6095,0.3749,0.3749);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#662D91").s().p("ABViVQAeBwguBNQgwBOh1Agg");
	this.shape_152.setTransform(632.0137,311.3957,0.3749,0.3749);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#662D91").s().p("AhDgnQAvhNB1ghIi1ErQgehwAvhNg");
	this.shape_153.setTransform(631.6106,311.3863,0.3749,0.3749);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgaQgHgaANgYQAOgYAbgHQAZgHAYANQAYAOAHAbQAHAZgNAYQgOAYgaAHQgJADgJAAQgQAAgQgJg");
	this.shape_154.setTransform(571.4443,299.3843,0.3749,0.3749);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#662D91").s().p("AhyiDQBzAFA8BEQA7BEgFB6g");
	this.shape_155.setTransform(567.1565,294.4599,0.3749,0.3749);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#662D91").s().p("Ag7A7Qg8hEAGh7IDkEJQhzgFg7hFg");
	this.shape_156.setTransform(567.1484,294.413,0.3749,0.3749);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#662D91").s().p("Agkg/QBTgjBzArIlCCHQAphsBTgjg");
	this.shape_157.setTransform(565.4327,301.4965,0.3749,0.3749);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#662D91").s().p("AigA4IFCiHQgqBshTAjQglAQgsAAQg1AAg/gYg");
	this.shape_158.setTransform(565.3952,302.3739,0.3749,0.3749);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#662D91").s().p("AgwAMQgHhaBLhgIAeFcQhahIgIhag");
	this.shape_159.setTransform(570.7155,305.8941,0.3749,0.3749);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#662D91").s().p("AgwiuQBZBJAIBaQAHBahLBfg");
	this.shape_160.setTransform(573.2992,305.9316,0.3749,0.3749);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#662D91").s().p("AgOA7QhYgVhEhlIFVBPQhJAwhFAAQgWAAgVgFg");
	this.shape_161.setTransform(577.8135,301.7551,0.3749,0.3749);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#662D91").s().p("AipgPQBhg/BWAUQBZAVBEBlg");
	this.shape_162.setTransform(577.8416,299.9895,0.3749,0.3749);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#662D91").s().p("ABViVQAeBwgvBNQgvBOh1Agg");
	this.shape_163.setTransform(575.03,293.7757,0.3749,0.3749);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#662D91").s().p("AhDgmQAvhPB1ggIi1ErQgehwAvhMg");
	this.shape_164.setTransform(574.6268,293.7663,0.3749,0.3749);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#F15A24").p("AA1AIQAEgVgOgSQgNgSgWgDQgVgEgSAOQgSANgDAWQgEAVAOASQANASAWADQAVAEASgOQASgNADgWg");
	this.shape_165.setTransform(195.4037,334.2079,0.3749,0.3749);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgHA1QgWgDgNgSQgOgSAEgVQADgWASgNQASgOAVAEQAWADANASQAOASgEAVQgDAWgSANQgOALgRAAIgIgBg");
	this.shape_166.setTransform(195.4037,334.2079,0.3749,0.3749);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FCEE21").s().p("Ag3iHQBTAqAVBHQAWBFgsBZg");
	this.shape_167.setTransform(194.3926,329.1468,0.3749,0.3749);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FCEE21").s().p("AgwAYQgWhGAshZIBTEPQhUgqgVhGg");
	this.shape_168.setTransform(193.2949,329.1187,0.3749,0.3749);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FCEE21").s().p("AiNAfQBChCBKABQBIABBHBFg");
	this.shape_169.setTransform(190.1083,332.9049,0.3749,0.3749);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FCEE21").s().p("AADAjQhJgBhHhFIEbAGQhBBBhHAAIgDgBg");
	this.shape_170.setTransform(190.0896,335.3426,0.3749,0.3749);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FCEE21").s().p("AgzgSQAYhFBXguIhbELQgshTAYhFg");
	this.shape_171.setTransform(193.1725,339.2221,0.3749,0.3749);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FCEE21").s().p("AAhiFQArBTgYBFQgYBGhXAtg");
	this.shape_172.setTransform(194.1871,339.2408,0.3749,0.3749);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FCEE21").s().p("AglA3Qg7gtgQhhIDhCrQgYAEgVAAQg+AAgrghg");
	this.shape_173.setTransform(199.64,337.4508,0.3749,0.3749);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FCEE21").s().p("AhwhSQBcgQA6AsQA7AtAQBhg");
	this.shape_174.setTransform(199.6587,337.3469,0.3749,0.3749);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FCEE21").s().p("AhzBPIDnihQgOBcg8AqQgsAfhBAAQgXAAgZgEg");
	this.shape_175.setTransform(199.7337,331.2223,0.3749,0.3749);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FCEE21").s().p("AgpgzQA7gqBiAOIjnCiQAOhcA8gqg");
	this.shape_176.setTransform(199.7712,331.0921,0.3749,0.3749);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#F15A24").p("AAzgRQgIgVgUgKQgUgJgUAHQgVAIgKAUQgJAUAIAUQAHAVAUAKQAUAJAUgHQAVgIAKgUQAJgUgHgUg");
	this.shape_177.setTransform(151.5253,324.4982,0.3749,0.3749);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgWAxQgUgKgHgVQgIgUAJgUQAKgUAVgIQAUgHAUAJQAUAKAIAVQAHAUgJAUQgKAUgVAIQgJADgJAAQgLAAgLgFg");
	this.shape_178.setTransform(151.5253,324.4982,0.3749,0.3749);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FCEE21").s().p("AhkhjQBegDAzA0QA1AyADBkg");
	this.shape_179.setTransform(147.7454,320.8013,0.3749,0.3749);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FCEE21").s().p("AgsAzQg1gzgDhjIDJDHIgKAAQhXAAgwgxg");
	this.shape_180.setTransform(147.736,320.7711,0.3749,0.3749);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FCEE21").s().p("Agig0QBBgiBfAcIj7CBQAahZBBgig");
	this.shape_181.setTransform(146.8363,326.7232,0.3749,0.3749);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FCEE21").s().p("Ah9A7ID7iBQgaBZhBAiQgjASgtAAQglAAgrgMg");
	this.shape_182.setTransform(146.7988,327.1814,0.3749,0.3749);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FCEE21").s().p("AgrAPQgMhIA3hSIAuEXQhNg1gMhIg");
	this.shape_183.setTransform(151.5574,329.7186,0.3749,0.3749);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FCEE21").s().p("AgtiLQBNA0AMBJQAMBIg4BSg");
	this.shape_184.setTransform(153.2495,329.756,0.3749,0.3749);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FCEE21").s().p("AgGAsQhJgLg8hOIEXArQg+Awg+AAQgLAAgLgCg");
	this.shape_185.setTransform(156.771,326.1806,0.3749,0.3749);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FCEE21").s().p("AiLADQBKg5BIALQBIALA9BOg");
	this.shape_186.setTransform(156.7897,324.3903,0.3749,0.3749);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FCEE21").s().p("AA4h+QAgBZghBAQghBChdAig");
	this.shape_187.setTransform(154.1796,319.7558,0.3749,0.3749);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FCEE21").s().p("Ag2gbQAhhBBdgiIh/D9QgghZAhhBg");
	this.shape_188.setTransform(153.6265,319.7464,0.3749,0.3749);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#006837").ss(5).p("AipKFQAAoNBrlxQAyivBBhgQBDhjBLAA");
	this.shape_189.setTransform(296.1469,380.226,0.3749,0.3749);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#006837").ss(5).p("AkQF+QAAkyCnjYQCmjYDtAA");
	this.shape_190.setTransform(299.9989,390.0857,0.3749,0.3749);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#006837").ss(5).p("AHMIlQAAjbhKjHQhIi/iDiUQiCiViphRQivhVjBAA");
	this.shape_191.setTransform(272.538,383.8531,0.3749,0.3749);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#006837").ss(5).p("AipKFQAAoNBrlxQAyivBBhgQBDhjBLAA");
	this.shape_192.setTransform(296.1469,380.226,0.3749,0.3749);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#006837").ss(5).p("AkQF+QAAkyCnjYQCmjYDtAA");
	this.shape_193.setTransform(299.9989,390.0857,0.3749,0.3749);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#006837").ss(5).p("AHMIlQAAjbhKjHQhIi/iDiUQiCiViphRQivhVjBAA");
	this.shape_194.setTransform(272.538,383.8531,0.3749,0.3749);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#006837").ss(5).p("ACJF/QAAkzhXjYQhXjZh8AA");
	this.shape_195.setTransform(188.8056,299.3428,0.3749,0.3749);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#006837").ss(5).p("ADeDlQAAi0iJh+QiIh+jDAA");
	this.shape_196.setTransform(185.6377,305.1068,0.3749,0.3749);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#006837").ss(5).p("Al3FGQAAiAA9h0QA7hwBrhXQDji3FCAA");
	this.shape_197.setTransform(208.0376,301.461,0.3749,0.3749);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgbQgHgZANgYQAOgYAbgHQAZgHAYANQAYAOAHAaQAHAagNAYQgOAYgaAHQgKADgIAAQgRAAgPgJg");
	this.shape_198.setTransform(564.6829,341.3457,0.3749,0.3749);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#662D91").s().p("AhyiEQBzAGA8BFQA7BDgGB7g");
	this.shape_199.setTransform(560.3991,336.4198,0.3749,0.3749);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#662D91").s().p("Ag7A6Qg8hDAGh7IDkEJQhzgFg7hGg");
	this.shape_200.setTransform(560.3816,336.3729,0.3749,0.3749);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#662D91").s().p("Agkg/QBTgjByArIlCCHQAqhsBTgjg");
	this.shape_201.setTransform(558.6658,343.4639,0.3749,0.3749);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#662D91").s().p("AihA4IFCiHQgpBshTAjQglAQgrAAQg2AAhAgYg");
	this.shape_202.setTransform(558.6283,344.3339,0.3749,0.3749);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#662D91").s().p("AgwALQgHhZBLhgIAdFdQhZhJgIhbg");
	this.shape_203.setTransform(563.958,347.854,0.3749,0.3749);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#662D91").s().p("AgxiuQBaBJAIBbQAHBZhLBgg");
	this.shape_204.setTransform(566.5418,347.8915,0.3749,0.3749);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#662D91").s().p("AgOA7QhZgVhDhlIFUBPQhJAwhEAAQgWAAgVgFg");
	this.shape_205.setTransform(571.056,343.7056,0.3749,0.3749);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#662D91").s().p("AiqgPQBihABXAVQBZAVBCBlg");
	this.shape_206.setTransform(571.0748,341.9494,0.3749,0.3749);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#662D91").s().p("ABViVQAfBwgwBNQgvBOh1Agg");
	this.shape_207.setTransform(568.277,335.745,0.3749,0.3749);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#662D91").s().p("AhDgnQAvhNB1ghIi1ErQgehwAvhNg");
	this.shape_208.setTransform(567.86,335.7262,0.3749,0.3749);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#006837").ss(5).p("AC3UIQAAwihyrpQg2lhhFjCQhJjIhQAA");
	this.shape_209.setTransform(580.6533,349.7753,0.3749,0.3749);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#006837").ss(5).p("AElL2QAApqizmzQhUjPhthwQhxh2h9AA");
	this.shape_210.setTransform(576.5295,369.6447,0.3749,0.3749);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#006837").ss(5).p("AnsRFQAAm4BQmSQBNmCCMkrQCLkrC1ikQC7iqDOAA");
	this.shape_211.setTransform(605.9586,357.0858,0.3749,0.3749);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#F15A24").p("AAzgQQgHgVgUgKQgUgKgUAHQgVAHgKAUQgKAUAHAUQAHAWAUAKQAUAJAUgHQAVgHAKgUQAKgUgHgUg");
	this.shape_212.setTransform(147.0877,358.1542,0.3749,0.3749);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgXAxQgUgLgHgVQgHgUAKgUQAKgUAVgHQAUgHAUAJQAUALAHAVQAHAUgKATQgKAVgVAHQgJADgIAAQgLAAgMgFg");
	this.shape_213.setTransform(147.0877,358.1542,0.3749,0.3749);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FCEE21").s().p("AhihlQBegBAyA1QAzAzACBkg");
	this.shape_214.setTransform(143.3779,354.3764,0.3749,0.3749);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FCEE21").s().p("AgtAyQg0gzgBhkIDFDLIgEAAQhbAAgxg0g");
	this.shape_215.setTransform(143.3779,354.34,0.3749,0.3749);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FCEE21").s().p("Aggg0QBBggBfAdIj/B9QAchZBDghg");
	this.shape_216.setTransform(142.3469,360.2436,0.3749,0.3749);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FCEE21").s().p("Ah/A3ID+h8QgcBZhCAgQghASgrAAQgmAAgugPg");
	this.shape_217.setTransform(142.3095,360.7604,0.3749,0.3749);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FCEE21").s().p("AgqANQgKhHA4hRIApEXQhMg2gLhJg");
	this.shape_218.setTransform(146.9559,363.384,0.3749,0.3749);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FCEE21").s().p("AgsiMQBMA3ALBIQAKBJg4BQg");
	this.shape_219.setTransform(148.7599,363.4215,0.3749,0.3749);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FCEE21").s().p("AgHAtQhIgNg8hOIEXAvQg+Aug8AAQgNAAgMgCg");
	this.shape_220.setTransform(152.3097,359.884,0.3749,0.3749);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FCEE21").s().p("AiLAAQBMg4BHAMQBJANA7BOg");
	this.shape_221.setTransform(152.3285,358.1867,0.3749,0.3749);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FCEE21").s().p("AA7h9QAeBagiA/QgiBChdAfg");
	this.shape_222.setTransform(149.7991,353.4493,0.3749,0.3749);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FCEE21").s().p("Ag2gcQAihBBdggIiDD7QgfhZAjhBg");
	this.shape_223.setTransform(149.3047,353.4399,0.3749,0.3749);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#006837").ss(5).p("ADbQKQgztXiApVQg8kbhCiZQhEifhAAE");
	this.shape_224.setTransform(160.0513,364.1504,0.3749,0.3749);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#006837").ss(5).p("AEPJYQgen0illXQhOijhehWQhhhZhkAG");
	this.shape_225.setTransform(158.1208,380.4153,0.3749,0.3749);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#006837").ss(5).p("AlUOOQgVlkAslIQAsk9Bij4QBjj5CKiNQCPiSCngK");
	this.shape_226.setTransform(181.069,368.8007,0.3749,0.3749);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFF00").s().p("AgRAYQgKgHgCgNQgCgLAIgKQAHgKANgCQALgCAKAIQAKAHACANQACALgIAKQgHAKgNACIgEABQgJAAgIgHg");
	this.shape_227.setTransform(616.9926,246.2364,0.3749,0.3749);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D4145A").s().p("AhOgCQAsgfAoAIQAoAIAhAtg");
	this.shape_228.setTransform(614.0563,245.2115,0.3749,0.3749);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#D4145A").s().p("AgEAaQgpgIghgtICdAeQgjAZghAAQgIAAgHgCg");
	this.shape_229.setTransform(614.0469,246.1106,0.3749,0.3749);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D4145A").s().p("AgegQQAUglA1gQIhOCLQgPgzAUgjg");
	this.shape_230.setTransform(615.4196,248.8541,0.3749,0.3749);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#D4145A").s().p("AAkhFQAQAzgVAjQgUAlg1AQg");
	this.shape_231.setTransform(615.6592,248.8541,0.3749,0.3749);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D4145A").s().p("AgaAcQgcgeABg4IBrB1Qg1gBgbgeg");
	this.shape_232.setTransform(619.0328,248.423,0.3749,0.3749);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D4145A").s().p("Ag1g6QA1ABAbAfQAcAdgBA4g");
	this.shape_233.setTransform(619.0336,248.4417,0.3749,0.3749);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D4145A").s().p("AhIAdICRhCQgRAxgmARQgSAJgWAAQgXAAgbgJg");
	this.shape_234.setTransform(619.7078,245.145,0.3749,0.3749);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D4145A").s().p("AgRgcQAlgSA1ASIiRBCQARgxAmgRg");
	this.shape_235.setTransform(619.7266,244.8029,0.3749,0.3749);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D4145A").s().p("AgXhOQApAfAFAqQAFAoghAsg");
	this.shape_236.setTransform(617.1873,243.2682,0.3749,0.3749);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D4145A").s().p("AgWAHQgFgpAggtIATCfQgpgggFgpg");
	this.shape_237.setTransform(616.0967,243.2494,0.3749,0.3749);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFF00").s().p("AgPAaQgLgHgDgMQgCgLAGgLQAHgLAMgCQAMgDAKAGQALAHADAMQACAMgGAKQgHALgMACIgHABQgIAAgHgEg");
	this.shape_238.setTransform(589.1165,256.277,0.3749,0.3749);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D4145A").s().p("Agxg+QA0AFAaAhQAaAfgGA4g");
	this.shape_239.setTransform(587.2694,253.9339,0.3749,0.3749);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D4145A").s().p("AgcAaQgZggAFg4IBiB9Qg0gFgaggg");
	this.shape_240.setTransform(587.2361,253.9152,0.3749,0.3749);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D4145A").s().p("AgOgcQAmgOAzAWIiWA2QAWgwAngOg");
	this.shape_241.setTransform(586.3142,257.0688,0.3749,0.3749);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#D4145A").s().p("AhKAVICVg2QgVAwgnAOQgPAFgRAAQgaAAgfgNg");
	this.shape_242.setTransform(586.2861,257.5659,0.3749,0.3749);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D4145A").s().p("AgTAEQgCgpAkgqIAGCfQgngjgBgpg");
	this.shape_243.setTransform(588.5804,259.2668,0.3749,0.3749);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D4145A").s().p("AgUhPQAnAjACApQACApgkAqg");
	this.shape_244.setTransform(589.887,259.2855,0.3749,0.3749);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D4145A").s().p("AgIAcQgogLgcgvICZAqQggATgeAAQgMAAgLgDg");
	this.shape_245.setTransform(592.0032,257.4371,0.3749,0.3749);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D4145A").s().p("AhMgLQAugbAnALQAoALAcAvg");
	this.shape_246.setTransform(592.0032,256.7374,0.3749,0.3749);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D4145A").s().p("AArhBQALA0gXAgQgXAjg2ANg");
	this.shape_247.setTransform(590.8379,253.7839,0.3749,0.3749);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D4145A").s().p("AgegTQAXgiA2gNIhZCFQgLg0AXgig");
	this.shape_248.setTransform(590.7129,253.7746,0.3749,0.3749);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFF00").s().p("AgPAaQgLgHgDgMQgCgMAGgKQAHgLAMgDQAMgCAKAGQALAHADAMQACAMgGAKQgHALgMADIgHAAQgIAAgHgEg");
	this.shape_249.setTransform(593.9339,238.6476,0.3749,0.3749);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D4145A").s().p("Agxg+QA0AFAaAhQAaAfgGA4g");
	this.shape_250.setTransform(592.0868,236.3139,0.3749,0.3749);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D4145A").s().p("AgcAaQgZggAFg4IBiB9Qg0gFgaggg");
	this.shape_251.setTransform(592.0534,236.2952,0.3749,0.3749);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D4145A").s().p("AgOgcQAmgOA0AWIiXA2QAWgwAngOg");
	this.shape_252.setTransform(591.1316,239.4488,0.3749,0.3749);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#D4145A").s().p("AhKAVICVg2QgVAwgnAOQgPAFgQAAQgbAAgfgNg");
	this.shape_253.setTransform(591.1035,239.9444,0.3749,0.3749);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D4145A").s().p("AgTAEQgCgpAkgqIAGCfQgngjgBgpg");
	this.shape_254.setTransform(593.3978,241.6374,0.3749,0.3749);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D4145A").s().p("AgUhPQAnAjACApQACApgkAqg");
	this.shape_255.setTransform(594.7044,241.6561,0.3749,0.3749);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D4145A").s().p("AgIAcQgogLgcgvICZAqQggATgdAAQgNAAgLgDg");
	this.shape_256.setTransform(596.8206,239.8171,0.3749,0.3749);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D4145A").s().p("AhMgLQAtgcAoAMQAoALAcAvg");
	this.shape_257.setTransform(596.8206,239.1089,0.3749,0.3749);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D4145A").s().p("AArhCQALA0gXAiQgXAig2ANg");
	this.shape_258.setTransform(595.6553,236.1546,0.3749,0.3749);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D4145A").s().p("AgegTQAXgiA2gNIhZCFQgLg0AXgig");
	this.shape_259.setTransform(595.5303,236.1546,0.3749,0.3749);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#006837").p("AA4JOQAWnkgllXQgklXhJgE");
	this.shape_260.setTransform(596.2683,260.5831,0.3749,0.3749);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#006837").p("AB5FeQANkbhJjKQhHjLh0gG");
	this.shape_261.setTransform(593.8447,269.5806,0.3749,0.3749);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#006837").p("Aj6HmQATmaCUkaQBGiGBVhHQBahJBeAE");
	this.shape_262.setTransform(607.7808,264.4689,0.3749,0.3749);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").p("Ego6gR/MAAAAkCMBRjAAAg");
	this.shape_263.setTransform(98.0205,43.462,0.3749,0.3749);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#666666").s().p("EgoxASCMAAAgkDMBRjAkDg");
	this.shape_264.setTransform(97.6705,43.5122,0.3749,0.3749);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(2).p("AHGAAIuLAA");
	this.shape_265.setTransform(124.6418,127.7907,0.3749,0.3749);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(2).p("AHBAAIuBAA");
	this.shape_266.setTransform(124.445,111.6903,0.3749,0.3749);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(2).p("AAAqaIAAU0");
	this.shape_267.setTransform(124.4544,119.8436,0.3749,0.3749);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#42210B").ss(6).p("AHgK5Iu/AAIAA1xIO/AAg");
	this.shape_268.setTransform(124.445,119.8342,0.3749,0.3749);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#CCE0F4","#A0C9E8","#70B0DC","#489BD1","#288AC9","#127EC3","#0577BF","#0075BE","#0069AB","#005F9C","#005B97","#1E9CD7"],[0,0.063,0.141,0.22,0.298,0.373,0.443,0.506,0.663,0.847,0.996,1],0,-67,0,67.9).s().p("AnfK5IAA1xIO/AAIAAVxg");
	this.shape_269.setTransform(124.445,119.8342,0.3749,0.3749);

	this.instance_13 = new lib.Roofshadow();
	this.instance_13.setTransform(87.75,103.15,0.3749,0.3749,0,0,0,249.2,50);
	this.instance_13.alpha = 0.5;
	this.instance_13.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.instance_13.cache(-2,-2,504,102);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(2).p("Egi/grlMAAABXLMBF/AAAMAAAhXLg");
	this.shape_270.setTransform(83.9692,183.6733,0.3749,0.3749);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#754C24").s().p("Egi/ArmMAAAhXLMBF/AAAMAAABXLg");
	this.shape_271.setTransform(83.9692,183.6733,0.3749,0.3749);

	this.instance_14 = new lib.Houseshadow();
	this.instance_14.setTransform(78.95,326.85,0.3749,0.3749,0,0,0,236.6,110.5);
	this.instance_14.alpha = 0.5;
	this.instance_14.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.instance_14.cache(-2,-2,479,224);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#009245").s().p("EiV/AcDMAAAg4FMEr/AAAMAAAA4Fg");
	this.shape_272.setTransform(359.8975,337.5913,0.3749,0.3749);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#CCE0F4","#B2D2ED","#6FAFDB","#0578BF","#0075BE","#005B97"],[0.075,0.196,0.463,0.847,0.867,1],0,566.3,0,-528.5).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_273.setTransform(359.8975,202.4423,0.3749,0.3749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.instance_14},{t:this.shape_271},{t:this.shape_270},{t:this.instance_13},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(197));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(344.2,200.6,375.59999999999997,226.1);
// library properties:
lib.properties = {
	id: 'CC7F2E06378C7948B2869ACBF6540AB9',
	width: 720,
	height: 404,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CC7F2E06378C7948B2869ACBF6540AB9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;