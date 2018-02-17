/**
 * JavaScript/jQuery form validations that I uses for my projects
 * @author skpaul <me@skpaul.me> 
 * #skpaul82, #js_validation, #form_validation
 */

/**
 * numeric value checkup: mostly uses on mobile number and amy type number validation. 
 * Use as a classs name "numeric-filter"
 * Use Case: <input class="numeric-filter" name="mobile_number" />
 */
$('.numeric-filter').keyup(function() {
    this.value = this.value.replace(/[^\0-9]/ig, ""); 
});

/**
 * remove tags form input fields. Use as a classs name "strip-tags"
 * Use Case: <input class="strip-tags" name="mobile_number" />
 */
//  
$('.strip-tags').keyup(function() {
    this.value = this.value.replace(/<\/?[^>]+(>|$)/g, "")
});



/**
 * print content: Print content within the element (ele)
 * @param  {string} ele   [element/tag ID]
 * @param  {string} title [title]
 * @return {[type]}       [description]
 */
function printContent(ele, title){
    var restorepage = $('body').html();
    var printcontent = $('#' + ele).clone();
    $('body').empty().html(printcontent);
    window.print();
    $('body').html(restorepage);
}


/**
 * Responsive Window popup function: It is auto responsive. pass url, width and height and 
 * it will automatically popup a window at center of the screen
 * @param  {string} url_path [mandatory - content url for popping up]
 * @param  {string} target   [not mandatory- by defult it is _blank]
 * @param  {number} width    [not mandatory - popup window width ]
 * @param  {number} height   [not mandatory - popup window height]
 * @return {[type]}          [description]
 */
function responsiveWindowPopup(url_path, target, width, height) {

    $('.preloader').removeClass('hidden');
    var target = (target)?  target : '_blank' ;
    var w = window.innerWidth;
    var h = window.innerHeight;

    if(w > 768){
        var newWidth = (width)? width : w*0.6;
        var newHeight = (height)? height : h*0.8;
    }else{
        var newWidth = (width)? width : w*0.8;
        var newHeight = (height)? height : h*0.6;
    }

    var top = Math.round((h - newHeight)/2);
    var left = Math.round((w - newWidth)/2);
    $('.preloader').addClass('hidden');

    window.open(url_path, target, "toolbar=no, scrollbars=yes, resizable=yes, top="+top+", left="+left+", width="+newWidth+", height="+newHeight+"");
}// ..end windowPopup()