/*! Built with http://stenciljs.com */
const{h:t}=window.OceKanban;class e{render(){return t("div",{class:"list_wrapper"},t("div",{class:"list"},t("div",{class:"list_header"},t("h1",{class:"header_title"},this.title),this.note?t("p",{class:"header_desc"},this.note):"",t("div",{class:"header_infos"},this.due?t("div",{class:"header_due"},t("span",{class:"due_item"},"Due ",this.due)):"")),t("div",{class:"list_cards"},t("h2",null,"Commitments (",this.cards.length,")"),this.cards?this.cards.map(e=>t("oce-card",{members:e.members,due:e.due,note:e.note||e.title,action:()=>{console.log("hello")}})):""),0!==this.outputs.length?t("oce-output",{outputs:this.outputs}):""))}static get is(){return"oce-bin"}static get encapsulation(){return"shadow"}static get properties(){return{cards:{type:"Any",attr:"cards"},due:{type:String,attr:"due"},note:{type:String,attr:"note"},outputs:{type:"Any",attr:"outputs"},title:{type:String,attr:"title"}}}static get style(){return".list_wrapper[data-oce-bin]{width:300px;margin-right:10px;height:100%;box-sizing:border-box;display:inline-block;vertical-align:top;white-space:nowrap}.list[data-oce-bin]{background:#e2e4e6;border-radius:3px;box-sizing:border-box;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-height:100%;position:relative;white-space:normal;box-shadow:0 1px 1px rgba(23,43,77,.2),0 0 .5px 0 rgba(23,43,77,.25);transition:all .3s cubic-bezier(.15,1,.33,1);-webkit-transition:all .3s cubic-bezier(.15,1,.33,1)}h2[data-oce-bin]{font-weight:500;font-size:14px;letter-spacing:.5}.list_header[data-oce-bin]{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;padding:8px 10px;position:relative;min-height:18px}.header_title[data-oce-bin]{font-size:16px;text-align:left;font-weight:500;margin:0;margin-top:5px;text-transform:capitalize;letter-spacing:.5px}.header_desc[data-oce-bin]{font-size:14px;font-weight:300;line-height:20px;margin-top:5px}.header_due[data-oce-bin]{float:left;height:24px;line-height:24px;margin-left:0;background:#c7c7c7;border-radius:3px;padding:0 10px}.header_due[data-oce-bin]   .due_item[data-oce-bin]{line-height:24px;font-size:13px;text-decoration:underline;font-weight:500;color:#444}.header_members[data-oce-bin]{float:left;width:24px;height:24px;border-radius:3px;margin-right:5px}.members_item[data-oce-bin]{width:24px;height:24px;border-radius:3px;background:#c7c7c7;display:block}.members_item[data-oce-bin]   .item_photo[data-oce-bin]{width:24px;height:24px;border-radius:3px}.header_setName[data-oce-bin]{background:0 0;border:none;border-radius:3px;box-shadow:none;font-weight:700;margin:-3px -5px;height:18px;min-height:18px;padding:3px 5px;resize:none;max-height:16pc;overflow:hidden;word-wrap:break-word;height:24px}.header_setName.isEditing[data-oce-bin]{background:rgba(255,255,255,.8)}.list_cards[data-oce-bin]{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;margin:0 4px;padding:0 4px;z-index:1;min-height:0;-webkit-box-flex:1;overflow-x:hidden}"}}class s{render(){return t("div",{onClick:this.action,class:"card"},t("span",{class:"card_title"},this.note),t("div",{class:"card_infos"},t("h4",{class:"infos_due"},"Due to ",this.due),t("div",{class:"infos_members"},this.members.map(e=>t("span",{class:"members_item"},t("img",{class:"item_photo",src:e.image}))))))}static get is(){return"oce-card"}static get encapsulation(){return"shadow"}static get properties(){return{action:{type:"Any",attr:"action"},due:{type:String,attr:"due"},members:{type:"Any",attr:"members"},note:{type:String,attr:"note"}}}static get style(){return".card[data-oce-card]{background:#fff;border-bottom:1px solid #ccc;border-radius:3px;overflow:hidden;position:relative;z-index:10;display:block;-webkit-box-orient:vertical;-webkit-box-direction:normal;cursor:pointer;margin-bottom:6px;max-width:300px;min-height:20px;position:relative;z-index:0;padding:10px}.card[data-oce-card]:hover{background:#edeff0;border-bottom-color:#d6dacc}.card.dragged[data-oce-card]{opacity:.5;cursor:move}.card_title[data-oce-card]{font-size:14px;line-height:20px;clear:both;font-weight:400;margin:0 0 4px;overflow:hidden;word-wrap:break-word;color:#4d4d4d}.card_infos[data-oce-card]{margin-top:10px}.card_infos[data-oce-card]   .infos_due[data-oce-card]{color:#adadad;font-weight:500;font-size:12px;letter-spacing:1px;margin:0;float:left;height:20px;line-height:20px}.card_infos[data-oce-card]   .infos_members[data-oce-card]{float:right}.card_infos[data-oce-card]   .infos_members[data-oce-card]   .members_item[data-oce-card]{width:20px;height:20px;border-radius:100%;display:inline-block;background:#adadad;margin-left:5px}.card_infos[data-oce-card]   .infos_members[data-oce-card]   .members_item[data-oce-card]   img[data-oce-card]{width:20px;height:20px;border-radius:100%}"}}class a{render(){let e=JSON.parse(this.bins);return t("div",{class:"board_container"},t("div",{class:"board"},e.map(e=>t("oce-bin",{cards:e.cards,outputs:e.outputs,due:e.due,title:e.title,note:e.note}))))}static get is(){return"oce-kanban"}static get encapsulation(){return"shadow"}static get properties(){return{bins:{type:String,attr:"bins"},due:{type:String,attr:"due"}}}static get style(){return".board_container[data-oce-kanban]{position:relative}.board[data-oce-kanban]{user-select:none;white-space:nowrap;overflow-x:auto;overflow-y:hidden;position:absolute;right:0;left:0;top:0;margin-bottom:20px}"}}class r{render(){return t("section",{class:"modal_content"},t("div",{class:"content_info"},t("div",{class:"content_module"},t("div",{class:"module_header"},t("div",{class:"header_labels"},t("div",{class:"labels_due"},t("div",{class:"due"},t("span",{class:"due_item"},"Due ",this.data.due))))))))}static get is(){return"oce-modal"}static get encapsulation(){return"shadow"}static get properties(){return{data:{type:"Any",attr:"data"}}}static get style(){return".cardModal[data-oce-modal]{width:500px;box-shadow:0 2px 8px 3px rgba(0,0,0,.3);z-index:9999999999;background-color:#edeff0;padding:0;margin:40px auto;position:relative;border-radius:3px;padding-bottom:20px;outline:0}.modal_content[data-oce-modal]{padding:10px}.content_info[data-oce-modal]{margin-left:40px}.content_info[data-oce-modal]   .info_add[data-oce-modal]{color:#8c8c8c;padding:6px 8px;position:relative;user-select:none;display:block;margin:2px 0;border-radius:3px;outline:0;font-size:14px;text-decoration:underline;cursor:pointer}.info_add[data-oce-modal]   .add_icon[data-oce-modal]{vertical-align:sub;margin-right:10px}.info_add[data-oce-modal]:hover{background:#d6dadc;color:#4d4d4d}.modal_content[data-oce-modal]   .content_header[data-oce-modal]{margin-left:10px;margin-top:10px;background:#edeff0;margin:-10px;padding:20px}.content_header[data-oce-modal]   .header_sub[data-oce-modal]{color:#444;font-size:11px;margin-top:-5px;display:block;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px}.header_sub[data-oce-modal]   i[data-oce-modal]{text-decoration:underline;font-style:normal}.header_labels[data-oce-modal]{margin-top:10px}.header_labels[data-oce-modal]:after, .header_labels[data-oce-modal]:before{content:\" \";display:table}.header_labels[data-oce-modal]:after{clear:both}.labels_due[data-oce-modal], .labels_members[data-oce-modal], .labels_process[data-oce-modal]{float:left;display:block}.labels_members[data-oce-modal]   span[data-oce-modal]{vertical-align:super;width:24px;height:24px;display:inline-block}.members[data-oce-modal]{display:inline-block;vertical-align:sub;margin-left:5px}.labels_due[data-oce-modal]   h5[data-oce-modal], .labels_members[data-oce-modal]   h5[data-oce-modal], .labels_process[data-oce-modal]   h5[data-oce-modal]{color:#8c8c8c;display:inline-block;font-weight:400;font-size:14px;margin:0 6px 6px 0;letter-spacing:.5px}.labels_due[data-oce-modal]{float:right}.members[data-oce-modal]   .members_item[data-oce-modal]{background-color:#d6dadc;border-radius:3px;color:#4d4d4d;display:block;float:left;height:30px;margin:0 4px 4px 0;overflow:hidden;position:relative;width:30px;-ms-user-select:none;user-select:none;z-index:0}.members_item[data-oce-modal]   img[data-oce-modal]{width:30px;height:30px;display:block;-webkit-appearance:none;line-height:30px;text-indent:4px;font-size:13px;overflow:hidden;max-width:30px;max-height:30px;text-overflow:ellipsis}.members_item[data-oce-modal]   i[data-oce-modal]{text-align:center;width:30px;height:30px;display:block;line-height:36px;cursor:pointer}.members_item[data-oce-modal]   i[data-oce-modal]:hover{background:#ced1d2}.process[data-oce-modal]   .process_item[data-oce-modal]{background-color:#b6bbbf;border-radius:3px;color:#fff;display:block;margin-right:3px;max-width:100%;overflow:hidden;padding:3px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;border-radius:3px;-moz-box-sizing:border-box;box-sizing:border-box;display:block;float:left;font-size:9pt;font-weight:600;height:30px;line-height:30px;margin:0 4px 4px 0;min-width:40px;padding:0 8px;width:auto}.due[data-oce-modal]   .due_item[data-oce-modal]{background-color:#e2e4e6;border-radius:3px;color:#8c8c8c;cursor:default;display:block;height:20px;line-height:20px;margin:0 4px 4px 0;max-width:100%;overflow:hidden;padding:5px 10px;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;text-decoration:underline}.activities_list[data-oce-modal]   .list_item[data-oce-modal]{border-bottom:1px solid #e2e4e6;margin-left:33px;min-height:30px;padding:10px 0;position:relative}.list_item[data-oce-modal]{margin:0 6px 0 0;word-wrap:break-word;font-size:14px;color:#4d4d4d}.list_item[data-oce-modal]   .members[data-oce-modal]{vertical-align:middle}.list_item[data-oce-modal]   span[data-oce-modal]{font-weight:600}.list_item[data-oce-modal]   .item_meta[data-oce-modal]{color:#8c8c8c;font-size:12px;margin-top:5px;margin-left:10px;font-weight:300}.item_meta[data-oce-modal]   span[data-oce-modal]{font-weight:300;text-decoration:underline;cursor:pointer}h5[data-oce-modal]{font-size:12px;font-weight:300;line-height:1.25em;position:relative;margin:0 0 0 10px;color:#4d4d4d}.content_module[data-oce-modal]{clear:both;margin-bottom:20px;position:relative}.content_actions[data-oce-modal]   .content_module[data-oce-modal]{margin:0}.action_list[data-oce-modal]   button[data-oce-modal]{max-width:100%!important;margin:0;padding:0}.action_list[data-oce-modal]   .popup[data-oce-modal]{top:-120px;left:40px}.content_module[data-oce-modal]   .content_icon[data-oce-modal]{left:-38px;position:absolute;top:8px}.content_icon[data-oce-modal]   svg[data-oce-modal]{stroke:2}.log_item[data-oce-modal]   select[data-oce-modal]{background:#fff;width:149px;padding:5px;font-size:16px;line-height:1;border:0;border-radius:3px 0 0 3px;height:40px;box-shadow:0 1px 2px rgba(0,0,0,.23);-webkit-appearance:none;font-size:14px;text-indent:5px;color:#717171;font-weight:600}.log_item[data-oce-modal]   textarea[data-oce-modal]{margin-top:10px}.log_item[data-oce-modal]   button[data-oce-modal]{float:right;width:120px;margin-bottom:20px}select.type[data-oce-modal]{border-radius:0 3px 3px 0;margin-left:0}.log_item[data-oce-modal]   input[data-oce-modal]{background:#fff;width:80px;line-height:1;border:0;border-radius:0;height:38px;margin-left:0;box-shadow:0 1px 2px rgba(0,0,0,.23);-webkit-appearance:none;font-size:14px;text-indent:5px;color:#4d4d4d}select[data-oce-modal]{outline:0}.content_info[data-oce-modal]{margin:0;min-height:20px;padding:8px 10px 9pt;position:relative;z-index:0}.content_actions[data-oce-modal]{float:none;padding:0;width:100%;margin-top:40px}.action_list[data-oce-modal]   button[data-oce-modal]{background:-webkit-linear-gradient(top,#fff 0,#f8f9f9 100%);background:linear-gradient(to bottom,#fff 0,#f8f9f9 100%);-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;cursor:pointer;display:block;font-weight:700;height:34px;margin-top:6px;max-width:300px;padding:7px;position:relative;user-select:none;white-space:nowrap;border-radius:3px;text-decoration:none;outline:0;width:100%;font-size:14px}.content_action[data-oce-modal]   h5[data-oce-modal]{margin-left:0}.popup[data-oce-modal]{background:#fff;border-radius:3px;border:1px solid #d6dadc;border-bottom-color:#c4c9cc;box-shadow:0 1px 6px rgba(0,0,0,.15);position:absolute;right:0;width:300px;z-index:70;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);padding:10px}.popup.members[data-oce-modal]{left:25px;top:40px}.popup[data-oce-modal]   .popup_header[data-oce-modal]   h5[data-oce-modal]{-moz-box-sizing:border-box;box-sizing:border-box;color:#8c8c8c;display:block;line-height:36px;border-bottom:1px solid #d6dadc;overflow:hidden;padding:0 2pc;position:relative;text-overflow:ellipsis;white-space:nowrap;z-index:1;text-align:center;font-weight:400;font-size:14px;letter-spacing:.5px;margin-bottom:10px}.popup_header[data-oce-modal]   .icon_delete[data-oce-modal]{float:right;margin-top:-40px;position:relative;z-index:10}.activities_list[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal]{position:absolute;left:-38px;top:12px}.item_click[data-oce-modal]{position:absolute;background:0 0;top:0;bottom:0;left:0;right:0;display:block;z-index:10}.members_name[data-oce-modal]{font-size:14px;font-weight:600;letter-spacing:.5px}.popup.hidden[data-oce-modal]{display:none}.popup_content[data-oce-modal]   .list_item[data-oce-modal]{position:relative;z-index:10;margin:0;margin-bottom:10px;height:40px;border-radius:2px;line-height:40px;padding-left:5px}.popup_content[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal]{margin-left:0}.popup_content[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal]   .members_item[data-oce-modal]{margin:0;margin-right:10px}.popup_content[data-oce-modal]   .list_item[data-oce-modal]:hover{background:rgba(0,0,0,.05)}.popup_content[data-oce-modal]   .content_process[data-oce-modal]{background:#fff;width:100%;font-size:16px;line-height:1;border:0;border-radius:3px;height:50px;font-size:14px;text-indent:5px;color:#717171;font-weight:600;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;background:-webkit-linear-gradient(top,#fff 0,#f8f9f9 100%);background:linear-gradient(to bottom,#fff 0,#f8f9f9 100%);-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;cursor:pointer;display:block;font-weight:700;margin-top:6px;max-width:300px;padding:7px;position:relative;user-select:none;white-space:nowrap}.content_description[data-oce-modal]   h4[data-oce-modal]{margin-left:0;font-size:16px;font-weight:500;color:#444}.content_description.hidden[data-oce-modal]{display:none}.description_text[data-oce-modal]{margin-left:40px}.description_text.hidden[data-oce-modal]{display:none}.icon_delete[data-oce-modal]{display:inline-block;color:#999;background-repeat:no-repeat;background-size:cover;cursor:pointer;vertical-align:bottom;margin-left:10px}.item_desc[data-oce-modal]{margin-left:10px}.item_desc[data-oce-modal]   .desc[data-oce-modal]{font-weight:300;margin-top:3px}.content_log[data-oce-modal]{margin-top:10px}.header_note_input[data-oce-modal]{font-size:18px;margin:0 0 9px;color:#3c3c3c;position:relative;font-weight:500;font-family:'Fira sans';padding:5px;border-radius:3px;border:0;border:1px solid #999;margin-left:-5px;display:block;opacity:1;width:98%}.header_note_input.hidden[data-oce-modal]{opacity:0}.content_header[data-oce-modal]   .title[data-oce-modal]{position:relative;display:block;color:#3c3c3c}.members_active[data-oce-modal]{width:20px;height:20px;background:green;display:block;border-radius:3px;position:absolute!important;left:0!important;width:18px!important;height:18px!important;left:17px!important;top:17px!important}.members_active[data-oce-modal]   span[data-oce-modal]{text-align:center;display:block;width:18px;height:18px;line-height:24px}.member_provider[data-oce-modal]{margin-right:10px}.item_date[data-oce-modal]{margin-top:10px}.item_date[data-oce-modal]   .full[data-oce-modal]{width:100%;border-radius:3px;font-size:14px;text-indent:5px;color:#4d4d4d}.back[data-oce-modal]   svg[data-oce-modal]{vertical-align:middle}.back[data-oce-modal]{font-size:14px;background:#333c44;margin-bottom:10px;display:inline-block;border-radius:3px;color:#fff;cursor:pointer}\@media screen and (max-width:600px){.cardModal[data-oce-modal]{width:100%;margin:0;border-radius:0}}"}}class i{render(){return t("div",{class:"list_outputs"},t("h2",null,"Outputs (",this.outputs.length,")"),this.outputs.map(e=>t("div",{class:"outputs_card"},t("span",null,e.resourceClassifiedAs.name))))}static get is(){return"oce-output"}static get encapsulation(){return"shadow"}static get properties(){return{outputs:{type:"Any",attr:"outputs"}}}static get style(){return".list_outputs[data-oce-output]{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;margin:0 4px;padding:0 4px;z-index:1;min-height:0;-webkit-box-flex:1;overflow-x:hidden}.list_outputs[data-oce-output]   h2[data-oce-output]{font-weight:500;font-size:14px;letter-spacing:.5}.outputs_card[data-oce-output]{background:#333c44;border-radius:3px;overflow:hidden;padding:6px 6px 2px 8px;position:relative;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal;cursor:pointer;margin-bottom:6px;max-width:300px;min-height:20px;position:relative;z-index:0;padding:10px}.outputs_card[data-oce-output]   span[data-oce-output]{color:#fff;font-size:14px;font-weight:500}"}}export{e as OceBin,s as OceCard,a as OceKanban,r as OceModal,i as OceOutput};