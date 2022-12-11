/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kurt's Programming Interface
 * Version 1.0.3.9 (Alpha Stadium)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Author: Abduelaziz Kurt
 * E-Mail: abdkurt1982@gmail.com
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Description
 *
 * The KPI is a smart, easy and stand-alone JavaScript-Module to
 * create client-side-surfaces using few lines of code. There
 * are also some other features like API interaction.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

let __kpi_temp_counter = 0; // Used to increase component indices

let __kip_hide_popups = [];
let __kip_hide_popupi = '';
let __kip_z_order_idx = 1000;

function __kpi_disp_swi () {
	for ( let e of arguments )
	{
		const el = document.getElementById(e);
		// *** //
		if ( el != null && el != undefined && el )
		{
			if ( el.style.display == "block" )
				el.style.display = "none";
			else
			if ( el.style.display == "none" )
				el.style.display = "block";
		}
	}
}

const kpi = // Modular Chain-Root
{

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * KPI Version
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	version: '1.0.3.9',
	fullver: 'KPI 1.0.3.9, Compact Release',

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * The body-element
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	body : () => { return document.getElementsByTagName("body")[0]; },

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Fetch API
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	net : {

		api : (url, cbk) => {
			
		},

		read : (url, cbk) => {
			
		},

		html : (url, cbk) => {
			
		},

		send : (url) => {
			
		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Parse string-data
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	rex : {

		split : function () {
			
		},

		next : function () {
			
		},

		operator : function () {
			
		},

		isoptr : function () {
			
		},

		count : function () {
			
		},

		operators : function () {
			
		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Element Style-Access
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	css : (id) => {

		return document.getElementById(id).style;
	
	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Element Direct-Access
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	tag : (id) => {

		return document.getElementById(id);
	
	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Shortcuts
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	doc : document,
	wnd : window,
	nav : navigator,
	loc : location,
	his : history,
	scr : screen,
	lcl : localStorage,
	ses : sessionStorage,

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * You can use html-elements as patterns and can edit their 
	 * contents by placeholders
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	pattern : (sourceid) => {

		this._si = sourceid;

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._ky = [];

		this.addKey = function (name, data) {

			this._ky[this._ky.length] = { label : name, value : data };

		}

		this.getValue = function (key) {
			for ( let e of this._ky )
			{
				if ( e.label === key )
					return e.value;
			}
			return '';
		}

		this.setValue = function (key, data) {
			for ( let e = 0; e < this._ky.length; e++ )
			{
				if ( this._ky[e].label === key )
				{
					this._ky[e].value = data;
					break;
				}
			}
		}

		this.get = function () {

			let o = document.getElementById(this._si).innerHTML;

			let v = ""; let a = [];

			for ( let x = 0; x < o.length; x++ )
			{
				switch ( o[x] )
				{
					case '<': case '>': case '(': case ')':
					case '[': case ']': case '{': case '}':
					case '=': case '&': case '+': case '-':
					case '*': case ':': case '#': case '@':
					case '!': case '$': case '%': case '?':
					case '|': case '.': case ';': case ',':
					case ' ': case '\t': case '\n': case '\r':
						if ( v )
						{
							let f = false;
							// *** //
							for ( let e of this._ky )
							{
								if ( e.label === v )
								{
									f = true;
									a.push( e.value );
									break;
								}
							}
							// *** //
							if ( f === false )
								a.push( v );
						}
						// *** //
						v = "";
						// *** //
						let f = false;
						// *** //
						for ( let e of this._ky )
						{
							if ( e.label === o[x] )
							{
								f = true;
								a.push( e.value );
								break;
							}
						}
						// *** //
						if ( f === false )
							a.push( o[x] );
						// *** //
						break;
					default:
						v += o[x];
				}
			}

			if ( v )
			{
					let f = false;
					// *** //
					for ( let e of this._ky )
					{
						if ( e.label === v )
						{
							f = true;
							a.push( e.value );
							break;
						}
					}
					// *** //
					if ( f === false )
						a.push( v );
			}

			v = "";

			for ( let e of a )
				v += e;

			return v;

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Adder, Appender, Inserter
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	into : {

		body : {

			set : ( code ) => {

				document.getElementsByTagName("body")[0].innerHTML = code + 
					'<div style="display:none;" id="kpi_hidden_temp_field"></div>';

			},

			add : ( code ) => {

				document.getElementsByTagName("body")[0].innerHTML += code;

			},

			get : () => {

				return document.getElementsByTagName("body")[0].innerHTML;

			}

		},

		main : {

			set : ( code ) => {

				document.getElementsByTagName("main")[0].innerHTML = code;

			},

			add : ( code ) => {

				document.getElementsByTagName("main")[0].innerHTML += code;

			},

			get : () => {

				return document.getElementsByTagName("main")[0].innerHTML;

			}

		},


		head : {

			set : ( code ) => {

				document.getElementsByTagName("head")[0].innerHTML = code;

			},

			add : ( code ) => {

				document.getElementsByTagName("head")[0].innerHTML += code;

			},

			get : () => {

				return document.getElementsByTagName("head")[0].innerHTML;

			}

		},


		header : {

			set : ( code ) => {

				document.getElementsByTagName("header")[0].innerHTML = code;

			},

			add : ( code ) => {

				document.getElementsByTagName("header")[0].innerHTML += code;

			},

			get : () => {

				return document.getElementsByTagName("header")[0].innerHTML;

			}

		},

		footer : {

			set : ( code ) => {

				document.getElementsByTagName("footer")[0].innerHTML = code;

			},

			add : ( code ) => {

				document.getElementsByTagName("footer")[0].innerHTML += code;

			},

			get : () => {

				return document.getElementsByTagName("footer")[0].innerHTML;

			}

		}


	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Layers are used to create several document contents and allow
	 * to switch between them
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	router : () => {

		this._vw = [];

		this.init = function () {

			if ( arguments.length > 0 )
			{

				for ( let vw of arguments )
					this._vw.push( vw );

			}

		}
	
		this.goto = function (path) {

			for ( let vw of this._vw )
			{

				if ( vw.path === path )
				{
					__kpi_temp_counter = 0;
					// *** //
					__kip_hide_popups = [];
					// *** //
					switch ( typeof vw.page )
					{
						case 'string':
							/* * * * * * * * * * * * * * * * * * * * * * * * *
							 * The content will be delivered from an URL
							 * * * * * * * * * * * * * * * * * * * * * * * * */
							fetch(vw.page).
							then((code) => code.text()).
							catch((err) => console.error('Error:', err));
							// *** //
							break;
						case 'object':
							/* * * * * * * * * * * * * * * * * * * * * * * * *
							 * The content will be delivered from an object.
							 * This is a special command to build the content
							 * by template, JSX, CSS or JS file.
							 * * * * * * * * * * * * * * * * * * * * * * * * *
							 * A template is a HTML, XML or JSX file. It will
							 * get read in as HTML-code. But you can browse
							 * the entire content for placeholders and 
							 * change them directly.
							 * * * * * * * * * * * * * * * * * * * * * * * * *
							 * A jsx is a bit more complex than a template.
							 * In that case, you can also call JavaScript-code
							 * embedded in the code.
							 * * * * * * * * * * * * * * * * * * * * * * * * *
							 * As a CSS file, you can load the css-file
							 * and while reading, you can select, which
							 * sections shell be read in and further more
							 * the css-file has an internal extended
							 * syntax that will be automatically invoked.
							 * * * * * * * * * * * * * * * * * * * * * * * * *
							 * Object structure:
							 *
							 *  -- template --        -- jsx --
							 *
							 * {                      {
							 *   type : 'template',     type: 'jsx',
							 *   path : 'url',          path : 'url',          // Source where the data will be fetched from
							 *   modifier : [],         modifier : [],         // Objects of { key : 'placeholder', callback : foo }
							 * }                      }
							 *
							 * -- css / kss --        -- js --
							 *
							 * {                      {
							 *   type : 'style',        type : 'js',
							 *   path : 'url'           path : 'url'
							 *                          level : ''            // levels: before-content, after-content, current
							 * }                      }
							 * * * * * * * * * * * * * * * * * * * * * * * * */
							switch( vw.page.type )
							{
								case 'template':
								case 'jsx':
							}
							// *** //
							break;
						case 'function':
							/* * * * * * * * * * * * * * * * * * * * * * * * *
							 * The content will be delivered by a function
							 * * * * * * * * * * * * * * * * * * * * * * * * */
							vw.page();
							// *** //
							break;
					}
					// *** //
					if ( __kip_hide_popups.length > 0 )
					{
						document.getElementsByTagName("html")[0].onmouseup = function () {
							for ( let x of __kip_hide_popups )
								document.getElementById(x).style.display = "none";
						};
					}
					// *** //
					break;
				}
			}

			return path;

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Views are used to organize the structure of the visible document
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	view : () => {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._ky = [];

		this.wrap = function () {

			if ( arguments.length > 0 )
			{
				let o = `<div style = "display: flex; flex-flow: row wrap;">`;
				// *** //
				let i = 0;
				// *** //
				let k;
				// *** //
				for ( let vw of arguments )
				{
					if ( typeof vw === "object" )
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div id = "${k}" style = "width: ${vw.size};`;
						// *** //
						if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
						if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
						if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
						if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
						if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
						if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
						if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
						if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
						if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
						if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
						if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
						if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
						if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
						if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
						if ( vw.border != undefined ) o += `border: ${vw.border};`;
						if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
						if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
						if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
						// *** //
						o += `"></div>`;
					}
					else
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div style = "width: ${vw};" id = "${k}"></div>`;
					}
					// *** //
					i++;
				}
				// *** //
				o += `</div>`;
				// *** //
				return o;
			}
	
			return '';

		}
	
		this.rows = function () {

			if ( arguments.length > 0 )
			{
				let o = `<div style = "display: flex; flex-flow: column wrap;">`;
				// *** //
				let i = 0;
				// *** //
				let k;
				// *** //
				for ( let vw of arguments )
				{
					if ( typeof vw === "object" )
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div id = "${k}" style = "width: ${vw.size};`;
						// *** //
						if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
						if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
						if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
						if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
						if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
						if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
						if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
						if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
						if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
						if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
						if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
						if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
						if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
						if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
						if ( vw.border != undefined ) o += `border: ${vw.border};`;
						if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
						if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
						if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
						// *** //
						o += `"></div>`;
					}
					else
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div style = "width: ${vw};" id = "${k}"></div>`;
					}
					// *** //
					i++;
				}
				// *** //
				o += `</div>`;
				// *** //
				return o;
			}

			return '';

		}
	
		this.cols = function () {

			if ( arguments.length > 0 )
			{
				let o = `<div style = "display: flex;">`;
				// *** //
				let i = 0;
				// *** //
				let k;
				// *** //
				for ( let vw of arguments )
				{
					if ( typeof vw === "object" )
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div id = "${k}" style = "width: ${vw.size};`;
						// *** //
						if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
						if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
						if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
						if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
						if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
						if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
						if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
						if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
						if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
						if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
						if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
						if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
						if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
						if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
						if ( vw.border != undefined ) o += `border: ${vw.border};`;
						if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
						if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
						if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
						// *** //
						o += `"></div>`;
					}
					else
					{
						k = `${this._id}.view.${i}`;
						// *** //
						this._ky.push( k );
						// *** //
						o += `<div style = "width: ${vw};" id = "${k}"></div>`;
					}
					// *** //
					i++;
				}
				// *** //
				o += `</div>`;
				// *** //
				return o;
			}

			return '';

		}

		this.tile = function () {

			/*
				Here we can specifiy which fields are in which mode.
				You can use wrap, cols and rows together, but needs
				to specify them, separately as objects like:

				(

					{ model : 'wrap', fields : [ 100, 50, 20, 30, 50 ] },
					{ model : 'cols', fields : ... },
					{ model : 'rows', fields : ... },

				)
 
 				Or more complex:

				(

					{ 
						model : 'wrap', 
						fields : [ 
								100, 
								{
									size :  '200px',
									model : 'row', 
									fields : [ 
											 '40%', 
											 '60%' 
											 ]
								}, 
								20, 
								30, 
								50 
								] 
					},

				)
 
			*/

			if ( arguments.length > 0 )
			{
				let o = "";
				// *** //
				let i = 0;
				// *** //
				for ( let x = 0; x < arguments.length; x++ )
				{
					let tile = arguments[x];
					// *** //
					let k = "";
					// *** //
					switch ( tile.model )
					{
						case 'wrap':
							o += `<div style = "display: flex; flex-flow: row wrap;">`;
							// *** //
							for ( let vw of tile.fields )
							{
								if ( typeof vw === "object" )
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div id = "${k}" style = "width: ${vw.size};`;
									// *** //
									if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
									if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
									if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
									if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
									if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
									if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
									if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
									if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
									if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
									if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
									if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
									if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
									if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
									if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
									if ( vw.border != undefined ) o += `border: ${vw.border};`;
									if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
									if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
									if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
									// *** //
									o += `"></div>`;
								}
								else
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div style = "width: ${vw};" id = "${k}"></div>`;
								}
								// *** //
								i++;
							}
							// *** //
							o += '</div>';
							// *** //
							break;
						case 'cols':
							o += `<div style = "display: flex;">`;
							// *** //
							for ( let vw of tile.fields )
							{
								if ( typeof vw === "object" )
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div id = "${k}" style = "width: ${vw.size};`;
									// *** //
									if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
									if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
									if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
									if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
									if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
									if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
									if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
									if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
									if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
									if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
									if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
									if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
									if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
									if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
									if ( vw.border != undefined ) o += `border: ${vw.border};`;
									if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
									if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
									if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
									// *** //
									o += `"></div>`;
								}
								else
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div style = "width: ${vw};" id = "${k}"></div>`;
								}
								// *** //
								i++;
							}
							// *** //
							o += '</div>';
							// *** //
							break;
						case 'rows':
							o += `<div style = "display: flex; flex-flow: column wrap;">`;
							// *** //
							for ( let vw of tile.fields )
							{
								if ( typeof vw === "object" )
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div id = "${k}" style = "width: ${vw.size};`;
									// *** //
									if ( vw.marginLeft != undefined ) o += `margin-left: ${vw.marginLeft};`;
									if ( vw.marginRight != undefined ) o += `margin-right: ${vw.marginRight};`;
									if ( vw.marginTop != undefined ) o += `margin-top: ${vw.marginTop};`;
									if ( vw.marginBottom != undefined ) o += `margin-bottom: ${vw.marginBottom};`;
									if ( vw.margin != undefined ) o += `margin: ${vw.margin};`;
									if ( vw.paddingLeft != undefined ) o += `padding-left: ${vw.paddingLeft};`;
									if ( vw.paddingRight != undefined ) o += `padding-right: ${vw.paddingRight};`;
									if ( vw.paddingTop != undefined ) o += `padding-top: ${vw.paddingTop};`;
									if ( vw.paddingBottom != undefined ) o += `padding-bottom: ${vw.paddingBottom};`;
									if ( vw.padding != undefined ) o += `padding: ${vw.padding};`;
									if ( vw.borderLeft != undefined ) o += `border-left: ${vw.borderLeft};`;
									if ( vw.borderRight != undefined ) o += `border-right: ${vw.borderRight};`;
									if ( vw.borderTop != undefined ) o += `border-top: ${vw.borderTop};`;
									if ( vw.borderBottom != undefined ) o += `border-bottom: ${vw.borderBottom};`;
									if ( vw.border != undefined ) o += `border: ${vw.border};`;
									if ( vw.backColor != undefined ) o += `background-color: ${vw.backColor};`;
									if ( vw.textColor != undefined ) o += `color: ${vw.textColor};`;
									if ( vw.overFlow != undefined ) o += `overflow: ${vw.overFlow};`;
									// *** //
									o += `"></div>`;
								}
								else
								{
									k = `${this._id}.view.${i}`;
									// *** //
									this._ky.push( k );
									// *** //
									o += `<div style = "width: ${vw};" id = "${k}"></div>`;
								}
								// *** //
								i++;
							}
							// *** //
							o += '</div>';
							// *** //
							break;
					}
				}
				// *** //
				return o;
			}

			return '';

		}

		this.set = (index, code) => {

			switch( typeof code )
			{
				case 'string':
					if ( document.getElementById(this._ky[index]) != null )
					document.getElementById(this._ky[index]).innerHTML = code;
					break;
				case 'object':
					fetch(code.path).
					then((text) => { document.getElementById(this._ky[index]).innerHTML = text.text(); return text; } ).
					catch((err) => console.error('Error:', err));
					break;
				case 'function':
					if ( document.getElementById(this._ky[index]) != null )
					document.getElementById(this._ky[index]).innerHTML = code();
					break;
			}

		}

		this.put = (index, code) => {

			switch( typeof code )
			{
				case 'string':
					if ( document.getElementById(this._ky[index]) != null )
					document.getElementById(this._ky[index]).innerHTML += code;
					break;
				case 'object':
					fetch(code.path).
					then((text) => { document.getElementById(this._ky[index]).innerHTML = text.text(); return text; } ).
					catch((err) => console.error('Error:', err));
					break;
				case 'function':
					if ( document.getElementById(this._ky[index]) != null )
					document.getElementById(this._ky[index]).innerHTML += code();
					break;
			}

		}

		this.get = (index) => {

			if ( document.getElementById(this._ky[index]) != null )
			return document.getElementById(this._ky[index]).innerHTML;

		}

		this.clear = function () {

			this._ky = [];

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Headline Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	headLine : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._ti = "";
		this._tx = "";
		this._cl = "";

		this.setClass = function ( text ) {

			this._cl = text;

		}

		this.setTitle = function ( text ) {

			this._ti = text;

		}

		this.setText = function ( text ) {

			this._tx = text;

		}

		this.addTitle = function ( text ) {

			this._ti += text;

		}

		this.addText = function ( text ) {

			this._tx += text;

		}

		this.getTitle = function () {

			return this._ti;

		}

		this.getText = function () {

			return this._tx;

		}

		this.get = function () {

			if ( this._cl === "" )
				return `<div id = "${this._id}"><h1>${this._ti}</h1><div>${this._tx}</div></div>`;
			else
				return `<div id = "${this._id}" class = "${this._cl}"><h1>${this._ti}</h1><div>${this._tx}</div></div>`;

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Panel Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	panel : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._cl = "";
		this.attr = null;

		this.setClass = function ( text ) {

			this._cl = text;

		}

		this.set = function ( text ) {

			this._cd = text;

		}

		this.add = function ( text ) {

			this._cd += text;

		}

		this.get = function () {

			if ( this._cl === "" )
				return `<div id = "${this._id}">${this._cd}</div>`;
			else
				return `<div id = "${this._id}" class = "${this._cl}">${this._cd}</div>`;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

		}
	
		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Button Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	button : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "Button";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						text = arguments[0];
						break;
					case 2:
						text = arguments[0];
						evnt = arguments[1];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl === "" )
				this._cd = `<button id = "${this._id}">${text}</button>`;
			else
				this._cd = `<button id = "${this._id}" class = "${this._cl}">${text}</button>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onclick = this._ev;
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
						case 'click': document.getElementById(this._id).onclick = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * colorShape Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	colorShape : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let clor = "#fff";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						clor = arguments[0];
						break;
					case 2:
						clor = arguments[0];
						evnt = arguments[1];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl === "" )
				this._cd = `<div id = "${this._id}"><div style = "width:100%;height:100%;background-color:${clor};">&nbsp;</div></div>`;
			else
				this._cd = `<div id = "${this._id}" class = "${this._cl}"><div style = "width:100%;height:100%;background-color:${clor};">&nbsp;</div></div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

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
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Canvas Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	canvas : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						evnt = arguments[0];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl === "" )
				this._cd = `<canvas id = "${this._id}"></canvas>`;
			else
				this._cd = `<canvas id = "${this._id}" class = "${this._cl}"></canvas>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).mousedown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id).onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id).onmouseover = ey.callback; break;
						case 'mousemove': document.getElementById(this._id).onmousemove = ey.callback; break;
						case 'mouseout': document.getElementById(this._id).onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id).onmouseup = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * List Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	list : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._ky = [];

		this._cd = "";

		this.attr = null;
		this.itemAttr = [];

		this.begin = function () {

			let bodyPadding = '1px';
			let bodyBackColor = '#ffffff';
			let bodyBorder = '1px solid rgb(160, 165, 170)';
			let bodyShadow = '4px 4px 4px rgba(0,0,0,0.02)';
			let bodyHeight = '300px';
			let bodyFixedSize = false;
			let itemFontName = 'Arial, Helvetica, Verdana, Tahoma';
			let itemFontSize = '12px';
			let itemAlignment = 'left';
			let itemPadding = '8px';
			let itemTextColor = '#000';
			let itemSelectedBackColor = 'rgb(200,200,230)';
			let itemSelectedTextColor = 'rgb(40,50,80)';
			let itemSelectedShadow = 'inset 4px 4px 4px rgba(0,0,0,0.04)';

			if ( arguments.length > 0 )
			{
				for ( let entry of arguments )
				{
					switch ( entry.name )
					{
						case 'bodyPadding': bodyPadding = entry.value; break;
						case 'bodyBackColor': bodyBackColor = entry.value; break;
						case 'bodyBorder': bodyBorder = entry.value; break;
						case 'bodyShadow': bodyShadow = entry.value; break;
						case 'bodyHeight': bodyHeight = entry.value; break;
						case 'bodyFixedSize': bodyFixedSize = entry.value; break;
						case 'itemFontName': itemFontName = entry.value; break;
						case 'itemFontSize': itemFontSize = entry.value; break;
						case 'itemAlignment': itemAlignment = entry.value; break;
						case 'itemPadding': itemPadding = entry.value; break;
						case 'itemTextColor': itemTextColor = entry.value; break;
						case 'itemSelectedBackColor': itemSelectedBackColor = entry.value; break;
						case 'itemSelectedTextColor': itemSelectedTextColor = entry.value; break;
						case 'itemSelectedShadow': itemSelectedShadow = entry.value; break;
					}
				}
			}

			let bfs = "";

			if ( bodyFixedSize === true )
				bfs = `height: ${bodyHeight};`;

			this._cd = `<style type = "text/css">` +
					`.${this._id} {` +
					`padding: ${bodyPadding};` +
					`background-color: ${bodyBackColor};` +
					`border: ${bodyBorder};` +
					`box-shadow: ${bodyShadow};` +
					`}` +
					`.${this._id} .inner {` +
					`max-height: ${bodyHeight};` + bfs +
					`overflow: auto;` +
					`border: none;` +
					`}` +
					`.${this._id} .inner .item {` +
					`font-name: ${itemFontName};` +
					`font-size: ${itemFontSize};` +
					`text-align: ${itemAlignment};` +
					`cursor: pointer;` +
					`padding: ${itemPadding};` +
					`color: ${itemTextColor};` +
					`}` +
					`.${this._id} .inner .item:hover {` +
					`box-shadow: ${itemSelectedShadow};` +
					`background-color: ${itemSelectedBackColor};` +
					`color: ${itemSelectedTextColor};` +
					`}` +
					`</style>` + 
			       `<div id = "${this._id}" class = "${this._id}">` +
				   `<div class = "${this._id} inner">`;

		}

		this.close = function () {

			this._cd += `</div></div>`;

		},

		this.item = function () {

			let key = "";
			let txt = "";
			let cbk = null;

			if ( arguments.length > 0 )
			{
				switch( arguments.length )
				{
					case 1: 
						key = "kpi_component_" + __kpi_temp_counter;
									  			 __kpi_temp_counter++;
						txt = arguments[0];
						break;
					case 2: 
						key = arguments[0];
						txt = arguments[1];
						break;
					case 3: 
						key = arguments[0];
						txt = arguments[1];
						cbk = arguments[2];
						break;
				}

				const rkey = this._id + ".item." + this._ky.length;

				this._ky.push( { realKey : rkey, relativeKey : key, keyCallBack : cbk } );

				this._cd += `<div id = "${rkey}" class = "inner item">${txt}</div>`;

			}

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			for ( let el of this._ky )
			{
				this.itemAttr.push( document.getElementById(el.realKey) );
				document.getElementById(el.realKey).onclick = el.keyCallBack;
			}

		}

		this.entry = function (key) {

			for ( let el of this._ky )
			{
				if ( el.relativeKey === key )
				{
					return document.getElementById(el.realKey);
				}
			}

		}

		this.style = function (key) {

			for ( let el of this._ky )
			{
				if ( el.relativeKey === key )
				{
					return document.getElementById(el.realKey).style;
				}
			}

		}

		return this;

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Label Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	label : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						text = arguments[0];
						break;
					case 2:
						text = arguments[0];
						evnt = arguments[1];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl )
				this._cd = `<label id = "${this._id}" class = "${this._cl}">${text}</label>`;
			else
				this._cd = `<label id = "${this._id}">${text}</label>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onmouseup = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id).onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id).onmouseover = ey.callback; break;
						case 'mousemove': document.getElementById(this._id).onmousemove = ey.callback; break;
						case 'mouseout': document.getElementById(this._id).onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id).onmouseup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Input-Box Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	input : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl )
				this._cd = `<input class = "${this._cl}" type = "text" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;
			else
				this._cd = `<input type = "text" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( this._ev )
			{
				if ( Array.isArray(this._ev) === false )
					document.getElementById(this._id).onkeydown = this._ev;
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
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Number-Input-Box Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	numbr : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this._cl = "";
		this.attr = null;

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl )
				this._cd = `<input class = "${this._cl}" type = "number" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;
			else
				this._cd = `<input type = "number" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Date-Input Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	date : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl )
				this._cd = `<input type = "date" class = "${this._cl}" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;
			else
				this._cd = `<input type = "date" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * CheckBox Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	check : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "checkbox" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Radio Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	radio : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "radio" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Date-Time Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	dateTime : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "datetime" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Image-Input Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	imageBtn : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "image" role = "button" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onchange = this._ev;
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
						case 'change': document.getElementById(this._id).onchange = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Slider Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	slider : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "range" role = "slider" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onchange = this._ev;
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
						case 'change': document.getElementById(this._id).onchange = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Date-Input Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	color : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "color" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onchange = this._ev;
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
						case 'change': document.getElementById(this._id).onchange = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Time-Input Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	time : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "time" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onchange = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'change': document.getElementById(this._id).onchange = ey.callback; break;
						case 'keydown': document.getElementById(this._id).onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id).onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Search-Input Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	search : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						plhd = arguments[0];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						break;
					case 2:
						plhd = arguments[0];
						evnt = arguments[1];
						text = arguments[2];
						break;
				}
			}

			this._ev = evnt;
			this._cd = `<input type = "search" role = "textbox" id = "${this._id}" placeholder = "${plhd}" value = "${text}" />`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Toolbar Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	toolBar : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._cl = "";
		this._itm = [];
		this._ev = null;
		this._ty = null;
		this.attr = null;
		this._isz = "32px";

		this.setIconSize = function ( v ) {

			switch ( v )
			{
				case 16: case 24: case 32: case 48: 
				case 64: case 80: case 128: case 256:
					this._isz = v + "px";
					// *** //
					break;
			}

		}

		this.getIconSize = function () {

			return this._isz;

		}

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.begin = function () {

			let type = 'h';
			let evnt = null;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						type = arguments[0];
						break;
					case 2:
						type = arguments[0];
						evnt = arguments[1];
						break;
				}
			}

			this._ev = evnt;

			this._ty = type;

			if ( this._cl === "" )
			{

				this._cl += `${this._id}-default-style`;

				if ( type === 'h' )
				{
					this._cd += `<style>`;
					this._cd += `.${this._cl} {`;
					this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
					this._cd += `border-top: 1px solid #fff;`;
					this._cd += `border-left: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-bottom: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 4px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item {`;
					this._cd += `font-size: 12px;`;
					this._cd += `cursor: pointer;`;
					this._cd += `padding: 6px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item:hover {`;
					this._cd += `background-image: linear-gradient(rgb( 242, 247, 250 ), rgb( 221, 224, 227 ));`;
					this._cd += `border-top: 1px solid #fff;`;
					this._cd += `border-left: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-bottom: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 5px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item:active {`;
					this._cd += `background-image: linear-gradient(rgb( 221, 224, 227 ), rgb( 242, 247, 250 ));`;
					this._cd += `border-bottom: 1px solid #fff;`;
					this._cd += `border-right: 1px solid #fff;`;
					this._cd += `border-left: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-top: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 5px;`;
					this._cd += `} `;
					this._cd += `.${this._cl}-popup-box {`;
					this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
					this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.04 );`;
					this._cd += `border: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `background-color: rgb( 235, 235, 235 );`;
					this._cd += `position: absolute;`;
					this._cd += `margin: 0px;`;
					this._cd += `padding: 0px;`;
					this._cd += `margin-top: 7px;`; // because .* .item -> padding: 7px (5px top & 2px bottom)
					this._cd += `margin-left: -5px;`;
					this._cd += `z-index: 1000;`;
					this._cd += `} `;
					this._cd += `.${this._cl}-popup-box .inner {`;
					this._cd += `border: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 190, 194, 198 );`;
					this._cd += `border-bottom: 1px solid rgb( 190, 194, 198 );`;
					this._cd += `padding: 2px;`;
					this._cd += `} `;
					this._cd += `</style>`;
				}
				else if ( type === 'v' )
				{
					this._cd += `<style>`;
					this._cd += `.${this._cl} {`;
					this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
					this._cd += `border-top: 1px solid #fff;`;
					this._cd += `border-left: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-bottom: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 4px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item {`;
					this._cd += `font-size: 12px;`;
					this._cd += `cursor: pointer;`;
					this._cd += `padding: 6px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item:hover {`;
					this._cd += `background-image: linear-gradient(rgb( 242, 247, 250 ), rgb( 221, 224, 227 ));`;
					this._cd += `border-top: 1px solid #fff;`;
					this._cd += `border-left: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-bottom: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 5px;`;
					this._cd += `} `;
					this._cd += `.${this._cl} .item:active {`;
					this._cd += `background-image: linear-gradient(rgb( 221, 224, 227 ), rgb( 242, 247, 250 ));`;
					this._cd += `border-bottom: 1px solid #fff;`;
					this._cd += `border-right: 1px solid #fff;`;
					this._cd += `border-left: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `border-top: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `padding: 5px;`;
					this._cd += `} `;
					this._cd += `.${this._cl}-popup-box {`;
					this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
					this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.04 );`;
					this._cd += `border: 1px solid rgb( 160, 164, 168 );`;
					this._cd += `background-color: rgb( 235, 235, 235 );`;
					this._cd += `position: absolute;`;
					this._cd += `margin: 0px;`;
					this._cd += `padding: 0px;`;
					this._cd += `margin-top: 7px;`; // because .* .item -> padding: 7px (5px top & 2px bottom)
					this._cd += `margin-left: -5px;`;
					this._cd += `z-index: 1000;`;
					this._cd += `} `;
					this._cd += `.${this._cl}-popup-box .inner {`;
					this._cd += `border: 1px solid #fff;`;
					this._cd += `border-right: 1px solid rgb( 190, 194, 198 );`;
					this._cd += `border-bottom: 1px solid rgb( 190, 194, 198 );`;
					this._cd += `padding: 2px;`;
					this._cd += `} `;
					this._cd += `</style>`;
				}

			}

			switch ( type )
			{
				case 'h':
					this._cd += `<div id = "${this._id}" `;
					this._cd += `class = "${this._cl}" `;
					this._cd += `style = "width: 100%; display:flex; flex-flow: row wrap; justify-content: flex-start;">`;
					break;
				case 'v':
					this._cd += `<div id = "${this._id}" `;
					this._cd += `class = "${this._cl}" `;
					this._cd += `style = "display:flex; flex-flow: column wrap; align-items: flex-start;">`;
					break;
			}

		}

		this.separator = function () {

			switch ( this._ty )
			{
				case 'h': this._cd += `<div>&nbsp;&nbsp;&nbsp;</div>`; break;
				case 'v': this._cd += `<hr />`; break;
			}

		}

		this.item = function () {

			if ( arguments.length >= 2 ) {

				let key = arguments[0];
				let text = arguments[1];
				let icon = "";
				let type = 'default';
				let popp = [];
				let pfix = false;
				let pope = '';

				switch ( arguments.length )
				{
					case 3:
						icon = arguments[2];
						break;
					case 4:
						icon = arguments[2];
						type = arguments[3];
						break;
					case 5:
						icon = arguments[2];
						type = arguments[3];
						popp = arguments[4];
						break;
					case 6:
						icon = arguments[2];
						type = arguments[3];
						popp = arguments[4];
						pfix = arguments[5];
						break;
				}

				this._itm.push( {
					type : 'root',
					item : key,
					entry : `${this._id}.${key}`,
					fixed : pfix,
					popup : popp
				} );

				this._cd += `<div id = "${this._id}.${key}" `;

				if ( popp.length > 0 )
				{
					this._cd += `onclick = 'let o = document.getElementById("${this._id}.${key}.popup.box").style;`;
					this._cd += `if (o.display=="block") o.display="none"; else if (o.display=="none") o.display="block";`;
					this._cd += `__kip_hide_popupi = "${this._id}.${key}.popup.box";`;
					this._cd += `'`;
				}

				switch ( type )
				{
					case 'default-icon-only': case 'default-icon-top':
					case 'default-icon-left': case 'default-icon-right':
					case 'default-icon-bottom': case 'default-text-only':
						this._cd += `class = "item default" `;
						if ( popp.length > 0 )
							this._cd += `style = "display: flex; flex-flow: row; align-items: flex-end;">`;
						else
							this._cd += `>`;
						break;
					case 'toggle-icon-only': case 'toggle-icon-top':
					case 'toggle-icon-left': case 'toggle-icon-right':
					case 'toggle-icon-bottom': case 'toggle-text-only':
						this._cd += `class = "item toggle" `;
						if ( popp.length > 0 )
							this._cd += `style = "display: flex; flex-flow: row; align-items: flex-end;">`;
						else
							this._cd += `>`;
						break;
				}

				this._cd += `<div id = "${this._id}.${key}.button" `;

				switch ( type )
				{
					case 'default-icon-only': case 'toggle-icon-only':
						this._cd += `style = "vertical-align: middle; text-align: center; padding: 5px;" `;
						this._cd += `title = "${text}" `;
						this._cd += `>`;
						this._cd += `<img style = "width:${this._isz};height:${this._isz};" src = "${icon}" />`;
						break;
					case 'default-icon-top': case 'toggle-icon-top':
						this._cd += `>`;
						this._cd += `<div><img style = "width:${this._isz};height:${this._isz};" src = "${icon}" /></div>`;
						this._cd += `<div style = "text-align: center;">${text}</div>`;
						break;
					case 'default-icon-left': case 'toggle-icon-left':
						this._cd += `style = "display: flex; align-items: center;">`;
						this._cd += `<div><img style = "width:${this._isz};height:${this._isz};margin-right:10px;" src = "${icon}" /></div>`;
						this._cd += `<div>${text}</div>`;
						break;
					case 'default-icon-right': case 'toggle-icon-right':
						this._cd += `style = "display: flex; align-items: center;">`;
						this._cd += `<div>${text}</div>`;
						this._cd += `<div><img style = "width:${this._isz};height:${this._isz};margin-left:10px;" src = "${icon}" /></div>`;
						break;
					case 'default-icon-bottom': case 'toggle-icon-bottom':
						this._cd += `>`;
						this._cd += `<div style = "text-align: center;">${text}</div>`;
						this._cd += `<div><img style = "width:${this._isz};height:${this._isz};" src = "${icon}" /></div>`;
						break;
					case 'default-text-only': case 'toggle-text-only':
						this._cd += `>`;
						this._cd += `${text}`;
						break;
				}

				if ( popp.length > 0 )
				{
					__kip_hide_popups.push( `${this._id}.${key}.popup.box` );
					// *** //
					this._cd += `<div id = "${this._id}.${key}.popup.box" class = "${this._cl}-popup-box" style = "display:none;"><div class = "inner" style = "`;
					// *** //
					for( let p of popp )
					{
						if ( p.key === undefined )
						{
							switch ( p.type )
							{
								case 'separator':
									this._cd += `<hr />`;
									// *** //
									break;
								case 'default': case 'text-only': case 'color': case 'date':
								case 'icon-only': case 'icon-top': case 'icon-left':
								case 'icon-right': case 'icon-bottom':
									pope = p.type;
									// *** //
									if ( p.overFlow != undefined ) this._cd += `overflow:${p.overFlow};`;
									if ( p.maxHeight != undefined ) this._cd += `max-height:${p.maxHeight};`;
									if ( p.maxWidth != undefined ) this._cd += `max-width:${p.maxWidth};`;
									if ( p.minHeight != undefined ) this._cd += `min-height:${p.minHeight};`;
									if ( p.minWidth != undefined ) this._cd += `min-width:${p.minWidth};`;
									if ( p.height != undefined ) this._cd += `height:${p.height};`;
									if ( p.width != undefined ) this._cd += `width:${p.width};`;
									if ( p.opacity != undefined ) this._cd += `opacity:${p.opacity};`;
									if ( p.shadow != undefined ) this._cd += `box-shadow:${p.shadow};`;
									if ( p.border != undefined ) this._cd += `border:${p.border};`;
									if ( p.borderTop != undefined ) this._cd += `border-top:${p.borderTop};`;
									if ( p.borderLeft != undefined ) this._cd += `border-left:${p.borderLeft};`;
									if ( p.borderRight != undefined ) this._cd += `border-right:${p.borderRight};`;
									if ( p.borderBottom != undefined ) this._cd += `border-bottom:${p.borderBottom};`;
									if ( p.padding != undefined ) this._cd += `padding:${p.padding};`;
									if ( p.paddingTop != undefined ) this._cd += `padding-top:${p.paddingTop};`;
									if ( p.paddingLeft != undefined ) this._cd += `padding-left:${p.paddingLeft};`;
									if ( p.paddingRight != undefined ) this._cd += `padding-right:${p.paddingRight};`;
									if ( p.paddingBottom != undefined ) this._cd += `padding-bottom:${p.paddingBottom};`;
									if ( p.margin != undefined ) this._cd += `margin:${p.margin};`;
									if ( p.marginTop != undefined ) this._cd += `margin-top:${p.marginTop};`;
									if ( p.marginLeft != undefined ) this._cd += `margin-left:${p.marginLeft};`;
									if ( p.marginRight != undefined ) this._cd += `margin-right:${p.marginRight};`;
									if ( p.marginBottom != undefined ) this._cd += `margin-bottom:${p.marginBottom};`;
									if ( p.textColor != undefined ) this._cd += `color:${p.textColor};`;
									if ( p.backColor != undefined ) this._cd += `background-color:${p.backColor};`;
									// *** //
									this._cd += `">`;
									// *** //
									break;
							}
						} else {
							switch ( pope )
							{
								case 'default':
									this._itm.push( { type : 'sub', entry : `${this._id}.${p.key}`, item : `${this._id}.${p.key}` } );
									this._cd += `<div class = "item" id = "${this._id}.${p.key}" style = "display:flex;justify-content: flex-start; text-align: left; align-items: center;" `;
									if ( p.info != undefined )
										this._cd += `title = "${p.info}"`;
									this._cd += `>`;
									if ( p.icon != undefined )
										this._cd += `<img src = "${p.icon}" style = "margin-right: 10px;" />`;
									this._cd += `<label>${p.text}</label>`;
									this._cd += `</div>`;
								case 'text-only':
								case 'color':
								case 'date':
								case 'icon-only':
								case 'icon-top':
								case 'icon-left':
								case 'icon-right':
								case 'icon-bottom':
							}
						}
					}
					// *** //
					this._cd += `</div></div>`;
				}

				this._cd += `</div>`;

				if ( popp.length > 0 )
				{
					this._cd += `<div id = "${this._id}.${key}.popup" style = "padding-left: 6px;">`;
					
					this._cd += `<div style = "width: 7px; height: 1px; padding: 0px; background-color: #000; font-size:1px;">&nbsp;</div>`;
					this._cd += `<div style = "margin-left: 1px; width: 5px; height: 1px; padding: 0px; background-color: #000; font-size:1px;">&nbsp;</div>`;
					this._cd += `<div style = "margin-left: 2px; width: 3px; height: 1px; padding: 0px; background-color: #000; font-size:1px;">&nbsp;</div>`;
					this._cd += `<div style = "margin-left: 3px; width: 1px; height: 1px; padding: 0px; background-color: #000; font-size:1px;">&nbsp;</div>`;
					
					this._cd += `</div>`;
				}

				this._cd += `</div>`;

			}

		}

		this.close = function () {

			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			let el = ""; let ky = ""; let cb = null;

			if ( Array.isArray(this._ev) === false )
			{
				cb = this._ev;
				// *** //
				for ( let i of this._itm )
				{
					ky = i.item;
					// *** //
					if ( i.type === 'root' )
					{
						if ( i.fixed === false )
							el = i.entry;
						else
							el = i.entry + ".popup";
						// *** //
						if ( i.popup.length === 0 )
							document.getElementById(el).onmousedown = () => { cb( document.getElementById(el), ky ); } //this._ev;
					}
					else
						document.getElementById(el).onmousedown = () => { cb( document.getElementById(el), ky ); } //this._ev;
				}
			}
			else
			{
				for ( let ey of this._ev )
				{
					for ( let i of this._itm )
					{
						if ( i.type === 'root' )
						{
							if ( i.fixed === false )
								el = i.entry;
							else
								el = i.entry + ".popup";
							// *** //
							if ( i.popup.length === 0 )
							{
								switch ( ey.event )
								{
									case 'mousedown': document.getElementById(el).onmousedown = ey.callback; break;
									case 'mouseover': document.getElementById(el).onmouseover = ey.callback; break;
									case 'mouseout': document.getElementById(el).onmouseout = ey.callback; break;
									case 'mouseup': document.getElementById(el).onmouseup = ey.callback; break;
									case 'gotfocus': document.getElementById(el).onfocus = ey.callback; break;
									case 'lostfocus': document.getElementById(el).onblur = ey.callback; break;
									case 'keydown': document.getElementById(el).onkeydown = ey.callback; break;
									case 'keyup': document.getElementById(el).onkeyup = ey.callback; break;
								}
							}
						}
						else
						{
							switch ( ey.event )
							{
								case 'mousedown': document.getElementById(el).onmousedown = ey.callback; break;
								case 'mouseover': document.getElementById(el).onmouseover = ey.callback; break;
								case 'mouseout': document.getElementById(el).onmouseout = ey.callback; break;
								case 'mouseup': document.getElementById(el).onmouseup = ey.callback; break;
								case 'gotfocus': document.getElementById(el).onfocus = ey.callback; break;
								case 'lostfocus': document.getElementById(el).onblur = ey.callback; break;
								case 'keydown': document.getElementById(el).onkeydown = ey.callback; break;
								case 'keyup': document.getElementById(el).onkeyup = ey.callback; break;
							}
						}
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Left-Side-Bar Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	lSideBar : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let evnt = null;
			let attr = null;
			let size = '20px';

			let fix = false;
			let axe = false;
			let mih = false;
			let mah = false;
			let bkg = false;
			let txt = false;
			let shd = false;
			let bdr = false;
			let pad = false;
			let maw = false;
			let ovf = false;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						text = arguments[0];
						break;
					case 2:
						text = arguments[0];
						attr = arguments[1];
						break;
					case 3:
						text = arguments[0];
						attr = arguments[1];
						size = arguments[2];
						break;
					case 4:
						text = arguments[0];
						attr = arguments[1];
						size = arguments[2];
						evnt = arguments[3];
						break;
				}
			}

			this._ev = evnt;
			this._cd += `<div `;
			this._cd += ` id = "${this._id}" `;

			if ( this._cl != "" )
				this._cd += ` class = "${this._cl}" style = "overflow: auto;`;
			else
				this._cd += ` style = "overflow: auto; max-height: 300px;`;

			this._cd += `z-index:${__kip_z_order_idx}; display: flex;`;

			__kip_z_order_idx++;

			if ( attr != null )
			{
				for ( let p of attr )
				{
					if ( p.position != undefined ) { this._cd += `position: ${p.position};`; fix = true; }
					if ( p.opacity != undefined ) this._cd += `opacity:${p.opacity};`;
					if ( p.shadow != undefined ) { this._cd += `box-shadow:${p.shadow};`; shd = true; }
					if ( p.border != undefined ) { this._cd += `border:${p.border};`; bdr = true; }
					if ( p.borderTop != undefined ) { this._cd += `border-top:${p.borderTop};`; bdr = true; }
					if ( p.borderLeft != undefined ) { this._cd += `border-left:${p.borderLeft};`; bdr = true; }
					if ( p.borderRight != undefined ) { this._cd += `border-right:${p.borderRight};`; bdr = true; }
					if ( p.borderBottom != undefined ) { this._cd += `border-bottom:${p.borderBottom};`; bdr = true; }
					if ( p.textColor != undefined ) { this._cd += `color:${p.textColor};`; txt = true; }
					if ( p.backColor != undefined ) { this._cd += `background-color:${p.backColor};`; bkg = true; }
					if ( p.top != undefined ) { this._cd += `border-top:${p.top};`; axe = true; }
					if ( p.bottom != undefined ) this._cd += `border-bottom:${p.bottom};`;
				}
			}

			if ( fix == false )
				this._cd += `position: fixed;`;

			if ( axe == false )
				this._cd += `top: 80px;`;

			this._cd += `left: 0px;`;

			if ( bkg == false )
				this._cd += `background-color: rgb( 235, 235, 235 );`;

			if ( txt == false )
				this._cd += `color: #000;`;

			if ( shd == false )
				this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.08 );`;

			if ( bdr == false )
				this._cd += `border: 1px solid rgb( 160, 164, 168 );`;

			this._cd += `">`;

			this._cd += `<div class = "inner" id = "${this._id}.inner" style = "display:none;`;

			if ( attr != null )
			{
				for ( let p of attr )
				{
					if ( p.overFlow != undefined ) { this._cd += `overflow:${p.overFlow};`; ovf = true; }
					if ( p.maxHeight != undefined ) { this._cd += `max-height:${p.maxHeight};`; mah = true; }
					if ( p.maxWidth != undefined ) { this._cd += `max-width:${p.maxWidth};`; maw = true; }
					if ( p.minHeight != undefined ) { this._cd += `min-height:${p.minHeight};`; mih = true; }
					if ( p.minWidth != undefined ) this._cd += `min-width:${p.minWidth};`;
					if ( p.height != undefined ) this._cd += `height:${p.height};`;
					if ( p.width != undefined ) this._cd += `width:${p.width};`;
					if ( p.padding != undefined ) { this._cd += `padding:${p.padding};`; pad = true; }
					if ( p.paddingTop != undefined ) this._cd += `padding-top:${p.paddingTop};`;
					if ( p.paddingLeft != undefined ) this._cd += `padding-left:${p.paddingLeft};`;
					if ( p.paddingRight != undefined ) this._cd += `padding-right:${p.paddingRight};`;
					if ( p.paddingBottom != undefined ) this._cd += `padding-bottom:${p.paddingBottom};`;
					if ( p.margin != undefined ) this._cd += `margin:${p.margin};`;
					if ( p.marginTop != undefined ) this._cd += `margin-top:${p.marginTop};`;
					if ( p.marginLeft != undefined ) this._cd += `margin-left:${p.marginLeft};`;
					if ( p.marginRight != undefined ) this._cd += `margin-right:${p.marginRight};`;
					if ( p.marginBottom != undefined ) this._cd += `margin-bottom:${p.marginBottom};`;
				}
			}

			if ( mih == false )
				this._cd += `min-height: 200px;`;

			if ( mah == false )
				this._cd += `max-height: 300px;`;

			if ( maw == false )
				this._cd += `max-width: 200px;`;

			if ( pad == false )
				this._cd += `padding: 6px;`;

			if ( ovf == false )
				this._cd += `overflow: auto;`;

			this._cd += `"></div>`;

			if ( this._cl != "" )
				this._cd += `<div class = "title" id = "${this._id}.title"`;
			else
				this._cd += `<div id = "${this._id}.title"`;

			if ( this._cl == "" )
				this._cd += ` style = "width: ${size}; cursor: pointer; padding: 4px; writing-mode: vertical-rl; text-orientation: sideways; background-color: rgb( 130, 145, 190 );"`;
			else
				this._cd += ` style = "width: ${size}; cursor: pointer; padding: 4px; writing-mode: vertical-rl; text-orientation: sideways;"`;

			this._cd += ` onmousedown = "let o = document.getElementById('${this._id}.inner').style; if (o.display==='none') o.display='block'; else if (o.display==='block') o.display='none';"`;

			if ( text != "" )
				this._cd += `>${text}</div>`;
			else
				this._cd += `></div>`;

			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = [
				document.getElementById(this._id),
				document.getElementById(this._id + ".title"),
				document.getElementById(this._id + ".inner")
			];

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".title").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".title").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".title").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".title").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".title").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".title").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".title").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".title").onkeyup = ey.callback; break;
					}
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".inner").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".inner").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".inner").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".inner").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".inner").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".inner").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".inner").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".inner").onkeyup = ey.callback; break;
					}
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Right-Side-Bar-Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	rSideBar : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let evnt = null;
			let attr = null;
			let size = '20px';

			let fix = false;
			let axe = false;
			let mih = false;
			let mah = false;
			let bkg = false;
			let txt = false;
			let shd = false;
			let bdr = false;
			let pad = false;
			let maw = false;
			let ovf = false;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						text = arguments[0];
						break;
					case 2:
						text = arguments[0];
						attr = arguments[1];
						break;
					case 3:
						text = arguments[0];
						attr = arguments[1];
						size = arguments[2];
						break;
					case 4:
						text = arguments[0];
						attr = arguments[1];
						size = arguments[2];
						evnt = arguments[3];
						break;
				}
			}

			this._ev = evnt;
			this._cd += `<div `;
			this._cd += ` id = "${this._id}" `;

			if ( this._cl != "" )
				this._cd += ` class = "${this._cl}" style = "overflow: auto;`;
			else
				this._cd += ` style = "overflow: auto; max-height: 300px;`;

			this._cd += `z-index:${__kip_z_order_idx}; display: flex;`;

			__kip_z_order_idx++;

			if ( attr != null )
			{
				for ( let p of attr )
				{
					if ( p.position != undefined ) { this._cd += `position: ${p.position};`; fix = true; }
					if ( p.opacity != undefined ) this._cd += `opacity:${p.opacity};`;
					if ( p.shadow != undefined ) { this._cd += `box-shadow:${p.shadow};`; shd = true; }
					if ( p.border != undefined ) { this._cd += `border:${p.border};`; bdr = true; }
					if ( p.borderTop != undefined ) { this._cd += `border-top:${p.borderTop};`; bdr = true; }
					if ( p.borderLeft != undefined ) { this._cd += `border-left:${p.borderLeft};`; bdr = true; }
					if ( p.borderRight != undefined ) { this._cd += `border-right:${p.borderRight};`; bdr = true; }
					if ( p.borderBottom != undefined ) { this._cd += `border-bottom:${p.borderBottom};`; bdr = true; }
					if ( p.textColor != undefined ) { this._cd += `color:${p.textColor};`; txt = true; }
					if ( p.backColor != undefined ) { this._cd += `background-color:${p.backColor};`; bkg = true; }
					if ( p.top != undefined ) { this._cd += `border-top:${p.top};`; axe = true; }
					if ( p.bottom != undefined ) this._cd += `border-bottom:${p.bottom};`;
				}
			}

			if ( fix == false )
				this._cd += `position: fixed;`;

			if ( axe == false )
				this._cd += `top: 80px;`;

			this._cd += `right: 0;`;

			if ( bkg == false )
				this._cd += `background-color: rgb( 235, 235, 235 );`;

			if ( txt == false )
				this._cd += `color: #000;`;

			if ( shd == false )
				this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.08 );`;

			if ( bdr == false )
				this._cd += `border: 1px solid rgb( 160, 164, 168 );`;

			this._cd += `">`;

			if ( this._cl != "" )
				this._cd += `<div class = "title" id = "${this._id}.title"`;
			else
				this._cd += `<div id = "${this._id}.title"`;

			if ( this._cl == "" )
				this._cd += ` style = "width: ${size}; cursor: pointer; padding: 4px; writing-mode: vertical-rl; text-orientation: sideways; background-color: rgb( 130, 145, 190 );"`;
			else
				this._cd += ` style = "width: ${size}; cursor: pointer; padding: 4px; writing-mode: vertical-rl; text-orientation: sideways;"`;

			this._cd += ` onmousedown = "let o = document.getElementById('${this._id}.inner').style; if (o.display==='none') o.display='block'; else if (o.display==='block') o.display='none';"`;

			if ( text != "" )
				this._cd += `>${text}</div>`;
			else
				this._cd += `></div>`;

			this._cd += `<div class = "inner" id = "${this._id}.inner" style = "display:none;`;

			if ( attr != null )
			{
				for ( let p of attr )
				{
					if ( p.overFlow != undefined ) { this._cd += `overflow:${p.overFlow};`; ovf = true; }
					if ( p.maxHeight != undefined ) { this._cd += `max-height:${p.maxHeight};`; mah = true; }
					if ( p.maxWidth != undefined ) { this._cd += `max-width:${p.maxWidth};`; maw = true; }
					if ( p.minHeight != undefined ) { this._cd += `min-height:${p.minHeight};`; mih = true; }
					if ( p.minWidth != undefined ) this._cd += `min-width:${p.minWidth};`;
					if ( p.height != undefined ) this._cd += `height:${p.height};`;
					if ( p.width != undefined ) this._cd += `width:${p.width};`;
					if ( p.padding != undefined ) { this._cd += `padding:${p.padding};`; pad = true; }
					if ( p.paddingTop != undefined ) this._cd += `padding-top:${p.paddingTop};`;
					if ( p.paddingLeft != undefined ) this._cd += `padding-left:${p.paddingLeft};`;
					if ( p.paddingRight != undefined ) this._cd += `padding-right:${p.paddingRight};`;
					if ( p.paddingBottom != undefined ) this._cd += `padding-bottom:${p.paddingBottom};`;
					if ( p.margin != undefined ) this._cd += `margin:${p.margin};`;
					if ( p.marginTop != undefined ) this._cd += `margin-top:${p.marginTop};`;
					if ( p.marginLeft != undefined ) this._cd += `margin-left:${p.marginLeft};`;
					if ( p.marginRight != undefined ) this._cd += `margin-right:${p.marginRight};`;
					if ( p.marginBottom != undefined ) this._cd += `margin-bottom:${p.marginBottom};`;
				}
			}

			if ( mih == false )
				this._cd += `min-height: 200px;`;

			if ( mah == false )
				this._cd += `max-height: 300px;`;

			if ( maw == false )
				this._cd += `max-width: 200px;`;

			if ( pad == false )
				this._cd += `padding: 6px;`;

			if ( ovf == false )
				this._cd += `overflow: auto;`;

			this._cd += `"></div>`;

			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = [
				document.getElementById(this._id),
				document.getElementById(this._id + ".title"),
				document.getElementById(this._id + ".inner")
			];

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id).onkeydown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".title").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".title").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".title").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".title").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".title").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".title").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".title").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".title").onkeyup = ey.callback; break;
					}
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".inner").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".inner").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".inner").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".inner").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".inner").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".inner").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".inner").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".inner").onkeyup = ey.callback; break;
					}
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

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Tree Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	tree : function () {


		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";
		this._nd = 0;
		this._itm = [];

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.begin = function () {

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						this.attr = arguments[0];
						break;
					case 2:
						this.attr = arguments[0];
						this._ev = arguments[1];
						break;
				}
			}

			if ( this._cl )
				this._cd += `<div id = "${this._id}" class = "${this._cl}">`;
			else
				this._cd += `<div id = "${this._id}" style = "box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.08 );">`;

		}

		this.node = function () {

			let key = "";
			let txt = "";
			let ico = "";
			let nde =  0;
			let nix =  0;

			for ( let x = 0; x < this._nd; x++ )
				nix += 5;

			this._nd++;

			switch( arguments.length )
			{
				case 1:
					key = arguments[0];
					break;
				case 2:
					key = arguments[0];
					txt = arguments[1];
					break;
				case 3:
					key = arguments[0];
					txt = arguments[1];
					ico = arguments[2];
					break;
			}

			for ( let x = 0; x < this._nd; x++ )
				nde += 5;

			if ( key != "" && txt != "" )
			{
				this._cd += `<div><div style = "cursor: pointer; display: flex; align-items: center; text-align: left; padding-left:${nix}px; width: 100%;" `;
				this._cd += `class = "node" id = "${this._id}.${key}.node" `;
				this._cd += `onclick = "__kpi_disp_swi('${this._id}.${key}.down','${this._id}.${key}.left','${this._id}.${key}.area');">`;
				// *** //
				this._cd += `<div style = "margin-right: 10px; padding-left:${nde}px;">`;
				// *** //
				this._cd += `   <div id = "${this._id}.${key}.down" style = "display:block;"><div style = "display:flex;">`;
				this._cd += `      <div style = "background-color:#000;height:7px;width:1px;font-size:1px;margin: auto 0;"></div>`;
				this._cd += `      <div style = "background-color:#000;height:5px;width:1px;font-size:1px;margin: auto 0;"></div>`;
				this._cd += `      <div style = "background-color:#000;height:3px;width:1px;font-size:1px;margin: auto 0;"></div>`;
				this._cd += `      <div style = "background-color:#000;height:1px;width:1px;font-size:1px;margin: auto 0;"></div>`;
				this._cd += `   </div></div>`;
				// *** //
				this._cd += `   <div id = "${this._id}.${key}.left" style = "display:none;">`;
				this._cd += `      <div style = "background-color:#000;width:7px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
				this._cd += `      <div style = "background-color:#000;width:5px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
				this._cd += `      <div style = "background-color:#000;width:3px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
				this._cd += `      <div style = "background-color:#000;width:1px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
				this._cd += `   </div>`;
				// *** //
				this._cd += `</div>`;
				// *** //
				if ( ico != "" )
					this._cd += `<img src = "${ico}" style = "margin-right: 10px;" />`;
				// *** //
				this._cd += `<div>${txt}</div>`;
				// *** //
				this._cd += `</div></div>`;
				// *** //
				this._cd += `<div id = "${this._id}.${key}.area" style = "display:none;">`;
			}

		}

		this.ends = function () {

			this._nd--;

			this._cd += `</div>`;

		}

		this.item = function () {

			let key = "";
			let txt = "";
			let ico = "";
			let nde =  0;

			switch( arguments.length )
			{
				case 1:
					key = arguments[0];
					break;
				case 2:
					key = arguments[0];
					txt = arguments[1];
					break;
				case 3:
					key = arguments[0];
					txt = arguments[1];
					ico = arguments[2];
					break;
			}

			for ( let x = 0; x < this._nd; x++ )
				nde += 5;

			nde += 30;

			if ( key != "" && txt != "" )
			{
				this._itm.push( `${this._id}.${key}` );
				// *** //
				this._cd += `<div style = "cursor: pointer; display: flex; align-items: center; text-align: left; padding-left: ${nde}px; width: 100%;" class = "item" id = "${this._id}.${key}">`;
				// *** //
				if ( ico != "" )
					this._cd += `<img src = "${ico}" style = "margin-right: 10px;" />`;
				// *** //
				this._cd += `<div>${txt}</div>`;
				// *** //
				this._cd += `</div>`;
			}

		}

		this.close = function () {

			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
			{
				for ( let e of this._itm )
					document.getElementById(e).onkeydown = this._ev;
			}
			else
			{
				for ( let ey of this._ev )
				{
					for ( let e of this._itm )
					{
						switch ( ey.event )
						{
							case 'mousedown': document.getElementById(e).onmousedown = ey.callback; break;
							case 'mouseover': document.getElementById(e).onmouseover = ey.callback; break;
							case 'mouseout': document.getElementById(e).onmouseout = ey.callback; break;
							case 'mouseup': document.getElementById(e).onmouseup = ey.callback; break;
							case 'gotfocus': document.getElementById(e).onfocus = ey.callback; break;
							case 'lostfocus': document.getElementById(e).onblur = ey.callback; break;
							case 'keydown': document.getElementById(e).onkeydown = ey.callback; break;
							case 'keyup': document.getElementById(e).onkeyup = ey.callback; break;
						}
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Combo-Box Component that is editable
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	comboInput : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._itm = [];
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;
			let itms = [];

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						itms = arguments[0];
						break;
					case 2:
						itms = arguments[0];
						plhd = arguments[1];
						break;
					case 3:
						itms = arguments[0];
						plhd = arguments[1];
						evnt = arguments[2];
						break;
					case 4:
						itms = arguments[0];
						plhd = arguments[1];
						text = arguments[2];
						evnt = arguments[3];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl == "" )
			{
				this._cl = this._id;
				// *** //
				this._cd += '<style>';
				this._cd += `.${this._cl} {`;
				this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
				this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.06 );`;
				this._cd += `border: 1px solid rgb( 160, 164, 168 );`;
				this._cd += `width: 100%;`;
				this._cd += `}`;
				this._cd += `.${this._cl} .field {`;
				this._cd += `box-shadow: inset 4px 4px 4px rgba( 0, 0, 0, 0.06 );`;
				this._cd += `background-color: #fff;`;
				this._cd += `line-height: 22px;`;
				this._cd += `text-align: left;`;
				this._cd += `font-size: 12px;`;
				this._cd += `height: 22px;`;
				this._cd += `border: none;`;
				this._cd += `padding: 4px;`;
				this._cd += `width: 100%;`;
				this._cd += `}`;
				this._cd += `.${this._cl} .button {`;
				this._cd += `border-left: 1px solid rgb( 160, 164, 168 );`;
				this._cd += `align-items: center;`;
				this._cd += `padding: 4px 10px;`;
				this._cd += `cursor: pointer;`;
				this._cd += `display: flex;`;
				this._cd += `height: 22px;`;
				this._cd += `}`;
				this._cd += `.${this._cl} .button:hover {`;
				this._cd += `background-image: linear-gradient(rgb( 251, 254, 255 ), rgb( 225, 225, 225 ));`;
				this._cd += `}`;
				this._cd += `.${this._cl} .button:active {`;
				this._cd += `background-image: linear-gradient(rgb( 225, 225, 225 ), rgb( 251, 254, 255 ));`;
				this._cd += `}`;
				this._cd += '</style>';
			}

			this._cd += `<div class = "${this._cl}" id = "${this._id}" style = "display: flex; align-items: center; justify-content: flex-start;">`;
			this._cd += `<input class = "field" type = "input" id = "${this._id}.field" placeholder = "${plhd}" value = "${text}" />`;
			this._cd += `<div class = "button"><div id = "${this._id}.button">`;
			this._cd += `  <div style = "background-color:#000;width:9px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:7px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:5px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:3px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:1px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `</div></div>`;
			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id + ".button").onkeydown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".button").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".button").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".button").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".button").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".button").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".button").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".button").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".button").onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Combo-Box Component that is read-only
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	combo : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._itm = [];
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let text = "";
			let plhd = "";
			let evnt = null;
			let itms = [];

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						itms = arguments[0];
						break;
					case 2:
						itms = arguments[0];
						plhd = arguments[1];
						break;
					case 3:
						itms = arguments[0];
						plhd = arguments[1];
						evnt = arguments[2];
						break;
					case 4:
						itms = arguments[0];
						plhd = arguments[1];
						text = arguments[2];
						evnt = arguments[3];
						break;
				}
			}

			this._ev = evnt;

			if ( this._cl == "" )
			{
				this._cl = this._id;
				// *** //
				this._cd += '<style>';
				this._cd += `.${this._cl} {`;
				this._cd += `background-image: linear-gradient(rgb( 249, 251, 253 ), rgb( 235, 235, 235 ));`;
				this._cd += `box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.06 );`;
				this._cd += `border: 1px solid rgb( 160, 164, 168 );`;
				this._cd += `cursor: pointer;`;
				this._cd += `width: 100%;`;
				this._cd += `}`;
				this._cd += `.${this._cl}:hover {`;
				this._cd += `background-image: linear-gradient(rgb( 251, 254, 255 ), rgb( 225, 225, 225 ));`;
				this._cd += `}`;
				this._cd += `.${this._cl}:active {`;
				this._cd += `background-image: linear-gradient(rgb( 225, 225, 225 ), rgb( 251, 254, 255 ));`;
				this._cd += `}`;
				this._cd += `.${this._cl} .field {`;
				this._cd += `line-height: 22px;`;
				this._cd += `text-align: left;`;
				this._cd += `font-size: 12px;`;
				this._cd += `height: 22px;`;
				this._cd += `border: none;`;
				this._cd += `padding: 4px;`;
				this._cd += `width: 100%;`;
				this._cd += `}`;
				this._cd += `.${this._cl} .button {`;
				this._cd += `align-items: center;`;
				this._cd += `padding: 4px 10px;`;
				this._cd += `display: flex;`;
				this._cd += `height: 22px;`;
				this._cd += `}`;
				this._cd += '</style>';
			}

			this._cd += `<div class = "${this._cl}" id = "${this._id}" style = "display: flex; align-items: center; justify-content: flex-start;">`;
			this._cd += `<div class = "field" type = "input" id = "${this._id}.field" title = "${plhd}">${text}</div>`;
			this._cd += `<div class = "button"><div id = "${this._id}.button">`;
			this._cd += `  <div style = "background-color:#000;width:9px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:7px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:5px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:3px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `  <div style = "background-color:#000;width:1px;height:1px;font-size:1px;margin: 0 auto;"></div>`;
			this._cd += `</div></div>`;
			this._cd += `</div>`;

		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			if ( Array.isArray(this._ev) === false )
				document.getElementById(this._id + ".button").onkeydown = this._ev;
			else
			{
				for ( let ey of this._ev )
				{
					switch ( ey.event )
					{
						case 'mousedown': document.getElementById(this._id + ".button").onmousedown = ey.callback; break;
						case 'mouseover': document.getElementById(this._id + ".button").onmouseover = ey.callback; break;
						case 'mouseout': document.getElementById(this._id + ".button").onmouseout = ey.callback; break;
						case 'mouseup': document.getElementById(this._id + ".button").onmouseup = ey.callback; break;
						case 'gotfocus': document.getElementById(this._id + ".button").onfocus = ey.callback; break;
						case 'lostfocus': document.getElementById(this._id + ".button").onblur = ey.callback; break;
						case 'keydown': document.getElementById(this._id + ".button").onkeydown = ey.callback; break;
						case 'keyup': document.getElementById(this._id + ".button").onkeyup = ey.callback; break;
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Menu-Bar Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	menu : {},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Spin-Box Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	spin : {},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Image-Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	image : {},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Footer Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	footer : {},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * DropDown-Button Component
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	ddbtn : {},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Sheet
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	sheet : function () {

		this._id = "kpi_component_" + __kpi_temp_counter;
									  __kpi_temp_counter++;

		this._co = 0;
		this._rw = 0;
		this._cd = "";
		this._ev = null;
		this.attr = null;
		this._cl = "";

		this.setClass = function ( name ) {

			this._cl = name;

		}

		this.create = function () {

			let headr = 0;

			if ( arguments.length > 0 )
			{
				switch ( arguments.length )
				{
					case 1:
						this._ev = arguments[0];
						break;
					case 2:
						headr = arguments[0];
						this._ev = arguments[1];
						break;
					case 3:
						this._co = arguments[0];
						this._rw = arguments[1];
						this._ev = arguments[2];
						break;
					case 4:
						headr = arguments[0];
						this._co = arguments[1];
						this._rw = arguments[2];
						this._ev = arguments[3];
						break;
				}
			}

			if ( this._cl )
				this._cd += `<div id = "${this._id}" class = "${this._cl}">`;
			else
				this._cd += `<div id = "${this._id}">`;

			this._cd += `<table>`;

			for ( let r = 0; r < this._rw; r++ )
			{
				this._cd += `<tr>`;
				// *** //
				for ( let c = 0; c < this._co; c++ )
				{
					switch( headr )
					{
						case 1:
							if ( c == 0 && r == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else if ( r == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else
								this._cd += `<td id = "${this._id}.${c}.${r}"></td>`;
							// *** //
							break;
						case 2:
							if ( c == 0 && r == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else if ( c == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else
								this._cd += `<td id = "${this._id}.${c}.${r}"></td>`;
							// *** //
							break;
						case 3:
							if ( r == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else if ( c == 0 )
								this._cd += `<th id = "${this._id}.${c}.${r}"></th>`;
							else
								this._cd += `<td id = "${this._id}.${c}.${r}"></td>`;
							// *** //
							break;
						default:
							this._cd += `<td id = "${this._id}.${c}.${r}"></td>`;
							// *** //
							break;
					}
				}
				// *** //
				this._cd += `</tr>`;
			}

			this._cd += `</table></div>`;

		}

		this.cell = function (col, row) {
			const item = document.getElementById(`${this._id}.${col}.${row}`);
			// *** //
			if ( item )
				return item;
			else
				return null;
		}

		this.get = function () {

			return this._cd;

		}

		this.init = function () {

			this.attr = document.getElementById(this._id);

			for ( let r = 0; r < this._rw; r++ )
			{
				for ( let c = 0; c < this._co; c++ )
				{
					if ( Array.isArray(this._ev) === false )
						document.getElementById(this._id+'.'+c+'.'+r).onmousedown = ey.callback;
					else
					{
						for ( let ey of this._ev )
						{
							switch ( ey.event )
							{
								case 'mousedown': document.getElementById(this._id+'.'+c+'.'+r).onmousedown = ey.callback; break;
								case 'mouseover': document.getElementById(this._id+'.'+c+'.'+r).onmouseover = ey.callback; break;
								case 'mouseout': document.getElementById(this._id+'.'+c+'.'+r).onmouseout = ey.callback; break;
								case 'mouseup': document.getElementById(this._id+'.'+c+'.'+r).onmouseup = ey.callback; break;
								case 'gotfocus': document.getElementById(this._id+'.'+c+'.'+r).onfocus = ey.callback; break;
								case 'lostfocus': document.getElementById(this._id+'.'+c+'.'+r).onblur = ey.callback; break;
								case 'keydown': document.getElementById(this._id+'.'+c+'.'+r).onkeydown = ey.callback; break;
								case 'keyup': document.getElementById(this._id+'.'+c+'.'+r).onkeyup = ey.callback; break;
							}
						}
					}
				}
			}

		}

	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Graphic operations onto a Canvas-Element
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	graphics : {

		sketch : function () {

			this._tp = "kpi_component_" + __kpi_temp_counter;
									      __kpi_temp_counter++;

			this._cv = null;
			this._ct = null;
			this._rs = false;
			this._md = false;

			this.mode = 0;

			this.fx = 0;
			this.fy = 0;
			this.cx = 0;
			this.cy = 0;

			this.color = "#000";

			this.init = function (id) {

				this._cv = document.getElementById(id);
				this._ct = this._cv.getContext("2d");

				this._cv.addEventListener
				(
					'mousedown', 
					(evt) => 
					{
						const rect = this._cv.getBoundingClientRect();
						const sclX = this._cv.width / rect.width;
						const sclY = this._cv.height / rect.height;
						this.fx = (evt.clientX - rect.left) * sclX;
						this.fy = (evt.clientY - rect.top) * sclY;
						this.cx = this.fx;
						this.cy = this.fy;
					}
				);

				this._cv.addEventListener
				(
					'mousemove', 
					(evt) => 
					{
						if ( this._md === true )
						{
							const rect = this._cv.getBoundingClientRect();
							const sclX = this._cv.width / rect.width;
							const sclY = this._cv.height / rect.height;
							this.cx = (evt.clientX - rect.left) * sclX;
							this.cy = (evt.clientY - rect.top) * sclY;
						}
					}
				);
	
			}

			this.start = function () {

				this._md = true;

			}

			this.strip = function () {

				this._md = false;
				this.fx = 0;
				this.fy = 0;
				this.cx = 0;
				this.cy = 0;

			}

			this.save = function () {

				if ( this._ct )
					this._ct.save();

			}

			this.autoClear = function ( bool ) {
				if ( bool === false || bool === true )
					this._rs = bool;
			}

			this.clear = function () {

				if ( this._ct && this._cv )
					this._ct.clearRect( 0, 0, this._cv.width, this._cv.height );

			}

			this.image = function () {

				if ( arguments.length > 0 && this._ct )
				{
					switch( arguments.length )
					{
						case 1:
							if ( arguments[0] != null )
								this._ct.drawImage( arguments[0], 0, 0 );
							break;
						case 3:
							if ( arguments[0] != null )
								this._ct.drawImage( arguments[0], arguments[1], arguments[2] );
							break;
					}
				}

			}

			this.circle = function () {

				let bool = false, ax = 0, ay = 0;
				let x1 = 0, x2 = 0, y1 = 0, y2 = 0, cc = this.color;

				if ( this._ct )
				{
					switch ( arguments.length )
					{
						case 0:
							bool = true;
							x1 = 0;
							x2 = 100;
							y1 = 0;
							y2 = 100;
							break;
						case 1:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[0];
							break;
						case 2:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[1];
							break;
						case 3:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[2];
							break;
						case 4:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							break;
						case 5:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							cc = arguments[4];
							break;
					}
					// *** //
					this._ct.beginPath();
					this._ct.fillStyle = cc;
					// *** //
					if ( x2 > x1 ) ax = x2 - x1; else ax = x1 - x2;
					if ( y2 > y1 ) ay = y2 - y1; else ay = y1 - y2;
					// *** //
					this._ct.ellipse( x1, y1, ax, ay, 0, 90, 90 );
					this._ct.fill();
					if (this._rs === true ) this._ct.restore();
				}

			}

			this.circularFrame = function () {

				let bool = false, ax = 0, ay = 0;
				let x1 = 0, x2 = 0, y1 = 0, y2 = 0, cc = this.color;

				if ( this._ct )
				{
					switch ( arguments.length )
					{
						case 0:
							bool = true;
							x1 = 0;
							x2 = 100;
							y1 = 0;
							y2 = 100;
							break;
						case 1:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[0];
							break;
						case 2:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[1];
							break;
						case 3:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[2];
							break;
						case 4:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							break;
						case 5:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							cc = arguments[4];
							break;
					}
					// *** //
					this._ct.beginPath();
					this._ct.strokeStyle = cc;
					// *** //
					if ( x2 > x1 ) ax = x2 - x1; else ax = x1 - x2;
					if ( y2 > y1 ) ay = y2 - y1; else ay = y1 - y2;
					// *** //
					this._ct.ellipse( x1, y1, ax, ay, 0, 90, 90 );
					this._ct.stroke();
					if (this._rs === true ) this._ct.restore();
				}

			}

			this.box = function () {

				let bool = false;
				let x1 = this.fx, x2 = this.cx, y1 = this.fy, y2 = this.cy, cc = this.color;

				if ( this._ct )
				{
					switch ( arguments.length )
					{
						case 0:
							bool = true;
							x1 = 0;
							x2 = 100;
							y1 = 0;
							y2 = 100;
							break;
						case 1:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[0];
							break;
						case 2:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[1];
							break;
						case 3:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[2];
							break;
						case 4:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							break;
						case 5:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							cc = arguments[4];
							break;
					}
					// *** //
					this._ct.fillStyle = cc;
					this._ct.fillRect( x1, y1, x2 - x1, y2 - y1 );
					if (this._rs === true ) this._ct.restore();
				}

			}

			this.frame = function () {

				let bool = false;
				let x1 = this.fx, x2 = this.cx, y1 = this.fy, y2 = this.cy, cc = this.color;

				if ( this._ct )
				{
					switch ( arguments.length )
					{
						case 0:
							bool = true;
							x1 = 0;
							x2 = 100;
							y1 = 0;
							y2 = 100;
							break;
						case 1:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[0];
							break;
						case 2:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[1];
							break;
						case 3:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[2];
							break;
						case 4:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							break;
						case 5:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							cc = arguments[4];
							break;
					}
					// *** //
					this._ct.strokeStyle = cc;
					this._ct.strokeRect( x1, y1, x2 - x1, y2 - y1 );
					if (this._rs === true ) this._ct.restore();
				}

			}

			this.line = function () {

				let bool = false;
				let x1 = this.fx, x2 = this.cx, y1 = this.fy, y2 = this.cy, cc = this.color;

				if ( this._ct )
				{
					switch ( arguments.length )
					{
						case 0:
							bool = true;
							x1 = 0;
							x2 = 100;
							y1 = 0;
							y2 = 100;
							break;
						case 1:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[0];
							break;
						case 2:
							bool = true;
							x1 = 0;
							y1 = 0;
							x2 = arguments[0];
							y2 = arguments[1];
							break;
						case 3:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[2];
							break;
						case 4:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							break;
						case 5:
							bool = true;
							x1 = arguments[0];
							y1 = arguments[1];
							x2 = arguments[2];
							y2 = arguments[3];
							cc = arguments[4];
							break;
					}
					// *** //
					this._ct.beginPath()
					this._ct.strokeStyle = cc;
					this._ct.moveTo( x1, y1 );
					this._ct.lineTo( x2, y2 );
					this._ct.stroke();
					if (this._rs === true ) this._ct.restore();
				}

			}

			this.getImage = function () {

				if (document.getElementById(this._tp))
					return document.getElementById(this._tp);
				else
					return null;

			}

			this.getPNG = function () {

				if (this._cv)
				{
					let out = this._cv.toDataURL("image/png");
					document.getElementById('kpi_hidden_temp_field').innerHTML = `<img id="${this._tp}" src="${out}" />`;
					return out;
					//return this._cv.toDataURL("image/png");
				}
				else
					return null;

			}

			this.getJPG = function () {

				if (this._cv)
					return this._cv.toDataURL("image/jpg");
				else
					return null;

			}

		},

		text : function () {

			this.font = "";

			this._tw = 0;
			this._th = 0;

			this.text = "";

			this.mirror = function () {
				
			}

			this.rotate = function ( angle ) {
				
			}

			this.flipV = function ( imageObject ) {
				
			}

			this.flipH = function ( imageObject ) {
				
			}

		},

		image : function () {

			this.grab = function( source, target, x, y, w, h ) {

			}

			this.grabNDraw = function( source, target, x, y, w, h, dx, dy ) {
				
			}
	
			this.download = function ( imageObject ) {
				
			}
	
			this.rotate = function ( imageObject, angle ) {
				
			}

			this.flipV = function ( imageObject ) {
				
			}

			this.flipH = function ( imageObject ) {
				
			}
	
			this.grayScale = function ( imageObject, targetObject ) {
				
			}
	
		}

	}

};
