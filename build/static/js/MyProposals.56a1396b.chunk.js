(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{3514:function(e,a,t){"use strict";t.r(a);var l,n=t(2),o=t.n(n),r=t(6),s=t(16),p=t(15),c=t(21),i=t(20),m=t(0),u=t.n(m),d=t(3),E=t(28),g=t(18),f=t(13),_=t(90),v=t(1351),y=t(1354),b=t(391),h=t(63),M=t(1350),O=t(1427),w=t.n(O),j=t(264),T=t.n(j),K=t(8),A=t(265),k=t(4),S=t(11),V=t(50),C=t.n(V),N=t(39),x=t(140),P=Object(x.a)(l=function(e){Object(c.a)(m,e);var a,l,n=Object(i.a)(m);function m(){var e;return Object(s.a)(this,m),(e=n.call(this)).load=Object(r.a)(o.a.mark(function a(){var t,l,n,r,s,p,c,i,m,u,d,E,f,_,v,y=arguments;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<y.length&&void 0!==y[0]?y[0]:1,l=1<y.length&&void 0!==y[1]?y[1]:20,n=2<y.length?y[2]:void 0,r=e.props,s=r.account,r.currentWallet,e.setState({loading:!n}),a.next=7,g.e.getMyProposalList({limit:l,start:(t-1)*l,address:s.address,type:1});case 7:if(p=a.sent,c=p.data,i=p.total,m=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],u=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],k.B)for(d in c)for(E in c[d].paramters)c[d].paramters[E].proposalKey=m[c[d].paramters[E].key],c[d].paramters[E].proposalVal=c[d].paramters[E].value;else for(f in c)for(_ in c[f].paramters)for(v in u)u[v].id==c[f].paramters[_].key&&(c[f].paramters[_].proposalKey=u[v].key,c[f].paramters[_].proposalVal=c[f].paramters[_].value);e.setState({loading:!1,dataSource:c,total:i,page:t,pagination:Object(K.a)({},e.state.pagination,{total:i})});case 14:case"end":return a.stop()}},a)})),e.handleTableChange=function(a,t,l){var n=Object(K.a)({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.hideModal=function(){e.setState({modal:null,isAction:!1})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isAction:!1,timer:null},e}return Object(p.a)(m,[{key:"componentDidMount",value:function(){var e=this,a=this.props;a.account,a.currentWallet,this.load();var t=setInterval(function(){e.load(1,20,1)},1e4);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;return this.state.dataSource,[{title:T()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a){return u.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return u.a.createElement("div",{key:a},k.B?u.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_1"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/36e5)," \xa0",u.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_2"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_3"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_4"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)," \xa0",u.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_5"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_6"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_7"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_8"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_9"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)," \xa0",u.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_10"})),u.a.createElement("span",null,Object(d.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_12"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K," TRX")),"getExchangeCreateFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_13"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_14"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_15"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_16"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_17"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_18"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_19"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_20"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_21"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_22"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_23"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal),"/",u.a.createElement("span",null,Object(d.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_24"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,u.a.createElement("span",null,e.proposalVal),"/",u.a.createElement("span",null,Object(d.c)("propose_minute"))):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_25"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_26"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_27"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_28"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_29"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_30"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&u.a.createElement("div",{className:"mt-1"},u.a.createElement("span",null,l.formatMessage({id:"propose_31"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_32"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_33"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&u.a.createElement("div",{className:"mt-1"},u.a.createElement("span",null,l.formatMessage({id:"propose_34"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/k.K)," \xa0",u.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"propose_35"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_prohibit")):u.a.createElement("span",null,Object(d.c)("propose_not_prohibit")))):u.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," ",Object(d.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),u.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:T()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+T()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a){return u.a.createElement("div",null,u.a.createElement("div",{style:{color:"#333"}},u.a.createElement(f.a,{value:Number(e)}),"\xa0",u.a.createElement(f.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),u.a.createElement("div",{style:{color:"#C23631"}},u.a.createElement(f.a,{value:Number(a.expirationTime)}),"\xa0",u.a.createElement(f.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:T()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",width:"12%",render:function(e){return u.a.createElement("div",null,"PENDING"==e&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(d.c)("proposal_voting"))),"DISAPPROVED"==e&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(d.c)("proposal_ineffective"))),"APPROVED"==e&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(d.c)("proposal_effective"))),"CANCELED"==e&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(d.c)("proposal_cancelled"))))}},{title:function(){var e=T()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+T()(l.formatMessage({id:"proposal_total_votes"})),a=T()(l.formatMessage({id:"proposal_votes_tip"}));return u.a.createElement("div",null,e," ",u.a.createElement("span",{className:"mr-2"},u.a.createElement(A.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",render:function(e,a){return"".concat(a.validVotes,"/").concat(a.totalVotes)}},{title:T()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l){return u.a.createElement("div",{className:"detail-action"},u.a.createElement("div",null,u.a.createElement(h.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(d.c)("proposal_more"))),t.address&&"PENDING"===l.state?u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.cancelModal(l.proposalId)}},Object(d.c)("proposal_cancel")))):"")}}]}},{key:"cancelModal",value:function(e){var a=this;this.props.intl,this.setState({modal:u.a.createElement(S.c,{isOpen:!0,toggle:this.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},u.a.createElement(S.f,{toggle:this.hideModal,className:""}),u.a.createElement(S.d,{style:{padding:"0 0 1.5rem"}},u.a.createElement("div",{style:{color:"#333",padding:"0 0 30px",fontSize:"16px",textAlign:"center"}},Object(d.c)("proposal_cancel_tip1")),u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement("div",{style:{width:"90px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#C23631",color:"#fff",cursor:"pointer"},onClick:function(){a.cancelFun(e)}},Object(d.c)("confirm")))))})}},{key:"cancelFun",value:(l=Object(r.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isAction)return e.abrupt("return");e.next=2;break;case 2:return this.setState({isAction:!0}),e.next=5,this.getResult(a);case 5:e.sent?this.setState({modal:u.a.createElement(C.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(d.c)("proposal_success"))}):this.setState({modal:u.a.createElement(C.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(d.c)("proposal_fail"))}),this.setState({isAction:!1});case 8:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)})},{key:"getResult",value:(a=Object(r.a)(o.a.mark(function e(a,t){var l,n,r,s,p,c,i,m,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,k.B)return"ACCOUNT_LEDGER"===this.props.walletType.type?r=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(r=n.tronWeb),e.next=6,r.transactionBuilder.deleteProposal(a,n.address,1).catch(function(e){return console.log(e)});e.next=14;break;case 6:return s=e.sent,e.next=9,Object(N.c)(s,r);case 9:p=e.sent,c=p.result,l=c,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.deleteProposal(a,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(N.e)(i,n.sunWeb);case 19:m=e.sent,u=m.result,l=u;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,a=e.modal,l=(e.page,e.total),n=(e.pageSize,e.loading),o=e.dataSource,r=(e.emptyState,e.pagination),s=this.getColumns();return this.props.intl,u.a.createElement("div",{className:""},a,n&&u.a.createElement("div",{className:"loading-style"},u.a.createElement(_.b,null)),!n&&(0<l?u.a.createElement(w.a,{bordered:!0,columns:s,rowKey:function(e,a){return a},dataSource:o,scroll:scroll,pagination:r,loading:n,onChange:this.handleTableChange}):u.a.createElement("div",{className:"my-proposals-empty"},u.a.createElement("img",{src:t(2410),alt:""}),u.a.createElement("div",null,Object(d.b)("trc20_no_data"),",",Object(d.b)("proposal_go"),u.a.createElement(h.a,{to:"/proposalscreate"},Object(d.b)("proposal_create")),Object(d.b)("proposal_or"),u.a.createElement(h.a,{to:"/proposals"},Object(d.b)("proposal_vote_link"))))))}}]),m}(u.a.Component))||l,F=Object(E.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet,locale:e.app.activeLanguage}},null)(Object(f.h)(P)),R=t(3427),I=function(e){Object(c.a)(l,e);var a=Object(i.a)(l);function l(){var e;return Object(s.a)(this,l),(e=a.call(this)).load=Object(r.a)(o.a.mark(function a(){var t,l,n,r,s,p,c=arguments;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<c.length&&void 0!==c[0]?c[0]:1,l=1<c.length&&void 0!==c[1]?c[1]:20,n=e.props,r=n.account,n.currentWallet,e.setState({loading:!0}),a.next=6,g.e.getMyProposalList({limit:l,start:(t-1)*l,address:r.address});case 6:(s=a.sent).data,p=s.total,e.setState({loading:!1,total:p});case 10:case"end":return a.stop()}},a)})),e.state={loading:!1,tabs:{myInitiated:{id:"myInitiated",icon:"fa fa-exchange-alt",path:"",label:u.a.createElement("span",null,Object(d.c)("proposal_my_initiate")),cmp:function(){return u.a.createElement(F,null)}},myParticipated:{id:"myParticipated",icon:"fa fa-handshake",path:"/myparticipated",label:u.a.createElement("span",null,Object(d.c)("proposal_my_participate")),cmp:function(){return u.a.createElement(R.default,null)}}},total:0},e}return Object(p.a)(l,[{key:"componentWillMount",value:function(){var e=this.props,a=e.account,t=e.currentWallet;a&&t&&t.representative&&t.representative.enabled||this.props.history.push("/proposals")}},{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(e){var a=this.props.account;e.account.address!=a.address&&this.props.history.push("/proposals")}},{key:"render",value:function(){var e=this.state,a=e.tabs,l=e.loading,n=e.total,o=this.props,r=(o.activeLanguage,o.match);return u.a.createElement("main",{className:"container header-overlap committee"},l?u.a.createElement("div",{className:"card"},u.a.createElement(_.b,null)):u.a.createElement("div",null,0<n?u.a.createElement("div",{className:"row proposal-table my-proposals-table"},u.a.createElement("div",{className:"col-md-12 "},u.a.createElement("div",{className:""},u.a.createElement("div",{className:"card-header list-style-body__header"},u.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},Object.values(a).map(function(e){return u.a.createElement("li",{key:e.id,className:"nav-item"},u.a.createElement(v.a,{exact:!0,to:r.url+e.path,className:"nav-link text-dark"},e.label))}))),u.a.createElement("div",{className:"card-body p-0 token_black"},u.a.createElement(y.a,null,Object.values(a).map(function(e){return u.a.createElement(b.a,{key:e.id,exact:!0,path:r.url+e.path,render:function(){return u.a.createElement(e.cmp,null)}})})))))):u.a.createElement("div",{className:"my-proposals-empty"},u.a.createElement("img",{src:t(2410),alt:""}),u.a.createElement("div",null,Object(d.b)("trc20_no_data"),",",Object(d.b)("proposal_go"),u.a.createElement(h.a,{to:"/proposalscreate"},Object(d.b)("proposal_create")),Object(d.b)("proposal_or"),u.a.createElement(h.a,{to:"/proposals"},Object(d.b)("proposal_vote_link"))))))}}]),l}(u.a.Component);a.default=Object(E.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current}},null)(Object(M.a)(Object(f.h)(I)))}}]);