function execute(url) {
    let response = fetch(url);
    let doc = response.html();

    let contentElement = doc.select(".txtnav");
    
   
    contentElement.select("h1").remove();       
    contentElement.select(".txtinfo").remove();   
    contentElement.select("#txtright").remove();  
    contentElement.select(".contentadv").remove(); 
    contentElement.select(".bottom-ad").remove();  
    

    let htmlContent = contentElement.html();
    
  
    return Response.success(htmlContent);
}
