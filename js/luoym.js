/**
 * @author luoym
 * @email 13575458746@163.com
 * @descrip luoym.com
 * @version v1.0.0
 */
$(function(){var n={init:function(){n.bind()},bind:function(){n.headerNavButtonBind()},headerNavButtonBind:function(){var n=$(".header .btn-nav");n.on("click",function(){var n=$(this);n.toggleClass("btn-nav-active"),$(".navbar").toggleClass("navbar-active"),$("body").toggleClass("body-trans-left")})}};n.init()});