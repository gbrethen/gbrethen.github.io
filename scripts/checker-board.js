function createCheckerBoard(){
    var iRow = 8;
    var iCol = 8;
                
    var sHtml = "<table id='tblCB' style='margin:0 auto; border-collapse:collapse;box-shadow: 1px 1px 1px #999;'>";
                
    //generate rows
    for(var i = 0; i < iRow; i++){
        sHtml += "<tr style='line-height:5px; height:5px;'>";
                            
        //generate columns
        for(var x = 0; x < iCol; x++){
            if((i%2 == 0 && x%2 != 0) || (i%2 != 0 && x%2 == 0)){
                sHtml += "<td class='dark' style='margin:0;border:1px solid #000;'>&nbsp;</td>";
            }else{
                sHtml += "<td style='margin:0;border:1px solid #000;'>&nbsp;</td>";
                        
            }
        }
        sHtml += "</tr>";
    }
    sHtml += "</table>";
    
    return sHtml;
}