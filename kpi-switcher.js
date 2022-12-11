/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Switcher Component
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const kpi_switcher = function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";
		this.bool = false;
		this._sketch = null;

		this.style = {
			backColor: '#fff',
			gridColor: '#ccc',
			textColor: '#000',
			borderColor: 'rgb( 160, 164, 168 )',
			onColor: 'blue',
			offColor: 'red'
		};

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.refresh = function () {

			if ( this._sketch != null )
			{

				this._sketch.clear();

				this._sketch.box( 0, 0, parseInt(this.attr.style.width), parseInt(this.attr.style.height), this.style.gridColor );
				this._sketch.box( 1, 1, parseInt(this.attr.style.width) - 2, parseInt(this.attr.style.height) - 2, this.style.backColor );

				let swit = parseInt(this.attr.style.width) / 2;

				if ( this.bool == false )
					this._sketch.box( 3, 3, swit, parseInt(this.attr.style.height) - 6, this.style.offColor );
				else if ( this.bool == true )
					this._sketch.box( swit + 3, 3, swit + swit - 3, parseInt(this.attr.style.height) - 6, this.style.onColor );

			}

		}		

		this.create = function () {

			let bool = false;
			let attr = null;
			let evnt = null;
			let wdth = "200px";
			let hegt = "60px";

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						bool = arguments[0];
						break;
					case 2:
						bool = arguments[0];
						attr = arguments[1];
						break;
					case 3:
						bool = arguments[0];
						attr = arguments[1];
						evnt = arguments[2];
						break;
				}
			}

			this._ev = evnt;

			this._cd += `<canvas id = "${this._id}" style = "cursor: pointer;`;

			if ( attr != null )
			{
				if ( attr.width != undefined ) wdth = attr.width;
				if ( attr.height != undefined ) hegt = attr.height;
				if ( attr.state != undefined ) bool = attr.state;
			}

			this.bool = bool;

			this._cd += `width:${wdth};`;
			this._cd += `height:${hegt};`;

			this._cd += `"></canvas>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			this._sketch = new kpi.graphics.sketch;
			this._sketch.init( this._id );

			this._ev = (e) => {
				if (e)
				{
					if ( e.target.dataset.state === false )
						e.target.dataset.state = true;
					else
					if ( e.target.dataset.state === true )
						e.target.dataset.state = false;
					// *** //
					//alert(e.target.dataset.state);
					e.target.refresh();
				}
			};

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onmousedown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id).onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id).onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id).onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id).onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id).onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id).onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

			this.refresh();

			this.attr.dataset.state = this.bool;

		}

};
