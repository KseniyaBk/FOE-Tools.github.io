webpackJsonp([29,32,37],{"2GRf":function(t,e,a){"use strict";var r=a("woOf"),i=a.n(r),s=a("FQzT"),o={levelCost:"sp_lc",currentDeposits:"sp_cd",yourParticipation:"sp_yp",otherParticipation:"sp_op",yourArcBonus:"sp_yab",fpTargetReward:"sp_ftr"},n={levelCost:{comparator:[">",0],type:"int"},currentDeposits:{comparator:[">=",0],type:"int"},yourParticipation:{comparator:[">=",0],type:"int"},otherParticipation:{comparator:[">=",0],type:"int"},yourArcBonus:{comparator:[">=",0],type:"float"},fpTargetReward:{comparator:[">=",0],type:"int"}};e.a={name:"SecurePosition",props:{levelData:{type:Object,default:null},canPermalink:{type:Boolean,default:!1}},data:function(){var t={i18nPrefix:"components.secure_position.",fp:0,yourParticipation:0,otherParticipation:0,levelCost:this.haveInputLevelCost()?this.$props.levelData.cost:0,currentDeposits:0,yourArcBonus:void 0===this.$cookies.get("yourArcBonus")?0:this.$cookies.get("yourArcBonus"),fpTargetReward:0,roi:0,formValid:!1,errors:{levelCost:!1,currentDeposits:!1,yourParticipation:!1,otherParticipation:!1,yourArcBonus:!1,fpTargetReward:!1},change:this.haveInputLevelCost()};return i()(t,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:o.levelCost,value:t.levelCost}),this.$store.commit("ADD_URL_QUERY",{key:o.currentDeposits,value:t.currentDeposits}),this.$store.commit("ADD_URL_QUERY",{key:o.yourParticipation,value:t.yourParticipation}),this.$store.commit("ADD_URL_QUERY",{key:o.otherParticipation,value:t.otherParticipation}),this.$store.commit("ADD_URL_QUERY",{key:o.yourArcBonus,value:t.yourArcBonus}),this.$store.commit("ADD_URL_QUERY",{key:o.fpTargetReward,value:t.fpTargetReward}),t},computed:{isPermalink:function(){return this.$store.state.isPermalink},permaLink:function(){return{path:this.$i18n.path("secure-position/"),query:this.$store.state.urlQuery}}},watch:{levelData:function(t){this.$data.change=!0,this.$data.levelCost=t.cost},levelCost:function(t,e){this.$data.change=!0,s.a.handlerForm(this,"levelCost",0===t.length?0:t,e,n.levelCost.comparator)===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.levelCost,value:t}),this.calculate())},currentDeposits:function(t,e){this.$data.change=!0,s.a.handlerForm(this,"currentDeposits",0===t.length?0:t,e,n.currentDeposits.comparator)===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.currentDeposits,value:t}),this.calculate())},yourParticipation:function(t,e){this.$data.change=!0,s.a.handlerForm(this,"yourParticipation",0===t.length?0:t,e,n.yourParticipation.comparator)===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.yourParticipation,value:t}),this.calculate())},otherParticipation:function(t,e){this.$data.change=!0,""===t?this.$data.otherParticipation=0:s.a.handlerForm(this,"otherParticipation",0===t.length?0:t,e,n.otherParticipation.comparator)===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.otherParticipation,value:t}),this.calculate())},yourArcBonus:function(t,e){this.$data.change=!0,s.a.handlerForm(this,"yourArcBonus",0===t.length?0:t,e,n.yourArcBonus.comparator,!this.isPermalink,"/","float")===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.yourArcBonus,value:t}),this.calculate())},fpTargetReward:function(t,e){this.$data.change=!0,this.haveInputLevelCost()&&(this.$props.levelData.investment.map(function(t){return t.reward}).indexOf(t)>=0?(this.$data.errors.fpTargetReward=!1,this.$store.commit("UPDATE_URL_QUERY",{key:o.fpTargetReward,value:t}),this.calculate()):this.$data.errors.fpTargetReward=!0),s.a.handlerForm(this,"fpTargetReward",0===t.length?0:t,e,n.fpTargetReward.comparator)===s.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.fpTargetReward,value:t}),this.calculate())}},methods:{haveInputLevelCost:function(){return null!==this.$props.levelData},getNumberOfRemainingPoints:function(){return isNaN(this.$data.levelCost)||isNaN(this.$data.currentDeposits)||this.$data.levelCost-this.$data.currentDeposits<0?this.$t("components.secure_position.block_place.unknown"):this.$data.levelCost-this.$data.currentDeposits},calculate:function(){if(this.$data.change&&this.checkFormValid()){var t=Math.ceil((this.$data.levelCost-this.$data.currentDeposits-(this.$data.otherParticipation-this.$data.yourParticipation))/2)+this.$data.otherParticipation;t<=this.$data.otherParticipation?this.$data.fp=-1:(this.$data.fp=t,this.$data.yourArcBonus>=0&&this.$data.fpTargetReward>0&&(this.$data.roi=Math.round((1+this.$data.yourArcBonus/100)*this.$data.fpTargetReward-t)))}},checkFormValid:function(){return this.$data.formValid=!0,this.$data.errors.levelCost=!1,this.$data.errors.currentDeposits=!1,this.$data.errors.yourParticipation=!1,this.$data.errors.otherParticipation=!1,this.$data.levelCost===this.$data.currentDeposits===this.$data.yourParticipation===this.$data.otherParticipation&&0===this.$data.levelCost||(this.$data.levelCost>0||(this.$data.formValid=!1,this.$data.errors.levelCost=!0),this.$data.currentDeposits<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.levelCost=!0,this.$data.errors.currentDeposits=!0),this.$data.yourParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.levelCost=!0),this.$data.otherParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.otherParticipation=!0,this.$data.errors.levelCost=!0),this.$data.yourParticipation+this.$data.otherParticipation<=this.$data.currentDeposits||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.otherParticipation=!0,this.$data.errors.currentDeposits=!0),this.$data.formValid)},haveError:function(t){return this.$data.errors[t]?"is-danger":""},submitSecurePosition:function(){var t=s.a.FormCheck.NO_CHANGE,e=!0;for(var a in n){var r=s.a.handlerForm(this,a,this.$data[a],this.$data[a],n[a].comparator,!1,"",n[a].type);r.state===s.a.FormCheck.VALID?t=e?s.a.FormCheck.VALID:t:r.state===s.a.FormCheck.INVALID&&(e=!1,t=s.a.FormCheck.INVALID)}t!==s.a.FormCheck.INVALID&&this.calculate()},checkQuery:function(){var t={},e=s.a.FormCheck.NO_CHANGE,a=void 0;for(var r in n)(a=s.a.checkFormNumeric(this.$route.query[o[r]],-1,n[r].comparator,n[r].type)).state===s.a.FormCheck.VALID&&(e=s.a.FormCheck.VALID,t[r]=a.value);return e===s.a.FormCheck.VALID&&(this.$store.commit("IS_PERMALINK",!0),t.change=!0),t}},mounted:function(){this.calculate()}}},"80ur":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("PjV6"),i=a("VU/8")(r.a,null,!1,null,null,null);i.options.__file="pages/_lang/secure-position.vue",e.default=i.exports},B9lW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("zpN9"),i=a("mo6o"),s=a("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="pages/_lang/secure-position/index.vue",e.default=s.exports},EDuG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("enqI"),i=a("VU/8")(r.a,null,!1,null,null,null);i.options.__file="pages/secure-position.vue",e.default=i.exports},PjV6:function(t,e,a){"use strict";var r=a("B9lW");e.a=r.default},WOES:function(t,e,a){"use strict";var r=a("2GRf"),i=a("w4/W"),s=a("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="components/secure-position/index.vue",e.a=s.exports},enqI:function(t,e,a){"use strict";var r=a("80ur");e.a=r.default},mo6o:function(t,e,a){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("secure-position",{attrs:{"can-permalink":!0}})};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},"w4/W":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.title")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("p",[t._v(t._s(t.$t("utils.description.p1")))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.level_cost"),"label-for":"splevelCost",type:t.haveError("levelCost")}},[a("b-input",{attrs:{type:"number",min:"0",name:"level-cost",id:"splevelCost",autocomplete:"off",disabled:t.haveInputLevelCost(),autofocus:t.canPermalink},model:{value:t.levelCost,callback:function(e){t.levelCost=t._n(e)},expression:"levelCost"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.current_deposits"),"label-for":"spCurrentDeposits",type:t.haveError("currentDeposits")}},[a("b-input",{attrs:{type:"number",min:"0",name:"current-deposits",id:"spCurrentDeposits",autocomplete:"off"},model:{value:t.currentDeposits,callback:function(e){t.currentDeposits=t._n(e)},expression:"currentDeposits"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_participation"),"label-for":"spYourParticipation",type:t.haveError("yourParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"your-participation",id:"spYourParticipation",autocomplete:"off"},model:{value:t.yourParticipation,callback:function(e){t.yourParticipation=t._n(e)},expression:"yourParticipation"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.other_participation"),"label-for":"spOtherParticipation",type:t.haveError("otherParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"other-participation",id:"spOtherParticipation",autocomplete:"off"},model:{value:t.otherParticipation,callback:function(e){t.otherParticipation=t._n(e)},expression:"otherParticipation"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_arc_bonus"),"label-for":"spYourArcBonus",type:t.haveError("yourArcBonus")}},[a("b-input",{attrs:{type:"number",min:"0",step:"0.1",name:"your-arc-bonus",id:"spYourArcBonus",autocomplete:"off"},model:{value:t.yourArcBonus,callback:function(e){t.yourArcBonus=t._n(e)},expression:"yourArcBonus"}})],1)],1),a("div",{staticClass:"column is-half"},[t.haveInputLevelCost()?a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.target_reward"),"label-for":"fpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-select",{attrs:{id:"fpTargetReward",name:"fp-target-reward",expanded:""},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=e},expression:"fpTargetReward"}},t._l(t.levelData.investment,function(e,r){return a("option",{key:r,attrs:{id:"option_"+r,autocomplete:"off"},domProps:{value:e.reward}},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.place",{place:r+1,count:e.reward})))])}))],1):a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.fp_target_reward"),"label-for":"spFpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-input",{attrs:{type:"number",min:"0",step:"5",name:"fp-target-reward",id:"spFpTargetReward",autocomplete:"off"},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=t._n(e)},expression:"fpTargetReward"}})],1)],1)]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_complete_level",{count:t.getNumberOfRemainingPoints()})))]),t.formValid?t.fp>0?a("div",[t.fp<=t.yourParticipation?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.already_blocked")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.default",{count:t.fp})))]),t.fp>=t.yourParticipation&&t.fp-t.yourParticipation>0&&t.yourParticipation>0?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.fp_to_secure_html",{count:t.fp-t.yourParticipation})))]):t._e()]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.cant_block")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.error")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.fp>0&&t.yourArcBonus>=0&&t.fpTargetReward>0,expression:"(fp > 0) && (yourArcBonus >= 0) && (fpTargetReward > 0)"}],staticClass:"margin-top-one-em"},[a("article",{staticClass:"message",class:{"is-success":t.roi>0,"is-danger":t.roi<0}},[a("div",{staticClass:"message-body has-text-dark"},[t.roi>0?a("p",[t._m(0),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.profit",{count:Math.abs(t.roi)})))]):t.roi<0?a("p",[t._m(1),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.loss",{count:Math.abs(t.roi)})))]):a("p",[t._m(2),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.neutral")))])])])])])};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])}]};e.a=i},zpN9:function(t,e,a){"use strict";var r=a("WOES"),i="routes.secure_position.";e.a={head:function(){return this.$store.commit("SET_HERO",{title:i+"hero.title",subtitle:i+"hero.subtitle"}),{title:this.$t(i+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","secure_position"),{i18nPrefix:i}},components:{securePosition:r.a}}}});