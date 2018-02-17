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