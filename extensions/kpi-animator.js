/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kurt's Programming Interface
 * Version 1.0.4.1 (Alpha Stadium)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Author: Abduelaziz Kurt
 * E-Mail: abdkurt1982@gmail.com
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Description
 *
 * Extension to animate DOM-objects
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

class kpiAnimator
{

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Prepair instance
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	constructor ( connector )
	{

		this._cntr = null;
		this._timr = null;

		if ( typeof connector === "object" )
		{

			this._connector = connector;
		}

		this.anim = {
			delay : '2s',
			duration : '3s',
			direction : 'alternate',
			iteration : 'infinite',
			easing : 'ease-in-out',
			transition : '8s'
		};

	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Init instance, before start animation
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	pre ( cbk )
	{

		switch ( this._connector.type )
		{
			case 'id':
				this._cntr = document.getElementById(this._connector.entity);
				break;
			case 'tag':
				this._cntr = document.getElementsByTagName(this._connector.entity)[this._connector.index];
				break;
			case 'name':
				this._cntr = document.getElementsByName(this._connector.entity)[this._connector.index];
				break;
			case 'class':
				this._cntr = document.getElementsByClassName(this._connector.entity)[this._connector.index];
				break;
			case 'query':
				this._cntr = document.querySelector(this._connector.entity);
				break;
		};

		if ( this._cntr && typeof cbk === "function" )
			cbk( this._cntr );

	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Enable animation
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	on ( cbk )
	{

		switch ( this._connector.type )
		{
			case 'id':
				this._cntr = document.getElementById(this._connector.entity);
				break;
			case 'tag':
				this._cntr = document.getElementsByTagName(this._connector.entity)[this._connector.index];
				break;
			case 'name':
				this._cntr = document.getElementsByName(this._connector.entity)[this._connector.index];
				break;
			case 'class':
				this._cntr = document.getElementsByClassName(this._connector.entity)[this._connector.index];
				break;
			case 'query':
				this._cntr = document.querySelector(this._connector.entity);
				break;
		};

		if ( this._cntr && typeof cbk === "function" )
		{
			const c = this;
			const o = this._cntr;
			const a = this.anim;
			const l = arguments[1];
			const r = arguments;
			// *** //
			this._timr = setTimeout(
				function ()
				{
					o.style.transitionDelay = a.delay;
					o.style.transitionDuration = a.duration;
					o.style.transitionDirection = a.direction;
					o.style.transitionIterationCount = a.iteration;
					o.style.transitionTimingFunction = a.easing;
					o.style.transition = a.transition;
					// *** //
					cbk( o );
					// *** //
					if ( l != undefined )
					{
						if ( typeof l === "function" )
						{
							o.addEventListener( "transitionend", () => {
								switch( r.length )
								{
									case 2:
										c.on(l);
										break;
									case 3:
										c.on(l,r[2]);
										break;
									case 4:
										c.on(l,r[2],r[3]);
										break;
									case 5:
										c.on(l,r[2],r[3],r[4]);
										break;
									case 6:
										c.on(l,r[2],r[3],r[4],r[5]);
										break;
									case 7:
										c.on(l,r[2],r[3],r[4],r[5],r[8]);
										break;
									case 8:
										c.on(l,r[2],r[3],r[4],r[5],r[9]);
										break;
									case 9:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10]);
										break;
									case 10:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11]);
										break;
									case 11:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12]);
										break;
									case 12:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13]);
										break;
									case 13:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14]);
										break;
									case 14:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);
										break;
									case 15:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16]);
										break;
									case 16:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17]);
										break;
									case 17:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18]);
										break;
									case 18:
										c.on(l,r[2],r[3],r[4],r[5],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18],r[19]);
										break;
								}
							} );
						}
					}
				}
				,
				1
			);
		}

	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Disable animation
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	off ()
	{

		switch ( this._connector.type )
		{
			case 'id':
				this._cntr = document.getElementById(this._connector.entity);
				break;
			case 'tag':
				this._cntr = document.getElementsByTagName(this._connector.entity)[this._connector.index];
				break;
			case 'name':
				this._cntr = document.getElementsByName(this._connector.entity)[this._connector.index];
				break;
			case 'class':
				this._cntr = document.getElementsByClassName(this._connector.entity)[this._connector.index];
				break;
			case 'query':
				this._cntr = document.querySelector(this._connector.entity);
				break;
		};

		if ( this._cntr )
		{
			this._cntr.style.transitionDelay = '';
			this._cntr.style.transitionDuration = '';
			this._cntr.style.transitionDirection = '';
			this._cntr.style.transitionIterationCount = '';
			this._cntr.style.transitionTimingFunction = '';
			this._cntr.style.transition = '';
			// *** //
			clearTimeout(this._timr);
		}

	}

};