export var jqtest = {
    showMsg: function () {
        let v = jQuery.fn.jquery.toString();
        let content = $("#ts-example-2")[0].innerHTML;
        $("#ts-example-2")[0].innerHTML = content + " " + v + "!!";
    }
};
//# sourceMappingURL=library.js.map