// BUTTONS

$(document).ready(function(){
    $("#btn1-index").click(function(){
        $("#basics").removeClass('hidden');
        $("#regions").addClass('hidden');
        $("#accessibility").addClass('hidden');
        $("#btn1-span").addClass('underline');
        $("#btn2-span").removeClass('underline');
        $("#btn3-span").removeClass('underline');
    });
    $("#btn2-index").click(function(){
        $("#basics").addClass('hidden');
        $("#regions").removeClass('hidden');
        $("#accessibility").addClass('hidden');
        $("#btn1-span").removeClass('underline');
        $("#btn2-span").addClass('underline');
        $("#btn3-span").removeClass('underline');
    });
    $("#btn3-index").click(function(){
        $("#basics").addClass('hidden');
        $("#regions").addClass('hidden');
        $("#accessibility").removeClass('hidden');
        $("#btn1-span").removeClass('underline');
        $("#btn2-span").removeClass('underline');
        $("#btn3-span").addClass('underline');
    });
});