angular.module("ContactsApp")
    .filter("labelCase", function(){
        var headerReplace = function(input){
            input = input.replace(/([A-Z])/g, ' $1');

            return input[0].toUpperCase() + input.slice(1);
        };

        return headerReplace;
    });