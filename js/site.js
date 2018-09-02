$(document).ready(function(){
    console.log('document).ready');

    var populateList = function (json) {
        console.log('json', json);
        for (var i = 0; i < json.length; i++) {

            var parent = $($('#card-template').html());

            if (parent) {
                $(parent).find('#card-id').attr('id', 'card-' + json[i].id);
                $(parent).find('.card-img-top').attr('src', json[i].img);
                $(parent).find('.card-text').html(json[i].description);
                $(parent).find('.card-name').html(json[i].name);
                $(parent).find('.card-title').html(json[i].title);

                $(parent).find('a').attr('href', 'bio.html?id=' + json[i].id);


            }
            $('#card-collection').append(parent);
        }
    }

    $.get('https://raw.githubusercontent.com/NikitaCode/Hello-World/master/bios.json')
        .done(function (data) {
            var json = jQuery.parseJSON(data);
            populateList(json);

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
});
