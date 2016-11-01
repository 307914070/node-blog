function send() {
    $.ajax({
        url: '/test',
        data: {name: 'test', count: 100},
        success: function (data) {
            $('#result').val(data.data);
        }
    });
}

function getUser() {
    $.ajax({
        url: '/photo/getUser',
        data: {name: 'test', count: 100},
        success: function (data) {
            $('#result').val(data.data);
        }
    });
}

//添加文章
function addArticle() {
    var title = document.getElementById('artTitle');
    var content = document.getElementById('artContent');
    $.ajax({
        url: '/photo/addArticle',
        data: {data: {title: title.value, content: content.value}},
        success: function (data) {
            console.log(data);
        }
    });
}

//获取文章
function getArticle() {
    $.ajax({
        url: '/getArticle',
        data: {},
        success: function (data) {
            var _data = data.data;
            console.log('data:', _data);
        }
    });
}

function bindEvent() {
    $('#btnTest').bind('click', function () {
        $.ajax({
            url: '/test',
            success: function (data) {
                new Vue({
                    el: '#app',
                    data: {
                        message: data
                    }
                });
            }
        });
    });

    $('#btnTest2').bind('click', function () {
        new Vue({
            el: '#app',
            data: {
                message: 'welcome to vue.'
            }
        });
    });
}

$(function () {
    //getArticle();//获取文章列表
    bindEvent();
});
