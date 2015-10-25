(function() {
    var attr_name = "data-django-bootstrap3-datetimepicker";
    $(function() {
        $("[" + attr_name + "]:has(input:not([readonly],[disabled]))").each(function(index){
            var options_string = $(this).attr(attr_name);
            var options = JSON.parse(options_string);
            $(this).datetimepicker(options);
        });
    });
})();
