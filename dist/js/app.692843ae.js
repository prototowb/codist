(function(e){function t(t){for(var n,c,o=t[0],s=t[1],u=t[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03f8":function(e,t,r){"use strict";r("1a55")},"08a0":function(e,t,r){},"08a9":function(e,t,r){"use strict";r("be72")},"0f56":function(e,t,r){"use strict";r("a98c")},"0fae":function(e,t,r){},"1a55":function(e,t,r){},"1abc":function(e,t,r){},"2b3a":function(e,t,r){},"38a1":function(e,t,r){"use strict";r("08a0")},"38ba":function(e,t,r){"use strict";r("f341")},"3ec8":function(e,t,r){"use strict";r("cf1f")},"428c":function(e,t,r){},"47b4":function(e,t,r){"use strict";r("9a2b")},"4b02":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=r("6c02"),i=(r("a4d3"),r("e01a"),Object(n["i"])("h2",null,"Interested? Reach out now!",-1)),c=Object(n["h"])("Contact");function o(e,t,r,a,o,s){var u=Object(n["z"])("base-card"),l=Object(n["z"])("base-button"),d=Object(n["z"])("router-view"),b=Object(n["z"])("base-badge");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])("section",null,[Object(n["i"])(u,null,{default:Object(n["H"])((function(){return[Object(n["i"])("h2",null,Object(n["C"])(s.fullName),1),Object(n["i"])("h3",null,"$"+Object(n["C"])(s.rate)+"/hour",1)]})),_:1})]),Object(n["i"])("section",null,[Object(n["i"])(u,null,{default:Object(n["H"])((function(){return[Object(n["i"])("header",null,[i,Object(n["i"])(l,{link:"",to:s.contactLink},{default:Object(n["H"])((function(){return[c]})),_:1},8,["to"])]),Object(n["i"])(d)]})),_:1})]),Object(n["i"])("section",null,[Object(n["i"])(u,null,{default:Object(n["H"])((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(o.selectedMentor.areas,(function(e){return Object(n["r"])(),Object(n["f"])(b,{key:e,type:e,title:e},null,8,["type","title"])})),128)),Object(n["i"])("p",null,Object(n["C"])(s.description),1)]})),_:1})])])}r("7db0");var s={props:["id"],data:function(){return{selectedMentor:null}},computed:{fullName:function(){return this.selectedMentor.firstName+" "+this.selectedMentor.lastName},areas:function(){return this.selectedMentor.areas},rate:function(){return this.selectedMentor.hourlyRate},description:function(){return this.selectedMentor.description},contactLink:function(){return this.$route.path+"/contact"}},created:function(){var e=this;this.selectedMentor=this.$store.getters["mentors/mentors"].find((function(t){return t.id===e.id}))}};s.render=o;var u=s,l=Object(n["K"])("data-v-72ab57ee");Object(n["u"])("data-v-72ab57ee");var d={class:"controls"},b=Object(n["h"])("Refresh"),f=Object(n["h"])("Login to reg. as coach"),j=Object(n["h"])("Register as Mentor"),O={key:0},m={key:1},p={key:2};Object(n["s"])();var h=l((function(e,t,r,a,i,c){var o=Object(n["z"])("base-dialog"),s=Object(n["z"])("mentor-filter"),u=Object(n["z"])("base-button"),h=Object(n["z"])("base-spinner"),v=Object(n["z"])("mentor-item"),g=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{show:!!i.error,title:"An error occured!",onClose:c.handleError},{default:l((function(){return[Object(n["i"])("p",null,Object(n["C"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])("section",null,[Object(n["i"])(s,{onChangeFilter:c.setFilters},null,8,["onChangeFilter"])]),Object(n["i"])("section",null,[Object(n["i"])(g,null,{default:l((function(){return[Object(n["i"])("div",d,[Object(n["i"])(u,{mode:"outline",onClick:t[1]||(t[1]=function(e){return c.loadMentors(!0)})},{default:l((function(){return[b]})),_:1}),c.isLoggedIn?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(u,{key:0,link:"",to:"/auth?redirect=register"},{default:l((function(){return[f]})),_:1})),!c.isLoggedIn||c.isMentor||i.isLoading?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(u,{key:1,link:"",to:"/register"},{default:l((function(){return[j]})),_:1}))]),i.isLoading?(Object(n["r"])(),Object(n["f"])("div",O,[Object(n["i"])(h)])):c.hasMentors?(Object(n["r"])(),Object(n["f"])("ul",m,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.filteredMentors,(function(e){return Object(n["r"])(),Object(n["f"])(v,{key:e.id,id:e.id,"first-name":e.firstName,"last-name":e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","first-name","last-name","rate","areas"])})),128))])):(Object(n["r"])(),Object(n["f"])("h3",p,"No Mentors found."))]})),_:1})])])})),v=r("1da1"),g=(r("96cf"),r("4de4"),r("caad"),r("2532"),Object(n["K"])("data-v-281786ba"));Object(n["u"])("data-v-281786ba");var y={class:"actions"},k=Object(n["h"])("Contact"),w=Object(n["h"])("View Details");Object(n["s"])();var I=g((function(e,t,r,a,i,c){var o=Object(n["z"])("base-badge"),s=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("li",null,[Object(n["i"])("h3",null,Object(n["C"])(c.fullName),1),Object(n["i"])("h4",null,"$"+Object(n["C"])(r.rate)+"/hour",1),Object(n["i"])("div",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(r.areas,(function(e){return Object(n["r"])(),Object(n["f"])(o,{key:e,type:e,title:e},{default:g((function(){return[Object(n["h"])(Object(n["C"])(e),1)]})),_:2},1032,["type","title"])})),128))]),Object(n["i"])("div",y,[Object(n["i"])(s,{mode:"outline",link:"",to:c.mentorContactLink},{default:g((function(){return[k]})),_:1},8,["to"]),Object(n["i"])(s,{link:"",to:c.mentorDetailsLink},{default:g((function(){return[w]})),_:1},8,["to"])])])})),x=Object(n["K"])("data-v-102dbedf"),_=x((function(e,t,r,a,i,c){return Object(n["r"])(),Object(n["f"])("span",{class:["badge",r.type]},Object(n["C"])(c.text),3)})),V={props:["type","title"],computed:{text:function(){return this.title.toUpperCase()}}};r("47b4");V.render=_,V.__scopeId="data-v-102dbedf";var F=V,C={components:{BaseBadge:F},props:["id","firstName","lastName","rate","areas"],computed:{fullName:function(){return this.firstName+" "+this.lastName},mentorContactLink:function(){return this.$route.path+"/"+this.id+"/contact"},mentorDetailsLink:function(){return this.$route.path+"/"+this.id}}};r("0f56");C.render=I,C.__scopeId="data-v-281786ba";var R=C,M=Object(n["K"])("data-v-815f1250");Object(n["u"])("data-v-815f1250");var N=Object(n["i"])("h2",null,"Find your Mentor!",-1),q={class:"filter-option"},L=Object(n["i"])("label",{for:"frontend"},"Frontend",-1),$={class:"filter-option"},z=Object(n["i"])("label",{for:"backend"},"Backend",-1),S={class:"filter-option"},E=Object(n["i"])("label",{for:"career"},"Career",-1);Object(n["s"])();var U=M((function(e,t,r,a,i,c){var o=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])(o,null,{default:M((function(){return[N,Object(n["i"])("span",q,[Object(n["i"])("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[1]||(t[1]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),L]),Object(n["i"])("span",$,[Object(n["i"])("input",{type:"checkbox",id:"backend",checked:"",onChange:t[2]||(t[2]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),z]),Object(n["i"])("span",S,[Object(n["i"])("input",{type:"checkbox",id:"career",checked:"",onChange:t[3]||(t[3]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),E])]})),_:1})})),P=r("ade3"),B=r("5530"),T={emits:["change-filter"],data:function(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter:function(e){var t=e.target.id,r=e.target.checked,n=Object(B["a"])(Object(B["a"])({},this.filters),{},Object(P["a"])({},t,r));this.filters=n,this.$emit("change-filter",n)}}};r("6a28");T.render=U,T.__scopeId="data-v-815f1250";var A=T,D={components:{MentorItem:R,MentorFilter:A},data:function(){return{isLoading:!1,error:null,activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated},isMentor:function(){return this.$store.getters["mentors/isMentor"]},filteredMentors:function(){var e=this,t=this.$store.getters["mentors/mentors"];return t.filter((function(t){return!(!e.activeFilters.frontend||!t.areas.includes("frontend"))||(!(!e.activeFilters.backend||!t.areas.includes("backend"))||!(!e.activeFilters.career||!t.areas.includes("career")))}))},hasMentors:function(){return!this.isLoading&&this.$store.getters["mentors/hasMentors"]}},created:function(){this.loadMentors()},methods:{setFilters:function(e){this.activeFilters=e},loadMentors:function(){var e=arguments,t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]&&e[0],t.isLoading=!0,r.prev=2,r.next=5,t.$store.dispatch("mentors/loadMentors",{forceRefresh:n});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](2),t.error=r.t0.message||"Something went wrong!";case 10:t.isLoading=!1;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},handleError:function(){this.error=null}}};r("8a16");D.render=h,D.__scopeId="data-v-72ab57ee";var K=D,J=Object(n["i"])("h2",null,"Register as a mentor now!",-1);function H(e,t,r,a,i,c){var o=Object(n["z"])("mentor-form"),s=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("section",null,[Object(n["i"])(s,null,{default:Object(n["H"])((function(){return[J,Object(n["i"])(o,{onSaveData:c.saveData},null,8,["onSaveData"])]})),_:1})])}r("5319"),r("ac1f");var Z=Object(n["K"])("data-v-36344187");Object(n["u"])("data-v-36344187");var G=Object(n["i"])("label",{for:"firstname"},"First Name",-1),Y={key:0},W=Object(n["i"])("label",{for:"lastname"},"Last Name",-1),Q={key:0},X=Object(n["i"])("label",{for:"description"},"Description",-1),ee={key:0},te=Object(n["i"])("label",{for:"rate"},"Hourly Rate",-1),re={key:0},ne=Object(n["i"])("h3",null,"Areas of Expertise",-1),ae=Object(n["i"])("label",{for:"frontend"},"Frontend Development",-1),ie=Object(n["i"])("label",{for:"backend"},"Backend Development",-1),ce=Object(n["i"])("label",{for:"career"},"Career Advisory",-1),oe={key:0},se={key:0},ue=Object(n["h"])("Register");Object(n["s"])();var le=Z((function(e,t,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("form",{onSubmit:t[15]||(t[15]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("div",{class:["form-control",{invalid:!i.firstName.isValid}]},[G,Object(n["I"])(Object(n["i"])("input",{type:"text",id:"firstname","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.firstName.val=e}),onBlur:t[2]||(t[2]=function(e){return c.clearValidity("firstName")})},null,544),[[n["F"],i.firstName.val,void 0,{trim:!0}]]),i.firstName.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",Y,"please enter your First Name."))],2),Object(n["i"])("div",{class:["form-control",{invalid:!i.lastName.isValid}]},[W,Object(n["I"])(Object(n["i"])("input",{type:"text",id:"lastname","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.lastName.val=e}),onBlur:t[4]||(t[4]=function(e){return c.clearValidity("lastName")})},null,544),[[n["F"],i.lastName.val,void 0,{trim:!0}]]),i.lastName.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",Q,"please enter your Last Name."))],2),Object(n["i"])("div",{class:["form-control",{invalid:!i.description.isValid}]},[X,Object(n["I"])(Object(n["i"])("textarea",{id:"description",rows:"5","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.description.val=e}),onBlur:t[6]||(t[6]=function(e){return c.clearValidity("description")})},null,544),[[n["F"],i.description.val,void 0,{trim:!0}]]),i.description.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",ee,"please enter your Intruduction/Description."))],2),Object(n["i"])("div",{class:["form-control",{invalid:!i.rate.isValid}]},[te,Object(n["I"])(Object(n["i"])("input",{type:"number",id:"rate","onUpdate:modelValue":t[7]||(t[7]=function(e){return i.rate.val=e}),onBlur:t[8]||(t[8]=function(e){return c.clearValidity("rate")})},null,544),[[n["F"],i.rate.val,void 0,{number:!0}]]),i.rate.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",re,"please enter your hourly Rate."))],2),Object(n["i"])("div",{class:["form-control",{invalid:!i.areas.isValid}]},[ne,Object(n["i"])("div",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",id:"frontend",value:"frontend","onUpdate:modelValue":t[9]||(t[9]=function(e){return i.areas.val=e}),onBlur:t[10]||(t[10]=function(e){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),ae]),Object(n["i"])("div",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",id:"backend",value:"backend","onUpdate:modelValue":t[11]||(t[11]=function(e){return i.areas.val=e}),onBlur:t[12]||(t[12]=function(e){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),ie]),Object(n["i"])("div",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",id:"career",value:"career","onUpdate:modelValue":t[13]||(t[13]=function(e){return i.areas.val=e}),onBlur:t[14]||(t[14]=function(e){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),ce]),i.areas.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",oe,"please choose at least one Expertise."))],2),i.formIsValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",se,"Please fix the above errors and submit again.")),Object(n["i"])(o,null,{default:Z((function(){return[ue]})),_:1})],32)})),de={emits:["save-data"],data:function(){return{firstName:{val:"",isValid:!0},lastName:{val:"",isValid:!0},description:{val:"",isValid:!0},rate:{val:null,isValid:!0},areas:{val:[],isValid:!0},formIsValid:!0}},methods:{clearValidity:function(e){this[e].isValid=!0},validateForm:function(){this.formIsValid=!0,""===this.firstName.val&&(this.firstName.isValid=!1,this.formIsValid=!1),""===this.lastName.val&&(this.lastName.isValid=!1,this.formIsValid=!1),""===this.description.val&&(this.description.isValid=!1,this.formIsValid=!1),(!this.rate.val||this.rate.val<0)&&(this.rate.isValid=!1,this.formIsValid=!1),0===this.areas.val.length&&(this.areas.isValid=!1,this.formIsValid=!1)},submitForm:function(){if(this.validateForm(),this.formIsValid){var e={first:this.firstName.val,last:this.lastName.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};this.$emit("save-data",e)}}}};r("ec6d");de.render=le,de.__scopeId="data-v-36344187";var be=de,fe={components:{MentorForm:be},computed:{},methods:{saveData:function(e){this.$store.dispatch("mentors/addMentor",e),this.$router.replace("/mentors")}}};fe.render=H;var je=fe,Oe=Object(n["K"])("data-v-4cab808c");Object(n["u"])("data-v-4cab808c");var me={class:"form-control"},pe=Object(n["i"])("label",{for:"email"},"Your E-Mail",-1),he={class:"form-control"},ve=Object(n["i"])("label",{for:"message"},"Message",-1),ge={class:"actions"},ye=Object(n["h"])("Send Message"),ke={key:0,class:"errors"};Object(n["s"])();var we=Oe((function(e,t,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("form",{onSubmit:t[3]||(t[3]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("div",me,[pe,Object(n["I"])(Object(n["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.email=e})},null,512),[[n["F"],i.email,void 0,{trim:!0}]])]),Object(n["i"])("div",he,[ve,Object(n["I"])(Object(n["i"])("textarea",{id:"message",rows:"6","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.message=e})},null,512),[[n["F"],i.message,void 0,{trim:!0}]])]),Object(n["i"])("div",ge,[Object(n["i"])(o,null,{default:Oe((function(){return[ye]})),_:1})]),i.formIsValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",ke," Please enter a valid email adress/don't submit empty fields. "))],32)})),Ie={data:function(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm:function(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactMentor",{email:this.email,message:this.message,mentorId:this.$route.params.id}),this.$router.replace("/mentors")):this.formIsValid=!1}}};r("68c8");Ie.render=we,Ie.__scopeId="data-v-4cab808c";var xe=Ie,_e=Object(n["K"])("data-v-5b0fdb76");Object(n["u"])("data-v-5b0fdb76");var Ve=Object(n["i"])("header",null,[Object(n["i"])("h2",null,"Received Requests")],-1),Fe={key:1},Ce={key:2};Object(n["s"])();var Re=_e((function(e,t,r,a,i,c){var o=Object(n["z"])("base-dialog"),s=Object(n["z"])("base-spinner"),u=Object(n["z"])("request-item"),l=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{show:!!i.error,title:"An error occured!",onClose:c.handleError},{default:_e((function(){return[Object(n["i"])("p",null,Object(n["C"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])("section",null,[Object(n["i"])(l,null,{default:_e((function(){return[Ve,i.isLoading?(Object(n["r"])(),Object(n["f"])(s,{key:0})):c.hasRequests&&!i.isLoading?(Object(n["r"])(),Object(n["f"])("ul",Fe,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.receivedRequests,(function(e){return Object(n["r"])(),Object(n["f"])(u,{key:e.id,email:e.userEmail,message:e.message},null,8,["email","message"])})),128))])):(Object(n["r"])(),Object(n["f"])("h3",Ce,"You havn't received any requests yet."))]})),_:1})])])})),Me=Object(n["K"])("data-v-24b032f4"),Ne=Me((function(e,t,r,a,i,c){return Object(n["r"])(),Object(n["f"])("li",null,[Object(n["i"])("div",null,[Object(n["i"])("a",{href:c.emailLink},Object(n["C"])(r.email),9,["href"])]),Object(n["i"])("p",null,Object(n["C"])(r.message),1)])})),qe={props:["email","message"],computed:{emailLink:function(){return"mailto:"+this.email}}};r("c58b");qe.render=Ne,qe.__scopeId="data-v-24b032f4";var Le=qe,$e={components:{RequestItem:Le},data:function(){return{isLoading:!1,error:null}},computed:{receivedRequests:function(){return this.$store.getters["requests/requests"]},hasRequests:function(){return this.$store.getters["requests/hasRequests"]}},created:function(){this.loadRequests()},methods:{loadRequests:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("requests/fetchRequests");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),e.error=t.t0.message||"something failed.";case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},handleError:function(){this.error=null}}};r("98e2");$e.render=Re,$e.__scopeId="data-v-5b0fdb76";var ze=$e,Se=Object(n["i"])("h2",null,"Page not found",-1),Ee=Object(n["h"])(" This page could not be found - maybe check out all our "),Ue=Object(n["h"])("mentors"),Pe=Object(n["h"])(". ");function Be(e,t){var r=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["f"])("section",null,[Se,Object(n["i"])("p",null,[Ee,Object(n["i"])(r,{to:"/mentors"},{default:Object(n["H"])((function(){return[Ue]})),_:1}),Pe])])}const Te={};Te.render=Be;var Ae=Te,De=Object(n["K"])("data-v-606d4335");Object(n["u"])("data-v-606d4335");var Ke={class:"form-control"},Je=Object(n["i"])("label",{for:"email"},"E-Mail",-1),He={class:"form-control"},Ze=Object(n["i"])("label",{for:"password"},"Password",-1),Ge={key:0};Object(n["s"])();var Ye=De((function(e,t,r,a,i,c){var o=Object(n["z"])("base-dialog"),s=Object(n["z"])("base-spinner"),u=Object(n["z"])("base-button"),l=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{show:!!i.error,title:"An error occurred",onClose:e.handleError},{default:De((function(){return[Object(n["i"])("p",null,Object(n["C"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])(o,{show:i.isLoading,title:"Authenticating . . .",fixed:""},{default:De((function(){return[Object(n["i"])(s)]})),_:1},8,["show"]),Object(n["i"])(l,null,{default:De((function(){return[Object(n["i"])("form",{onSubmit:t[3]||(t[3]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("div",Ke,[Je,Object(n["I"])(Object(n["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.email=e})},null,512),[[n["F"],i.email,void 0,{trim:!0}]])]),Object(n["i"])("div",He,[Ze,Object(n["I"])(Object(n["i"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password=e})},null,512),[[n["F"],i.password,void 0,{trim:!0}]])]),i.formIsValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",Ge," Please enter a valid email // Password must at least be 6 characters long ")),Object(n["i"])(u,null,{default:De((function(){return[Object(n["h"])(Object(n["C"])(c.submitButtonCaption),1)]})),_:1}),Object(n["i"])(u,{type:"button",mode:"flat",onClick:c.switchAuthMode},{default:De((function(){return[Object(n["h"])(Object(n["C"])(c.switchModeButtonCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])})),We={data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"Login":"Signup"},switchModeButtonCaption:function(){return"login"===this.mode?"Signup":"Login"}},methods:{submitForm:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formIsValid=!0,""!==e.email&&e.email.includes("@")&&!(e.password.length<6)){t.next=4;break}return e.formIsValid=!1,t.abrupt("return");case 4:if(e.isLoading=!0,r={email:e.email,password:e.password},t.prev=6,"login"!==e.mode){t.next=12;break}return t.next=10,e.$store.dispatch("login",r);case 10:t.next=14;break;case 12:return t.next=14,e.$store.dispatch("signup",r);case 14:n="/"+(e.$route.query.redirect||"mentors"),e.$router.replace(n),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](6),e.error=t.t0.message||"Failed to authenticate. try again later.";case 21:e.isLoading=!1;case 22:case"end":return t.stop()}}),t,null,[[6,18]])})))()},switchAuthMode:function(){"login"===this.mode?this.mode="signup":this.mode="login"}},handleError:function(){this.error=null}};r("08a9");We.render=Ye,We.__scopeId="data-v-606d4335";var Qe=We,Xe=Object(a["a"])({history:Object(a["b"])(),routes:[{path:"/",redirect:"/mentors"},{path:"/mentors",component:K},{path:"/mentors/:id",component:u,props:!0,children:[{path:"contact",component:xe}]},{path:"/register",component:je},{path:"/requests",component:ze},{path:"/auth",component:Qe},{path:"/:notFound(.*)",component:Ae}]}),et=Xe,tt=r("5502"),rt=(r("d3b7"),{namespaced:!0,state:function(){return{lastFetch:null,mentors:[{id:"c1",firstName:"Tobias",lastName:"Rauer",areas:["frontend","career"],description:"I'm Tobias and I've worked as a freelance web developer for years. Let me help you become a developer as well!",hourlyRate:30},{id:"c2",firstName:"Julie",lastName:"Jones",areas:["frontend","backend","career"],description:"I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",hourlyRate:30}]}},mutations:{addMentor:function(e,t){e.mentors.push(t)},setMentors:function(e,t){e.mentors=t},setFetchTimestamp:function(e){e.lastFetch=(new Date).getTime()}},actions:{addMentor:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.rootGetters.userId,a={firstName:t.first,lastName:t.last,description:t.desc,hourlyRate:t.rate,areas:t.areas},i=e.rootGetters.token,r.next=5,fetch("https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/mentors/".concat(n,".json?auth=")+i,{method:"PUT",body:JSON.stringify(a)});case 5:return c=r.sent,r.next=8,c.json();case 8:if(o=r.sent,c.ok){r.next=12;break}throw s=new Error(o.message||"Failed to fetch."),s;case 12:e.commit("addMentor",Object(B["a"])(Object(B["a"])({},a),{},{id:n}));case 13:case"end":return r.stop()}}),r)})))()},loadMentors:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.forceRefresh||e.getters.shouldUpdate){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,fetch("https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/mentors.json");case 4:return n=r.sent,r.next=7,n.json();case 7:for(c in a=r.sent,n.ok,i=[],a)o={id:c,firstName:a[c].firstName,lastName:a[c].lastName,description:a[c].description,hourlyRate:a[c].hourlyRate,areas:a[c].areas},i.push(o);e.commit("setMentors",i),e.commit("setFetchTimestamp");case 13:case"end":return r.stop()}}),r)})))()}},getters:{mentors:function(e){return e.mentors},hasMentors:function(e){return e.mentors&&e.mentors.length>0},isMentor:function(e,t,r,n){var a=t.mentors,i=n.userId;return a.some((function(e){return e.id===i}))},shouldUpdate:function(e){var t=e.lastFetch;if(!t)return!0;var r=(new Date).getTime();return(r-t)/1e3>60}}}),nt=(r("b0c0"),{namespaced:!0,state:function(){return{requests:[]}},mutations:{addRequest:function(e,t){e.requests.push(t)},setRequests:function(e,t){e.requests=t}},actions:{contactMentor:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={userEmail:t.email,message:t.message},r.next=3,fetch("https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/requests/".concat(t.mentorId,".json"),{method:"POST",body:JSON.stringify.apply(n)});case 3:return a=r.sent,r.next=6,a.json();case 6:if(i=r.sent,a.ok){r.next=10;break}throw c=new Error(i.message||"Failed to send request!"),c;case 10:n.id=i.name,n.mentorId=t.mentorId,e.commit("addRequest",n);case 13:case"end":return r.stop()}}),r)})))()},fetchRequests:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,c,o,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.rootGetters.userId,n=e.rootGetters.token,t.next=4,fetch("https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/requests/".concat(r,".json?auth=")+n);case 4:return a=t.sent,t.next=7,a.json();case 7:if(i=t.sent,a.ok){t.next=11;break}throw c=new Error(i.message||"Failed to fetch!"),c;case 11:for(s in o=[],i)u={id:s,mentorId:r,userEmail:i[s].userEmail,message:i[s].message},u.push(u);e.commit("setRequests",o);case 14:case"end":return t.stop()}}),t)})))()}},getters:{requests:function(e,t,r,n){var a=n.userId;return e.requests.filter((function(e){return e.mentorId===a}))},hasRequests:function(e,t){return t.requests&&t.requests.length>0}}}),at={state:function(){return{userId:null,token:null,tokenExpiration:null}},actions:{login:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqjpgaopctNKZvdJZaHAfPS_iFdOMZUUs",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return n=r.sent,r.next=5,n.json();case 5:if(a=r.sent,n.ok){r.next=10;break}throw console.log(a),i=new Error(a.message||"Failed to authenticate. Check your login input data."),i;case 10:console.log(a),e.commit("setUser",{token:a.idToken,userId:a.localId,tokenExpiration:a.expiresIn});case 12:case"end":return r.stop()}}),r)})))()},signup:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqjpgaopctNKZvdJZaHAfPS_iFdOMZUUs",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return n=r.sent,r.next=5,n.json();case 5:if(a=r.sent,n.ok){r.next=10;break}throw console.log(a),i=new Error(a.message||"Failed to authenticate. Check your login input data."),i;case 10:console.log(a),e.commit("setUser",{token:a.idToken,userId:a.localId,tokenExpiration:a.expiresIn});case 12:case"end":return r.stop()}}),r)})))()},logout:function(e){e.commit("setUser",{token:null,userId:null,tokenExpiration:null})}},mutations:{setUser:function(e,t){e.token=t.token,e.userId=t.userId,e.tokenExpiration=t.tokenExpiration}},getters:{userId:function(e){return e.userId},token:function(e){return e.token},isAuthenticated:function(e){return!!e.token}}},it=Object(tt["a"])({modules:{mentors:rt,requests:nt,auth:at}}),ct=it;function ot(e,t,r,a,i,c){var o=Object(n["z"])("the-header"),s=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(o),Object(n["i"])(s,null,{default:Object(n["H"])((function(e){return[Object(n["i"])(n["c"],{name:"route",mode:"out-in"},{default:Object(n["H"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["A"])(e.Component)))]})),_:2},1024)]})),_:1})],64)}var st=Object(n["K"])("data-v-4cfc06aa");Object(n["u"])("data-v-4cfc06aa");var ut=Object(n["h"])(".codist"),lt=Object(n["h"])("Mentors"),dt={key:0},bt=Object(n["h"])("Requests"),ft={key:1},jt=Object(n["h"])("Login"),Ot={key:2},mt=Object(n["h"])("Logout");Object(n["s"])();var pt=st((function(e,t,r,a,i,c){var o=Object(n["z"])("router-link"),s=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("header",null,[Object(n["i"])("nav",null,[Object(n["i"])("h1",null,[Object(n["i"])(o,{to:"/"},{default:st((function(){return[ut]})),_:1})]),Object(n["i"])("ul",null,[Object(n["i"])("li",null,[Object(n["i"])(o,{to:"/mentors"},{default:st((function(){return[lt]})),_:1})]),c.isLoggedIn?(Object(n["r"])(),Object(n["f"])("li",dt,[Object(n["i"])(o,{to:"/requests"},{default:st((function(){return[bt]})),_:1})])):(Object(n["r"])(),Object(n["f"])("li",ft,[Object(n["i"])(o,{to:"/auth"},{default:st((function(){return[jt]})),_:1})])),c.isLoggedIn?(Object(n["r"])(),Object(n["f"])("li",Ot,[Object(n["i"])(s,{onClick:c.logout},{default:st((function(){return[mt]})),_:1},8,["onClick"])])):Object(n["g"])("",!0)])])])})),ht={computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.replace("/mentors")}}};r("a102");ht.render=pt,ht.__scopeId="data-v-4cfc06aa";var vt=ht,gt={components:{TheHeader:vt}};r("03f8");gt.render=ot;var yt=gt,kt={class:"card"};function wt(e,t){return Object(n["r"])(),Object(n["f"])("div",kt,[Object(n["y"])(e.$slots,"default")])}r("38ba");const It={};It.render=wt;var xt=It,_t=(r("9911"),Object(n["K"])("data-v-6eeac848")),Vt=_t((function(e,t,r,a,i,c){var o=Object(n["z"])("router-link");return r.link?(Object(n["r"])(),Object(n["f"])(o,{key:1,to:r.to,class:r.mode},{default:_t((function(){return[Object(n["y"])(e.$slots,"default")]})),_:3},8,["to","class"])):(Object(n["r"])(),Object(n["f"])("button",{key:0,class:r.mode},[Object(n["y"])(e.$slots,"default")],2))})),Ft={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};r("38a1");Ft.render=Vt,Ft.__scopeId="data-v-6eeac848";var Ct=Ft,Rt=Object(n["K"])("data-v-5147169a");Object(n["u"])("data-v-5147169a");var Mt={class:"spinner"},Nt=Object(n["i"])("div",{class:"lds-roller"},[Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div")],-1);Object(n["s"])();var qt=Rt((function(e,t){return Object(n["r"])(),Object(n["f"])("div",Mt,[Nt])}));r("3ec8");const Lt={};Lt.render=qt,Lt.__scopeId="data-v-5147169a";var $t=Lt,zt=(r("c7cd"),Object(n["K"])("data-v-339cf1a6"));Object(n["u"])("data-v-339cf1a6");var St={key:0,open:""},Et={key:0},Ut=Object(n["h"])("Close");Object(n["s"])();var Pt=zt((function(e,t,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])(n["b"],{to:"body"},[r.show?(Object(n["r"])(),Object(n["f"])("div",{key:0,onClick:t[1]||(t[1]=function(){return c.tryClose&&c.tryClose.apply(c,arguments)}),class:"backdrop"})):Object(n["g"])("",!0),Object(n["i"])(n["c"],{name:"dialog"},{default:zt((function(){return[r.show?(Object(n["r"])(),Object(n["f"])("dialog",St,[Object(n["i"])("header",null,[Object(n["y"])(e.$slots,"header",{},(function(){return[Object(n["i"])("h2",null,Object(n["C"])(r.title),1)]}))]),Object(n["i"])("section",null,[Object(n["y"])(e.$slots,"default")]),r.fixed?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("menu",Et,[Object(n["y"])(e.$slots,"actions",{},(function(){return[Object(n["i"])(o,{onClick:c.tryClose},{default:zt((function(){return[Ut]})),_:1},8,["onClick"])]}))]))])):Object(n["g"])("",!0)]})),_:1})])})),Bt={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose:function(){this.fixed||this.$emit("close")}}};r("b5e0");Bt.render=Pt,Bt.__scopeId="data-v-339cf1a6";var Tt=Bt,At=Object(n["e"])(yt);At.use(et),At.use(ct),At.component("base-card",xt),At.component("base-button",Ct),At.component("base-badge",F),At.component("base-spinner",$t),At.component("base-dialog",Tt),At.mount("#app")},"68c8":function(e,t,r){"use strict";r("80c7")},"6a28":function(e,t,r){"use strict";r("0fae")},"6c59":function(e,t,r){},"80c7":function(e,t,r){},"8a16":function(e,t,r){"use strict";r("4b02")},"98e2":function(e,t,r){"use strict";r("6c59")},"9a2b":function(e,t,r){},a102:function(e,t,r){"use strict";r("428c")},a98c:function(e,t,r){},b5e0:function(e,t,r){"use strict";r("dc83")},be72:function(e,t,r){},c58b:function(e,t,r){"use strict";r("1abc")},cf1f:function(e,t,r){},dc83:function(e,t,r){},ec6d:function(e,t,r){"use strict";r("2b3a")},f341:function(e,t,r){}});
//# sourceMappingURL=app.692843ae.js.map