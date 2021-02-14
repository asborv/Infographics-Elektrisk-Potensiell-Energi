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

	// Ball
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(1363,476.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).wait(1).to({y:478.5764},0).wait(1).to({y:481.6499},0).wait(1).to({y:485.4769},0).wait(1).to({y:490.3348},0).wait(1).to({y:496.5977},0).wait(1).to({y:504.7684},0).wait(1).to({y:515.5142},0).wait(1).to({y:529.694},0).wait(1).to({y:548.3449},0).wait(1).to({y:572.5773},0).wait(1).to({y:603.3259},0).wait(1).to({y:641},0).to({regY:0.1,scaleY:0.5939,y:659.8},2).wait(2).to({regY:0,scaleY:1,y:641},0).to({y:607.4},6,cjs.Ease.cubicOut).to({y:641},8,cjs.Ease.cubicIn).wait(2).to({regY:0.1,scaleY:0.8575,y:647.7},0).to({regY:0.2,scaleY:0.9511,y:643.5},2).wait(3));

	// Ball_shadow
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(1342,680);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({startPosition:0},0).to({scaleX:1.3522,scaleY:1.65,x:1353.95,y:684.5},12,cjs.Ease.cubicIn).to({startPosition:0},4,cjs.Ease.cubicIn).to({regX:0.1,regY:0.1,scaleX:1.2184,scaleY:1.2375,x:1349.4,y:681.7},6,cjs.Ease.cubicOut).to({regX:0.3,scaleX:1.3466,scaleY:1.551,x:1353.85,y:683.85},8,cjs.Ease.cubicIn).wait(7));

	// Foreground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#42210B").ss(6).p("EAAAgirMAAABFX");
	this.shape.setTransform(1363,222);

	this.instance_2 = new lib.Tabletop();
	this.instance_2.setTransform(1342.5,697.5,1,1,0,0,0,286.5,52);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",-45,80,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42210B").s().p("ASNI/IAAr3ICgAAIAAL3gA6AIXIAAr3ICgAAIAAL3gAXhDhIAAr3ICgAAIAAL3gA0sC5IAAr3ICgAAIAAL3g");
	this.shape_1.setTransform(1332.5,740.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.shape}]}).wait(44));

	// Background
	this.instance_3 = new lib.Path();
	this.instance_3.setTransform(1581,761.5,1,1,0,0,0,37,14.5);
	this.instance_3.alpha = 0.8008;
	this.instance_3.compositeOperation = "darken";
	this.instance_3.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_3.cache(-2,-2,78,33);

	this.instance_4 = new lib.Path_1();
	this.instance_4.setTransform(1534,1070,1,1,0,0,0,93,36);
	this.instance_4.alpha = 0.8008;
	this.instance_4.compositeOperation = "darken";
	this.instance_4.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_4.cache(-2,-2,190,76);

	this.instance_5 = new lib.Path_2();
	this.instance_5.setTransform(1325,1053.5,1,1,0,0,0,73,25.5);
	this.instance_5.alpha = 0.8008;
	this.instance_5.compositeOperation = "darken";
	this.instance_5.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_5.cache(-2,-2,150,55);

	this.instance_6 = new lib.Path_3();
	this.instance_6.setTransform(943.5,943,1,1,0,0,0,60.5,33);
	this.instance_6.alpha = 0.8008;
	this.instance_6.compositeOperation = "darken";
	this.instance_6.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_6.cache(-2,-2,125,70);

	this.instance_7 = new lib.Path_4();
	this.instance_7.setTransform(739,1084.5,1,1,0,0,0,60,32.5);
	this.instance_7.alpha = 0.8008;
	this.instance_7.compositeOperation = "darken";
	this.instance_7.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_7.cache(-2,-2,124,69);

	this.instance_8 = new lib.Path_5();
	this.instance_8.setTransform(420.5,1079.5,1,1,0,0,0,85.5,32.5);
	this.instance_8.alpha = 0.8008;
	this.instance_8.compositeOperation = "darken";
	this.instance_8.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_8.cache(-2,-2,175,69);

	this.instance_9 = new lib.Path_6();
	this.instance_9.setTransform(500.5,840.5,1,1,0,0,0,45.5,16.5);
	this.instance_9.alpha = 0.8008;
	this.instance_9.compositeOperation = "darken";
	this.instance_9.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_9.cache(-2,-2,95,37);

	this.instance_10 = new lib.Path_7();
	this.instance_10.setTransform(149.5,975.5,1,1,0,0,0,63.5,23.5);
	this.instance_10.alpha = 0.8008;
	this.instance_10.compositeOperation = "darken";
	this.instance_10.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_10.cache(-2,-2,131,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006837").ss(5).p("AjEJaQAAnpB6lYQA6ijBLhZQBNhdBWAA");
	this.shape_2.setTransform(1362.15,993.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006837").ss(5).p("Ak6FlQAAkdDAjJQC+jKEQAA");
	this.shape_3.setTransform(1373.95,1017.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006837").ss(5).p("AISIAQAAjLhVi6QhSiyiWiKQiWiLjDhLQjJhPjdAA");
	this.shape_4.setTransform(1289.45,1002.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006837").ss(5).p("AhwLlQAApcBKmpQBImrBoAA");
	this.shape_5.setTransform(963.3,859.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#006837").ss(5).p("Ai3G2QAAlhBzj4QByj5CjAA");
	this.shape_6.setTransform(970.375,889.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#006837").ss(5).p("AE5J2QAAoAi/loQhairhzheQh5hgiFAA");
	this.shape_7.setTransform(920.725,870.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgTAjQgPgHgEgQQgFgQAIgPQAIgPAQgEQAQgFAOAIQAPAJAFAPQAFAQgIAPQgIAPgRAEQgGACgFAAQgJAAgKgGg");
	this.shape_8.setTransform(220.4036,830.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4145A").s().p("AhqARQA0gwA2ADQA4AEAzA1g");
	this.shape_9.setTransform(209.725,827.2913);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4145A").s().p("AAAAdQg3gDgzg2IDVAMQgwAtg0AAIgHAAg");
	this.shape_10.setTransform(209.675,831.8117);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4145A").s().p("AgngPQAUg0BDggIhNDHQgfhAAVgzg");
	this.shape_11.setTransform(215.663,840.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4145A").s().p("AAehjQAfBAgVAzQgUA0hDAgg");
	this.shape_12.setTransform(217.387,840.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4145A").s().p("AgeApQgqgkgKhJIClCIQgOABgMAAQg1AAgigcg");
	this.shape_13.setTransform(228.7,836.9821);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D4145A").s().p("AhShCQBHgJAqAjQArAkAJBJg");
	this.shape_14.setTransform(228.725,836.884);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4145A").s().p("AhaA4IC0hzQgNBFgvAeQgfAUgsAAQgVAAgYgEg");
	this.shape_15.setTransform(229.4,824.5727);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4145A").s().p("AgdgnQAugeBKAOIi1BzQAOhFAvgeg");
	this.shape_16.setTransform(229.475,824.1273);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D4145A").s().p("AgnhnQA9AjAOA2QAOA1gkBBg");
	this.shape_17.setTransform(218.9691,819.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4145A").s().p("AgjAQQgOg1AkhCIA1DPQg9gjgOg1g");
	this.shape_18.setTransform(216.3809,819.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AgPAlQgQgHgGgQQgGgPAHgPQAHgQAPgFQAPgGAQAHQAQAHAFAQQAGAOgHAPQgHAQgQAGQgHADgHAAQgHAAgIgEg");
	this.shape_19.setTransform(126.55,879.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D4145A").s().p("AhMhJQBGgEAoAnQAoAmADBLg");
	this.shape_20.setTransform(118.8,871.9856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4145A").s().p("AghAnQgogngDhKICZCUIgLABQg/AAgkgkg");
	this.shape_21.setTransform(118.8,871.9644);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D4145A").s().p("AgagnQAwgaBJAUIi9BkQAThDAxgbg");
	this.shape_22.setTransform(117.15,884.0449);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4145A").s().p("AheAuIC9hkQgTBEgxAaQgbAPgjAAQgbAAgggJg");
	this.shape_23.setTransform(117.075,884.8848);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4145A").s().p("AghAMQgJg2Apg/IAkDTQg6gngKg3g");
	this.shape_24.setTransform(126.8106,889.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D4145A").s().p("AgjhpQA7AnAKA3QAJA2gpA/g");
	this.shape_25.setTransform(130.1135,890);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4145A").s().p("AgDAhQg4gIgug6IDTAeQgvAlgvAAIgPgBg");
	this.shape_26.setTransform(137.15,882.7291);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4145A").s().p("AhqAEQA4grA2AHQA4AIAvA6g");
	this.shape_27.setTransform(137.2,878.9709);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D4145A").s().p("AAphfQAZBCgZAxQgYAzhFAZg");
	this.shape_28.setTransform(131.8313,869.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4145A").s().p("AgogTQAYgyBFgbIhdDBQgZhDAZgxg");
	this.shape_29.setTransform(130.6187,869.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgQAlQgPgHgGgQQgGgPAHgPQAHgQAQgFQAPgGAPAHQAPAHAGAPQAGAPgHAPQgHAQgQAGQgHADgHAAQgIAAgIgEg");
	this.shape_30.setTransform(134.9925,814.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D4145A").s().p("AhMhJQBHgEAnAnQAoAmAEBLg");
	this.shape_31.setTransform(127.25,807.1856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D4145A").s().p("AghAnQgogngDhKICaCUIgMABQg/AAgkgkg");
	this.shape_32.setTransform(127.25,807.1644);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D4145A").s().p("AgagnQAwgaBJAUIi9BkQAThEAxgag");
	this.shape_33.setTransform(125.575,819.2449);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D4145A").s().p("AheAuIC9hkQgTBEgxAaQgbAPgjAAQgbAAgggJg");
	this.shape_34.setTransform(125.5,820.0848);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D4145A").s().p("AghAMQgJg2Apg/IAlDTQg7gngKg3g");
	this.shape_35.setTransform(135.2365,825.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D4145A").s().p("AgihpQA6AnAKA3QAKA2gqA/g");
	this.shape_36.setTransform(138.5471,825.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D4145A").s().p("AgDAhQg3gIgwg6IDUAeQgvAlgwAAIgOgBg");
	this.shape_37.setTransform(145.6,817.9291);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D4145A").s().p("AhqAEQA4grA2AHQA3AIAwA6g");
	this.shape_38.setTransform(145.65,814.1709);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4145A").s().p("AAphfQAZBCgYAxQgZAzhFAZg");
	this.shape_39.setTransform(140.2378,804.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4145A").s().p("AgpgTQAZgyBFgbIhdDBQgZhDAYgxg");
	this.shape_40.setTransform(139.0622,804.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#006837").ss(5).p("AC/MMQg7qGhwnBQhvnChjAJ");
	this.shape_41.setTransform(153.175,890.4058);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#006837").ss(5).p("ADZHCQgjl6iFj/QiFkBibAO");
	this.shape_42.setTransform(150.5872,923.4042);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#006837").ss(5).p("AjlK8QgyojCRmSQBEi/BlhuQBphzB+gL");
	this.shape_43.setTransform(195.2864,898.3898);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgaQgHgaANgYQAOgYAbgHQAZgHAYANQAYAOAHAbQAHAZgNAYQgOAYgaAHQgJADgJAAQgQAAgQgJg");
	this.shape_44.setTransform(1676.2856,845.5856);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#662D91").s().p("AhyiEQBzAGA8BEQA7BEgFB7g");
	this.shape_45.setTransform(1664.8483,832.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#662D91").s().p("Ag7A7Qg8hEAGh7IDkEJQhzgFg7hFg");
	this.shape_46.setTransform(1664.8267,832.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#662D91").s().p("Agkg/QBTgjBzArIlCCHQAphsBTgjg");
	this.shape_47.setTransform(1660.25,851.2197);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#662D91").s().p("AigA4IFCiHQgqBshTAjQglAQgsAAQg1AAg/gYg");
	this.shape_48.setTransform(1660.15,853.5603);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#662D91").s().p("AgwALQgHhZBLhgIAeFcQhahIgIhbg");
	this.shape_49.setTransform(1674.3415,862.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#662D91").s().p("AgwitQBZBIAIBbQAHBZhLBfg");
	this.shape_50.setTransform(1681.2335,863.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#662D91").s().p("AgOA7QhYgVhEhlIFVBPQhJAwhEAAQgXAAgVgFg");
	this.shape_51.setTransform(1693.275,851.9094);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#662D91").s().p("AipgPQBhhABWAVQBZAVBDBlg");
	this.shape_52.setTransform(1693.35,847.1999);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#662D91").s().p("ABViVQAeBwguBNQgwBOh1Agg");
	this.shape_53.setTransform(1685.8502,830.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#662D91").s().p("AhDgnQAvhNB1ghIi1ErQgehwAvhNg");
	this.shape_54.setTransform(1684.7748,830.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgaQgHgaANgYQAOgYAbgHQAZgHAYANQAYAOAHAbQAHAZgNAYQgOAYgaAHQgJADgJAAQgQAAgQgJg");
	this.shape_55.setTransform(1524.2856,798.5856);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#662D91").s().p("AhyiDQBzAFA8BEQA7BEgFB6g");
	this.shape_56.setTransform(1512.8483,785.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#662D91").s().p("Ag7A7Qg8hEAGh7IDkEJQhzgFg7hFg");
	this.shape_57.setTransform(1512.8267,785.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#662D91").s().p("Agkg/QBTgjBzArIlCCHQAphsBTgjg");
	this.shape_58.setTransform(1508.25,804.2197);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#662D91").s().p("AigA4IFCiHQgqBshTAjQglAQgsAAQg1AAg/gYg");
	this.shape_59.setTransform(1508.15,806.5603);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#662D91").s().p("AgwAMQgHhaBLhgIAeFcQhahIgIhag");
	this.shape_60.setTransform(1522.3415,815.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#662D91").s().p("AgwiuQBZBJAIBaQAHBahLBfg");
	this.shape_61.setTransform(1529.2335,816.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#662D91").s().p("AgOA7QhYgVhEhlIFVBPQhJAwhFAAQgWAAgVgFg");
	this.shape_62.setTransform(1541.275,804.9094);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#662D91").s().p("AipgPQBhg/BWAUQBZAVBEBlg");
	this.shape_63.setTransform(1541.35,800.1999);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#662D91").s().p("ABViVQAeBwgvBNQgvBOh1Agg");
	this.shape_64.setTransform(1533.8502,783.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#662D91").s().p("AhDgmQAvhPB1ggIi1ErQgehwAvhMg");
	this.shape_65.setTransform(1532.7748,783.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F15A24").p("AA1AIQAEgVgOgSQgNgSgWgDQgVgEgSAOQgSANgDAWQgEAVAOASQANASAWADQAVAEASgOQASgNADgWg");
	this.shape_66.setTransform(521.225,891.475);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgHA1QgWgDgNgSQgOgSAEgVQADgWASgNQASgOAVAEQAWADANASQAOASgEAVQgDAWgSANQgOALgRAAIgIgBg");
	this.shape_67.setTransform(521.225,891.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCEE21").s().p("Ag3iHQBTAqAVBHQAWBFgsBZg");
	this.shape_68.setTransform(518.5279,877.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FCEE21").s().p("AgwAYQgWhGAshZIBTEPQhUgqgVhGg");
	this.shape_69.setTransform(515.5998,877.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCEE21").s().p("AiNAfQBChCBKABQBIABBHBFg");
	this.shape_70.setTransform(507.1,887.9993);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FCEE21").s().p("AADAjQhJgBhHhFIEbAGQhBBBhHAAIgDgBg");
	this.shape_71.setTransform(507.05,894.5016);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCEE21").s().p("AgzgSQAYhFBXguIhbELQgshTAYhFg");
	this.shape_72.setTransform(515.2733,904.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCEE21").s().p("AAhiFQArBTgYBFQgYBGhXAtg");
	this.shape_73.setTransform(517.9799,904.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FCEE21").s().p("AglA3Qg7gtgQhhIDhCrQgYAEgVAAQg+AAgrghg");
	this.shape_74.setTransform(532.525,900.1252);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FCEE21").s().p("AhwhSQBcgQA6AsQA7AtAQBhg");
	this.shape_75.setTransform(532.575,899.8481);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCEE21").s().p("AhzBPIDnihQgOBcg8AqQgsAfhBAAQgXAAgZgEg");
	this.shape_76.setTransform(532.775,883.5111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCEE21").s().p("AgpgzQA7gqBiAOIjnCiQAOhcA8gqg");
	this.shape_77.setTransform(532.875,883.1639);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F15A24").p("AAzgRQgIgVgUgKQgUgJgUAHQgVAIgKAUQgJAUAIAUQAHAVAUAKQAUAJAUgHQAVgIAKgUQAJgUgHgUg");
	this.shape_78.setTransform(404.1826,865.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWAxQgUgKgHgVQgIgUAJgUQAKgUAVgIQAUgHAUAJQAUAKAIAVQAHAUgJAUQgKAUgVAIQgJADgJAAQgLAAgLgFg");
	this.shape_79.setTransform(404.1826,865.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FCEE21").s().p("AhkhjQBegDAzA0QA1AyADBkg");
	this.shape_80.setTransform(394.1,855.714);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FCEE21").s().p("AgsAzQg1gzgDhjIDJDHIgKAAQhXAAgwgxg");
	this.shape_81.setTransform(394.075,855.6333);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FCEE21").s().p("Agig0QBBgiBfAcIj7CBQAahZBBgig");
	this.shape_82.setTransform(391.675,871.5102);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FCEE21").s().p("Ah9A7ID7iBQgaBZhBAiQgjASgtAAQglAAgrgMg");
	this.shape_83.setTransform(391.575,872.7323);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FCEE21").s().p("AgrAPQgMhIA3hSIAuEXQhNg1gMhIg");
	this.shape_84.setTransform(404.2683,879.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCEE21").s().p("AgtiLQBNA0AMBJQAMBIg4BSg");
	this.shape_85.setTransform(408.7817,879.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FCEE21").s().p("AgGAsQhJgLg8hOIEXArQg+Awg+AAQgLAAgLgCg");
	this.shape_86.setTransform(418.175,870.0627);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCEE21").s().p("AiLADQBKg5BIALQBIALA9BOg");
	this.shape_87.setTransform(418.225,865.2873);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FCEE21").s().p("AA4h+QAgBZghBAQghBChdAig");
	this.shape_88.setTransform(411.2627,852.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCEE21").s().p("Ag2gbQAhhBBdgiIh/D9QgghZAhhBg");
	this.shape_89.setTransform(409.7873,852.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#006837").ss(5).p("AipKFQAAoNBrlxQAyivBBhgQBDhjBLAA");
	this.shape_90.setTransform(789.95,1014.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#006837").ss(5).p("AkQF+QAAkyCnjYQCmjYDtAA");
	this.shape_91.setTransform(800.225,1040.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#006837").ss(5).p("AHMIlQAAjbhKjHQhIi/iDiUQiCiViphRQivhVjBAA");
	this.shape_92.setTransform(726.975,1023.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#006837").ss(5).p("AipKFQAAoNBrlxQAyivBBhgQBDhjBLAA");
	this.shape_93.setTransform(789.95,1014.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#006837").ss(5).p("AkQF+QAAkyCnjYQCmjYDtAA");
	this.shape_94.setTransform(800.225,1040.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#006837").ss(5).p("AHMIlQAAjbhKjHQhIi/iDiUQiCiViphRQivhVjBAA");
	this.shape_95.setTransform(726.975,1023.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#006837").ss(5).p("ACJF/QAAkzhXjYQhXjZh8AA");
	this.shape_96.setTransform(503.625,798.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#006837").ss(5).p("ADeDlQAAi0iJh+QiIh+jDAA");
	this.shape_97.setTransform(495.175,813.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#006837").ss(5).p("Al3FGQAAiAA9h0QA7hwBrhXQDji3FCAA");
	this.shape_98.setTransform(554.925,804.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AggA6QgYgOgHgbQgHgZANgYQAOgYAbgHQAZgHAYANQAYAOAHAaQAHAagNAYQgOAYgaAHQgKADgIAAQgRAAgPgJg");
	this.shape_99.setTransform(1506.25,910.5144);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#662D91").s().p("AhyiEQBzAGA8BFQA7BDgGB7g");
	this.shape_100.setTransform(1494.8234,897.375);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#662D91").s().p("Ag7A6Qg8hDAGh7IDkEJQhzgFg7hGg");
	this.shape_101.setTransform(1494.7767,897.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#662D91").s().p("Agkg/QBTgjByArIlCCHQAqhsBTgjg");
	this.shape_102.setTransform(1490.2,916.1647);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#662D91").s().p("AihA4IFCiHQgpBshTAjQglAQgrAAQg2AAhAgYg");
	this.shape_103.setTransform(1490.1,918.4853);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#662D91").s().p("AgwALQgHhZBLhgIAdFdQhZhJgIhbg");
	this.shape_104.setTransform(1504.3165,927.875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#662D91").s().p("AgxiuQBaBJAIBbQAHBZhLBgg");
	this.shape_105.setTransform(1511.2085,927.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#662D91").s().p("AgOA7QhZgVhDhlIFUBPQhJAwhEAAQgWAAgVgFg");
	this.shape_106.setTransform(1523.25,916.8094);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#662D91").s().p("AiqgPQBihABXAVQBZAVBCBlg");
	this.shape_107.setTransform(1523.3,912.1249);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#662D91").s().p("ABViVQAfBwgwBNQgvBOh1Agg");
	this.shape_108.setTransform(1515.8371,895.575);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#662D91").s().p("AhDgnQAvhNB1ghIi1ErQgehwAvhNg");
	this.shape_109.setTransform(1514.7248,895.525);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#006837").ss(5).p("AC3UIQAAwihyrpQg2lhhFjCQhJjIhQAA");
	this.shape_110.setTransform(1548.85,933);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#006837").ss(5).p("AElL2QAApqizmzQhUjPhthwQhxh2h9AA");
	this.shape_111.setTransform(1537.85,986);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#006837").ss(5).p("AnsRFQAAm4BQmSQBNmCCMkrQCLkrC1ikQC7iqDOAA");
	this.shape_112.setTransform(1616.35,952.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#F15A24").p("AAzgQQgHgVgUgKQgUgKgUAHQgVAHgKAUQgKAUAHAUQAHAWAUAKQAUAJAUgHQAVgHAKgUQAKgUgHgUg");
	this.shape_113.setTransform(392.3456,955.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgXAxQgUgLgHgVQgHgUAKgUQAKgUAVgHQAUgHAUAJQAUALAHAVQAHAUgKATQgKAVgVAHQgJADgIAAQgLAAgMgFg");
	this.shape_114.setTransform(392.3456,955.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FCEE21").s().p("AhihlQBegBAyA1QAzAzACBkg");
	this.shape_115.setTransform(382.45,945.2729);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCEE21").s().p("AgtAyQg0gzgBhkIDFDLIgEAAQhbAAgxg0g");
	this.shape_116.setTransform(382.45,945.1759);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCEE21").s().p("Aggg0QBBggBfAdIj/B9QAchZBDghg");
	this.shape_117.setTransform(379.7,960.9232);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FCEE21").s().p("Ah/A3ID+h8QgcBZhCAgQghASgrAAQgmAAgugPg");
	this.shape_118.setTransform(379.6,962.3018);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FCEE21").s().p("AgqANQgKhHA4hRIApEXQhMg2gLhJg");
	this.shape_119.setTransform(391.9939,969.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FCEE21").s().p("AgsiMQBMA3ALBIQAKBJg4BQg");
	this.shape_120.setTransform(396.8061,969.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FCEE21").s().p("AgHAtQhIgNg8hOIEXAvQg+Aug8AAQgNAAgMgCg");
	this.shape_121.setTransform(406.275,959.9641);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FCEE21").s().p("AiLAAQBMg4BHAMQBJANA7BOg");
	this.shape_122.setTransform(406.325,955.4368);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCEE21").s().p("AA7h9QAeBagiA/QgiBChdAfg");
	this.shape_123.setTransform(399.5781,942.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FCEE21").s().p("Ag2gcQAihBBdggIiDD7QgfhZAjhBg");
	this.shape_124.setTransform(398.2594,942.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#006837").ss(5).p("ADbQKQgztXiApVQg8kbhCiZQhEifhAAE");
	this.shape_125.setTransform(426.925,971.3445);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#006837").ss(5).p("AEPJYQgen0illXQhOijhehWQhhhZhkAG");
	this.shape_126.setTransform(421.7755,1014.7297);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#006837").ss(5).p("AlUOOQgVlkAslIQAsk9Bij4QBjj5CKiNQCPiSCngK");
	this.shape_127.setTransform(482.9883,983.7487);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AgRAYQgKgHgCgNQgCgLAIgKQAHgKANgCQALgCAKAIQAKAHACANQACALgIAKQgHAKgNACIgEABQgJAAgIgHg");
	this.shape_128.setTransform(1645.7825,656.8175);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D4145A").s().p("AhOgCQAsgfAoAIQAoAIAhAtg");
	this.shape_129.setTransform(1637.95,654.0835);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D4145A").s().p("AgEAaQgpgIghgtICdAeQgjAZghAAQgIAAgHgCg");
	this.shape_130.setTransform(1637.925,656.4821);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D4145A").s().p("AgegQQAUglA1gQIhOCLQgPgzAUgjg");
	this.shape_131.setTransform(1641.5866,663.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D4145A").s().p("AAkhFQAQAzgVAjQgUAlg1AQg");
	this.shape_132.setTransform(1642.2257,663.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D4145A").s().p("AgaAcQgcgeABg4IBrB1Qg1gBgbgeg");
	this.shape_133.setTransform(1651.2246,662.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D4145A").s().p("Ag1g6QA1ABAbAfQAcAdgBA4g");
	this.shape_134.setTransform(1651.2267,662.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D4145A").s().p("AhIAdICRhCQgRAxgmARQgSAJgWAAQgXAAgbgJg");
	this.shape_135.setTransform(1653.025,653.9063);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D4145A").s().p("AgRgcQAlgSA1ASIiRBCQARgxAmgRg");
	this.shape_136.setTransform(1653.075,652.9937);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D4145A").s().p("AgXhOQApAfAFAqQAFAoghAsg");
	this.shape_137.setTransform(1646.3016,648.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D4145A").s().p("AgWAHQgFgpAggtIATCfQgpgggFgpg");
	this.shape_138.setTransform(1643.3925,648.85);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFF00").s().p("AgPAaQgLgHgDgMQgCgLAGgLQAHgLAMgCQAMgDAKAGQALAHADAMQACAMgGAKQgHALgMACIgHABQgIAAgHgEg");
	this.shape_139.setTransform(1571.425,683.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D4145A").s().p("Agxg+QA0AFAaAhQAaAfgGA4g");
	this.shape_140.setTransform(1566.498,677.35);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D4145A").s().p("AgcAaQgZggAFg4IBiB9Qg0gFgaggg");
	this.shape_141.setTransform(1566.409,677.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D4145A").s().p("AgOgcQAmgOAzAWIiWA2QAWgwAngOg");
	this.shape_142.setTransform(1563.95,685.712);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D4145A").s().p("AhKAVICVg2QgVAwgnAOQgPAFgRAAQgaAAgfgNg");
	this.shape_143.setTransform(1563.875,687.038);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D4145A").s().p("AgTAEQgCgpAkgqIAGCfQgngjgBgpg");
	this.shape_144.setTransform(1569.9949,691.575);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D4145A").s().p("AgUhPQAnAjACApQACApgkAqg");
	this.shape_145.setTransform(1573.4801,691.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D4145A").s().p("AgIAcQgogLgcgvICZAqQggATgeAAQgMAAgLgDg");
	this.shape_146.setTransform(1579.125,686.6946);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D4145A").s().p("AhMgLQAugbAnALQAoALAcAvg");
	this.shape_147.setTransform(1579.125,684.8282);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D4145A").s().p("AArhBQALA0gXAgQgXAjg2ANg");
	this.shape_148.setTransform(1576.0167,676.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D4145A").s().p("AgegTQAXgiA2gNIhZCFQgLg0AXgig");
	this.shape_149.setTransform(1575.6833,676.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFF00").s().p("AgPAaQgLgHgDgMQgCgMAGgKQAHgLAMgDQAMgCAKAGQALAHADAMQACAMgGAKQgHALgMADIgHAAQgIAAgHgEg");
	this.shape_150.setTransform(1584.275,636.575);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D4145A").s().p("Agxg+QA0AFAaAhQAaAfgGA4g");
	this.shape_151.setTransform(1579.348,630.35);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D4145A").s().p("AgcAaQgZggAFg4IBiB9Qg0gFgaggg");
	this.shape_152.setTransform(1579.259,630.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D4145A").s().p("AgOgcQAmgOA0AWIiXA2QAWgwAngOg");
	this.shape_153.setTransform(1576.8,638.712);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D4145A").s().p("AhKAVICVg2QgVAwgnAOQgPAFgQAAQgbAAgfgNg");
	this.shape_154.setTransform(1576.725,640.0341);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D4145A").s().p("AgTAEQgCgpAkgqIAGCfQgngjgBgpg");
	this.shape_155.setTransform(1582.8449,644.55);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D4145A").s().p("AgUhPQAnAjACApQACApgkAqg");
	this.shape_156.setTransform(1586.3301,644.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D4145A").s().p("AgIAcQgogLgcgvICZAqQggATgdAAQgNAAgLgDg");
	this.shape_157.setTransform(1591.975,639.6946);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D4145A").s().p("AhMgLQAtgcAoAMQAoALAcAvg");
	this.shape_158.setTransform(1591.975,637.8054);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D4145A").s().p("AArhCQALA0gXAiQgXAig2ANg");
	this.shape_159.setTransform(1588.8667,629.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D4145A").s().p("AgegTQAXgiA2gNIhZCFQgLg0AXgig");
	this.shape_160.setTransform(1588.5333,629.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#006837").p("AA4JOQAWnkgllXQgklXhJgE");
	this.shape_161.setTransform(1590.5019,695.0864);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#006837").p("AB5FeQANkbhJjKQhHjLh0gG");
	this.shape_162.setTransform(1584.037,719.0865);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#006837").p("Aj6HmQATmaCUkaQBGiGBVhHQBahJBeAE");
	this.shape_163.setTransform(1621.2106,705.4513);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").p("Ego6gR/MAAAAkCMBRjAAAg");
	this.shape_164.setTransform(261.4839,115.9412);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#666666").s().p("EgoxASCMAAAgkDMBRjAkDg");
	this.shape_165.setTransform(260.55,116.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(2).p("AHGAAIuLAA");
	this.shape_166.setTransform(332.5,340.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(2).p("AHBAAIuBAA");
	this.shape_167.setTransform(331.975,297.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(2).p("AAAqaIAAU0");
	this.shape_168.setTransform(332,319.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#42210B").ss(6).p("AHgK5Iu/AAIAA1xIO/AAg");
	this.shape_169.setTransform(331.975,319.675);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#CCE0F4","#A0C9E8","#70B0DC","#489BD1","#288AC9","#127EC3","#0577BF","#0075BE","#0069AB","#005F9C","#005B97","#1E9CD7"],[0,0.063,0.141,0.22,0.298,0.373,0.443,0.506,0.663,0.847,0.996,1],0,-67,0,67.9).s().p("AnfK5IAA1xIO/AAIAAVxg");
	this.shape_170.setTransform(331.975,319.675);

	this.instance_11 = new lib.Roofshadow();
	this.instance_11.setTransform(234.05,274.95,1,1,0,0,0,250,49);
	this.instance_11.alpha = 0.5;
	this.instance_11.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.instance_11.cache(-2,-2,504,102);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(2).p("Egi/grlMAAABXLMBF/AAAMAAAhXLg");
	this.shape_171.setTransform(224,489.975);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#754C24").s().p("Egi/ArmMAAAhXLMBF/AAAMAAABXLg");
	this.shape_172.setTransform(224,489.975);

	this.instance_12 = new lib.Houseshadow();
	this.instance_12.setTransform(210.6,871.95,1,1,0,0,0,237.5,110);
	this.instance_12.alpha = 0.5;
	this.instance_12.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.instance_12.cache(-2,-2,479,224);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009245").s().p("EiV/AcDMAAAg4FMEr/AAAMAAAA4Fg");
	this.shape_173.setTransform(960,900.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#CCE0F4","#B2D2ED","#6FAFDB","#0578BF","#0075BE","#005B97"],[0.075,0.196,0.463,0.847,0.867,1],0,566.3,0,-528.5).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_174.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.instance_12},{t:this.shape_172},{t:this.shape_171},{t:this.instance_11},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(44));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(927.1,537,992.9,592);
// library properties:
lib.properties = {
	id: 'CC7F2E06378C7948B2869ACBF6540AB9',
	width: 1920,
	height: 1080,
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