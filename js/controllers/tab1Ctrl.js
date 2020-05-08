define(["./module", "jquery", "jqgrid"], function(controllers, $){
    controllers.controller("controllerTab1", ["$scope", function ($scope) {
        $scope.title = "something about food";
        $("#list").jqGrid({
            datatype : "local",
            height : 250,
            colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ],
            colModel : [
                {name : 'id',index : 'id',width : 60,sorttype : "int"},
                {name : 'invdate',index : 'invdate',width : 90,sorttype : "date"},
                {name : 'name',index : 'name',width : 100},
                {name : 'amount',index : 'amount',width : 80,align : "right",sorttype : "float"},
                {name : 'tax',index : 'tax',width : 80,align : "right",sorttype : "float"},
                {name : 'total',index : 'total',width : 80,align : "right",sorttype : "float"},
                {name : 'note',index : 'note',width : 150,sortable : false}
            ],
            multiselect : true,
            multiSort: true
        });
        var mydata = [
            {id : "1",client:"client1",invdate : "2007-10-01",name : "test",note : "note",amount : "200.00",tax : "10.00",total : "210.00"},
            {id : "2",client:"client1",invdate : "2007-10-02",name : "test2",note : "note2",amount : "300.00",tax : "20.00",total : "320.00"},
            {id : "3",client:"client1",invdate : "2007-09-01",name : "test3",note : "note3",amount : "400.00",tax : "30.00",total : "430.00"},
            {id : "4",client:"client1",invdate : "2007-10-04",name : "test",note : "note",amount : "200.00",tax : "10.00",total : "210.00"},
            {id : "5",client:"client1",invdate : "2007-10-05",name : "test2",note : "note2",amount : "300.00",tax : "20.00",total : "320.00"},
            {id : "6",client:"client1",invdate : "2007-09-06",name : "test3",note : "note3",amount : "400.00",tax : "30.00",total : "430.00"},
            {id : "7",client:"client1",invdate : "2007-10-04",name : "test",note : "note",amount : "200.00",tax : "10.00",total : "210.00"},
            {id : "8",client:"client1",invdate : "2007-10-03",name : "test2",note : "note2",amount : "300.00",tax : "20.00",total : "320.00"},
            {id : "9",client:"client1",invdate : "2007-09-01",name : "test3",note : "note3",amount : "400.00",tax : "30.00",total : "430.00"}
        ];
        for ( var i = 0; i <= mydata.length; i++){
            $("#list").jqGrid('addRowData', i + 1, mydata[i]);
        }

        $("#list").jqGrid('navGrid', '#pager', {edit : false,add : false,del : false});

        $("#hc").click(function() {
            jQuery("#list").jqGrid( 'hideCol', "tax");
        });
        $("#sc").click(function() {
            jQuery("#list").jqGrid( 'showCol', "tax");
        });
    }])
});