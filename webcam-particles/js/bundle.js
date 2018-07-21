webpackJsonp([0],[,,,function(e,t,n){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SHAPES=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(12),u=n(13),l=t.SHAPES={CIRCLE:"CIRCLE",SQUARE:"SQUARE"},d=function(){function t(n){var o=this,a=n.scene,r=n.numParticles,s=void 0===r?1e5:r,u=n.uniforms,d=void 0===u?{sizeMultipler:{value:window.innerHeight*window.devicePixelRatio/2},color:{value:new e.Color(16777215)}}:u,c=n.blending,h=(void 0===c&&e.AdditiveBlending,n.transparent,n.depthTest,n.depthWrite,n.renderer),f=n.mouseRadius,v=void 0===f?.05:f,m=n.mousePush,p=void 0===m?1e-4:m,y=n.particleSize,g=void 0===y?.06:y,P=n.particleSizeInc,w=void 0===P?1e-4:P,S=n.particleShape,x=void 0===S?l.CIRCLE:S,C=n.xSpeed,b=void 0===C?3e-5:C,z=n.ySpeed,k=void 0===z?6e-5:z,M=n.yThreshold,_=void 0===M?.2:M;if(i(this,t),this.scene=a,this.numParticles=s,this.renderer=h,this.uniforms=d,this.mouseRadius=v,this.mousePush=p,this.particleSize=g,this.particleSizeInc=w,this.particleShape=x,this.xSpeed=b,this.ySpeed=k,this.yThreshold=_,this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.video=document.createElement("video"),navigator.getUserMedia)navigator.getUserMedia({video:{width:1280,height:720}},function(e){var t=o.video;t.srcObject=e,t.width=480,t.height=480,t.autoplay=!0,o.addParticles()},function(e){return console.error("video failed to load",e)});else{document.getElementById("info").innerHTML="Requires use of webcam. Please use the latest version of Chrome."}}return o(t,[{key:"updateParticleVars",value:function(){this.FBO.simulationShader.uniforms.mouseRadius.value=this.mouseRadius,this.FBO.simulationShader.uniforms.mousePush.value=this.mousePush,this.FBO.simulationShader.uniforms.yThreshold.value=this.yThreshold,this.material.uniforms.isCircle.value=this.particleShape===l.CIRCLE}},{key:"onDocumentMouseMove",value:function(e){this.mouseX=this.windowHalfX-e.clientX,this.mouseY=e.clientY-this.windowHalfY,this.FBO.simulationShader.uniforms.mouse.value.set(.5*this.mouseX/this.windowHalfX,-.5*this.mouseY/this.windowHalfY,0)}},{key:"addParticles",value:function(){for(var t=this.video,n=this.renderer,i=this.numParticles,o=t.width/t.height,a=o>1?o:1,d=o>1?1:t.height/t.width,c=a,h=d;c*h<i-a*d;)c+=a,h+=d;var f=Math.ceil(c),v=Math.ceil(h);this.numParticles=f*v,this.FBO=new r.default({tWidth:f,tHeight:v,renderer:n.get(),uniforms:{tWidth:{type:"f",value:f},tHeight:{type:"f",value:v},mouse:{value:new e.Vector3(1e4,1e4,1e4)},tParams:{type:"t",value:0},mouseRadius:{type:"f",value:this.mouseRadius},mousePush:{type:"f",value:this.mousePush},yThreshold:{type:"f",value:this.yThreshold}},simulationVertexShader:s.simulationVertexShader,simulationFragmentShader:s.simulationFragmentShader}),this.updateParticleParams();var m=this.videoImage=document.createElement("canvas");this.videoImageContext=m.getContext("2d");var p=this.videoTexture=new e.Texture(m);p.minFilter=p.magFilter=e.NearestFilter,p.needsUpdate=!0;for(var y=this.material=new e.ShaderMaterial({blending:e.NormalBlending,uniforms:Object.assign({},this.uniforms,{isCircle:{type:"b",value:this.particleShape===l.CIRCLE},tVideo:{type:"t",value:p},tParams:{type:"t",value:this.FBO.targets[0]}}),fragmentShader:u.fragmentShader,vertexShader:u.vertexShader,opacity:1,vertexColors:!0,transparent:!0}),g=this.geometry=new e.Geometry,P=0;P<this.numParticles;P++){var w=new e.Vector3;w.x=P%f/f,w.y=Math.floor(P/f)/v,g.vertices.push(w)}this.particles=new e.Points(g,y),this.particles.frustumCulled=!1,this.scene.add(this.get()),this.ready=!0,document.addEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1)}},{key:"updateParticleParams",value:function(){for(var e=new Float32Array(4*this.numParticles),t=0,n=0;t<this.numParticles;t++,n+=4){var i=this.getSpeeds();e[n]=i.x,e[n+1]=i.y,e[n+2]=this.getSize(),e[n+3]=this.getSizeInc()}this.FBO.setTextureUniform("tParams",e)}},{key:"getSpeeds",value:function(){return{x:this.xSpeed*Math.random(),y:this.ySpeed*(Math.random()/2+.5)}}},{key:"getSize",value:function(){return this.particleSize*Math.random()/2}},{key:"getSizeInc",value:function(){return this.particleSizeInc*Math.random()*2}},{key:"update",value:function(){if(this.ready){var e=this.video,t=this.videoImageContext,n=this.videoImage,i=n.width,o=n.height,a=this.videoTexture;e.readyState===e.HAVE_ENOUGH_DATA&&(t.drawImage(e,0,0,i,o),a.needsUpdate=!0),this.FBO.simulate(),this.material.uniforms.tParams.value=this.FBO.getCurrentFrame()}}},{key:"get",value:function(){return this.particles}}]),t}();t.default=d}).call(t,n(0))},,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=i(o),r=n(7),s=i(r),u=n(8),l=i(u),d=n(14),c=i(d),h=n(15),f=i(h),v=n(16),m=i(v),p=n(3),y=i(p);document.addEventListener("DOMContentLoaded",function(){if(a.default){var e=window.innerWidth,t=window.innerHeight,n=document.getElementById("container"),i=new c.default({width:e,height:t,container:n}),o=new m.default,r=new s.default({aspectRatio:1,position:{x:0,y:0,z:-1.25}}),u=new f.default,d=new y.default({numParticles:window.matchMedia("(max-width: 480px)").matches?3e4:1e5,mousePush:2e-4,scene:o,renderer:i}),h=function(){r.update(),u.update(),d.update(),i.render({scene:o.get(),camera:r.get()})};!function(){new l.default({particles:d}),n.appendChild(u.getDomElement())}(),function e(){requestAnimationFrame(e),h()}()}else{document.getElementById("error").innerHTML="Your browser is not supported. Please use the latest version of Firefox or Chrome."}})},function(e,t,n){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function t(i){var o=i.fov,a=void 0===o?45:o,r=i.aspectRatio,s=void 0===r?window.innerHeight/window.innerWidth:r,u=i.near,l=void 0===u?.01:u,d=i.far,c=void 0===d?500:d,h=i.position,f=void 0===h?{x:0,y:0,z:0}:h;i.up;n(this,t),this.camera=new e.PerspectiveCamera(a,s,l,c),this.setPosition(f),this.setLookAt()}return i(t,[{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}},{key:"setUp",value:function(e,t,n){this.camera.up.set(e,t,n)}},{key:"setPosition",value:function(e){var t=e.x,n=void 0===t?this.camera.position.x:t,i=e.y,o=void 0===i?this.camera.position.y:i,a=e.z,r=void 0===a?this.camera.position.z:a;this.setX(n),this.setY(o),this.setZ(r)}},{key:"setX",value:function(e){this.camera.position.x=e}},{key:"setY",value:function(e){this.camera.position.y=e}},{key:"setZ",value:function(e){this.camera.position.z=e}},{key:"setLookAt",value:function(){this.camera.lookAt(new e.Vector3(0,0,0))}},{key:"update",value:function(){}},{key:"get",value:function(){return this.camera}}]),t}();t.default=o}).call(t,n(0))},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(3),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.particles;t.scene;i(this,e),this.gui=new r.default.GUI,this.addShapeControls(n),this.addMouseRadiusControls(n),this.addMousePushControls(n),this.addYThresholdControls(n),this.addSpeedControls(n),this.addSizeControls(n),this.addSizeIncControls(n)}return o(e,[{key:"addShapeControls",value:function(e){this.gui.add(e,"particleShape",s.SHAPES).onFinishChange(function(){e.updateParticleVars()})}},{key:"addYThresholdControls",value:function(e){this.gui.add(e,"yThreshold").min(.05).max(.5).step(.05).onFinishChange(function(){e.updateParticleVars()})}},{key:"addMouseRadiusControls",value:function(e){this.gui.add(e,"mouseRadius").min(0).max(.1).step(.01).onFinishChange(function(){e.updateParticleVars()})}},{key:"addMousePushControls",value:function(e){this.gui.add(e,"mousePush").min(1e-5).max(5e-4).step(1e-5).onFinishChange(function(){e.updateParticleVars()})}},{key:"addSpeedControls",value:function(e){this.gui.add(e,"xSpeed").min(0).max(5e-4).step(1e-6).onFinishChange(function(){e.updateParticleParams()}),this.gui.add(e,"ySpeed").min(0).max(5e-4).step(1e-6).onFinishChange(function(){e.updateParticleParams()})}},{key:"addSizeControls",value:function(e){this.gui.add(e,"particleSize").min(.01).max(.2).step(.01).onFinishChange(function(){e.updateParticleParams()})}},{key:"addSizeIncControls",value:function(e){this.gui.add(e,"particleSizeInc").min(5e-5).max(39e-5).step(2e-5).onFinishChange(function(){e.updateParticleParams()})}}]),e}();t.default=u},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.simulationFragmentShader="\n\t/** generates a random number between 0 and 1 **/\n\thighp float rand(vec2 co)\n\t{\n\t\thighp float a = 12.9898;\n\t\thighp float b = 78.233;\n\t\thighp float c = 43758.5453;\n\t\thighp float dt= dot(co.xy ,vec2(a,b));\n\t\thighp float sn= mod(dt,3.14);\n\t\treturn fract(sin(sn) * c);\n\t}\n\n\tvarying vec2 vUv;\n\n\tuniform sampler2D tPrev;\n\tuniform sampler2D tCurr;\n\n\tuniform vec3 mouse;\n\tuniform sampler2D tParams;\n\tuniform float yThreshold;\n\tuniform float mouseRadius;\n\tuniform float mousePush;\n\n\tuniform float tWidth;\n\tuniform float tHeight;\n\n\tvec3 getPos(vec3 defaultPos) {\n\t\tvec3 deacceleration = vec3(1.1);\n\t\tvec3 prevPos = texture2D(tPrev, vUv).xyz;\n\t\tvec3 currPos = texture2D(tCurr, vUv).xyz;\n\t\tvec3 velocity = currPos == defaultPos ? vec3(0.0) : (currPos - prevPos) / deacceleration;\n\t\tvec3 pos = currPos;\n\t\tfloat distanceToMouse = length(pos - mouse);\n\n\t\tif (distanceToMouse < mouseRadius) {\n\t\t\tvelocity += (normalize(pos - mouse) * mousePush);\n\t\t}\n\n\t\tfloat xSpeed = texture2D(tParams, vUv).x;\n\t\tfloat ySpeed = texture2D(tParams, vUv).y;\n\t\tvelocity.y += ySpeed;\n\t\tvelocity.x += rand(vec2(defaultPos.x, defaultPos.y)) > 0.5 ? xSpeed : -xSpeed;\n\n\t\tif (pos == vec3(0.0) || pos.y > yThreshold + defaultPos.y) {\n\t\t\tpos = defaultPos;\n\t\t} else {\n\t\t\tpos += velocity;\n\t\t}\n\n\t\treturn pos;\n\t}\n\n\tfloat getSize(vec3 defaultPos, vec3 pos) {\n\t\tfloat defaultSize = texture2D(tParams, vUv).z;\n\t\tfloat incSize = texture2D(tParams, vUv).a;\n\t\tfloat currSize = texture2D(tCurr, vUv).a;\n\n\t\tcurrSize += currSize > defaultSize + (incSize * 60.0) ? 0.0 : incSize;\n\n\t\tif (pos.y == defaultPos.y) {\n\t\t\tcurrSize = defaultSize;\n\t\t}\n\n\t\treturn currSize;\n\t}\n\n\tvoid main() {\n\t\tvec3 defaultPos = vec3((vUv.x * 1.0) - 0.5, (vUv.y * 1.0) - 0.5, 0.0);\n\n\t\tvec3 pos = getPos(defaultPos);\n\t\tfloat size = getSize(defaultPos, pos);\n\n\t\t// write new position out\n\t\tgl_FragColor = vec4(pos, size);\n\t}\n",t.simulationVertexShader="\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t  vUv = vec2(uv);\n\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t}\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fragmentShader="\n\tuniform sampler2D tVideo;\n\tuniform bool isCircle;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvec3 colors = texture2D(tVideo, vUv).rgb;\n\n\t\tgl_FragColor = vec4(colors, 1.0);\n\n\t\tif (isCircle) {\n\t\t\tif (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard; // makes particles a circle\n\t\t}\n\t}\n",t.vertexShader="\n\tuniform sampler2D tParams;\n\tuniform float sizeMultipler;\n\n\tvarying vec2 vUv;\n\n\tvoid main() {\n\t\tvUv = position.xy;\n\n\t\tvec3 pos = texture2D(tParams, vUv).xyz;\n\t\tfloat size = texture2D(tParams, vUv).a;\n\n\t\tvec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n\t\tgl_PointSize = size * (sizeMultipler / -mvPosition.z);\n\t\tgl_Position = projectionMatrix * mvPosition;\n\t}\n"},function(e,t,n){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function t(i){var o=i.alpha,a=void 0===o||o,r=i.pixelRatio,s=void 0===r?window.devicePixelRatio:r,u=i.width,l=void 0===u?window.width:u,d=i.height,c=void 0===d?window.height:d,h=i.container;n(this,t),this.renderer=new e.WebGLRenderer({alpha:a});var f=this.renderer.context;f.enable(f.BLEND),f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA),this.setPixelRatio(s),this.setSize(l,c),h.appendChild(this.getDomElement()),window.addEventListener("resize",this.onWindowResize.bind(this))}return i(t,[{key:"getDomElement",value:function(e){return this.renderer.domElement}},{key:"onWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t)}},{key:"setPixelRatio",value:function(e){this.renderer.setPixelRatio(e)}},{key:"setSize",value:function(e,t){this.renderer.setSize(e,t)}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scene,n=e.camera,i=e.renderTarget,o=void 0===i?null:i,a=e.force,r=void 0!==a&&a;this.renderer.render(t,n,o,r)}},{key:"get",value:function(){return this.renderer}}]),t}();t.default=o}).call(t,n(0))},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(){i(this,e),this.stats=new r.default}return o(e,[{key:"getDomElement",value:function(e){return this.stats.domElement}},{key:"update",value:function(){this.stats.update()}}]),e}();t.default=s},function(e,t,n){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function t(){n(this,t),this.scene=new e.Scene,this.scene.background=new e.Color(16777215)}return i(t,[{key:"add",value:function(e){this.scene.add(e)}},{key:"remove",value:function(e){this.scene.remove(e)}},{key:"get",value:function(){return this.scene}}]),t}();t.default=o}).call(t,n(0))}],[6]);
//# sourceMappingURL=bundle.js.map