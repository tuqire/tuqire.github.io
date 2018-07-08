webpackJsonp([0],[,,function(e,t,i){"use strict";(function(e){function i(){return window.innerWidth>1100?170:window.innerWidth>700?100:window.innerWidth>500?85:50}function n(t){var i=t.data,n=t.tWidth,a=t.tHeight,o=t.format,r=t.filterType,s=new e.DataTexture(i,n,a,o,e.FloatType);return s.minFilter=s.magFilter=r,s.needsUpdate=!0,s.flipY=!1,s}t.b=i,t.a=n}).call(t,i(0))},,,function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),o=i.n(a),r=i(6),s=i(3),u=i.n(s),h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.particles,t.scene;n(this,e),this.gui=new u.a.GUI}return h(e,[{key:"addBgControls",value:function(e){this.gui.addColor(e,"bgColorTop"),this.gui.addColor(e,"bgColorBottom")}},{key:"addTextControls",value:function(e){this.gui.add(e,"font",Object.keys(fonts)).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"fontSize").min(10).max(200).step(5).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"textAlign",["left","center"]).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"textSizeMultiplier").min(1).max(1e3).step(10).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"topSpeed").min(.1).max(10).step(.1).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"acceleration").min(1e-5).max(.01).step(1e-5).onFinishChange(function(){e.updateParticleVars()})}},{key:"addMouseControls",value:function(e){this.gui.add(e,"hoverDist").min(0).max(.5).step(.01).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"hoverSizeInc").min(0).max(.03).step(.001).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"hoverMaxSizeMultiplier").min(1).max(3).step(.05).onFinishChange(function(){e.updateParticleVars()})}},{key:"addSizeControls",value:function(e){this.gui.add(e,"minSize").min(.01).max(.04).step(.001).onFinishChange(function(){e.minSize>e.maxSize&&(e.minSize=e.maxSize),e.updateSizes()}),this.gui.add(e,"maxSize").min(.01).max(.04).step(.001).onFinishChange(function(){e.maxSize<e.minSize&&(e.maxSize=e.minSize),e.updateSizes()}),this.gui.add(e,"sizeInc").min(1e-5).max(2e-4).step(1e-5).onFinishChange(function(){e.updateSizes()}),this.gui.add(e,"sizeRange").min(0).max(.02).step(5e-4).onFinishChange(function(){e.updateSizes()}),this.gui.add(e,"skew").min(1).max(100).step(1).onFinishChange(function(){e.updateSizes()})}},{key:"addColourStrengthControls",value:function(e){this.gui.add(e,"brightness").min(.1).max(3).step(.05).onFinishChange(function(){e.updateColours()})}},{key:"addOpacityControls",value:function(e){this.gui.add(e,"opacity").min(.1).max(1.5).step(.05).onFinishChange(function(){e.updateColours()})}}]),e}(),l=d,c=i(9),v=i(10),f=i(11);document.addEventListener("DOMContentLoaded",function(){if(o.a){var e=document.getElementById("stars-simulation-container"),t=new c.a({container:e}),i=new v.a,n=new f.a({scene:i,renderer:t,numParticles:window.matchMedia("(max-width: 480px)").matches?4e3:2e5,radius:3,minSize:.015,maxSize:.03,sizeRange:.003,sizeInc:5e-5,skew:35,brightness:.9,opacity:1}),a=new r.a({aspectRatio:1,particles:n,position:{x:0,y:.001,z:-1.37}}),s=(new l({particles:n}),function(){n.update(),t.render({scene:i.get(),camera:a.get()})});!function e(){requestAnimationFrame(e),s()}()}else{document.getElementById("info").innerHTML="Your browser is not supported. Please use the latest version of Firefox or Chrome."}})},function(e,t,i){"use strict";(function(e){function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=i(2),r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function t(i){var o=i.particles,r=i.fov,s=void 0===r?400:r,u=i.aspectRatio,h=void 0===u?window.innerWidth/window.innerHeight:u,d=i.near,l=void 0===d?.1:d,c=i.far,v=void 0===c?2e3:c,f=i.position,m=void 0===f?{x:0,y:0,z:0}:f,g=i.up,p=void 0===g?[0,0,1]:g;a(this,t),this.particles=o,this.particles.setCameraZ(m.z),this.camera=new e.PerspectiveCamera(s,h,l,v),this.up=p,this.setPosition(m),this.setUp.apply(this,n(this.up)),this.setLookAt()}return r(t,[{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.setZ(window.innerHeight/Object(o.b)()),this.camera.updateProjectionMatrix()}},{key:"setUp",value:function(e,t,i){this.camera.up.set(e,t,i)}},{key:"setPosition",value:function(e){var t=e.x,i=void 0===t?this.camera.position.x:t,n=e.y,a=void 0===n?this.camera.position.y:n,o=e.z,r=void 0===o?this.camera.position.z:o;this.setX(i),this.setY(a),this.setZ(r)}},{key:"setX",value:function(e){this.camera.position.x=e,this.setLookAt()}},{key:"setY",value:function(e){this.camera.position.y=e,this.setLookAt()}},{key:"setZ",value:function(e){this.camera.position.z=e,this.setLookAt(),this.setUp(0,0,1),this.particles.setCameraZ(e)}},{key:"setLookAt",value:function(){this.camera.lookAt(new e.Vector3(0,0,0))}},{key:"get",value:function(){return this.camera}},{key:"getPosition",value:function(){return this.camera.position}},{key:"getZ",value:function(){return this.camera.position.z}}]),t}();t.a=s}).call(t,i(0))},,,function(e,t,i){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function t(n){var a=n.alpha,o=void 0===a||a,r=n.pixelRatio,s=void 0===r?window.devicePixelRatio:r,u=n.width,h=void 0===u?window.innerWidth:u,d=n.height,l=void 0===d?window.innerHeight:d,c=n.container;i(this,t),this.renderer=new e.WebGLRenderer({alpha:o});var v=this.renderer.context;v.enable(v.BLEND),v.blendFunc(v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA),this.setPixelRatio(s),this.setSize(h,l),c.appendChild(this.getDomElement()),window.addEventListener("resize",this.onWindowResize.bind(this))}return n(t,[{key:"getDomElement",value:function(){return this.renderer.domElement}},{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t)}},{key:"setPixelRatio",value:function(e){this.renderer.setPixelRatio(e)}},{key:"setSize",value:function(e,t){this.renderer.setSize(e,t)}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scene,i=e.camera,n=e.renderTarget,a=void 0===n?null:n,o=e.force,r=void 0!==o&&o;this.renderer.render(t,i,a,r)}},{key:"get",value:function(){return this.renderer}}]),t}();t.a=a}).call(t,i(0))},function(e,t,i){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function t(){i(this,t),this.scene=new e.Scene}return n(t,[{key:"add",value:function(e){this.scene.add(e)}},{key:"remove",value:function(e){this.scene.remove(e)}},{key:"get",value:function(){return this.scene}}]),t}();t.a=a}).call(t,i(0))},function(e,t,i){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=i(4),o=i.n(a),r=i(2),s=i(13),u=i(14),h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),d=function(){function t(i){var a=this,o=i.scene,r=i.configUniforms,s=void 0===r?{color:{value:new e.Color(16777215)},sizeMultiplierForScreen:{value:window.innerHeight*window.devicePixelRatio/2},starImg:{value:(new e.TextureLoader).load("images/star.png")}}:r,u=i.blending,h=void 0===u?e.AdditiveBlending:u,d=i.transparent,l=void 0===d||d,c=i.depthTest,v=void 0===c||c,f=i.depthWrite,m=void 0!==f&&f,g=i.renderer,p=i.bgColorTop,w=void 0===p?"#000000":p,y=i.bgColorBottom,z=void 0===y?"#000000":y,b=i.numParticles,x=void 0===b?1e4:b,C=i.radius,S=void 0===C?100:C,P=i.minSize,k=void 0===P?1:P,F=i.maxSize,T=void 0===F?3:F,M=i.sizeRange,D=void 0===M?.5:M,U=i.sizeInc,B=void 0===U?.01:U,I=i.skew,O=void 0===I?1:I,W=i.brightness,H=void 0===W?1:W,R=i.opacity,A=void 0===R?1:R;n(this,t),this.renderer=g,this.bgColorTop=w,this.bgColorBottom=z,this.numParticles=x,this.radius=S,this.minSize=k,this.maxSize=T,this.sizeRange=D,this.sizeInc=B,this.skew=O,this.brightness=H,this.opacity=A,this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.video=document.createElement("video");var E=document.createElement("h1");E.innerHTML="Your browser is not supported. Please use Google Chrome (v21 or above).",navigator.getUserMedia?navigator.getUserMedia({video:{width:1280,height:720}},function(e){var t=a.video;t.src=URL.createObjectURL(e),t.width=480,t.height=480,t.autoplay=!0,a.addStars({scene:o,renderer:g,configUniforms:s,blending:h,transparent:l,depthTest:v,depthWrite:m})},function(){return console.error("video failed to load")}):document.getElementsByTagName("body")[0].append(E),window.addEventListener("resize",this.onWindowResize.bind(this))}return h(t,[{key:"addStars",value:function(t){var i=t.scene,n=t.renderer,a=t.configUniforms,r=t.blending,h=t.transparent,d=t.depthTest,l=t.depthWrite,c=this.tHeight=Math.ceil(Math.sqrt(this.numParticles)),v=this.tWidth=c;this.numParticles=v*c;var f=this.videoImage=document.createElement("canvas");this.videoImageContext=f.getContext("2d");var m=this.videoTexture=new e.Texture(f);m.minFilter=m.magFilter=e.NearestFilter,m.needsUpdate=!0;var g=this.videoDiffImage=document.createElement("canvas");this.videoDiffImageContext=g.getContext("2d");var p=this.videoDiffTexture=new e.Texture(g);p.minFilter=p.magFilter=e.NearestFilter,p.needsUpdate=!0,document.querySelector("body").appendChild(f),document.querySelector("body").appendChild(g),this.positions=new Float32Array(3*this.numParticles),this.sizeFBO=new o.a({tWidth:v,tHeight:c,renderer:n.get(),uniforms:{tPosition:{type:"t",value:0},tDefaultSize:{type:"t",value:0},tWebcam:{type:"t",value:p},sizeRange:{type:"f",value:this.sizeRange},sizeInc:{type:"f",value:this.sizeInc},hoverDist:{type:"f",value:this.hoverDist},hoverSizeInc:{type:"f",value:this.hoverSizeInc},hoverMaxSizeMultiplier:{type:"f",value:this.hoverMaxSizeMultiplier}},simulationVertexShader:s.b,simulationFragmentShader:s.a}),this.sizeFBO.setTextureUniform("tPosition",this.getPositions()),this.sizeFBO.setTextureUniform("tDefaultSize",this.getSizes());var w=Object.assign({},a,{tPosition:{type:"t",value:this.sizeFBO.simulationShader.uniforms.tPosition.value},tSize:{type:"t",value:this.sizeFBO.targets[0]},tWebcam:{type:"t",value:p},tColour:{type:"t",value:m}});this.material=new e.ShaderMaterial({uniforms:w,vertexShader:u.b,fragmentShader:u.a,blending:r,depthTest:d,depthWrite:l,transparent:h});for(var y=new e.Geometry,z=0;z<this.numParticles;z++){var b=new e.Vector3;b.x=z%v/v,b.y=Math.floor(z/v)/c,y.vertices.push(b)}this.particles=new e.Points(y,this.material),this.particles.frustumCulled=!1,i.add(this.get()),this.ready=!0}},{key:"onWindowResize",value:function(){this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2}},{key:"onMouseMove",value:function(e){var t=this.cameraZ/(2.8*this.windowHalfY),i=this.cameraZ/(2.65*this.windowHalfY),n=e.clientX-this.windowHalfX,a=this.windowHalfY-e.clientY;this.sizeFBO.simulationShader.uniforms.mouse.value.set(t*n,i*a,0)}},{key:"getPositions",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0,n=0;t<this.numParticles;t++,i+=3,n+=4){var a=this.calcPosition();this.positions[i]=e[n]=a[0],this.positions[i+1]=e[n+1]=a[1],this.positions[i+2]=e[n+2]=a[2],e[n+3]=1}return e}},{key:"calcPosition",value:function(){var e=this.radius,t=Math.random()-.5,i=Math.random()-.5,n=Math.pow(Math.random(),.6)*e*(1/Math.sqrt(Math.pow(t,2)+Math.pow(i,2)));return[t*n,i*n,0]}},{key:"getSizes",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0;t<this.numParticles;t++,i+=4)e[i+3]=this.calcSize();return e}},{key:"calcSize",value:function(){var e=this.maxSize-this.minSize;return this.minSize+e*Math.pow(Math.random(),this.skew)}},{key:"getColours",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0;t<this.numParticles;t++,i+=4){var n=this.calcColour();e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3]}return Object(r.a)({data:e,tWidth:this.tWidth,tHeight:this.tHeight,format:this.sizeFBO.format,filterType:this.sizeFBO.filterType})}},{key:"calcColour",value:function(){var e=this,t=Math.ceil(10*Math.random()),i=function(t,i,n,a){return[e.brightness*t/255,e.brightness*i/255,e.brightness*n/255,e.opacity]};switch(t){case 1:return i(155,176,255);case 2:return i(170,191,255);case 3:return i(202,215,255);case 4:return i(248,247,255);case 5:return i(255,244,234);case 6:return i(255,210,161);case 7:return i(255,204,111);default:return i(255,255,255)}}},{key:"update",value:function(){if(this.ready){var e=this.video,t=this.videoImageContext,i=this.videoDiffImageContext,n=this.videoImage,a=n.width,o=n.height,r=this.videoTexture,s=this.videoDiffTexture;if(e.readyState===e.HAVE_ENOUGH_DATA){t.drawImage(e,0,0,a,o),r.needsUpdate=!0;for(var u=t.getImageData(0,0,a,o),h=0;h<u.height;h++)for(var d=0;d<u.width;d++){var l=4*h*u.width+4*d,c=(u.data[l]+u.data[l+1]+u.data[l+2])/3;u.data[l]=c,u.data[l+1]=c,u.data[l+2]=c}for(var v=0;v<u.height;v+=1)for(var f=0;f<u.width;f+=1){var m=4*v*u.width+4*f,g=(u.data[m-3]+u.data[m+5]+u.data[m-4*u.width+1]+u.data[m+4*u.width+1]+u.data[m-4*u.width-3]+u.data[m+4*u.width-3]+u.data[m-4*u.width+5]+u.data[m+4*u.width+5])/4;u.data[m]-=g,u.data[m+1]-=g,u.data[m+2]-=g,u.data[m]*=1e3,u.data[m+1]*=1e3,u.data[m+2]*=1e3}i.putImageData(u,0,0,0,0,u.width,u.height),s.needsUpdate=!0}this.sizeFBO.simulate(),this.material.uniforms.tSize.value=this.sizeFBO.getCurrentFrame()}}},{key:"get",value:function(){return this.particles}},{key:"setCameraZ",value:function(e){this.cameraZ=e}},{key:"updateColours",value:function(){this.material.uniforms.tColour.value=this.getColours()}},{key:"updateSizes",value:function(){this.sizeFBO.simulationShader.uniforms.sizeRange.value=this.sizeRange,this.sizeFBO.simulationShader.uniforms.sizeInc.value=this.sizeInc,this.sizeFBO.setTextureUniform("tDefaultSize",this.getSizes())}},{key:"updateParticleVars",value:function(){this.sizeFBO.simulationShader.uniforms.hoverDist.value=this.hoverDist,this.sizeFBO.simulationShader.uniforms.hoverSizeInc.value=this.hoverSizeInc,this.sizeFBO.simulationShader.uniforms.hoverMaxSizeMultiplier.value=this.hoverMaxSizeMultiplier}},{key:"bgColorTop",get:function(){return this._bgColorTop},set:function(e){this._bgColorTop=e,document.getElementsByTagName("body")[0].style.background="linear-gradient("+this._bgColorTop+", "+this._bgColorBottom+")"}},{key:"bgColorBottom",get:function(){return this._bgColorBottom},set:function(e){this._bgColorBottom=e,document.getElementsByTagName("body")[0].style.background="linear-gradient("+this._bgColorTop+", "+this._bgColorBottom+")"}}]),t}();t.a=d}).call(t,i(0))},,function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\t/** generates a random number between 0 and 1 **/\n\thighp float rand(vec2 co) {\n\t\thighp float a = 12.9898;\n\t\thighp float b = 78.233;\n\t\thighp float c = 43758.5453;\n\t\thighp float dt= dot(co.xy ,vec2(a,b));\n\t\thighp float sn= mod(dt,3.14);\n\t\treturn fract(sin(sn) * c);\n\t}\n\n\t// this is the texture position the data for this particle is stored in\n\tvarying vec2 vUv;\n\n\tuniform sampler2D tPrev;\n\tuniform sampler2D tCurr;\n\tuniform sampler2D tPosition;\n\tuniform sampler2D tDefaultSize;\n\tuniform sampler2D tWebcam;\n\n\tuniform float sizeInc;\n\tuniform float sizeRange;\n\n\tfloat getSize() {\n\t\tvec4 currPosition = vec4((vUv.x * 1.0), (vUv.y * 1.0), 0.0, 1.0);\n\t\tfloat webcamParticleVal = texture2D(tWebcam, vec2(currPosition.x, currPosition.y)).r;\n\t\tfloat size = 0.025 * webcamParticleVal;\n\n\t\treturn size;\n\t}\n\n\tvoid main() {\n\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, getSize());\n\t}\n",a="\n\t// this value stores the texture coordinates the data for this vertex is stored in\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t  vUv = vec2(uv);\n\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t}\n"},function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\tuniform sampler2D tColour;\n\tuniform sampler2D starImg;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvec4 colour = texture2D(tColour, vUv).rgba;\n\n\t\tgl_FragColor = colour;\n\t\t// gl_FragColor = gl_FragColor * texture2D(starImg, gl_PointCoord);\n\t}\n",a="\n\tuniform sampler2D tPosition;\n\tuniform sampler2D tSize;\n\n\tuniform float sizeMultiplierForScreen;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvUv = position.xy;\n\n\t\tvec4 position = vec4((vUv.x * 1.0) - 0.5, (vUv.y * 1.0) - 0.5, 0.0, 1.0);\n\t\tfloat size = texture2D(tSize, vUv).w;\n\n\t\tvec4 mvPosition = modelViewMatrix * position;\n\t\tgl_PointSize = size * (sizeMultiplierForScreen / -mvPosition.z);\n\t\tgl_Position = projectionMatrix * mvPosition;\n\t}\n"}],[5]);
//# sourceMappingURL=bundle.js.map