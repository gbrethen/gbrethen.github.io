/**
 * Created by gbrethen on 8/3/16.
 */
var xmlDoc;
var xmlhttp;
var file;

function loadPortfolio() {
    file = "xml/portfolio.xml";
    try //Internet Explorer
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;

        xmlDoc.onreadystatechange = function () {
            if (xmlDoc.readyState == 4) displayfeatureIE()
        }

        xmlDoc.load(file);
    }
    catch (e) {
        try //Firefox, Mozilla, Opera, etc.
        {
            xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.async = false;
            xmlDoc.onload = displayfeatureMozilla;
            xmlDoc.load(file);
        }
        catch (e) {
            try //Google Chrome
            {
                xmlhttp = new XMLHttpRequest();

                xmlhttp.open("GET", "xml/portfolio.xml", false);
                xmlhttp.overrideMimeType('text/xml');
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        xmlDoc = xmlhttp.responseXML;
                        displayfeatureMozilla();

                    }
                }
                xmlhttp.send(null)
            }
            catch (e) {
                error = e.message;
            }
        }
    }
}

function displayfeatureIE() {
    var xmlObj = xmlDoc.documentElement;
    var num = xmlObj.childNodes.length;

    var myHTML = "";


    for (x = 0; x < num; x++) {
        myHTML += "<li><a href='#'><img src='/images/" + xmlObj.childNodes(x).childNodes(0).text + "' width='600' height='288' title='" + xmlObj.childNodes(x).childNodes(2).text + "' alt='" + xmlObj.childNodes(x).childNodes(1).text + "' /></a></li>";
    }


    //alert(myHTML);
    document.getElementById('gallery').innerHTML = myHTML;
}

function displayfeatureMozilla() {
    var q = xmlDoc.getElementsByTagName("features");
    var a = q[0].getElementsByTagName("feature");
    var theImage = "";
    var theCaption = "";
    var theHeader = "";

    var num = a.length;

    var myHTML = "";

    for (x = 0; x < num; x++) {
        theImage = a[x].getElementsByTagName("image");
        theCaption = a[x].getElementsByTagName("caption");
        theHeader = a[x].getElementsByTagName("header");

        myHTML += "<li><a href='#'><img src='/images/" + theImage[0].firstChild.nodeValue + "' width='600' height='288' title='" + theHeader[0].firstChild.nodeValue + "' alt='" + theCaption[0].firstChild.nodeValue + "' /></a></li>";

    }

    //alert(myHTML);
    document.getElementById('gallery').innerHTML = myHTML;
}