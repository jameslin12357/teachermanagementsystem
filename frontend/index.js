var form, layer, element, row;
layui.use(['form', 'layedit', 'laydate', 'layer', 'element'], function () {
    form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , element = layui.element;
});

$("#dg").datagrid({
    columns: [[
        { field: "teacherId", title: "教师Id", width: 80, align: "center" },
        { field: "firstName", title: "名", width: 80, align: "center" },
        { field: "lastName", title: "姓", width: 80, align: "center" },
        { field: "major", title: "专业", width: 80, align: "center" },
        { field: "bio", title: "简介", width: 80, align: "center" },
        { field: "age", title: "年龄", width: 80, align: "center" },
        { field: "grade", title: "分数", width: 80, align: "center" },
        { field: "gpa", title: "GPA", width: 80, align: "center" },
        { field: "gender", title: "性别", width: 80, align: "center" },
        { field: "created", title: "创建日期", width: 80, align: "center" },
        { field: "updated", title: "编辑日期", width: 80, align: "center" },
        {
            field: "action", title: "操作", width: 80, align: "center", formatter: function (value, row, index) {
                return `<i class="fa fa-eye mr-5" onclick="detailsTeacher(this);"></i><i class="fa fa-edit mr-5" onclick="
editTeacher(this);"></i><i class="fa fa-trash-o" onclick="deleteTeacher(this);"></i>`;
            }
        },
    ]]
});

$('#dg').datagrid({
    onClickRow: function (index, field, value) {
        row = field;
    }
});

function detailsTeacher(){
    setTimeout(function(){
        layer.open({
            btn: [],
            shade: 0,
            title: "教师信息",
            content: `<div class="mb-10"><span class="mr-5 bold">教师Id:</span><span>${row["teacherId"]}</span></div><div class="mb-10"><span class="mr-5 bold">名:</span><span>${row["firstName"]}</span></div><div  class="mb-10"><span class="mr-5 bold">姓:</span><span>${row["lastName"]}</span></div><div  class="mb-10"><span class="mr-5 bold">专业:</span><span>${row["major"]}</span></div><div  class="mb-10"><span class="mr-5 bold">简介:</span><span>${row["bio"]}</span></div><div  class="mb-10"><span class="mr-5 bold">年龄:</span><span>${row["age"]}</span></div><div  class="mb-10"><span class="mr-5 bold">分数:</span><span>${row["grade"]}</span></div><div  class="mb-10"><span class="mr-5 bold">GPA:</span><span>${row["gpa"]}</span></div><div  class="mb-10"><span class="mr-5 bold">性别:</span><span>${row["gender"]}</span></div><div  class="mb-10"><span class="mr-5 bold">创建日期:</span><span>${row["created"]}</span></div><div  class="mb-10"><span class="mr-5 bold">编辑日期:</span><span>${row["updated"]}</span></div>`

        });
    }, 1000);
}

function createTeacher(){
    setTimeout(function(){
        layer.open({
            btn: [],
            shade: 0,
            title: "新建教师",
            content: `<form class="layui-form layui-form-pane" action="">
                   <div class="layui-form-item">
                    <label class="layui-form-label">名</label>
                    <div class="layui-input-inline">
                      <input type="text" name="firstName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">姓</label>
                    <div class="layui-input-inline">
                      <input type="text" name="lastName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required>
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">专业</label>
                    <div class="layui-input-inline">
                      <input type="text" name="major" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">简介</label>
                    <div class="layui-input-inline">
                      <input type="text" name="bio" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required>
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">年龄</label>
                    <div class="layui-input-inline">
                      <input type="text" name="age" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">分数</label>
                    <div class="layui-input-inline">
                      <input type="text" name="grade" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required>
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">GPA</label>
                    <div class="layui-input-inline">
                      <input type="text" name="GPA" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">性别</label>
                    <div class="layui-input-inline">
                      <input type="text" name="gender" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required>
                    </div>
                  </div>
 <button type="submit" class="layui-btn layui-btn-normal fr">保存</button>
</form>`
        });
        document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
            e.preventDefault();
            createTeacherPost();
        });
    }, 1000);
}

function createTeacherPost(){
    var form = document.getElementsByTagName("form")[0];
    var inputs = form.getElementsByTagName("input");
    var firstName = inputs[0].value;
    var lastName = inputs[1].value;
    var major = inputs[2].value;
    var bio = inputs[3].value;
    var age = inputs[4].value;
    var grade = inputs[5].value;
    var gpa = inputs[6].value;
    var gender = inputs[7].value;
    $.ajax({
        type: "post",
        url: `http://localhost:8080/teachers`,
        data: {
            "firstName": firstName, "lastName": lastName, "major": major, "bio": bio, "age": age, "grade": grade, "gpa": gpa, "gender": gender
        },
        dataType: "json",
        success: function (data) {
            if (data == 1){
                layer.closeAll();
                layer.msg("教师已创建");
                $('#dg').datagrid('reload');
            }
        },
        error: function (item, err) {
        }
    });
}

function editTeacher(){
    setTimeout(function(){
        layer.open({
            btn: [],
            shade: 0,
            title: "编辑教师",
            content: `<form class="layui-form layui-form-pane" action="">
                   <div class="layui-form-item">
                    <label class="layui-form-label">名</label>
                    <div class="layui-input-inline">
                      <input type="text" name="firstName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required value="${row["firstName"]}">
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">姓</label>
                    <div class="layui-input-inline">
                      <input type="text" name="lastName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required  value="${row["lastName"]}">
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">专业</label>
                    <div class="layui-input-inline">
                      <input type="text" name="major" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required value="${row["major"]}">
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">简介</label>
                    <div class="layui-input-inline">
                      <input type="text" name="bio" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required  value="${row["bio"]}">
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">年龄</label>
                    <div class="layui-input-inline">
                      <input type="text" name="age" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required value="${row["age"]}">
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">分数</label>
                    <div class="layui-input-inline">
                      <input type="text" name="grade" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required  value="${row["grade"]}">
                    </div>
                  </div>
                     <div class="layui-form-item">
                    <label class="layui-form-label">GPA</label>
                    <div class="layui-input-inline">
                      <input type="text" name="GPA" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input" required value="${row["gpa"]}">
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">性别</label>
                    <div class="layui-input-inline">
                      <input type="text" name="gender" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"  required  value="${row["gender"]}">
                    </div>
                  </div>
 <button type="submit" class="layui-btn layui-btn-normal fr">保存</button>
</form>`
        });
        document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
            e.preventDefault();
            editTeacherPost();
        });
    }, 1000);
}

function editTeacherPost(){
    var form = document.getElementsByTagName("form")[0];
    var id = row.teacherId;
    var inputs = form.getElementsByTagName("input");
    var firstName = inputs[0].value;
    var lastName = inputs[1].value;
    var major = inputs[2].value;
    var bio = inputs[3].value;
    var age = inputs[4].value;
    var grade = inputs[5].value;
    var gpa = inputs[6].value;
    var gender = inputs[7].value;
    $.ajax({
        type: "post",
        url: `http://localhost:8080/teachers/${id}`,
        data: {
            "firstName": firstName, "lastName": lastName, "major": major, "bio": bio, "age": age, "grade": grade, "gpa": gpa, "gender": gender
        },
        dataType: "json",
        success: function (data) {
            if (data == 1){
                layer.closeAll();
                layer.msg("教师已编辑");
                $('#dg').datagrid('reload');
            }
        },
        error: function (item, err) {
        }
    });
}

function deleteTeacher() {
    setTimeout(function(){
        layer.open({
        btn: [],
        shade: 0,
        title: "删除教师",
        content: `<div><div class="mb-15 tc">确定删除教师?</div><div class="tr"><button id="buttonDelete" type="submit" class="layui-btn layui-btn-danger">删除</button></div></div>`
        });
        document.getElementById("buttonDelete").addEventListener("click",function(e){
            deleteTeacherPost();
        });
    }, 1000);
}

function deleteTeacherPost() {
    var id = row.teacherId;
    $.ajax({
        type: "get",
        url: `http://localhost:8080/deleteTeacher/${id}`,
        dataType: "json",
        success: function (data) {
            if (data == 1) {
                layer.closeAll();
                layer.msg("教师已删除");
                $('#dg').datagrid('reload');
            }
        },
        error: function (item, err) {
            console.log(err);
        }
    });
}

function searchTeacher(){
    var searchTerm = document.getElementById('inputSearchTeacher').value;
    var searchTermFinal = "";
    if (searchTerm !== ""){
        searchTermFinal = searchTerm;
    }
    $("#dg").datagrid({
        url: `http://localhost:8080/searchTeacher?term=${searchTermFinal}`,
        method: 'get',
        onLoadSuccess: function (data) {
        }
    });

}

function main(){
    $("#dg").datagrid({
        url: `http://localhost:8080/indexPaginated`,
        method: 'get',
        onLoadSuccess: function (data) {
        }
    });
}

main();