function addArticle() {
    var param = {
        "title": $('#title').val(),
        "content": CKEDITOR.instances.ck1.getData(),
        "catogary": $('#catogray').val()
    };

    $.ajax({
        method: 'post',
        url: '/article/add',
        data: param,
        success: function(data) {
            alert(data.data);
        }
    });
}

$(document).ready(function() {
    CKEDITOR.replace('ck1');
});