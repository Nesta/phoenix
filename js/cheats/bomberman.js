/*
* Copyright (C) 2013 Yusuf Aytas, http://www.yusufaytas.com
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU Library General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
* Library General Public License for more details.
*
* You should have received a copy of the GNU Library General Public
* License along with this library; if not, write to the Free
* Software Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
* 
* Author : Yusuf Aytas
* Date   : Dec 5, 2013
*/
var options = {
	cellNumber : 9,
	cellSize : 40,
	bombRmvDelay : 2000,
	regBrickSrc : "/sites/all/themes/da_vinci/images/bomber/regBrick.gif",
	stoneBrickSrc : "/sites/all/themes/da_vinci/images/bomber/stoneBrick.gif",
	heroSrc : "/sites/all/themes/da_vinci/images/bomber/drupal.jpg",
	gengarSrc : "/sites/all/themes/da_vinci/images/bomber/nacho.png",
	ghastlySrc : "/sites/all/themes/da_vinci/images/bomber/belli.jpg",
	hunterSrc : "/sites/all/themes/da_vinci/images/bomber/carmen.png",
	mukSrc : "/sites/all/themes/da_vinci/images/bomber/jose.jpg",
	gateSrc : "/sites/all/themes/da_vinci/images/bomber/gate.gif",
	bombplusSrc : "/sites/all/themes/da_vinci/images/bomber/icono.jpg",
	bombSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bomb0.png",
			"/sites/all/themes/da_vinci/images/bomber/bomb1.png",
			"/sites/all/themes/da_vinci/images/bomber/bomb2.png" ],
	bombCenterSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bcenter1.gif",
			"/sites/all/themes/da_vinci/images/bomber/bcenter2.gif",
			"/sites/all/themes/da_vinci/images/bomber/bcenter3.gif",
			"/sites/all/themes/da_vinci/images/bomber/bcenter4.gif" ],
	bombLeftSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bleft1.gif",
			"/sites/all/themes/da_vinci/images/bomber/bleft2.gif",
			"/sites/all/themes/da_vinci/images/bomber/bleft3.gif",
			"/sites/all/themes/da_vinci/images/bomber/bleft4.gif" ],
	bombRightSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bright1.gif",
			"/sites/all/themes/da_vinci/images/bomber/bright2.gif",
			"/sites/all/themes/da_vinci/images/bomber/bright3.gif",
			"/sites/all/themes/da_vinci/images/bomber/bright4.gif" ],
	bombUpSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bup1.gif",
			"/sites/all/themes/da_vinci/images/bomber/bup2.gif",
			"/sites/all/themes/da_vinci/images/bomber/bup3.gif",
			"/sites/all/themes/da_vinci/images/bomber/bup4.gif" ],
	bombDownSrc : [
			"/sites/all/themes/da_vinci/images/bomber/bdown1.gif",
			"/sites/all/themes/da_vinci/images/bomber/bdown2.gif",
			"/sites/all/themes/da_vinci/images/bomber/bdown3.gif",
			"/sites/all/themes/da_vinci/images/bomber/bdown4.gif" ]
};
var Bomberman = (function(options, iio) {
	var DEFAULT_MARGIN = 20;
	var regBrickImg = new Image();
	regBrickImg.src = options.regBrickSrc;
	var stoneBrickImg = new Image();
	stoneBrickImg.src = options.stoneBrickSrc;
	var heroImg = new Image();
	heroImg.src = options.heroSrc;
	var bombBonusImg = new Image();
	bombBonusImg.src = options.bombplusSrc;
	var powerBonusImg = new Image();
	powerBonusImg.src = options.bombplusSrc;
	var ghastlyImg = new Image();
	ghastlyImg.src = options.ghastlySrc;
	var mukImg = new Image();
	mukImg.src = options.mukSrc;
	var gengarImg = new Image();
	gengarImg.src = options.gengarSrc;
	var hunterImg = new Image();
	hunterImg.src = options.hunterSrc;
	var gateImg = new Image();
	gateImg.src = options.gateSrc;
	var moves = [[-1,0],[1,0],[0,-1],[0,1]];
	var Bomberman = function(io) {
		this.bonuses = [];
		this.creatures = [];
		this.grid = new iio.Grid(0, 0, options.cellNumber, options.cellNumber, options.cellSize);
		this.hero = this.createHero(io, this.grid, this.bonuses, this.creatures);
		this.createRandomMap(this.grid,io,this.hero);
		this.hero.registerKeyEvents();
		io.setFramerate(20);
	};
	// Bomberman Cell by overriding iio.Rect constructor
	Bomberman.Cell = function(x, y) {
		this.setX(x);
		this.setY(y);
		iio.Rect.call(this, x * options.cellSize + DEFAULT_MARGIN, y
				* options.cellSize + DEFAULT_MARGIN, options.cellSize,
				options.cellSize);
	};
	// Extend iio.Rect
	Bomberman.Cell.prototype = Object.create(iio.Rect.prototype);
	Bomberman.Cell.prototype.constructor = Bomberman.Cell;
	Bomberman.Cell.prototype.setX = function(x) {
		this.x = x;
	};
	Bomberman.Cell.prototype.setY = function(y) {
		this.y = y;
	};
	Bomberman.Cell.prototype.getX = function() {
		return this.x;
	};
	Bomberman.Cell.prototype.getY = function() {
		return this.y;
	};
	Bomberman.Cell.prototype.repaint = function() {
		this.setPos(this.getX() * options.cellSize + DEFAULT_MARGIN, this.getY() 
				* options.cellSize + DEFAULT_MARGIN);
	};
	// Bomberman Cell by overriding Bomberman.Cell constructor
	Bomberman.Brick = function(x, y, breakable, bonus) {
		this.bonus = bonus;
		this.breakable = breakable;
		if (breakable) {
			this.addImage(regBrickImg);
		} else {
			this.addImage(stoneBrickImg);
		}
		Bomberman.Cell.call(this, x, y);
	};
	// Extend Bomberman.Cell
	Bomberman.Brick.prototype = Object.create(Bomberman.Cell.prototype);
	Bomberman.Brick.prototype.constructor = Bomberman.Brick;
	Bomberman.Brick.prototype.isBreakable = function() {
		return this.breakable;
	};
	Bomberman.Brick.prototype.getBonus = function() {
		return this.bonus;
	};
	Bomberman.Brick.prototype.setGate = function(gate) {
		this.gate = gate;
	};
	Bomberman.Brick.prototype.getGate = function(gate) {
		return this.gate;
	};
	// Extend Bomberman.Cell
	Bomberman.Gate = function(x,y,io){
		this.io = io;
		this.addImage(gateImg);
		Bomberman.Cell.call(this, x, y);
	};
	Bomberman.Gate.prototype = Object.create(Bomberman.Cell.prototype);
	Bomberman.Gate.prototype.constructor = Bomberman.Gate;
	Bomberman.Gate.prototype.showUp = function() {
		this.io.addObj(this);
	};
	// Extend Bomberman.Cell
	Bomberman.Bonus = function(x,y,io,img,hero){
		this.io = io;
		this.hero = hero;
		this.addImage(img);
		Bomberman.Cell.call(this, x, y);
	};
	Bomberman.Bonus.prototype = Object.create(Bomberman.Cell.prototype);
	Bomberman.Bonus.prototype.constructor = Bomberman.Bonus;
	Bomberman.Bonus.prototype.showUp = function() {
		this.io.addObj(this);
	};
	Bomberman.Bonus.prototype.pickUp = function() {};
	// Extend Bomberman.Bonus
	Bomberman.BombBonus = function(x,y,io,hero){
		Bomberman.Bonus.call(this, x, y,io, bombBonusImg,hero);
	};
	Bomberman.BombBonus.prototype = Object.create(Bomberman.Bonus.prototype);
	Bomberman.BombBonus.prototype.constructor = Bomberman.BombBonus;
	Bomberman.BombBonus.prototype.pickUp = function() {
		this.io.rmvObj(this);
		this.hero.bombNumber++;
	};
	// Extend Bomberman.Bonus
	Bomberman.PowerBonus = function(x,y,io,hero){
		Bomberman.Bonus.call(this, x, y,io, powerBonusImg,hero);
	};
	Bomberman.PowerBonus.prototype = Object.create(Bomberman.Bonus.prototype);
	Bomberman.PowerBonus.prototype.constructor = Bomberman.PowerBonus;
	Bomberman.PowerBonus.prototype.pickUp = function() {
		this.io.rmvObj(this);
		this.hero.bombPower++;
	};
	// Bomberman Bomb by overriding Bomberman.Cell constructor
	Bomberman.Bomb = function(x, y, power, io, grid, hero, creatures) {
		var bomb = this;
		this.createWithAnim(options.bombSrc);
		io.setFramerate(5, function() {
			bomb.nextAnimFrame();
		});
		Bomberman.Cell.call(this, x, y);
		setTimeout(function() {
			hero.bombNumber++;
			io.rmvObj(bomb);
			bomb.destroyObjects(x, y, power, io, grid, hero, creatures);
		}, options.bombRmvDelay);
	};
	// Extend Bomberman.Cell
	Bomberman.Bomb.prototype = Object.create(Bomberman.Cell.prototype);
	Bomberman.Bomb.prototype.constructor = Bomberman.Bomb;
	Bomberman.Bomb.prototype.destroyObjects = function(x, y, power, io, grid, hero,creatures) {
		this.destroyCenterObjects(x, y, io,hero,creatures);
		this.destroyLeftObjects(x - 1, y, power - 1, io, grid,hero,creatures);
		this.destroyRightObjects(x + 1, y, power - 1, io, grid,hero,creatures);
		this.destroyUpObjects(x, y - 1, power - 1, io, grid,hero,creatures);
		this.destroyDownObjects(x, y + 1, power - 1, io, grid,hero,creatures);
	};
	Bomberman.Bomb.prototype.destroyCenterObjects = function(x, y, io,hero,creatures) {
		this.fire(x,y,io,options.bombCenterSrc);
		this.destroyCreatures(x,y,creatures);
	};
	Bomberman.Bomb.prototype.destroyLeftObjects = function(x, y, power, io, grid,hero,creatures) {
		if (power != 0&&x >= 0) {
			this.destroyCreatures(x,y,creatures);
			if (grid.cells[x][y] instanceof Bomberman.Brick) {
				if(!grid.cells[x][y].isBreakable()){
					return;
				}
				this.destroyBrick(x, y, io, grid);
			} else {
				this.destroyLeftObjects(x - 1, y, power - 1, io, grid,hero, creatures);
			}
			this.fire(x,y,io,options.bombLeftSrc);
		}
	};
	Bomberman.Bomb.prototype.destroyRightObjects = function(x, y, power, io, grid,hero,creatures) {
		if (power != 0 && x < options.cellNumber) {
			this.destroyCreatures(x,y,creatures);
			if (grid.cells[x][y] instanceof Bomberman.Brick) {
				if(!grid.cells[x][y].isBreakable()){
					return;
				}
				this.destroyBrick(x, y, io, grid);
			} else {
				this.destroyRightObjects(x + 1, y, power - 1, io, grid,hero,creatures);
			}
			this.fire(x,y,io,options.bombRightSrc);
		}
	};
	Bomberman.Bomb.prototype.destroyUpObjects = function(x, y, power, io, grid,hero,creatures) {
		if (power != 0 && y >= 0) {
			this.destroyCreatures(x,y,creatures);
			if (grid.cells[x][y] instanceof Bomberman.Brick) {
				if(!grid.cells[x][y].isBreakable()){
					return;
				}
				this.destroyBrick(x, y, io, grid);
			} else {
				this.destroyUpObjects(x, y - 1, power - 1, io, grid,hero,creatures);
			}
			this.fire(x,y,io,options.bombUpSrc);
		}
	};
	Bomberman.Bomb.prototype.destroyDownObjects = function(x, y, power, io, grid, hero,creatures) {
		if (power != 0 && y < options.cellNumber) {
			this.destroyCreatures(x,y,creatures);
			if (grid.cells[x][y] instanceof Bomberman.Brick) {
				if(!grid.cells[x][y].isBreakable()){
					return;
				}
				this.destroyBrick(x, y, io, grid);
			} else {
				this.destroyDownObjects(x, y + 1, power - 1, io, grid,hero,creatures);
			}
			this.fire(x,y,io,options.bombDownSrc);
		}
	};
	Bomberman.Bomb.prototype.destroyBrick = function(x, y, io, grid) {
		var bonus = grid.cells[x][y].getBonus();
		var gate = grid.cells[x][y].getGate();
		if(bonus instanceof Bomberman.Bonus){
			bonus.showUp();
		}
		if(gate instanceof Bomberman.Gate){
			gate.showUp();
		}
		io.rmvObj(grid.cells[x][y]);
		grid.cells[x][y] = null;
	};
	Bomberman.Bomb.prototype.destroyCreatures = function(x, y,creatures) {
		for (var i=0;i<creatures.length;i++){
			if(creatures[i].getX()==x&&creatures[i].getY()==y){
				creatures.splice(i, 1)[0].destroy();
				i--;
			}
		}
	};
	Bomberman.Bomb.prototype.fire = function(x, y, io, imgs) {
		var fire = new Bomberman.Cell(x,y);
		io.addObj(fire);
		fire.createWithAnim(imgs);
		var currentAnim = 0;
		io.setFramerate(20, function() {
			if(currentAnim==4){
				io.rmvObj(fire);
			}
			fire.setAnimFrame(currentAnim++);
		});
	};
	// Bomberman Creature by overriding Bomberman.Cell constructor
	Bomberman.Creature = function(x, y, io, grid) {
		this.io = io;
		this.grid = grid;
		Bomberman.Cell.call(this, x, y);
	};
	// Extend Bomberman.Cell
	Bomberman.Creature.prototype = Object.create(Bomberman.Cell.prototype);
	Bomberman.Creature.prototype.constructor = Bomberman.Creature;
	Bomberman.Creature.prototype.canMove = function(x, y) {
		if (!(x >= 0 && x < options.cellNumber && y >= 0 && y < options.cellNumber)) {
			return false;
		}
		var obj = this.grid.cells[x][y];
		if (obj instanceof Bomberman.Brick) {
			return false;
		}
		return true;
	};
	Bomberman.Creature.prototype.destroy = function(){};
	// Bomberman Hero by overriding Bomberman.Creature constructor
	Bomberman.Hero = function(x, y, io, grid,bonuses, creatures) {
		this.bombPower = 2;
		this.bombNumber = 3;
		this.bonuses = bonuses;
		this.creatures = creatures;
		this.addImage(heroImg);
		this.repaint();
		Bomberman.Creature.call(this, x, y, io, grid);
	};
	// Extend Bomberman.Cell
	Bomberman.Hero.prototype = Object.create(Bomberman.Creature.prototype);
	Bomberman.Hero.prototype.constructor = Bomberman.Hero;
	Bomberman.Hero.prototype.moveUp = function() {
		var newY = this.getY() - 1;
		if (this.canMove(this.getX(), newY)) {
			this.setY(newY);
			this.handleMove(this.getX(),this.getY());
			this.repaint();
		}
	};
	Bomberman.Hero.prototype.moveDown = function() {
		var newY = this.getY() + 1;
		if (this.canMove(this.getX(), newY)) {
			this.setY(newY);
			this.handleMove(this.getX(),this.getY());
			this.repaint();
		}
	};
	Bomberman.Hero.prototype.moveRight = function() {
		var newX = this.getX() + 1;
		if (this.canMove(newX, this.getY())) {
			this.setX(newX);
			this.handleMove(this.getX(),this.getY());
			this.repaint();
		}
	};
	Bomberman.Hero.prototype.moveLeft = function() {
		var newX = this.getX() - 1;
		if (this.canMove(newX, this.getY())) {
			this.setX(newX);
			this.handleMove(this.getX(),this.getY());
			this.repaint();
		}
	};
	Bomberman.Hero.prototype.handleMove = function(x, y) {
		for (var i=0;i<this.bonuses.length;i++){
			if(this.bonuses[i].getX()==x&&this.bonuses[i].getY()==y){
				this.bonuses[i].pickUp();
				this.bonuses.splice(i, 1);
				break;
			}
		}
		for (var i=0;i<this.creatures.length;i++){
			if(this.creatures[i].getX()==x&&this.creatures[i].getY()==y && 
					!(this.creatures[i] instanceof Bomberman.Hero)){
				this.destroy();
			}
		}
		if(this.gate.getX()==x&&this.gate.getY()==y){
			this.win();
		}
	};
	Bomberman.Hero.prototype.registerKeyEvents = function() {
		var hero = this;
		window.addEventListener('keydown', function(event) {
			if (iio.keyCodeIs('up arrow', event)) {
				hero.moveUp();
			}
			if (iio.keyCodeIs('right arrow', event)) {
				hero.moveRight();
			}
			if (iio.keyCodeIs('down arrow', event)) {
				hero.moveDown();
			}
			if (iio.keyCodeIs('left arrow', event)) {
				hero.moveLeft();
			}
			if (iio.keyCodeIs('space', event)) {
				hero.dropBomb();
			}
		});
	};
	Bomberman.Hero.prototype.dropBomb = function() {
		if (this.bombNumber > 0) {
			this.bombNumber--;
			var bomb = new Bomberman.Bomb(this.getX(), this.getY(), this.bombPower, this.io, this.grid, this, 
					this.creatures);
			this.io.addObj(bomb);
		}
	};
	Bomberman.Hero.prototype.destroy = function() {
		var io = this.io;
		var hero = this;
		setTimeout(function(){
			alert("Ouch, ¿Una más?");
      location.reload();
			io.cancelFramerate();
			for(var i=0;i<hero.creatures.length;i++){
				io.cancelFramerate(hero.creatures[i]);
			}
		},200);
	};
	Bomberman.Hero.prototype.win = function() {
		setTimeout(function(){
			alert("Vámonos p'al Bar! Camarerooo!!!");
      location.reload();
			io.cancelFramerate();
			for(var i=0;i<io.creatures.length;i++){
				io.cancelFramerate(creatures[i]);
			}
		},200);
	};
	Bomberman.Hero.prototype.setGate = function(gate) {
		this.gate = gate;
	};
	// Bomberman Monster by overriding Bomberman.Creature constructor
	Bomberman.Monster = function(x, y, io, grid, hero, img) {
		var monster = this;
		this.addImage(img);
		io.setFramerate(2,monster,null,function() {
			monster.moveRandom(hero);
		});
		Bomberman.Creature.call(this, x, y, io, grid);
	};
	// Extend Bomberman.Creature
	Bomberman.Monster.prototype = Object.create(Bomberman.Creature.prototype);
	Bomberman.Monster.prototype.constructor = Bomberman.Monster;
	Bomberman.Monster.prototype.moveRandom = function(hero){
		for(var i=0;i<3;i++){
			var move = moves[(Math.random()*4)|0];
			var newX = move[0]+this.getX(), newY = move[1]+this.getY();
			if(this.canMove(newX,newY)){
				this.setX(newX);
				this.setY(newY);
				this.repaint();
				if(this.getX()==hero.getX()&&this.getY()==hero.getY()){
					hero.destroy();
				}
				break;
			}
		}
	};
	Bomberman.Monster.prototype.destroy = function(){
		this.io.rmvObj(this);
		this.io.cancelFramerate(this);
	};
	// Create a random map
	Bomberman.prototype.createRandomMap = function(grid,io,hero) {
		var bricksWithoutBonus = [];
		for ( var i = 0; i < options.cellNumber; i++) {
			for ( var j = 0; j < options.cellNumber; j++) {
				if (i < 2 && j < 2 && i * j == 0) {
					continue;
				}
				var random = Math.random();
				if (random > 0.5) {
					var brick;
					var bonus = this.createBonus(i,j,io,hero);
					if (random > 0.85) {
						brick = new Bomberman.Brick(i, j, false, bonus);
					} else {
						brick = new Bomberman.Brick(i, j, true, bonus);
					}
					if(bonus!=null){
						this.bonuses.push(bonus);
					}
					else{
						bricksWithoutBonus.push(brick);
					}
					grid.cells[i][j] = brick;
					io.addObj(brick);
				}
				else{
					var monster = this.createMonster(i,j,io,grid,hero);
					if(monster!=null){
						io.addObj(monster);
						this.creatures.push(monster);
					}
				}
			}
		}
		this.creatures.push(hero);
		var gateBrick = bricksWithoutBonus[(Math.random()*bricksWithoutBonus.length)|0];
		var gate = new Bomberman.Gate(gateBrick.getX(),gateBrick.getY(),io);
		hero.setGate(gate);
		gateBrick.setGate(gate);
		io.addObj(grid);
	};
	Bomberman.prototype.createHero = function(io, grid, bonuses, creatures) {
		var hero = new Bomberman.Hero(0, 0, io, grid, bonuses, creatures);
		io.addObj(hero);
		return hero;
	};
	Bomberman.prototype.createMonster = function(x,y,io,grid,hero){
		var random = Math.random();
		if(random<0.15&&random>0.12){
			return new Bomberman.Monster(x,y,io,grid,hero,gengarImg);
		}
		else if(random<0.12&&random>0.09){
			return new Bomberman.Monster(x,y,io,grid,hero,hunterImg);
		}
		else if(random<0.09&&random>0.06){
			return new Bomberman.Monster(x,y,io,grid,hero,mukImg);
		}
		else if(random<0.06&&random>0.03){
			return new Bomberman.Monster(x,y,io,grid,hero,ghastlyImg);
		}
		else{
			return null;
		}
	};
	Bomberman.prototype.createBonus = function(x,y,io,hero){
		var random = Math.random();
		if(random<0.95){
			return null;
		}
		if(random<0.97){
			return new Bomberman.BombBonus(x,y,io,hero);
		}
		else{
			return new Bomberman.PowerBonus(x,y,io,hero);
		}
	};
	return Bomberman;
})(options, iio);
