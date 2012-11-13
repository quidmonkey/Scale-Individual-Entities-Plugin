/*
 * Scale Individual Entities Plugin
 * Written By Abraham Walters
 * June 2012
 *
 */
ig.module(
    'plugins.scale'
)
.requires(
    'impact.entity'
)
.defines(function(){
 
ig.Entity.inject({
	
	scale: { x: 1, y: 1 },		//user-defined scale
	_offset: { x: 0, y: 0 },	//cached offset prior to scaling
	_scale: { x: 1, y: 1 },		//scale relative to ig.system.scale
	_size: { x: 0, y: 0 },		//cached size prior to scaling
 
	init: function( x, y, settings ){
		this.parent( x, y, settings );
		this._offset.x = this.offset.x;
		this._offset.y = this.offset.y;
		this._size.x = this.size.x;
		this._size.y = this.size.y;
		this.setScale( this.scale.x, this.scale.y );
	},
 
	draw: function(){
		var ctx = ig.system.context;
		ctx.save();
		ctx.translate(
			ig.system.getDrawPos( this.pos.x.round() - this.offset.x - ig.game.screen.x ),
			ig.system.getDrawPos( this.pos.y.round() - this.offset.y - ig.game.screen.y )
		);
		ctx.scale( this._scale.x, this._scale.y );
		this.currentAnim.draw( 0, 0 );
		ctx.restore();
	},

	setScale: function( x, y ){
		//cache size prior to scaling
		var oX = this.size.x, 
			oY = this.size.y;

		//set scale
		this.scale.x = x || this.scale.x;
		this.scale.y = y || this.scale.y;

		//set scale relative to game scale
		this._scale.x = this.scale.x / ig.system.scale;
		this._scale.y = this.scale.y / ig.system.scale;

		//scale offset
		this.offset.x = this._offset.x * this._scale.x;
		this.offset.y = this._offset.y * this._scale.y;

		//scale size
		this.size.x = this._size.x * this._scale.x;
		this.size.y = this._size.y * this._scale.y;

		//offset entity's position by the change in size
		this.pos.x += (oX - this.size.x) / 2;
		this.pos.y += (oY - this.size.y) / 2; 
	}
 
});
 
});