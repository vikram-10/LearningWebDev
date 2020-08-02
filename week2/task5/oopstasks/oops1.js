class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}  
function getPg(movies){                   //assume argument to be object array
    var a=[];              
    for(var i=0;i<movies.length;i++){
        if(movies[i].rating=="PG"){
            a.push(movies[i]);
        }
    }
    console.log(a);
}
var movies=[];
var aaa=new Movie("Billa","Vishalprod","A");
movies.push(aaa);
var bbb=new Movie("Jilla","VJna","PG");
movies.push(bbb);
getPg(movies);
//OP:[ Movie { title: 'Jilla', studio: 'VJna', rating: 'PG' } ]