Vue.component('table-grid',{
    template:'#grid-template',
    props:{
        data:Array,
        columns:Array,
        filterKey:String
    },
    data:function () {
        var sortOrders = {};
        this.columns.forEach(function(key){
            sortOrders[key] = 1; // {name:1,power:1}
        });
        return {
            sortKey:'',
            sortOrders:sortOrders
        }
    },
    computed:{
        filteredData:function(){
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if(sortKey){
                    data =  data.sort(function (a,b) {  
                    nameA = a[sortKey];
                    nameB = b[sortKey];
                    return ( nameA === nameB ? 0 : nameA < nameB ? 1 : -1) * order;
                });
            }
            if(filterKey){
                data = data.filter(function(row){
                    return Object.keys(row).some(function(key){
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1 ;
                    });
                });
            }
            return data;
        }
    },
    filters:{
        capitalize:function(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods:{
        sortBy:function(key){
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            console.log(this.sortOrders);
        }
    }
});

var demo = new Vue({
    el:'#demo',
    data:{
        searchQuery:'',
        gridColumns:['name','power'],
        gridData:[
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
        ]
    }
});