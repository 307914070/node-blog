function addArticle() {
    var param = {
        "title": $('#title').val(),
        "content": CKEDITOR.instances.editor.getData(),
        "catogary": $('#catogray').val()
    };

    $.ajax({
        method: 'post',
        url: '/add/article',
        data: param,
        success: function (data) {
            alert(data.data);
        }
    });
}
