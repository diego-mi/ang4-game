webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function u(n){return h._19(0,[(n()(),h._4(0,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n  "])),h._16(null,0),(n()(),h._18(-1,null,["\n"])),(n()(),h._18(-1,null,["\n"]))],null,null)}function e(n){return h._19(0,[(n()(),h._4(0,0,null,null,1,"app-container",[],null,null,null,u,I)),h._2(1,114688,null,0,b,[],null,null)],function(n,l){n(l,1,0)},null)}function i(n){return h._19(0,[(n()(),h._4(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n  "])),h._16(null,0),(n()(),h._18(-1,null,["\n"])),(n()(),h._18(-1,null,["\n"]))],null,null)}function a(n){return h._19(0,[(n()(),h._4(0,0,null,null,1,"app-row",[],null,null,null,i,T)),h._2(1,114688,null,0,k,[],null,null)],function(n,l){n(l,1,0)},null)}function r(n){return h._19(0,[(n()(),h._4(0,0,null,null,24,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),h._18(-1,null,["\n  "])),(n()(),h._4(2,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),h._18(3,null,["Jogador 0",""])),(n()(),h._18(-1,null,["\n\n\n\n  "])),(n()(),h._4(5,0,null,null,9,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),h._18(-1,null,["\n    "])),(n()(),h._4(7,0,null,null,0,"div",[["class","life-bar-progress"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n    "])),(n()(),h._4(9,0,null,null,4,"p",[["class","life"]],null,null,null,null,null)),(n()(),h._4(10,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-heartbeat"]],null,null,null,null,null)),(n()(),h._18(-1,null,[" "])),(n()(),h._4(12,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),h._18(13,null,["","%"])),(n()(),h._18(-1,null,["\n  "])),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._4(16,0,null,null,3,"div",[["class","player-animation"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n\n    "])),(n()(),h._4(18,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._4(21,0,null,null,2,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.hitRival()&&u}return u},null,null)),(n()(),h._4(22,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bolt"]],null,null,null,null,null)),(n()(),h._18(-1,null,[" Atacar"])),(n()(),h._18(-1,null,["\n"])),(n()(),h._18(-1,null,["\n"]))],null,function(n,l){var t=l.component;n(l,0,0,h._7(1,"player col player-",t.player.id,"")),n(l,3,0,t.player.id),n(l,5,0,h._7(1,"life-bar progress-",t.player.life,"")),n(l,13,0,t.player.life),n(l,18,0,h._7(3,"assets/images/players/",t.player.id,"/",t.currentAnimation,"/",t.positionAnimation,".png")),n(l,21,0,t.gameOver)})}function o(n){return h._19(0,[(n()(),h._4(0,0,null,null,1,"app-player",[],null,null,null,r,j)),h._2(1,114688,null,0,N,[],null,null)],function(n,l){n(l,1,0)},null)}function c(n){return h._19(0,[(n()(),h._4(0,0,null,null,10,"div",[["class","modal"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n  "])),(n()(),h._4(2,0,null,null,4,"header",[],null,null,null,null,null)),(n()(),h._18(-1,null,["\n    "])),(n()(),h._4(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),h._18(5,null,["O Jogador "," Perdeu!"])),(n()(),h._18(-1,null,["\n  "])),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._4(8,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.hideModal()&&u}return u},null,null)),(n()(),h._18(-1,null,["Reinicie o jogo e tente novamente o/"])),(n()(),h._18(-1,null,["\n"]))],null,function(n,l){n(l,5,0,l.component.playerLoser.id)})}function s(n){return h._19(0,[(n()(),h.Y(16777216,null,null,1,null,c)),h._2(1,16384,null,0,F.c,[h.N,h.K],{ngIf:[0,"ngIf"]},null),(n()(),h._18(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.showModal)},null)}function p(n){return h._19(0,[(n()(),h._4(0,0,null,null,1,"app-modal",[],null,null,null,s,Z)),h._2(1,114688,null,0,G,[],null,null)],function(n,l){n(l,1,0)},null)}function _(n){return h._19(0,[(n()(),h._4(0,0,null,null,26,"section",[["class","game"],["style","background: url('../../../../assets/images/background.jpg')"]],null,null,null,null,null)),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._4(2,0,null,null,20,"app-container",[],null,null,null,u,I)),h._2(3,114688,null,0,b,[],null,null),(n()(),h._18(-1,0,["\n\n    "])),(n()(),h._4(5,0,null,0,8,"app-row",[],null,null,null,i,T)),h._2(6,114688,null,0,k,[],null,null),(n()(),h._18(-1,0,["\n\n      "])),(n()(),h._4(8,0,null,0,1,"app-player",[],null,[[null,"hitRivalPlayer"]],function(n,l,t){var u=!0,e=n.component;if("hitRivalPlayer"===l){u=!1!==e.playerOneHit()&&u}return u},r,j)),h._2(9,114688,null,0,N,[],{player:[0,"player"],gameOver:[1,"gameOver"]},{hitRivalPlayer:"hitRivalPlayer"}),(n()(),h._18(-1,0,["\n\n      "])),(n()(),h._4(11,0,null,0,1,"app-player",[],null,[[null,"hitRivalPlayer"]],function(n,l,t){var u=!0,e=n.component;if("hitRivalPlayer"===l){u=!1!==e.playerTwoHit()&&u}return u},r,j)),h._2(12,114688,null,0,N,[],{player:[0,"player"],gameOver:[1,"gameOver"]},{hitRivalPlayer:"hitRivalPlayer"}),(n()(),h._18(-1,0,["\n\n    "])),(n()(),h._18(-1,0,["\n\n    "])),(n()(),h._4(15,0,null,0,6,"app-row",[],null,null,null,i,T)),h._2(16,114688,null,0,k,[],null,null),(n()(),h._18(-1,0,["\n      "])),(n()(),h._4(18,0,null,0,2,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.restartGame()&&u}return u},null,null)),(n()(),h._4(19,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-undo"]],null,null,null,null,null)),(n()(),h._18(-1,null,[" Reiniciar"])),(n()(),h._18(-1,0,["\n    "])),(n()(),h._18(-1,0,["\n\n  "])),(n()(),h._18(-1,null,["\n\n  "])),(n()(),h._4(24,0,null,null,1,"app-modal",[],null,null,null,s,Z)),h._2(25,114688,null,0,G,[],{showModal:[0,"showModal"],playerLoser:[1,"playerLoser"]},null),(n()(),h._18(-1,null,["\n\n"])),(n()(),h._18(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,3,0),n(l,6,0),n(l,9,0,t.player1,t.gameOver),n(l,12,0,t.player2,t.gameOver),n(l,16,0),n(l,25,0,t.gameOver,t.playerLoser)},null)}function f(n){return h._19(0,[(n()(),h._4(0,0,null,null,1,"app-root",[],null,null,null,_,x)),h._2(1,49152,null,0,P,[g,v],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var h=t("/oeL"),y={production:!0},d=function(){function n(){}return n}(),m=function(){function n(){}return n.prototype.isDead=function(){return 0===this.life},n}(),g=function(){function n(){this.idPlayerOne=1,this.idPlayerTwo=2}return n.prototype.getNewPlayerOne=function(){return this.getNewPlayer(this.idPlayerOne)},n.prototype.getNewPlayerTwo=function(){return this.getNewPlayer(this.idPlayerTwo)},n.prototype.getNewPlayer=function(n){var l=new m;return this.setId(n,l),this.setFullLife(l),l},n.prototype.setId=function(n,l){l.id=n},n.prototype.setFullLife=function(n){n.life=100},n}(),v=function(){function n(){this.hitDamage=20}return n.prototype.hit=function(n){this.setDamageToPlayerInjured(n)},n.prototype.setDamageToPlayerInjured=function(n){n.life-=this.hitDamage},n}(),P=function(){function n(n,l){this.gameOver=!1,this.newPlayerService=n,this.hitPlayerService=l,this.startGame()}return n.prototype.startGame=function(){this.player1=this.newPlayerService.getNewPlayerOne(),this.player2=this.newPlayerService.getNewPlayerTwo(),this.gameOver=!1},n.prototype.restartGame=function(){this.startGame()},n.prototype.playerOneHit=function(){this.hit(this.player2),this.hasWinner(this.player2)},n.prototype.playerTwoHit=function(){this.hit(this.player1),this.hasWinner(this.player1)},n.prototype.hasWinner=function(n){this.afterHitPlayerDead(n)&&(this.gameOver=!0,this.playerLoser=n)},n.prototype.afterHitPlayerDead=function(n){return n.isDead()},n.prototype.hit=function(n){this.hitPlayerService.hit(n)},n.ctorParameters=function(){return[{type:g},{type:v}]},n}(),A=[""],w=[""],b=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),O=[w],I=h._1({encapsulation:0,styles:O,data:{}}),R=(h.Z("app-container",b,e,{},{},["*"]),[""]),k=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),D=[R],T=h._1({encapsulation:0,styles:D,data:{}}),L=(h.Z("app-row",k,a,{},{},["*"]),[""]),N=function(){function n(){this.positionAnimation=1,this.currentAnimation="idle",this.hitRivalPlayer=new h.m}return n.prototype.ngOnInit=function(){this.animationIdle()},n.prototype.hitRival=function(){this.hitRivalPlayer.emit(),this.changeAninationAfterAttack()},n.prototype.animationIdle=function(){var n=this;setInterval(function(){n.changeAnimation()},110)},n.prototype.changeAnimation=function(){if(this.player.isDead()&&"dead"===this.currentAnimation&&10===this.positionAnimation)return!1;10===this.positionAnimation&&this.changeAninationAfterCicle(),this.positionAnimation<10&&(this.positionAnimation+=1)},n.prototype.changeAnimationToAttack=function(){this.positionAnimation=1,this.currentAnimation="attack"},n.prototype.changeAnimationToIdle=function(){this.positionAnimation=1,this.currentAnimation="idle"},n.prototype.changeAnimationToDead=function(){this.positionAnimation=1,this.currentAnimation="dead"},n.prototype.changeAninationAfterAttack=function(){this.player.isDead()?this.changeAnimationToDead():this.changeAnimationToAttack()},n.prototype.changeAninationAfterCicle=function(){this.player.isDead()?this.changeAnimationToDead():this.changeAnimationToIdle()},n.ctorParameters=function(){return[]},n}(),M=[L],j=h._1({encapsulation:0,styles:M,data:{}}),H=(h.Z("app-player",N,o,{player:"player",gameOver:"gameOver"},{hitRivalPlayer:"hitRivalPlayer"},[]),[""]),F=t("qbdv"),G=function(){function n(){}return n.prototype.ngOnInit=function(){this.showModal=!1},n.prototype.hideModal=function(){this.showModal=!1},n.ctorParameters=function(){return[]},n}(),S=[H],Z=h._1({encapsulation:0,styles:S,data:{}}),W=(h.Z("app-modal",G,p,{showModal:"showModal",playerLoser:"playerLoser"},{},[]),[A]),x=h._1({encapsulation:0,styles:W,data:{}}),z=h.Z("app-root",P,f,{},{},[]),C=t("fc+i"),J=function(){function n(){}return n}(),Y=function(){function n(){}return n}(),q=h._0(d,[P],function(n){return h._14([h._15(512,h.i,h.W,[[8,[z]],[3,h.i],h.x]),h._15(5120,h.v,h._13,[[3,h.v]]),h._15(4608,F.e,F.d,[h.v]),h._15(4608,h.h,h.h,[]),h._15(5120,h.a,h._5,[]),h._15(5120,h.t,h._11,[]),h._15(5120,h.u,h._12,[]),h._15(4608,C.b,C.s,[F.b]),h._15(6144,h.H,null,[C.b]),h._15(4608,C.e,C.f,[]),h._15(5120,C.c,function(n,l,t,u){return[new C.k(n),new C.o(l),new C.n(t,u)]},[F.b,F.b,F.b,C.e]),h._15(4608,C.d,C.d,[C.c,h.z]),h._15(135680,C.m,C.m,[F.b]),h._15(4608,C.l,C.l,[C.d,C.m]),h._15(6144,h.F,null,[C.l]),h._15(6144,C.p,null,[C.m]),h._15(4608,h.L,h.L,[h.z]),h._15(4608,C.g,C.g,[F.b]),h._15(4608,C.i,C.i,[F.b]),h._15(4608,g,g,[]),h._15(4608,v,v,[]),h._15(512,F.a,F.a,[]),h._15(1024,h.l,C.q,[]),h._15(1024,h.b,function(n,l){return[C.r(n,l)]},[[2,C.h],[2,h.y]]),h._15(512,h.c,h.c,[[2,h.b]]),h._15(131584,h._3,h._3,[h.z,h.X,h.r,h.l,h.i,h.c]),h._15(2048,h.e,null,[h._3]),h._15(512,h.d,h.d,[h.e]),h._15(512,C.a,C.a,[[3,C.a]]),h._15(512,J,J,[]),h._15(512,Y,Y,[]),h._15(512,d,d,[])])});y.production&&Object(h.R)(),Object(C.j)().bootstrapModuleFactory(q).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);