var h1=document.createElement('h1');
h1.setAttribute('id','timer');

setTimeout(function(){ 
    setTimeout(function(){
        setTimeout(function(){
             setTimeout(function(){
                  setTimeout(function(){
                      setTimeout(function(){
                          setTimeout(function(){
                              setTimeout(function(){
                                  setTimeout(function(){
                                      setTimeout(function(){
                                         setTimeout(function(){
                                            h1.innerText="HAPPY INDEPENDENCE DAYYY!";
                                         });
                                         h1.innerText="1";
                                      },1000)
                                      h1.innerText="2";
                                  },1000)
                                  h1.innerText="3";
                              },1000)
                              h1.innerText="4";
                          },1000)
                          h1.innerText="5";
                      },1000)
                      h1.innerText="6";
                  },1000);
                  h1.innerText="7";
             },1000);
             h1.innerText="8";
        },1000);
        h1.innerText="9";
    },1000);
    h1.innerText="10";
}, 1000);


document.body.append(h1);