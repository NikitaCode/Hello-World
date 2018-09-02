$(document).ready(function(){
    console.log('document).ready');

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }

    var populateBio = function (jsonObj) {
  

            var parent = $($('#card-template').html());

            if (parent) {
                $(parent).find('#card-id').attr('id', 'card-' + jsonObj.id);
                $(parent).find('.card-img-top').attr('src', jsonObj.img);
                $(parent).find('.card-text').html(jsonObj.description);
                $(parent).find('.card-name').html(jsonObj.name);
                $(parent).find('.card-title').html(jsonObj.title);

                $(parent).find('a').attr('href', 'bio.html?id=' + jsonObj.id);


            
            $('#card-collection').append(parent);
        }
    }

    var id = getQueryVariable('id');
    $.get('https://raw.githubusercontent.com/NikitaCode/Hello-World/master/bios.json')
        .done(function (data) {
            var json = jQuery.parseJSON(data);

            for (var i = 0; i < json.length; i++) {
                if (json[i].id == id) {
                    populateBio(json[i]);
                    break;
                }
            }

            

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
});
