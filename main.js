(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=e.item._id,this._name=e.item.name,this._link=e.item.link,this._likes=e.item.likes,this._cardSelector=e.template,this._handleCardClick=e.handleCardClick,this._confirmDeletePopup=e.confirmDeletePopup,this._ownerID=e.item.ownerData._id,this._userID=e.item.userID,this._apiLike=e.apiLike,this._apiUnlike=e.apiUnlike}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_likeProfileCardHandler",value:function(e){for(var t=this,n=[],r=0;r<this._likes.length;r++)n.push(this._likes[r]._id);n.includes(this._userID)?this._apiUnlike.putLike(e).then((function(e){t._cardLikeNumber.textContent=e.likes.length,t._likes=e.likes,t._cardLike.classList.remove("card__like-button_active")})):this._apiLike.putLike(e).then((function(e){t._cardLikeNumber.textContent=e.likes.length,t._likes=e.likes,t._cardLike.classList.add("card__like-button_active")}))}},{key:"_setEventListeners",value:function(){var e=this;this._cardDelete.addEventListener("click",(function(){return e._confirmDeletePopup(e._id)})),this._cardLike.addEventListener("click",(function(){return e._likeProfileCardHandler(e._id)})),this._cardImg.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImg=this._element.querySelector(".card__img"),this._cardName=this._element.querySelector(".card__name"),this._cardLike=this._element.querySelector(".card__like-button"),this._cardLikeNumber=this._element.querySelector(".card__like-number"),this._cardDelete=this._element.querySelector(".card__delete-button"),this._userID!==this._ownerID&&this._cardDelete.remove(),this._likes.forEach((function(t){t._id===e._userID&&e._cardLike.classList.add("card__like-button_active")})),this._cardImg.src=this._link,this._cardImg.id=this._id,this._cardImg.alt=this._name,this._cardName.textContent=this._name,this._cardLikeNumber.textContent=this._likes.length,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.deactivButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"deactivButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListeners(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=t.items,this._renderer=t.renderer,this._container=document.querySelector(t.containerSelector)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeByEscape=this._closeByEscape.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._closeByEscape)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._closeByEscape)}},{key:"_closeByEscape",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("close-button"))&&e.closePopup()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitFormHandler=r,t._form=t._popup.querySelector(".popup__form"),t._listInput=t._popup.querySelectorAll(".popup__input"),t._formSubmitButton=t._form.querySelector(".popup__save-button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._listInput.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderSaving",value:function(e){e?this._formSubmitButton.textContent="Сохранение...":this._popup.classList.contains("popup-card")?this._formSubmitButton.textContent="Создать":this._formSubmitButton.textContent="Сохраненить"}},{key:"closePopup",value:function(){this._form.reset(),l(_(u.prototype),"closePopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;l(_(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues(),e._formSubmitButton)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.name,r=t.info;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._infoSelector=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserData",value:function(){return this._formValues={userName:this._nameSelector.textContent,userInfo:this._infoSelector.textContent},this._formValues}},{key:"setUserData",value:function(e){this._nameSelector.textContent=e.name,this._infoSelector.textContent=e.about}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imgPopupTitle=t._popup.querySelector(".img-popup__title"),t._imgPopupImg=t._popup.querySelector(".img-popup__img"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._imgPopupTitle.textContent=e,this._imgPopupTitle.alt=e,this._imgPopupImg.src=t,S(P(u.prototype),"openPopup",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._server=t.baseUrl,this._authorization="17e41917-a2e7-4ed8-bcef-86b0aad6a6d8",this._method=t.method,this._options=t}var t,n;return t=e,(n=[{key:"getServerData",value:function(){return fetch(this._server,{headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"patchProfileData",value:function(e){return fetch(this._server,{method:this._method,headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about,avatar:e.url})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"postCard",value:function(e){return fetch(this._server,{method:this._method,headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.url})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._server,"/").concat(e),{method:this._method,headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"putLike",value:function(e){return fetch("".concat(this._server,"/").concat(e,"/likes"),{method:this._method,headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"patchProfileAvatar",value:function(e){return fetch(this._server,{method:this._method,headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=".elements",L=document.querySelector(".popup-profile"),q=document.querySelector(".popup-card"),D=document.querySelector(".profile__edit-button"),I=L.querySelector(".popup__form"),B=document.querySelector(".profile__add-button"),T=q.querySelector(".popup__form"),R=(q.querySelector(".popup__save-button"),L.querySelector(".popup__input_type_name")),x=L.querySelector(".popup__input_type_place"),U=(q.querySelector(".popup__input_type_name"),q.querySelector(".popup__input_type_place"),document.querySelector(".img-popup")),z=(U.querySelector(".img-popup__img"),U.querySelector(".img-popup__title"),document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".profile__image")),V=".popup-confirm",N=(document.querySelector(V).querySelector(".popup__save-button"),document.querySelector(".popup__confirm"),"https://nomoreparties.co/v1/cohort-44"),H=document.querySelector(".profile__avatar"),A=".popup-avatar",F=document.querySelector(A).querySelector(".popup__form"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_type_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_type_active"};function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=Q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function X(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function u(e){var t,n=e.popupSelector,r=e.api;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._button=t._popup.querySelector(".popup__save-button"),t._api=r,t}return t=u,(n=[{key:"deleteCard",value:function(e){this._card=document.getElementById(e),this._card.parentElement.remove(),this._api.deleteCard(e),this.closePopup()}},{key:"setEventListeners",value:function(e){var t=this;K(Y(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){t.deleteCard(e)}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),$=new j({baseUrl:"".concat(N,"/users/me")}),ee=new j({baseUrl:"".concat(N,"/cards")}),te=new j({method:"PATCH",baseUrl:"".concat(N,"/users/me")}),ne=new j({method:"POST",baseUrl:"".concat(N,"/cards")}),re=new j({method:"DELETE",baseUrl:"".concat(N,"/cards")}),oe=new j({method:"PUT",baseUrl:"".concat(N,"/cards")}),ie=new j({method:"PATCH",baseUrl:"".concat(N,"/users/me/avatar")}),ue=new m({name:".profile__name",info:".profile__job"}),ce=new E(".img-popup"),ae=new r(J,I),se=new r(J,T),le=new r(J,F),pe=new Z({popupSelector:V,api:re}),fe=new d({popupSelector:".popup-profile",submitFormHandler:function(e){return function(e){fe.renderSaving(!0),te.patchProfileData(e).then((function(e){ue.setUserData(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){fe.renderSaving(!1),fe.closePopup()}))}(e)}}),he=new d({popupSelector:A,submitFormHandler:function(e){return function(e){he.renderSaving(!0),ie.patchProfileData(e).then((function(e){z.src=e.avatar})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){he.renderSaving(!1),he.closePopup()}))}(e)}});$.getServerData().then((function(e){ue.setUserData(e),z.src=e.avatar})),Promise.all([ee.getServerData(),$.getServerData()]).then((function(e){var n=e[1]._id,r=e[0];function o(e,t){ce.openPopup(e,t)}function u(e){pe.openPopup(),pe.setEventListeners(e)}var c=new i({items:r,renderer:function(e){return a(e)},containerSelector:C});function a(e){var r=new t({item:{_id:e._id,name:e.name,link:e.link,likes:e.likes,ownerData:e.owner,userID:n},template:"#card-template",handleCardClick:o,confirmDeletePopup:u,containerSelector:C,apiLike:oe,apiUnlike:re}).generateCard();c.addItem(r)}c.renderItems();var s=new d({popupSelector:".popup-card",submitFormHandler:function(e){return function(e){s.renderSaving(!0),ne.postCard(e).then((function(e){a(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){s.renderSaving(!1),s.closePopup()}))}(e)}});s.setEventListeners(),B.addEventListener("click",(function(){se.deactivButton(),s.openPopup()}))})).catch((function(e){console.log(e)})),ae.enableValidation(),se.enableValidation(),le.enableValidation(),ce.setEventListeners(),fe.setEventListeners(),he.setEventListeners(),D.addEventListener("click",(function(){var e=ue.getUserData();R.value=e.userName,x.value=e.userInfo,fe.openPopup()})),H.addEventListener("click",(function(){return he.openPopup()}))})();