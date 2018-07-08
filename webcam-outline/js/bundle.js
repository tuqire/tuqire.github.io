webpackJsonp([0],[,,,function(e,t,i){"use strict";(function(e){function i(){return window.innerWidth>1100?170:window.innerWidth>700?100:window.innerWidth>500?85:50}function n(t){var i=t.data,n=t.tWidth,a=t.tHeight,r=t.format,o=t.filterType,s=new e.DataTexture(i,n,a,r,e.FloatType);return s.minFilter=s.magFilter=o,s.needsUpdate=!0,s.flipY=!1,s}t.b=i,t.a=n}).call(t,i(0))},,,function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),r=i.n(a),o=i(2),s=i.n(o),u=i(7),c=i(4),l=i.n(c),h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.particles,t.scene;n(this,e),this.gui=new l.a.GUI}return h(e,[{key:"addBgControls",value:function(e){this.gui.addColor(e,"bgColorTop"),this.gui.addColor(e,"bgColorBottom")}},{key:"addTextControls",value:function(e){this.gui.add(e,"font",Object.keys(fonts)).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"fontSize").min(10).max(200).step(5).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"textAlign",["left","center"]).onFinishChange(function(){e.updateTextTexture()}),this.gui.add(e,"textSizeMultiplier").min(1).max(1e3).step(10).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"topSpeed").min(.1).max(10).step(.1).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"acceleration").min(1e-5).max(.01).step(1e-5).onFinishChange(function(){e.updateParticleVars()})}},{key:"addMouseControls",value:function(e){this.gui.add(e,"hoverDist").min(0).max(.5).step(.01).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"hoverSizeInc").min(0).max(.03).step(.001).onFinishChange(function(){e.updateParticleVars()}),this.gui.add(e,"hoverMaxSizeMultiplier").min(1).max(3).step(.05).onFinishChange(function(){e.updateParticleVars()})}},{key:"addSizeControls",value:function(e){this.gui.add(e,"minSize").min(.01).max(.04).step(.001).onFinishChange(function(){e.minSize>e.maxSize&&(e.minSize=e.maxSize),e.updateSizes()}),this.gui.add(e,"maxSize").min(.01).max(.04).step(.001).onFinishChange(function(){e.maxSize<e.minSize&&(e.maxSize=e.minSize),e.updateSizes()}),this.gui.add(e,"sizeInc").min(1e-5).max(2e-4).step(1e-5).onFinishChange(function(){e.updateSizes()}),this.gui.add(e,"sizeRange").min(0).max(.02).step(5e-4).onFinishChange(function(){e.updateSizes()}),this.gui.add(e,"skew").min(1).max(100).step(1).onFinishChange(function(){e.updateSizes()})}},{key:"addColourStrengthControls",value:function(e){this.gui.add(e,"brightness").min(.1).max(3).step(.05).onFinishChange(function(){e.updateColours()})}},{key:"addOpacityControls",value:function(e){this.gui.add(e,"opacity").min(.1).max(1.5).step(.05).onFinishChange(function(){e.updateColours()})}}]),e}(),m=d,v=i(10),f=i(11),g=i(12);document.addEventListener("DOMContentLoaded",function(){if(r.a){var e=document.getElementById("stars-simulation-container"),t=new v.a({container:e}),i=new f.a,n=new g.a({scene:i,renderer:t,numParticles:window.matchMedia("(max-width: 480px)").matches?4e3:1e5,radius:3,minSize:.015,maxSize:.03,sizeRange:.003,sizeInc:5e-5,skew:35,brightness:.9,opacity:1,webcamOutlineStrength:1e3}),a=new u.a({aspectRatio:1,particles:n,position:{x:0,y:.001,z:-1.37}}),o=new s.a,c=function(){o.begin(),n.update(),t.render({scene:i.get(),camera:a.get()}),o.end()};!function(){new m({particles:n}),o.showPanel(0),document.body.appendChild(o.dom)}(),function e(){requestAnimationFrame(e),c()}()}else{document.getElementById("info").innerHTML="Your browser is not supported. Please use the latest version of Firefox or Chrome."}})},function(e,t,i){"use strict";(function(e){function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=i(3),o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function t(i){var r=i.particles,o=i.fov,s=void 0===o?400:o,u=i.aspectRatio,c=void 0===u?window.innerWidth/window.innerHeight:u,l=i.near,h=void 0===l?.1:l,d=i.far,m=void 0===d?2e3:d,v=i.position,f=void 0===v?{x:0,y:0,z:0}:v,g=i.up,p=void 0===g?[0,0,1]:g;a(this,t),this.particles=r,this.particles.setCameraZ(f.z),this.camera=new e.PerspectiveCamera(s,c,h,m),this.up=p,this.setPosition(f),this.setUp.apply(this,n(this.up)),this.setLookAt()}return o(t,[{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.setZ(window.innerHeight/Object(r.b)()),this.camera.updateProjectionMatrix()}},{key:"setUp",value:function(e,t,i){this.camera.up.set(e,t,i)}},{key:"setPosition",value:function(e){var t=e.x,i=void 0===t?this.camera.position.x:t,n=e.y,a=void 0===n?this.camera.position.y:n,r=e.z,o=void 0===r?this.camera.position.z:r;this.setX(i),this.setY(a),this.setZ(o)}},{key:"setX",value:function(e){this.camera.position.x=e,this.setLookAt()}},{key:"setY",value:function(e){this.camera.position.y=e,this.setLookAt()}},{key:"setZ",value:function(e){this.camera.position.z=e,this.setLookAt(),this.setUp(0,0,1),this.particles.setCameraZ(e)}},{key:"setLookAt",value:function(){this.camera.lookAt(new e.Vector3(0,0,0))}},{key:"get",value:function(){return this.camera}},{key:"getPosition",value:function(){return this.camera.position}},{key:"getZ",value:function(){return this.camera.position.z}}]),t}();t.a=s}).call(t,i(0))},,,function(e,t,i){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function t(n){var a=n.alpha,r=void 0===a||a,o=n.pixelRatio,s=void 0===o?window.devicePixelRatio:o,u=n.width,c=void 0===u?window.innerWidth:u,l=n.height,h=void 0===l?window.innerHeight:l,d=n.container;i(this,t),this.renderer=new e.WebGLRenderer({alpha:r});var m=this.renderer.context;m.enable(m.BLEND),m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA),this.setPixelRatio(s),this.setSize(c,h),d.appendChild(this.getDomElement()),window.addEventListener("resize",this.onWindowResize.bind(this))}return n(t,[{key:"getDomElement",value:function(){return this.renderer.domElement}},{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t)}},{key:"setPixelRatio",value:function(e){this.renderer.setPixelRatio(e)}},{key:"setSize",value:function(e,t){this.renderer.setSize(e,t)}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scene,i=e.camera,n=e.renderTarget,a=void 0===n?null:n,r=e.force,o=void 0!==r&&r;this.renderer.render(t,i,a,o)}},{key:"get",value:function(){return this.renderer}}]),t}();t.a=a}).call(t,i(0))},function(e,t,i){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function t(){i(this,t),this.scene=new e.Scene}return n(t,[{key:"add",value:function(e){this.scene.add(e)}},{key:"remove",value:function(e){this.scene.remove(e)}},{key:"get",value:function(){return this.scene}}]),t}();t.a=a}).call(t,i(0))},function(e,t,i){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=i(5),r=i.n(a),o=i(3),s=i(14),u=i(15),c=i(16),l=i(17),h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),d=function(){function t(i){var a=this,r=i.scene,o=i.configUniforms,s=void 0===o?{color:{value:new e.Color(16777215)},sizeMultiplierForScreen:{value:window.innerHeight*window.devicePixelRatio/2}}:o,u=i.blending,c=void 0===u?e.AdditiveBlending:u,l=i.transparent,h=void 0===l||l,d=i.depthTest,m=void 0===d||d,v=i.depthWrite,f=void 0!==v&&v,g=i.renderer,p=i.bgColorTop,w=void 0===p?"#000000":p,b=i.bgColorBottom,y=void 0===b?"#000000":b,z=i.numParticles,x=void 0===z?1e4:z,S=i.radius,P=void 0===S?100:S,C=i.minSize,F=void 0===C?1:C,k=i.maxSize,M=void 0===k?3:k,W=i.sizeRange,O=void 0===W?.5:W,U=i.sizeInc,T=void 0===U?.01:U,B=i.skew,D=void 0===B?1:B,E=i.brightness,H=void 0===E?1:E,R=i.opacity,A=void 0===R?1:R,_=i.webcamOutlineStrength,I=void 0===_?50:_;n(this,t),this.renderer=g,this.bgColorTop=w,this.bgColorBottom=y,this.numParticles=x,this.radius=P,this.minSize=F,this.maxSize=M,this.sizeRange=O,this.sizeInc=T,this.skew=D,this.webcamOutlineStrength=I,this.brightness=H,this.opacity=A,this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.videoEl=document.createElement("video");var L=document.createElement("h1");L.innerHTML="Your browser is not supported. Please use Google Chrome (v21 or above).",navigator.getUserMedia?navigator.getUserMedia({video:{width:1280,height:720}},function(e){var t=a.videoEl;t.src=URL.createObjectURL(e),t.width=480,t.height=480,t.autoplay=!0,a.addStars({scene:r,renderer:g,configUniforms:s,blending:c,transparent:h,depthTest:m,depthWrite:f})},function(){return console.error("video failed to load")}):document.getElementsByTagName("body")[0].append(L),window.addEventListener("resize",this.onWindowResize.bind(this))}return h(t,[{key:"addStars",value:function(t){var i=t.scene,n=t.renderer,a=t.configUniforms,o=t.blending,h=t.transparent,d=t.depthTest,m=t.depthWrite,v=this.tHeight=Math.ceil(Math.sqrt(this.numParticles)),f=this.tWidth=v;this.numParticles=f*v;var g=this.webcamEl=document.createElement("canvas");this.webcamElContext=g.getContext("2d");var p=this.webcamTexture=new e.Texture(g);p.minFilter=p.magFilter=e.NearestFilter,p.needsUpdate=!0;var w=this.webcamDiffEl=document.createElement("canvas");this.webcamDiffElContext=w.getContext("2d");var b=this.webcamDiffTexture=new e.Texture(w);b.minFilter=b.magFilter=e.NearestFilter,b.needsUpdate=!0,this.positions=new Float32Array(3*this.numParticles),this.blackAndWhiteFBO=new r.a({tWidth:this.webcamEl.width,tHeight:this.webcamEl.height,renderer:n.get(),uniforms:{tWebcam:{type:"t",value:p}},simulationVertexShader:u.b,simulationFragmentShader:u.a}),this.webcamDifferenceFBO=new r.a({tWidth:this.webcamEl.width,tHeight:this.webcamEl.height,renderer:n.get(),uniforms:{webcamWidth:{type:"f",value:this.webcamEl.width},webcamHeight:{type:"f",value:this.webcamEl.height},tWebcam:{type:"t",value:0},webcamOutlineStrength:{type:"f",value:this.webcamOutlineStrength}},simulationVertexShader:c.b,simulationFragmentShader:c.a}),this.sizeFBO=new r.a({tWidth:f,tHeight:v,renderer:n.get(),uniforms:{tPosition:{type:"t",value:0},tDefaultSize:{type:"t",value:0},tWebcam:{type:"t",value:0},sizeRange:{type:"f",value:this.sizeRange},sizeInc:{type:"f",value:this.sizeInc},hoverDist:{type:"f",value:this.hoverDist},hoverSizeInc:{type:"f",value:this.hoverSizeInc},hoverMaxSizeMultiplier:{type:"f",value:this.hoverMaxSizeMultiplier}},simulationVertexShader:s.b,simulationFragmentShader:s.a}),this.sizeFBO.setTextureUniform("tPosition",this.getPositions()),this.sizeFBO.setTextureUniform("tDefaultSize",this.getSizes());var y=Object.assign({},a,{tPosition:{type:"t",value:this.sizeFBO.simulationShader.uniforms.tPosition.value},tSize:{type:"t",value:this.sizeFBO.targets[0]},tWebcam:{type:"t",value:b},tColour:{type:"t",value:p}});this.material=new e.ShaderMaterial({uniforms:y,vertexShader:l.b,fragmentShader:l.a,blending:o,depthTest:d,depthWrite:m,transparent:h});for(var z=new e.Geometry,x=0;x<this.numParticles;x++){var S=new e.Vector3;S.x=x%f/f,S.y=Math.floor(x/f)/v,z.vertices.push(S)}this.particles=new e.Points(z,this.material),this.particles.frustumCulled=!1,i.add(this.get()),this.ready=!0}},{key:"onWindowResize",value:function(){this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2}},{key:"onMouseMove",value:function(e){var t=this.cameraZ/(2.8*this.windowHalfY),i=this.cameraZ/(2.65*this.windowHalfY),n=e.clientX-this.windowHalfX,a=this.windowHalfY-e.clientY;this.sizeFBO.simulationShader.uniforms.mouse.value.set(t*n,i*a,0)}},{key:"getPositions",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0,n=0;t<this.numParticles;t++,i+=3,n+=4){var a=this.calcPosition();this.positions[i]=e[n]=a[0],this.positions[i+1]=e[n+1]=a[1],this.positions[i+2]=e[n+2]=a[2],e[n+3]=1}return e}},{key:"calcPosition",value:function(){var e=this.radius,t=Math.random()-.5,i=Math.random()-.5,n=Math.pow(Math.random(),.6)*e*(1/Math.sqrt(Math.pow(t,2)+Math.pow(i,2)));return[t*n,i*n,0]}},{key:"getSizes",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0;t<this.numParticles;t++,i+=4)e[i+3]=this.calcSize();return e}},{key:"calcSize",value:function(){var e=this.maxSize-this.minSize;return this.minSize+e*Math.pow(Math.random(),this.skew)}},{key:"getColours",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,i=0;t<this.numParticles;t++,i+=4){var n=this.calcColour();e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3]}return Object(o.a)({data:e,tWidth:this.tWidth,tHeight:this.tHeight,format:this.sizeFBO.format,filterType:this.sizeFBO.filterType})}},{key:"calcColour",value:function(){var e=this,t=Math.ceil(10*Math.random()),i=function(t,i,n,a){return[e.brightness*t/255,e.brightness*i/255,e.brightness*n/255,e.opacity]};switch(t){case 1:return i(155,176,255);case 2:return i(170,191,255);case 3:return i(202,215,255);case 4:return i(248,247,255);case 5:return i(255,244,234);case 6:return i(255,210,161);case 7:return i(255,204,111);default:return i(255,255,255)}}},{key:"update",value:function(){if(this.ready){var e=this.videoEl,t=this.webcamElContext,i=this.webcamEl,n=i.width,a=i.height,r=this.webcamTexture;e.readyState===e.HAVE_ENOUGH_DATA&&(t.drawImage(e,0,0,n,a),r.needsUpdate=!0),this.blackAndWhiteFBO.simulate(),this.webcamDifferenceFBO.simulationShader.uniforms.tWebcam.value=this.blackAndWhiteFBO.getCurrentFrame(),this.webcamDifferenceFBO.simulate(),this.sizeFBO.simulationShader.uniforms.tWebcam.value=this.webcamDifferenceFBO.getCurrentFrame(),this.sizeFBO.simulate(),this.material.uniforms.tSize.value=this.sizeFBO.getCurrentFrame()}}},{key:"get",value:function(){return this.particles}},{key:"setCameraZ",value:function(e){this.cameraZ=e}},{key:"updateColours",value:function(){this.material.uniforms.tColour.value=this.getColours()}},{key:"updateSizes",value:function(){this.sizeFBO.simulationShader.uniforms.sizeRange.value=this.sizeRange,this.sizeFBO.simulationShader.uniforms.sizeInc.value=this.sizeInc,this.sizeFBO.setTextureUniform("tDefaultSize",this.getSizes())}},{key:"updateParticleVars",value:function(){this.sizeFBO.simulationShader.uniforms.hoverDist.value=this.hoverDist,this.sizeFBO.simulationShader.uniforms.hoverSizeInc.value=this.hoverSizeInc,this.sizeFBO.simulationShader.uniforms.hoverMaxSizeMultiplier.value=this.hoverMaxSizeMultiplier}},{key:"bgColorTop",get:function(){return this._bgColorTop},set:function(e){this._bgColorTop=e,document.getElementsByTagName("body")[0].style.background="linear-gradient("+this._bgColorTop+", "+this._bgColorBottom+")"}},{key:"bgColorBottom",get:function(){return this._bgColorBottom},set:function(e){this._bgColorBottom=e,document.getElementsByTagName("body")[0].style.background="linear-gradient("+this._bgColorTop+", "+this._bgColorBottom+")"}}]),t}();t.a=d}).call(t,i(0))},,function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\t/** generates a random number between 0 and 1 **/\n\thighp float rand(vec2 co) {\n\t\thighp float a = 12.9898;\n\t\thighp float b = 78.233;\n\t\thighp float c = 43758.5453;\n\t\thighp float dt= dot(co.xy ,vec2(a,b));\n\t\thighp float sn= mod(dt,3.14);\n\t\treturn fract(sin(sn) * c);\n\t}\n\n\t// this is the texture position the data for this particle is stored in\n\tvarying vec2 vUv;\n\n\tuniform sampler2D tPrev;\n\tuniform sampler2D tCurr;\n\tuniform sampler2D tPosition;\n\tuniform sampler2D tDefaultSize;\n\tuniform sampler2D tWebcam;\n\n\tuniform float sizeInc;\n\tuniform float sizeRange;\n\n\tfloat getSize() {\n\t\tvec4 currPosition = vec4((vUv.x * 1.0), (vUv.y * 1.0), 0.0, 1.0);\n\t\tfloat webcamParticleVal = texture2D(tWebcam, vec2(currPosition.x, currPosition.y)).r;\n\t\tfloat size = 0.0003 * webcamParticleVal;\n\n\t\treturn size;\n\t}\n\n\tvoid main() {\n\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, getSize());\n\t}\n",a="\n\t// this value stores the texture coordinates the data for this vertex is stored in\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t  vUv = vec2(uv);\n\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t}\n"},function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\t// this is the texture position the data for this particle is stored in\n\tvarying vec2 vUv;\n\n\tuniform sampler2D tWebcam;\n\n\tuniform float sizeInc;\n\tuniform float sizeRange;\n\n\tvoid main() {\n\t\tvec3 webcamParticle = texture2D(tWebcam, vUv).xyz;\n    float avg = (webcamParticle.x + webcamParticle.y + webcamParticle.z) / 3.0;\n\n\t\tgl_FragColor = vec4(avg, avg, avg, 1.0);\n\t}\n",a="\n\t// this value stores the texture coordinates the data for this vertex is stored in\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t  vUv = uv;\n\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t}\n"},function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\t// this is the texture position the data for this particle is stored in\n\tvarying vec2 vUv;\n\n\tuniform sampler2D tWebcam;\n\n\tuniform float sizeInc;\n  uniform float sizeRange;\n  uniform float webcamWidth;\n\tuniform float webcamHeight;\n\tuniform float webcamOutlineStrength;\n\n\tvoid main() {\n\t\tvec3 webcamParticle = texture2D(tWebcam, vUv).xyz;\n\t\tvec3 webcamParticleAbove = texture2D(tWebcam, vec2(vUv.x, vUv.y - (1.0 / webcamWidth))).xyz;\n\t\tvec3 webcamParticleBelow = texture2D(tWebcam, vec2(vUv.x, vUv.y + (1.0 / webcamWidth))).xyz;\n\t\tvec3 webcamParticleLeft = texture2D(tWebcam, vec2(vUv.x - (1.0 / webcamHeight), vUv.y)).xyz;\n\t\tvec3 webcamParticleRight = texture2D(tWebcam, vec2(vUv.x + (1.0 / webcamHeight), vUv.y)).xyz;\n\n    float average = (\n\t\t\twebcamParticleAbove.x +\n      webcamParticleBelow.x +\n      webcamParticleLeft.x +\n\t\t\twebcamParticleRight.x\n\t\t) / 4.0;\n\n    webcamParticle.x -= average;\n    webcamParticle.y -= average;\n    webcamParticle.z -= average;\n\n    webcamParticle.x *= webcamOutlineStrength;\n    webcamParticle.y *= webcamOutlineStrength;\n    webcamParticle.z *= webcamOutlineStrength;\n\n\t\tgl_FragColor = vec4(webcamParticle, 1.0);\n\t}\n",a="\n\t// this value stores the texture coordinates the data for this vertex is stored in\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t  vUv = uv;\n\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t}\n"},function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a});var n="\n\tuniform sampler2D tColour;\n\tuniform sampler2D starImg;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvec4 colour = texture2D(tColour, vUv).rgba;\n\n\t\tgl_FragColor = colour;\n\t}\n",a="\n\tuniform sampler2D tPosition;\n\tuniform sampler2D tSize;\n\n\tuniform float sizeMultiplierForScreen;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvUv = position.xy;\n\n\t\tvec4 position = vec4((vUv.x * 1.0) - 0.5, (vUv.y * 1.0) - 0.5, 0.0, 1.0);\n\t\tfloat size = texture2D(tSize, vUv).w;\n\n\t\tvec4 mvPosition = modelViewMatrix * position;\n\t\tgl_PointSize = size * (sizeMultiplierForScreen / -mvPosition.z);\n\t\tgl_Position = projectionMatrix * mvPosition;\n\t}\n"}],[6]);
//# sourceMappingURL=bundle.js.map