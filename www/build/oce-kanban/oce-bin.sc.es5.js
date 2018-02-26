/*! Built with http://stenciljs.com */
OceKanban.loadBundle('oce-bin', ['exports'], function (exports) {
    var h = window.OceKanban.h;
    var Bin = /** @class */ (function () {
        function Bin() {
        }
        Bin.prototype.render = function () {
            return (h("div", { class: 'list_wrapper' }, h("div", { class: 'list' }, h("div", { class: 'list_header' }, h("h1", { class: 'header_title' }, this.title), this.note
                ? h("p", { class: 'header_desc' }, this.note)
                : '', h("div", { class: 'header_infos' }, this.due
                ? h("div", { class: 'header_due' }, h("span", { class: 'due_item' }, "Due ", this.due))
                : '')), h("div", { class: 'list_cards' }, h("h2", null, "Commitments (", this.cards.length, ")"), this.cards
                ? this.cards.map(function (card) { return h("oce-card", { members: card.members, due: card.due, note: card.note || card.title, action: function () { console.log('hello'); } }); }) : ''), this.outputs.length !== 0
                ? h("oce-output", { outputs: this.outputs })
                : '')));
        };
        Object.defineProperty(Bin, "is", {
            get: function () { return "oce-bin"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bin, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bin, "properties", {
            get: function () { return { "cards": { "type": "Any", "attr": "cards" }, "due": { "type": String, "attr": "due" }, "note": { "type": String, "attr": "note" }, "outputs": { "type": "Any", "attr": "outputs" }, "title": { "type": String, "attr": "title" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bin, "style", {
            get: function () { return ".list_wrapper[data-oce-bin] {\n  width: 300px;\n  margin-right: 10px;\n  height: 100%;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\n\n.list[data-oce-bin] {\n  background: #E2E4E6;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-height: 100%;\n  position: relative;\n  white-space: normal;\n  box-shadow: 0 1px 1px rgba(23,43,77,0.2), 0 0 0.5px 0 rgba(23,43,77,0.25);\n  transition: all 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  -webkit-transition: all 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n}\n\nh2[data-oce-bin] {\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: .5;\n}\n\n\n.list_header[data-oce-bin] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding: 8px 10px;\n  position: relative;\n  min-height: 18px;\n}\n\n\n.header_title[data-oce-bin] {\n  font-size: 16px;\n  text-align: left;\n  font-weight: 500;\n  \n  margin: 0;\n  margin-top: 5px;\n  text-transform: capitalize;\n  letter-spacing: .5px;\n}\n\n.header_desc[data-oce-bin] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-top: 5px;\n}\n\n.header_due[data-oce-bin] {\n  float: left;\n  height: 24px;\n  line-height: 24px;\n  margin-left: 0px;\n  background: #c7c7c7;\n  border-radius: 3px;\n  padding: 0 10px;\n}\n  .header_due[data-oce-bin]   .due_item[data-oce-bin] {\n      line-height: 24px;\n      font-size: 13px;\n      text-decoration: underline;\n      font-weight: 500;\n      color: #444444;\n    }\n\n.header_members[data-oce-bin] {\n  float: left;\n  width: 24px;\n  height: 24px;\n  border-radius: 3px;\n  margin-right: 5px;\n\n}\n.members_item[data-oce-bin] {\n  width: 24px;\n  height: 24px;\n  border-radius: 3px;\n  background: #c7c7c7;\n  display: block;\n}\n\n.members_item[data-oce-bin]   .item_photo[data-oce-bin] {\n  width: 24px;\n  height: 24px;\n  border-radius: 3px;\n}\n.header_setName[data-oce-bin] {\nbackground: 0 0;\nborder: none;\nborder-radius: 3px;\nbox-shadow: none;\nfont-weight: 700;\nmargin: -3px -5px;\nheight: 18px;\nmin-height: 18px;\npadding: 3px 5px;\nresize: none;\nmax-height: 16pc;\noverflow: hidden;\nword-wrap: break-word;\nheight: 24px;\n}\n.header_setName.isEditing[data-oce-bin] {\nbackground: rgba(255,255,255,.8)\n}\n\n.list_cards[data-oce-bin] {\n-webkit-flex: 1 1 auto;\n-ms-flex: 1 1 auto;\nflex: 1 1 auto;\noverflow-y: auto;\nmargin: 0 4px;\npadding: 0 4px;\nz-index: 1;\nmin-height: 0;\n-webkit-box-flex: 1;\noverflow-x: hidden;\n}"; },
            enumerable: true,
            configurable: true
        });
        return Bin;
    }());
    var Card = /** @class */ (function () {
        function Card() {
        }
        Card.prototype.render = function () {
            return (h("div", { onClick: this.action, class: "card" }, h("span", { class: "card_title" }, this.note), h("div", { class: "card_infos" }, h("h4", { class: "infos_due" }, "Due to ", this.due), h("div", { class: "infos_members" }, this.members.map(function (member) { return (h("span", { class: "members_item" }, h("img", { class: "item_photo", src: member.image }))); })))));
        };
        Object.defineProperty(Card, "is", {
            get: function () { return "oce-card"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card, "properties", {
            get: function () { return { "action": { "type": "Any", "attr": "action" }, "due": { "type": String, "attr": "due" }, "members": { "type": "Any", "attr": "members" }, "note": { "type": String, "attr": "note" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card, "style", {
            get: function () { return ".card[data-oce-card] {\n  background: white;\n  border-bottom: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  z-index: 10;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  cursor: pointer;\n  margin-bottom: 6px;\n  max-width: 300px;\n  min-height: 20px;\n  position: relative;\n  z-index: 0;\n  padding: 10px;\n}\n\n.card[data-oce-card]:hover {\nbackground: #EDEFF0;\nborder-bottom-color: #d6dacc;\n}\n\n.card.dragged[data-oce-card] {\nopacity: .5;\ncursor: move;\n}\n\n.card_title[data-oce-card] {\n  font-size: 14px;\n  line-height: 20px;\n  clear: both;\n  font-weight: 400;\n  margin: 0 0 4px;\n  overflow: hidden;\n  word-wrap: break-word;\n  color: #4d4d4d;\n}\n\n.card_infos[data-oce-card]{\nmargin-top: 10px;\n}\n\n.card_infos[data-oce-card]   .infos_due[data-oce-card]{\ncolor: #ADADAD;\nfont-weight: 500;\nfont-size: 12px;\nletter-spacing: 1px;\nmargin: 0;\nfloat: left;\nheight: 20px;\nline-height: 20px;\n}\n\n.card_infos[data-oce-card]   .infos_members[data-oce-card] {\nfloat: right;\n}\n\n.card_infos[data-oce-card]   .infos_members[data-oce-card]   .members_item[data-oce-card] {\nwidth: 20px;\nheight: 20px;\nborder-radius: 100%;\ndisplay: inline-block;\nbackground: #adadad;\nmargin-left: 5px;\n}\n\n.card_infos[data-oce-card]   .infos_members[data-oce-card]   .members_item[data-oce-card]   img[data-oce-card] {\nwidth: 20px;\nheight: 20px;\nborder-radius: 100%;\n}"; },
            enumerable: true,
            configurable: true
        });
        return Card;
    }());
    // import {bin} from '../interfaces'
    var Kanban = /** @class */ (function () {
        function Kanban() {
        }
        Kanban.prototype.render = function () {
            var bins = JSON.parse(this.bins);
            return (h("div", { class: "board_container" }, h("div", { class: "board" }, bins.map(function (bin) { return (h("oce-bin", { cards: bin.cards, outputs: bin.outputs, due: bin.due, title: bin.title, note: bin.note })); }))));
        };
        Object.defineProperty(Kanban, "is", {
            get: function () { return "oce-kanban"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Kanban, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Kanban, "properties", {
            get: function () { return { "bins": { "type": String, "attr": "bins" }, "due": { "type": String, "attr": "due" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Kanban, "style", {
            get: function () { return ".board_container[data-oce-kanban] {\n  position: relative;\n}\n\n.board[data-oce-kanban] {\n  user-select: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: absolute;\n  right: 0;\n  left: 0px;\n  top: 0;\n  margin-bottom: 20px;\n}"; },
            enumerable: true,
            configurable: true
        });
        return Kanban;
    }());
    var Modal = /** @class */ (function () {
        function Modal() {
        }
        Modal.prototype.render = function () {
            return (h("section", { class: 'modal_content' }, h("div", { class: 'content_info' }, h("div", { class: 'content_module' }, h("div", { class: 'module_header' }, h("div", { class: 'header_labels' }, h("div", { class: 'labels_due' }, h("div", { class: 'due' }, h("span", { class: 'due_item' }, "Due ", this.data.due)))))))));
        };
        Object.defineProperty(Modal, "is", {
            get: function () { return "oce-modal"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal, "properties", {
            get: function () { return { "data": { "type": "Any", "attr": "data" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal, "style", {
            get: function () { return ".cardModal[data-oce-modal] {\n    width: 500px;\n    box-shadow: 0 2px 8px 3px rgba(0,0,0,.3);\n    z-index : 9999999999;\n    background-color: #EDEFF0;\n    padding:  0;\n    margin: 40px auto;\n    position: relative;\n    border-radius: 3px;\n    padding-bottom: 20px;\n    outline: none;\n  }\n  \n  .modal_content[data-oce-modal] {\n      padding: 10px;\n    }\n    \n    .content_info[data-oce-modal] {\n      margin-left: 40px;\n    }\n    \n    .content_info[data-oce-modal]   .info_add[data-oce-modal] {\n      color: #8c8c8c;\n      padding: 6px 8px;\n      position: relative;\n      user-select: none;\n      display: block;\n      margin: 2px 0;\n      border-radius: 3px;\n      outline: 0;\n      font-size: 14px;\n      text-decoration: underline;\n      cursor: pointer;\n    }\n    \n    .info_add[data-oce-modal]   .add_icon[data-oce-modal] {\n      vertical-align: sub;\n      margin-right: 10px;\n    }\n    \n    .info_add[data-oce-modal]:hover {\n      background: #D6DADC;\n      color: #4d4d4d;\n    }\n    \n    .modal_content[data-oce-modal]   .content_header[data-oce-modal] {\n      margin-left: 10px;\n      margin-top: 10px;\n      background: #edeff0;\n      margin: -10px;\n      padding: 20px;\n    }\n  \n    .content_header[data-oce-modal]   .header_sub[data-oce-modal] {\n      color: #444444;\n      font-size: 11px;\n      margin-top: -5px;\n      display: block;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      margin-bottom: 5px;\n    }\n    .header_sub[data-oce-modal]   i[data-oce-modal] {\n      text-decoration: underline;\n      font-style: normal;\n    }\n    \n    .header_labels[data-oce-modal] {\n      margin-top: 10px;\n    }\n    .header_labels[data-oce-modal]:before, .header_labels[data-oce-modal]:after {\n        content: \" \";\n        display: table; \n      }\n    .header_labels[data-oce-modal]:after {\n        clear: both;\n    }\n    \n    .labels_members[data-oce-modal], .labels_process[data-oce-modal], .labels_due[data-oce-modal] {\n      float: left;\n      \n      display: block;\n      \n    }\n  \n    .labels_members[data-oce-modal]   span[data-oce-modal] {\n        vertical-align: super;\n        width: 24px;\n        height: 24px;\n        display: inline-block;\n    }\n  \n    .members[data-oce-modal] {\n      display: inline-block;\n      vertical-align: sub;\n      margin-left: 5px;\n    }\n    \n    .labels_members[data-oce-modal]   h5[data-oce-modal], .labels_process[data-oce-modal]   h5[data-oce-modal], .labels_due[data-oce-modal]   h5[data-oce-modal] {\n      color: #8c8c8c;\n      display: inline-block;\n      font-weight: 400;\n      font-size: 14px;\n      margin: 0 6px 6px 0;\n      letter-spacing: .5px;\n    }\n  \n    .labels_due[data-oce-modal] {\n      float: right;\n    }\n    \n    .members[data-oce-modal]   .members_item[data-oce-modal] {\n      background-color: #D6DADC;\n      border-radius: 3px;\n      color: #4d4d4d;\n      display: block;\n      float: left;\n      height: 30px;\n      margin: 0 4px 4px 0;\n      overflow: hidden;\n      position: relative;\n      width: 30px;\n      -ms-user-select: none;\n      user-select: none;\n      z-index: 0;\n    }\n  \n    .members_item[data-oce-modal]   img[data-oce-modal] {\n      width: 30px;\n      height: 30px;\n      display: block;\n      -webkit-appearance: none;\n      line-height: 30px;\n      text-indent: 4px;\n      font-size: 13px;\n      overflow: hidden;\n      max-width: 30px;\n      max-height: 30px;\n      text-overflow: ellipsis;\n    }\n    \n  .members_item[data-oce-modal]   i[data-oce-modal] {\n    text-align: center;\n    width: 30px;\n    height: 30px;\n    display: block;\n    line-height: 36px;\n    cursor: pointer;\n  }\n  \n  .members_item[data-oce-modal]   i[data-oce-modal]:hover {\n    background: #ced1d2;\n  }\n  \n    .process[data-oce-modal]   .process_item[data-oce-modal] {\n      background-color: #B6BBBF;\n      border-radius: 3px;\n      color: #fff;\n      display: block;\n      margin-right: 3px;\n      max-width: 100%;\n      overflow: hidden;\n      padding: 3px 6px;\n      position: relative;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      border-radius: 3px;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      display: block;\n      float: left;\n      font-size: 9pt;\n      font-weight: 600;\n      height: 30px;\n      line-height: 30px;\n      margin: 0 4px 4px 0;\n      min-width: 40px;\n      padding: 0 8px;\n      width: auto;\n    }\n    \n    .due[data-oce-modal]   .due_item[data-oce-modal] {\n      background-color: #E2E4E6;\n      border-radius: 3px;\n      color: #8c8c8c;\n      cursor: default;\n      display: block;\n      height: 20px;\n      line-height: 20px;\n      margin: 0 4px 4px 0;\n      max-width: 100%;\n      overflow: hidden;\n      padding: 5px 10px;\n      text-decoration: none;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      padding: 5px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n      flex-direction: row;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      -ms-flex-align: center;\n      align-items: center;\n      font-size: 14px;\n      text-decoration: underline;\n    }\n    \n    .activities_list[data-oce-modal]   .list_item[data-oce-modal] {\n      border-bottom: 1px solid #E2E4E6;\n      margin-left: 33px;\n      min-height: 30px;\n      padding: 10px 0;\n      position: relative;\n    }\n    \n    .list_item[data-oce-modal] {\n      \n      margin: 0 6px 0 0;\n      word-wrap: break-word;\n      font-size: 14px;\n      color: #4d4d4d;\n    }\n  \n    .list_item[data-oce-modal]   .members[data-oce-modal] {\n      vertical-align: middle;\n    }\n    \n    .list_item[data-oce-modal]   span[data-oce-modal] {\n      font-weight: 600;\n    }\n    \n    .list_item[data-oce-modal]   .item_meta[data-oce-modal] {\n      color: #8c8c8c;\n      font-size: 12px;\n      margin-top: 5px;\n      margin-left: 10px;\n      font-weight: 300;\n    }\n  \n    .item_meta[data-oce-modal]   span[data-oce-modal] {\n      font-weight: 300;\n      text-decoration: underline;\n      cursor: pointer;\n    }\n    \n    h5[data-oce-modal] {\n      font-size: 12px;\n      font-weight: 300;\n      line-height: 1.25em;\n      position: relative;\n      margin: 0 0 0 10px;\n      color: #4d4d4d;\n    }\n    \n    .content_module[data-oce-modal] {\n      clear: both;\n      margin-bottom: 20px;\n      position: relative;\n    }\n  \n    .content_actions[data-oce-modal]   .content_module[data-oce-modal] {\n      margin: 0;\n    }\n  \n    .action_list[data-oce-modal]   button[data-oce-modal] {\n      max-width: 100% !important;\n      margin: 0;\n      padding: 0;\n    }\n  \n    .action_list[data-oce-modal]   .popup[data-oce-modal] {\n      top: -120px;\n      left: 40px;\n    }\n    \n  .content_module[data-oce-modal]   .content_icon[data-oce-modal] {\n      left: -38px;\n      position: absolute;\n      top: 8px;\n    }\n    \n    .content_icon[data-oce-modal]   svg[data-oce-modal] {\n      stroke: 2;\n    }\n    \n    .log_item[data-oce-modal]   select[data-oce-modal] {\n      background: white;\n      width: 149px;\n      padding: 5px;\n      font-size: 16px;\n      line-height: 1;\n      border: 0;\n      border-radius: 3px 0 0 3px;\n      height: 40px;\n      \n      box-shadow: 0 1px 2px rgba(0,0,0,.23);\n      -webkit-appearance: none;\n      font-size: 14px;\n      text-indent: 5px;\n      color: #717171;\n      font-weight: 600;\n    }\n    \n  \n    .log_item[data-oce-modal]   textarea[data-oce-modal] {\n      margin-top: 10px;\n    }\n  \n    .log_item[data-oce-modal]   button[data-oce-modal] {\n      float: right;\n      width: 120px;\n      margin-bottom: 20px;\n    }\n  \n    select.type[data-oce-modal] {\n      border-radius:  0 3px 3px 0;\n      margin-left: 0;\n    }\n    \n    .log_item[data-oce-modal]   input[data-oce-modal] {\n      background: white;\n      width: 80px;\n      \n      line-height: 1;\n      border: 0;\n      border-radius: 0px 0px 0px 0px;\n      height: 38px;\n      margin-left: 0px;\n      box-shadow: 0 1px 2px rgba(0,0,0,.23);\n      -webkit-appearance: none;\n      font-size: 14px;\n      text-indent: 5px;\n      color: #4d4d4d;\n    }\n    \n    select[data-oce-modal] {\n      outline: 0\n    }\n    \n    .content_info[data-oce-modal] {\n      \n      margin: 0;\n      min-height: 20px;\n      padding: 8px 10px 9pt;\n      position: relative;\n      \n      z-index: 0;\n    }\n    \n    .content_actions[data-oce-modal] {\n      float: none;\n      padding: 0;\n      width: 100%;\n      margin-top: 40px;\n    }\n    \n    .action_list[data-oce-modal]   button[data-oce-modal] {\n      background: -webkit-linear-gradient(top,#fff 0,#F8F9F9 100%);\n      background: linear-gradient(to bottom,#fff 0,#F8F9F9 100%);\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      border: 1px solid #E2E4E6;\n      border-bottom-color: #CDD2D4;\n      cursor: pointer;\n      display: block;\n      font-weight: 700;\n      height: 34px;\n      margin-top: 6px;\n      max-width: 300px;\n      padding: 7px;\n      position: relative;\n      user-select: none;\n      white-space: nowrap;\n      border-radius: 3px;\n      text-decoration: none;\n      outline: 0;\n      width: 100%;\n      font-size: 14px;\n    }\n    \n    .content_action[data-oce-modal]   h5[data-oce-modal] {\n      margin-left: 0;\n    }\n    \n    .popup[data-oce-modal] {\n      background: #fff;\n      border-radius: 3px;\n      border: 1px solid #D6DADC;\n      border-bottom-color: #C4C9CC;\n      box-shadow: 0 1px 6px rgba(0,0,0,.15);\n      \n      position: absolute;\n      right: 0;\n      \n      width: 300px;\n      z-index: 70;\n      transform: translate3d(0,0,0);\n      -webkit-transform: translate3d(0,0,0);\n      padding: 10px;\n    }\n  \n    .popup.members[data-oce-modal] {\n      left: 25px;\n      top: 40px;\n    }\n    \n    .popup[data-oce-modal]   .popup_header[data-oce-modal]   h5[data-oce-modal] {\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      color: #8c8c8c;\n      display: block;\n      line-height: 36px;\n      border-bottom: 1px solid #D6DADC;\n      overflow: hidden;\n      padding: 0 2pc;\n      position: relative;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      z-index: 1;\n      text-align: center;\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: .5px;\n      margin-bottom: 10px;\n    }\n  \n    .popup_header[data-oce-modal]   .icon_delete[data-oce-modal] {\n        float: right;\n        margin-top: -40px;\n        position: relative;\n        z-index: 10;\n      }\n    \n    .activities_list[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal] {\n      position: absolute;\n      left: -38px;\n      top: 12px;\n    }\n  \n    .item_click[data-oce-modal] {\n      position: absolute;\n      background: transparent;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      z-index: 10;\n    }\n    \n    .members_name[data-oce-modal]{\n      font-size: 14px;\n      font-weight: 600;\n      letter-spacing: 0.5px;\n    }\n    \n    .popup.hidden[data-oce-modal] {\n      display: none;\n    }\n    \n  \n    .popup_content[data-oce-modal]   .list_item[data-oce-modal] {\n      position: relative;\n      z-index: 10;\n      margin: 0;\n      margin-bottom: 10px;\n      height: 40px;\n      border-radius: 2px;\n      line-height: 40px;\n      padding-left: 5px;\n    }\n  \n    .popup_content[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal] {\n      margin-left: 0;\n    }\n  \n    .popup_content[data-oce-modal]   .list_item[data-oce-modal]   .members[data-oce-modal]   .members_item[data-oce-modal] {\n      margin: 0;\n      margin-right: 10px;\n    }\n  \n  \n    .popup_content[data-oce-modal]   .list_item[data-oce-modal]:hover {\n      background: rgba(0,0,0,.05);\n    }\n    .popup_content[data-oce-modal]   .content_process[data-oce-modal] {\n      background: white;\n      width: 100%;\n      font-size: 16px;\n      line-height: 1;\n      border: 0;\n      border-radius: 3px;\n      height: 50px;\n      \n      font-size: 14px;\n      text-indent: 5px;\n      color: #717171;\n      font-weight: 600;\n      border: 1px solid #E2E4E6;\n      border-bottom-color: #CDD2D4;\n      background: -webkit-linear-gradient(top,#fff 0,#F8F9F9 100%);\n      background: linear-gradient(to bottom,#fff 0,#F8F9F9 100%);\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      border: 1px solid #E2E4E6;\n      border-bottom-color: #CDD2D4;\n      cursor: pointer;\n      display: block;\n      font-weight: 700;\n      margin-top: 6px;\n      max-width: 300px;\n      padding: 7px;\n      position: relative;\n      user-select: none;\n      white-space: nowrap;\n    }  \n    \n    .content_description[data-oce-modal]   h4[data-oce-modal] {\n      margin-left: 0px;\n      font-size: 16px;\n      font-weight: 500;\n      color: #444444;\n  \n    }\n    .content_description.hidden[data-oce-modal] {\n      display: none;\n    }\n    \n    .description_text[data-oce-modal] {\n      margin-left: 40px;      \n    }\n    \n    .description_text.hidden[data-oce-modal] {\n      display: none;\n    }\n    \n    .icon_delete[data-oce-modal] {\n        display: inline-block;\n        color: #999;\n        background-repeat: no-repeat;\n        background-size: cover;\n        cursor: pointer;\n        vertical-align: bottom;\n        margin-left: 10px;\n    }\n    \n    .item_desc[data-oce-modal] {\n      margin-left: 10px;\n    }\n  \n    .item_desc[data-oce-modal]   .desc[data-oce-modal] {\n      font-weight: 300;\n      margin-top: 3px;\n    }\n  \n    .content_log[data-oce-modal] {\n      margin-top: 10px;\n    }\n  \n    .header_note_input[data-oce-modal] {\n      font-size: 18px;\n      margin: 0 0 9px;\n      color: #3C3C3C;\n      position: relative;\n      font-weight: 500;\n      font-family: 'Fira sans';\n      padding: 5px;\n      border-radius: 3px;\n      border: 0;\n      border: 1px solid #999;\n      margin-left: -5px;\n      display: block;\n      opacity: 1;\n      width: 98%;\n    }\n  \n    .header_note_input.hidden[data-oce-modal] {\n      opacity: 0;\n    }\n  \n    .content_header[data-oce-modal]   .title[data-oce-modal] {\n      position: relative;\n      \n      display: block;\n      color: #3C3C3C;\n    }\n  \n    .members_active[data-oce-modal] {\n      width: 20px;\n      height: 20px;\n      background: green;\n      display: block;\n      border-radius: 3px;\n      position: absolute !important;\n      left: 0 !important;\n      width: 18px !important;\n      height: 18px !important;\n      left: 17px !important;\n      top: 17px !important;\n    }\n  \n    .members_active[data-oce-modal]   span[data-oce-modal] {\n      text-align: center;\n      display: block;\n      width: 18px;\n      height: 18px;\n      line-height: 24px;\n    }\n  \n    .member_provider[data-oce-modal] {\n      margin-right: 10px;\n    }\n  \n    .item_date[data-oce-modal] {\n      margin-top: 10px; \n    }\n    .item_date[data-oce-modal]   .full[data-oce-modal] {\n    width: 100%;\n    border-radius: 3px;\n    font-size: 14px;\n    text-indent: 5px;\n    color: #4d4d4d;\n    }\n  \n    .back[data-oce-modal]   svg[data-oce-modal] {\n      vertical-align: middle;\n    }\n    .back[data-oce-modal] {\n      font-size: 14px;\n      background: #333C44;\n      margin-bottom: 10px;\n      display: inline-block;\n      border-radius: 3px;\n      color: white;\n      cursor: pointer;\n    }\n  \n    \@media screen and (max-width: 600px) {\n      .cardModal[data-oce-modal] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n      }\n   }"; },
            enumerable: true,
            configurable: true
        });
        return Modal;
    }());
    var Output = /** @class */ (function () {
        function Output() {
        }
        Output.prototype.render = function () {
            return (h("div", { class: 'list_outputs' }, h("h2", null, "Outputs (", this.outputs.length, ")"), this.outputs.map(function (output) { return (h("div", { class: 'outputs_card' }, h("span", null, output.resourceClassifiedAs.name))); })));
        };
        Object.defineProperty(Output, "is", {
            get: function () { return "oce-output"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Output, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Output, "properties", {
            get: function () { return { "outputs": { "type": "Any", "attr": "outputs" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Output, "style", {
            get: function () { return ".list_outputs[data-oce-output] {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  overflow-y: auto;\n  margin: 0 4px;\n  padding: 0 4px;\n  z-index: 1;\n  min-height: 0;\n  -webkit-box-flex: 1;\n  overflow-x: hidden;\n}\n\n.list_outputs[data-oce-output]   h2[data-oce-output] {\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: .5;\n}\n\n.outputs_card[data-oce-output] {\n  background: #333C44;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 6px 6px 2px 8px;\n  position: relative;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  cursor: pointer;\n  margin-bottom: 6px;\n  max-width: 300px;\n  min-height: 20px;\n  position: relative;\n  z-index: 0;\n  padding: 10px;\n}\n\n.outputs_card[data-oce-output]   span[data-oce-output] {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n}"; },
            enumerable: true,
            configurable: true
        });
        return Output;
    }());
    exports.OceBin = Bin;
    exports.OceCard = Card;
    exports.OceKanban = Kanban;
    exports.OceModal = Modal;
    exports.OceOutput = Output;
    Object.defineProperty(exports, '__esModule', { value: true });
});
