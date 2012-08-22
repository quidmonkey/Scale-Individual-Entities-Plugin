Scale Individual Entities Plugin for ImpactJS
=============================================

This ImpactJS plugin will allow you to scale individual entities. All you need to do is include the 'plugins.scale' module in your game. Once included, you can scale entities in two ways:
```javascript
this.setScale( 2, 2 ); //sets this.scale.x = 2 and this.scale.y = 2

//manually set scale
this.scale.x = 2;
this.scale.y = 2;
this.setScale();
```
Both methods will double the size of your entity. Be aware that an individual entity's scaling is de-coupled from the game's scaling. By default, this.scale.x = 1 and this.scale.y = 1 for each entity; so if you set the game's scale = 2, then all entities will be half the size of the game's scaling by default (because game scale = 2 but entity scale = 1). For this reason, it is recommended that you set the game's scale = 1 when using this plugin, but it isn't a requirement.

Also be aware that implementing this plugin will incur a modest performance hit.

Enjoy.