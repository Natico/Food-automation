/* Nasser Amjadian
این قطعه کد برای انتخاب غذای شرکت ستاره جهان گستر نوشته شده 
جهت سهولت در انتخاب غذا و حذف کلیک های اضافه
1 - به علت پراکندگی دانشی و شغلی بین استفاده کنندگان ، زیان کامنت نویسی فارسی انتخاب شده 
2 - سعی شده هر خط کد توضیح داده شود تا در صورت نیاز شخصی سازی شود
3 - کد در گیت قرار داده می شود جهت گسترش و شخصی سازی
4 - این قطعه کد تخت هیچ لایسنسی نمی باشد :)
5 - انتخاب اشتباه و استفاده ناصحیح از این قطعه کد هیچگونه مسئولیتی را به دوش برنامه نویس نمی اندازد ، پس بعد از استفاده حتما منو های غذا را چک فرمایید .
6 - پیگیری جهت رفع باگ یا گسترش این قطعه کد ، فقط از طریق آدرس گیت زیر صورت خواهد پذیرفت 

git : https://github.com/Natico/Food-automation.git
*/

var tabsReserve = $('.nav-tabs-reserve >.tab-content >.tab-pane'); //این خط 
var onlySalad = true;


tabsReserve.each(function(index, item, list) {

    if (index < 1) {
        var boxs = $(item).find('.box');

        boxs.each(function(index, box, list) {
            var typeVal = null;
            var foodVal = null;
            var selfVal = "number:3"

            switch (index) {
            case 0:
                typeVal = "number:1";
                //foodVal = "number:45";
                break;
            case 1:
                typeVal = "number:3";
                foodVal = "number:43";
                break;
            case 2:
                typeVal = "number:2";
                foodVal = "number:45";
                break;
            }

            console.log(typeVal, foodVal, selfVal)

            if (index == 0) {
                debugger;
                let selectedOtionIndex = 1
                if(onlySalad){
                    selectedOtionIndex = $(box).find('select#selectFood')[0].options.length - 1;
                }
                
                $(box).find('select#selectFood')[0].selectedIndex = selectedOtionIndex;
                $(box).find('select#selectFood').change();

            } else {

                $(box).find('select#selectFoodType').val(typeVal).change();
                $(box).find('select#selectFood').val(foodVal);
            }

            $(box).find('select#selectSelf').val(selfVal);

        })
    }

})

