History of the HTTP:
<ul>
<li>1991-HTTP 0.9
      GET POST and HEAD were supported,was used for very basic hyperlinked websites.</li>
<li>1996-HTTP 1.0
      PUT,DELETE,LINK and UNLINK were supported</li>
<li>1997-HTTP 1.1
      Came within just one year due to internet revolution as heavy dynamic websites started popping up. Cross Origin Resource Sharing(sharing of documents across domains)
      Flaws with HTTP1.1:
      <ul>
        <li>->HOL: Head Of Line Blocking
              Earlier 1 TCP connection was used for exchange of data, now 6 TCP is used</li>
        <li>->Repetition of Header Data
                Each header carries some data such as cookie,user agent etc. It is sent with every req and cannot be compressed also</li>
        <li>->More focus on gzip,minifying CSS/JS etc.
Earilier TCP connections were dynamic and used to get destroyedf once the connection was over, but after Keep-Alive, the TCP connections could be Reused.</li></ul></li>   
        
<li>2012-SPDY/2</li>
      
<li>2015-HTTP 2.0
      In HTTP 2.0 a single TCP connection is used in which there are multiple streams present inside it for different requests. HTTPS is mandatory for HTTP2.0
      HTTP 2.0 allows compression of Header Data also HPACK is used to automatically detect and cache repetitive header data.</li>
 </ul>     
      
      HTTP 2.0 is built on top of HTTP 1.1, hence, no clients are lost. 

