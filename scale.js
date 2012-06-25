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
	
	scale: { x: 1, y: 1 },
	_offset: { x: 0, y: 0 },
	_scale: { x: 1, y: 1 },
	_size: { x: 0, y: 0 },
 
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
		ctx.translate(	ig.system.getDrawPos( this.pos.x.round() - this.offset.x - ig.game.screen.x ),
				 		ig.system.getDrawPos( this.pos.y.round() - this.offset.y - ig.game.screen.y ) );
		ctx.scale( this._scale.x, this._scale.y );
		this.currentAnim.draw( 0, 0 );
		ctx.restore();
	},

	setScale: function( x, y ){
		var old = {
			x: this.size.x, y: this.size.y
		};
		this.scale.x = x || this.scale.x;
		this.scale.y = y || this.scale.y;
		this._scale.x = this.scale.x / ig.system.scale;
		this._scale.y = this.scale.y / ig.system.scale;
		this.offset.x = this._offset.x * this._scale.x;
		this.offset.y = this._offset.y * this._scale.y;
		this.size.x = this._size.x * this._scale.x;
		this.size.y = this._size.y * this._scale.y;
		this.pos.x += old.x - this.size.x;
		this.pos.y += old.y - this.size.y; 
	}
 
});
 
});